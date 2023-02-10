const { User } = require("../db");

const postUser = async (objUser) => {

    try {
        
        let {userName, email, verifiedGoogle, phoneNumber, photoUrl, creationTime} = objUser;

        const user = {
            userName,
            email,
            verifiedGoogle,
            phoneNumber,
            photoUrl,
            creationTime
        };

        const newUser = await User.findOrCreate({
            where : { email: user.email,
            },
            defaults: {
                photoUrl: user.photoUrl,
                verifiedGoogle: user.verifiedGoogle,
                userName: user.userName,
                phoneNumber: user.phoneNumber,
                creationTime: user.creationTime,
            }
        });
        return newUser


    } catch (error) {
        console.log("Error in PostUser", error);
    }

};

const getUsers = async() => {
    
    const allUsers = await User.findAll();

    if(!allUsers.length){
        return "No registered users"
    }else{
        return allUsers;
    }
    

}



module.exports = {
    postUser,
    getUsers
    }