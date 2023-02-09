const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Productinchart",
    {
      id: {
        type: DataTypes.STRING, // genera un numero al azar
        //allowNull: false, // valor requerido
        primaryKey: true,
      },
      idproduct: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      
    },
    {
      timestamps: false,
    }
  );
};