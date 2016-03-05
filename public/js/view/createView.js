define(['jquery','underscore', 'backbone', 'templateCompiled/form.handlebars'],
 function ($, _, Backbone, formTemp) {
	var CreateView = Backbone.View.extend({
		tagName: 'form',
		id: 'form',
		initialize: function () {
			// this.setElement($('#form')[0]);
		},
		template: formTemp,
		render: function (){
			// this.$el.empty(); handeled by router's execute function
			$('main').append(this.$el.append(this.template(this.model.toJSON())));
			return this;
		},
		events: {
			'submit': function (e) { this.onFormSubmit(e);}
		},
		onFormSubmit: function (e) {
			e.preventDefault();
			var obj = {
				attrs: {
					fname: $("#fname").val(),
					lname: $("#lname").val(),
					phone: $("#phone").val(),
					email: $("#email").val(),
					url: $("#url").val()
				},
				options: {validate: true}
			};
			this.collection.trigger('makeAndPushModel', obj, this.collection);

			// this.model.set({
			// 	fname: $("#fname").val(),
			// 	lname: $("#lname").val(),
			// 	phone: $("#phone").val(),
			// 	email: $("#email").val(),
			// 	url: $("#url").val()
			// }, {validate: true});
			// if (this.model.isValid()) {
			// 	this.collection.push(this.model);
			// } else {
			// 	// display messages
			// 	var messageView = new MessageView({
			// 		className: "bg-danger message", 
			// 		message: this.model.validationError
			// 	});
			// 	messageView.render();
			// }


			// var $messages = $("#messages");	
			// var contact = new Contact({
			// 	fname: $("#fname").val(),
			// 	lname: $("#lname").val(),
			// 	phone: $("#phone").val(),
			// 	email: $("#email").val(),
			// 	url: $("#url").val()
			// }, {validate: true});
			// if (contact.isValid()) {
			// 	this.collection.push(contact);
			// 	console.log(this);
			// } else {
			// 	// display messages
			// 	var $msgHtml = $(msgTemp({"class": "danger", message: contact.validationError}));
			// 	$messages.find('tbody').append($msgHtml);
			// 	setTimeout(function () {
			// 		$msgHtml.animate({
			// 		 opacity: '0'
			// 	    }, function () {
			// 	    	$msgHtml.remove();
			// 	    });
			// 	}, 5000);
			// }
		}
	});
	return CreateView;
});