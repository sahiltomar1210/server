const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const data = require("./Mock-data/data.json");


app.get("/",(req,res)=>{
    res.status(200).json({data})
})

app.listen(3004,()=>console.log("server is running at 3004"));
