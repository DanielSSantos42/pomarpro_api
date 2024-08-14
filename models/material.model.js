const conexao = require('../database/connection.database');

//Busca todos os usuários do banco de dados
async function getMateriais(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca os usuários pelo ID
async function getMaterialById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}


//Insere um usuário no banco de dados 
async function addMaterial(nome, valor, tipo, fornecedor){
    try{
        const [exec] = await conexao.query(`
            insert into tb_material(
                nome, valor, tipo, 
                fornecedor
                ) values(
                    ?,?,?,?
            )
        `,[nome, valor, tipo, fornecedor])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}


//Função para buscar todos os usuários do banco
async function buscaTodosMateriais(){
    //Estrutura de tentativa try..catch para
    //capturar erros
    try{
      let [linhas] = await conexao.query(`
        select 
          u.id,
          u.nome,
          u.valor,
          u.tipo,
          u.fornecedor
          from tb_material u;
        `)
         //Retorna valores buscados do banco 
         return linhas;
    }catch(e){
        //Retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
    getMateriais,
    getMaterialById,
    addMaterial,
    buscaTodosMateriais


}