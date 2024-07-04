import { Router } from 'express'
import * as productController from '../controllers/productsController.js'
import passport from 'passport'
//import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js'

const productsRouter = Router()

productsRouter.get('/', productController.getProducts);

productsRouter.get('/:pid', productController.getProduct)

productsRouter.post('/', passport.authenticate('jwt', { session: false }), productController.createProduct)

productsRouter.put('/:pid', passport.authenticate('jwt', { session: false }), productController.updateProduct)

productsRouter.delete('/:pid', passport.authenticate('jwt', { session: false }), productController.deleteProduct)

export default productsRouter
