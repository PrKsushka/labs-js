let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let four1=document.getElementById('four1');
//задание1

function first(n,count){
	for(let i=0; i<n.length; i++){
		if(n[i]%2===0){
			count++;
		}
	}
	//one.innerHTML=`Задание 1:  Количество элементов с чётными значениями равно: ${count}`;
	console.log(`Количество элементов с чётными значениями равно: ${count}`);
}


//задание2
function second(n,sum){
	for(let i=0; i<n.length; i++){
		if(n[i]%11===0){
			sum+=i;
		}
	}
	//two.innerHTML=`Задание 2: Сумма индексов элементов значения которых кратных 11: ${sum}`;
	console.log(`Сумма индексов элементов значения которых кратных 11: ${sum}`);
}



//задание 3
function third(n,sum1){
	for(i=0; i<n.length; i++){
		if(n[i]>=1 && n[i]<=33){
			sum1+=n[i];

		}

	}
	//three.innerHTML=`Задание 3: Сумма значений элементов в диапазоне от 1 до 33 включительно равна: ${sum1}`;
	console.log(`Сумма значений элементов в диапазоне от 1 до 33 включительно равна: ${sum1}`);
}



//задание5

function fifth(){
	Object.prototype.getKeyByValue = function( value ) {
	    for( var prop in this ) {
	        if( this.hasOwnProperty( prop ) ) {
	             if( this[ prop ] === value )
	                 return prop;
	        }
	    }
	}
	console.log('Задание 5:');
	for(let key in arrLab4asc){
		switch(arrLab4asc[key]){
			case '#00bfff': console.log(`Для #00bfff цвет: ${key}`);
			break;
			case '#00ced1': console.log(`Для #00ced1 цвет: ${key}`);
			break;
			case '#00fa9a':  console.log(`Для #00fa9a цвет: ${key}`);
			break;
			case '#f7ab57':  console.log(`Для #f7ab57 цвет: ${key}`);
			break;
			case '#f7c8fe': console.log(`Для #f7c8fe цвет: ${key}`);
			
		}
	}


	let l=arrLab4asc.getKeyByValue('#f7ab57');
	let t=arrLab4asc.getKeyByValue('#f7c8fe');
	if(l===undefined){
				console.log(`#f7ab57 нет в наборе X11`);
	}
	if(t===undefined){
		console.log(`#f7c8fe нет в наборе X11`);
	}
}




//задание4
function fourth(n,p,p1,p2){
	for(let i=0; i<n.length; i++){
		switch(n[i]){
			case 'blue': p+=i;
			case 'brown': p1+=i;
			case 'cyan': p2+=i;
		}
	}
	//four.innerHTML=`Задание 4: Общая сумма индексов элеметов, сожержащих brown, blue, cyan: ${p+p1+p2}`;
	//four1.innerHTML=`Задание 5: Сумма индексов элемента blue равна: ${p}. Сумма индексов элемента brown: ${p1}. Сумма индексов элемента cyan: ${p2}. `;
	console.log(`Сумма индексов элемента blue равна: ${p}. Сумма индексов элемента brown: ${p1}. Сумма индексов элемента cyan: ${p2}. `);
}

function myBigFuction(fun, mas,x,y,z){
	fun(mas,x,y,z);
}

myBigFuction(fourth, arrLab4str,0,0,0);
myBigFuction(first, arrLab4numb,0);
myBigFuction(second, arrLab4numb,0);
myBigFuction(third, arrLab4numb,0);
fifth();
