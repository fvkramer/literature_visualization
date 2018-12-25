const app = require("express")();
const http = require("http").Server(app);
const rp = require('request-promise');
const url = "https://en.wikipedia.org/wiki/President_of_the_United_States";
const url2 = "asdfadsfadsf";

app.get("/", (req, res) => {
  rp(url)
    .then(html => res.send(html))
    .catch(err => {
      console.log(err)
      res.send("Invalid URL")
    })
})

http.listen(3000, () => console.log("listening on port 3000"));
