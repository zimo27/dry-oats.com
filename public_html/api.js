const express = require('express');
const router = express.Router();
const Static = require('../models/static');

// get a list of static from the database
router.get('/static',function(req,res,next){
    Static.find({}).then(function(static){
        res.send(static);
    }).catch(next);
});

// add a new static to database
router.post('/static',function(req,res,next){
    Static.create(req.body).then(function(static){
        res.send(static);
    }).catch(next);
});

// update a static in the database
router.put('/static/:id',function(req,res,next){
    Static.findOneAndUpdate({_id: req.params.id},req.body).then(function(static){
        Static.findOne({_id: req.params.id}).then(function(static){
            res.send(static);
        });
    });
});

// delete a static in the database
router.delete('/static/:id',function(req,res,next){
    Static.findOneAndDelete({_id: req.params.id}).then(function(static){
        res.send(static);
    });
});

module.exports = router;
