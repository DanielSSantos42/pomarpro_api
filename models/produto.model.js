const conexao = require('../database/connection.database');

//Busca todos os usuários do banco de dados
async function getProdutos(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_produto
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca os usuários pelo ID
async function getProdutoById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_produto where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


//Insere um usuário no banco de dados 
async function addProduto(descricao, unidade_medida, tipo, valor){
    try{
        const [exec] = await conexao.query(`
            insert into tb_produto(
                descricao, unidade_medida, tipo, 
                valor
                ) values(
                    ?,?,?,?
            )
        `,[descricao, unidade_medida, tipo, valor])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}


//Função para buscar todos os usuários do banco
async function buscaTodosProdutos(){
    //Estrutura de tentativa try..catch para
    //capturar erros
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.descricao,
          u.unidade_medida,
          u.tipo,
          u.valor
          from tb_produto u;
        `)
         //Retorna valores buscados do banco 
         return linhas;
    }catch(e){
        //Retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
    getProdutos,
    getProdutoById,
    addProduto,
    buscaTodosProdutos


}