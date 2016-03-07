define(['jquery', 'underscore', 'backbone', 'view/createView', 'view/homeView',
 'view/tableView', 'collection/contactCollection', 'view/messageView', 'model/contact', 'view/tableMessageAndCreateView'],
 function ($, _, Backbone, CreateView, HomeView, TableView, ContactCollection, MessageView, Contact, TableMessageAndCreateView) {
 	'use strict';

	var Route = Backbone.Router.extend({
		initialize: function () {
			this.contactCollection = new ContactCollection();
			// window.contactCollection = this.contactCollection;
			// window.contact = Contact;
			this.listenTo(this.contactCollection, 'add', this.showManage);
			this.listenTo(this.contactCollection, 'change', this.showManage);
			// should this event hook be placed? Advantages/Disadvantages?
			// this.listenTo(this.contactCollection, 'makeAndPushModel', this.makeAndPushModel);
			window.kkk = Backbone.history;
		},
		routes: {
			'': 'home',
			'home': 'home',
			'manage': 'manage',
			'edit/:cid': 'edit',
			'create': 'create',
			'viewNedit': 'viewEdit'
		},
		home: function home() {
			this._currentView = new HomeView();
			this._currentView.render();
		},
		manage: function manage() {
			// console.log(this.contactCollection);
			this._currentView = new TableView({
				collection: this.contactCollection
			});
			this._currentView.render();
		},
		edit: function edit(cid) {
			this._currentView = new CreateView({
				model: this.contactCollection.get(cid),
				collection: this.contactCollection
			});
			this._currentView.render();
			// var createView = new CreateView({
			// 	model: this.contactCollection
			// });
			// createView.render();
		},
		create: function create() {
			this._currentView = new CreateView({
				collection: this.contactCollection
			});
			this._currentView.render();
			// var $messages = $("#messages");	
			// var contact = new Contact(createView.getContactObj(), {validate: true});
			// if (contact.isValid()) {
			// 	this.contactCollection.push(contact);
			// } else {
			// 	// display messages
			// 	var messageView = new MessageView({
			// 		dataObj: {"class": "danger", message: contact.validationError}
			// 	});
			// 	messageView.render();
			// 	// var $msgHtml = $(msgTemp({"class": "danger", message: contact.validationError}));
			// 	// $messages.find('tbody').append($msgHtml);
			// 	// setTimeout(function () {
			// 	// 	$msgHtml.animate({
			// 	// 	 opacity: '0'
			// 	//     }, function () {
			// 	//     	$msgHtml.remove();
			// 	//     });
			// 	// }, 5000);
			// }
		},
		// makeAndPushModel: function (obj, collection) {
		// 	var contact = new Contact(obj.attrs, obj.options);
		// 	if (contact.isValid()) {
		// 		collection.push(contact);
		// 	} else {
		// 		// display messages
		// 		var messageView = new MessageView({
		// 			className: "bg-danger message", 
		// 			message: contact.validationError
		// 		});
		// 		messageView.render();
		// 	}
		// },
		viewEdit: function () {
			this._currentView = new TableMessageAndCreateView({
				collection: this.contactCollection
			});
			this._currentView.render();
			// window.myview = this._currentView;
		},
		execute: function (callback, args, name) {
			if (this._currentView) this._currentView.remove();
			if (callback) callback.apply(this, args);
			$('nav.nav-item li>a').parent().removeClass('active');
			$('nav.nav-item li>a[href=\"#'+name+'\"]').parent().addClass('active');
		},
		showManage: function () {
			if (Backbone.history.location.hash.search(/viewNedit/) === -1) {
				this.navigate('manage', {trigger: true});
			}
		}
	});
	return Route;
});