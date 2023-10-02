const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    platforms: {
      type: DataTypes.STRING,
    },
    background_image: {
      type: DataTypes.STRING,
    },
    realesed: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.DECIMAL
    }
  },{timestamps: false});
};
