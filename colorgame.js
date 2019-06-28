var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);

var squares=document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colordisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbtn=document.getElementById("reset");

var easybtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	//generate all new colors
	numberOfSquares=3;
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from an array
	pickedcolor=pickcolor();
	//change color display to match picked color

	colordisplay.textContent=pickedcolor;
	
	//change colors from a square
	for(var i=0;i<squares.length;i++){
		if(i<3)	
		squares[i].style.backgroundColor=colors[i];
		else
		squares[i].style.display="none";
	}
	message.textContent=""
	h1.style.backgroundColor="steelblue";

});

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	//generate all new colors
	numberOfSquares=6;
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from an array
	pickedcolor=pickcolor();
	//change color display to match picked color

	colordisplay.textContent=pickedcolor;
	
	//change colors from a square
	for(var i=0;i<squares.length;i++){
		
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	message.textContent=""
	h1.style.backgroundColor="steelblue";
});


resetbtn.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(6);
	//pick a new random color from an array
	pickedcolor=pickcolor();
	//change color display to match picked color

	colordisplay.textContent=pickedcolor;
	
	//change colors from a square
	for(var i=0;i<squares.length;i++){
		
		squares[i].style.backgroundColor=colors[i];
	}
	message.textContent=""
	h1.style.backgroundColor="steelblue";
});
colordisplay.textContent=pickedcolor;


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		console.log(clickedcolor, pickedcolor);
		if(clickedcolor===pickedcolor)
			{
				message.textContent="correct";
				changecolors(pickedcolor);
				h1.style.backgroundColor=clickedcolor;
			}
		else
			{
				this.style.backgroundColor="#ecede6"
				message.textContent="try again"
			}
	});
}




 
function changecolors(color){
	//loop througn all colors
	//change each color to match the given color
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}	
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
