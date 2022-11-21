const express = require('express')
const fs=require('fs')
const bp=require('body-parser')

const app = express();
app.use(bp.json())
const port = process.env.PORT || 5000;

app.post('/student/add', (req,res)=>{
  fs.writeFileSync("./student.json", (JSON.stringify(req.body)))
  res.status(200).send(JSON.stringify({"result": "success"}))
})

app.get('/student/getDetails', (req,res)=>{
    const details=fs.readFileSync("./student.json", "utf-8")
    res.status(200).send(details)
})

app.get("/studentList", (req,res)=>[
    res.status(200).send("notes from api")
   
])

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});