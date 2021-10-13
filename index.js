var express = require("express");
var app = express();

app.get("/", async function (req, res) {
  console.log("Hello Worldddd!");

  res.send({ test: "hello" });
});

app.post("/", function (req, res) {
  console.log("received a req");
  console.log({ requestBody: req.body });

  res.send({
    service_name: "HN shipping rate proovider",
    description: "",
    service_code: "HN shipping rates",
    currency: "€",
    total_price: 500,
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
