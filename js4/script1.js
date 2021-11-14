//задание 7
let a = Number(prompt("Введите первое значение")),
	b = Number(prompt("Введите второе значение. Оно должно быть больше или меньше 20 первого значения"))
	pl=false;
	function proverochka(){
		if (a!== false && b !== false && b<=20+a && b>=a-20 && a>=0 && b>=0 && a<=10000 && b<=10000) {
			pl=false;
		}
		else{
			console.log('Неверно');
			pl=true;
		}
	}

proverochka();
if(!pl){
		if (a>b) {
			a+=b;
			b=a-b;
			a-=b;
		}
		let arr=[b-a+1];
		for (let i=0; i<=b-a; i++) {
			arr[i] = arrLab4numb[a+i-1];
		}

		var str = "";
		for (let i=100; i>=0; i=i-5) {
			if (i==100) {
				str+="\u250c ";
			}
			if (i<100 && i>0) {
				str+="\u251c ";
			}
			if (i==0) {
				str+="\u2514 ";
			}
			if (i%10==0) {
				str+=i+"\t";
			}
			else {
				str+="\t\t";
			}
			if (i==0) {
				str+="\t";
			}
			for (let j=0; j<=b-a; j++) {
				if (arr[j]>=i-5 && arr[j]<i) {
					str+=arr[j];
				}
				if (arr[j]>=i) {
					str+="\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c";
				}
				else {
					str+="\t\t";
				}
			}
			str+="\r\n";
		}


		str+="\t\t";
		for (let i=0; i<=b-a; i++) {
			if (i==b-a) {
				str+="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
			}
			else {
				str+="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2530";
			}
		}
		str+="\r\n\t\t";
		for (let i=a; i<=b; i++) {
			str+=i + "\t";
			if (i<1000) {
				str+="\t";
			}
		}
		str+="\r\n";
		console.log(str);
	}
