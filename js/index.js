var width = window.innerWidth; 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#000");
        $("#header").css("color","#1aa493");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","2vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #313131");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#1aa493");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #1aa493");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_preview").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animate__animated animate__fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animate__animated animate__fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animate__animated animate__fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animate__animated animate__fadeOut");
        $("#img_preview").css("background",`url('') center center`);
    },800);
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });

    date = new Date();
    document.getElementById("year_date").innerHTML = "2020-"+date.getFullYear();
  });