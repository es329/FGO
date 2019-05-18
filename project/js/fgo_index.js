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