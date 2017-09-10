$(function(){
	init_barrage();
	$('#BarrageButton').on('click',function(){
		if(this.value=="0")
		{
			$('#BarrageButton').attr('value','1');
			$('#BarrageButton').html("关闭弹幕");
			$(".barrage,.s_close").toggle("slow");
			
		}
		else if(this.value=="1")
		{
			$('#BarrageButton').attr('value','0');
			$('#BarrageButton').html("打开弹幕");
			$(".barrage,.s_close").toggle("slow");
		}
	})
	init_barrage();
})





$(".send .s_btn").click(function() {
	var text = $(".s_text").val();
	if(text == "") {
		return;
	};
	var _lable = $("<div style='right:20px;top:0px;opacity:1;color:white;'>" + text + "</div>");
	$(".mask").append(_lable.show());
	$(".recivetext").append("<font size='3' face='微软雅黑' color='#FF8C00'>"+ "张三：" + text + "</font>" + "</br>");
	init_barrage();
})
//初始化弹幕技术
function init_barrage() {
	var _top = 0;
	$(".mask div").show().each(function() {
		var _left = 670; //浏览器最大宽度，作为定位left的值
		var _height = 500; //浏览器最大高度
		var _color = 'white';
		_top += 75;
		if(_top >= (_height - 130)) {
			_top = 0;
		}
		$(this).css({
			left: _left,
			top: _top,
			color: _color
		});
		//定时弹出文字
		var time = 5000;
		if($(this).index() % 2 == 0) {
			time = 10000;
		}
		$(this).animate({
			left:  0 + "px"
		}, time, function() {
			$(this).remove();
		});
	});
}
//获取随机颜色
//function getRandomColor() {
//	return '#' + (function(h) {
//			return new Array(7 - h.length).join("0") + h
//		})
//		((Math.random() * 0x1000000 << 0).toString(16))
//}