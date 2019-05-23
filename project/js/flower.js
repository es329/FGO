$(function(){
  //添加一个时间函数，当窗口滚动的时候使.flower的margin-top随着改变，使.flower保持在窗口的固定位置
  window.onscroll=function(){
    var top=$(document).scrollTop()+200;
    // if(top<0.1182){top=0.1182}
    // else if(top>1.6718){top=1.6718}
    $(".main-container .flower").css("margin-top",`${top}px`);
    //$(".main-container .flower").css("margin-top",`${top*100}%`);
  }
})