const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET ROUTE, get all categories
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(allCategoryData => res.json(allCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// GET ROUTE, get one category by id
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(oneCategoryIdData => {
      if (!oneCategoryIdData) {
        res.status(404).json({ message: 'No category found with this id !' });
        return;
      }
      res.json(oneCategoryIdData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE, create new category
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(newCategoryData => res.json(newCategoryData))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,
    {
      where: {
          id: req.params.id
      }
    })
    .then(updatedCategoryData => {
      if(!updatedCategoryData) {
          res.status(404).json({ message: 'No Category found with this id' });
          return;
      }
      res.json(updatedCategoryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
