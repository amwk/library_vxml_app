Template.reservations.helpers({
    reservations: function() {
    console.log(Clients.find({_id:Reservations.findOne({_id:this._id})}).name);



        return _.values([
            Clients.find({_id:Reservations.findOne({_id:this._id})}),
            Books.find({_id:Reservations.findOne({_id:this._id})})
        ]);
  }
});
