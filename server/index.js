// IF YOU NEED TO GET MULTIPLE FUNCTIONS OUT OF YOUR FILE

/*
IN PREVIOUS FILE
module.exports = {
    getProducts,
    getProduct
}
IN CURRENT FILE
const FUNCTIONNAME = require(FILENAME).FUNCTION NAME
ex:
const getProducts = require("./getProducts").getProducts
const getproduct = require("./getProducts").getProduct
*/
const express = require('express');

const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
