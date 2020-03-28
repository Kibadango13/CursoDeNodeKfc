const mongoose = require('mongoose');

const  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nodeapp' ;

function connect(){
    mongoose.connect(
        MONGODB_URI,
        { useUnifiedTopology: true,useNewUrlParser:true,poolSize:10}
    );
        const conn = mongoose.connection;
        conn.on('error',error=>{
            console.log('Error trying to connect to db ...',error);
        });
        conn.on('open',()=>{
            console.log('DB is already connected ...');
        });
}


module.exports={connect};