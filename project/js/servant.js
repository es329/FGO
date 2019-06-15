$(document).ready(function(){
  let docWidth=$(document).width();   //浏览器时下窗口文档的高度
  let $box=$('.roles-container');   //整个轮播图div
  let $imgBox=$(".swiper-common-wrap .swiper-wrapper");  //轮播图图片盒子
  let n=-1;  //控制轮播图偏移量

  //根据浏览器时下窗口高度改变servant图片宽度
  function imgWidth(){
    // console.log($imgBox);
    $imgBox.css({"width":`${docWidth*5}px`,"height":`${737.328*docWidth/1280}px`,"transform":`translate3d(${docWidth*n}px, 0px, 0px)`,"transition-duration":"0s"});
    $imgBox.children().css({"width":`${docWidth}px`,"height":`${737.328*docWidth/1280}px`});
  }

  //左右箭头滑动
  function transformChange(time){
    $imgBox.css({"transform":`translate3d(${docWidth*n}px, 0px, 0px)`,"transition-duration":`${time}s`})
  }
  function imgArr(e){
    let time=0.3;
    //获取当前点击按钮的id
    let $id=$(e.target).attr("id");
    if($id=="left-arr"){ i=1 }else{ i=-1 };//左滑n+1  右滑n-1
    if(n==-4&&i==-1){ //当点击右滑且当前是第5张图片时
      //先使图片0s回到第2张
      n=-1;
      time=0;
      transformChange(time)
      //再在10ms的延迟后，用0.3s的时间向右滑
      n+=i;
      time=0.3;
      setTimeout(()=>{ transformChange(time) }, 10);
    }else if(n==0&&i==1){//当点击左滑且当前是第1张图片时
       //先使图片0s回到第4张
      n=-3;
      time=0;
      transformChange(time)
      //再在10ms的延迟后，用0.3s的时间向左滑
      n+=i;
      time=0.3;
      setTimeout(()=>{ transformChange(time) }, 10);
    }else{
      n+=i;
      transformChange(time)
    }
  }
  //左右箭头绑定点击事件
  $box.on("click",".arr",imgArr);
  //点击头像移动到相应的图片
  var $tags=$box.children(".roles-s-tags").children();
  $box.children(".roles-s-tags").on("click",".roles-s-box",function(e){
    let $tar=$(e.target).parent();
    $tar.addClass("on").siblings().removeClass("on");
    let j=0;
    for (let i=0; i<$tags.length; i++){
      j--;
      if($tags[i].className=="roles-s-box on"){
        break;
      }
    }
    console.log(j);
  });
  
  //开始时触发一次
  imgWidth();
  //Windows的resize函数，窗口发生变化时触发
  $(window).resize(function(){ imgWidth(); })
})
//  