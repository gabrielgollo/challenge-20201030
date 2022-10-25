require('dotenv').config({ path: './env/.env' })
const log4js = require('log4js')
log4js.configure(require('./src/config/log4js.json'))

const logger = log4js.getLogger('App')
logger.info('Starting application')

const server = require('./src/infrastructure/server/express')
server.start()
