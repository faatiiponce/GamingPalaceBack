const productsDB = require("./productsController");
const { Products, User, Productinchart, Cart} = require("../db");
const { Sequelize, ARRAY } = require('sequelize');

async function changeproduct2 (idproduct, productname, namedisplay, price, imageurl, trademark, category, description, disabled, stock){
console.log("ENTRANDO A FUNCION CAMBIAR_PRODUCT EN CONTROLLER")
    console.log("LAS VARIABLES SON")
    console.log(idproduct)
    console.log(productname)
    //ACTUALIZAR EL PRODUCTO
    Products.update({
        name: productname, 
        namedisplay: namedisplay,
        price: price,
        imageurl: imageurl,
        trademark: trademark,
        description: description,
        category: category,
        stock: stock,
        disabled: disabled
    }, {
        where: {
            id: idproduct,
           
        }
    }).then(
         (x) => {return x}
         )



}

    
module.exports = {
    changeproduct2
   };