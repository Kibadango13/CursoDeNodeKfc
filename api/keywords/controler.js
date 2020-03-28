const Keyword =require('./model');
//const keywords = [{ id:'javascript', desc : 'Lenguaje de programacion',url : 'http://javascript'},{id:'node', desc : 'Lenguaje de programacion',url : 'http://node.com'}, {id:'express', desc : 'Web frame Work',url : 'http://node.com'}]
const Service =require('./service');

async function search(req, res) {
try{
    const Keywords =await  Service.search();
    res.send(Keywords);  
}catch{

}
 
   //res.send(keywords);
    //Keyword.find((err,keywords)=>{
  /*
    call backs  
    if(err){
        return res.status(500).send(err);
    }
    res.send(keywords);
    });
    */
    /*
    Keyword.find()
    .then(keywords=> res.send(keywords))
    .catch(err=> res.status(500).send(err))*/



}

async function create(req, res) {
   // const newObj = req.body;
    //keywords.push(req.body);
    //return res.send(newObj);

   /* Keyword.create(newKeyword,(err,persistedKeyword)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.send(persistedKeyword);
    });*/
    try {

        const newKeyword = req.body;
        const persistedKeyword = await Keyword.create(newKeyword);
        res.status(201).send(persistedKeyword);
    } catch (error) {
        res.status(500).send(err);
    }

}

async function readById(req, res) {
  /*  const id = req.params.id;
    const obj = keywords.find(el => el.id == id);
    if (obj) {
        return res.send(obj);
    }
    res.status(404).send(`${id} not found`);
*/

    try {
        const id = req.params.id;
        const keyword = await Keyword.findById(id);
        res.send(keyword);
    } catch (error) {
        res.status(500).send(error);
    }

}

async function update(req, res) {
    /*
    const id = req.params.id;
    const newObj = req.body;
    const i = keywords.findIndex(el => el.id == id);
    keywords.splice(i, 1, newObj);
    res.status(204).end();*/
    try {
        const id = req.params.id;
        const body = req.body;
        await Keyword.findByIdAndUpdate(id,body);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }

}

async function remove(req, res) {
  /*  const id = req.params.id;
    const i = keywords.findIndex(el => el.id == id);
    keywords.splice(i, 1);
    res.status(204).end();*/


    try {
        const id = req.params.id;
        const body = req.body;
        await Keyword.findByIdAndRemove(id,body);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    search,
    create,
    readById,
    update,
    remove
};