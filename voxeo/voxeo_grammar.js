Router.route('/grammar.gls', {
    where: 'server',
    action: function () {

        var books = Books.find({});

        var fill_slots = function() {
            var bookArray = [];
            var titles='';
            var authors='';
            var publishers='';
            books.forEach(function(book){
                titles+=book.title + "{ <book_name "+book.title +">}\n";
                authors+=book.author+ "{ <book_author "+book.title +">}\n";
                publishers+=book.publisher+ "{ <publishing_house "+book.title +">}\n";
            });
            bookArray["titles"]=titles;
            bookArray["authors"]=authors;
            bookArray["publishers"]=publishers;

            return bookArray;
        };

        var fill_titles = function(){

        };

        var fill_publishers = function(){

        };


        var grammar = "Request\n";
        grammar += "(";
        grammar += "[(BookName) (BookAuthor) (PublishingHouse)] ?[(BookName) (BookAuthor) (PublishingHouse)] ?[(BookName) (BookAuthor) (PublishingHouse)]\n";
        grammar += ")\n";
        grammar += "BookName\n";
        grammar += "(\n\n";
        grammar += "?[(title of book is) (titled)]\n";
        grammar += "[\n";
        grammar += fill_slots()["titles"];
        grammar += "]\n";
        grammar += ")\n";
        grammar += "BookAuthor\n";
        grammar += "(\n";
        grammar += "    ?[(author of book) (is written by)]\n";
        grammar += "[\n";
        grammar += fill_slots()["authors"];
        grammar += "]\n";
        grammar += ")\n";
        grammar += "PublishingHouse\n";
        grammar += "(\n";
        grammar += "    ?[(published by) (publisher is) (issued by)]\n";
        grammar += "[\n";
        grammar += fill_slots()["publishers"];
        grammar += "]\n";
        grammar += ")\n";

        this.response.writeHead(200, {'Content-Type': 'text/gls'});
        this.response.end(grammar);
    }
});
