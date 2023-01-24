//[Data Table Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the Data Table

$(function () {
    "use strict";
	
    $(document).ready(function () {

         var table = $('#project-table').DataTable({
			language: {
				url:'./js/dataTables.fa.json' 
					},
             "data": testdata.data,
			 "searching": true,
			 "paging":   true,
			 "info":     true,
             select:"single",
             "columns": [
                 {
                     "className": 'details-control',
                     "orderable": false,
                     "data": null,
                     "defaultContent": '',
                     "render": function () {
                         return '';
                     },
                     width:"15px"
                 },
                 { "data": "name" },
				 { "data": "est" },
				 { "data": "contacts" },
				 { "data": "status" },
				 { "data": "starts" },
				 { "data": "ends" },
				 { "data": "tracker" },

             ],
             "order": [[1, 'asc']]
         });
		
		if ($('.table-responsive').length) {
			setRandomClass();
			setInterval(function () {
				setRandomClass();
			},1000);
			function setRandomClass() {
				var tbody = $(".table-responsive table tbody");
				var items = tbody.find("tr");
				var number = items.length;
				var random1 = Math.floor((Math.random() * number));
				var random2 = Math.floor((Math.random() * number));
				items.removeClass("bg-pale-warning");
				items.eq(random1).addClass("bg-pale-warning");
				items.eq(random2).addClass("bg-pale-warning");
			}
		}

         // Add event listener for opening and closing details
         $('#project-table tbody').on('click', 'td.details-control', function () {
             var tr = $(this).closest('tr');
             var tdi = tr.find("i.fa");
             var row = table.row(tr);

             if (row.child.isShown()) {
                 // This row is already open - close it
                 row.child.hide();
                 tr.removeClass('shown');
                 tdi.first().removeClass('fa-minus-square');
                 tdi.first().addClass('fa-plus-square');
             }
             else {
                 // Open this row
                 row.child(format(row.data())).show();
                 tr.addClass('shown');
                 tdi.first().removeClass('fa-plus-square');
                 tdi.first().addClass('fa-minus-square');
             }
         });

         table.on("user-select", function (e, dt, type, cell, originalEvent) {
             if ($(cell.node()).hasClass("details-control")) {
                 e.preventDefault();
             }
         });
     });

    function format(d){
        
         // `d` is the original data object for the row
         return '<table cellpadding="6" cellspacing="0" border="0" style="padding-left:50px; width:100%;">' +
            '<tr>'+
				'<td style="width:100px">عنوان پروژه :</td>'+
				'<td>'+d.name+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>تایخ اتمام :</td>'+
				'<td>'+d.ends+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>اطلاعات اضافی :</td>'+
				'<td>و جزئیات بیشتر در اینجا (تصاویر و غیره) ...</td>'+
			'</tr>'+
			'<tr>'+
				'<td>نظرات :</td>'+
				'<td>'+d.comments+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>عملکرد :</td>'+
				'<td>'+d.action+'</td>'+
			'</tr>'+
         '</table>';  
    }

    var testdata = {
    "data": [
    {
    "name": "پروژه لوله کشی<br><small class='text-muted'><i>بودجه: 5,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-info progress-bar-striped' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 60%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/1.jpg' class='offline' alt='user'></a> </div> ",
	"status": "<span class='badge badge-success'>فعال</span>",	
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary active' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "02-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
    },
    {
	"name": "پروژه سقف<br><small class='text-muted'><i>بودجه: 25,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='30' aria-valuemin='0' aria-valuemax='100' style='width: 30%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/2.jpg' class='online'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "02-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "پروژه ساختمان دفتر<br><small class='text-muted'><i>بودجه: 1,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-primary progress-bar-striped' role='progressbar' aria-valuenow='55' aria-valuemin='0' aria-valuemax='100' style='width: 55%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/1.jpg' class='online' alt='user'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary active' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "03-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "توسعه راه <br><small class='text-muted'><i>بودجه: 2,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-warning progress-bar-striped' role='progressbar' aria-valuenow='68' aria-valuemin='0' aria-valuemax='100' style='width: 68%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/5.jpg' class='busy'></a> </div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "03-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "توسعه محصول<br><small class='text-muted'><i>بودجه: 3,500<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-danger progress-bar-striped' role='progressbar' aria-valuenow='10' aria-valuemin='0' aria-valuemax='100' style='width: 10%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/6.jpg' class='online'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "06-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "ساختمان امیران<br><small class='text-muted'><i>بودجه: 5,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-info progress-bar-striped' role='progressbar' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100' style='width: 15%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><a href='javascript:void(0)'><img src='../images/avatar/1.jpg' class='away'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary active' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "01-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "صفحه خورشیدی<br><small class='text-muted'><i>بودجه: 7,000<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-primary progress-bar-striped' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 100%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/4.jpg' class='online' alt='user'></a></div> ",
	"status": "<span class='badge badge-default'>غیر فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "09-1401",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "مزرعه بادی<br><small class='text-muted'><i>بدون بودجه<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100' style='width: 15%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/2.jpg' class='offline'></a> </div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "07-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "پروژه مسکن<br><small class='text-muted'><i>بدون بودجه<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-warning progress-bar-striped' role='progressbar' aria-valuenow='10' aria-valuemin='0' aria-valuemax='100' style='width: 10%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/1.jpg' class='offline'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "01-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	},   
	{
	"name": "مدیریت املاک<br><small class='text-muted'><i>بدون بودجه<i></small>",
	"est": "<td><div class='progress progress-sm'><div class='progress-bar progress-bar-primary progress-bar-striped' role='progressbar' aria-valuenow='55' aria-valuemin='0' aria-valuemax='100' style='width: 55%'></div></div></td>",
	"contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='../images/avatar/8.jpg' class='online'></a></div> ",
	"status": "<span class='badge badge-success'>فعال</span>",
	"tracker": "<button type='button' class='btn btn-sm btn-toggle btn-primary' data-toggle='button' aria-pressed='true'><span class='handle'></span></button>",
	"starts": "01-1399",
	"ends": "02-1400",
	"comments": "این یک قسمت نظرات خالی است که برای افزودن نظرات و یادداشت برداری استفاده می شود.",
	"action": "<button class='btn btn-xs'>بازکردن پرونده</button> <button class='btn btn-xs btn-danger pull-right' style='margin-right:5px'>حذف رکورد</button> <button class='btn btn-xs btn-success pull-right'>ذخیره تغییرات</button> "
	}     
    ]
    };
	
  }); // End of use strict