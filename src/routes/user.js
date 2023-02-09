const { Router } = require("express");
const { postNewUser, userToDB } = require("../controllers/userController");
const router = Router();

console.log('entrando a users!')

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

  router.post("/", async (req, res) => {
    const userObj = req.body;
    console.log(userObj);
    try {
      const postUser = await postNewUser(userObj);
      res.status(201).json(postUser);
    } catch (error) {
      res.status(404).json(`Error in route post Product ${error}`);
    }
  });

module.exports = router;