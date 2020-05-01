const mysql = require('mysql')

const connection = mysql.createConnection({

    'host':'localhost',
    'password':'12345678',
    'database':'ecommerce',
    'port':'3306',
    'user':'root',
});

connection.connect(()=>{
    console.log('DB ON')
})

module.exports = connection;