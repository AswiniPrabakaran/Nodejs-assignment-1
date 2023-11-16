const express=require("express");
const app=express();
const path=require("path");

app.get("/i",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/s",(req,res)=>{
    res.sendFile(path.join(__dirname,"self.html"));
})
app.get("/o",(req,res)=>{
    res.sendFile(path.join(__dirname,"organise.html"));
})
app.listen(2345,()=>{
    console.log("server running");
})