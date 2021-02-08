import Products from '../models/Product';

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.json({ products });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  },
  reviews: async (req, res) => {
    try {
      const { rating } = req.body;

      if (rating && rating !== 0) {
        const product = await Products.findById(req.params.id);
        if (!product) {
          return res.status(400).json({ msg: 'Product doesnot exist.' });
        }
        let num = product.numReviews;
        let rate = productCtrl.rating;

        await Products.findOneAndUpdate(
          { _id: req.params.id },
          {
            rating: rate + rating,
            numReviews: num + 1,
          },
        );
        res.json({ msg: 'Update success' });
      }
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  },
};

export default productCtrl;
