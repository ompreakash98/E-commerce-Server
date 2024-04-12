const express=  require('express');
const { getAllProducts, createProduct ,UpdateProduct, deleteproducts, getProductsDetials} = require('../constrollers/productController');

const router=express.Router();

router.route('/products').get(getAllProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id').put(UpdateProduct).delete(deleteproducts).get(getProductsDetials)
// router.route('/products/getdetials/:id').get(getProductsDetials)


module.exports=router