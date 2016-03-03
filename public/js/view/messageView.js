define(['jquery', 'underscore', 'backbone', 'templateCompiled/message.handlebars'],
 function ($, _, Backbone, messageTemp) {
 	var MessageView = Backbone.View.extend({
 		tagName: 'p',
 		className: '',
 		initialize: function (options) {
 			this.options = options;
 			// this.setElement($("#messages tbody")[0]);
 			// setting className this way wont work
 			// this.className = options.className + ' message';
 			// console.log(this.className);
 		},
 		template: messageTemp,
 		render: function () {
 			var $msgHtml = $(this.template(this.options));
 			$('main').append(this.$el.append($msgHtml));
 			var that = this;
 			setTimeout(function () {
				$msgHtml.animate({
				 opacity: '0'
			    }, function () {
			    	that.remove();
			    });
			}, 5000);
 		}
 	});
 	return MessageView;
});