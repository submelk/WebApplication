//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


//-----amchart
  var chartData = [];
    generateChartData();

       function generateChartData() {
            var firstDate = new Date(1401, 1, 1);
  firstDate.setHours(0, 0, 0, 0);
  firstDate.setDate(firstDate.getDate() - 2000);

  for (var i = 0; i < 2000; i++) {
    var newDate = new Date(firstDate);

    newDate.setDate(newDate.getDate() + i);


    if(i==0) {
      var open = Math.round(Math.random() * (10000) );
    } else {
      var open = close;
    }


    var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

    var low;
    if (open < close) {
      low = open - Math.round(Math.random() * 5);
    } else {
      low = close - Math.round(Math.random() * 5);
    }

    var high;
    if (open < close) {
      high = close + Math.round(Math.random() * 5);
    } else {
      high = open + Math.round(Math.random() * 5);
    }

    var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;

    var value = Math.round(Math.random() * (30) + 100);

    chartData[i] = ({
      date: newDate,
      open: open,
      close: close,
      high: high,
      low: low,
      volume: volume,
      value: value
    });
  }
}
  var chart = AmCharts.makeChart( "chartdiv1", {     
     language : "fa",
     type: "stock",
      theme: "light",
      fontFamily:"yekan",
      dataSets: [ {

        fieldMappings: [ {
          fromField: "open",
          toField: "open"
        },{
          fromField: "close",
          toField: "close"
        },{
          fromField: "high",
          toField: "high"
        },{
          fromField: "low",
          toField: "low"
        },{
          fromField: "volume",
          toField: "volume"
        },{
          fromField: "rsi",
          toField: "rsi"
        }],
        color: "#7f8da9",
        dataProvider: chartData,       
        categoryField: "date"
      }],

      
      categoryAxesSettings: {
        equalSpacing : true,
      },
      mouseWheelZoomEnabled: true,

      panels: [ {
          title: "حجم",
          showCategoryAxis: false,
          percentHeight: 70,
          fontFamily: "yekan",
          valueAxes: [ {
            id: "v1",
            dashLength: 5
          } ],

         categoryAxis: {
            dashLength: 5,
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

          stockGraphs: [ {
            title: ' نمودار',
            type: "candlestick",
            id: "g1",
            balloonText: "قیمت باز شدن :<b>[[open]]</b><br>پایینترین قیمت :<b>[[low]]</b><br>بالا ترین قیمت :<b>[[high]]</b><br>قیمت بسته شدن :<b>[[close]]</b><br>حجم :<b>[[volume]]</b><br>",
            openField: "open",
            closeField: "close",
            highField: "high",
            lowField: "low",
            valueField: "close",
            lineColor: "#fbae1c",
            fillColors: "#fbae1c",
            negativeLineColor: "#465161",
            negativeFillColors: "#465161",
            fillAlphas: 1,
            useDataSetColors: false,
            comparable: true,
            compareField: "value",
            showBalloon: true,
             proCandlesticks: false,
            fontFamily: "yekan",
        gapField: 10
          }],

          stockLegend: {
            valueTextRegular: undefined,
            periodValueTextComparing: "[[percents.value.close]]%"
          }
        },
        {
          title: "حجم",
          percentHeight: 30,
          marginTop: 1,
          showCategoryAxis: true,
          valueAxes: [ {
            id: "v3",
            dashLength: 5
          } ],

         categoryAxis: {
            dashLength: 5,
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

          stockGraphs: [ {
            valueField: "volume",
            type: "column",
            useDataSetColors: false,
            lineColor: "#2B4073",
            balloonText: " حجم <br><b><span style='font-size:14px; font-family: yekan;'>مقدار : [[value]]</span></b>",
            showBalloon: true,
           fillAlphas: false,
            fontFamily: "yekan",
          }],

          stockLegend: {
            markerType: "none",
            markerSize: 0,
            labelText: "",
            periodValueTextRegular: "[[value.close]]"
          }
        }
      ],

      chartScrollbarSettings: {
        graph: "g1",
        graphType: "line",
        usePeriod: "WW"
      },

      chartCursorSettings: {
        valueLineBalloonEnabled: true,
        valueLineEnabled: true,
        valueBalloonsEnabled:true
      },

      periodSelector: {
        position: "bottom",
        periods: [ {
          period: "DD",
          count: 10,
          label: "10 روز"
        }, {
          period: "MM",
          count: 1,
          selected: true,
         label: "1 ماه"
        }, {
          period: "MM",         
          count: 4,
         label: "4 ماه"
        },{
          period: "MM",
          count: 6,
         label: "6 ماه"
        },{
          period: "YYYY",
          count: 1,
          label: "1 سال"
        }, {
          period: "YTD",
          label: "از بتدای سال "
        }, {
          period: "MAX",
           label: "حداکثر "
        } ]
      },
     export: {
        enabled: true,
        menu:[{
          class: "export-main",
              menu: [{
              label: "دانلود به صورت",
              menu: [ "PNG", "JPG"]
            },{
              label: "حاشیه نویسی",
              action: "draw"
            }]
        }]
    }
});






