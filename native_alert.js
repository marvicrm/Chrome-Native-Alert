/*
	Chrome Native Alert & Confirm
	https://github.com/marvicrm/Chrome-Native-Alert
	
	@version 1.0
	@author Marvic Macalintal
	
	Usage:

	Just include this javascript file before </body> tag

	// alert
	n.alert("Hello World!");

	// confirm 
	n.confirm("Are you sure?", 
				
				function() {
					console.log( "Okay button was clicked" );
				},
				
				function() {
					console.log( "Cancel button was clicked" );
				}
			);
	

*/

var n = {

// alert 
// @param string
alert	:	function( str ) {
	this.build( 'alert', str );
	this.events();
},

// confirm 
// @param string, text to output
// @param function, function to call if "OK" button is click
// @param function, function to call if "Cancel" button is click
confirm	:	function( str, yes, no ) {
	this.build( 'confirm', str );
	this.events();
	
	this.yes(yes);
	this.no(no);
},

// this function will run if "OK" button is click
yes	:	function(param) {
	document.getElementById( 'ok_btn' ).addEventListener( 'click', function() {
		param();
	});
	
},

// this function will run if "Cancel" button is click
no	:	function(param) {
	document.getElementById( 'cancel_btn' ).addEventListener( 'click', function() {
		param();
	});

},

// build 
// @param string, type of modal to show (alert || confirm)
// @param string, text to output
build	:	function( type, str ) {
	
	var hostname = window.location.hostname, cover = document.createElement( 'div' ), modal_content = document.createElement( 'div' );
		
	cover.setAttribute( 'style', this.css()['cover'] );
	cover.setAttribute( 'class', 'n_alert' );
	modal_content.setAttribute( 'style', this.css()['alert'] );
	
	document.body.appendChild( cover );
	cover.appendChild( modal_content );
			
	switch( type ) {
	
		case 'alert':

			modal_content.innerHTML = '<section style="'+this.css()['modal_header']+'"><button id="close_btn" style="'+this.css()['close_btn']+'">x</button></section>';
			modal_content.innerHTML+= '<span style="'+this.css()['header_txt']+'">'+hostname+' says:</span>';
			modal_content.innerHTML+= '<span style="'+this.css()['content_txt']+'">' + str + '</span>';
			modal_content.innerHTML+= '<section style="'+this.css()['modal_footer']+'"><button id="ok_btn" style="'+this.css()['ok_btn']+'">OK</button></section>';
			
		break;
	
		case 'confirm':
			
			modal_content.innerHTML = '<section style="'+this.css()['modal_header']+'"><button id="close_btn" style="'+this.css()['close_btn']+'">x</button></section>';
			modal_content.innerHTML+= '<span style="'+this.css()['header_txt']+'">'+hostname+' says:</span>';
			modal_content.innerHTML+= '<span style="'+this.css()['content_txt']+'">' + str + '</span>';
			modal_content.innerHTML+= '<section style="'+this.css()['modal_footer']+'"><button id="ok_btn" style="'+this.css()['ok_btn']+'">OK</button><button id="cancel_btn" style="'+this.css()['cancel_btn']+'">Cancel</button></section>';
			
		break;
	
	}
	
},

// events
events	:	function() {
	
		this.remove( 'close_btn' );
		this.remove( 'ok_btn' );
		this.remove( 'cancel_btn' );
		
},

// remove || close modal
remove	:	function( element ) {
	try {		
		document.getElementById( element ).addEventListener( 'click', function() {
			var elem = document.getElementsByClassName( 'n_alert' )[0];
			document.body.removeChild( elem );
		});
	} catch( err ) {}
},

// css styles
css		:	function() {
	
	var style = {
		
		'alert'		:		'background:#fcfcfc;color:#333;padding:10px;margin:0 auto;min-width:30%;border:1px solid #ccc;border-radius:3px;position:fixed;left:0;right:0;padding:1px 5px 2px 15px;box-shadow:1px 1px 1px #ccc;top:0;font-family:sans-serif;width:200px;',
						
		'cover'		:		'height:100%;width:100%;position:absolute;background:transparent;top:0;',
							
		'close_btn'	:		'outline:none;font-weight:bold;background:#fcfcfc;border:none;',
							
		'ok_btn'	:		'box-shadow:1px 1px 1px #ccc;background:#3399ff;border-radius:3px;border:1px solid #fff;padding:7px 25px 7px 25px;color:#fff;font-weight:bold;',
							
		'cancel_btn'	:		'margin-left:10px;box-shadow:1px 1px 1px #ccc;background:#fcfcfc;border-radius:3px;border:1px solid #ccc;padding:7px 25px 7px 25px;color:#000;',
							
		'modal_header'	:		'text-align:right;margin:5px;',
		
		'header_txt'	:		'font-size:15px;margin-bottom:15px;display:block;',
		
		'modal_footer'	:		'text-align:right;margin:10px;',
		
		'content_txt'	:		'font-size:0.8em;'
	}
	
	return style;
	
}

}

