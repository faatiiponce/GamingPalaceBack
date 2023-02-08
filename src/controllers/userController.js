const { User } = require("../db");
const users = require("../utils/usersDB");

const getUsers = async() => {
    const allUsers = await User.count()
    if(allUsers < 1) {
        let newUser = {}
        let filter = users.map(user => {
        newUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            address: user.address,
            role: user.role
        }
        return newUser 
    })
    await User.bulkCreate(filter)
    }
    
}

const userToDB = async() => {
    const allUsers = await User.findAll()
    if(!allUsers.length){
        let newUser = {}
        let filter = users.map(user => {
        newUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            address: user.address,
            role: user.role
        }
        return newUser
    })
    await User.bulkCreate(filter)
    }else{
        const usersEnable = await User.findAll({
            where: {
              disabled: false,
            },
          });
          return usersEnable;
    }
}

const postNewUser = async (userObj) => {
    try {
      let { name, email, password, image, address, role } =
        userObj;
      let cuenta = await User.count();
      cuenta++;
      id = cuenta;
  
  
      const user = {
        id,
        name,
        email,
        password,
        image,
        address,
        role,
      };
  
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      console.log("Error in postNewProduct", error);
    }
  };

module.exports = {
    getUsers,
    userToDB,
    postNewUser
}