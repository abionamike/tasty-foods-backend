import express from 'express';
import { createproduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/', createproduct);

export default router;