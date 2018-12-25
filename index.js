const app = require("express")();
const http = require("http").Server(app);
const rp = require('request-promise');
const url = "https://en.wikipedia.org/wiki/President_of_the_United_States";

app.get("/", (req, res) => res.send("<h1>Hello world!</h1>"));

http.listen(3000, () => console.log("listening on port 3000"));
