//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 		
//-----amchart
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_kelly);
// Themes end

var chart = am4core.create("market-btc", am4charts.XYChart);
chart.padding(0, 15, 0, 15);
chart.colors.step = 3;

var data = [];
var price1 = 1000;
var price2 = 2000;
var price3 = 3000;
var quantity = 1000;
for (var i = 15; i < 3000; i++) {
  price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
  price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
  price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);

  if (price1 < 100) {
    price1 = 100;
  }

  if (price2 < 100) {
    price2 = 100;
  }

  if (price3 < 100) {
    price3 = 100;
  }    

  quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);

  if (quantity < 0) {
    quantity *= -1;
  }
  data.push({ date: new Date(1390, 0, i), price1: price1, price2:price2, price3:price3, quantity: quantity });
}


chart.data = data;
// the following line makes value axes to be arranged vertically.
chart.leftAxesContainer.layout = "vertical";

// uncomment this line if you want to change order of axes
//chart.bottomAxesContainer.reverseOrder = true;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.ticks.template.length = 8;
dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.ticks.template.disabled = false;
dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
dateAxis.renderer.minLabelPosition = 0.01;
dateAxis.renderer.maxLabelPosition = 0.99;
dateAxis.keepSelection = true;

dateAxis.groupData = true;
dateAxis.minZoomCount = 5;

// these two lines makes the axis to be initially zoomed-in
// dateAxis.start = 0.7;
// dateAxis.keepSelection = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.zIndex = 1;
valueAxis.renderer.baseGrid.disabled = true;
// height of axis
valueAxis.height = am4core.percent(65);

valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.verticalCenter = "bottom";
valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

//valueAxis.renderer.maxLabelPosition = 0.95;
valueAxis.renderer.fontSize = "0.8em"

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.dateX = "date";
series1.dataFields.valueY = "price1";
series1.dataFields.valueYShow = "changePercent";
series1.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
series1.name = "BTC";
series1.tooltip.getFillFromObject = false;
series1.tooltip.getStrokeFromObject = true;
series1.tooltip.background.fill = am4core.color("#fff");
series1.tooltip.background.strokeWidth = 2;
series1.tooltip.label.fill = series1.stroke;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.dateX = "date";
series2.dataFields.valueY = "price2";
series2.dataFields.valueYShow = "changePercent";
series2.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
series2.name = "ETH";
series2.tooltip.getFillFromObject = false;
series2.tooltip.getStrokeFromObject = true;
series2.tooltip.background.fill = am4core.color("#fff");
series2.tooltip.background.strokeWidth = 2;
series2.tooltip.label.fill = series2.stroke;

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.dateX = "date";
series3.dataFields.valueY = "price3";
series3.dataFields.valueYShow = "changePercent";
series3.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
series3.name = "LTC";
series3.tooltip.getFillFromObject = false;
series3.tooltip.getStrokeFromObject = true;
series3.tooltip.background.fill = am4core.color("#fff");
series3.tooltip.background.strokeWidth = 2;
series3.tooltip.label.fill = series3.stroke;

var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.tooltip.disabled = true;
// height of axis
valueAxis2.height = am4core.percent(35);
valueAxis2.zIndex = 3
// this makes gap between panels
valueAxis2.marginTop = 30;
valueAxis2.renderer.baseGrid.disabled = true;
valueAxis2.renderer.inside = true;
valueAxis2.renderer.labels.template.verticalCenter = "bottom";
valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
//valueAxis.renderer.maxLabelPosition = 0.95;
valueAxis2.renderer.fontSize = "0.8em";

valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

var volumeSeries = chart.series.push(new am4charts.StepLineSeries());
volumeSeries.fillOpacity = 1;
volumeSeries.fill = series1.stroke;
volumeSeries.stroke = series1.stroke;
volumeSeries.dataFields.dateX = "date";
volumeSeries.dataFields.valueY = "quantity";
volumeSeries.yAxis = valueAxis2;
volumeSeries.tooltipText = "حجم : {valueY.value}";
volumeSeries.name = "Series 2";
// volume should be summed
volumeSeries.groupFields.valueY = "sum";
volumeSeries.tooltip.label.fill = volumeSeries.stroke;
chart.cursor = new am4charts.XYCursor();

var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series1);
scrollbarX.marginBottom = 20;
var sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);
sbSeries.dataFields.valueYShow = undefined;
chart.scrollbarX = scrollbarX;

// Add range selector
var selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
selector.container = document.getElementById("controls");
selector.axis = dateAxis;

}); // end am4core.ready()





am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("market-depth", am4charts.XYChart);

// Add data
chart.dataSource.url = "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50";
chart.dataSource.reloadFrequency = 30000;
chart.dataSource.adapter.add("parsedData", function(data) {
  
  // Function to process (sort and calculate cummulative volume)
  function processData(list, type, desc) {

    // Convert to data points
    for(var i = 0; i < list.length; i++) {
      list[i] = {
        value: Number(list[i][0]),
        volume: Number(list[i][1]),
      }
    }

    // Sort list just in case
    list.sort(function(a, b) {
      if (a.value > b.value) {
        return 1;
      }
      else if (a.value < b.value) {
        return -1;
      }
      else {
        return 0;
      }
    });

    // Calculate cummulative volume
    if (desc) {
      for(var i = list.length - 1; i >= 0; i--) {
        if (i < (list.length - 1)) {
          list[i].totalvolume = list[i+1].totalvolume + list[i].volume;
        }
        else {
          list[i].totalvolume = list[i].volume;
        }
        var dp = {};
        dp["value"] = list[i].value;
        dp[type + "volume"] = list[i].volume;
        dp[type + "totalvolume"] = list[i].totalvolume;
        res.unshift(dp);
      }
    }
    else {
      for(var i = 0; i < list.length; i++) {
        if (i > 0) {
          list[i].totalvolume = list[i-1].totalvolume + list[i].volume;
        }
        else {
          list[i].totalvolume = list[i].volume;
        }
        var dp = {};
        dp["value"] = list[i].value;
        dp[type + "volume"] = list[i].volume;
        dp[type + "totalvolume"] = list[i].totalvolume;
        res.push(dp);
      }
    }

  }

  // Init
  var res = [];
  processData(data.bids, "bids", true);
  processData(data.asks, "asks", false);

  return res;
});

// Set up precision for numbers
chart.numberFormatter.numberFormat = "#,###.####";

// Create axes
var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
xAxis.dataFields.category = "value";
//xAxis.renderer.grid.template.location = 0;
xAxis.renderer.minGridDistance = 50;
xAxis.title.text = "قیمت (بیت کوین/اتریوم)";

var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.title.text = "حجم";

// Create series
var series = chart.series.push(new am4charts.StepLineSeries());
series.dataFields.categoryX = "value";
series.dataFields.valueY = "bidstotalvolume";
series.strokeWidth = 2;
series.stroke = am4core.color("#6713d2");
series.fill = series.stroke;
series.fillOpacity = 0.1;
series.tooltipText = "درخواست: [bold]{categoryX}[/]\nحجم کل : [bold]{valueY}[/]\nحجم : [bold]{bidsvolume}[/]"

var series2 = chart.series.push(new am4charts.StepLineSeries());
series2.dataFields.categoryX = "value";
series2.dataFields.valueY = "askstotalvolume";
series2.strokeWidth = 2;
series2.stroke = am4core.color("#cc208e");
series2.fill = series2.stroke;
series2.fillOpacity = 0.1;
series2.tooltipText = "درخواست: [bold]{categoryX}[/]\nحجم کل : [bold]{valueY}[/]\nحجم : [bold]{asksvolume}[/]"

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.dataFields.categoryX = "value";
series3.dataFields.valueY = "bidsvolume";
series3.strokeWidth = 0;
series3.fill = am4core.color("#130b3e");
series3.fillOpacity = 0.2;

var series4 = chart.series.push(new am4charts.ColumnSeries());
series4.dataFields.categoryX = "value";
series4.dataFields.valueY = "asksvolume";
series4.strokeWidth = 0;
series4.fill = am4core.color("#130b3e");
series4.fillOpacity = 0.2;

// Add cursor
chart.cursor = new am4charts.XYCursor();

}); // end am4core.ready()





