Template.reservations.helpers({
    reservations: function() {
        return Reservations.find({}, {
            sort: { name: 1 }
        });
    }
});

Template.reservations.events({
    "click .deleteReservation": function () {
        Reservations.remove(this._id);
    }
});
