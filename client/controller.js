if (Meteor.isClient) {

    Template.body.events({
        'submit .add': function (event) {

            var name = event.target.name.value;
            var createdAt = new Date();

            var title = event.target.title.value;
            var author = event.target.author.value;
            var publisher = event.target.publisher.value;

            var clients = Clients.findOne({name: name});

            var clientId = Random.id();
            var bookId = Random.id();

            if (clients != '' && (title=='' || author=='' || publisher=='' )) {
                Clients.insert({
                    _id: clientId,
                    name: name,
                    createdAt: createdAt
                });
            }

            if (title!='' && author!='' && publisher!='' && clients == '') {
                Books.insert({
                    _id: bookId,
                    author: author,
                    title: title,
                    publisher: publisher,
                    createdAt: createdAt
                });
            }

            if (clients != ''&& title!='' && author!='' && publisher!='') {
                Clients.insert({
                    _id: clientId,
                    name: name,
                    createdAt: createdAt
                });
                Books.insert({
                    _id: bookId,
                    author: author,
                    title: title,
                    publisher: publisher,
                    createdAt: createdAt
                });

                Reservations.insert({
                    _id : Random.id(),
                    clientsId: clientId,
                    bookId: bookId,
                    name: name,
                    author: author,
                    title: title,
                    publisher: publisher,
                    createdAt: createdAt
                });
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}

