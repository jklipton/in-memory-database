const assert = require('assert');
const Store = require('../lib/store');


describe('store methods', () => {

    let testStore;
    let toSave;
    beforeEach(() => {
        testStore = new Store();
        toSave = [{
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

    function loadAll(){
        testStore.save(toSave[0]);
        testStore.save(toSave[1]);
        testStore.save(toSave[2]);
    }

    it('save function with new id', () => {
        const returned = testStore.save(toSave[0]);

        assert.ok(returned._id, true);
    });

    it('save function returning given object', () => {
        const returned = testStore.save(toSave[0]);

        assert.deepEqual(returned.name, 'journey');
    });

    it('get function by id', () => {
        loadAll();
        const _someID = testStore.memory[0]._id;
        const returned = testStore.get(_someID);

        assert.deepEqual(returned.name, 'journey');
    });

    it('get function, no result returns null', () => {
        loadAll();
        const returned = testStore.get('your mom');
    
        assert.deepEqual(returned, null);
    });

    it('getAll function', () => {
        loadAll();
        
        const returned = testStore.getAll();
    
        assert.deepEqual(returned, toSave);
    });

    it('getAll function, returns empty', () => {
        const returned = testStore.getAll();
    
        assert.deepEqual(returned, []);
    });

    it('remove function, true', () => {
        loadAll();
        const _someID = testStore.memory[0]._id;
        const returned = testStore.remove(_someID);
    
        assert.deepEqual(returned, { removed: true });
    });

    it('remove function, false', () => {

        const returned = testStore.remove('your mom');
    
        assert.deepEqual(returned, { removed: false });
    });

});