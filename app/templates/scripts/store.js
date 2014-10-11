var Dispatcher = require('dispatcher'),
    Const = require('const'),
    Actions = require('actions'),

    $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var Store = Backbone.Model.extend({
    url: 'http://baconipsum.com/api/?type=meat-and-filler',

    parse: function(data) {
        return {text: data[0]};
    },

    defaults: {
        text: 'Loading content',
        counter: 0,
        message: ''
    },

    initialize: function() {
        this.fetch();
    }
});

var store = new Store();

Dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case Const.COUNTER_INCREMENT:
            var count = store.get('counter') + 1;
            store.set({ counter: count });
            break;
        case Const.USER_MESSAGE:
            store.set({ message: action.message });
            alert(store.get('message'));
            break;
        case Const.GET_TEXT:
            store.set(store.defaults).fetch({cache: false});
            break;
        default:
            return true;
    }

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = store;

