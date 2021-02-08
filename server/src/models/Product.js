import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: {
      type: Object,
    },
    description: {
      type: String,
    },
    numReviews: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Products = model('Products', productSchema);

export default Products;
