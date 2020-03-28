const bcrypt  = require('bcryptjs');

const HASH_SALT = 10;

async function createHash(text){
    return await bcrypt.hash(text,HASH_SALT);
}

async function compareHash(text,hash){
    return   await bcrypt.compare(text,hash);
}

module.exports = {
    compareHash,
    createHash,
};