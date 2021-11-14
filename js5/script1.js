function daysLeftNewYear()
{ 
 today = new Date()
 nextDate = new Date("January 3, 2021")
 //Количество миллисекунд в одном дне
 msPerDay = 24*60*60*1000;
 //Высчитываем количество дней
 daysLeft = Math.round((nextDate.getTime()
  - today.getTime())/msPerDay);
 dayname=""
 ds=""+daysLeft
  //Вырезаем последнею цифру
 dd=parseInt(ds.substr(ds.length-1))
 //Определяем правильность написания
 if(daysLeft>4&&daysLeft<21)dayname=" дней"
 else
  if(dd==1)dayname=" день"
  else
   if(dd==2||dd==3||dd==4)dayname=" дня"
   else dayname=" дней"
 //Выводим надпись в документ
 document.write("До Нового года осталось <br>"
 +daysLeft+dayname+"!!!");
}
daysLeftNewYear();


timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date = new Date(end_date_str);
    // Вычисление разницы времени 
    let ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) { // То
        // Выключаем интервал
        clearInterval(timer);
        // Выводим сообщение об окончание
        alert("Время закончилось");
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res = new Date(ms_left);
        // Делаем строку для вывода
        let str_timer = `${res.getUTCFullYear() - 1970}.${res.getUTCMonth()}.${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
        // Выводим время
        timer_show.innerHTML = str_timer;
    }
}, 1000)