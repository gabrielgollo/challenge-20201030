/* eslint-disable no-unused-vars */
const { convertJsonDocToRoutesDescriptor, mountExpressRoute } = require('../utils/convert-jsdoc-to-routes-descriptor')

const router = require('express').Router()
const { handlers } = require('../../handlers/config')

for (const [_key, value] of Object.entries(handlers)) {
    const routerDescriptor = convertJsonDocToRoutesDescriptor(value)
    if (!routerDescriptor) continue
    mountExpressRoute({
        routerDescriptor,
        handler: value,
        router
    })
}

module.exports = router
