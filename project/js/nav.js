$(function(){
  $.ajax({
    url:"../nav.html",
    type:"get",
    success:function(html){
      $(html).replaceAll(".nav");
      $(`<link rel="stylesheet" href="./CSS/nav.css">`).appendTo("head");
    }
  })
})