const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.should();

describe('hello',()=>{
    it('word',()=>{
        const foo ='bar';
        foo.should.equal('bar');
        expect(foo).to.be.a('string');
        assert.lengthOf(foo,3);
    })
})


//se debe implementar por modulo