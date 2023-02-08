const { Router } = require("express");
const mercadopago = require("mercadopago");
const router = Router();
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

router.post("/", (req, res) => {
  const prod = req.body;
  let preference = {
    items: [
      {
        title: prod.title,
        currency_id: "USD",
        quantity: prod.quantity,
        price: prod.price,
        unit_price: prod.price,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/home",
      failure: "http://localhost:3000/home",
      pending: "http://localhost:3000/home",
    },
    auto_return: "approved",
    binary_mode: true, //no permite un pending, pending sería pago en efectivo, ejemplo rapipago.
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(201).send({ response }))
    .catch((error) => res.status(400).send({ error: error }));
});

router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;
