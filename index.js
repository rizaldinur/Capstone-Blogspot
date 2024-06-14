import express from "express";
import bodyParser from "body-parser";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const app = express();
const port = 3000;
// const { document } = new JSDOM(req.body).window;
// console.log(document);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];

app.get("/", (req, res) => {
  // console.log(data);

  if (data.length === 0) {
    res.render("index.ejs");
  } else {
    res.render("index.ejs", { blog: data });
  }
});

app.post("/submit-blog", (req, res) => {
  data.push(req.body);
  console.log(data);
  res.redirect("/");
});

app.post("/update-blog", (req, res) => {});

app.post("/delete", (req, res) => {
  const index = Number(req.body.btnDel);
  data.splice(index, 1);
  console.log(data);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server running on port" + port);
});
