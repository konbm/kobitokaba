'use strict';
window.onload=function(){
	var images=document.getElementsByClassName("heaerImage");
	var zIndexMax=0;
	for(var i=0;i<images.length;i++){
		images[i].addEventListener("Click",function(){
			this.style.zIndex=++zIndexMax;
		}
	}
}
