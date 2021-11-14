//задание1
// let a=Number(prompt('Введите первую цифру')),
//     b=prompt('Введите ариметический знак сложения, умножения, вычитания или деления'),
//     c=Number(prompt('Введите вторую цифру')),
//     one=document.getElementById('one');
//     pl=false,
//     arr=[a,b,c];
// proverka=(date)=>{
//     for(let i=0;i<arr.length; i++){
//         if( arr[i]==undefined || isNaN(arr[0]) || isNaN(arr[2])) {
//           one.innerHTML='Ошибка! Введите любые числовые значения, кроме  букв/ пустой строки';
//             pl=true;
//             break;
//         }
//     }
//     if(arr[1]=='/' && arr[2]==0 ){
//       one.innerHTML='Ошибка! Деление на ноль невозможно!';
//         pl=true;
//     }
//     if( arr[1]==undefined || !isNaN(arr[1])){
//       one.innerHTML='Ошибка! Введите верныйарифметический знак';
//     }
// }
// proverka(arr);
// calculator=(perem1, sign, perem2)=>{
//     switch(sign){
//         case '+':
//           one.innerHTML='Результат вычислений: '+`${perem1}+${perem2}=${perem1+perem2}`
//           console.log(perem1+perem2);
//         break;
//         case '-':
//           one.innerHTML='Результат вычислений: '+`${perem1}-${perem2}=${perem1-perem2}`
//           console.log(perem1-perem2);
//         break;
//         case "*" :
//           one.innerHTML='Результат вычислений: '+`${perem1}*${perem2}=${perem1*perem2}`
//           console.log(perem1*perem2);
//         break;
//         case '/':
//           one.innerHTML='Результат вычислений: '+`${perem1}/${perem2}=${perem1/perem2}`
//           console.log(perem1/perem2);
//         break;
//         default:
//             console.log('Проверьте второе введённое значение! Вы ввели неверный арифметический знак!');
//             one.innerHTML='Проверьте второе введённое значение! Вы ввели неверный арифметический знак!';
//
//     }
// }
// if(!pl){
//     calculator(a,b,c);
// }





//задание3

// let month=prompt('Введите номер месяца');
// let one=document.getElementById('one');
// let regExp=/^0[0-9].*$/, pl=false;
// let k='';
// proverka=(date)=> {
//     if(date=='' || date==undefined || isNaN(date) ){
//         console.log('Ошибка! Вы ввели буквы/символы или оставили строку пустой. Пожалуйста, введите значения заново');
//     }
// }
// proverka(month);
//
// function pr(n, width,z){
//     z=z || '0';
//     n=n+'';
//     pl=true;
//     return n.length>=width ? n :  String(new Array(width-n.length+1).join(z)+n);
// }
// k=pr(month,2);
// if(k<=12 && k>0) {
//   switch (k) {
//     case '01':
//       one.innerHTML = '<div>в январе 31 день</div>';
//       console.log('в январе 31 день');
//       break;
//     case '02':
//       one.innerHTML = '<div>в феврале 29 дней</div>';
//       console.log('в феврале 29 дней');
//       break;
//     case '03':
//       one.innerHTML = '<div>в марте 31 день</div>';
//       console.log('в марте 31 день');
//       break;
//     case '04':
//       one.innerHTML = '<div>в апреле 30 дней</div>';
//       console.log('в апреле 30 дней');
//       break;
//     case '05':
//       one.innerHTML = '<div>в мае 31 день</div>';
//       console.log('в мае 31 день');
//       break;
//     case '06':
//       one.innerHTML = '<div>в июне 30 дней</div>';
//       console.log('в июне 30 дней');
//       break;
//     case '07':
//       one.innerHTML = '<div>в июле 31 день</div>';
//       console.log('в июле 31 день');
//       break;
//     case '08':
//       one.innerHTML = '<div>в августе 31 день</div>'
//       console.log('в августе 31 день');
//       break;
//     case '09':
//       one.innerHTML = '<div>в сентябре 30 дней</div>';
//       console.log('в сентябре 30 дней');
//       break;
//     case '10':
//       one.innerHTML = '<div>в октябре 31 день</div>';
//       console.log('в октябре 31 день');
//       break;
//     case '11':
//       one.innerHTML = '<div>в ноябре 30 дней</div>';
//       console.log('в ноябре 30 дней');
//       break;
//     case '12':
//       one.innerHTML = '<div>в декабре 31 дней</div>';
//       console.log('в декабре 31 дней');
//       break;
//   }
// }
// else{
//   one.innerHTML = '<div>Проверьте введённые данные! Месяца с таким номером не существует!</div>';
// }
//
//

//задание4
// let year=Number(prompt('Введите год')),
//     one=document.getElementById('one');
// if(year!=0 && year>=1582) {
//   if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//     one.innerHTML = 'Високосный год';
//     console.log('Високосный год');
//   }
//   else  {
//     one.innerHTML = 'Не високосный год';
//     console.log('Не високосный год');
//   }
// }else{
//   one.innerHTML = 'Проверьте введённые данные! С 1582 года по настоящее время год считается високосным, если он делится на 4, и при этом не делится на 100, или если год делится на 400.';
// }

//задание5

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// let  one=document.getElementById('one');
// let s,num;
//
// let i=0;
// let two=document.getElementById('two'),
// three=document.getElementById('three');
// do{
//   s=getRandomInt(11);
//       num=Number(prompt('Введите число'));
//   if (s > num) {
//     i++;
// alert(`Введённое вами число меньше. Число, загаданное компьютером: ${s}`);
//     // two.innerHTML+= "<div>Введённое вами число меньше</div>";
//     console.log('Введенное число меньше');
//
//   }
//   else if(s<num){
//     i++;
//     alert(`Введённое вами число больше.  Число, загаданное компьютером: ${s}`);
//     // two.innerHTML+= "<div>Введённое вами число больше</div>";
//
//   }
// }while(s!==num)
// if (s == num) {
//   console.log('Они равны');
//   let mass='Ура!'+' Ваше число сопало с числом, загаданным компьютером.'+' '+'Вы угадали с'+'  '+i+' '+'попытки';
//   three.innerHTML=mass;
//   three.style.fontFamily='TimesNewRoman';
//   console.log(i);
// }










//задание 6


//
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
//
//
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
//
// }



//задание 7

// let s=0,p=1;
// let arr=[], arrPologit=[], arrDel=[];
// let count=999, pl=false;
//
// let ul=document.createElement('ul');
// let main=document.getElementById('one');
// x=1;
// proverka=(date)=> {
//   for (let i = 0; i < date.length; i++) {
//     if (isNaN(date[i]) ) {
//
//       pl = true;
//       break;
//     }
//   }
// }
// while (x != 999) {
//   x = Number(prompt('Введите число'));
//
// if(x!=999) {
//   arr.push(x);
//
//   proverka(arr);
//   if (!pl) {
//     if (x % 3 == 0 && x != 0 && x != 999) {
//       s = s + x;
//       console.log(x, 'del na 3');
//       arrDel.push(x);
//     } else {
//       console.log('there are no numbers which can be')
//     }
//     if ((x > 0 || x === 0) && x != 999) {
//       p = p * x;
//       console.log(x, 'pologit');
//       arrPologit.push(x);
//     }
//     // if(x==999){
//     //   console.log('111');
//     //   break;
//     // }
//   }
// }
// else{
//   break;
// }
//
// }
//
//
//
// console.log(arr, arrDel, arrPologit);
// if(!pl) {
//   for (let key in arr) {
//     let li = document.createElement('li');
//     li.innerHTML = String(arr[key]);
//     ul.appendChild(li);
//   }
//   main.appendChild(ul);
//
//
//   let t = '\t' + '\t';
//   let str = 'Положительные' + t.repeat(4) + 'Делящиеся на 3' + '<br/>' +
//       arrPologit + t.repeat(5) + arrDel + '<br/>' +
//       '\u220f' + ' ' + '=' + p + t.repeat(5) + '\u2211' + ' ' + '=' + s;
//   console.log(str);
//   let two = document.getElementById('two');
//   two.innerHTML = str;
//   two.style.fontFamily = 'TimesNewRoman';
//
// }
// else{
//   main.innerHTML='ошибка! проверьте введённые данные!';
// }


//задание2

let a=Number(prompt('Введите первую цифру')),
    b=Number(prompt('Введите вторую цифру')),
    c=Number(prompt('Введите третью цифру')),
one=document.getElementById('one');
let arr1=[a,b,c], max=arr1[0], pl=false;
proverka=(date)=> {

    console.log(arr1);

    for (let i = 0; i < arr1.length; i++) {
            if ( arr1[0] == undefined || isNaN(arr1[0])) {
                one.innerHTML = 'Ошибка! Проверьте первое введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
                pl = true;
            }
            if (arr1[1] == undefined || isNaN(arr1[1])) {
                one.innerHTML = 'Ошибка! Проверьте второе введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
                pl = true;

            }
            if ( arr1[2] == undefined || isNaN(arr1[2])) {
                one.innerHTML = 'Ошибка! Проверьте третье введённое значение. Введите любые числовые значения, кроме  букв/ пустой строки';
                pl = true;
            }



    }

}
let two=document.getElementById('two');
function proverka1(d){
    for (let i = 0; i < arr1.length; i++) {
      console.log(arr1[0]);
        if (arr1[i]>=10 && arr1[i]<100) {

          let plo=Math.max(...arr1)


          one.innerHTML=`Максимальное из введённых чисел: ${plo}`;
        }
        else{
          one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';
        }
        if(arr1[0]<10 && arr1[0]<99){
          console.log('+');
            one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';

        }
      if(arr1[1]<10 && arr1[1]<99){
        console.log('+');
        one.innerHTML = '<div>Проверьте введённые значения! Вы вввели однозначное или трёхзначное число</div>';

      }
    }

}

if(!pl){
  proverka1(arr1);
}




