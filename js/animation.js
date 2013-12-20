// JavaScript Document

var mainImage = document.getElementById('myImage');

var imgArray = ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/10.png","images/11.png"];
				 
var imageIndex = 0;

function changeImage(){
		mainImage.setAttribute("src",imgArray[imageIndex]);
		imageIndex++;
		if(imageIndex >= imgArray.length){
			imageIndex = 0;
		}
}

var intervalHandler = setInterval(changeImage,500);

mainImage.onclick = function(){
	clearInterval(intervalHandler);	
}
