const {Product, validateProduct} = require('../models/product');
const express = require("express");
const { Router } = require('express');
const router = express.Router();

//ENDPOINTS GO HERE
router.post("/", async (req, res) => {
try{
    const {error} = validateProduct(req.body);
    if (error) return res.status(400).send(error);
    let newProduct = await new Product(req.body);
    await newProduct.save()
    return res.status(201).send(newProduct)

} catch(error){
    return res.status(500).send(`Internal Server Error: ${error} `)
}
})

module.exports = router;