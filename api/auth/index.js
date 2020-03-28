const jwt  = require('jsonwebtoken');
const User = require('../users/model');

const SECRET_KEY ='SECRET_KEY';
const TOKEN_EXPIRES_IN='2H'

async function isLoggedIn(req, res,next) {
    const auth =req.headers['authorization'];
    if(!auth){
         return res.status(401).end();
    }
     const bearer = auth.split(' ');
     const token = bearer[1];
     const payload = jwt.verify(token,'SECRET_KEY');
     const user = await User.findById (payload._id);
     req.user = user;
    next();
}


function createToken(user){
    const payload = {
        _id: user.id,
        email :user.email
    }

   return jwt.sign(payload,SECRET_KEY,{expiresIn:TOKEN_EXPIRES_IN})
}

module.exports = {
    isLoggedIn,
    createToken
};
