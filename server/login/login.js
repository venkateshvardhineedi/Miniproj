let express = require('express');
let router = express.Router();
const jwt = require('jsonwebtoken');


let login = router.post('/',(req,res)=>{
     jwt.sign(req.body,"secretkey",(err,token)=>{
         //res.header('auth-token',token).send(token);
       res.status(200).send({token});
     })
})

module.exports = login;
