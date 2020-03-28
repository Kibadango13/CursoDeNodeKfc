//const keywords = require('./api/keywords');
//const users = require('./api/users');


const api = require('./api');
const pages = require('./pages');
function routes(app){
    app.use('/api',api);
    app.use('/pages',pages);
    //app.use('/api/keywords',keywords);
    //app.use('/api/users',users);
}

module.exports = routes;