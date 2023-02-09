const productsDB = require("./productsController");
const { Products, User, Productinchart, Cart} = require("../db");
const { Sequelize, ARRAY } = require('sequelize');

async function deleteallproducts (userid) {
    console.log("ENTRANDO A FUNCION DELETE_ALL EN CONTROLLER")
    console.log("LAS VARIABLES SON")
    console.log(userid)
   
    //BORRAR TODOS LOS PRODUCTINCHART DE UN CARRITO
    let res = await Productinchart.destroy({
        where: {
            
            CartId: userid
        }
    })
}
async function deleteproduct (userid, idproduct, quantity) {
    console.log("ENTRANDO A FUNCION DELETE EN CONTROLLER")
    console.log("LAS VARIABLES SON")
    console.log(userid)
    console.log(idproduct)
    console.log(quantity)
    //ELIMINAR EL PRODUCTO
    let res = await Productinchart.destroy({
            where: {
                id: idproduct,
                CartId: userid
            }
        })
}

async function updateproduct (userid, idproduct, quantity) {
    console.log("ENTRANDO A FUNCION UPDATE EN CONTROLLER")
    console.log("LAS VARIABLES SON")
    console.log(userid)
    console.log(idproduct)
    console.log(quantity)
    //ACTUALIZAR EL PRODUCTO
    let response = await Productinchart.update({quantity: quantity}, {
        where: {
            id: idproduct,
            CartId: userid
        }
    })
    
}
async function addproduct (userid, idproduct, quantity) {
    console.log("ENTRANDO A FUNCION ADDPRODUCT EN CONTROLLER")
    console.log("LAS VARIABLES SON")
    console.log(userid)
    console.log(idproduct)
    console.log(quantity)
    //CREAR UN PRODUCT IN CHART
    let newid = await Productinchart.count()
    newid++
    let newproduct = await Productinchart.create({
        id: newid,
        idproduct: idproduct,
        quantity: quantity
    })
    //VINCULAR PRODUCT IN CHART AL USER
    let user = await Cart.findByPk(userid) //TRAIGO AL USER PARA TENERLO EN UNA VARIABLE USABLE
    let vinculation = await user.addProductinchart(newproduct) //VINCULO O AGREGO UN PRODUCT CHART AL USUARIO
    console.log(await user.getProductincharts())
return vinculation
}
module.exports = {
    addproduct,
    updateproduct,
    deleteproduct,
    deleteallproducts
   };
   