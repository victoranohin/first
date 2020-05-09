function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

var q1=prompt("Введи первое число"),
q2=prompt("Введи второе число");

if (q1==q2) {
    console.log('Числа равны, заебись!');}