Router.route('/', {
    name: 'home',
    waitOn: function() {
        return [
            Meteor.subscribe('clients'),
            Meteor.subscribe('books'),
            Meteor.subscribe('reservations')
        ];
    }
});

Router.configure({
    layoutTemplate: 'layout'
});
