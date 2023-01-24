//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	// scrolling  
	  $('#scroll-1').slimScroll({
		height: '300px'
	  });
	  $('#scroll-2').slimScroll({
		height: '300px'
	  });
	
	//data table
		$('#example1').DataTable({
		  'paging'      : false,
		  'lengthChange': false,
		  'searching'   : false,
		  'ordering'    : true,
		  'info'        : false,
		  'autoWidth'   : false
		});



	//--------------------------------demo-10
		new Chartist.Bar('.ct-chart-10', {
		  labels: ['بهار', 'تابستان', 'پاییز', 'زمستان'],
		  series: [
			[800000, 1200000, 1400000, 1300000],
			[200000, 400000, 500000, 300000],
			[100000, 200000, 400000, 600000]
		  ]
		}, {
		  stackBars: true,
		  axisY: {
			labelInterpolationFnc: function(value) {
			  return (value / 1000) + 'k';
			}
		  }
		}).on('draw', function(data) {
		  if(data.type === 'bar') {
			data.element.attr({
			  style: 'stroke-width: 30px'
			});
		  }
		});
	//-----amchart3
	var chart = AmCharts.makeChart( "chartdiv3", {
	  "type": "gauge",
	  "theme": "light",
	  "startDuration": 0.3,
	  "marginTop": 25,
	  "marginBottom": 5,
	  "axes": [ {
		"axisAlpha": 0.3,
		"endAngle": 360,
		"endValue": 12,
		"minorTickInterval": 0.2,
		"showFirstLabel": false,
		"startAngle": 0,
		"axisThickness": 1,
		"valueInterval": 1
	  } ],
	  "arrows": [ {
		"radius": "50%",
		"innerRadius": 0,
		"clockWiseOnly": true,
		"nailRadius": 10,
		"nailAlpha": 1
	  }, {
		"nailRadius": 0,
		"radius": "80%",
		"startWidth": 6,
		"innerRadius": 0,
		"clockWiseOnly": true
	  }, {
		"color": "#CC0000",
		"nailRadius": 4,
		"startWidth": 3,
		"innerRadius": 0,
		"clockWiseOnly": true,
		"nailAlpha": 1
	  } ],
	  "export": {
		"enabled": true
	  }
	} );

	// update each second
	setInterval( updateClock, 1000 );

	// update clock
	function updateClock() {
	  if(chart.arrows.length > 0){
		// get current date
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		if(chart.arrows[ 0 ].setValue){
		  // set hours
		  chart.arrows[ 0 ].setValue( hours + minutes / 60 );
		  // set minutes
		  chart.arrows[ 1 ].setValue( 12 * ( minutes + seconds / 60 ) / 60 );
		  // set seconds
		  chart.arrows[ 2 ].setValue( 12 * date.getSeconds() / 60 );
		  }
	  }
	}
	
	
}); // End of use strict

