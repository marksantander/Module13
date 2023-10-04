// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'categoryId'
});

Category.hasMany(Product, {
  foreignKey: 'categoryId'
});

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'productId'
});

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tagId'
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag
};
