$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});
//without using .completed class in css file
/*
$("li").click(function(){
	console.log($(this).css("color"));
	if($(this).css("color")==="rgb(255, 0, 0)"){
		$(this).css("color","black");
		$(this).css("textDecoration","none");
	}
	else{
		$(this).css({
		color:"red",
		textDecoration:"line-through"
		});
})
	*/	

$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event)
{
	if(event.which===13)
	{
		var k=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+k+"</li>");
	}

})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
