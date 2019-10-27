var images = ['priroda1.jpg', 'priroda2.jpg','priroda3.jpg'];
var num = 0;
//var t1 = setInterval(next,100);
var t1;

function next(){
	var slider = document.getElementById("slider");
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src = images[num];
}

function prev(){
	var slider = document.getElementById("slider");
	num--;
	if(num < 0){
		num = images.length - 1;
	}
	slider.src = images[num];
}

var t = setInterval(next,100);

function stop(){
	clearInterval(t);
}

function run(){
	t1 = setInterval(next,100);
}

function stop_button(){
	clearInterval(t1);
}


function size_on(){
	var image = document.getElementById("slider");
	image.style.height = "550px";
}

/*function large_on(){
	diam = image.height ;
	image.style.height = diam +100 ;
	image.style.width= diam +100 ;
}*/


/*
function sizeOn(){
	var image = document.getElementById("slider");
	diam = 150;
	//if (image.style.height<500 & image.style.width<500){
	while(image.style.height<1000){	
		image.style.height+=diam;
		image.style.width+=diam;
		//diam+=10;
	}

}

// t1 = setInterval(sizeOn,100); 


//var listener_stop = document.getElementById("run");
//listener_stop.addEventListener("click",run);

*/