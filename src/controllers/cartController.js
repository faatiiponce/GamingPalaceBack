const { Product, Cart } = require("../db");
const { nmailer } = require("./nodemailerController");

class CartController {
  addItem(req, res) {
    let carrt = req.session.carrt;
    let external = req.params.external; //ayuda a identificar el producto mediante parametros
    Product.findOne({
      where: { id: external },
      include: [{ name: external.name }],
    }).then((product) => {
      if (product) {
        let pos = CarritoController.verify(carrt, external);
        if (pos == -1) {
          let data = {
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
            category: product.category,
            trademark: product.trademark,
            priceTotal: product.price,
          };
          carrt.push(data);
        } else {
          let data = carrt[pos];
          data.quantity = dato.quantity + 1;
          data.priceTotal = data.quantity * data.price;
          carrt[pos] = data;
        }
      }
      req.session.carrt = carrt;
      res.status(200).send(req.session.carrt);
    });
  }

  removeItem(req, res) {
    let carrt = req.session.carrt;
    let external = req.params.external;
    let pos = CarritoController.verify(carrt, external);
    let data = carrt[pos];
    if (data.quantity > 1) {
      data.quantity = data.quantity - 1;
      data.priceTotal = data.quantity * data.price;
      carrt[pos] = data;
      req.session.carrt = carrt;
      res.status(200).send(req.session.carrt);
    } else {
      let aux = [];
      for (let i; i < carrt.length; i++) {
        let items = carrt[i];
        if (items.external != external) {
          aux.push(items);
        }
      }
      req.session.carrt = aux;
      res.status(200).send(req.session.carrt);
    }
  }

  getCart(req, res) {
    res.status(200).send(req.session.carrt);
  }

  static verify = (lista, externa) => {
    let pos = -1;
    for (let i; i < lista.length; i++) {
      if (lista[i].externa == externa) {
        pos = i;
        break;
      }
    }
  };
}

module.exports = CartController;
