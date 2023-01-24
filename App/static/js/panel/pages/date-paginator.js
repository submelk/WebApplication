//[Javascript]



$(function () {
    "use strict";   
	
	moment.lang("fa");
	var datepaginator = function() {
		return {
			init: function() {
				$("#paginator1").datepaginator(), 
				$("#paginator2").datepaginator({
					size: "large",
				}),
				$("#paginator3").datepaginator({
					size: "small"
				}), 
				$("#paginator4").datepaginator({
					onSelectedDateChanged: function(a, t) {
						alert("تاریخ انتخاب شده : " + moment(t).format("Do, MMM YYYY"))
					}
				})
			}
		}
	}();
	jQuery(document).ready(function() {
		datepaginator.init()
	}); 
	
  }); // End of use strict