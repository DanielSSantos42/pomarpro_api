var express = require('express');
var router = express.Router();
const sql = require('../models/arvore.model')

router.get('/arvores', function(req, res, next) {
  sql.getArvores().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/arvore/:id', function(req, res, next) {
  sql.getArvoreById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});


router.post('/arvore', function(req,res){
  let info = req.body;
  sql.addArvore(info.defensivo, info.fertilizante, info.ultima_verif, info.linha, info.coluna, info.tipo, info.situacao, info.pomar).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})


router.post('/add',(req,res)=>{
 
  let dados = req.body.info  


  sql.addArvore(
    dados.defensivo,
    dados.fertilizante,
    dados.ultima_verif,
    dados.linha,
    dados.coluna,
    dados.tipo,
    dados.situacao,
    dados.pomar
    
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
    sql.buscaTodosArvores().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
