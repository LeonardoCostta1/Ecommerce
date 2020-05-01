const connection = require('../db/connection');

module.exports = {
    async getProducts(request,response){
        connection.query('SELECT * FROM PRODUTOS ORDER BY cor = "preto" DESC',(err,row,fields)=>{
            response.json(row)
        });
    }
}