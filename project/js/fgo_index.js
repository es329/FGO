//左侧边栏的显示隐藏
(function(){
  $("#page .closed").click(function(){
    $(this).toggleClass("active");
    $("#page .header-left").toggleClass("collapse");
  })
})();
//处理roles-row 部分的动画
//当鼠标移入 div.roles 时，在div.roles增加.active。在当前鼠标停留的div.role-item增加.current
(function(){
  //找到事件触发元素
  let $rol=$("#mainly .content .roles");
  //console.log($rol);
  //绑定时间触发函数
    //给div.roles加减.active，触发元素加减.current，以改变元素选择器
  $rol.on("mouseenter","div.role-item",function(){
    let $tar=$(this);
    $tar.parent().addClass("active");
    $tar.addClass("current");
  })
  $rol.on("mouseleave","div.role-item",function(){
    let $tar=$(this);
    $tar.parent().removeClass("active");
    $tar.removeClass("current");
  })
})();
//主轮播和侧边轮播
(function(){
  //找到轮播div
  let $main_ban=$("#page .swiper-header");
  let $left_ban=$("#page .left-banner>div[id]")
  //console.log($left_ban);
  //数组保存左侧边需要轮播的标题和class名
  let class_arr=["story-line","branch-eor","branch-cos"];
  let p_arr=["「Fate/Grand Order」PV","「断章：残存诗篇」PV","「异闻带宇宙」PV"];
  let i=0,j=1;
  setInterval(()=>{
    i++,j++;
    if(i>3) i=1;
    if(j>3) j=1;
    //console.log(i,j);
    //主轮播功能
    //new保存现在显示的对象，next保存下一个要显示的对象
    let $new=$main_ban.children(`.header-${i}`);
    let $next=$main_ban.children(`.header-${j}`);
    //添加类名来启动透明度动画
    $new.addClass("banner-leave-active");
    $next.addClass("banner-enter-active");
    //一段时间之后改变display，以达到切换的效果
    setTimeout(()=>{
      $next.attr("style","display:block");
      $new.attr("style","display:none");
    }, 250);
    //去掉透明度动画类名
    setTimeout(()=>{
      $new.removeClass("banner-leave-active");
      $next.removeClass("banner-enter-active")
    }, 500);

    //左侧边栏轮播功能
    let $p=$left_ban.children(".swflv-p");
    $left_ban.addClass("banner-leave-active");
    setTimeout(() => {
      $left_ban.removeClass("banner-leave-active");
      $left_ban.addClass("banner-enter-active");
      $left_ban.attr("id",`banner${j}`).removeClass(class_arr[i]).addClass(class_arr[j]);
      $p.html(p_arr[j]);
    }, 100);
    setTimeout(() => {
      $left_ban.removeClass("banner-enter-active");
    }, 200);
  },5000);
})();
//活动轮播
(function(){
  let $sdshow_ca=$("#mainly .slideshow .slideshow-carousel");
  let $pagina=$('.slideshow .slides-pagination');
  let $a1=$('.slideshow .slides-pagination a[data-slides="0"]');
  let $a2=$('.slideshow .slides-pagination a[data-slides="1"]');
  var i=1;
  let timer=5000;
  //轮播图切换函数
  //通过i来识别现在是哪张图，然后通过位移切换到下一张图，同时改变小圆的class
  function imgChange(){
    if (i==1) {
      //console.log(i);
      $sdshow_ca.attr("style","transform:translateX(-455px)");
      setTimeout(() => {
        $a1.parent().removeClass("selected");
        $a2.parent().addClass("selected");
      }, 200);
      i=2;
    } else {
      //console.log(i);
      $sdshow_ca.attr("style","transform:translateX(0px)");
      setTimeout(() => {
        $a2.parent().removeClass("selected");
        $a1.parent().addClass("selected");
      }, 200);
      i=1;
    }
    //console.log("change");
  }
  //设置循环定时器，实现自动轮播功能
  let t=setInterval(() => {
    imgChange();
  }, timer);
  //点击小圆切换
  $pagina.on("click","a",function(e){
    $tar=$(e.target);
    i=parseInt($tar.html());
    i==1?i=2:i=1;
    //console.log(i);
    //调用轮播函数
    imgChange();
    //为了点击后，轮播图能在点击后5s再切换，而不是在原来设定的时间切换
    //需要清空原来的定时器
    clearInterval(t);
    //设置一个新的定时器
    setInterval(() => {
      imgChange();
    }, timer);
  })
})();