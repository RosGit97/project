const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "appdikulo",
})

// app.get("/",(req, res) =>{
//     let SQL = "INSERT INTO usuario(bi, morada, nascimento, primeiro_nome, ultimo_nome, email) VALUES ('134334LD036', 'belas','19/10/1997','rosario','Alexandre','20161880@isptec.co.ao')";

//     db.query(SQL, (err,result) => {
//         console.log(err);
//     });

// });

app.use(cors());
app.use(express.json())

app.post("/register", (req, res) => {
    const { bi } = req.body;
    const { morada } = req.body;
    const { primeiro_nome } = req.body;
    const { ultimo_nome } = req.body;
    const { nascimento } = req.body;
    const { email } = req.body;
    const { password } = req.body
    
    let SQL = "INSERT INTO usuario(bi, morada, nascimento, primeiro_nome, ultimo_nome, email, password) VALUES (?,?,?,?,?,?,?)";

    db.query(SQL, [bi,morada,nascimento,primeiro_nome,ultimo_nome,email,password],(err, result) => {
        console.log(err);

       
    });
});

app.get("/getCards", (req,res)=>{
    
    let SQL = "SELECT *from denuncias";

    db.query(SQL, (err,result) => {
        if(err) console.log(err);
        else res.send(result);
        console.log(result);
    });
});

app.post("/login", (req,res)=>{
    const { bi } = req.body;
    const { password } = req.body;
   
    let SQL = "SELECT primeiro_nome, ultimo_nome from usuario where bi=? && password=?";

    db.query(SQL, [bi,password], (err,result) => {
        if(err) console.log(err);
        else {
            
                console.log(result);
            
    
            res.send(result);
            // alert("sucesso");
        }
        
        // console.log(result);
    });
    
});

app.post("/registarDenuncia", (req, res) => {
    const { descricao } = req.body;
    const { bi_denunciante } = req.body;
    const { local_crime } = req.body;
    const { tipo_crime } = req.body;
    const { vitimas_mortais } = req.body;
    

    let SQL = "INSERT INTO denuncias (descricao, bi_denunciante, local_crime, tipo_crime, vitimas_mortais) VALUES (?,?,?,?,?)";

    db.query(SQL, [descricao, bi_denunciante, local_crime, tipo_crime, vitimas_mortais],(err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});