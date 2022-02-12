'esversion:6';
//alert("скрипт подключился");
//var time;
let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD");

alert(typeof(money));

let appData = {
budget : money,
timeData : time,
income:[],
savings : false
};

let expenses = {

};

let optionalExpenses = {

};
let answ1 = prompt("Введите обязательную статью расходов в этом месяце");
let answ2 = prompt("Во сколько обойдется?");
expenses[answ1] = answ2;

function budgetCalc(monthCache,howMuchDay,howMuchExpenses ) {
    let budgetOnDay = (monthCache-howMuchExpenses)/howMuchDay;
    alert(`разрешенный бюджет на сегодня : ${budgetOnDay}`);
}
budgetCalc(money,30,answ2);