$(function(){
  $.ajax({
    url:"../footer.html",
    type:"get",
    success:function(html){
      $(html).replaceAll("#footer");
      $(`<link rel="stylesheet" href="./CSS/fgo_footer.css">`).appendTo("head");
      $(`<script src="./js/back-top.js"></script>`).appendTo("body");
    }
  })
})