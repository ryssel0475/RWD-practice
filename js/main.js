Starter();

function Starter(){
    $(".num1, .num4").addClass("active");
}

function Left() {
    var nowLeft = $('.nav-bar > div').scrollLeft();
    $('.nav-bar > div').animate({
      scrollLeft: nowLeft - 100
    });
  }

  function Right() {
    var nowRight = $('.nav-bar > div').scrollLeft();
    $('.nav-bar > div').animate({
      scrollLeft: nowRight + 100
    });
  }

$(document).ready(function(){
    $(".section2 .info-img .img").click(function(){
        var _index = $(this).index();
        var target = $(this).parents('section');
        
        target.find(".mask").removeClass("active");
        target.find(".mask").eq(_index).addClass("active");

        target.find(".ocean-img").removeClass("active");
        target.find(".ocean-img").eq(_index).addClass("active");

        target.find(".desc_").removeClass("active");
        target.find(".desc_").eq(_index).addClass("active");
    });
    
    $(".section3 .info-img .img").click(function(){
        var _index = $(this).index();
        var target = $(this).parents('section');
        
        target.find(".mask").removeClass("active");
        target.find(".mask").eq(_index).addClass("active");

        target.find(".jungle-img").removeClass("active");
        target.find(".jungle-img").eq(_index).addClass("active");

        target.find(".desc_").removeClass("active");
        target.find(".desc_").eq(_index).addClass("active");
    })

    $('.nav-sec').click(function(){
        var _sec = $(this).index();
        console.log(_sec)
        var target = $(this).parents('body');
        var move = target.find("section").eq(_sec)
        $('html,body').animate({scrollTop:$(move).offset().top}, 800);
      }); 
});
