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
![alert](http://i68.tinypic.com/2nsp0rl.png)
![confirm](http://i64.tinypic.com/55pc9w.png)

# Supported Browsers
Currently, this project has been tested on IE9+ and other modern browsers (Chrome, Firefox, Safari)
