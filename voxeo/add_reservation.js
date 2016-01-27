Router.route('/add_reservation.xml', {
    where: 'server',
    action: function () {

        var bookTitle = this.params.query.global_book_name;
        var bookAuthor = this.params.query.global_book_author;
        var bookPublishingHouse = this.params.query.global_publishing_house;
        var clientName = this.params.query.global_user_name;

        var clientId = this.params.query.global_user_id;
        var bookId = this.params.query.global_book_id;


        Reservations.insert({
            _id : Random.id(),
            clientsId: clientId,
            bookId: bookId,
            name: clientName,
            author: bookAuthor,
            title: bookTitle,
            publisher: bookPublishingHouse,
            createdAt: new Date()
        });


        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += "<prompt> Ok. Book has been reserved</prompt>";
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";


        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
