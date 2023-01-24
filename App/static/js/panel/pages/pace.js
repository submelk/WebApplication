//[Javascript]



$(function () {
    "use strict";   

		
	  // To make Pace works on Ajax calls
	  $(document).ajaxStart(function () {
		Pace.restart()
	  })
	  $('.ajax').click(function () {
		$.ajax({
		  url: '#', success: function (result) {
			$('.ajax-content').html('<hr>درخواست ajax تکمیل شد !')
		  }
		})
	  })
	
  }); // End of use strict