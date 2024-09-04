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
	a.id,
    if(a.defensivo=1,'Sim' , 'Não') as defensivo,
    if(a.fertilizante=1,'Sim' , 'Não') as fertilizante,
    a.ultima_verif,
    a.linha,
    a.coluna,
    t.descricao as ds_tipo,
    s.descricao as ds_situacao,
    p.apelido as ds_pomar
 from tb_arvore a
	inner join tb_tipo t on t.id = a.tipo
    inner join tb_situacao s on s.id = a.situacao
    inner join tb_pomar p on p.id = a.pomar

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