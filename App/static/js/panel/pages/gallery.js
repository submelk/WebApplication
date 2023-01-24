//[Javascript]



$(function () {
    "use strict";   

		
	  // delegate calls to data-toggle="lightbox"
        $(document).delegate('*[data-bs-toggle="lightbox"]:not([data-bs-gallery="navigateTo"])', 'click', function(event) {
            event.preventDefault();
            return $(this).ekkoLightbox({
                onShown: function() {
                    if (window.console) {
                        return console.log('رویدادهای ما را بررسی می کنید، نه؟');
                    }
                },
                onNavigate: function(direction, itemIndex) {
                    if (window.console) {
                        return console.log(' در حال پیمایش ' + direction + '. آیتم فعلی : ' + itemIndex);
                    }
                }
            });
        });
        //Programatically call
        $('#open-image').click(function(e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
        $('#open-youtube').click(function(e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
        // navigateTo
        $(document).delegate('*[data-bs-gallery="navigateTo"]', 'click', function(event) {
            event.preventDefault();
            var lb;
            return $(this).ekkoLightbox({
                onShown: function() {
                    lb = this;
                    $(lb.modal_content).on('click', '.modal-footer a', function(e) {
                        e.preventDefault();
                        lb.navigateTo(2);
                    });
                }
            });
        });
	
  }); // End of use strict