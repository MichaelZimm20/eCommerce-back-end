const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET ROUTE, get all tags
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['id',
          'product_name',
          'price',
          'stock',
          'category_id']
      }
    ]
  })
  .then(allTagData => res.json(allTagData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// GET ROUTE, get one tag by id
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['id',
          'product_name',
          'price',
          'stock',
          'category_id']
      }
    ]
  })
    .then(oneTagIdData => {
      if (!oneTagIdData) {
        res.status(404).json({ message: 'No Tag found with this id !' });
        return;
      }
      res.json(oneTagIdData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE, create new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(newTagData => res.json(newTagData))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  })
});

// PUT ROUTE, update tag by id
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,
    {
      where: {
          id: req.params.id
      }
    })
    .then(updatedTagData => res.json(updatedTagData))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// DELETE ROUTE, delete tag by id
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
        id: req.params.id
    }
  })
  .then(deleteTagData => {
    if(!deleteTagData) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
    }
    res.json(deleteTagData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;
