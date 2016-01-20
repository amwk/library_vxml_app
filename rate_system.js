Router.route('/rate_system.xml', {
    where: 'server',
    action: function () {


        var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        xmlData += "<vxml version=\"2.1\">";
        xmlData += "<form id=\"ankieta\">";
        xmlData += "<subdialog name=\"SubD_1\" src=\"Subdialog.xml\">";
        xmlData += "<param name=\"confirm_prompt\" expr=\"'Rate from 1 to 5 our experiance? '\"/>";
        xmlData += "<filled>";
        xmlData += "<prompt>Your answer is.</prompt>";
        xmlData += "<if cond=\"SubD_1.response=='1'\">";
        xmlData += "<prompt>one, why so low?</prompt>";
        xmlData += "<elseif cond=\"SubD_1.response=='2'\"/>";
        xmlData += "<prompt>two, not bad</prompt>";
        xmlData += "<elseif cond=\"SubD_1.response=='3'\"/>";
        xmlData += "<prompt>three, thanks</prompt>";
        xmlData += "<elseif cond=\"SubD_1.response=='4'\"/>";
        xmlData += "<prompt>four, great</prompt>";
        xmlData += "<else/>";
        xmlData += "<prompt>marvelous.</prompt>";
        xmlData += "</if>";
        xmlData += "</filled>";
        xmlData += "</subdialog>";
        xmlData += "</form>";
        xmlData += "</vxml>";

        this.response.writeHead(200, {'Content-Type': 'application/xml'});
        this.response.end(xmlData);
    }
});