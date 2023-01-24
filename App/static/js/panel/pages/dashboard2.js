//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	//ticker
 	if ($('#webticker-8').length) {   
		$("#webticker-8").webTicker({
			height:'auto', 
			duplicate:true,
			startEmpty:false, 
			rssfrequency:5,
			direction: 'right'
		});
	}

	$("#sparkline0").sparkline([1,4,8,4,6,8,5,7,2,7,4,1 ], {
        type: 'line',
        width: '100%',
        height: '80',
        lineColor: '#1bc5bd',
        fillColor: '#1bc5bd15',
        minSpotColor:'#1bc5bd',
        maxSpotColor: '#e0bc00',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#4f4f4f'
    });
    $("#sparkline1").sparkline([1,2,3,4,3,6,3,5,3,8,4,2 ], {
        type: 'line',
        width: '100%',
        height: '80',
        lineColor: '#f64e60',
        fillColor: '#f64e607d',
        minSpotColor:'#03a9f3',
        maxSpotColor: '#03a9f3',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#03a9f3'
    });
    $("#sparkline2").sparkline([0,3,6,3,4,2,6,1,8,4,4,2 ], {
        type: 'line',
        width: '100%',
        height: '80',
        lineColor: '#1bc5bd',
        fillColor: '#1bc5bd15',
        minSpotColor:'#ab8ce4',
        maxSpotColor: '#ab8ce4',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#ab8ce4'
    });
    $("#sparkline3").sparkline([2,4,7,3,5,3,6,3,4,3,2,1,2 ], {
        type: 'line',
        width: '100%',
        height: '80',
        lineColor: '#1bc5bd',
        fillColor: '#1bc5bd15',
        minSpotColor:'#e4e7ea',
        maxSpotColor: '#e4e7ea',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#e4e7ea'
    });

	
}); // End of use strict



                


