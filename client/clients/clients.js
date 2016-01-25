Template.clients.helpers({
  clients: function() {
    return Clients.find({}, {
      sort: { name: 1 }
    });
  }
});


Template.clients.events({
    "click .deleteBook": function () {
            Books.remove(this._id);
    }
});

Template.clients.events({
    "click .deleteClient": function () {
        Clients.remove(this._id);
    }
});
