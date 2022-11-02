const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //finding all categories in Category 
  try {
    //including products in the categories 
    const categoryData = await Category.findAll({ include: Product });
    res.json(categoryData)
  } catch (err) {
    res.status(404).json(err)
  } 
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findByPk(req.params.i, {include: Product});
    res.json(categoryData);
  } catch (err) {
    res.status(404).json(err)
  } 

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
