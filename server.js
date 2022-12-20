const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const data = require("./Mock-data/data.json");

app.use(bodyParser());

app.get("/data",(req,res)=>{
    res.status(200).json({data})
})
app.get("*",(req,res)=>{
    res.send("NO DATA")
})

app.listen(3004,()=>console.log("server is running at 3004"));
