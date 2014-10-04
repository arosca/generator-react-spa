var Dispatcher = require('dispatcher');
var Const = require('const');

var Actions = {

    increment: function() {
        Dispatcher.handleViewAction({
            'actionType': Const.COUNTER_INCREMENT
        });
    },

    userMessage: function(message) {
        Dispatcher.handleViewAction({
            'actionType': Const.USER_MESSAGE,
            'message': message
        });
    }

};

module.exports = Actions;
