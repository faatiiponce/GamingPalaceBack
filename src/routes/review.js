const { Router } = require("express");
const { newReview } = require("../controllers/reviewController");
const router = Router();

router.post("/", async (req, res) => {
  try {
    let postReview = await newReview(req.body);
    res.status(201).send(postReview);
  } catch (error) {
    res.status(404).send("Error");
  }
});

module.exports = router;
