Template.books.helpers({
  books: function() {
    return Books.find({}, {
      sort: { name: 1 }
    });
  },
  bookClients: function(bookId) {
    return Clients.find({
      books: {
        $in: [ bookId ]
      }
    });
  }
});

