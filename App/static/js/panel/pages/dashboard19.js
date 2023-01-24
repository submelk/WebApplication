//[Dashboard Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	//ticker
 	if ($('#webticker-1').length) {   
		$("#webticker-1").webTicker({
			height:'auto', 
			duplicate:true, 
			startEmpty:false, 
			rssfrequency:5,
			direction: 'right',
		});
	}
	
	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart = am4core.create("currency-value", am4charts.PieChart3D);
	chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

	chart.legend = new am4charts.Legend();

	chart.data = [
	  {
		currency: "BTC",
		value: 60
	  },
	  {
		currency: "XRP",
		value: 20
	  },
	  {
		currency: "RISE",
		value: 15
	  },
	  {
		currency: "NEO",
		value: 21
	  },
	  {
		currency: "LTC",
		value: 11
	  },
	  {
		currency: "ETH",
		value: 8
	  },
	  {
		currency: "DASH",
		value: 17
	  }
	];

	var series = chart.series.push(new am4charts.PieSeries3D());
	series.dataFields.value = "value";
	series.dataFields.category = "currency";

	}); // end am4core.ready()




	var options = {
		    textStyle: {
		    fontFamily: 'yekan',
		    },
            chart: {
                height: 485,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
			legend: {
			    position: 'top',
				horizontalAlign: 'left',
		    },
			colors:['#fbae1c', '#00c292'],
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: 'یورو',
                data: [31, 40, 50, 40, 42, 78, 85]
            }, {
                name: 'دلار',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],

            xaxis: {
                type: 'datetime',
                categories: ["1401-09-19T00:00:00", "1401-09-19T01:30:00", "1401-09-19T02:30:00", "1401-09-19T03:30:00", "1401-09-19T04:30:00", "1401-09-19T05:30:00", "1401-09-19T06:30:00"],                
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#bitcoin-value"),
            options
        );

        chart.render();

	
	
}); // End of use strict




                


