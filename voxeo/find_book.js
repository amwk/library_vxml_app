Router.route('find_book.xml', {
    where: 'server',
    action: function () {

        var book = Books.find({
            author: this.params.query.global_book_author,
            title: this.params.query.global_book_name,
            publisher: this.params.query.global_publishing_house
        });

        function book_search_result() {
            if (book === undefined) {
                return "<assign name=\"isInDB\" expr=\"false\"/>"+"<assign name=\"bookId\" expr=\"empty\"/>";
            }else{
                return "<assign name=\"isInDB\" expr=\"true\"/>"+"<assign name=\"bookId\" expr=\""+book._id+"\"/>";
            }
        }

        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<var name=\"isInDB\"/>";
        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += book_search_result();
        xmlData += "<return namelist=\"isInDB bookId\"/>";
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
