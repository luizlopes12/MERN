const { MongoClient } = require('mongodb');
const assert = require('assert')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'todo-db';
var _db;
const connectToDB = (callback) =>{
    client.connect((err)=>{
        console.log('connected')
        _db = client.db(dbName)
        callback(err)
    })
}

const findDocuments = async () =>{
    const collection = _db.collection('todo-collection')
    try {
        const results = await collection.find({}).toArray()
        return results
    } catch (error) {
        throw new Error(error)
    }
}
// teste do código
// connectToDB(async ()=>{
//     const res = await findDocuments()
//     console.log(res)
// })

const insertDocuments = async (document) =>{
    const collection = _db.collection('todo-collection')
    try {
        const results = await collection.insertOne(document)
        return results
    } catch (error) {
        throw new Error(error)
    }
}

const updateDocument = async (document) =>{
    const collection = _db.collection('todo-collection')
    try {
        const results = await collection.updateOne({_id: document._id}, {$set: document})
        return results
    } catch (error) {
        throw new Error(error)
    }
}

const removeDocument = async (document) =>{
    const collection = _db.collection('todo-collection')
    try {
        const results = await collection.deleteOne({_id: document._id})
        return results
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    connectToDB,
    findDocuments,
    insertDocuments,
    updateDocument,
    removeDocument
}