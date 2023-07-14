//Responsive Nav

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); 
    if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); 
    if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());

});

// Smooth Scrolling

$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// go back to the top
$('.gotop').click(function(){
    $('html,body').animate({"scrollTop":"0"})
    n=1;
});

// gotop button showing from page2
    $(".gotop").fadeOut(0);
    $(window).scroll(function(){
        if($(window).scrollTop() >= $("#aboutme").offset().top){
            $(".gotop").fadeIn();
        }else{
            $(".gotop").fadeOut();
        }
    });

//personal photo changes
$(function(){
m = 0;
clock = setInterval(auto,2500);
$(".picset img").mouseover(function(){
  clearInterval(clock);
});
$(".picset img").mouseout(function(){
  clock = setInterval(auto, 2500);
});

function auto(){
  m++;
  if(m > 3){
    m = 0;
  }
  change();
};

function change(){
  $(".picset img").fadeOut(400,function(){
    $(".picset img").attr('src','./img/photo'+m+'.png');
    $(".picset img").fadeIn();
  });
  //$(".picset").css("background-image","url(../img/photo"+m+".jpg");
};




});

//old-house photo change

$(function(){
n = 0;
clock = setInterval(auto1,2500);
$(".picroll img").mouseover(function(){
  clearInterval(clock);
});
$(".picroll img").mouseout(function(){
  clock = setInterval(auto1, 2500);
});

function auto1(){
  n++;
  if(n > 9){
    n=0;
  }
  $(".picroll img").fadeOut(400,function(){
  $(".picroll img").attr("src", './img/cs'+n+'.jpg');
  $(".picroll img").fadeIn();
  });

};
});
