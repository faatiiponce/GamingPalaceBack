const { Favorite, User } = require("../db");

const addFavorite = async (obj) => {
  try {
    let addObj = {
      idUser: obj.idUser,
      idproduct: obj.idproduct,
    };
    // let review = await Review.create(objReview);
    Favorite.create(addObj).then((x) => {
      return x;
    });
    //return review;
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  addFavorite,
};
