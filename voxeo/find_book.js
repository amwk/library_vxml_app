Router.route('find_books.xml', {
    where: 'server',
    action: function () {

        var tmp=this.params.query.global_book_author;

        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<var name=\"MyVxmlVar\" expr=\"'yes'\" />";
        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += book_found();
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        function book_found(){
            return "<assign name=\"response.isInDB\" expr=\"true\"/>";
        }

        function book_not_found(){
            return"<assign name=\"response.isInDB\" expr=\"false\"/>";
        }

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
