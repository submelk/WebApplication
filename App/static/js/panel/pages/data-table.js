//[Data Table Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the Data Table

$(function () {
    "use strict";

    $('#example1').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
    });
     $('#example2').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });
	
	
	$('#example').DataTable( {
        language: {
            url:'./js/dataTables.fa.json' 
                },
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		]
	} );
	
	$('#tickets').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
	  'paging'      : true,
	  'lengthChange': true,
	  'searching'   : true,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	
	$('#productorder').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
	  'paging'      : true,
	  'lengthChange': true,
	  'searching'   : true,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : false,
	});
	

	$('#complex_header').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
    });
	
	//--------Individual column searching
	
    // Setup - add a text input to each footer cell
    $('#example5 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder=" جستجوی  '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example5').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
    });
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
	
	
	//---------------Form inputs
	var table = $('#example6').DataTable({
        language: {
            url:'./js/dataTables.fa.json' 
                },
    });
 
    $('#data-update').click( function() {
        var data = table.$('input, select').serialize();
        alert(
            "داده های زیر به سرور ارسال می شد: \n\n"+
            data.substr( 0, 120 )+'...'
        );
        return false;
    } );
	
	
	
	
  }); // End of use strict