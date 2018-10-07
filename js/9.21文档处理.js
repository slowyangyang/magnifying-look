$(function(){
//1.内部插入
	//appednd---向元素内添加内容
//	$("p").append("babababababa")
	//appendTo------
//	$("p").appendTo("div");
	//新建一个段落添加到div中并追添一个class
//	$("<p/>")
// .appendTo("div")
// .addClass("test")
// .end()
// .addClass("test2");
	//prepend==:before
//	$("div").prepend("<span>jhjwhj</span>");
	
//2.外部插入-------兄弟关系
	//afer----在div后面插入一个span标签
//	$("div").after("<span>iiiiiiii</span>");
//	$("div").after($('p'));
//	$("div").before($('p'));
	//innserAfter----放元素到指定位置
	//
	
//3.包裹
	//wrap*
//	$(".box").wrap("<div class='wrap'></div>");
//	$(".box").wrap(function(){
//		return '<div class="'+$(this).text()+'"/>'
//	});
	//unwarp
	
//4.替换
//	$('<b>jiacu</b>').replaceAll("p")

//5.删除
	//empty();-----删除标签内的内容
//	$("p").empty();
//	$("p").remove();
	//remove（）;-----删除整个标签

//6.克隆
//	$("button").click(function(){
//		$(this).clone(true).insertAfter(this);
//	})
	
})