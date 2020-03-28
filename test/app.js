const chai = require('chai');
const chaiHttp = require('chai-http');
const {MongoMemoryServer} = require('mongodb-memory-server');
const app = require('../index');
const Keyword = require('../api/keywords/model')

const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);
chai.should();

describe('index',async()=>{
    let mongoServer;

    before(async()=>{
            mongoServer = new MongoMemoryServer({
                instance : {
                     ip : 'localhost',
                     port : 27017,
                     dbName : 'nodeapp'
                }
            });

            const uri = await mongoServer.getConnectionString();
            console.log('MONGO_URI',url);
    });

    after(async()=>{
       await mongoServer.close();
    });


    beforeEach(async()=>{
        const k1 = {name : 'k1' , desc: 'd1',url :'u1' };
        const k2 = {name : 'k2' , desc: 'd2',url :'u2' };
        await Keyword.create(k1,k2);
    });

    it('should return all the keywords',async()=>{
        const resp= await chai.request(app).get('/api/keywords');
        expect(res.body).to.be.a('array');
        expect(res.body.length).to.equal(2);

    });

});

