class Tabelas {
    init (conexao){
        this.conexao = conexao;
        this.criarAgendamento()
    };

    criarAgendamento(){
        const sql = `CREATE TABLE IF NOT EXISTS agendamentos 
        (id int NOT NULL AUTO_INCREMENT,
            nome_cliente varchar(50) NOT NULL, 
            servico varchar(50) NOT NULL,
            status varchar(20) NOT NULL, 
            data_servico date NOT NULL, 
            data_agendamento date NOT NULL, 
            PRIMARY KEY(id))`
        this.conexao.query(sql, error =>{
            if(error){
                throw error
            }
        })
    }
};
module.exports = new Tabelas;