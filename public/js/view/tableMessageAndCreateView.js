define(['jquery', 'underscore', 'backbone', 'view/messageView', 'view/createView', 'view/tableView'],
	function ($, _, Backbone, MessageView, CreateView, TableView) {
		'use strict';

		var TableMessageAndCreateView = Backbone.View.extend({
			_views: [],
			initialize: function () {
				// this.setElement('main');
			},
			render: function () {
				// var messageView = new MessageView();
				var createView = new CreateView({
					model: this.model,
					collection: this.collection
				}); // already uses messageView to display error messages
				this._views.push(createView);
				createView.render();
				var tableView =  new TableView({
					model: this.model,
					collection: this.collection
				});
				this._views.push(tableView);
				tableView.render();
				// this.$el.append();
			},
			remove: function () {
				this.killView();
				Backbone.View.prototype.remove.apply(this, arguments);
			},
			killView: function () {
				_.each(this._views, function (view) {
					view.remove();
				});
				// this.remove(); // remove the TableMessageAndCreateView
			}
		});
		return TableMessageAndCreateView;
	});