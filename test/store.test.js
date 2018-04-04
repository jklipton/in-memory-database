const assert = require('assert');
const Store = require('../lib/store');
const uniqid = require('uniqid');


describe('store methods', () => {

    let testStore;
    beforeEach(() => {
        testStore = new Store();
        const toSave = [{
            name: 'journey',
            breed: 'staffordshire terrier',
            talent: 'head-size'
        }, {
            name: 'boondog',
            breed: 'swiss shephard',
            talent: 'whistling'
        }, {
            name: 'louis',
            breed: 'cavalier spaniel',
            talent: 'staring'
        }];
    });

    it('save function', () => {
        const returned = testStore.save(toSave[0]);
    
        assert.deepEqual(returned, {
            _id: `${_id}`,
            name: 'journey',
            breed: 'staffordshire terrier',
            talent: 'head-size'
        });
    });

    it('get function by id', () => {
        testStore.save(toSave[0]);
        const returned = testStore.get(_someID);
    
        assert.deepEqual(returned, {
            _id: '_someID',
            name: 'journey',
            breed: 'staffordshire terrier',
            talent: 'head-size'
        });
    });

    it('get function, no result returns null', () => {
        const returned = testStore.get(_someID);
    
        assert.deepEqual(returned, null);
    });

    it('getAll function', () => {
        testStore.save(toSave[0]);
        testStore.save(toSave[1]);
        testStore.save(toSave[2]);
        
        const returned = testStore.getAll();
    
        assert.deepEqual(returned, toSave);
    });

    it('getAll function, returns empty', () => {
        const returned = testStore.getAll();
    
        assert.deepEqual(returned, []);
    });

    it('remove function, true', () => {
        const returned = testStore.remove(_someID);
    
        assert.deepEqual(returned, true);
    });

    it('remove function, false', () => {
        const returned = testStore.remove(_someID);
    
        assert.deepEqual(returned, false);
    });

});