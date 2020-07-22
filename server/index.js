let express = require('express');
let app = express()
let bodyparser = require('body-parser');
const cors = require('cors');
app.use(bodyparser.json());

app.use(cors())

app.listen(4000, ()=>{
    console.log("listen to the port 4000");
});


app.use('/register',require('./register/register'));
app.use('/login',require('./login/login'));