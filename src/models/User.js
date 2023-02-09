const {DataTypes} =require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define('user',{

        id: {
            type: DataTypes.INTEGER, // genera un numero al azar
            allowNull: false, 
            primaryKey: true,
          },

        name:{
            type:DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false, 
        
        },

        password:{
            type:DataTypes.STRING,
            allowNull:false
        },

        image:{ type:DataTypes.TEXT},

        address:{
            type:DataTypes.STRING,
            allowNull:false
        },

        role:{type:DataTypes.STRING},
        
        disabled:{type:DataTypes.BOOLEAN, defaultValue: false}
    },{
        timestamps:false
    });
};