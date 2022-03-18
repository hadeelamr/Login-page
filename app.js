const express=require('express') 
const app=express()

app.set('view-engine')
app.get('/',(req,res)=>{
    res.render('index.ejs',{user})
})

const bodyparser=require('body-parser')
const mysql=require('mysql')
const res = require('express/lib/response')

const port=process.env.port || 5000
app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json())

// mysql
const pool=mysql.createPool({
    connectionLimit:10, 
    host:'localhost',
    user:'root',
    password:'password',
    database:'nodejs-beers',
})
//Get all beers
app.get('',(req,res)=>{
    pool.getConnection((err,connection)=> {
        if(err)throw err
        console.log('connected as email ${connection.threadEmail}')
        connection.query('SELECT8 from beers', (err,rows)=>{
            connection.release()//return the connection to pool
            
            if(!err){
                res.send(rows)
            }
            else {
                console.log(err)
            }
        })
    })
})
//Get a beer by
//listen on enviroment port or 5000
app.listen(port,() => console.log('Listen on port ${port}'))