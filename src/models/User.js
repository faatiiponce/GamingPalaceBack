const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, // genera un numero al azar
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },

      verifiedGoogle:{
        type: DataTypes.BOOLEAN,
      },

      phoneNumber: {
        type: DataTypes.STRING,
      },
      photoUrl: {
        type: DataTypes.STRING,
      },
      creationTime: {
        type: DataTypes.DATE,
      }
      
    },
    {
      timestamps: false,
    }
  );
};