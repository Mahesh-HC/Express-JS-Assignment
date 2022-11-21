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
  res.send("page not found")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

/*
For Heroku => Link: https://murmuring-crag-12803.herokuapp.com/
in package.json add 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }

  steps for heroku :
  1. heroku login => opens login page(login)
  2. git init
  3. git add . 
  4. git commit -m "comment"
  5. heroku create (app name is optional u can provide or automatically assigned)
  6. git push heroku master 
  to change the repository go to the heroku website, select the repository to be added and click and go to deploy and follow the steps provided.
  ex => heroku git:remote -a murmuring-crag-12803, and then continue.
*/