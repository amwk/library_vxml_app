Router.route('/rate_system.xml', {
    where: 'server',
    action: function () {


        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<form id=\"ankieta\">";
        xmlData += "<prompt>marvelous.</prompt>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});