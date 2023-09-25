// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

sync function getCategories() {
  const categories = await Category.findAll();
  return categories;
}

const categories = await getCategories();

console.log(categories);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
