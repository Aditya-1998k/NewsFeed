const mongoose=require("mongoose");

const newsSchema=mongoose.Schema({
    author:String,
    heading:String,
    news:String,
    type:String,
    date:String,
    image:String
})

const newsModal=mongoose.model("newsfeed", newsSchema);
module.exports=newsModal;