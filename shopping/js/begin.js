$(document).ready(function(){
	if(localStorage.getItem('userID')!=null)
	{
		window.location.href="index.html";
	}
	else if(localStorage.getItem('animation')=='looked'){
		window.location.href="open.html";
	}
})
window.onload=function(){
	var mySwiper = new Swiper('.swiper-container', {
	//autoplay: true,//可选选项，自动滑动
	pagination: {
    	el: '.swiper-pagination',
  	},
  	on:{
	touchEnd: function(event){
		TR=this.translate
		if(TR<-800){
		this.setTranslate(TR);
		localStorage.setItem('animation','looked');
		location.href ="open.html";
		};
	},
	}
})
}
	