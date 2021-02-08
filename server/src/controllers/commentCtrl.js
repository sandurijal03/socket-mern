import Comments from '../models/Comment';

const commentCtrl = {
  getComments: async (req, res) => {
    try {
      const comments = await Comments.find({ product_id: req.params.id });
      res.json({ comments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default commentCtrl;
