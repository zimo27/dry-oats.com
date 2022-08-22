require('dotenv').config();

const express = require("express")
const mongo = require("mongodb").MongoClient
const app = express()
const cors = require("cors")

app.use(cors({
	origin: 'https://reporting.dry-oats.com',
}))

const ObjectId = require("mongodb").ObjectID;
app.listen(3000, () => console.log("Server ready"))
const url = "mongodb://127.0.0.1:27017"     
app.use(express.json())


const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})





let db, static, perf, acti

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("hw2data")
    //static data
    static = db.collection("static")        
    //performance data
    perf = db.collection("perf")
    //acticity data
    acti = db.collection("acti")
  }
)
//console.log(static)

app.post("/static", (req, res) => {
    	res.setHeader('Access-Control-Allow-Origin', '*');
	static.insertOne(
    {
        agent_string: req.body.agent_string,
        language: req.body.language,
        cookie_en: req.body.cookie_en,
        js_en: req.body.js_en,
        image_en: req.body.image_en,
        css_en: req.body.css_en,
        screen_w: req.body.screen_w,
        screen_h: req.body.screen_h,
        win_w: req.body.win_w,
        win_h: req.body.win_h,
        network: req.body.network,
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ ok: true })
    }
    )
})

//get by id
//not working
app.get("/static/:id", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');    
static.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

//get all
app.get("/static", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');    
static.find().toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json( items )
    })
  })
  
  //put
  /*app.put("/static/:id", (req, res) => {
      static.find({ id: req.body.id }).toArray((err, items) => {
        if (err) {
          console.error(err)
          res.status(500).json({ err: err })
          return
        }
        static.update({ _id : id} , { $set: { 
          agent_string: req.body.agent_string,
          language: req.body.language,
          cookie_en: req.body.cookie_en,
          js_en: req.body.js_en,
          image_en: req.body.image_en,
          css_en: req.body.css_en,
          screen_w: req.body.screen_w,
          screen_h: req.body.screen_h,
          win_w: req.body.win_w,
          win_h: req.body.win_h,
          network: req.body.network} }, { multi: true } )
    })
  })
  */
app.put("/static/:id", (req, res) => {
    static.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        static.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
})

  //delete
app.delete('/static/:id', (req,res) => {
    static.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
})




app.post("/perf", (req, res) => {
    perf.insertOne(
    {
        t_object : req.body.t_object,
        t_start : req.body.t_start,
        t_end : req.body.t_end,
        total_time : req.body.total_time,
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ ok: true })
    }
    )
})

//get by id
//not working
app.get("/perf/:id", (req, res) => {
    perf.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

//get all
app.get("/perf", (req, res) => {
    perf.find().toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ perf: items })
    })
  })
  

app.put("/perf/:id", (req, res) => {
    perf.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        perf.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
})

  //delete
app.delete('/perf/:id', (req,res) => {
    perf.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
})





//acti

app.post("/acti", (req, res) => {
    acti.insertOne(
    {
        //not sure
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ ok: true })
    }
    )
})

//get by id
//not working
app.get("/acti/:id", (req, res) => {
    acti.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

//get all
app.get("/acti", (req, res) => {
    acti.find().toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ acti: items })
    })
  })
  

app.put("/acti/:id", (req, res) => {
    acti.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        acti.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
})

  //delete
app.delete('/acti/:id', (req,res) => {
    acti.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
})
