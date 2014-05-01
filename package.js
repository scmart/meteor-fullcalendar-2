Package.describe({
	summary: "fullcallendar v2 for Meteor - FullCalendar is a jQuery plugin that provides a full-sized, drag & drop calendar"
});

Package.on_use(function(api, where) {
	api.use(['moment', 'jqueryui'], 'client');
	api.add_files(['fullcalendar/fullcalendar.js', 
				   'fullcalendar/fullcalendar.css',
				   'fullcalendar/lang/all.js'
				  ], 'client');
});
