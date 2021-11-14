
function myBig(mas,x,y,z){
	

	this.mas=mas;
	this.x=x;
	this.y=y;
	this.z=z;
}

//задание1
myBig.prototype.first=function(){
	for(let i=0; i<this.mas.length; i++){
		if(this.mas[i]%2===0){
			this.x++;
		}
	}
	return console.log(`Количество элементов с чётными значениями равно: ${this.x}`);
}
myBig.prototype.second=function(){
for(let i=0; i<this.mas.length; i++){
		if(this.mas[i]%11===0){
			this.x+=i;
		}
	}
	//two.innerHTML=`Задание 2: Сумма индексов элементов значения которых кратных 11: ${sum}`;
	return console.log(`Сумма индексов элементов значения которых кратных 11: ${this.x}`);
}


myBig.prototype.third=function(){
	for(i=0; i<this.mas.length; i++){
		if(this.mas[i]>=1 && this.mas[i]<=33){
			this.x+=this.mas[i];

		}

	}
	//three.innerHTML=`Задание 3: Сумма значений элементов в диапазоне от 1 до 33 включительно равна: ${sum1}`;
	return console.log(`Сумма значений элементов в диапазоне от 1 до 33 включительно равна: ${this.x}`);
}
myBig.prototype.fourth=function(){
for(let i=0; i<this.mas.length; i++){
		switch(this.mas[i]){
			case 'blue': this.x+=i;
			case 'brown': this.y+=i;
			case 'cyan': this.z+=i;
		}
	}
	return console.log(`Сумма индексов элемента blue равна: ${this.x}. Сумма индексов элемента brown: ${this.y}. Сумма индексов элемента cyan: ${this.z}. `);
}

myBig.prototype.fifth=function(){
Object.prototype.getKeyByValue = function( value ) {
	    for( var prop in this ) {
	        if( this.hasOwnProperty( prop ) ) {
	             if( this[ prop ] === value )
	                 return prop;
	        }
	    }
	}
	console.log('Задание 5:');
	for(let key in this.mas){
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


	let l=this.mas.getKeyByValue('#f7ab57');
	let t=this.mas.getKeyByValue('#f7c8fe');
	if(l===undefined){
				console.log(`#f7ab57 нет в наборе X11`);
	}
	if(t===undefined){
		console.log(`#f7c8fe нет в наборе X11`);
	}
}




let first= new myBig(arrLab4numb,0);
first.first();



let second= new myBig(arrLab4numb,0);
second.second();


let third= new myBig(arrLab4numb,0);
third.third();

let fourth= new myBig(arrLab4str,0,0,0);
fourth.fourth();

let fifth= new myBig(arrLab4asc);
fifth.fifth();
