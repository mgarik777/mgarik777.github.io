$(".settings").click(function(){
  $(".set_pat").css("display", "block");
});
$(".x_mek").click(function(){
  $(".set_pat").css("display", "none");
});
$(".cell").click(function(){
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;", "color: auto")
  });
  $(".expand").css("display", "block");
  $(".cursor_img").css("border", "2px solid #fff");
  $(".min_curs_img").css("background", "#fff");
  $(".min_curs_img").css("border", "1px solid #fff");
  $(".default i").attr("style", "color: gray !important");
});
$(".default").click(function(){
  $(document).on("mousemove", e => {
    $(".cursor").removeAttr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
  });
  $(".expand").css("display", "none");
  $(".default i").attr("style", "color: #fff !important");
  $(".cursor_img").css("border", "2px solid gray");
  $(".min_curs_img").css("background", "gray");
  $(".min_curs_img").css("border", "1px solid gray");
});
$(".home").click(function(){
  $(".user, .portfolio, .blog, .phone").css("background", "none");
  $(".user, .portfolio, .blog, .phone").css("border", "none");
  $(".user, .portfolio, .blog, .phone").css("margin-left", "0");
  $(".user, .portfolio, .blog, .phone").css("width", "auto");
  $(".user, .portfolio, .blog, .phone").css("color", "gray");

  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "block");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "none");
});
$(".user").click(function(){
  $(".home, .portfolio, .blog, .phone").css("background", "none");
  $(".home, .portfolio, .blog, .phone").css("border", "none");
  $(".home, .portfolio, .blog, .phone").css("margin-left", "0");
  $(".home, .portfolio, .blog, .phone").css("width", "auto");
  $(".home, .portfolio, .blog, .phone").css("color", "gray");

  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "block");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "none");
});
$(".portfolio").click(function(){
  $(".home, .user, .blog, .phone").css("background", "none");
  $(".home, .user, .blog, .phone").css("border", "none");
  $(".home, .user, .blog, .phone").css("margin-left", "0");
  $(".home, .user, .blog, .phone").css("width", "auto");
  $(".home, .user, .blog, .phone").css("color", "gray");

  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "none");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(".home, .portfolio, .user, .phone").css("background", "none");
  $(".home, .portfolio, .user, .phone").css("border", "none");
  $(".home, .portfolio, .user, .phone").css("margin-left", "0");
  $(".home, .portfolio, .user, .phone").css("width", "auto");
  $(".home, .portfolio, .user, .phone").css("color", "gray");

  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(".home, .portfolio, .blog, .user").css("background", "none");
  $(".home, .portfolio, .blog, .user").css("border", "none");
  $(".home, .portfolio, .blog, .user").css("margin-left", "0");
  $(".home, .portfolio, .blog, .user").css("width", "auto");
  $(".home, .portfolio, .blog, .user").css("color", "gray");

  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
$(".btn_poxel_mek").click(function(){
  $("#mek").attr("class", "fa-solid fa-circle");
  $("#erku").attr("class", "fa-regular fa-circle");
  $("#ereq").attr("class", "fa-regular fa-circle");
  setTimeout(haytnvel,1000);
  $(".for_car_min_mek").css("animation", "aj 2s");
  $(".for_car_min_erku").css("animation", "aj_i 2s");
  $(".for_car_slide").css("animation", "dzax 2s");
  setTimeout(korel,1000);
  function myFunction(x) {
    if (x.matches) {
      $(".for_car_min_mek").css("animation", "aj 2s");
    } else {
      $(".for_car_btn").css("animation", "aj 2s");
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x)
  x.addListener(myFunction)
});
$(".btn_poxel_erku").click(function(){
  $("#mek").attr("class", "fa-regular fa-circle");
  $("#erku").attr("class", "fa-solid fa-circle");
  $("#ereq").attr("class", "fa-regular fa-circle");
  $(".for_car_slide").css("animation", "dzax 2s");
  setTimeout(korel,1000);
  setTimeout(korel_erku,1000);
  $(".for_car_slide").css("animation", "dzax_erku 2s");
  $(".for_car_min_erku").css("animation", "aj_i 2s");
  setTimeout(gal,1000);
  function myFunction(x) {
    if (x.matches) {
      $(".for_car_min_mek").css("animation", "aj_erku 2s");
    } else {
      $(".for_car_btn").css("animation", "aj_erku 2s");
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x)
  x.addListener(myFunction)
});
$(".btn_poxel_ereq").click(function(){
  $("#mek").attr("class", "fa-regular fa-circle");
  $("#erku").attr("class", "fa-regular fa-circle");
  $("#ereq").attr("class", "fa-solid fa-circle");
  $(".for_car_min_erku").css("animation", "aj_ereq 2s forwards");
  $(".for_car_slide").css("animation", "dzax_erku 2s");
  $(".for_car_btn").css("animation", "aj_erku 2s");
  $(".for_car_min_mek").css("animation", "aj_erku2 2s");
  setTimeout(korel_ereq,1000);
  setTimeout(gal_erku,1000);
});
function korel(){
  $(".for_car_slide").css("display", "none");
  $(".for_car_min_erku").css("display", "none");
};
function korel_erku(){
  $(".for_car_min_erku").css("display", "none");
  function myFunction(x) {
    if (x.matches) {
      $(".for_car_min_mek").css("display", "none");
    } else {
      $(".for_car_btn").css("display", "none");
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x)
  x.addListener(myFunction)
};
function korel_ereq(){
  $(".for_car_slide").css("display", "none");
  $(".for_car_min_mek").css("display", "none");
  $(".for_car_btn").css("display", "none");
};
function gal(){
  $(".for_car_slide").css("display", "block");
};
function gal_erku(){
  $(".for_car_min_erku").css("display", "block");
};
function haytnvel(){
  function myFunction(x) {
    if (x.matches) {
      $(".for_car_min_mek").css("display", "block");
    } else {
      $(".for_car_btn").css("display", "block");
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x)
  x.addListener(myFunction)
};
$(window).ready(function(){
  $(".pat_erku").scroll(function(){
    function my(){
      if($(".pat_erku").scrollTop() > 2099){
        $(".aj_levl").css("transform", "translateX( 0)");
        $(".dzax_levl").css("transform", "translateX( 0)");
        $(".aj_levl").css("height", "100%");
        $(".dzax_levl").css("height", "100%");
        $(".aj_levl div").css("opacity", "1");
        $(".dzax_levl div").css("opacity", "1");
      }else{
        $(".aj_levl").css("transform", "translateX( 80%)");
        $(".dzax_levl").css("transform", "translateX( -80%)");
        $(".aj_levl").css("height", "0");
        $(".dzax_levl").css("height", "0");
      };
    };
    my();
  });
});
$(".pat_erku").scroll(function(){
    function my2(){
      if($(".pat_erku").scrollTop() > 2350){
        $(".fox").css("opacity", "1");
      }else{
        $(".fox").css("opacity", "0");
      };
    };
    my2();
});
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var img1 = document.getElementById('myImg2');
var img2 = document.getElementById('myImg3');
var img3 = document.getElementById('myImg4');
var img4 = document.getElementById('myImg5');
var img5 = document.getElementById('myImg6');
var img6 = document.getElementById('myImg7');
var img7 = document.getElementById('myImg8');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$("#btn1").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img.src;
   modalImg.alt = this.alt;
  });
 });
$("#btn2").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img1.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn3").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img2.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn4").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img3.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn5").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img4.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn6").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img5.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn7").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img6.src;
   modalImg.alt = this.alt;
  });
 });
 $("#btn8").click(function(){
  $(".myImg").ready(function(){
   modal.style.display = "block";
   modalImg.src = img7.src;
   modalImg.alt = this.alt;
  });
 });
modal.onclick = function() {
img01.className += "out";
setTimeout(function() {
modal.style.display = "none";
img01.className = "modal-content";
});
};
$(".kn_mek").click(function(){
  $("#araj").removeAttr("class","mec_poqr");
  $("#araj").attr("class","col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12");
  $(".for_erku").css({
    "transform": "rotateZ(0)",
    "background": "#fa5b0f",
    "box-shadow": "none",
  });
  $(this).css({
    "transform": "rotateZ(10deg)",
    "background": "none",
    "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  $(".myImg").css({
    "transform": "scale(1)",
  });
});
$(".erk").click(function(){
  $("#araj").removeAttr("class","mec_poqr");
  $("#araj").attr("class","col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12");
  $(".for_klo").attr("id", "klo");
  $(".kn_mek, .for_erku").css({
    "transform": "rotateZ(0)",
    "background": "#fa5b0f",
    "box-shadow": "none",
  });
  $(this).css({
    "transform": "rotateZ(10deg)",
    "background": "none",
    "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  $(".myImg").css({
    "transform": "scale(1)",
  });
});
$(".kn_mek").click(function(){
  $(".for_klo").removeAttr("id", "klo");
});
$(".ere").click(function(){
  $("#araj").attr("class","col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mec_poqr");
  $(".for_klo").attr("id", "klo2");
  $(".kn_mek, .for_erku").css({
    "transform": "rotateZ(0)",
    "background": "#fa5b0f",
    "box-shadow": "none",
  });
  $(this).css({
    "transform": "rotateZ(10deg)",
    "background": "none",
    "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  function poqr(){
    $(".myImg").css({
      "transform": "scale(.2)",
    });
  };
  setTimeout(poqr(),1000);
});
$(".chor").click(function(){
  $("#araj").attr("class","col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mec_poqr");
  $(".for_klo").attr("id", "klo3");
  $(".kn_mek, .for_erku").css({
    "transform": "rotateZ(0)",
    "background": "#fa5b0f",
    "box-shadow": "none",
  });
  $(this).css({
    "transform": "rotateZ(10deg)",
    "background": "none",
    "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  function poqr(){
    $(".myImg").css({
      "transform": "scale(.2)",
    });
  };
  setTimeout(poqr(),1000);
});
$(".kn_hing").click(function(){
  $("#araj").attr("class","col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mec_poqr");
  $(".for_klo").attr("id", "klo4");
  $(".kn_mek, .for_erku").css({
    "transform": "rotateZ(0)",
    "background": "#fa5b0f",
    "box-shadow": "none",
  });
  $(this).css({
    "transform": "rotateZ(10deg)",
    "background": "none",
    "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  function poqr(){
    $(".myImg").css({
      "transform": "scale(.2)",
    });
  };
  setTimeout(poqr(),1000);
});
$(document).on("mousemove", e => {
  $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
});
$(document).on("click", () => {
  $(".cursor").addClass("expand");
  setTimeout(() => {
    $(".cursor").removeClass("expand");
  }, 500)
});
$("#img_erku").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#8315e7",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid #8315e7",
  });
  $(".card_vra").css({
    "border-left": "3px solid #8315e7",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid #8315e7");
  });
  $(".min_curs").css({
    "border": "1px solid #8315e7",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": "#8315e7",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#8315e7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#8315e7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#8315e7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#8315e7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#8315e7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#8315e7");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#8315e7");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#8315e7");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#8315e7");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#8315e7");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_mek").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#fa5b0f",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid #fa5b0f",
  });
  $(".card_vra").css({
    "border-left": "3px solid #fa5b0f",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid #fa5b0f");
  });
  $(".min_curs").css({
    "border": "1px solid #fa5b0f",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": "#fa5b0f",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#fa5b0f",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#fa5b0f",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#fa5b0f",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#fa5b0f",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "#fa5b0f",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#fa5b0f");
  
    $("..mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#fa5b0f");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "#fa5b0f");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#fa5b0f");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_ereq").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "rgb(247, 11, 43)",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid rgb(247, 11, 43)",
  });
  $(".card_vra").css({
    "border-left": "3px solid rgb(247, 11, 43)",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid rgb(247, 11, 43)");
  });
  $(".min_curs").css({
    "border": "1px solid rgb(247, 11, 43)",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": "rgb(247, 11, 43)",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": "rgb(247, 11, 43)",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "rgb(247, 11, 43)",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "rgb(247, 11, 43)",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "rgb(247, 11, 43)",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": "rgb(247, 11, 43)",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "rgb(247, 11, 43)");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "rgb(247, 11, 43)");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", "rgb(247, 11, 43)");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "rgb(247, 11, 43)");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "rgb(247, 11, 43)");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_chors").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#2753d7",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid  #2753d7",
  });
  $(".card_vra").css({
    "border-left": "3px solid  #2753d7",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid  #2753d7");
  });
  $(".min_curs").css({
    "border": "1px solid  #2753d7",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": " #2753d7",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #2753d7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #2753d7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #2753d7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #2753d7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #2753d7",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #2753d7");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #2753d7");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #2753d7");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#2753d7");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#2753d7");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_hing").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#f1b41b",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid  #f1b41b",
  });
  $(".card_vra").css({
    "border-left": "3px solid  #f1b41b",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid  #f1b41b");
  });
  $(".min_curs").css({
    "border": "1px solid  #f1b41b",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": " #f1b41b",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #f1b41b",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #f1b41b",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #f1b41b",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #f1b41b",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #f1b41b",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #f1b41b");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #f1b41b");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #f1b41b");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#f1b41b");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#f1b41b");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_vec").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#dd5081",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid  #dd5081",
  });
  $(".card_vra").css({
    "border-left": "3px solid  #dd5081",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid  #dd5081");
  });
  $(".min_curs").css({
    "border": "1px solid  #dd5081",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": " #dd5081",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #dd5081",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #dd5081",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #dd5081",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #dd5081",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #dd5081",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #dd5081");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #dd5081");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #dd5081");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#dd5081");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#dd5081");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_yot").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "#75c71a",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid  #75c71a",
  });
  $(".card_vra").css({
    "border-left": "3px solid  #75c71a",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid  #75c71a");
  });
  $(".min_curs").css({
    "border": "1px solid  #75c71a",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": " #75c71a",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #75c71a",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #75c71a",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #75c71a",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #75c71a",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " #75c71a",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #75c71a");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #75c71a");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " #75c71a");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#75c71a");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "#75c71a");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$("#img_ut").click(function(){
  $(".orange, .btn_mek div, .btn_erku div, .underline, .min_curs, .home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .all, .card_vra .icon, .gic_guyn, .gic_guyn2, .gic_guyn3, .gic_guyn4, .gic_guyn5, .gic_guyn6, .gic_guyn7, .gic_guyn8, .gic_guyn9, .gic_guyn10, .btn_pro, .for_erku, .back").css({
    "background": "aqua",
  });
  $(".btn_mek div, .btn_erku div, .all, .card_erku, .card_ereq, .for_mek, .for_erku, #guyn_mek").css({
    "border": "2px solid  aqua",
  });
  $(".card_vra").css({
    "border-left": "3px solid  aqua",
  });
  $(document).on("mousemove", e => {
    $(".cursor").attr("style","top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px; border: 2px solid  aqua");
  });
  $(".min_curs").css({
    "border": "1px solid  aqua",
  });
  $(".slide_mec h2, .home, span, .card-title, .fa-quote-left, .fa-star").css({
    "color": " aqua",
  });
  $(".kn_mek").click(function(){
    $(".for_erku").css({
      "transform": "rotateZ(0)",
      "background": " aqua",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".erk").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " aqua",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".ere").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " aqua",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".chor").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " aqua",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".kn_hing").click(function(){
    $(".kn_mek, .for_erku").css({
      "transform": "rotateZ(0)",
      "background": " aqua",
      "box-shadow": "none",
    });
    $(this).css({
      "transform": "rotateZ(10deg)",
      "background": "none",
      "box-shadow": "0 0 25px rgb(0 0 0 / 85%)",
    });
  });
  $(".home").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " aqua");
  
    $(".mec_mek").css("display", "block");
    $("#cont_erku").css("display", "none");
  });
  $(".user").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " aqua");
  
    $(".mec_mek").css("display", "none");
    $("#cont_erku").css("display", "block");
  });
  $(".portfolio").click(function(){
    $(this).css("background", "linear-gradient(#232323,#141516d1)");
    $(this).css("border", "6px solid #111");
    $(this).css("margin-left", "-40px");
    $(this).css("width", "fit-content");
    $(this).css("color", " aqua");
  
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "block");
  $(".myImg").css("animation","poqr1 1.5s forwards");
  $(".kn_mek").click(function(){
    $(".myImg").css("animation","poqr2 1.5s forwards");
  });
});
$(".blog").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "aqua");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "block");
  $("#cont_hing").css("display", "none");
});
$(".phone").click(function(){
  $(this).css("background", "linear-gradient(#232323,#141516d1)");
  $(this).css("border", "6px solid #111");
  $(this).css("margin-left", "-40px");
  $(this).css("width", "fit-content");
  $(this).css("color", "aqua");

  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "none");
  $("#cont_ereq").css("display", "none");
  $("#cont_chors").css("display", "none");
  $("#cont_hing").css("display", "block");
});
});
$(".light").click(function(){
  $(".goog-te-combo").css({
    "background": "#fff",
    "color": "#111",
  });
  function myFunction(poqr_bg) {
    if (poqr_bg.matches) {
      $(".settings").css("background", "#111");
      $(".settings i").css("color", "#fff");
    } else {
      console.log("Error_min_bg");
    };
  };
  var poqr_bg = window.matchMedia("(max-width: 767px)");
  myFunction(poqr_bg);
  $(".light span").css("display", "none");
  $(".dark span").css("display", "flex");
  $(".dark span").css("margin-top", "-10px");
  $(".pat_mek, .pat_erku, .pat_ereq, .pat_chors, .pat_hing, .koxi_mec, .card, .mec, .card_ereq").css({
    "background": "#fff",
  });
  $("body").attr("style", "background: #eee !important");
  $("div, h1, .down_btn_text a, .card-text, .for_mek h6, .for_erku h6, .anun h1, .back, .fa-heart").css({
    "color": "#111",
  });
  $(".het span, .chakert i, .card_ereq .card-title, .btn_poxel_mek span, .btn_poxel_erku span, .btn_poxel_ereq span").css({
    "color": "#fa5b0f",
  });
  $(".koxi_mec div").attr("style", "color: gray !important");
  $(".koxi_mec .home").attr("style", "color: #fa5b0f !important");
  $(".soc_media div").css({
    "text-shadow": "none",
  });
  $(".home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div").attr("style", "color: #fff !important");
  $(".btn_mec div").css({
    "color": "#fff",
  });
});
$(".dark").click(function(){
  $(".goog-te-combo").css({
    "background": "#111",
    "color": "#fff",
  });
  function myFunction(poqr_bg2) {
    if (poqr_bg2.matches) {
      $(".settings").css("background", "#fff");
      $(".settings i").css("color", "#111");
    } else {
      console.log("Error_min_bg2");
    };
  };
  var poqr_bg2 = window.matchMedia("(max-width: 767px)");
  myFunction(poqr_bg2);
  $(".dark span").css("display", "none");
  $(".light span").css("display", "flex");
  $(".pat_mek, .pat_erku, .pat_ereq, .pat_chors, .pat_hing, .koxi_mec, .card, .mec, .card_ereq").css({
    "background": "#212121",
  });
  $("body").attr("style", "background: #111 !important");
  $("div, .down_btn_text a, .for_mek h6, .for_erku h6, h3, .fox i,.text_name h2, .text_name h4, .fa-heart").css({
    "color": "#fff",
  });
  $("div, .card-text, .soc_media i").css({
    "color": "gray",
  });
  $(".het span, h1, #mek, #erku, #ereq").css({
    "color": "#fa5b0f",
  });
  $(".slide_text div").attr({
    "style": "color: #fa5b0f",
  });
  $(".koxi_mec div").attr("style", "color: gray !important");
  $(".koxi_mec .home").attr("style", "color: #fa5b0f !important");
  $(".soc_media div").css({
    "text-shadow": "0 0 25px rgb(0 0 0 / 85%)",
  });
  $(".underline h1").attr("style", "color: #111 !important");
  $(".home_text div, .about_text div, .portfolio_text div, .blog_text div, .contact_text div, .name h1, .about h1, .my_portfolio, .res, .name_my, .test_name h1, .fan_name h1").attr("style", "color: #fff !important");
  $(".btn_mec div").css({
    "color": "#fff",
  });
});
$(".btn_mek").click(function(){
  $(".mec_mek").css("display", "none");
  $("#cont_hing").css("display", "block");
  $(".home").css("background", "none");
  $(".home").css("border", "none");
  $(".home").css("margin-left", "0");
  $(".home").css("width", "auto");
  $(".home").css("color", "gray");
  $(".phone").css("background", "linear-gradient(#232323,#141516d1)");
  $(".phone").css("border", "6px solid #111");
  $(".phone").css("margin-left", "-40px");
  $(".phone").css("width", "fit-content");
  $(".phone").css("color", "#fa5b0f");
});
$(".btn_erku").click(function(){
  $(".mec_mek").css("display", "none");
  $("#cont_erku").css("display", "block");
  $(".home").css("background", "none");
  $(".home").css("border", "none");
  $(".home").css("margin-left", "0");
  $(".home").css("width", "auto");
  $(".home").css("color", "gray");
  $(".user").css("background", "linear-gradient(#232323,#141516d1)");
  $(".user").css("border", "6px solid #111");
  $(".user").css("margin-left", "-40px");
  $(".user").css("width", "fit-content");
  $(".user").css("color", "#fa5b0f");
});

// $("#btn").click(function (e) {
//   e.preventDefault();
//   const form = $(".contact_form");
//   const name = $("#name");
//   const email = $("#email").val();
//   const theme = $("#theme");
//   const message = $("#message").val();

// Email.send({
//   Host : "smtp.elasticemail.com",
//   SecureToken : "78ae6da1-5dba-410b-b35b-bbf19ad0a33c",
//   Username : "my.resume.final@gmail.com",
//   Password : "F0DF6CFA1691C1DE86975FC1907590FF8463",
//   To : 'my.resume.final@gmail.com',
//   From : email,
//   Subject : "Contact Form",
//   Body : message
// }).then(
// message => alert(message)
// );
// });