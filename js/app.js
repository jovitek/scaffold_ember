
define('init', ['ember', 'handlebars'], function (INIT) {
    var App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });

    return App;
});


require(['init'], function(App) {

    App.Router.map(function(){
       this.resource('application', { path: '/'});
    });

    App.ApplicationRoute = Ember.Route.extend({

        model: function(){

            return ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Something Else..."];
        },

        renderTemplate: function() {
            this.render('application');
        }

    });

    App.ApplicationController = Ember.Controller.extend({

        hello: "Hello to you",

        dynoForm: null,

        init: function() {
            var controller = this;

            var newHello = controller.get('hello');
            console.log(newHello);
        },

        actions: {
            getDyno: function(inputVal) {
                var controller = this;
                var dynoValue = controller.get('dynoForm');
                console.log(dynoValue);
            }
        }
    });
});


