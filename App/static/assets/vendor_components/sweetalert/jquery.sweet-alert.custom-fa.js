swal.setDefaults({ 
    confirmButtonText: "باشه",
    cancelButtonText: "لغو" 
});

!function($) {
    "use strict";

    var SweetAlert = function() {};

    //examples 
    SweetAlert.prototype.init = function() {
        
    //Basic
    $('#sa-basic').click(function(){
        swal("این یه پیامه !");
    });

    //A title with a text under
    $('#sa-title').click(function(){
        swal("این یه پیامه !", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ")
    });

    //Success Message
    $('#sa-success').click(function(){
        swal("کارت خوب بود !", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ", "success")
    });

    //Warning Message
    $('#sa-warning').click(function(){
        swal({   
            title: "مطمئنی؟",   
            text: "دیگه نمیتونی این فایل رو بازیابی کنی !",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "بله ، حذفش کن !",   
            closeOnConfirm: false 
        }, function(){   
            swal("حذف شد !", "فایل شما حذف شد .", "success"); 
        });
    });

    //Parameter
    $('#sa-params').click(function(){
        swal({   
            title: "مطمئنی؟",   
            text: "دیگه نمیتونی این فایل رو بازیابی کنی !",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "بله ، حذفش کن !",   
            cancelButtonText: "نه ، لطفا لغوش کن !",   
            closeOnConfirm: false,   
            closeOnCancel: false 
        }, function(isConfirm){   
            if (isConfirm) {     
                swal("حذف شد !", "فایل شما حذف شد .", "success");   
            } else {     
                swal("لغو شد", "فایل شما امن است:)", "error");   
            } 
        });
    });

    //Custom Image
    $('#sa-image').click(function(){
        swal({   
            title: "احسان !",   
            text: "اخیراً به توییتر پیوسته ",   
            imageUrl: "../images/avatar/avatar-1.png" 
        });
    });

    //Auto Close Timer
    $('#sa-close').click(function(){
         swal({   
            title: "هشدار بسته شدن خودکار !",   
            text: "تا 2 ثانیه دیگه بسته میشم .",   
            timer: 2000,   
            showConfirmButton: false 
        });
    });


    },
    //init
    $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.SweetAlert.init()
}(window.jQuery);