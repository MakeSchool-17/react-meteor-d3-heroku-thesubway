var Hours = new Meteor.Collection("Hours");

Meteor.methods({
	insertHour : function(numHours, date) {
		//numHours is a value and not a pointer
		numHours = parseInt(numHours);
		check(numHours, Number);
		check(date, Date);
		return Hours.insert({hours: numHours, date: date});
	},
	removeHour: function(id) {
		check(id, String);
		return Hours.remove(id);
	}
});