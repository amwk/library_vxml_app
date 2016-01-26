if (Meteor.isClient) {

    Template.body.events({
        'submit .add': function (event) {

            var name = event.target.name.value;
            var createdAt = new Date();

            var title = event.target.title.value;
            var author = event.target.author.value;
            var publisher = event.target.publisher.value;

            var clients = Clients.findOne({name:name});

            var clientId = Random.id();
            var bookId = Random.id();

            if(clients === undefined){
                Clients.insert({
                    _id:  clientId,
                    bookId: [bookId],
                    name: name,
                    createdAt: createdAt
                });
            }else{
                clientId=clients._id;
                Clients.update({ _id:clientId },{$push: { bookId: bookId }});
            }

            Books.insert({
                _id : bookId,
                author: author,
                title: title,
                publisher: publisher,
                createdAt: createdAt
            });

            Reservations.insert({
                _id : Random.id(),
                clientsId: clientId,
                bookId: bookId
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}

