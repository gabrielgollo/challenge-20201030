const { MongoClient } = require('mongodb')

class MongoDbConnection {
    constructor (uri, databaseName) {
        this.uri = uri
        this.dbName = databaseName
        this.connection = null
        this.dbInstance = null
    }

    createConnection () {
        this.connection = new MongoClient(this.uri)
        return this.connection.connect()
    }

    createDbInstance () {
        if (this?.connection) return
        return this.connection.db(this.dbName)
    }

    async getOrCreateConnection () {
        if (!this.connection) {
            await this.createConnection()
            await this.dbInstance()
        }

        return this.dbInstance
    }
}

module.exports = MongoDbConnection
