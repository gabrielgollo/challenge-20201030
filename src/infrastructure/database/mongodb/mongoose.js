const mongoose = require('mongoose')

const { MONGO_URI } = process.env

class MongoDb {
    constructor () {
        this.connection = null
    }

    createConnection () {
        return mongoose.createConnection(MONGO_URI)
    }

    getOrCreateConnection () {
        if (this.connection) return this.connection
        const connection = this.createConnection()
        if (!connection) throw new Error('Connection is null')
        return connection
    }
}

const mongoDb = new MongoDb()

export default mongoDb
