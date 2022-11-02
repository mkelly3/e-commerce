const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({ include: Product });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: Product });
      // include: [{ model: Product, through: Category, as: 'product_id' }]
    if (!categoryData) {
      res.status(404).json({ message: 'No Category by this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'no Category found with this id!' });
      // return;
    }

   res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

 

module.exports = router;

