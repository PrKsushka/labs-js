//задание2
// let a=Number(prompt('Введите первую цифру')),
//     b=Number(prompt('Введите вторую цифру')),
//     c=Number(prompt('Введите третью цифру')),
// one=document.getElementById('one');
// let arr1=[a,b,c], max=arr1[0], pl=false;
// proverka=(date)=> {

//     console.log(arr1);

//     for (let i = 0; i < arr1.length; i++) {
//             if ( arr1[0] == undefined || isNaN(arr1[0])) {
//                 one.innerHTML = 'Ошибка! Проверьте первое введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
//                 pl = true;
//             }
//             if (arr1[1] == undefined || isNaN(arr1[1])) {
//                 one.innerHTML = 'Ошибка! Проверьте второе введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
//                 pl = true;

//             }
//             if ( arr1[2] == undefined || isNaN(arr1[2])) {
//                 one.innerHTML = 'Ошибка! Проверьте третье введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
//                 pl = true;
//             }



//     }

// }
// let two=document.getElementById('two');
// function proverka1(d){
//     for (let i = 0; i < arr1.length; i++) {
//       console.log(arr1[0]);
//         if (arr1[i]>=10 && arr1[i]<100) {

//           let plo=Math.max(...arr1)


//           one.innerHTML=`Максимальное из введённых чисел: ${plo}`;
//         if(arr1[0]>99 || arr1[0]<10){
//             one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';
//             pl=true;

//         }
//       if(arr1[1]>99 || arr1[1]<10){
//         one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';
//         pl=true;

//       }
//               }
//         else{
//           one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';
//         }
//     }

// }

// if(!pl){
//   proverka1(arr1);
// }






//задание 6

// let x,y,
//     m=0,
//     n=Number(prompt('Введите число точек')),
//     p, pl=false,
//   one=document.getElementById('one');
// proverka=(date)=>{
//     if(date=='' || date==undefined || isNaN(date)){
//         console.log('Вы ввели что-то ');
//         pl=true;
//     }


// }
// proverka(n);
// if(!pl){
//     for (let i=0; i<n; i++) {
//         x=Math.random();
//         y=Math.random();
//         if (Math.pow(x, 2) + Math.pow(y, 2) <= 1)
//             m++;
//     }
//     p=(4*m)/n;
//     let str='Число пи:'+' '+p;
//     one.innerHTML=str;
//     console.log(p);

// }



//задание 7

let s=0,p=1;
let arr=[], arrPologit=[], arrDel=[];
let count=999, pl=false;

let ul=document.createElement('ul');
let main=document.getElementById('one');
x=1;
proverka=(date)=> {
  for (let i = 0; i < date.length; i++) {
    if (isNaN(date[i]) ) {

      pl = true;
      break;
    }
  }
}
while (x != 999) {
  x = Number(prompt('Введите число'));

if(x!=999) {
  arr.push(x);

  proverka(arr);
  if (!pl) {
    if (x % 3 == 0 && x != 0 && x != 999) {
      s = s + x;
      console.log(x, 'del na 3');
      arrDel.push(x);
    } else {
      console.log('there are no numbers which can be')
    }
    if ((x > 0 || x === 0) && x != 999) {
      p = p * x;
      console.log(x, 'pologit');
      arrPologit.push(x);
    }
  }
}
else{
  break;
}

}



console.log(arr, arrDel, arrPologit);
if(!pl) {
  for (let key in arr) {
    let li = document.createElement('li');
    li.innerHTML = String(arr[key]);
    ul.appendChild(li);
  }
  main.appendChild(ul);


  let t = '\t' + '\t';
  let str = 'Положительные' + t.repeat(4) + 'Делящиеся на 3' + '<br/>' +
      arrPologit + t.repeat(5) + arrDel + '<br/>' +
      '\u220f' + ' ' + '=' + p + t.repeat(5) + '\u2211' + ' ' + '=' + s;
  console.log(str);
  let two = document.getElementById('two');
  two.innerHTML = str;
  two.style.fontFamily = 'TimesNewRoman';

}
else{
  main.innerHTML='ошибка! проверьте введённые данные!';
}
