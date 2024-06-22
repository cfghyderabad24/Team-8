const {Pool} = require('pg')
require('dotenv').config()

const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: parseInt(process.env.PORT),
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

client.connect()

// const getAva

// client.query(`DELETE FROM transactions
// WHERE tid > 6;

// `, (err, res) => {
//     if (err){
//         return console.log(err)
//     }

//     console.log(res)
// })

module.exports = client