const express = require('express')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 5000;

app.get("/student/studentLists", (req, res) => {
    const data = fs.readFileSync("./Data/users.json", "utf-8")
    res.status(200)
    res.send(data)
})

app.all('*', (req, res) => {
  res.status(404)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});