Router.route('find_user.xml', {
    where: 'server',
    action: function () {

        var client = Clients.find({
            name: this.params.query.your_name
        });

        function client_search_result() {
            if (client === undefined) {
                return "<assign name=\"isUserInDB\" expr=\"false\"/>"+"<assign name=\"clientId\" expr=\"empty\"/>";
            }else{
                return "<assign name=\"isUserInDB\" expr=\"true\"/>"+"<assign name=\"clientId\" expr=\""+client._id+"\"/>";
            }
        }

        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<var name=\"isUserInDB\"/>";
        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += client_search_result();
        xmlData += "<return namelist=\"isUserInDB clientId\"/>";
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
