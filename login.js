Router.route('/login.xml', {
    where: 'server',
    action: function() {

        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<Response>";
        xmlData += "<Say voice=\"woman\" language=\"en\">Hello!</Say>";
        xmlData += "</Response>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});
