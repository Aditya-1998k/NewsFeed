const express= require("express");
const mongoose = require("mongoose");
const newsModal=require("../modal/newModal");

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("finally set")
});

router.post("/add", (req, res)=>{
    newsModal.create({author:req.body.author, heading:req.body.heading, news:req.body.news, type:req.body.type,date:new Date(), image:req.body.image}).then((data)=>{
        console.log(data);
        res.status(200).send("data created successfully");
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

router.get("/add", (req,res)=>{
    newsModal.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

module.exports=router;