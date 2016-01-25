Clients = new Mongo.Collection("clients", {
    transform: function(doc) {
        doc.booksObj = Books.find({
            _id: { $in: doc.bookId }
        });
        return doc;
    }
});

Books = new Mongo.Collection("books", {
    transform: function(doc) {
        doc.clientsObj = Clients.find({
            bookId: { $in: [doc._id] }
        });
        return doc;
    }
});

Reservations = new Mongo.Collection("reservations");
