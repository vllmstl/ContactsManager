define(['jquery', 'backbone', 'templateCompiled/tableEntry.handlebars'], function ($, Backbone, tableEntryTemp) {
	'use strict';
	var TableEntryView = Backbone.View.extend({
		initialize: function () {
			this.listenTo(this.model, 'change', this.replace);
		},
		tagName: 'tr',
		template: tableEntryTemp,
		render: function () {
			var modifiedJSON = this.model.toJSON();
			modifiedJSON.cid = this.model.cid;
			this.$el.append(this.template(modifiedJSON));
			return this;
		},
		events: {
			'click a.delete': 'removeEntry',
			'click a.edit': 'editEntry'
		},
		removeEntry: function () {
			this.model.destroy({
				success: function () {
					//console.log("Destroyed");
				},
				error: function () {
					// console.log("Failed to destory");
				}
			});
			this.remove();
		},
		editEntry: function () {
			// this.model.set('fname', 'changed');
		},
		replace: function () {
			this.$el.empty();
			this.render();
		}
	});
	return TableEntryView;
});