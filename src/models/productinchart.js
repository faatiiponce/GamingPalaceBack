const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "productinchart",
    {
      id: {
        type: DataTypes.INTEGER, // genera un numero al azar
        allowNull: false, // valor requerido
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      timestamps: false,
    }
  );
};