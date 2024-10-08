var express = require('express');
var router = express.Router();
const sql = require('../models/material.model')

/* GET users listing. */
router.get('/materiais', function(req, res, next) {
  sql.getMateriais().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/material/:id', function(req, res, next) {
  sql.getMaterialById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.post('/material', function(req,res){
  let info = req.body;
  sql.addMaterial(info.nome, info.valor, info.tipo, info.fornecedor).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})

router.post('/add',(req,res)=>{

  let dados = req.body.info  


  sql.addMaterial(
    dados.nome,
    dados.valor,
    dados.tipo,
    dados.fornecedor
    
  ).then((resposta)=>{
     if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
     }
     res.status(201).json(resposta);
  })
})


router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosMateriais().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
