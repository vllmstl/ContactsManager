define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
	'use strict';
	var Contact = Backbone.Model.extend({
		defaults: {
			fname: null,
			lname: null,
			phone: null,
			email: null,
			url: null,
			company: null,
			address: null,
			city: null,
			state: null,
			zip: null,
			dob: null,
			photo: null
		},
		validate: function (attrs, options) {
			if (attrs && ( (attrs.fname && attrs.fname.trim()) || (attrs.lname && attrs.lname.trim()) || (attrs.company && attrs.company.trim()))) {

			} else {
				return "Invalid field entries!";
			}
		},
		urlRoot: "/contact"
	});
	return Contact;
});