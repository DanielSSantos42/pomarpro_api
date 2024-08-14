var express = require('express');
var router = express.Router();
const sql = require('../models/colheita.model')

/* GET users listing. */
router.get('/colheitas', function(req, res, next) {
  sql.getColheitas().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/colheita/:id', function(req, res, next) {
  sql.getColheitaById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});


router.post('/colheita', function(req,res){
  let info = req.body;
  sql.addColheita(info.quantidade, info.dt_colheita, info.arvore).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})


router.post('/add',(req,res)=>{
 
  let dados = req.body.info  


  sql.addColheita(
    dados.quantidade,
    dados.dt_colheita,
    dados.arvore
    
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
    sql.buscaTodosColheitas().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
