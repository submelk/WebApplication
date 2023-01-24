//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template




//----------------------------chartdiv31

var chart = AmCharts.makeChart("chartdiv31",
{
    "language" : "fa",
    "type": "serial",
    "fontFamily":"yekan",
    "theme": "light",
    "dataProvider": [{
        "name": "شروین شمس",
        "points": 35654,
        "color": "#7F8DA9",
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
    }, {
        "name": "Damon",
        "points": 65456,
        "color": "#FEC514",
        "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
    }, {
        "name": "پیمان امیری",
        "points": 45724,
        "color": "#DB4C3C",
        "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
    }, {
        "name": "مهران خانی",
        "points": 13654,
        "color": "#DAF0FD",
        "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
    }],
    "valueAxes": [{
        "maximum": 80000,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 10,
        "bulletSize": 52,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
    	"enabled": true
     }
});

//--------------------------chartdiv32
var chart = AmCharts.makeChart("chartdiv32", {
    "language" : "fa",
    "type": "serial",
    "fontFamily":"yekan",
    "theme": "light",
    "marginRight": 10,
    "marginLeft": 10,
    "autoMarginOffset": 10,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "خط قرمز",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true,
        categoryBalloonFunction: function(dateObj) {
            return persianDate(dateObj).format("MMM DD, YYYY");
          }
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":30,
      "scrollbarHeight":10
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
          },
    },
    "export": {
        "enabled": true
    },
    "dataProvider": [{
        "date": "2012-07-27",
        "value": 13
    }, {
        "date": "2012-07-28",
        "value": 11
    }, {
        "date": "2012-07-29",
        "value": 15
    }, {
        "date": "2012-07-30",
        "value": 16
    }, {
        "date": "2012-07-31",
        "value": 18
    }, {
        "date": "2012-08-01",
        "value": 13
    }, {
        "date": "2012-08-02",
        "value": 22
    }, {
        "date": "2012-08-03",
        "value": 23
    }, {
        "date": "2012-08-04",
        "value": 20
    }, {
        "date": "2012-08-05",
        "value": 17
    }, {
        "date": "2012-08-06",
        "value": 16
    }, {
        "date": "2012-08-07",
        "value": 18
    }, {
        "date": "2012-08-08",
        "value": 21
    }, {
        "date": "2012-08-09",
        "value": 26
    }, {
        "date": "2012-08-10",
        "value": 24
    }, {
        "date": "2012-08-11",
        "value": 29
    }, {
        "date": "2012-08-12",
        "value": 32
    }, {
        "date": "2012-08-13",
        "value": 18
    }, {
        "date": "2012-08-14",
        "value": 24
    }, {
        "date": "2012-08-15",
        "value": 22
    }, {
        "date": "2012-08-16",
        "value": 18
    }, {
        "date": "2012-08-17",
        "value": 19
    }, {
        "date": "2012-08-18",
        "value": 14
    }, {
        "date": "2012-08-19",
        "value": 15
    }, {
        "date": "2012-08-20",
        "value": 12
    }, {
        "date": "2012-08-21",
        "value": 8
    }, {
        "date": "2012-08-22",
        "value": 9
    }, {
        "date": "2012-08-23",
        "value": 8
    }, {
        "date": "2012-08-24",
        "value": 7
    }, {
        "date": "2012-08-25",
        "value": 5
    }, {
        "date": "2012-08-26",
        "value": 11
    }, {
        "date": "2012-08-27",
        "value": 13
    }, {
        "date": "2012-08-28",
        "value": 18
    }, {
        "date": "2012-08-29",
        "value": 20
    }, {
        "date": "2012-08-30",
        "value": 29
    }, {
        "date": "2012-08-31",
        "value": 33
    }, {
        "date": "2012-09-01",
        "value": 42
    }, {
        "date": "2012-09-02",
        "value": 35
    }, {
        "date": "2012-09-03",
        "value": 31
    }, {
        "date": "2012-09-04",
        "value": 47
    }, {
        "date": "2012-09-05",
        "value": 52
    }, {
        "date": "2012-09-06",
        "value": 46
    }, {
        "date": "2012-09-07",
        "value": 41
    }, {
        "date": "2012-09-08",
        "value": 43
    }, {
        "date": "2012-09-09",
        "value": 40
    }, {
        "date": "2012-09-10",
        "value": 39
    }, {
        "date": "2012-09-11",
        "value": 34
    }, {
        "date": "2012-09-12",
        "value": 29
    }, {
        "date": "2012-09-13",
        "value": 34
    }, {
        "date": "2012-09-14",
        "value": 37
    }, {
        "date": "2012-09-15",
        "value": 42
    }, {
        "date": "2012-09-16",
        "value": 49
    }, {
        "date": "2012-09-17",
        "value": 46
    }, {
        "date": "2012-09-18",
        "value": 47
    }, {
        "date": "2012-09-19",
        "value": 55
    }, {
        "date": "2012-09-20",
        "value": 59
    }, {
        "date": "2012-09-21",
        "value": 58
    }, {
        "date": "2012-09-22",
        "value": 57
    }, {
        "date": "2012-09-23",
        "value": 61
    }, {
        "date": "2012-09-24",
        "value": 59
    }, {
        "date": "2012-09-25",
        "value": 67
    }, {
        "date": "2012-09-26",
        "value": 65
    }, {
        "date": "2012-09-27",
        "value": 61
    }, {
        "date": "2012-09-28",
        "value": 66
    }, {
        "date": "2012-09-29",
        "value": 69
    }, {
        "date": "2012-09-30",
        "value": 71
    }, {
        "date": "2012-10-01",
        "value": 67
    }, {
        "date": "2012-10-02",
        "value": 63
    }, {
        "date": "2012-10-03",
        "value": 46
    }, {
        "date": "2012-10-04",
        "value": 32
    }, {
        "date": "2012-10-05",
        "value": 21
    }, {
        "date": "2012-10-06",
        "value": 18
    }, {
        "date": "2012-10-07",
        "value": 21
    }, {
        "date": "2012-10-08",
        "value": 28
    }, {
        "date": "2012-10-09",
        "value": 27
    }, {
        "date": "2012-10-10",
        "value": 36
    }, {
        "date": "2012-10-11",
        "value": 33
    }, {
        "date": "2012-10-12",
        "value": 31
    }, {
        "date": "2012-10-13",
        "value": 30
    }, {
        "date": "2012-10-14",
        "value": 34
    }, {
        "date": "2012-10-15",
        "value": 38
    }, {
        "date": "2012-10-16",
        "value": 37
    }, {
        "date": "2012-10-17",
        "value": 44
    }, {
        "date": "2012-10-18",
        "value": 49
    }, {
        "date": "2012-10-19",
        "value": 53
    }, {
        "date": "2012-10-20",
        "value": 57
    }, {
        "date": "2012-10-21",
        "value": 60
    }, {
        "date": "2012-10-22",
        "value": 61
    }, {
        "date": "2012-10-23",
        "value": 69
    }, {
        "date": "2012-10-24",
        "value": 67
    }, {
        "date": "2012-10-25",
        "value": 72
    }, {
        "date": "2012-10-26",
        "value": 77
    }, {
        "date": "2012-10-27",
        "value": 75
    }, {
        "date": "2012-10-28",
        "value": 70
    }, {
        "date": "2012-10-29",
        "value": 72
    }, {
        "date": "2012-10-30",
        "value": 70
    }, {
        "date": "2012-10-31",
        "value": 72
    }, {
        "date": "2012-11-01",
        "value": 73
    }, {
        "date": "2012-11-02",
        "value": 67
    }, {
        "date": "2012-11-03",
        "value": 68
    }, {
        "date": "2012-11-04",
        "value": 65
    }, {
        "date": "2012-11-05",
        "value": 71
    }, {
        "date": "2012-11-06",
        "value": 75
    }, {
        "date": "2012-11-07",
        "value": 74
    }, {
        "date": "2012-11-08",
        "value": 71
    }, {
        "date": "2012-11-09",
        "value": 76
    }, {
        "date": "2012-11-10",
        "value": 77
    }, {
        "date": "2012-11-11",
        "value": 81
    }, {
        "date": "2012-11-12",
        "value": 83
    }, {
        "date": "2012-11-13",
        "value": 80
    }, {
        "date": "2012-11-14",
        "value": 81
    }, {
        "date": "2012-11-15",
        "value": 87
    }, {
        "date": "2012-11-16",
        "value": 82
    }, {
        "date": "2012-11-17",
        "value": 86
    }, {
        "date": "2012-11-18",
        "value": 80
    }, {
        "date": "2012-11-19",
        "value": 87
    }, {
        "date": "2012-11-20",
        "value": 83
    }, {
        "date": "2012-11-21",
        "value": 85
    }, {
        "date": "2012-11-22",
        "value": 84
    }, {
        "date": "2012-11-23",
        "value": 82
    }, {
        "date": "2012-11-24",
        "value": 73
    }, {
        "date": "2012-11-25",
        "value": 71
    }, {
        "date": "2012-11-26",
        "value": 75
    }, {
        "date": "2012-11-27",
        "value": 79
    }, {
        "date": "2012-11-28",
        "value": 70
    }, {
        "date": "2012-11-29",
        "value": 73
    }, {
        "date": "2012-11-30",
        "value": 61
    }, {
        "date": "2012-12-01",
        "value": 62
    }, {
        "date": "2012-12-02",
        "value": 66
    }, {
        "date": "2012-12-03",
        "value": 65
    }, {
        "date": "2012-12-04",
        "value": 73
    }, {
        "date": "2012-12-05",
        "value": 79
    }, {
        "date": "2012-12-06",
        "value": 78
    }, {
        "date": "2012-12-07",
        "value": 78
    }, {
        "date": "2012-12-08",
        "value": 78
    }, {
        "date": "2012-12-09",
        "value": 74
    }, {
        "date": "2012-12-10",
        "value": 73
    }, {
        "date": "2012-12-11",
        "value": 75
    }, {
        "date": "2012-12-12",
        "value": 70
    }, {
        "date": "2012-12-13",
        "value": 77
    }, {
        "date": "2012-12-14",
        "value": 67
    }, {
        "date": "2012-12-15",
        "value": 62
    }, {
        "date": "2012-12-16",
        "value": 64
    }, {
        "date": "2012-12-17",
        "value": 61
    }, {
        "date": "2012-12-18",
        "value": 59
    }, {
        "date": "2012-12-19",
        "value": 53
    }, {
        "date": "2012-12-20",
        "value": 54
    }, {
        "date": "2012-12-21",
        "value": 56
    }, {
        "date": "2012-12-22",
        "value": 59
    }, {
        "date": "2012-12-23",
        "value": 58
    }, {
        "date": "2012-12-24",
        "value": 55
    }, {
        "date": "2012-12-25",
        "value": 52
    }, {
        "date": "2012-12-26",
        "value": 54
    }, {
        "date": "2012-12-27",
        "value": 50
    }, {
        "date": "2012-12-28",
        "value": 50
    }, {
        "date": "2012-12-29",
        "value": 51
    }, {
        "date": "2012-12-30",
        "value": 52
    }, {
        "date": "2012-12-31",
        "value": 58
    }, {
        "date": "2013-01-01",
        "value": 60
    }, {
        "date": "2013-01-02",
        "value": 67
    }, {
        "date": "2013-01-03",
        "value": 64
    }, {
        "date": "2013-01-04",
        "value": 66
    }, {
        "date": "2013-01-05",
        "value": 60
    }, {
        "date": "2013-01-06",
        "value": 63
    }, {
        "date": "2013-01-07",
        "value": 61
    }, {
        "date": "2013-01-08",
        "value": 60
    }, {
        "date": "2013-01-09",
        "value": 65
    }, {
        "date": "2013-01-10",
        "value": 75
    }, {
        "date": "2013-01-11",
        "value": 77
    }, {
        "date": "2013-01-12",
        "value": 78
    }, {
        "date": "2013-01-13",
        "value": 70
    }, {
        "date": "2013-01-14",
        "value": 70
    }, {
        "date": "2013-01-15",
        "value": 73
    }, {
        "date": "2013-01-16",
        "value": 71
    }, {
        "date": "2013-01-17",
        "value": 74
    }, {
        "date": "2013-01-18",
        "value": 78
    }, {
        "date": "2013-01-19",
        "value": 85
    }, {
        "date": "2013-01-20",
        "value": 82
    }, {
        "date": "2013-01-21",
        "value": 83
    }, {
        "date": "2013-01-22",
        "value": 88
    }, {
        "date": "2013-01-23",
        "value": 85
    }, {
        "date": "2013-01-24",
        "value": 85
    }, {
        "date": "2013-01-25",
        "value": 80
    }, {
        "date": "2013-01-26",
        "value": 87
    }, {
        "date": "2013-01-27",
        "value": 84
    }, {
        "date": "2013-01-28",
        "value": 83
    }, {
        "date": "2013-01-29",
        "value": 84
    }, {
        "date": "2013-01-30",
        "value": 81
    }]
});

chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}




//-----amchart4
var chart = AmCharts.makeChart("chartdiv4", {
    "language" : "fa",
    "type": "serial",
    "theme": "light",
    "fontFamily":"yekan",
    "autoMarginOffset":20,
    "marginRight":80,
    "dataProvider": [{
        "date": "2009-10-01",
        "value": 3,
        "fromValue": 2,
        "toValue": 5
    }, {
        "date": "2009-10-02",
        "value": 5,
        "fromValue": 4,
        "toValue": 6
    }, {
        "date": "2009-10-03",
        "value": 15,
        "fromValue": 12,
        "toValue": 18
    }, {
        "date": "2009-10-04",
        "value": 13,
        "fromValue": 10.4,
        "toValue": 15.6

    }, {
        "date": "2009-10-05",
        "value": 17,
        "fromValue": 13.6,
        "toValue": 20.4
    }, {
        "date": "2009-10-06",
        "value": 15,
        "fromValue": 12,
        "toValue": 18
    }, {
        "date": "2009-10-09",
        "value": 19,
        "fromValue": 15.2,
        "toValue": 22.8
    }, {
        "date": "2009-10-10",
        "value": 21,
        "fromValue": 16.8,
        "toValue": 25.2
    }, {
        "date": "2009-10-11",
        "value": 20,
        "fromValue": 16,
        "toValue": 24
    }, {
        "date": "2009-10-12",
        "value": 20,
        "fromValue": 16,
        "toValue": 24
    }, {
        "date": "2009-10-13",
        "value": 19,
        "fromValue": 15.2,
        "toValue": 22.8
    }, {
        "date": "2009-10-16",
        "value": 25,
        "fromValue": 20,
        "toValue": 30
    }, {
        "date": "2009-10-17",
        "value": 24,
        "fromValue": 19.2,
        "toValue": 28.8
    }, {
        "date": "2009-10-18",
        "value": 26,
        "fromValue": 20.8,
        "toValue": 31.2
    }, {
        "date": "2009-10-19",
        "value": 27,
        "fromValue": 21.6,
        "toValue": 32.4
    }, {
        "date": "2009-10-20",
        "value": 25,
        "fromValue": 20,
        "toValue": 30
    }, {
        "date": "2009-10-23",
        "value": 29,
        "fromValue": 23.2,
        "toValue": 34.8
    }, {
        "date": "2009-10-24",
        "value": 28,
        "fromValue": 22.4,
        "toValue": 33.6
    }, {
        "date": "2009-10-25",
        "value": 30,
        "fromValue": 24,
        "toValue": 36
    }, {
        "date": "2009-10-26",
        "value": 72,
        "fromValue": 57.6,
        "toValue": 86.4
    }, {
        "date": "2009-10-27",
        "value": 43,
        "fromValue": 34.4,
        "toValue": 51.6
    }, {
        "date": "2009-10-30",
        "value": 31,
        "fromValue": 24.8,
        "toValue": 37.2
    }, {
        "date": "2009-11-01",
        "value": 30,
        "fromValue": 24,
        "toValue": 36
    }, {
        "date": "2009-11-02",
        "value": 29,
        "fromValue": 23.2,
        "toValue": 34.8
    }, {
        "date": "2009-11-03",
        "value": 27,
        "fromValue": 21.6,
        "toValue": 32.4
    }, {
        "date": "2009-11-04",
        "value": 26,
        "fromValue": 20.8,
        "toValue": 31.2
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    "graphs": [{
        "id": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "valueField": "fromValue",
        "fillAlphas": 0
    }, {
        "fillAlphas": 0.2,
        "fillToGraph": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "valueField": "toValue"
    }, {
        "valueField": "value",
        "balloonText":"<div style='margin:10px; text-align:right'><span style='font-size:11px'>محدوده مجاز : [[fromValue]] - [[toValue]]</span><br><span style='font-size:18px'>مقدار :[[value]]</span></div>",
        "fillAlphas": 0
    }],
    "chartCursor": {
        "fullWidth": true,
        "cursorAlpha": 0.05,
        "valueLineEnabled":true,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled":true,
        categoryBalloonFunction: function(dateObj) {
          return persianDate(dateObj).format("MMM DD, YYYY");
        }
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
     "categoryAxis": {
     "position":"top",
        "parseDates": true,
        "axisAlpha": 0,
        "minHorizontalGap": 25,
        "gridAlpha": 0,
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
          },
        "tickLength": 0,
        "dateFormats": [{
            "period": 'fff',
            "format": 'JJ:NN:SS'
        }, {
            "period": 'ss',
            "format": 'JJ:NN:SS'
        }, {
            "period": 'mm',
            "format": 'JJ:NN'
        }, {
            "period": 'hh',
            "format": 'JJ:NN'
        }, {
            "period": 'DD',
            "format": 'DD'
        }, {
            "period": 'WW',

            "format": 'DD'
        }, {
            "period": 'MM',
            "format": 'MMM'
        }, {
            "period": 'YYYY',
            "format": 'YYYY'
        }]
    },

    "chartScrollbar":{

    },

    "export": {
        "enabled": true
    }
});

chart.addListener("dataUpdated", zoomChart);

function zoomChart(){
    chart.zoomToDates(new Date(2009,9,20, 15), new Date(2009,10,3,12));
}



//=-------------------------------------Revenue chart
if( $('#chart_6').length > 0 ){
		var ctx6 = document.getElementById("chart_6").getContext("2d");
		var data6 = {
			 labels: [
			"پژوهش",
			"تعمیر و نگهداری",
			"ساخت و ساز"
		],
		datasets: [
			{
				data: [100, 50, 300],
				backgroundColor: [
					"#03a9f3",
					"#fbae1c",
					"#f96197"
				],
				hoverBackgroundColor: [
					"#e3f3fc",
					"#fcf0e3",
					"#fce3ec"
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "yekan",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'yekan'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}


