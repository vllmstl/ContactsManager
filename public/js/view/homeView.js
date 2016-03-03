define(['jquery', 'underscore', 'backbone', 'templateCompiled/home.handlebars'], 
 function ($, _, Backbone, homeTemp) {
 	var HomeView = Backbone.View.extend({
 		tagName: 'section',
 		id: 'home',
 		initialize: function () {
			// this.setElement($('#home')[0]);
		},
		template: homeTemp,
		render: function () {
			// this.$el.empty(); // handeled from execute in routes
			$('main').append(this.$el.append(this.template()));
		}
 	});
	return HomeView;		
});