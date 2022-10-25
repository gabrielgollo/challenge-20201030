const MongoDbConnection = require('./mongodb-connection')

const { MONGODB_URI, MONGODB_DATABASE_NAME } = process.env

const mongoInstance = new MongoDbConnection(MONGODB_URI, MONGODB_DATABASE_NAME)

module.exports = {
    mongoInstance
}
