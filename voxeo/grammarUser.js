Router.route('/grammarUser.gsl', {
    where: 'server',
    action: function () {

        var clients = Clients.find({});

        var fill_slots = function () {
            var clientArray = [];
            var names = '';
            clients.forEach(function (client) {
                names += client.name.toLowerCase() + "{ <your_name " + client.name.split(' ').join('_').toLowerCase() + ">}";
            });
            clientArray["names"] = names;

            return clientArray;
        };


        var grammar = "Request";
        grammar += "(";
        grammar += "[(User)]";
        grammar += ")";
        grammar += "User";
        grammar += "(";
        grammar += "?[(your name is)]";
        grammar += "[";
        grammar += fill_slots()["names"];
        grammar += "]";
        grammar += ")";


        this.response.writeHead(200, {'Content-Type': 'text/gls'});
        this.response.end(grammar);
    }
});
