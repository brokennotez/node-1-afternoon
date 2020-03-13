const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price));
    }
    res.status(200).send(products);
}
// IF YOU NEED TO EXPORT MULTIPLE FUNCTIONS
// module.exports = {
//     getProducts,
//     getProduct:function(){}

// }
// IF YOU JUST NEED ONE FUNCTION

module.exports = getProducts;



// module.exports = getProducts;