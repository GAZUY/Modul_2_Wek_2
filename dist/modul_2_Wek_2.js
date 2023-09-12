var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// const storeReceipt: any = [
//     {
//         product_name: 'Гайка',
//         quantity_of_goods: '20',
//         product_price: '7'
//     },
//     {
//         product_name: 'Шайба',
//         quantity_of_goods: '15',
//         product_price: '3'
//     },
//     {
//         product_name: 'Болт',
//         quantity_of_goods: '35',
//         product_price: '12'
//     },
// ]
// document.write (`<p>1 Распечатка чека на экран.</p>`)
// function wePrintTheReceipt (arr:any[]) {
//     for (let el of arr) {
//         document.write (`<p>Продукт: ${el.product_name} ____${el.quantity_of_goods} шт ____${el.product_price} за шт</p>`)
//     }  
// }
// wePrintTheReceipt (storeReceipt)
// document.write (`<hr>`)
// document.write (`<p>2 Подсчет общей суммы покупки.</p>`)
// function countingTheAmountOfTheCheck (arr:any[]){
//     let a: number
//     let sum: number = 0
//     for (let el of arr) {
//         a = + el.quantity_of_goods
//         sum = sum + a * (+el.product_price)
//     }
//     return sum 
// }
// document.write (`<p>Общая сумма покупки составит: ${countingTheAmountOfTheCheck (storeReceipt)}</p>`)
// document.write (`<hr>`)
// document.write (`<p>3 Получение самой дорогой покупки в чеке.</p>`)
// function theMostExpensivePurchase (arr:any[]) {
//     let a: number
//     let arr1: any = []
//     for (let el of arr) {
//         a = + el.quantity_of_goods
//         arr1.push( a * (+el.product_price))
//     }
//     (arr1.sort(function (a, b) { return -a + b }))
//     return arr1 [0]
// }
// document.write (`<p>Самая дорогая покупка:${theMostExpensivePurchase (storeReceipt)}</p>`)
// document.write (`<hr>`)
// document.write (`<p>4 Подсчет средней стоимости одного товара в чеке.</p>`)
// function averageProductPrice (arr:any[]){
//     let a: number
//     let sum: number = 0
//     for (let el of arr) {
//         a = + el.quantity_of_goods
//         sum = sum + a * (+el.product_price)
//     }
//     return Math.round(sum / arr.length )
// }
// document.write (`<p>Средняя стоимость товара составит: ${averageProductPrice (storeReceipt)}</p>`)
document.write("<p>========================================================================================</p>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 css-\u0441\u0442\u0438\u043B\u0435\u0439 (\u0446\u0432\u0435\u0442, \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430, \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435, \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442. \u0434.). \u041A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u2013 \u044D\u0442\u043E \u043E\u0431\u044A\u0435\u043A\u0442, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432: \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0438\u043B\u044F \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0442\u0438\u043B\u044F. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0441\u0442\u0438\u043B\u0435\u0439 \u0438 \u0442\u0435\u043A\u0441\u0442, \u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E document.write() \u0432 \u0442\u0435\u0433\u0430\u0445 <p></p>, \u0434\u043E\u0431\u0430\u0432\u0438\u0432 \u0432 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0442\u0435\u0433 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 style \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435.</p>");
var styleCss = [
    {
        styleName: 'color',
        theMeaningOfStyle: 'green'
    },
    {
        styleName: 'font-size',
        theMeaningOfStyle: '20'
    },
    {
        styleName: 'text-align',
        theMeaningOfStyle: 'center'
    },
    {
        styleName: 'text-decoration',
        theMeaningOfStyle: 'underline'
    },
    {
        styleName: 'font-family',
        theMeaningOfStyle: 'Trattatello, fantasy'
    },
];
function outputTextWithStyles(arr, a) {
    var s = '';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el.styleName) {
            s = s + el.styleName + ':';
        }
        if (el.theMeaningOfStyle) {
            s = s + el.theMeaningOfStyle + ';';
        }
    }
    document.write("<p style=\"" + s + "\">" + a + "</p>");
}
outputTextWithStyles(styleCss, 'Большинство шрифтов имеют разнообразные стили в пределах одного и того же шрифтового семейства. Обычно это жирный стиль (bold) или курсив (italic), часто встречается также стиль "жирный курсив" (bold italic), реже — капитель (малые прописные буквы — small-caps), а в ряде случаев — экстра-светлые/экстра-жирные или растянутые/сжатые версии.');
document.write("<p>========================================================================================</p>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 4</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0438. \u041E\u0431\u044A\u0435\u043A\u0442-\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 (\u043E\u0442 10 \u0434\u043E 20) \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043D\u0430 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0438\u043C.<br>\n1 \u0412\u044B\u0432\u043E\u0434 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0432\u0441\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439.<br>\n2 \u0412\u044B\u0432\u043E\u0434 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430.<br>\n3 \u0412\u044B\u0432\u043E\u0434 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B. \u041E\u0431\u044A\u0435\u043A\u0442-\u0433\u0440\u0443\u043F\u043F\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430.<br>\n4 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442.<br>\n5 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E (\u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443).<br></p>");
var listOfAuditors = [
    {
        name: 'физика',
        number_of_assholes: 15,
        faculty: 'физмат'
    },
    {
        name: 'математика',
        number_of_assholes: 18,
        faculty: 'физмат'
    },
    {
        name: 'веб-дизайн',
        number_of_assholes: 20,
        faculty: 'информатика'
    },
    {
        name: 'дата-разработчик',
        number_of_assholes: 17,
        faculty: 'информатика'
    },
    {
        name: 'вяжущие',
        number_of_assholes: 12,
        faculty: 'строймат'
    },
    {
        name: 'блочные',
        number_of_assholes: 19,
        faculty: 'строймат'
    },
];
var group = [
    {
        title: 'веб-дизайн',
        livestock: 14,
        faculty: 'информатика'
    }
];
document.write("<p>1 \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439.</p>");
function listOfAudiences(arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var el = arr_2[_i];
        document.write("<h3>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438: " + el.name + "</h3><p>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u0441\u0442: " + el.number_of_assholes + "</p><p> \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u043A \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0443: " + el.faculty + "</p>");
    }
}
listOfAudiences(listOfAuditors);
document.write("<hr>");
var nameFacult = 'строймат';
document.write("<p>1 \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430. (<b>" + nameFacult + "</b>)</p>");
var a = [];
a = listOfAuditors.filter(function (el) { return el.faculty == nameFacult; });
listOfAudiences(a);
document.write("<hr>");
document.write("<h2>\u0421\u043F\u0438\u0441\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B:</h2>");
function groupData(arr) {
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var el = arr_3[_i];
        document.write("<h3>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B: " + el.title + "</h3><p>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432: " + el.livestock + "</p><p> \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442: " + el.faculty + "</p>");
    }
}
groupData(group);
// let title 
// let livestock
// let faculty
// for (let el of group){
// }
var _a = group[0], title = _a.title, livestock = _a.livestock, faculty = _a.faculty;
console.log(faculty);
var t = [];
var n = [];
var f = [];
f = listOfAuditors.filter(function (el) { return el.faculty == faculty; });
n = listOfAuditors.filter(function (el) { return el.number_of_assholes >= livestock; });
t = listOfAuditors.filter(function (el) { return el.name == title; });
document.write("<h2>\u0421\u043F\u0438\u0441\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E</h2>");
listOfAudiences(t);
document.write("<h2>\u0421\u043F\u0438\u0441\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442</h2>");
listOfAudiences(n);
document.write("<h2>\u0421\u043F\u0438\u0441\u043A\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044E</h2>");
listOfAudiences(f);
document.write("<hr>");
listOfAuditors.sort(function (a, b) { return a.number_of_assholes - b.number_of_assholes; });
document.write("<p>1 \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442:</p>");
listOfAudiences(__spreadArrays(listOfAuditors));
document.write("<hr>");
listOfAuditors.sort(function (a, b) { return a.name.localeCompare(b.name); });
document.write("<p>1 \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443:</p>");
listOfAudiences(__spreadArrays(listOfAuditors));
// document.write (`<h3>Наименование аудитории: ${el.name}</h3><p>Количество посадочных мест: ${el.number_of_assholes}</p><p> Принадлежность к факультету: ${el.faculty}</p>`)
// facultyListOfAudiences (listOfAuditors,nameFacult)   
/*
document.write (`<p>${}</p>`)
<p style="font-size: 120%; font-family: monospace; color: #cd66cc">Пример текста</p>







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
/*
Задание 2
Реализовать класс, описывающий html элемент.
Класс HtmlElement должен содержать внутри себя:
■■ название тега;
■■ самозакрывающийся тег или нет;
■■ текстовое содержимое;
■■ массив атрибутов;
■■ массив стилей;
■■ массив вложенных таких же тегов;
2
Домашнее задание №4
■■ метод для установки атрибута;
■■ метод для установки стиля;
■■ метод для добавления вложенного элемента в конец теку-
щего элемента;
■■ метод для добавления вложенного элемента в начало те-
кущего элемента;
■■ метод getHtml(), который возвращает html код в виде
строки, включая html код вложенных элементов.
С помощью написанного класса реализовать следующий блок
и добавить его на страницу с помощью document.write().
*/
// class HtmlElement {
//     tag: string
//     single: boolean
//     text: string
//     atrs: string[] = []
//     styles: string[] = []
//     elements: HtmlElement[] = []
//     constructor(tag:string, single: boolean, text: string){
//       this.tag = tag
//       this.single = single
//       this.text = text
//     }
//     setAtr(atr: string) {
//       this.atrs.push(atr)
//     }
//     setStyle(style: string) {
//       this.styles.push(style)
//     }
//     appendElement(element: HtmlElement) {
//       this.elements.push(element)
//     }
//     prependElement(element: HtmlElement) {
//       this.elements.unshift(element)
//     }
//     getHtml() {
//       if (this.single) {
//         return `<${this.tag} ${this.atrs.join(' ')} value = '${this.text}'>`
//       } else {
//         const begin = `<${this.tag} ${this.atrs.join(' ')}>${this.text}`
//         const end = `</${this.tag}>`
//         return begin + this.elements.map(el=>el.getHtml()).join('') + end
//       }     
//     }
//   }
//   const imgElement = new HtmlElement('img', true, '')
//   imgElement.setAtr('style="width:100%"')
//   imgElement.setAtr('src="https://ecalc.ru/images/krug/radius.png"')
//   const pElement = new HtmlElement('p', false, 'вася')
//   const h3Element = new HtmlElement('h3', false, 'тормоз')
//   const divElement = new HtmlElement('div', false, '')
//   divElement.setAtr('style="width:300px; margin:10px"')
//   const wrapperElement = new HtmlElement('div', false, '')
//   wrapperElement.setAtr('id="wrapper"')
//   wrapperElement.setStyle('display: flex')
//   wrapperElement.setStyle('padding: 40px')
//   wrapperElement.setAtr(`style="${wrapperElement.styles.join(';')}"`)
//   wrapperElement.appendElement(divElement)
//   wrapperElement.appendElement(divElement)
//   divElement.appendElement(h3Element)
//   divElement.appendElement(imgElement)
//   divElement.appendElement(pElement)
//   console.log (wrapperElement.getHtml())
//   const divPrintElements = document.querySelector('.printElements')
//   if (divPrintElements) divPrintElements.innerHTML = wrapperElement.getHtml()
// /*
//   Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■■ название css класса;
// ■■ массив стилей;
// ■■ метод для установки стиля;
// ■■ метод для удаления стиля;
// ■■ метод getCss(), который возвращает css код в виде стро-
// ки.
// */
// class CssClass {
//   name: string
//   cssStyle: string [] = []
//   constructor (name: string){
//     this.name = name
//   }
//   addCssStyle (cssStyle) {
//     this.cssStyle.push(cssStyle)
//   }
//   deleteCssStyle (cssStyle) {
//     const id = this.cssStyle.findIndex((el) => { el == cssStyle })
//     if (id != -1) this.cssStyle.splice(id, 1)
//   }
//   getCss() {
//     return  `.${this.name} {${this.cssStyle.join(';')}};`
//   }
// }
// const wrapCssClass = new CssClass('wrap')
// wrapCssClass.addCssStyle('display:flex')
// console.log (wrapCssClass.getCss())
// const blockCssClass = new CssClass('block')
// blockCssClass.addCssStyle('width:300px')
// blockCssClass.addCssStyle(' margin:10px')
// console.log (blockCssClass.getCss())
// /*
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■■ коллекцию стилей, описанных с помощью класса CssClass;
// ■■ корневой элемент, описанный с помощью класса
// HtmlElement;
// ■■ метод getCode(), который возвращает строку с html ко-
// дом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
// С помощью написанных классов реализовать следующий блок
// (см. рис. 2) и добавить его на страницу с помощью document.write().*/
// class HtmlBlock {
//   ArrCss: string[] = []
//   HtmlElementBlock: any[] = []
//   constructor(ArrCss: string[]){
//     this.ArrCss = ArrCss
//    // this.HtmlElementBlock = HtmlElementBlock
//   }
//   addArrCss(object){
//     this.ArrCss.push(object)
//   }
//   getCode(){
//     return`<style>${this.ArrCss}</style>`
//   }
// }
// //const qwe = new HtmlBlock(blockCssClass.getCss())
// let storeReceipt = [
//   {
//       product_name: 'гайка',
//       quantity_of_goods: 20,
//       product_price: 7
//   },
//   {
//       product_name: 'шайба',
//       quantity_of_goods: 15,
//       product_price: 3
//   },
//   {
//       product_name: 'болт',
//       quantity_of_goods: 35,
//       product_price: 12
//   },
// ] as Record<string,any>[]
// storeReceipt.sort((a,b)=>a.product_name.localeCompare(b.product_name))
// console.log([...storeReceipt])
// storeReceipt.sort((a,b)=>a.quantity_of_goods-b.quantity_of_goods)
// console.log([...storeReceipt])
// storeReceipt.sort((a,b)=>a.product_price-b.product_price)
// console.log([...storeReceipt])
// console.log(storeReceipt.map((el)=>el.product_name).sort((a,b)=>a.localeCompare(b)))
// console.log(storeReceipt.map((el)=>{
//   return `${el.product_name} ${el.quantity_of_goods} штук по цене ${el.product_price} руб`
// }).sort((a,b)=>a.localeCompare(b)))
// const sumPrice = storeReceipt.reduce((a,el)=>a+=el.quantity_of_goods*el.product_price,0)
// console.log(sumPrice)
// const storeObject = storeReceipt.reduce((a,el)=>{
//   a[el.product_name]=el
//   return a
// },{} as any)
// console.log(storeObject)
