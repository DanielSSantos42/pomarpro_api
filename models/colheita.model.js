const conexao = require('../database/connection.database');


async function getColheitas(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_colheita
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}


async function getColheitaById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_colheita where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


 
async function addColheita(quantidade, dt_colheita, arvore){
    try{
        const [exec] = await conexao.query(`
            insert into tb_colheita(
                quantidade, dt_colheita,
                arvore
                ) values(
                    ?,?,?
            )
        `,[quantidade, dt_colheita, arvore])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}



async function buscaTodosColheitas(){
    
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.quantidade,
          u.dt_colheita,
          u.arvore
          from tb_colheita u;
        `)
         
         return linhas;
    }catch(e){
        
        return e;
    }
}



module.exports = {
    getColheitas,
    getColheitaById,
    addColheita,
    buscaTodosColheitas


}