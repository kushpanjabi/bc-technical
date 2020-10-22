const express = require('express');
const router = express.Router();
const Fruits = require('./fruitData');

router.get('/', (req, res) => {
    return res.status(200).json(Fruits);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundFruit = Fruits.find(
        (fruit) => fruit.name.toLowerCase() === id.toLowerCase()
    );

    if (foundFruit) {
        return res.status(200).json(foundFruit);
    } else {
        return res.status(400).send('Invalid fruit. Please try again.');
    }
});

module.exports = router;