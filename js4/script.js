let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let four1=document.getElementById('four1');
//задание1

let count=0;
for(let i=0; i<arrLab4numb.length; i++){
	if(arrLab4numb[i]%2===0){
		count++;
	}

}
one.innerHTML=`Задание 1:  Количество элементов с чётными значениями равно: ${count}`;



//задание2
let sum=0;
for(let i=0; i<arrLab4numb.length; i++){
	if(arrLab4numb[i]%11===0){
		sum+=i;
	}
}
two.innerHTML=`Задание 2: Сумма индексов элементов значения которых кратных 11: ${sum}`;




//задание 3
let sum1=0;
for(i=0; i<arrLab4numb.length; i++){
	if(arrLab4numb[i]>=1 && arrLab4numb[i]<=33){
		sum1+=arrLab4numb[i];

	}

}
three.innerHTML=`Задание 3: Сумма значений элементов в диапазоне от 1 до 33 включительно равна: ${sum1}`;

//задание4
let p=0, p1=0, p2=0;
for(let i=0; i<arrLab4str.length; i++){
	switch(arrLab4str[i]){
		case 'blue': p+=i;
		case 'brown': p1+=i;
		case 'cyan': p2+=i;
	}
}
four.innerHTML=`Задание 4: Общая сумма индексов элеметов, сожержащих brown, blue, cyan: ${p+p1+p2}`;
four1.innerHTML=`Задание 5: Сумма индексов элемента blue равна: ${p}. Сумма индексов элемента brown: ${p1}. Сумма индексов элемента cyan: ${p2}. `;


//задание5

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
console.log('Задание 6:');
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

//задание 6

console.log('Задание 7:');
let kvadrat='\u2588';
let probel='\u0020';
let str, str1;

let lenght=55;
let exp='', exp1='';
for(let i=0; i<=lenght; i++){
	if(i<=27){
		exp+=probel.repeat(i)+kvadrat.repeat(lenght-i)+'\n';
	}
	else if(i>=28){
		exp1+=probel.repeat(55-i)+kvadrat.repeat(i)+'\n';
	}

}
console.log(exp+exp1);

