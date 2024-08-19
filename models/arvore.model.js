const conexao = require('../database/connection.database');


async function getArvores(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_arvore
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}


async function getArvoreById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_arvore where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


 
async function addArvore(defensivo, fertilizante, ultima_verif, linha, coluna, tipo, situacao, pomar){
    try{
        const [exec] = await conexao.query(`
            insert into tb_arvore(defensivo, fertilizante, ultima_verif, linha, coluna, tipo, situacao, pomar
                 ) values(
                    ?,?,?,?,?,?,?,?
            )
        `,[defensivo, fertilizante, ultima_verif, linha, coluna, tipo, situacao, pomar])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}



async function buscaTodosArvores(){
    
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.defensivo,
          u.fertilizante,
          u.ultima_verif,
          u.linha,
          u.coluna,
          u.tipo,
          u.situacao,
          u.pomar
          from tb_arvore u;
        `)
         
         return linhas;
    }catch(e){
        
        return e;
    }
}



module.exports = {
    getArvores,
    getArvoreById,
    addArvore,
    buscaTodosArvores


}