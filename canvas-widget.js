//Wait for Document is ready
document.addEventListener('DOMContentLoaded', function () {

	//Get all Canvas widgets
	var cws = document.getElementsByClassName("ksart-canvas-widget-embed");
	//Loop all Canvas widgets
	for(var i = 0; i < cws.length; i++) {
		//Current Canvas widget
   		cw = cws.item(i);

   		//Current Username to lookup
   		username = cw.getAttribute("data-username");
   		//Current desired Dimensions
   		width = cw.getAttribute("data-width");
   		height = cw.getAttribute("data-height");

   		//Get talents HTML from user, with Ajax
   		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://www.ksart.nl/embed/canvas-widget.php?username='+username+'&width='+width+'&height='+height);
		xhr.onload = function() {
		    if (xhr.status === 200) {
		        response = xhr.responseText;

		        //Inject talents HTML in Current Canvas widget
		        cw.innerHTML = response;
		    }
		    else {
		        console.log('Aanvraag mislukt. Huidige status: ' + xhr.status);
		    }
		};
		xhr.send();

	}

});