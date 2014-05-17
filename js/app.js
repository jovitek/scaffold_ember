
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
            return 1;
        },
        renderTemplate: function() {
            this.render('application')
        }

    });

    App.ApplicationController = Ember.Controller.extend({
        hello: "This is the message",
        init: function() {
            console.log('We are in');
        }
    });
});


