# Chrome Native Alert
Inspired by Google chrome's native alert, use it on any browser

# Usage:

	// Just include this javascript file before </body> tag

	// alert
	n.alert("Hello World!");

	// confirm 
	n.confirm( "Are you sure?", 
	
		function() {
			console.log( "Okay button was clicked" );
		},

		function() {
			console.log( "Cancel button was clicked" );
		}
	);

# Screenshots
![alert](http://i63.tinypic.com/mj313d.png)

# Supported Browsers
Currently, this project has been tested on IE9+ and other modern browsers (Chrome, Firefox, Safari)
