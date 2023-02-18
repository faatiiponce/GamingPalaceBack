const { Router } = require("express");
const { newReview, addReview } = require("../controllers/reviewController");
const router = Router();
const { registerpurchase } = require("../controllers/Statistics")
const { returnbydate } = require("../controllers/Statistics")

router.post("/getbymonth", async (req, res) => {
    console.log("ENTRANDO A getbymonth EN ROUTES")
    const {month, year} = req.body
  try {
    let response
    returnbydate(year, month)
    .then((x) => {
        console.log("X ES...")
        console.log(x)
        response = x
        res.status(200).send(response)
    })
  } catch (error) {
    res.status(404).send(error.message)
  }
});

router.post("/register", async (req, res) => {
    console.log("ENTRANDO A registerpurchase EN CONTROLLERS")
    let userid = req.body.userid
  try {
    
    let response = await registerpurchase(userid)
    res.status(200).send("Purchase registered")
  } catch (error) {
    res.status(404).send(error.message)
  }
});






module.exports = router;