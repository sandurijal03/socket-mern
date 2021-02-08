import { model, Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    username: {
      name: String,
    },
    content: {
      name: String,
    },
    product_id: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    rply: Array,
  },
  { timestamps: true },
);

const Comments = model('Comments', commentSchema);

export default Comments;
