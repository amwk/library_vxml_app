Router.route('find_book.xml', {
    where: 'server',
    action: function () {

        var tmp=this.params.query.global_book_author;

        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<var name=\"isInDB\"/>";
        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += book_found();
        xmlData += "<return namelist=\"isInDB\"/>";
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        function book_found(){
            return "<assign name=\"isInDB\" expr=\"true\"/>";
        }

        function book_not_found(){
            return"<assign name=\"isInDB\" expr=\"false\"/>";
        }

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
