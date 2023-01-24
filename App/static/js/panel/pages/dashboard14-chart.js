//-----amchart
//----------------chartdiv21

var chartData = generateChartData();

function generateChartData() {
  var chartData = [];
  var firstDate = new Date( 1401, 3, 12 );
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

var chart = AmCharts.makeChart( "chartdiv21", {
  "language" : "fa",
  "type": "stock",
  "theme": "light",
  "fontFamily":"yekan",
  "categoryAxesSettings": {
    "minPeriod": "mm"
  },

  "dataSets": [ {
    "color": "#fbae1c",
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