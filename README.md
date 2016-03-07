npm install -g bower

bower init
bower install underscore --save
bower install http://requirejs.org/docs/release/2.1.22/minified/require.js --save

npm install -g bower-installer

bower.json ====
  "install": {
    "path": {
      "js": "public/js/lib",
      "css": "public/css/lib"
    }
  }
### require js will take the base from the initiating index.html file.
<script src="../js/lib/require/require.js" data-main="../js/main.js"></script>
require.config({
	baseUrl: "public/js/",
	paths: {
	    jquery: 'lib/jquery/jquery',
	    underscore: 'lib/underscore/underscore',
	    backbone: 'lib/backbone/backbone',
	    bootstrap: 'lib/bootstrap/bootstrap'
	}
});

npm install -g less
lessc main.less > main.css

### stick footer bottom
@footer-height: 50px;
html {
	position: relative;
	min-height: 100%;
}
.footer-sticky-container {
	margin-bottom: @footer-height;
}
.footer-sticky {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: @footer-height;
	background: #efefef;
}

### RequireJs Text plugin
require.config({
	baseUrl: "../js/",
    paths: {
        handlebars: 'lib/handlebars/handlebars',
        requireText: 'lib/require/text'
    }
});
### VAR!LOCATION will cause the require.js to use the script file located at the VAR to load text located at LOCATION.
require(['requireText!template/test.handlebars'], function (text) {});

### Binding to created elements
var ul = document.getElementsByTagName("ul")[0]; // assuming it exists
var docfrag = document.createDocumentFragment();
var browserList = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"];
browserList.forEach(function(e) {
  var li = document.createElement("li");
  li.textContent = e;
  docfrag.appendChild(li);
  setTimeout(function () {
    li.parentNode.removeChild(li);
  }, 2000*Math.random());
});
ul.appendChild(docfrag);
### New: Binding to created elements
// display messages
var $msgHtml = $(msg({"class": "danger", message: contact.validationError}));
$messages.find('tbody').append($msgHtml);
setTimeout(function () {
	$msgHtml.animate({
	 opacity: '0'
    }, function () {
    	$msgHtml.remove();
    });
}, 5000);

### will not work
this.setElement(function () {
  return $('#form')[0];
});

### On an event callback function in Backbone, the 'this' inside the callback function
refers to the Backbone Object rather than the element on which the event took place.

attributes -> for defining Backbones attributes
options -> to pass in Backbone defined/ user defined options

Destroying a model will bubble to the collection


////////////// TODO
A 2 way binding form
Just update that specific tag, dont redraw the whole component

////////////// BACKUP

<tbody>
  {{#each contact}}
  <tr>
    <td class='col-sm-1 id'>{{id}}</td>
    <td>{{fname}}</td>
    <td>{{lname}}</td>
    <td>{{phone}}</td>
    <td>{{email}}</td>
    <td>{{url}}</td>
    <td class='col-sm-2'>
      <button type='button' class='btn btn-warning edit'><i class="fa fa-pencil-square-o"></i>&nbsp;Edit</button>&nbsp;
      <button type='button' class='btn btn-danger delete'><i class="fa fa-trash-o"></i>&nbsp;Delete</button>
    </td>
  </tr>
  {{/each}}
</tbody>