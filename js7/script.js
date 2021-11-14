let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let four1=document.getElementById('four1');
//задание1
let name="discipulae";
let reg = new RegExp(name,"g","i");

for(let i=0; i<arrLab7.length;i++){
	if(arrLab7[i].match(reg)){
		let k=arrLab7[i].split(' ');
		for(let m=0;m<k.length;m++){
		if(k[m]=="discipulae"){
			let d=k[m].split('');
			d.splice(0,1);
			let str=d.join('');
			console.log("<span style='font-size:24px>"+k[m].split('')[0]+"</span>"+str);

			}
		}
		let word=arrLab7[i];
		let word1=word.split(' ');
		let word2=word1[0].split('');
		word2.splice(0,1);
		let str2=word2.join('');
		word1.splice(0,1);
		let str3=word1.join(' ');
		console.log("<span style='font-size:24px>"+word[0]+"</span>"+str2+ " "+str3 );
	}
}

//задание2
let count=0;
for(let i=0; i<arrLab7.length;i++){
	let y=arrLab7[i].split('.');
	for(let p=0; p<y.length; p++){
		if(y[p]==""){
			let index=y.indexOf(y[p]);
			y.splice(index,1);
		}
}
	if(y.length==4){

		let elem1=y.join(' ');
		let el2=elem1.split('');
		el2.splice(0,1);
		let x1=el2.join('');
		console.log("<span style='font-size:24px>"+elem1[0]+"</span>"+x1+ " ");
	}
}

//задание3
let name1="skew";
let reg1 = new RegExp(name1,"g","i");
let po,iznach;
	let arre=[];
	let length;
for(let i=0;i<arrLab7.length;i++){
		if(arrLab7[i].match(reg1)){
			console.log('Было:  '+ arrLab7[i]);
			let r = /(-?\d+(\.\d+)?)/g;
			let match=arrLab7[i].match(r);
			for(let h=0;h<match.length;h++){
				iznach=Number(match[h]);
				arre.push(Number(match[h]));
				length=arre.length;
				match[h]=Number(match[h]);
				match[h]+=11;

		}
		console.log('Стало: '+`transform: ${arrLab7[i].match(reg1)} (${match[0]}deg, ${match[1]}deg)`);
		
	}
}

//задание4
let name3="style";
let reg2 = new RegExp(name3,"g","i");
let pr,pr1,newmas,lo,star,res,from;
let arr1=[];
for(let i=0; i<arrLab7.length; i++){
		if(arrLab7[i].match(reg2)){
			star=arrLab7[i].toLowerCase();
			pr=arrLab7[i].split("'");
			pr1=pr[1].split(';');
				for(let lp=0; lp<pr1.length; lp++){
					newmas=pr1[lp].split(':');
					if(newmas[lp]==='color'){
						newmas[1]='#557788';
					}
					
					lo=newmas.join(':');
					arr1[lp]=lo;
					if(arr1[lp]!='color:#557788'){

					}
					if(!arrayContains('color:#557788', arr1)) {

						arr1.unshift('color:#557788');

					}

				}
				from=pr1.join(';');
				res=arr1.join(';');
				let last=star.replace(/(["'])[^]*?\1/g, `'${res}'`);
				console.log(`Было ${'\n'}`);
				console.log(`${star} ${'\n'}`);
				console.log(`Стало ${'\n'}`);
				console.log(last);
	}

}

	function arrayContains(word, source_array) {

		return(source_array.indexOf(word) > -1);

	}
	
//задание5
function labfunc5(){
	x=prompt('Введите цвет в формате hex. Например, #ffffff')
	fromHextoRGB(x);
 }
function fromHextoRGB(x) {
            let proverkaColor = "^#([A-Fa-f0-9]{6})$";
            if (x.match(proverkaColor)) {
                let hexColor = x.replace("#", ""),
                    r = parseInt(hexColor.substring(0, 2), 16),
                    g = parseInt(hexColor.substring(2, 4), 16),
                    b = parseInt(hexColor.substring(4, 6), 16);
                return console.log(`rgb(${r}, ${g}, ${b})`);
            }
            else {
                console.log('Неверный формат!');
            }
        }