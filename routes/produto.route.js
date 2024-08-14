var express = require('express');
var router = express.Router();
const sql = require('../models/produto.model')

/* GET users listing. */
router.get('/produtos', function(req, res, next) {
  sql.getProdutos().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/produto/:id', function(req, res, next) {
  sql.getProdutoById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

//Insere um usuário no banco de dados
router.post('/produto', function(req,res){
  let info = req.body;
  sql.addProduto(info.descricao, info.unidade_medida, info.tipo, info.valor).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})

//Adiciona o usuário
router.post('/add',(req,res)=>{
  //Guarda as informações uma variável para facilitar o acesso
  let dados = req.body.info  


  sql.addProduto(
    dados.descricao,
    dados.unidade_medida,
    dados.tipo,
    dados.valor
    
  ).then((resposta)=>{
    console.log(resposta)
     if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
     }
     res.status(201).json(resposta);
  })
})

//Rota para buscar todos os usuários
router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosProdutos().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
