const products = require('../products.json');

const getProduct = (req,res) => {
    const item = product.find(val => val.id === parseInt(req.params.id));
    if (!item) {
        return res.status(500).send(item);
    }
}
module.exports = getProduct;