//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 		
//-----amchart

//=------------------------chartdiv30


//-----amchart
  var chartData = generateChartData();

function generateChartData() {
  var chartData = [];
  var firstDate = new Date( 1401, 0, 1 );
  firstDate.setDate( firstDate.getDate() - 1000 );
  firstDate.setHours( 0, 0, 0, 0 );

  var a = 2000;
 
  for ( var i = 0; i < 1000; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setHours( 0, i, 0, 0 );

    a += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    var b = Math.round( Math.random() * 100000000 );

    chartData.push( {
      "date": newDate,
      "value": a,
      "volume": b
    } );
  }
  return chartData;
}

var chart = AmCharts.makeChart( "chartdiv30", {
             "language" : "fa",
  "type": "stock",
            "theme": "light",
            "fontFamily":"yekan",
            "categoryAxesSettings": {
                "minPeriod": "mm",
                "fontFamily":"yekan",
            },

  "dataSets": [ {
    "color": "#e0bc00",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],

    "dataProvider": chartData,
    "categoryField": "date"
  } ],

  "panels": [{
                "showCategoryAxis": false,
                "title": "مقدار",
                "percentHeight": 70,
                "fontFamily":"yekan",
                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    "type": "smoothedLine",
                    "lineThickness": 2,
                    "bullet": "round",
                    "fontFamily":"yekan",
                }],


    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  }, {
    "title": "حجم",
                "percentHeight": 30,
                "stockGraphs": [{
      "valueField": "volume",
      "type": "column",
      "cornerRadiusTop": 2,
      "fillAlphas": 1
    } ],

    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  } ],

  "chartScrollbarSettings": {
    "graph": "g1",
    "usePeriod": "10mm",
    "position": "top"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true
  },

  "periodSelector": {
    "position": "top",
    "dateFormat": "YYYY-MM-DD JJ:NN",
    "inputFieldWidth": 150,
    "periods": [ {
      "period": "hh",
      "count": 1,
      "label": "1 ساعت"
    }, {
      "period": "hh",
      "count": 2,
      "label": "2 ساعت"
    }, {
      "period": "hh",
      "count": 5,
      "selected": true,
      "label": "5 ساعت"
    }, {
      "period": "hh",
      "count": 12,
      "label": "12 ساعت"
   }, {
                    "period": "MAX",
                    "label": "حداکثر"
                }]
            },

            "panelsSettings": {
                "usePrefixes": false,
                "fontFamily":"yekan",
            },

  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );


//---echart2
var dom = document.getElementById("e_chart_2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
	color: ["#fc6076", "#ff9a44"],
	textStyle: {
		color: '#cccccc',
    fontFamily: 'yekan',
	},
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['بالاترین دما','پایین ترین دما']
    },
	
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['شنبه', 'یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'بیشترین',
            type:'line',
            data:[220, 182, 191, 234, 190, 330, 310],
            markPoint: {
                data: [
                    {type: 'max', name: 'بیشترین'},
                    {type: 'min', name: 'کمترین'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: 'میانگین'}
                ]
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


//=-------------------------chartdiv31

var chart = AmCharts.makeChart( "chartdiv31", {
  "language" : "fa",
  "theme": "dark",
  "type": "gauge",
  "axes": [ {
    "axisColor": "#6713d2",
    "axisThickness": 3,
    "endValue": 240,
    "gridInside": false,
    "inside": false,
    "radius": "100%",
    "valueInterval": 20,
    "tickColor": "#6713d2"
  }, {
    "axisColor": "#cc208e",
    "axisThickness": 3,
    "endValue": 160,
    "radius": "80%",
    "valueInterval": 20,
    "tickColor": "#cc208e"
  } ],
  "arrows": [ {
    "color": "#6713d2",
    "innerRadius": "10%",
    "nailRadius": 0,
    "radius": "75%"
  } ],
  "export": {
    "enabled": true
  }
} );

setInterval( randomValue, 2000 );

// set random value
function randomValue() {
  var value = Math.round( Math.random() * 240 );
  chart.arrows[ 0 ].setValue( value );
}



    /*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 200

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(1)

      // Do a random walk
      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y    = prev + Math.random() * 10 - 5

        if (y < 0) {
          y = 0
        } else if (y > 100) {
          y = 100
        }

        data.push(y)
      }

      // Zip the generated y values with the x values
      var res = []
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }

      return res
    }

    var interactive_plot = $.plot('#interactive', [getRandomData()], {
      grid: {
            color: "#AFAFAF"
            , hoverable: true
            , borderWidth: 0
            , 
        },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color     : '#6713d2'
      },
	  tooltip: true,
      lines : {
        fill : '#6713d2', //Converts the line chart to area chart
        color: '#6713d2'
      },
	  tooltipOpts: {
            content: "Visit: %y"
            , defaultTheme: false
        },
      yaxis : {
        min : 0,
        max : 100,
        show: true
      },
      xaxis : {
        show: true
      }
    })

    var updateInterval = 50 //Fetch data ever x milliseconds
    var realtime       = 'on' //If == to on then fetch data every x seconds. else stop fetching
    function update() {

      interactive_plot.setData([getRandomData()])

      // Since the axes don't change, we don't need to call plot.setupGrid()
      interactive_plot.draw()
      if (realtime === 'on')
        setTimeout(update, updateInterval)
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === 'on') {
      update()
    }
    
    /*
     * END INTERACTIVE CHART
     */
