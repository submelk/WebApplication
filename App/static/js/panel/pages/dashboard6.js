//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict'; 
	
  // bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5({
    locale: 'fa-IR',
  });	

   
  // SLIMSCROLL FOR CHAT WIDGET
  $('#direct-chat').slimScroll({
    height: '380px'
  });
	
//ticker
 		if ($('#webticker-1').length) {   
		$("#webticker-1").webTicker({
			height:'auto', 
			duplicate:true, 
			startEmpty:false, 
			rssfrequency:5,
      direction: 'right',
		});
	};
//data table
    $('#example1').DataTable({
      'paging'      : false,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : false,
      'autoWidth'   : false
    });
	
}); // End of use strict
