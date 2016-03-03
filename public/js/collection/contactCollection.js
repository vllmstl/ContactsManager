define(['backbone', 'model/contact'], function (Backbone, Contact) {
	var ContactCollection =  Backbone.Collection.extend({
		model: Contact
	});
	return ContactCollection;
});