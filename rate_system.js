Router.route('/rate_system.xml', {
    where: 'server',
    action: function () {


        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<form id=\"ankieta\">";
        xmlData += "<prompt>marvelous.</prompt>";
        xmlData += "</form>";
        xmlData += "</vxml>";


        var xmlData2 = "<var name=\"MyVxmlVar\" expr=\"tmp'\" />";2

        xmlData2 += "<form>";
        xmlData2 += "<block>";
        xmlData2 += "<prompt>";
        xmlData2 += "When asked if anything was more colossally dumb than dog sweaters, you answered";
        xmlData2 += "<value expr=\"MyVxmlVar\">";
        xmlData2 += "</prompt>";
        xmlData2 += "</block>";
        xmlData2 += "</form>";
        xmlData2 += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData2);
    }
});