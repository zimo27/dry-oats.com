//Static
let activity = {};
//user agent string
let agent = navigator.userAgent;
//language
let lang = navigator.language;
//cookie enable
let c_en = navigator.cookieEnabled;
//js enable
let j_en = true;

//console.log(agent)

//image enable
//https://stackoverflow.com/questions/31740637/detect-if-browser-disables-images
//https://www.456bereastreet.com/archive/201211/using_javascript_to_check_if_images_are_enabled/
var image = new Image();
let img_en = true;
image.onload = function() {
    if (image.width > 0) {
        img_en = true;
    } else {
        img_en = false;
    }
};
image.src = 'images/favicon.ico';
// need to add an image for manual test

/*
//css enable
//https://www.sitepoint.com/community/t/how-to-detect-whether-css-enabled-or-not-using-javascript/4597/11
var cssdisabled = false; // must be proven otherwise
var testcss = document.createElement('div');
testcss.style.position = 'absolute';
document.getElementsByTagName('body')[0].appendChild(testcss);
if (testcss.currentStyle) var currstyle = testcss.currentStyle['position'];
else if (window.getComputedStyle) var currstyle = document.defaultView.getComputedStyle(testcss, null).getPropertyValue('position');
var cssdisabled = (currstyle == 'static') ? true : false;
document.getElementsByTagName('body')[0].removeChild(testcss);
*/ 

//window
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// Get the size of the device screen
var screenWidth = screen.width;
var screenHeight = screen.height;

//This network type will be one of following values : 
//bluetooth, cellular, ethernet, none, wifi, wimax, other and unknown.
var type = navigator. connection. type;


//send static data to api/stactic 
fetch("https://dry-oats.com/api/static", {
    // Adding method type
    method: "POST",
    mode: 'cors', 
    // Adding body or contents to send
    body: JSON.stringify({
        agent_string: agent,
        language: lang,
        cookie_en: c_en,
        js_en: j_en,
        image_en: img_en,
        css_en: true,
        screen_w: screenWidth,
        screen_h: screenHeight,
        win_w: width,
        win_h: height,
        network: type
    }),   
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
//.then(response => response.json())
// Displaying results to console
.then(response => console.log(response.json()));



//Performance

//timing
//timing object
//start/end time
//total time
var t = performance.timing;
var t_end1;
var t_start1;
var t_total;
window.onload = function(){
  setTimeout(function(){
    t = performance.timing;
    t_end1 = t.loadEventEnd;
    t_start1 = t.responseEnd;
    t_total = t_end1 - t_start1;
    console.log(t_total);
    fetch("https://dry-oats.com/api/perf", {
    // Adding method type
    method: "POST",
    mode: 'cors', 
    // Adding body or contents to send
    body: JSON.stringify({
        t_object: t,
        t_start: t_start1,
        t_end: t_end1,
        total_time: t_total
    }),   
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(response => console.log(response.json()));
    //console.log(t.loadEventEnd - t.responseEnd);
  }, 0);
}

/*
console.log(t_total);
fetch("https://dry-oats.com/api/perf", {
    // Adding method type
    method: "POST",
    mode: 'cors', 
    // Adding body or contents to send
    body: JSON.stringify({
        t_object: t,
        t_start: t_start1,
        t_end: t_end1,
        total_time: t_total
    }),   
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
//.then(response => response.json())
// Displaying results to console
.then(response => console.log(response.json()));
*/






//Activity

const buttons = []; //
const page = []; //
const t_l = [];
const t_s = [];
const key = []; //
const scroll = []; //
//cursor pos
//https://www.dev-notes.com/blog/2008/07/30/get-current-mouse-cursor-position-with-javascript/
/*if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;

function getCursorXY(e) {
	document.getElementById('cursorX').value = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	document.getElementById('cursorY').value = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}*/

//clicks
/*function printMousePos(event) {
    document.body.textContent =
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY;
  }
  
  document.addEventListener("click", printMousePos);
*/

//button
window.addEventListener('click', (event) => {
    buttons.push(event.button)
})

//keys
function keyD(event) {
	key.push("key down");
}
function keyU(event) {
        key.push("key up");
}
document.addEventListener('keydown', keyD);
document.addEventListener('keyup', keyU);

//scroll pos
function scrollPos(event) {
	scroll.push(document.documentElement.scrollTop);
}
document.addEventListener('scroll', scrollPos);






var seconds;


document.addEventListener('mousemove', (e) => {
  activity.mousemove = true;
  activity.cursorX = e.clientX;
  activity.cursorY = e.clientY;
  resetTimer();
});

document.addEventListener('click', (e) => {
  activity.click = true;
  activity.clickButton = e.button;
  resetTimer();
});
  
document.addEventListener('scroll', (e) => {
  activity.scrolling = true;
  activity.scrollX = window.pageXOffset;
  activity.scrollY = window.pageYOffset;
  resetTimer();
});

document.addEventListener('keyup', function(e) {
  activity.keyUp = true;
  resetTimer();
});
  
document.addEventListener('keydown', function(e) {
  activity.keyDown = true;
  resetTimer();
});

function startIdleTimer() {
  seconds++;
}

function resetTimer() {
  if(seconds > 2) {
    activity.idleTime = seconds*1000;
    let currentDate = new Date();
    activity.breakEnd = currentDate.toLocaleString();
    sendActivity();
  }
  clearInterval(timer);
  seconds = 0;
  timer = setInterval(startIdleTimer, 1000);
  
}

document.addEventListener('visibilitychange', event => {
  if(document.visibilityState == "visible") {
    activity.userEnter = true;
    activity.page = window.document.location.href;
  } else {
    activity.userExit = true;
  }
});

function sendActivity() {
  print("Activity: ");
  print(activity);
  fetch("https://dry-oats.com/api/acti", {
    method: "POST",
    mode: 'cors',
    headers:{
      'Accept': 'application/json',
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(
	activity
	
   )
  });
}

sendActivity();
//t_l
/*
function leaveTime(event) {
	t_l.push();
}
*/

//cur page
/*
function pageOn(event) {
	page.push(document.URL);
}
document.addEventListener('popstate',pageOn);

fetch("https://dry-oats.com/api/acti", {
    // Adding method type
    method: "POST",
    mode: 'cors', 
    // Adding body or contents to send
    body: JSON.stringify({
	button : buttons,
        scroll_pos : scroll,
        keyboard: key,
        pages : page
    }),   
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
    }
})
*/
//.then(response => console.log(response.json()));
