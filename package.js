Package.describe({
	summary: "fullcallendar v2 for Meteor - FullCalendar is a jQuery plugin that provides a full-sized, drag & drop calendar"
});

Package.on_use(function(api, where) {
	api.use(['moment'], 'client');
	api.add_files(['lib/jquery-ui-1.10.4.custom.js',
				   'fullcalendar/fullcalendar.js', 
				   'fullcalendar/fullcalendar.css',
				   'fullcalendar/lang-all.js'
				  ], 'client');
});
