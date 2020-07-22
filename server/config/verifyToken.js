const jwt = require('jsonwebtoken');

auth = function(req,res,next){
   if(!req.headers.authorization){
       return res.status(401).send('unauthorized request');
   }
   let token = req.headers.authorization.split(' ')[1]
   if (token === 'null'){
       return res.status(401).send('unauthorized request');
   }
   let payload = jwt.verify(token,"secretkey")
   if(!payload){
       return res.status(401).send('unauthorized request');
   }
   req.body = payload.subject
   next()
}