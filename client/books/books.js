Template.books.helpers({
  books: function() {
    return Books.find({}, {
      sort: { title: 1 }
    });
  }
});

Template.books.events({
  "click .deleteBook": function () {
    Books.remove(this._id);
  }
});
