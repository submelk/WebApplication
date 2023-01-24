//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	$.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json', function (data) {

	  // create the chart
	  Highcharts.stockChart('bitcoin-stock', {


		title: {
		  text: 'قیمت اتریوم/ بیت کوین در دقیقه'
		},

		rangeSelector: {
		  buttons: [{
			type: 'hour',
			count: 1,
			text: 'ساعت'
		  }, {
			type: 'day',
			count: 1,
			text: 'روز'
		  }, {
			type: 'all',
			count: 1,
			text: 'همه'
		  }],
		  selected: 1,
		  inputEnabled: false
		},

		series: [{
		  name: 'قیمت',
		  type: 'candlestick',
		  data: data,
		  tooltip: {
			valueDecimals: 2
		  }
		}]
	  });
	});

	
	
	if ($('.coin-table').length) {
        setRandomClass();
        setInterval(function () {
            setRandomClass();
        },1000);
        function setRandomClass() {
            var tbody = $(".coin-table table tbody");
            var items = tbody.find("tr");
            var number = items.length;
            var random1 = Math.floor((Math.random() * number));
            var random2 = Math.floor((Math.random() * number));
            items.removeClass("bg-primary");
            items.eq(random1).addClass("bg-primary");
            items.eq(random2).addClass("bg-primary");
        }
    }	
	
}); // End of use strict



                


