//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 		
//-----amchart
//----------------chartdiv21

var chart = AmCharts.makeChart( "chartdiv21", {
  "language" : "fa",
  "type": "stock",
"theme": "light",

  //"color": "#fff",
  "dataSets": [ {
    "title": "سهام مایکروسافت",
    "fieldMappings": [ {
      "fromField": "Open",
      "toField": "open"
    }, {
      "fromField": "High",
      "toField": "high"
    }, {
      "fromField": "Low",
      "toField": "low"
    }, {
      "fromField": "Close",
      "toField": "close"
    }, {
      "fromField": "Volume",
      "toField": "volume"
    } ],
    "compared": false,
    "categoryField": "Date",

    /**
     * data loader for data set data
     */
    "dataLoader": {
      "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv",
      "format": "csv",
      "showCurtain": true,
      "showErrors": true,
      "async": true,
      "reverse": true,
      "delimiter": ",",
      "useColumnNames": true
    },

    /**
     * data loader for events data
     */
    "eventDataLoader": {
      "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT_events.csv",
      "format": "csv",
      "showCurtain": true,
      "showErrors": true,
      "async": true,
      "reverse": true,
      "delimiter": ",",
      "useColumnNames": true,
      "postProcess": function( data ) {
        for ( var x in data ) {
          switch ( data[ x ].Type ) {
            case 'A':
              var color = "#85CDE6";
              break;
            default:
              var color = "#cccccc";
              break;
          }
          // data[ x ].Description = data[ x ].Description.replace( "Upgrade", "<strong style=\"color: #0c0\">Upgrade</strong>" ).replace( "Downgrade", "<strong style=\"color: #c00\">Downgrade</strong>" );
          data[ x ].Type = data[ x ].Type.replace( "A", "ت" ).replace( "D", "س" );
          data[ x ].Title = data[ x ].Title.replace( "Dividend", "<strong>سود سهام</strong>" );
          data[ x ].Description = data[ x ].Description.replace( "Amount", "<strong>مقدار</strong>" );
          data[ x ].Title = data[ x ].Title.replace( "Analyst opinion change", "<strong>تغییر نظر تحلیلگران</strong>" );
          data[ x ].Description = data[ x ].Description.replace( "Upgrade by FBR Capital from Mkt Perform to Outperform", "<strong>ارتقاء توسط اف بی آر از عملکرد بازار تا عملکرد بهتر</strong>" ).replace( "Upgrade from Deutsche Bank from Hold to Buy", "<strong>ارتقاء از دویچه بانک از نگه داشتن به خرید</strong>" ).replace( "Upgrade from Barclays from Equal weight to Overweight", "<strong>ارتقاء از بارکلی از وزن برابر به اضافه وزن</strong>" ).replace( "Downgrade from Standpoint Research from Buy to Hold", "<strong>تغییر تحلیل از استندپوینت ریسرچ از خرید به نگه داشتن</strong>" ).replace( "Downgrade from Argus from Buy to Hold", "<strong>تغییر تحلیل از آرگوس از خرید به نگه داشتن</strong>" ).replace( "Initiated by BMO Capital Markets", "<strong>توسط  بازارهای سرمایه بی ام او آغاز شد </strong>" ).replace( "Initiated by Longbow", "<strong>توسط لانگ بو آغاز شد</strong>" );
          data[ x ] = {
            "type": "pin",
            "graph": "g1",
            "backgroundColor": color,
            "date": data[ x ].Date,
            "text": data[ x ].Type,
            "description": "<strong>" + data[ x ].Title + "</strong><br />" + data[ x ].Description
          };
        }
        return data;
      }
    }

  }, {
    "title": "تراکنش ها",
    "fieldMappings": [ {
      "fromField": "Open",
      "toField": "open"
    }, {
      "fromField": "High",
      "toField": "high"
    }, {
      "fromField": "Low",
      "toField": "low"
    }, {
      "fromField": "Close",
      "toField": "close"
    }, {
      "fromField": "Volume",
      "toField": "volume"
    } ],
    "compared": true,
    "categoryField": "Date",
    "dataLoader": {
      "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/TXN.csv",
      "format": "csv",
      "showCurtain": true,
      "showErrors": true,
      "async": true,
      "reverse": true,
      "delimiter": ",",
      "useColumnNames": true
    }
  } ],
  "dataDateFormat": "YYYY-MM-DD",

  "panels": [ {
      "title": "قیمت",
      "percentHeight": 70,
      "fontFamily":"yekan",

      "stockGraphs": [ {
        "type": "candlestick",
        "id": "g1",
        "openField": "open",
        "closeField": "close",
        "highField": "high",
        "lowField": "low",
        "valueField": "close",
        "lineColor": "#fff",
        "fillColors": "#fff",
        "negativeLineColor": "#db4c3c",
        "negativeFillColors": "#db4c3c",
        "fillAlphas": 1,
        "comparedGraphLineThickness": 2,
        "columnWidth": 0.7,
        "useDataSetColors": false,
        "comparable": true,
        "compareField": "close",
        "showBalloon": false,
        "proCandlesticks": true
      } ],

      "stockLegend": {
        "valueTextRegular": undefined,
        "periodValueTextComparing": "[[percents.value.close]]%"
      },
      "categoryAxis": {
        parseDates: true,
        labelFunction: function(dateText, dateObj, categoryAxis, period) {
          var labelText;
          var pDate = persianDate(dateObj);
          switch (period) {
            case "YYYY":
              labelText = pDate.format("YYYY");
              break;
            case "MM":
              labelText = pDate.format("MMM YYYY");
              break;
            default:
              labelText = pDate.format("MMM DD");
              break;
          }
    
          return labelText;
        }
      },

    },

    {
      "title": "حجم",
      "percentHeight": 30,
      "marginTop": 1,
      "columnWidth": 0.4,
      "showCategoryAxis": false,

      "stockGraphs": [ {
        "valueField": "volume",
        "openField": "open",
        "type": "column",
        "showBalloon": false,
        "fillAlphas": 1,
        "lineColor": "#398bf7",
        "fillColors": "#398bf7",
        "negativeLineColor": "#00c292",
        "negativeFillColors": "#00c292",
        "useDataSetColors": false
      } ],

      "stockLegend": {
        "markerType": "none",
        "markerSize": 0,
        "labelText": "",
        "periodValueTextRegular": "[[value.close]]"
      },

      "valueAxes": [ {
        "usePrefixes": false
      } ]
    }
  ],

  "panelsSettings": {
    //    "color": "#fff",
    "plotAreaFillColors": "#333",
    "plotAreaFillAlphas": 1,
    "marginLeft": 0,
    "marginTop": 5,
    "marginBottom": 5
  },

  "chartScrollbarSettings": {
    "graph": "g1",
    "graphType": "line",
    "usePeriod": "WW",
    "backgroundColor": "#333",
    "graphFillColor": "#666",
    "graphFillAlpha": 0.5,
    "gridColor": "#555",
    "gridAlpha": 1,
    "selectedBackgroundColor": "#444",
    "selectedGraphFillAlpha": 1
  },

  "categoryAxesSettings": {
    "equalSpacing": true,
    "gridColor": "#555",
    "gridAlpha": 1
  },

  "valueAxesSettings": {
    "gridColor": "#555",
    "gridAlpha": 1,
    "inside": false,
    "showLastLabel": true
  },

  "chartCursorSettings": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    categoryBalloonFunction: function(dateObj) {
      return persianDate(dateObj).format("MMM DD, YYYY");
    }
  },

  "legendSettings": {
    //"color": "#fff"
  },

  "stockEventsSettings": {
    "showAt": "high",
    "type": "pin"
  },

  "balloon": {
    "textAlign": "right",
    "offsetY": 10
  },

  "periodSelector": {
    "position": "bottom",
    "periods": [ {
        "period": "DD",
        "count": 10,
        "label": "10 روز"
      }, {
        "period": "MM",
        "count": 1,
        "label": "1 ماه"
      }, {
        "period": "MM",
        "count": 6,
        "label": "6 ماه"
      }, {
        "period": "YYYY",
        "count": 1,
        "label": "1 سال"
      }, {
        "period": "YYYY",
        "count": 2,
        "selected": true,
        "label": "2 سال"
      },
      /* {
           "period": "YTD",
            "label": "از ابتدای سال تا کنون"
         },*/
      {
        "period": "MAX",
        "label": "حداکثر"
      }
    ]
  }
} );



//=------------------------chartdiv30


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
    "color": "#fb9678",
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
    "percentHeight": 50,
    "stockGraphs": [ {
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
    "inputFieldWidth": 80,
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


//=------------------------chartdiv22

var chart = AmCharts.makeChart("chartdiv22", {
  "language" : "fa",
  "type": "serial",
  "theme": "dark",
  "fontFamily":"yekan",
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 2,
  "valueAxes": [{
    "id": "v1",
    "title": "فروش ها",
    "position": "left",
    "autoGridCount": false,
    "labelFunction": function(value) {
      return "از" + Math.round(value) + "میلیون دلار";
    }
  }, {
    "id": "v2",
    "title": "روز های بازار",
    "gridAlpha": 0,
    "position": "right",
    "autoGridCount": false
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#e1ede9",
    "fillColors": "#e1ede9",
    "fillAlphas": 1,
    "type": "column",
    "title": "فروش واقعی",
    "valueField": "sales2",
    "clustered": false,
    "columnWidth": 0.5,
    "legendValueText": "از [[value]] میلیون ",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'> از [[value]] میلیون دلار </b>"
  }, {
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#03a9f3",
    "fillColors": "#03a9f3",
    "fillAlphas": 1,
    "type": "column",
   "title": "هدف فروش",
    "valueField": "sales1",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "از [[value]] میلیون ",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'> از [[value]] میلیون دلار </b>"
  }, {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#20acd4",
    "type": "smoothedLine",
    "title": "روز های بازار",
    "useLineColorForBulletBorder": true,
    "valueField": "market1",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }, {
    "id": "g2",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#e1ede9",
    "type": "smoothedLine",
    "dashLength": 5,
   "title": "تمام روزهای بازار",
    "useLineColorForBulletBorder": true,
    "valueField": "market2",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2,
    categoryBalloonFunction: function(dateObj) {
      return persianDate(dateObj).format("MMM DD, YYYY");
    }
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true,
        labelFunction: function(dateText, dateObj, categoryAxis, period) {
          var labelText;
          var pDate = persianDate(dateObj);
          switch (period) {
            case "YYYY":
              labelText = pDate.format("YYYY");
              break;
            case "MM":
              labelText = pDate.format("MMM YYYY");
              break;
            default:
              labelText = pDate.format("MMM DD");
              break;
          }
    
          return labelText;
        }
  },
  "legend": {
    "useGraphSettings": true,
    "position": "top"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
   "enabled": true
  },
  "dataProvider": [{
    "date": "2013-01-16",
    "market1": 71,
    "market2": 75,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-17",
    "market1": 74,
    "market2": 78,
    "sales1": 4,
    "sales2": 6
  }, {
    "date": "2013-01-18",
    "market1": 78,
    "market2": 88,
    "sales1": 5,
    "sales2": 2
  }, {
    "date": "2013-01-19",
    "market1": 85,
    "market2": 89,
    "sales1": 8,
    "sales2": 9
  }, {
    "date": "2013-01-20",
    "market1": 82,
    "market2": 89,
    "sales1": 9,
    "sales2": 6
  }, {
    "date": "2013-01-21",
    "market1": 83,
    "market2": 85,
    "sales1": 3,
    "sales2": 5
  }, {
    "date": "2013-01-22",
    "market1": 88,
    "market2": 92,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2013-01-23",
    "market1": 85,
    "market2": 90,
    "sales1": 7,
    "sales2": 6
  }, {
    "date": "2013-01-24",
    "market1": 85,
    "market2": 91,
    "sales1": 9,
    "sales2": 5
  }, {
    "date": "2013-01-25",
    "market1": 80,
    "market2": 84,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-26",
    "market1": 87,
    "market2": 92,
    "sales1": 4,
    "sales2": 8
  }, {
    "date": "2013-01-27",
    "market1": 84,
    "market2": 87,
    "sales1": 3,
    "sales2": 4
  }, {
    "date": "2013-01-28",
    "market1": 83,
    "market2": 88,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2013-01-29",
    "market1": 84,
    "market2": 87,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-30",
    "market1": 81,
    "market2": 85,
    "sales1": 4,
    "sales2": 7
  }]
});



//---echart2
var dom = document.getElementById("e_chart_2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
	color: ['#00c292'],
	textStyle: {
		color: '#fff',
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
    "axisColor": "#03a9f3",
    "axisThickness": 3,
    "endValue": 240,
    "gridInside": false,
    "inside": false,
    "radius": "100%",
    "valueInterval": 20,
    "tickColor": "#03a9f3"
  }, {
    "axisColor": "#fb9678",
    "axisThickness": 3,
    "endValue": 160,
    "radius": "80%",
    "valueInterval": 20,
    "tickColor": "#fb9678"
  } ],
  "arrows": [ {
    "color": "#03a9f3",
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
            , backgroundColor: '#252525'
        },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color     : '#fb9678'
      },
	  tooltip: true,
      lines : {
        fill : '#fb9678', //Converts the line chart to area chart
        color: '#fb9678'
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
