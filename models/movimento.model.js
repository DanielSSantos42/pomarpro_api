const conexao = require('../database/connection.database');


async function getMovimentos(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_movimentacao
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}


async function getMovimentoById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_movimentacao where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


 
async function addMovimento(dt_movimento, tipo){
    try{
        const [exec] = await conexao.query(`
            insert into tb_movimentacao(
                dt_movimento, tipo
                ) values(
                    ?,?
            )
        `,[dt_movimento, tipo])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}



async function buscaTodosMovimentos(){
    
    
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.dt_movimento,
          u.tipo
          from tb_movimentacao u;
        `)
         
         return linhas;
    }catch(e){
        
        return e;
    }
}



module.exports = {
    getMovimentos,
    getMovimentoById,
    addMovimento,
    buscaTodosMovimentos


}