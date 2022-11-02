const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //finding all categories in Category 
  //including products in the categories 
  const categoryData = await Category.findAll({ include: Product });
  return res.json(categoryData);
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // includes its associated product 
  const categoryData = await Category.findByPk(req.params.i, {include: Product});
  return res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  return res.json(categoryData)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where:{
      id: req.params.id
    }
  });
  return res.json(categoryData);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
