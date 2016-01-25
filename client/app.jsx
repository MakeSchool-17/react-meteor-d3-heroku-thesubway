App = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData: function() {
		return {
			hours: Hours.find({}).fetch()
		}
	}
});