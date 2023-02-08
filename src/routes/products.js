const { Router } = require("express");
const router = Router();
const {
  productsDB,
  postNewProduct,
} = require("../controllers/productsController");

router.get("/", async (req, res) => {
  try {
    {
      let allProducts = await productsDB();
      res.status(201).send(allProducts);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const infoID = await productsDB();
    if (id) {
      const productID = infoID.find((product) => product.id == id);
      productID
        ? res.status(200).json(productID)
        : res.status(404).json("Not found product detail");
    }
  } catch (error) {
    res.status(404).json("Error in route getID Product", error);
  }
});

router.post("/", async (req, res) => {
  const objProduct = req.body;
  console.log(objProduct);
  try {
    const postProduct = await postNewProduct(objProduct);
    res.status(201).json(postProduct);
  } catch (error) {
    res.status(404).json(`Error in route post Product ${error}`);
  }
});

module.exports = router;
