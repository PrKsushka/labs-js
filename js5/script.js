let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let four1=document.getElementById('four1');

//задание1

let regExp1=/^(\S+)[,\s]\s*(\S+)\s*$/;
let regExp2=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(^[^\d\_])(?=.*[A-Z])(?=.*[a-z]).*/;
let regExp3=/(\+375[\(]44[\)]\d{7})|(\+37544\d{7})|(\+375[\(]44[\)]\d{3}[\-]\d{2}[\-]\d{2})|(\80[\(]44[\)]\d{7})|(\8044\d{7})|(\80[\(]44[\)]\d{3}[\-]\d{2}[\-]\d{2})/;
let regExp4=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

let inputs=document.querySelectorAll('input[data-rule]');
for(let input of inputs){
	input.addEventListener('blur', function(){
			let rule=this.dataset.rule;
			let value=this.value;
			let check;
	//if(value==""){
	//	alert('Введите что-нибудь');
	//}
	//else{
		switch(rule){
			case 'text': check=regExp1.test(value);
			(check===true)? alert(value) : alert('Проверьте введённые данные');
			break;
			case 'password': check=regExp2.test(value);
			if(check===true){
			 alert(`Соответсвует требованиям ${value}`) 
			}

			else{ 
				alert('Проверьте введённые данные');
			}
			break;
			case 'tel': proverkaNomera(value);
			break;
			case 'email': check=regExp4.test(value);
			(check===true)? alert(`Соответсвует требованиям${value}`) : alert('Проверьте введённые данные');
			break;
	//}
	}

	})
}
function proverkaNomera(val) { 
	var re = /^\d{11}$/;
	if (re.test(val) == false) {
		re = /^\d(\s\(\d{3}\)\s|\(\d{3}\))\d{3}-\d{2}-\d{2}$/;
		if (re.test(val) == false) {
			re = /^\+375(\d{2}|\(\d{2}\))\d{7}$/;
			if (re.test(val) == false) {
				re = /^\+375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;
				if (re.test(val) == false) {
					alert('Проверьте введённые данные');
				}else alert(`Соответсвует требованиям${val}`);
			}else alert(`Соответсвует требованиям${val}`);
		}else alert(`Соответсвует требованиям${val}`);
	}else alert(`Соответсвует требованиям${val}`);
}

	function letterChange(){
		let myText=document.getElementById('myText').value;
		let from=document.getElementById('changeFrom').value;
		let to=document.getElementById('changeTo').value;
		let cap=document.getElementById("cap");
		let proverka = /\w/;
		let result=document.getElementById('result');
		if (myText=="" ||from=="" || to=="") {
			alert("Заполните все поля!");
		}
		console.log(from);
		let rep="";
		for (let i=0; i<from.length; i++) {
			if (rep!="" && from[i]!=" ") rep+="|"
			if (from[i] != ' ') rep+=from[i];
		}
			console.log(rep);
		let repre;
		if (cap.checked) {
			repre = new RegExp (rep,"i");
		}
		else repre = new RegExp (rep);

	var res="";
	for (var i = 0; i<myText.length; i++) {
		if (repre.test(myText[i])) res+=to;
		else res+=myText[i]
	}
	result.innerHTML=`Результат: ${res}`;
}


function zadanie6() {
	let konech=document.getElementById('konech');
	let disc=document.getElementById("disc");
	let day=document.getElementById("day");
	let month=document.getElementById("month");
	let year=document.getElementById("year");

	var rad = document.getElementsByName("d");

	var re = /^\d{1,2}[\.,\|\\\s]\d{1,2}[\.,\|\\\s]\d+$/;
	var str = document.getElementById("date1").value;
	var splitstr;
	if (re.test(str)) {
		re = /[\.,/\|\\\s]/;
		splitstr = str.split(re);
		re = /(0?4|0?6|0?9|11)/;
		if (Number(splitstr[0])==2 && ((Number(splitstr[1])>28 && (Number(splitstr[2])%400!=0&&(Number(splitstr[2])%100==0||Number(splitstr[2])%4!=0)))||Number(splitstr[1])>29)) {alert("Invalid date feb"); return;}
	} else {alert("Invalid date"); return;}
	re = /^(математика|русский|английский|биология|химия|белорусский|физика)$/i;
	str = document.getElementById("list").value;
	if (re.test(str)==false) {
			konech.innerHTML="Неверно введено название предмета"}
		var i=0;
	for (;i<rad.length;i++) {
		if (rad[i].checked) break;
	
	switch(i) {
		case 0:
			disc.innerHTML = str;
			day.innerHTML = splitstr[0];
			break;
		case 1:
			disc.innerHTML = str;
			month.innerHTML = splitstr[1];
			break;
		case 2:
			disc.innerHTML = str;
			year.innerHTML = splitstr[2];
			break;
		case 3:
			disc.innerHTML = str;
			day.innerHTML = splitstr[0];
			month.innerHTML = splitstr[1];
			break;
		case 4:
			disc.innerHTML = str;
			month.innerHTML = splitstr[1];
			year.innerHTML = splitstr[2];
			break;
		case 5:
			disc.innerHTML = str;
			day.innerHTML=splitstr[0];
			month.innerHTML = splitstr[1];
			year.innerHTML = splitstr[2];
			break;
	}
}
}

var bigMas = [],
	carrk = 0,
	carr = [],
	 nc = 0,
	 nccount = 0,
	 k=1;



function zadacha7() {
	let splitstr;
	let result=document.getElementById('res');
	let mon=document.getElementById('mon'),
		weeks=document.getElementById('weeks'),
		days=document.getElementById('days'),
		monweeks=document.getElementById('monweeks'),
		hours=document.getElementById('hours'),
		hoursandminutes=document.getElementById('hoursandminutes');
		minutes=document.getElementById('minutes'),
		all=document.getElementById('all');
	let re = /^\d{1,2}[\.,/\|\\\s]\d{1,2}[\.,/\|\\\s]\d{4}[\.,/\|\\\s]\d{1,2}[:\.,\s]\d{1,2}$/,
		 str = document.getElementById("date2").value;
	
	if (re.test(str)) {
		re = /[\.,/\|\\\s:]/;
		splitstr = str.split(re);
		re = /0?4|0?6|0?9|11/;
		if (Number(splitstr[0])==0 || Number(splitstr[0])>12 || Number(splitstr[1])==0 || (Number(splitstr[1])>30 && re.test(splitstr[1])) || Number(splitstr[1])>31) {alert("Invalid date out of reach"); return;}
		if (Number(splitstr[3])>23 || Number(splitstr[4])>59) {alert("Invalid time"); return;}
		if (Number(splitstr[0])==2 && ((Number(splitstr[1])>28 && (Number(splitstr[2])%400!=0&&(Number(splitstr[2])%100==0||Number(splitstr[2])%4!=0)))||Number(splitstr[1])>29)) {alert("Invalid date feb"); return;}
	} else {alert("Invalid date"); return;}
	var now = new Date();
	var exam = new Date (Number(splitstr[2]),Number(splitstr[1])-1,Number(splitstr[0]),Number(splitstr[3]),Number(splitstr[4]));
	var diffs = exam-now;
	var diff = new Date(exam.getFullYear()-now.getFullYear(),exam.getMonth()-now.getMonth(),exam.getDate()-now.getDate(),exam.getHours()-now.getHours(), exam.getMinutes()-now.getMinutes());
	if(mon.checked) {
		str = parseInt(diff.getMonth()) + " месяцев до экзамена";
			result.innerHTML=str;
	}
	if (weeks.checked) {
			str = `${(parseInt(diffs/(1000*3600*24*7)))} недель до экзамена`;
			result.innerHTML=str;
	}
	if (days.checked) {
			str = `${(parseInt(diffs/(1000*3600*24)))} дней до экзамена`;
			result.innerHTML=str;
	}
	if (monweeks.checked) {
			str = `${(parseInt(diff.getMonth()))} месяцев и ${parseInt(diff.getDate()/7)} недель до экзамена`;
			result.innerHTML=str;
	}
	if (hours.checked) {
			str = `${(parseInt(diffs/(1000*3600)))} часов до экзамена`;
			result.innerHTML=str;
	}
	if (minutes.checked) {
			str = `${(parseInt(diffs/(1000*60)))} минут до экзамена`;
			result.innerHTML=str;
	}
	if (hoursandminutes.checked) {
			str = `${(parseInt(diffs/(1000*3600)))} часов ${(parseInt(diff.getMinutes()))} минут до экзамена`;
			result.innerHTML=str;
	}
	if (all.checked) {
			str = `${(parseInt(diff.getMonth()))} месяцев ${(parseInt(diff.getDate()/7))} недель ${(parseInt(diff.getDate()%7))} дней ${(parseInt(diff.getHours()))} часов  ${(parseInt(diff.getMinutes()))} минут до экзамена`;
			result.innerHTML=str;
	}
}

function zadanie8() {
		let pust="";
	let poluch=document.getElementById('poluch'),
		str = document.getElementById('textic').value,
		word = document.getElementById("word");
	if (word.checked){
		 pust+="[^\\s]*";
	}

	pust += document.getElementById("sub").value;
	if (word.checked){
		 pust+="[^\\s]*\\b";
		}
	var zn = document.getElementById("tosub").value;
	var re = new RegExp (pust, 'gm');
	console.log (re);
	var res="";
	res = str.replace(re, zn);
	poluch.innerHTML=res;
}







function zadanie9() {
	let fistt=document.getElementById('first'),
		secc=document.getElementById('second'),
		third=document.getElementById('third'),
		sort = document.getElementsByName("sort"),
		count=0;
	for (;count< sort.length;count++) {
		if (sort[count].checked) break;
	}
	var str = document.getElementById("arr").value;
	var re = /^(-?\d+,\s*)*-?\d+$/;
	if (re.test(str)==false) {alert ("wrong input"); return;}
	re = /0,\s*0,\s*0/;
	if (re.test(str)) {
		first.innerHTML = (window.bigMas + " -самая длинная последовательность");
		secc.innerHTML = (window.carr + " - последовательность с максимальной сложностью");
		if (nccount!=0)
		third.innerHTML = ((window.nc/window.nccount) + " - средняя сложность сориторвки");
		return;
	}
	var str0="";
	re = /-?\d+/g;
	var arr = (str.match(re)).map(Number);
	if (arr.length>=window.bigMas.length) {window.bigMas=arr;}
	var massivZnach = [];
	window.k=0;
	let myel=document.getElementById('myel');
	switch (count) {
		case 0:
			massivZnach = mergeSort(arr);
			myel.innerHTML=`Отсортированный массив ${massivZnach}`;
			break;
		case 1:
			massivZnach = selectionSort(arr);
			myel.innerHTML=`Отсортированный массив ${massivZnach}`;
			break;
		case 2:
			massivZnach = quickSort(arr);
			myel.innerHTML=`Отсортированный массив ${massivZnach}`;
			break;
	};
	if (window.k>window.carrk) {window.carrk=window.k; window.carr=arr;}
	window.nc+=window.k;
	window.nccount++;
	document.getElementById("comp").innerHTML = (`Сложность ${window.k}`);
}

function mergeSort (mas) {
	if (mas.length <= 1) {
		return mas;
	}
	const middle = Math.floor(mas.length / 2);
	const left = mas.slice(0, middle);
	const right = mas.slice(middle);
	window.k++;
	return merge(mergeSort(left), mergeSort(right));
}

function merge (low, high) {
  let myMas = [], 
  	leftIndex = 0,
  	 rightIndex = 0;

  while (leftIndex < low.length && rightIndex < high.length) {
		if (low[leftIndex] < high[rightIndex]) {
			myMas.push(low[leftIndex]);
			leftIndex++;
		} else {
			myMas.push(high[rightIndex]);
			rightIndex++;
		}
		window.k++;
	}
	return myMas
	.concat(low.slice(leftIndex))
    .concat(high.slice(rightIndex));
}



function selectionSort(array) { 
    for(let i = 0; i < array.length; i++){
		k++;
    var min = i;
    for(let j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
	   k++;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
	  window.k++;
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function zadanie10() {
	let str = document.getElementById("comment4").value,
		re = /[:;]-*(\)+|\(+|\]+|\[+)/g;
	document.getElementById("smile").innerHTML = `Количество ${str.match(re).length})`;
}