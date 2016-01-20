Router.route('/register');

Router.route('/hello/hello.xml', {
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

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
