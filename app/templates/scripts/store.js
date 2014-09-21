var Dispatcher = require('dispatcher'),
    EventEmitter = require('events').EventEmitter,
    Actions = require('actions'),
    merge = require('react/lib/merge'),

    $ = require('jquery');

var CHANGE_EVENT = 'change',
    Const = require('const');

var counter = 0,
    text = 'Content loading',
    message = '';

$.ajax({url:'http://baconipsum.com/api/?type=meat-and-filler'})
    .done(function(data){
        text = data[0];
        Store.emitChange();
    })

var Store = merge(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getCount: function() {
        return {'count':counter};
    },

    getContent: function() {
        return {'content':text};
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case Const.COUNTER_INCREMENT:
            counter++;
            break;
        case Const.USER_MESSAGE:
            message = action.text; // do something with the message
            alert(message);
            break;
        default:
            return true;
    }

    Store.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = Store;

