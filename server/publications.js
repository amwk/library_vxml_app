Meteor.publish('clients', function(clientId) {
  if (clientId) {
    return Clients.find({ _id: clientId });
  }
  return Clients.find();
});

Meteor.publish('books', function(bookId) {
  if (bookId) {
    return Books.find({ _id: bookId });
  }
  return Books.find();
});

Meteor.publish('reservations', function(reservationId) {
    if (reservationId) {
        return Reservations.find({ _id: reservationId });
    }
    return Reservations.find();
});

