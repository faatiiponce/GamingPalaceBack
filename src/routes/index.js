const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products");

const tryfunction2 = require("./function2");

const categories = require("./categories");
const mercadopago = require("./mercadopago");
const trademark = require("./trademark");
const review = require("./review");
const postchart = require("./postchart");

const nodemailer = require("./nodemailer");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/postchart", postchart);
router.use("/nmailer", nodemailer);
router.use("/function2", tryfunction2);

router.use("/categories", categories);
router.use("/products", products);
//router.use("/function", tryfunction);

router.use("/trademark", trademark);

router.use("/payment", mercadopago);
router.use("/review", review);

module.exports = router;
