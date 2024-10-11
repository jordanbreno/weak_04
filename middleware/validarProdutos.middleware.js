const Ajv = require('ajv')
const ajv = new Ajv()

const produtosSchema = require('../schemas/produtos.schema')


function validarProdutos(req, res, next){
  const produtos = req.body
  const validate = ajv.compile(produtosSchema)
  const valid = validate(produtos) 
  if (valid){
    next()
  }else{
    res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
  }
}

module.exports = validarProdutos


