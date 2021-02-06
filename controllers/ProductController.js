import Product from '../models/ProductModel.js';
import fs from 'fs';

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createproduct = async (req, res) => {
  try {
    const {
      name, price, category, image, rating, description,
    } = req.body;

    const product = new Product({
      name, price, user: req.user._id, image, category, rating, description,
    });

    const createdProduct = await product.save();
    res.json(createdProduct);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      name, price, category, image, rating, description,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product !== null) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.category = category || product.category;
      product.image = image || product.image;
      product.rating = rating || product.rating;
      product.description = description || product.description;
    }

    const updatedProduct = await product?.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    const img = product.image.split('/')[1];
    
    fs.unlink(`./upload/images/${img}`, (err) => {
      if (err) {
        res.json({ error: err.message });
      }
    });

    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

export {
  getProducts, createproduct, getProductById, updateProduct, deleteProduct,
};