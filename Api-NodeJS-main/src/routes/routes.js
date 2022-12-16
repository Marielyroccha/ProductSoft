const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const ClientesController = require('../controllers/ClientesController')
const ProdutosController = require('../controllers/ProdutosController')
const UsuarioController = require('../controllers/UsuarioController')

// Clientes

router.post('/novoCliente', ClientesController.novoCliente)
router.get('/client', ClientesController.listarCliente)
router.get('/client/:id', ClientesController.buscarUmCliente)
router.delete('/client/:id', ClientesController.deletarCliente)
router.put('/atualizar/tarefa/:id', ClientesController.atualizaCliente)

// Produtos

router.post('/novoProduto', ProdutosController.criaProduto)
router.get('/produto', ProdutosController.listaProduto)
router.get('/produto/:id', ProdutosController.buscarUmProduto)
router.delete('/produto/:id', ProdutosController.deletarProduto)
router.put('/atualizar/produto/:id', ProdutosController.atualizaProduto)

// Usuario

router.get('/user', UsuarioController.listarUsuario)
router.post('/novoUsuario', UsuarioController.cadastraUsuario)
module.exports = router