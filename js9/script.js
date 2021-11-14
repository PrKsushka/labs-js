let header=document.getElementById('header'),
	pr=header.textContent,
	content;
header.addEventListener('mouseover', h=()=>{
content=header.textContent.split('');
	let si,last;
	for(let i=0; i<content.length;i++){
		if(i%2==0){
			si=content[i].toUpperCase();
			content.splice(i,1,si);
		}
		last=content.join('');
	}
	header.textContent=last;
})
	


let firstPart=document.getElementById('firstPart'),
	blocks=document.querySelectorAll('.block');
let fP=(e)=>{
firstPart.style.flexDirection='column';
	firstPart.style.alignItems='center';
	for(let i=0;i<blocks.length;i++){
		blocks[i].style.marginBottom='25px';
		blocks[i].style.marginRight='0px';
		blocks[i].style.paddingBottom='40px';
	}
}
firstPart.addEventListener('mousemove', fP);



	let tr=document.getElementsByTagName('tr'),
		secondPart=document.getElementById('secondPart');
	secondPart.onclick=function(){
		for(let i=0;i<tr.length;i++){
			if(i%2==0){
				tr[i].style.background='black';
			}
		}
	}



 let thirdPart=document.getElementById('thirdPart'),isUpperCase,lt,latest;
 thirdPart.onclick=function(){
 		let text=thirdPart.textContent.split('');
 		for(let i=0; i<text.length;i++){
		 		isUpperCase = text[i].toUpperCase()==text[i];
		 		if(isUpperCase){
		 			lt=text[i].toLowerCase();
		 			text.splice(i,1,lt);
		 			
		 		}
		 		latest=text.join('');
		 	}
		 	thirdPart.textContent=latest;
 }

 let pictures=document.getElementsByName('pict');
 let fourthPart=document.getElementById('fourthPart');
 	fourthPart.addEventListener('click', ()=>{
 	for(let i=0;i<pict.length;i++){
 		pict[i].style.transform = 'rotate(' + 20 + 'deg)';
 	}
 	fourthPart.style.marginTop='20px';
 	})

 





let reg=/a/g;
let font;
let p2=document.getElementById('p2');
p2.addEventListener('click',()=>{
	p2.innerHTML=p2.innerHTML.replace(reg,'<span style="color:red;">A</span>')

})

let first,second,third,imp, imp1, imp2;


header.addEventListener('click',r=()=>{
		if (event.shiftKey) {
			header.removeEventListener('mouseover',h);
			imp=`<span style="background:linear-gradient(to right, #878ce2, #fffa5c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${pr}</span>`;
			imp1=`<span style="background:linear-gradient(to right, #8c8cff, #ff8fa2, yellow); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${pr}</span>`;
			imp2=`<span style="background:linear-gradient(to right, red,orange,green); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${pr}</span>`;
		header.innerHTML=`${imp}  ${imp1}  ${imp2}`;
	}
});		




let but=document.getElementById('button');
but.addEventListener('click', ()=>{
	firstPart.removeEventListener('mousemove', fP);
	firstPart.style.flexDirection='row';
	firstPart.style.alignItems='normal';
	for(let i=0;i<blocks.length;i++){
		blocks[i].style.marginRight='20px';

	}
	})
