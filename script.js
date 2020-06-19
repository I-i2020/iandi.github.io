var aboutLogo = document.getElementById('change-img');


var counter=1;
var extension='.jpg';
var pic_src = setInterval(()=>{
	if(counter===2){
		extension='.png';
	}
	if(counter===3){
		extension='.gif';
	}
	if(counter<=3){
		var source=`engineer${counter}${extension}`;
	}else{
		var source='LOGO.jpg';
	}
	aboutLogo.setAttribute('src',source);
	counter++;
}, 2000);                  

ScrollReveal().reveal('.about-content',{delay: 175,duration: 1000,reset: true ,opacity:0});
ScrollReveal().reveal('.total-project-des',{delay: 175,duration: 1000,reset: true ,opacity:0});
ScrollReveal().reveal('.about-section h1',{delay: 100,duration: 700,reset: true ,opacity:0});
ScrollReveal().reveal('#our-work-heading',{delay: 100,duration: 700,reset: true ,opacity:0});
