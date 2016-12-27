'use strict';

const idGenerator = require('../incremental-id-generator');

describe('incremental-id-generator', () => {

  it('throws if the characters argument is not a string', () => {
    idGenerator.should.throw(TypeError);
    (() => idGenerator(null)).should.throw(TypeError);
    (() => idGenerator(10)).should.throw(TypeError);
    (() => idGenerator(true)).should.throw(TypeError);
    (() => idGenerator(false)).should.throw(TypeError);
    (() => idGenerator({a: 'a'})).should.throw(TypeError);
    (() => idGenerator(['a'])).should.throw(TypeError);
  });

  it('throws if the characters contains duplicate characters', () => {
    (() => idGenerator('aa')).should.throw(Error);
    (() => idGenerator('abca')).should.throw(Error);
    (() => idGenerator('012345678910')).should.throw(Error);
  });

  it('works without options', () => {
    const nextBinID = idGenerator('01');
    nextBinID().should.equal('0');
    nextBinID().should.equal('1');
    nextBinID().should.equal('00');
    nextBinID().should.equal('01');
    nextBinID().should.equal('10');
    nextBinID().should.equal('11');
    nextBinID().should.equal('000');
    nextBinID().should.equal('001');

    const nextHexID = idGenerator('0123456789abcdef');
    nextHexID().should.equal('0');
    nextHexID().should.equal('1');
    nextHexID().should.equal('2');
    nextHexID().should.equal('3');
    nextHexID().should.equal('4');
    nextHexID().should.equal('5');
    nextHexID().should.equal('6');
    nextHexID().should.equal('7');
    nextHexID().should.equal('8');
    nextHexID().should.equal('9');
    nextHexID().should.equal('a');
    nextHexID().should.equal('b');
    nextHexID().should.equal('c');
    nextHexID().should.equal('d');
    nextHexID().should.equal('e');
    nextHexID().should.equal('f');
    nextHexID().should.equal('00');
    nextHexID().should.equal('01');
    nextHexID().should.equal('02');
    nextHexID().should.equal('03');
    nextHexID().should.equal('04');
    nextHexID().should.equal('05');
    nextHexID().should.equal('06');
    nextHexID().should.equal('07');
    nextHexID().should.equal('08');
    nextHexID().should.equal('09');
    nextHexID().should.equal('0a');
    nextHexID().should.equal('0b');
    nextHexID().should.equal('0c');
    nextHexID().should.equal('0d');
    nextHexID().should.equal('0e');
    nextHexID().should.equal('0f');
    nextHexID().should.equal('10');
  });

  it('works with the prefix option', () => {
    const nextPrefixedID = idGenerator('abc', {prefix: '_'});
    nextPrefixedID().should.equal('_a');
    nextPrefixedID().should.equal('_b');
    nextPrefixedID().should.equal('_c');
    nextPrefixedID().should.equal('_aa');
    nextPrefixedID().should.equal('_ab');
    nextPrefixedID().should.equal('_ac');
    nextPrefixedID().should.equal('_ba');
    nextPrefixedID().should.equal('_bb');
    nextPrefixedID().should.equal('_bc');
    nextPrefixedID().should.equal('_ca');
    nextPrefixedID().should.equal('_cb');
    nextPrefixedID().should.equal('_cc');
    nextPrefixedID().should.equal('_aaa');
    nextPrefixedID().should.equal('_aab');
    nextPrefixedID().should.equal('_aac');
    nextPrefixedID().should.equal('_aba');
  });

});
