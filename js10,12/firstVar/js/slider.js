let prev=document.getElementById('prev'),
    next=document.getElementById('next'),
    slides=document.getElementsByClassName('slides-item'),
    slideIndex=1;

function showSlides(n){
    if(n<1){
        slideIndex=slides.length;
    }
    else if(n>slides.length){
        slideIndex=1;
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
slides[slideIndex-1].style.display='block';
slides[slideIndex-1].style.opacity = '1';

}
showSlides(slideIndex);

function prevSlide(n){
    showSlides(slideIndex+=n);
}
function currentSlide(n){
    showSlides(slideIndex=n);
}
prev.onclick=function(){
    prevSlide(-1);
}
next.onclick=function(){
    prevSlide(1);
}
