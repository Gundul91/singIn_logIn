$(".logIn").click(function (){
  $("h4").text("Welcome Back!");
  $(".logInTexts").css("display","initial");
  $(".singUpTexts").css("display","none");
  $(".submit").val("LOG IN");
  $(".logIn").css("background-color","#449991");
  $(".singUp").css("background-color","#F2EBBF");
  $(".singUp").css("color","black");
  $(".logIn").css("color","white");
});

$(".singUp").click(function (){
  $("h4").text("Sing Up for Free");
  $(".singUpTexts").css("display","initial");
  $(".logInTexts").css("display","none");
  $(".submit").val("GET STARTED");
  $(".logIn").css("background-color","#F2EBBF");
  $(".singUp").css("background-color","#449991");
  $(".logIn").css("color","black");
  $(".singUp").css("color","white");
});

$('document').ready(function(){
  var container=$("div");
  $(".x").click(function (){
    if(container.css("right")!="0px"){
      container.css("right",0);
      container.css("bottom",0);
    }else{
      container.css("right",300);
      container.css("bottom",300);
    }
  });
});
