/* eslint-disable no-unused-vars */
const JsDocToHttpRoute = require('../utils/js-doc-to-http-route')

const router = require('express').Router()
const { handlers } = require('../../handlers/config')

for (const value of Object.values(handlers)) {
    JsDocToHttpRoute.mountExpressRoute({ router, handler: value })
}

module.exports = router
