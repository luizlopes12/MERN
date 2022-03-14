const express = require('express')
const { ObjectId } = require('mongodb')
const router = express.Router()
//importando as funções a serem feitas no banco
const db = require('../services/db')

//Conexão com o banco de dados
db.connectToDB(()=>{
    //Pegando o id do elemento e pesquisando no banco no padrão ObjectId
    const checkBody = (req, res, next) => {
        if("_id" in req.body){
            req.body._id = ObjectId(req.body._id)
        }
        next()
    }
    //Get da lista de tarefas
    router.get('/list', async (req, res)=>{
        const results = await db.findDocuments()
        res.send(results)
    })
    //Inserindo dados no banco
    router.post('/add', async (req, res)=>{
        const results = await db.insertDocuments(req.body)
        res.send(results)
    })
    //Atualizando dados utilizando a função checkBody
    router.patch('/update', checkBody,  async (req, res)=>{
        const results = await db.updateDocument(req.body)
        res.send(results)
    })
    //Deletando dados utilizando a função checkBody
    router.delete('/delete', checkBody, async(req, res)=>{
        const results = await db.removeDocument(req.body)
        res.send(results)
    })
})

module.exports = router