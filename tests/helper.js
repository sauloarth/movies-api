const mongoose = require('mongoose');

exports.setupTestDb = async (databaseName) => {
    const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_HOSTNAME,
        MONGO_PORT,
    } = process.env;

    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${databaseName}?authSource=admin`;
    return await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

exports.removeAllCollections = async (db) => {
    const collections = Object.keys(db.connection.collections)
    for (const collectionName of collections) {
        const collection = db.connection.collections[collectionName]
        await collection.deleteMany()
    }
}

exports.dropAllCollections = async (db) => {
    const collections = Object.keys(db.connection.collections)
    for (const collectionName of collections) {
        const collection = db.connection.collections[collectionName]
        try {
            await collection.drop()
        } catch (error) {
            // This error happens when you try to drop a collection that's already dropped. Happens infrequently. 
            // Safe to ignore. 
            if (error.message === 'ns not found') return

            // This error happens when you use it.todo.
            // Safe to ignore. 
            if (error.message.includes('a background operation is currently running')) return

            console.log(error.message)
        }
    }
    await db.connection.close()
}