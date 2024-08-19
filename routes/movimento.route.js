var express = require('express');
var router = express.Router();
const sql = require('../models/movimento.model')

router.get('/movimentos', function(req, res, next) {
  sql.getMovimentos().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/movimento/:id', function(req, res, next) {
  sql.getMovimentoById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

//Insere um usuário no banco de dados
router.post('/movimento', function(req,res){
  let info = req.body;
  sql.addMovimento(info.dt_movimento, info.tipo).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})


router.post('/add',(req,res)=>{
  
  let dados = req.body.info  


  sql.addMovimento(
    dados.dt_movimento,
    dados.tipo
    
  ).then((resposta)=>{
    console.log(resposta)
     if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
     }
     res.status(201).json(resposta);
  })
})


router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosMovimentos().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
