$(function(){
  window.onscroll=function(){
    var top=$(document).scrollTop()+210;
    // if(top<0.1182){top=0.1182}
    // else if(top>1.6718){top=1.6718}
    $(".main-container .flower").css("margin-top",`${top}px`);
    //$(".main-container .flower").css("margin-top",`${top*100}%`);
  }
})

