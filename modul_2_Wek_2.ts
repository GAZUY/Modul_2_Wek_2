document.write (`<p>Задание 1</p>`)
document.write (`<p>Создать массив «Список покупок». Каждый элемент массива является объектом, 
который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом.</p>`)
document.write (`<p>1 Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.</p>`)

const shoppingList: any[] = [
    {
        name1: 'yab',
        quantity: 5,
        condition: 'yes',
    },
    {
        name1: 'myaso',
        quantity: 10,
        condition: 'yes',
    },
    {
        name1: 'vodka',
        quantity: 20,
        condition: 'no',
    },
    {
        name1: 'stakan',
        quantity: 3,
        condition:'no',
    }
] 
document.write (`<p>Данный список покупок</p>`)
document.write (`<p>${JSON.stringify(shoppingList)}</p>`)
function printShoppingList (arr = []){
    let a = []
    for (let i = 0; i < arr.length; i++ ){
        // @ts-ignore
        if (arr[i].condition === 'no'){
            a.unshift(arr[i])
        }else{
            a.push(arr[i])
        }
    }
    return a
}
document.write (`<p>Список покупок с некупленным товаром в начале</p>`)
// @ts-ignore
document.write (`<p>${JSON.stringify(printShoppingList (shoppingList))}</p>`)
document.write (`<hr>`)

document.write (`<p>2 Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую.</p>`)
const name1 = 'vodka'
const quantity = 5
document.write (`<p>Добавим продукт "${name1}" в колличестве: ${quantity}</p>`)

function addShoppingList(n,q) {
    let find = false
  for (let el of shoppingList) {
    if (el.name1 === n) {
      find = true
      el.quantity += q
    }
  }
  if (!find) {
    shoppingList.push({
      name1,
      quantity,
      condition: 'no'
    })
  }
  return shoppingList
}
document.write (`<p>${JSON.stringify(addShoppingList(name1,quantity))}</p>`)
document.write (`<hr>`)
document.write (`<p>3 Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.</p>`)
document.write (`<p>Купим продукт "${name1}" и отметим его</p>`)
function weCelebrateThePurchase (n) {
    for (let el of shoppingList) {
        if (el.name1 === n) {
            el.condition = 'yes'
        }
      }

    return shoppingList
}
document.write (`<p>${JSON.stringify(weCelebrateThePurchase(name1))}</p>`)
document.write (`<p>========================================================================================</p>`)
document.write (`<p>Задание 2</p>`)
document.write (`<p>Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.</p>`)
const storeReceipt: any = [
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
]
document.write (`<p>1 Распечатка чека на экран.</p>`)
function wePrintTheReceipt (arr:any[]) {
    for (let el of arr) {
        document.write (`<p>Продукт: ${el.product_name} ____${el.quantity_of_goods} шт ____${el.product_price} за шт</p>`)
    }  
}
wePrintTheReceipt (storeReceipt)
document.write (`<hr>`)
document.write (`<p>2 Подсчет общей суммы покупки.</p>`)
function countingTheAmountOfTheCheck (arr:any[]){
    let a: number
    let sum: number = 0
    for (let el of arr) {
        a = + el.quantity_of_goods
        sum = sum + a * (+el.product_price)
    }
    return sum 

}
document.write (`<p>Общая сумма покупки составит: ${countingTheAmountOfTheCheck (storeReceipt)}</p>`)
document.write (`<hr>`)
document.write (`<p>3 Получение самой дорогой покупки в чеке.</p>`)
function theMostExpensivePurchase (arr:any[]) {
    let a: number
    let arr1: any = []
    for (let el of arr) {
        a = + el.quantity_of_goods
        arr1.push( a * (+el.product_price))
    }
    (arr1.sort(function (a, b) { return -a + b }))
    return arr1 [0]
  
}
document.write (`<p>Самая дорогая покупка:${theMostExpensivePurchase (storeReceipt)}</p>`)
document.write (`<hr>`)

document.write (`<p>4 Подсчет средней стоимости одного товара в чеке.</p>`)
function averageProductPrice (arr:any[]){
    let a: number
    let sum: number = 0
    for (let el of arr) {
        a = + el.quantity_of_goods
        sum = sum + a * (+el.product_price)
    }
    return Math.round(sum / arr.length )

}
document.write (`<p>Средняя стоимость товара составит: ${averageProductPrice (storeReceipt)}</p>`)











/*
document.write (`<p></p>`)






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

class HtmlElement {
    nameTag:string
    single: boolean
    text: string
    atrs: string[] = []
    styles: string[] = []
    elements: HtmlElement[]
    constructor(nameTag:string,single: boolean,text: string){
        this.nameTag = nameTag
        this.single = single
        this.text = text
    }
    setAtr(atr: string) {
        this.atrs.push (atr)
    }
    setStyle (style: string) {
        this.styles.push(style)
    }
    appendElement(element: HtmlElement){
        this.elements.push(element)
    }
    prependElement(element: HtmlElement){
        this.elements.unshift(element)
    }
    getHtml(){
        if(this.single) {
            return`<${this.nameTag} ${this.atrs.join(` `)}value="${this.text}">`
        }else{
            const begin = `<${this.nameTag} ${this.atrs.join(` `)}>${this.text}`
            const end = `</${this.nameTag}>`
            return begin +this.elements.map(el=>el.getHtml()).join('') + end

        }
    }
}
const imgElement = new HtmlElement('img', true, '')
const pElement = new HtmlElement ('p', false, 'dfjgkhh')
imgElement.setAtr('id="img"')
imgElement.setStyle('color:red')
imgElement.setStyle ('padding:10px')
imgElement.setStyle ('margin:10px')
imgElement.setAtr(`style="${imgElement.styles.join(';')}"`)
console.log(imgElement.getHtml())
pElement.appendElement(imgElement)
console.log(pElement.getHtml())

const wrapperEl = new HtmlElement ('div', false, '')