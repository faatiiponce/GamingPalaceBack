const { Router } = require("express");
const {
  postNewUser,
  userToDB,
  validation,
  login,
  updateInfo,
} = require("../controllers/userController");
const router = Router();

console.log("entrando a users!");

router.get("/", async (req, res) => {
  try {
    {
      let allUsers = await userToDB();
      res.status(201).send(allUsers);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const infoID = await userToDB();
    if (id) {
      const userID = infoID.find((user) => user.id == id);
      userID
        ? res.status(200).json(userID)
        : res.status(404).json("Not found user detail");
    }
  } catch (error) {
    res.status(404).json("Error in route getID user", error);
  }
});

router.post("/login", async (req, res) => {
  console.log("loginnn");
  try {
    const { email, password } = req.body;
    let response = await login(email, password);
    res.status(201).send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// router.post("/:id", async (req, res) => {
//   const { name, email, password, image, address, role } = req.body;
//   try {
//     let infoupdate = await updateInfo(
//       name,
//       email,
//       password,
//       image,
//       address,
//       role
//     );
//     res.status(200).send(infoupdate);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

router.post("/", async (req, res) => {
  const userObj = req.body;
  console.log(userObj);
  try {
    const postUser = await postNewUser(userObj);
    validation(req.body.email);

    res.status(201).json(postUser);
  } catch (error) {
    //res.status(404).json(`Error in route post Product ${error}`);
    res.status(404).send(error.message);
  }
});

module.exports = router;