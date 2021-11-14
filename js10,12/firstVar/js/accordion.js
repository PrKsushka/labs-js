var acc = document.querySelectorAll("#accord")[0];
acc.sl = null; // ссылка на открытый слайд
acc.addEventListener("click", funAccV, false);
let classFor16=document.getElementsByClassName('class-for-16px');
function funAccV(e) {
	var parentSl = e.currentTarget;
	if (parentSl.sl && 
		e.target !== parentSl) 
		TweenLite.to(parentSl.sl, 0.3, {
			css : {
				width : "70px"
			}
		});
	else if (e.target === parentSl) return;
	if (parentSl === e.target.parentNode) 
		parentSl.sl = e.target;
	else if (parentSl === e.target.parentNode.parentNode) 
		parentSl.sl = e.target.parentNode;
	else
		return; 

	var toSlide = parentSl.sl.style.width !== "400px" ? 400 : 70;
	for(let i=0; i<classFor16.length; i++){
		console.log(classFor16[i]);
		classFor16[i].style.transform = 'rotate(' + -90 + 'deg)';
		classFor16[i].style.marginTop='130px';
	}
	console.log(classFor16);
	TweenLite.to(parentSl.sl, 0.3, { 
		css : {
			width : toSlide + "px"
		}
	});
	TweenLite.to(parentSl, 0.3, { 
		css : {
			width : (toSlide + 350) + "px"
		}
	});

}
