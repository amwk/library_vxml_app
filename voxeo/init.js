Router.route('/init.ddd', {
    where: 'server',
    action: function () {


        Assets.getText("foo.txt", function (err, res) {


        });

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
