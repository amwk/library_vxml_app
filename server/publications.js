Meteor.publish('clients', function(clientId) {
  if (clientId) {
    return Clients.find({ _id: clientId });
  }
  return Clients.find();
});

Meteor.publish('clientBooks', function(clientId) {
  var client = Clients.findOne({ _id: clientId });
  return Books.find({
    _id: {
      $in: client.bookId
    }
  });
});

Meteor.publish('books', function(bookId) {
  if (bookId) {
    return Books.find({ _id: bookId });
  }
  return Books.find();
});

Meteor.publish('bookClients', function(bookId) {
  return Clients.find({
    bookId: {
      $in: [ bookId ]
    }
  });
});
