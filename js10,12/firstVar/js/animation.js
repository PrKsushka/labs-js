let my=document.getElementsByClassName('my'),
	menu=document.getElementById('menu'),
	slide=document.getElementById('slide');

let transit=(e)=>{
for(let i=0; i<my.length; i++){
	my[i].style.transform = 'rotate(' + -27 + 'deg)';
	my[i].style.transition = '1s';
}
menu.style.marginTop='40px';
}

menu.addEventListener('mouseover',transit);	

let square=(e)=>{
for(let i=0; i<my.length; i++){
	my[i].style.width='100px';
	my[i].style.fontSize='17px';

	}
}
menu.addEventListener('click',square);	


let situated=(e)=>{
for(let i=0; i<my.length; i++){
	my[i].style.transform = 'none';
	my[i].style.boxSizing='border-box';
	my[i].style.paddingTop='30px';
	my[i].style.textTransform='uppercase';
	}
}
menu.addEventListener('dblclick',situated);	
document.onkeydown=function(event){
                 if (event.ctrlKey) {
                 	slide.style.left='0';
                 	}
                 	 else if(event.shiftKey){
                 	 	slide.style.left='auto';
                 	 	slide.style.right='0';
                }
            }


