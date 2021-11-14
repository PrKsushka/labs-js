let t=document.getElementById("one");
let a=Number(prompt('Введите а', arrLab1[637])),
    b=Number(prompt('Введите b', arrLab1[384])),
    c=Number(prompt('Введите c', arrLab1[834])),
    d=Number(prompt('Введите d', arrLab1[380])),
    k=Number(prompt('Введите k', arrLab1[328])),
    pl=false,
    arr=[a,b,c,d,k];
proverka=(date)=>{
    for(let i=0;i<arr.length; i++){
        if(arr[i]===0 || arr[i]==='' || arr[i]===undefined || isNaN(arr[i])) {
            t.innerHTML='Ошибка! Введите любые числовые значения, кроме нуля/ букв/ пустой строки/ каких-либо знаков';
            pl=true;
            break;
        }
    }
}
proverka(arr);

if(!pl && c!==d){
    let p=(((a+b)/(c-d)))/((k*a+(b/c)))+d*k-(a/b)-((c+d)*(k-a));
    !Number.isFinite(p)? t.innerHTML=`Проверьте верность введённых данных. В выражении k*a+b/c получился нуль. Введите новые данные` : t.innerHTML=`Результат выполнения арифметических операций: ${p.toFixed(2)}`;
    console.log(p.toFixed(2));
}else if(c===d){
    t.innerHTML="Проверьте введённые данные! С не может равняться D";
}else if(((k*a)+(b/c))===0){
    t.innerHTML="Проверьте верность введённых данных. В выражении k*a+b/c получился нуль";
}

