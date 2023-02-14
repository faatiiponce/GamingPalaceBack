const { Products, Review } = require("../db");
const products = require("../utils/loadDB");
const cloudinary = require("../utils/cloudinary");

const getProducts = async () => {
  const allProducts = await Products.count();
  if (allProducts < 1) {
    let obj = {};
    let filter = products.map((product) => {
      obj = {
        id: product.id,
        name: product.name.toLowerCase(),
        namedisplay: product.name,
        price: product.price,
        imageurl: product.imageurl,
        category: product.category,
        trademark: product.trademark,
        description: product.description,
      };
      return obj;
    });

    await Products.bulkCreate(filter);
  }
};

const productsDB = async () => {
  const allProducts = await Products.findAll();
  if (!allProducts.length) {
    let obj = {};
    let filter = products.map((product) => {
      obj = {
        id: product.id,
        name: product.name.toLowerCase(),
        namedisplay: product.name,
        price: product.price,
        imageurl: product.imageurl,
        category: product.category,
        trademark: product.trademark,
        description: product.description,
      };
      return obj;
    });
    return await Products.bulkCreate(filter);
  } else {
    const productsEnable = await Products.findAll({
      where: {
        disabled: false,
      },
      include: { all: true, nested: true },
    });
    return productsEnable;
  }
};

const postNewProduct = async (objProduct) => {
  try {
    let { name, price, imageurl, category, trademark, description } =
      objProduct;
    let cuenta = await Products.count();
    cuenta++;
    id = cuenta;

    namedisplay = name;
    name = name.toLowerCase();

    const result = await cloudinary.uploader.upload(imageurl, {
      folder: "productsGaming",
    });

    const product = {
      id,
      name,
      namedisplay,
      price,
      imageurl: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      category,
      trademark,
      description,
    };

    const newProduct = await Products.create(product);
    return newProduct;
  } catch (error) {
    console.log("Error in postNewProduct", error);
  }
};

module.exports = {
  getProducts,
  productsDB,
  postNewProduct,
};
