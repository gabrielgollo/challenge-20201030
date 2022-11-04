const handlers = {
    product: require('./products.handler'),
    '': require('./main.handler')
}

module.exports = { handlers }
