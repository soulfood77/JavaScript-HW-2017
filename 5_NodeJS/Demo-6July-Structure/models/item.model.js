class Item {
    static isValid(model) {
        // data layer validation
        // Does model have text property??
        // Shouldn't we use Item??
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Item();
        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });
        return viewModel;
    }

    static fromViewModel(viewModel) {

    }
}

module.exports = Item;
