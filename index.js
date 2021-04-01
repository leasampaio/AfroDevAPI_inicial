const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require ('./infra/tabelas')

conexao.connect (error => {
    if(error){
        throw error;
    }
    Tabelas.init(conexao)
    app = configExpress()

    app.listen(3000, ()=> console.log('Rodando!'));


})

