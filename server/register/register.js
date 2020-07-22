let express = require('express');
let router = express.Router();
const jwt = require('jsonwebtoken');

let register = router.post('/',(req,res)=>{
   res.status(200).send(req.body);
})



module.exports = register;