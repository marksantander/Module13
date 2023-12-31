const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { not } = require('sequelize/types/lib/operators');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER ,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  category_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'product',
          key: 'id'
      }
  },
  tag_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'tag',
          key: 'id',
  },
  allowNull: true,
},
  allowNull: false,
},
{
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
}); 

module.exports = ProductTag;
