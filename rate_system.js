Router.route('/rate_system.xml', {
    where: 'server',
    action: function () {


        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<form id=\"ankieta\">";
        xmlData += "<prompt>marvelous.</prompt>";
        xmlData += "</form>";
        xmlData += "</vxml>";


        var xmlData = "<var name=\"MyVxmlVar\" expr=\"tmp'\" />";

        xmlData += "<form>";
        xmlData += "<block>";
        xmlData += "<prompt>";
        xmlData += "When asked if anything was more colossally dumb than dog sweaters, you answered";
        xmlData += "<value expr=\"MyVxmlVar\">";
        xmlData += "</prompt>";
        xmlData += "</block>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});