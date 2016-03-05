require.config({
	baseUrl: "../js/",
    paths: {
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        bootstrap: 'lib/bootstrap/bootstrap',
        handlebars: 'lib/handlebars/handlebars',
        "handlebars.runtime": 'lib/handlebars/handlebars.runtime',
        templateCompiled: 'template/compiled'
    }
});
// requireText: 'lib/require/text'
//, 'requireText!template/test.handlebars'
require(['route/contactRoute', 'backbone'], 
 function (ContactRoute, Backbone) {
	'use strict';
	

	var contactRoute = new ContactRoute();
	Backbone.history.start();
	// var $messages = $("#messages");	
	// $("#form").on('submit', function (e) {
	// 	e.preventDefault();
	// 	var contact = new Contact({
	// 		fname: $("#fname").val(),
	// 		lname: $("#lname").val(),
	// 		phone: $("#phone").val(),
	// 		email: $("#email").val(),
	// 		url: $("#url").val()
	// 	}, {validate: true});
	// 	if (contact.isValid()) {
	// 		contactCollection.push(contact);
	// 	} else {
	// 		// display messages
	// 		var $msgHtml = $(msgTemp({"class": "danger", message: contact.validationError}));
	// 		$messages.find('tbody').append($msgHtml);
	// 		setTimeout(function () {
	// 			$msgHtml.animate({
	// 			 opacity: '0'
	// 		    }, function () {
	// 		    	$msgHtml.remove();
	// 		    });
	// 		}, 5000);
	// 	}
	// 	testContact.save();
	// 	console.log(contact.validationError);
	// 	console.log(contact.isValid());
	// 	console.log(contact);
	// });

	// $("#table button").on('click', function (e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var id = $this.closest("tr").find("td.id").text();
	// 	console.log(id);
	// 	if ($this.hasClass("edit")) {
	// 		console.log("Edit");
	// 	} else if ($this.hasClass("delete")) {
	// 		console.log("Delete");
	// 	}
	// });
	// $("#messages").on('click', '.fa-times', function () {
	// 	var $this = $(this);
	// 	var $tr = $this.closest('tr');
	// 	$tr.animate({
	//         // height: '+=150px',
	//         opacity: '0'
	//     }, function () {
	//     	$tr.remove();
	//     });
	// });
});