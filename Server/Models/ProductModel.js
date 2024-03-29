import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  name: { type: String, require: true },
  rating: { type: Number, require: true },
  comment: { type: Number, require: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});
const productSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    image: { type: String, required: true },
    description: { type: String, require: true },
    reviews: [reviewSchema],
    rating: { type: Number, require: true, default: 0 },
    numReviews: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    countInStock: { type: Number, require: true, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
