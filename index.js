const dotenv        = require('dotenv');
const express       = require('express');
const middleware    = require('./middleware');
const routes        = require('./routes');
const db            = require('./database');

//const {host , port} = config.get('server');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

dotenv.config();

const app           =express();


app.set('view engine','ejs');

middleware(app);
routes(app);
db.connect();

app.listen(PORT,HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});


module.exports = app;
