const doctrine = require('doctrine')
const HttpHandlerRequest = require('./http-handler')
const logger = require('log4js').getLogger('Express Mounting Routes')

function convertJsonDocToRoutesDescriptor (handler) {
    const jsDocsOfFile = handler.toString().match(/\/\*\*([\s\S]*?)\*\//g)
    if (!jsDocsOfFile) return

    const routesDescriptor = []
    for (const jsDoc of jsDocsOfFile) {
        const doc = doctrine.parse(jsDoc, { unwrap: true })
        routesDescriptor.push(doc)
    }

    return routesDescriptor
}

class JsDocToHttpRoute {
    static mountExpressRoute ({ router, handler }) {
        const routerDescriptor = convertJsonDocToRoutesDescriptor(handler)
        if (!routerDescriptor) return
        for (const route of routerDescriptor) {
            let isApi = false
            let path = ''
            let method = ''
            let functionToCall = ''

            for (const tag of route.tags) {
                if (tag.title === 'api') {
                    isApi = true
                } else if (tag.title === 'path') {
                    path = tag.description
                } else if (tag.title === 'method') {
                    method = tag.name
                } else if (tag.title === 'function') {
                    functionToCall = tag.name
                }
            }

            if (isApi && path && method && functionToCall) {
                router[method](path, async (req, res, next) => {
                    await HttpHandlerRequest.expressHandler(req, res, handler[functionToCall])
                    next()
                })
                logger.info(`generate ${path} ${method.toUpperCase()} with - success`)
            } else {
                logger.warn('Invalid route descriptor', route)
            }
        }
    }
}

module.exports = JsDocToHttpRoute
