const conexao = require('../database/connection.database');

//Busca todos os usuários do banco de dados
async function getCadastros(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_pomar
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca os usuários pelo ID
async function getCadastroById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_pomar where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


//Insere um usuário no banco de dados 
async function addCadastro(apelido, num_linha, num_coluna){
    try{
        const [exec] = await conexao.query(`
            insert into tb_pomar(
                apelido, num_linha,
                num_coluna
                ) values(
                    ?,?,?
            )
        `,[apelido, num_linha, num_coluna])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}


//Função para buscar todos os usuários do banco
async function buscaTodosCadastros(){
    //Estrutura de tentativa try..catch para
    //capturar erros
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.apelido,
          u.num_linha,
          u.num_coluna
          from tb_pomar u;
        `)
         //Retorna valores buscados do banco 
         return linhas;
    }catch(e){
        //Retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
    getCadastros,
    getCadastroById,
    addCadastro,
    buscaTodosCadastros


}