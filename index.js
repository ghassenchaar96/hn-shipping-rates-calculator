var express = require("express");
const bp = require("body-parser");
var app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
  console.log("Hello Worldddd!");

  res.send({ test: "hello" });
});

app.post("/", function (req, res) {
  console.log("received a req");
  console.log(req.body);

  res.json({
    rates: [
      {
        service_name: "HN shipping rate proovider",
        description: "",
        service_code: "HN shipping rates",
        currency: "EUR",
        total_price: "500",
      },
    ],
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
