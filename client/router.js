Router.route('/', {
    name: 'home',
    waitOn: function() {
        return [
            Meteor.subscribe('clients'),
            Meteor.subscribe('books')
        ];
    }
});

Router.route('/clients/:id', {
    name: 'client',
    waitOn: function() {
        return [
            Meteor.subscribe('clients', this.params.id),
            Meteor.subscribe('clientBooks', this.params.id)
        ];
    }
});

Router.route('/books/:id', {
    name: 'book',
    waitOn: function() {
        return [
            Meteor.subscribe('books', this.params.id),
            Meteor.subscribe('bookClients', this.params.id)
        ];
    }
});

Router.configure({
    layoutTemplate: 'layout'
});
