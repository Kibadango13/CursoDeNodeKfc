const User =require('./model');
const {createToken} = require('../auth');
const {compareHash} = require('../crypt');

//compareHash
//const keywords = [{ id:'javascript', desc : 'Lenguaje de programacion',url : 'http://javascript'},{id:'node', desc : 'Lenguaje de programacion',url : 'http://node.com'}, {id:'express', desc : 'Web frame Work',url : 'http://node.com'}]

async function create(req, res) {

    try {
        const newUser= req.body;
        const persistednewUser = await User.create(newUser);
        //persistednewUser.password = undefined;
        res.status(201).send(persistednewUser);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

}

async function login(req, res) {
    try {
        const creds = req.body;
        const {email, password} = creds;
        if(!email){
            return res.status(400).send('Email is required ');
        }
        if(!password){
            return res.status(400).send('Password is required ');
        }
        const user = await User.findOne({email}).select(['email', 'password']);


       // const hashedPassword = bcrypt.hash(password,10 );
        const isMatch = await compareHash(password,user.password);
        if(!isMatch){
            res.status(400).send('Invalidad  email or password');
        }

        
        //const token = '1726959925';
        const token  = createToken(user);
        res.send({token});
        //res.send('kevin');

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}


module.exports = {
    login,
    create
};