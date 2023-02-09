const { Router} = require("express");
const router = Router();
const postUser = require("../controllers/userController")

router.post("/", async (req,res) => {
    const objUser = req.body;
    console.log(objUser);
    
    try {
        const postnewUser = await postUser(objUser)
        res.status(201).json(postnewUser)
    } catch (error) {
        res.status(404).json(`Error in route post User ${error}`)
    }
})

module.exports = router;