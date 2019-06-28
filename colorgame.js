var colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 150, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 0, 0)",
		"rgb(255, 0, 255)",
		"rgb(0, 0, 255)"
	]

var squares=document.querySelectorAll(".square");
var pickedcolor= colors[3];
var colordisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
			{
				message.textContent="correct"
				changecolors(pickedcolor);
			}
		else
			{
				this.style.backgroundColor="#232323"
				message.textContent="try again"
			}
	});
}

function changecolors(color){
	//loop througn all colors
	//change each color to match the given color
	for(var i=0; i<colors.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}