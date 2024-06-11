import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data = new Array();
app.get("/", (req, res) => {
  res.render("index.ejs", data);
});

app.post("/submit-blog", (req, res) => {
  data.push(req.body);
  console.log(data[0]);
  res.redirect("/");
});
app.listen(port, () => {
  console.log("Server running on port" + port);
});
