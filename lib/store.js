const uniqid = require('uniqid');

class Store{
    constructor(){
        this.memory = [];
    }

    save(object) {
        object._id = uniqid();
        this.memory.push(object);
        return object;
    }
    
    get(_id) {
        const find = this.memory.find(object => object._id === _id);

        return find ? find : null;
    }

    getAll(){
        return this.memory.slice();
    }

    remove(_id){
        let removed;
        const index = this.memory.findIndex(object => object._id === _id);
        if(index >= 0) {
            removed = this.memory.splice(index, 1);
        }

        return removed ? { removed: true } : { removed: false };
    }
}

module.exports = Store;