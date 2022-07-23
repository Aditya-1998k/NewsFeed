const { urlencoded } = require("express");
const express=require("express");
const mongoose=require("mongoose");
const newController=require("./user/routes/newsroutes");
const multer=require("multer")();
const app=express();
const cors=require("cors")

app.listen(3001, (req, res)=>{
    console.log("server created successfully");
 })

//connection with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/newsfeed", (req, res)=>{
        console.log("connected with database with name newsfeed")
});

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to newFeed backend")
});

//setting middleware
app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(multer.array());
app.use(cors())

app.use("/news", newController)