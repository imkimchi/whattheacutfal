jQuery(document).ready(function($){

 $(".left_header_box .category .m1").mouseover(function(){

    $(".designers").stop(true).fadeTo(200,1);
	 $(".man").css("display","none");
	 $(".woman").css("display","none");
	  $(".dropdown_inner").css("display","block");
	 
	   
});

    $('.category_list li span.tb').click(function(){

        $(this).parent().find('.moremenu').toggle();


    });
    $('.size_list li p.tb').click(function(){
        $(this).find('span').toggleClass("disnone");
        $(this).parent().find('.moremenu').toggle();
    });

$('.selectbtn i').click(function() {
	console.log("remove")
	$(this).closest('.selectbtn').remove()
})
	$('.designer-wrapper div .fa').click(function() {
        console.log("remove")
        $(this).closest('div').remove()
    })

 $(".designers").mouseleave(function(){
	 $(".designers").stop(true).fadeTo(200,0);
	 $(".man").css("display","none");
	 $(".woman").css("display","none");	 
	 $(".dropdown_inner").css("display","none");
});

 $(".top_string").mouseover(function(){
	 $(".designers").css("display","none");
	 $(".man").css("display","none");
	 $(".woman").css("display","none");	 
    $(".accountmenu").css("display","none");		   
});

 $(".m4").mouseover(function(){
	 $(".designers").css("display","none");
	 $(".man").css("display","none");
	 $(".woman").css("display","none");	 
    $(".accountmenu").css("display","none");		   
});

 $(".right_header_box").mouseover(function(){
	 $(".dropdown").stop(true).fadeTo(200,0);
		   
});

$(".left_header_box").mouseover(function(){
	$(".accountmenu").css("display","none");	 
		   
});


 $(".left_header_box .category .m2").mouseover(function(){
	 $(".man").stop(true).fadeTo(200,1);
	$(".woman").css("display","none");
	 $(".designers").css("display","none");
});

 $(".man").mouseleave(function(){
	 $(".man").stop(true).fadeTo(200,0);
	$(".woman").css("display","none");
	 $(".designers").css("display","none");
	 
});


 $(".left_header_box .category .m3").mouseover(function(){
	 $(".woman").stop(true).fadeTo(200,1);
	$(".man").css("display","none");
	 $(".designers").css("display","none");
});

 $(".woman").mouseleave(function(){
	 $(".woman").stop(true).fadeTo(200,0);
	 $(".man").css("display","none");
	 $(".designers").css("display","none");
	 
});


 $(document).on('hover', '.account', function(){
     $(".accountmenu").stop(true).fadeTo(200,1);
 })

$(".account").hover(function(){
    $(".accountmenu").stop(true).fadeTo(200,1);
})

$(".accountmenu").mouseleave(function(){
	$(".accountmenu").stop(true).fadeTo(200,0);
	$(".accountmenu").css("display","none");
})

$(".mypage").mouseover(function(){
	console.log("triggered")
	$(".accountmenu").stop(true).fadeTo(200,0);
	$(".accountmenu").css("display","none");
})

$(".sell").mouseover(function(){
	$(".accountmenu").stop(true).fadeTo(200,0);
	$(".accountmenu").css("display","none");
})
	
$('.menu').click(function(){
	 $('.category-tab .active').removeClass('active');
	 $(this).addClass('active'); 		 
 });	 
$("#tab2").css("display","none");
 $('.menutab1').click(function(){
	 $("#tab1").css("display","block")
	 $("#tab2").css("display","none");		  
 });
  $('.menutab2').click(function(){
	 $("#tab1").css("display","none")
	 $("#tab2").css("display","block");		  
 });		

	
<!--hide filter-->	
$(".filter-toggle").click(function(){
	if($(".left_filter_box").hasClass('hide')) {

	}

	$(".left_filter_box").toggleClass("hide")
	$(".right_product_box").toggleClass("mini")
})


$(".designers-popover button.close").click(function(){
  $(this).parent().css("display","none")	
})
$(".all_designer_btn_box").click(function(){
	if($(".designers-popover").css('display') === 'block') {
            console.log("its blocked")
            $(".designers-popover").css('display', 'none')
	} else {
        $(".designers-popover").css("display","block")
	}
})


 $(".m4").click(function(event){            
            event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
   });
	

$(".clearall").css("display","none")
//
//if ($('.designer-group input').is(':checked')) {
//		$(".clearall").css("display","none")
//	}

//if ($('.designer-group label').prop('checked')) {
//    $(".clearall").css("display","none")
//}


function isDuplicated (brandName) {
	let isDuplicated = false

    $('.sbox span').each(function() {
        if(brandName === $(this).text()) isDuplicated = true
    })

    return isDuplicated
}

$('.designer-group label').click(function(e){
    e.preventDefault()

    let brandName = $(this).text()
    if(!isDuplicated(brandName)) {
        let designerBox = $('.designer-wrapper')

        $(".clearall").css("display","block");
        $('.clear-all').css('display', "block");
        $(".clearall").after($(`<div class="selectbtn sbox"><i class="fa fa-times fa-x" aria-hidden="true"></i><span>${brandName}</span></div>`))
        designerBox.append(`<div><i class="fa fa-times fa-x" aria-hidden="true"></i><span class='brandName'>${brandName}</span></div>`)
	}

})

    $('.designer-group label').click(function(e){
        e.preventDefault();
        let brandName = $(this).text()
        $('.sbox span').each(function() {
            if($(this).text() === brandName) console.log("sex")
        })
    })


$('i.fa.fa-times.fa-x').click(function(e) {
	e.preventDefault()
	$('.designer-wrapper div').remove()
	$(this).closest('.selectbtn').remove()
})

$(".clearall, .clear-all").click(function(){
   $( ".designer-group  input" ).prop( "checked", false );
   $(".selectbtnwrap .sbox").remove()
    $('.designer-wrapper div').remove()
});

$(".main_search_area .orderlist").css("display","none");
$(".main_search_area .sortby").mouseover(function(){
	$(".main_search_area .orderlist").css("display","block");
	})
$(".main_search_area .orderlist").mouseleave(function(){
	$(this).css("display","none");
	})	
$(".main_search_area .refresh").mouseleave(function(){
	$(".main_search_area .orderlist").css("display","none");
	})	
	
$(".main_search_area #search").mouseleave(function(){
	$(".main_search_area .orderlist").css("display","none");
	})	
		

})