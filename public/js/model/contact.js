define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
	'use strict';
	var Contact = Backbone.Model.extend({
		defaults: {
			fname: undefined,
			lname: undefined,
			phone: undefined,
			email: undefined,
			url: undefined,
			company: undefined,
			address: undefined,
			city: undefined,
			state: undefined,
			zip: undefined,
			dob: undefined,
			photo: undefined
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