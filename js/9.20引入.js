//$(callback)==>当页面加载完成的时候要进行的操作
//$===jQuery;
//$(选择器)-----获取页面中的元素
$(function(){  //==window.onload
//	let box = $(".box");
//	console.log(box)
//	box.css({"background":"pink"});
//基本选择器
	//标签选择器
//	let p = $("p");
//	p.css({"color":"red"});
//	//类名选择器
//	let test = $(".text");
//	test.css({"color":"blue"})
//	//通用选择器
//	let all = $('*');
//	all.css({"padding":0,"margin":0});
//	//群组选择器
//	let group = $("div,p,span");
//	group.css({"color":"pink"});
	
//层级选择器
//	匹配prev元素之后的所有sbling元素
//	let ele = $("form ~ input");
//	ele.css({"border":"1px solid red"});
//	console.log(ele)
	
//基本筛选器
//	let li = $('li:first');
	//取反选择器
//		let checked = $("input:not(:checked)"
	//even偶数选择器   从0开始
//		$("tr:even")
	//odd奇数选择器
//		$("tr:odd")
	//eq查找选择器----想找哪个找哪个
//		$("tr:eq(n)")
	//header标题选择器-----只匹配标题
	
	
//4.内容选择器
//	let jhon = $("div:contains('John')");
//	jhon.css({"color":"reds"})
//	checked.css({"color":"red"});
//5.可见性选择器
//	$("tr:hidden")-----匹配隐藏的元素
//	$("tr:visible")----匹配可见的元素
//6.属性选择器---同css
//7.子元素---同css
//8.表单、表单对象

//let res = $("ul>li").html();
//对元素进行点击自增width或者height
 $("p").css({"background":"red"}).click(function(){
 	$("p").css({"background":"pink"}).height(
 		function(n,c)
 		{
 			return c+10;
 		});
 });
 
 
})