Router.route('/grammar.gsl', {
    where: 'server',
    action: function () {

        var books = Books.find({});

        var fill_slots = function () {
            var bookArray = [];
            var titles = '';
            var authors = '';
            var publishers = '';
            books.forEach(function (book) {
                titles += book.title.toLowerCase() + "{ <book_name " + book.title.split(' ').join('_').toLowerCase() + ">}";
                authors += book.author.toLowerCase() + "{ <book_author " + book.author.split(' ').join('_').toLowerCase() + ">}";
                publishers += book.publisher.toLowerCase() + "{ <publishing_house " + book.publisher.split(' ').join('_').toLowerCase() + ">}";
            });
            bookArray["titles"] = titles;
            bookArray["authors"] = authors;
            bookArray["publishers"] = publishers;

            return bookArray;
        };

        var fill_titles = function () {

        };

        var fill_publishers = function () {

        };

        var grammar = "Request";
        grammar += "(";
        grammar += "[(BookName) (BookAuthor) (PublishingHouse)]" +
            "?[(BookName) (BookAuthor) (PublishingHouse)]" +
            "?[(BookName) (BookAuthor) (PublishingHouse)]";
        grammar += ")";
        grammar += "BookName";
        grammar += "(";
        grammar += "?[(title of book is) (titled)]";
        grammar += "[";
        grammar += fill_slots()["titles"];
        grammar += "]";
        grammar += ")";
        grammar += "BookAuthor";
        grammar += "(";
        grammar += "?[(author of book) (is written by)]";
        grammar += "[";
        grammar += fill_slots()["authors"];
        grammar += "]";
        grammar += ")";
        grammar += "PublishingHouse";
        grammar += "(";
        grammar += "?[(published by) (publisher is) (issued by)]";
        grammar += "[";
        grammar += fill_slots()["publishers"];
        grammar += "]";
        grammar += ")";

        this.response.writeHead(200, {'Content-Type': 'text/gls'});
        this.response.end(grammar);
    }
});
