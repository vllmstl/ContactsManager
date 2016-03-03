define(['jquery', 'underscore', 'backbone', 'templateCompiled/table.handlebars', 'view/tableEntryView'],
 function ($, _, Backbone, tableTemp, TableEntryView) {
 	'use strict';
 	var TableView = Backbone.View.extend({
 		tagName: 'section',
 		className: 'table-responsive',
 		id: 'table',
 		initialize: function () {
 			// this.setElement($('#table')[0]);
 			this.listenTo(this.collection, 'add', this.addToView);
 			this.listenTo(this.collection, 'remove', this.removeFromView);
 			this.listenTo(this.collection, 'change', function () {console.log('it bubbled to the collection');});
 		},
 		template: tableTemp,
 		render: function () {
 			// this.$el.empty(); handeled from router's execute block
 			var $templateText = $(this.template());
 			this._$tbody = $templateText.find('tbody');
 			this.collection.each(function (item) {
 				var entry = new TableEntryView({model: item});
 				this._$tbody.append(entry.render().$el);
 			}, this);
 			$('main').append(this.$el.append($templateText));
 			// this.$el.append(this.template({contact: this.collection.toJSON()}));
 		},
 		addToView: function (model, collection, options) {
 			var entry = new TableEntryView({model: model});
			this._$tbody.append(entry.render().$el);
 		},
 		removeFromView: function (model, collection, options) {}
 	});
 	return TableView;
});