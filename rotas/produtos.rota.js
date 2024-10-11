const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const produtosMid = require('../middleware/validarProdutos.middleware')

const produtos = {}

router.post('/', produtosMid)
router.put('/', produtosMid)


router.get('/:id', (req, res) => {
    res.json({produtos: produtos[req.params.id]})
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]){
        const produtos = req.body
        produtos.id = id
        produtos[id] = produtos
        res.json({msg: "Produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})

router.delete('/', (req, res) => {
    const id = req.params.id
    if (id && produtos[id]){
        delete produtos[id]
        res.json({msg: "Produto deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})

router.post('/', (req, res) => {
    const produto = req.body
    const idProduto = uuidv4()
    produto.id = idProduto
    produto[idProduto] = produto
    res.json({msg: "Produto adicionado com sucesso!"})
    
   
})

router.get('/', (req, res) => {
    res.json({produtos: Object.values(produtos)})
})

module.exports = router