const express = require("express");
const {
    getProducts,
    getSingleProduct,
    putProduct,
    deleteProduct,
    createProduct
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', putProduct);

router.delete('/:id', deleteProduct);

module.exports = router;