$(function(){
    $(".layout-left>ul").on("click","li",function(){
		$this=$(this);
		//console.log($this.children().attr("src").split(".")[1].slice(-1));
		//当前点击的li增加class.cur，其他的li去掉class.cur
		$this.addClass("cur").siblings("li").removeClass("cur");
		//通过图片的src，得到点击是第几个li
		let n=$this.children().attr("src").split(".")[1].slice(-1);
		//同时找到.layout-right对应的li
		let $tar=$(`.layout-right>ul>li:nth-child(${n})`);
		//console.log($tar);
		//.layout-right中对应的li增加class.cur，其他的li去掉class.cur
		$tar.addClass("cur").siblings("li").removeClass("cur");
    })
})