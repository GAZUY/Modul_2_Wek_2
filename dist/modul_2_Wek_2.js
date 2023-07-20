document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 1</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 \u00AB\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A\u00BB. \u041A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C, \n\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u043A\u0443\u043F\u043B\u0435\u043D \u0438\u043B\u0438 \u043D\u0435\u0442. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0443\u043D\u043A-\n\u0446\u0438\u0439 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0442\u0430\u043A\u0438\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C.</p>");
document.write("<p>1 \u0412\u044B\u0432\u043E\u0434 \u0432\u0441\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u0430\u0447\u0430\u043B\u0430\n\u0448\u043B\u0438 \u043D\u0435\u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u0430 \u043F\u043E\u0442\u043E\u043C \u2013 \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435.</p>");
var shoppingList = [
    {
        name1: 'yab',
        quantity: 5,
        condition: 'yes'
    },
    {
        name1: 'myaso',
        quantity: 10,
        condition: 'yes'
    },
    {
        name1: 'vodka',
        quantity: 20,
        condition: 'no'
    },
    {
        name1: 'stakan',
        quantity: 3,
        condition: 'no'
    }
];
document.write("<p>\u0414\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</p>");
document.write("<p>" + JSON.stringify(shoppingList) + "</p>");
function printShoppingList(arr) {
    if (arr === void 0) { arr = []; }
    var a = [];
    for (var i = 0; i < arr.length; i++) {
        // @ts-ignore
        if (arr[i].condition === 'no') {
            a.unshift(arr[i]);
        }
        else {
            a.push(arr[i]);
        }
    }
    return a;
}
document.write("<p>\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0441 \u043D\u0435\u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u043C \u0442\u043E\u0432\u0430\u0440\u043E\u043C \u0432 \u043D\u0430\u0447\u0430\u043B\u0435</p>");
// @ts-ignore
document.write("<p>" + JSON.stringify(printShoppingList(shoppingList)) + "</p>");
document.write("<hr>");
document.write("<p>2 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A. \u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043E \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438\n\u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0441 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0435,\n\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u043E\u0432\u0443\u044E.</p>");
var name1 = 'vodka';
var quantity = 5;
document.write("<p>\u0414\u043E\u0431\u0430\u0432\u0438\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \"" + name1 + "\" \u0432 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435: " + quantity + "</p>");
function addShoppingList(n, q) {
    var find = false;
    for (var _i = 0, shoppingList_1 = shoppingList; _i < shoppingList_1.length; _i++) {
        var el = shoppingList_1[_i];
        if (el.name1 === n) {
            find = true;
            el.quantity += q;
        }
    }
    if (!find) {
        shoppingList.push({
            name1: name1,
            quantity: quantity,
            condition: 'no'
        });
    }
    return shoppingList;
}
document.write("<p>" + JSON.stringify(addShoppingList(name1, quantity)) + "</p>");
document.write("<hr>");
document.write("<p>3 \u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\n\u0438 \u043E\u0442\u043C\u0435\u0447\u0430\u0435\u0442 \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0439.</p>");
document.write("<p>\u041A\u0443\u043F\u0438\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \"" + name1 + "\" \u0438 \u043E\u0442\u043C\u0435\u0442\u0438\u043C \u0435\u0433\u043E</p>");
function weCelebrateThePurchase(n) {
    for (var _i = 0, shoppingList_2 = shoppingList; _i < shoppingList_2.length; _i++) {
        var el = shoppingList_2[_i];
        if (el.name1 === n) {
            el.condition = 'yes';
        }
    }
    return shoppingList;
}
document.write("<p>" + JSON.stringify(weCelebrateThePurchase(name1)) + "</p>");
document.write("<p>========================================================================================</p>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 2</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432, \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0447\u0435\u043A \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435. \u041A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435-\n\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0446\u0435\u043D\u044B \u0437\u0430\n\u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0442\u043E\u0432\u0430\u0440\u0430. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.</p>");
var storeReceipt = [
    {
        product_name: 'Гайка',
        quantity_of_goods: '20',
        product_price: '7'
    },
    {
        product_name: 'Шайба',
        quantity_of_goods: '15',
        product_price: '3'
    },
    {
        product_name: 'Болт',
        quantity_of_goods: '35',
        product_price: '12'
    },
];
document.write("<p>1 \u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u043A\u0430 \u0447\u0435\u043A\u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D.</p>");
function wePrintTheReceipt(arr) {
    var a;
    //for (let i = 0; i < arr.length; i ++) {
    a = '';
    //console.log (arr[i])
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el.product_name) {
            a = a + 'Наименование:' + el.product_name + ' ';
            //console.log (a)
        }
        else if (el.quantity_of_goods) {
            a = a + el.quantity_of_goods + 'шт';
            //console.log (a)
        }
        else {
            a = a + el.product_price + 'за ед.';
            //console.log (a)
        }
        //console.log (a)
        // console.log (JSON.stringify(arr[i]))
        console.log(a);
    }
    return document.write("<p>" + a + "</p>");
    //}
}
wePrintTheReceipt(storeReceipt);
/*
document.write (`<p></p>`)



Задание 2
Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1
Распечатка чека на экран.
2
Подсчет общей суммы покупки.
3
Получение самой дорогой покупки в чеке.
4
Подсчет средней стоимости одного товара в чеке.
Задание 3
Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.
Задание 4
Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.
1
Вывод на экран всех аудиторий.
2
Вывод на экран аудиторий для указанного факультета.
3
Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
4
Функция сортировки аудиторий по количеству мест.
5
Функция сортировки аудиторий по названию (по алфа-
виту).
*/ 
