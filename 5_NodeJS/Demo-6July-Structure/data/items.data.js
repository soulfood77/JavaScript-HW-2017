const BaseData = require('./base/base.data');
const Item = require('../models/item.model');

class ItemsData extends BaseData {
    constructor(db) {
        // db, ModelClass, validator
        super(db, Item, Item);
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
        // moved to item.model.js
        //     return typeof model !== 'undefined' &&
        //         typeof model.text === 'string' &&
        //         model.text.length > 3;
    }
}

module.exports = ItemsData;
