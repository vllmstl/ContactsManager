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
 			this.$msgHtml = $(this.template(this.options));
 			$('main').append(this.$el.append(this.$msgHtml));
 			var that = this;
 			this.timer = setTimeout(function () {
 				that.removeDivAnim(that);
 			}, 5000);
 		},
 		events: {
 			'click button.close': 'destroyView'
 		},
 		destroyView: function (e) {
 			e.preventDefault();
 			clearTimeout(this.timer);
 			this.removeDivAnim(this);
 		},
 		removeDivAnim: function (that) {
			that.$msgHtml.animate({
			 opacity: '0'
		    }, function () {
		    	that.remove();
		    });
 		}
 	});
 	return MessageView;
});