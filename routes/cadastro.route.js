var express = require('express');
var router = express.Router();
const sql = require('../models/cadastro.model')

/* GET users listing. */
router.get('/cadastros', function(req, res, next) {
  sql.getCadastros().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

router.get('/cadastro/:id', function(req, res, next) {
  sql.getCadastroById(req.params.id).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
});

//Insere um usuário no banco de dados
router.post('/cadastro', function(req,res){
  let info = req.body;
  sql.addCadastro(info.apelido, info.num_linha, info.num_coluna).then((resposta)=>{
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


  sql.addCadastro(
    dados.apelido,
    dados.num_linha,
    dados.num_coluna
    
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
    sql.buscaTodosCadastros().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
      })
})


module.exports = router;
