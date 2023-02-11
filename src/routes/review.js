const { Router } = require("express");
const { newReview, addReview } = require("../controllers/reviewController");
const router = Router();

router.post("/", async (req, res) => {
  try {
    let postReview = await newReview(req.body);
    res.status(201).send(postReview);
  } catch (error) {
    res.status(404).send("Error");
  }
});

// router.get("/", async (req, res) => {
//   const { idreview, idproduct } = req.body;
//   try {
//     let review = await addReview(idproduct, idreview);
//     res.status(201).send(review);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

module.exports = router;
