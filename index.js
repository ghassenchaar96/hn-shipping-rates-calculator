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
  console.log(req.body.rate?.items);

  let rates = [
    {
      service_name: "HN shipping rate - Standard",
      description: "",
      service_code: "HN shipping rates",
      currency: "EUR",
      total_price: "0",
    },
  ];

  const items = req.body?.rate?.items;
  items.map((item) => {
    if (item.properties && typeof item.properties._zapietId === "string") {
      console.log("YES ZAPIET ID FOUND");
      if (item.properties._zapietId.includes("M=L")) {
        console.log("LOCAL DELIVERY DETECTED");
        rates = [
          {
            service_name: "HN shipping rate - Livraison à domicile",
            description: "",
            service_code: "HN shipping rates",
            currency: "EUR",
            total_price: "500",
          },
        ];
      } else if (item.properties._zapietId.includes("M=P")) {
        console.log("PICKUP DETECTED");
        rates = [
          {
            service_name: "HN shipping rate - Livraison en point relais",
            description: "",
            service_code: "HN shipping rates",
            currency: "EUR",
            total_price: "0",
          },
        ];
        res.json({
          rates,
        });
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
