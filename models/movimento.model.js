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


 
async function addMovimento(tipo){
    try{
        const [exec] = await conexao.query(`
            insert into tb_movimentacao(
                dt_movimento, tipo
                ) values(
                    current_timestamp,?
            )
        `,[tipo])
          if(exec.affectedRows==1){
            const [linha] = await conexao.query(`select last_insert_id() as id`);
            return linha [0];
        }

        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

async function addItemMovimento(
    movimento, quantidade, produto
) {try{
      const [exec] = await conexao.query(`
        insert into tb_mov_item(
        movimentacao, produto , quantidade)values(?,?,?
        )`
      ,[movimento, produto, quantidade]);
      return exec.affectedRows;
      }catch(erro){
        return erro;
      }
    }

async function buscaTodosMovimentos(){
    
    
    try{
      let [linhas] = await conexao.query(`
        select 
 p.descricao,
 p.valor,
 m.tipo,
 t.descricao as ds_tipo,
 mi.quantidade,
 (p.valor * mi.quantidade) as valor_total,
 m.dt_movimento
 from tb_produto p 
 inner join tb_mov_item mi on mi.produto = p.id
 inner join tb_movimentacao m on m.id = mi.movimentacao
 inner join tb_tipo t on t.id = m.tipo
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
    buscaTodosMovimentos,
    addItemMovimento 


}