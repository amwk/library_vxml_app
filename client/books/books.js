Template.books.helpers({
  books: function() {
    return Books.find({}, {
      sort: { title: 1 }
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

