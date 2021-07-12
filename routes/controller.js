const express = require('express');
const router = express.Router();
const Product = require('./../db/model/product');

//  Hom page: loading all product
router.get('/', (req, res) => {
    Product.find()
        .then(products => {
            res.render('home', { products: products })
        })
        .catch(err => {
            console.log('Error: err');
            throw err;
        })
});

//  Go to Add Product page
router.get('/add-product', (req, res) => {
    res.render('add-product');
});

//  Add new Product
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.productName,
        type: req.body.productType
    });

    newProduct.save()
        .then(doc => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

//  Go to Update Product page
router.get('/update-product/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.render('update-product', { product: product });
    })
});

//  Delete product
router.delete('/:productId', (req, res) => {
    const productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    })
});

//  Update product
router.post('/:productId', (req, res) => {
    const productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/');
        })
});

module.exports = router;