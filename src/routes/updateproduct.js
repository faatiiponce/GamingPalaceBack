const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
const { updateproduct } = require('../controllers/cart')

router.post('/', async (req, res) => {
    console.log("ENTRANDO A ROUTER.POST UPDATE_PRODUCT")
    console.log("body es...")
    console.log(req.body)
    const {userid, idproduct, quantity} = req.body
    try {
        let response = await updateproduct(userid, idproduct, quantity)
        res.status(201).send(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


module.exports = router;