//[editor Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the wysihtml5 Editor 

 
//Add text editor
    $(function () {
    "use strict";
    // Replace the <textarea id="editor1"> with a CKEditor
	// instance, using default configuration.
	
  CKEDITOR.replace('editor1', {
    language: 'fa',
    contentsLanguage : 'fa',
    contentsLangDirection: 'rtl',
    height: 270,
    scayt_customerId: '1:Eebp63-lWHbt2-ASpHy4-AYUpy2-fo3mk4-sKrza1-NsuXy4-I1XZC2-0u2F54-aqYWd1-l3Qf14-umd',
    scayt_sLang: 'auto',
    removeButtons: 'PasteFromWord'
  });
	//bootstrap WYSIHTML5 - text editor

	$('.textarea').wysihtml5({
    locale: 'fa-IR',
  });		
	
  });

 