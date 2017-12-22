# Chrome-Native-Alert
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
