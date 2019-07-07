$(document).ready(function(){
  let docWidth=null;   //浏览器时下窗口文档的高度
  let $box=$('.roles-container');   //整个轮播图div
  let $imgBox=$(".swiper-common-wrap .swiper-wrapper");  //轮播图图片盒子
  let n=-1;  //控制轮播图偏移量

  //根据浏览器时下窗口宽度改变servant图片宽度
  function imgWidth(){
    //console.log($imgBox);
    //console.log(docWidth);
    docWidth=$(document).width();//窗口宽度变化时，都获得最新的窗口宽度
    $imgBox.css({"width":`${docWidth*5}px`,"height":`${737.328*docWidth/1280}px`,"transform":`translate3d(${docWidth*n}px, 0px, 0px)`,"transition-duration":"0s"});
    $imgBox.children().css({"width":`${docWidth}px`,"height":`${737.328*docWidth/1280}px`});
  }
  //开始时触发一次
  imgWidth();
  //Windows的resize函数，窗口发生变化时触发
  $(window).resize(function(){ imgWidth();/*console.log(1)*/ })


  //使人物图像移动
  function transformChange(time){
    $imgBox.css({"transform":`translate3d(${docWidth*n}px, 0px, 0px)`,"transition-duration":`${time}s`})
  }

  //当时extra职介选中时时需要同时改变job-tit的图片
  function extraTitChange(){
    if($(".extra-swiper").attr("class")=="swiper-container swiper-common extra-swiper  on current"){
      //console.log(1);
      if(n==0 || n==-3){
        $box.children(".job-tit").removeClass().addClass('job-tit avenger')
      }else if(n==-1 || n==-4){
        $box.children(".job-tit").removeClass().addClass('job-tit extra')
      }else{
        $box.children(".job-tit").removeClass().addClass('job-tit ruler')
      }
    }
  }
  
  //点击头像移动到相应的图片
  let $headImgs=$box.children(".roles-s-tags").children();
  $box.children(".roles-s-tags").on("click",".roles-s-box",function(e){
    //使当前点击的头像成为选中状态
    //当前点击的元素添加class.on  其他的元素去掉class.on
    let $tar=$(e.target).parent();
    $tar.addClass("on").siblings().removeClass("on");
    //获得当前是点击的第几个头像，并使人物图像移动到相应的位置
    let j=0;
    for (let i=0; i<$headImgs.length; i++){
      j--;
      if($headImgs[i].className=="roles-s-box on"){
        break;
      }
    }
    n=j;
    transformChange(0.3);
    //当时extra职介选中时时需要同时改变job-tit的图片
    extraTitChange()
  });

  //左右箭头滑动
  //改变头像选中状态的函数
  function changHeadImg(){
    let changHead=function(num){
      let $tag=$($headImgs[num])
      $tag.addClass("on").siblings().removeClass("on");
    }
    if(n==0 || n==-3){
      changHead(2);
    }else if(n==-1 || n==-4){
      changHead(0);
    }else{
      changHead(1);
    }
  }
  //箭头所绑定的点击函数
  function imgArr(e){
    //获取当前点击按钮的id
    let $id=$(e.target).attr("id");
    if($id=="left-arr"){ i=1 }else{ i=-1 };//左滑n+1  右滑n-1
    //人物图像滑动部分
    if(n==-4&&i==-1){ //当点击右滑且当前是第5张图片时
      //先使图片0s回到第2张
      n=-1;
      transformChange(0)
      //再在10ms的延迟后，用0.3s的时间向右滑
      n+=i;
      setTimeout(()=>{ transformChange(0.3) }, 10);
    }else if(n==0&&i==1){//当点击左滑且当前是第1张图片时
       //先使图片0s回到第4张
      n=-3;
      transformChange(0)
      //再在10ms的延迟后，用0.3s的时间向左滑
      n+=i;
      setTimeout(()=>{ transformChange(0.3) }, 10);
    }else{
      n+=i;
      transformChange(0.3)
    }

    //人物头像随着点击改变选中状态
    changHeadImg()

    //当时extra职介选中时时需要同时改变job-tit的图片
    extraTitChange();

  }
  //左右箭头绑定点击事件
  $box.on("click",".arr",imgArr);
  
  //职介导航tabbar
  //获得导航条
  let $serTabbar=$(".roles-tags");
  //为导航条绑定点击函数
  $serTabbar.on("click",".role-tag",function(e){
    //切换时，重置图像至n=-1
    n=-1;
    transformChange(0);
    changHeadImg();
    //获得当前点击函数servant值
    let $tar=$(e.target);
    $tar.addClass("on").siblings().removeClass("on");
    let servarnt=$tar.attr("data-job");
    let serId=`${servarnt}-swiper`;
    let $swiperContainer=$(`.swiper-common-wrap .${serId}`);
    //console.log($swiperContainer);
    $swiperContainer.addClass("on current").siblings().removeClass("on current");
    $box.children(".roles-s-tags").removeClass().addClass(`roles-s-tags ${servarnt}`)
    $box.children(".job-tit").removeClass().addClass(`job-tit ${servarnt}`)
  })
  //console.log($serTabbar)
}) 