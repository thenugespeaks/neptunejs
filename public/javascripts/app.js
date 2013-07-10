// Generated by CoffeeScript 1.6.2
(function() {
  window.Neptune = Ember.Application.create({
    ApplicationController: Ember.Controller.extend({
      debug: true
    }),
    ApplicationView: Ember.View.extend({
      templateName: 'application'
    }),
    Router: Ember.Router.extend({
      root: Ember.Route.extend({
        doHome: function(router, event) {
          return router.transitionTo('home');
        },
        doMyProfile: function(router, event) {
          return router.transitionTo('myProfile');
        },
        doEmailMessaging: function(router, event) {
          return router.transitionTo('emailMessaging');
        },
        doSmsMessaging: function(router, event) {
          return router.transitionTo('smsMessaging');
        },
        home: Ember.Route.extend({
          route: '/',
          connectOutlets: function(router, event) {
            return router.get('applicationController').connectOutlet('home');
          }
        }),
        myProfile: Ember.Route.extend({
          route: '/myProfile',
          connectOutlets: function(router, event) {
            if (Neptune.accountController.isLoggedIn) {
              return router.get('applicationController').connectOutlet('myProfile');
            } else {
              return router.transitionTo('home');
            }
          }
        }),
        emailMessaging: Ember.Route.extend({
          route: '/emailMessaging',
          connectOutlets: function(router, event) {
            if (Neptune.accountController.isLoggedIn) {
              return router.get('applicationController').connectOutlet('emailMessaging');
            } else {
              return router.transitionTo('home');
            }
          }
        }),
        smsMessaging: Ember.Route.extend({
          route: '/smsMessaging',
          connectOutlets: function(router, event) {
            if (Neptune.accountController.isLoggedIn) {
              return router.get('applicationController').connectOutlet('smsMessaging');
            } else {
              return router.transitionTo('home');
            }
          }
        })
      })
    })
  });

  window.Neptune.initialize();

}).call(this);
