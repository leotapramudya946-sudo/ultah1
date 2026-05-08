// script.js

$(document).ready(function(){

  // Animasi awal gift box
  $("#present").addClass("animated bounceInDown");

  // Hover animation
  $("#present").hover(

    function(){
      $("#top").addClass("animated bounce");
    },

    function(){
      $("#top").removeClass("animated bounce");
    }

  );

  // Click animation
  $("#present").on("click", function(){

    $("#top")
      .removeClass("animated bounce")
      .addClass("animated bounceOutUp");

    $(this).unbind("click");
    $(this).unbind("mouseleave");

    // Cat keluar
    setTimeout(function(){
      $("#cat").css("top", "-160px");
    }, 1000);

    // Animasi tulisan
    $("#wish")
      .children("div")
      .each(function(index){

        setTimeout(
          bounceIn.bind(null, $(this)),
          2500 + (index * 100)
        );

      });

  });

  // Function animasi huruf
  function bounceIn(el){

    el.addClass("animated bounceInDown swing");

    setTimeout(function(){

      el.removeClass("bounceInDown")
        .addClass("swing");

    }, 1000);

  }

});
