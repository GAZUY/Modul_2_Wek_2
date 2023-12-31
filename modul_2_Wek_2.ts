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

document.write (`<p>========================================================================================</p>`)
document.write (`<p>Задание 3</p>`)
document.write (`<p>Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.</p>`)

const styleCss: any [] = [
  {
    styleName: 'color',
    theMeaningOfStyle: 'green',
  },
  {
    styleName: 'font-size',
    theMeaningOfStyle: '20',
  },
  {
    styleName: 'text-align',
    theMeaningOfStyle: 'center',
  },
  {
    styleName: 'text-decoration',
    theMeaningOfStyle: 'underline',
  },
  {
    styleName: 'font-family',
    theMeaningOfStyle: 'Trattatello, fantasy',
  },
]
function outputTextWithStyles (arr: any[],a:string) {
  let s: string = ''
  for (let el of arr){
    if (el.styleName){
      s = s + el.styleName +':'
    }
    if (el.theMeaningOfStyle){
      s = s + el.theMeaningOfStyle + ';'
    }
  }
  document.write (`<p style="${s}">${a}</p>`)
}
outputTextWithStyles(styleCss,'Большинство шрифтов имеют разнообразные стили в пределах одного и того же шрифтового семейства. Обычно это жирный стиль (bold) или курсив (italic), часто встречается также стиль "жирный курсив" (bold italic), реже — капитель (малые прописные буквы — small-caps), а в ряде случаев — экстра-светлые/экстра-жирные или растянутые/сжатые версии.')

document.write (`<p>========================================================================================</p>`)
document.write (`<p>Задание 4</p>`)
document.write (`<p>Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.<br>
1 Вывод на экран всех аудиторий.<br>
2 Вывод на экран аудиторий для указанного факультета.<br>
3 Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.<br>
4 Функция сортировки аудиторий по количеству мест.<br>
5 Функция сортировки аудиторий по названию (по алфавиту).<br></p>`)

const listOfAuditors: any[] = [
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
]
const group = {
  title: 'веб-дизайн',
  livestock: 14,
  faculty: 'информатика'
}

function listOfAudiences (arr:any[]) {
  document.write (`<p>1 Список аудиторий.</p>`)
  for (let el of arr) {
    document.write (`<h3>Наименование аудитории: ${el.name}</h3><p>Количество посадочных мест: ${el.number_of_assholes}</p><p> Принадлежность к факультету: ${el.faculty}</p>`)
  }  
  document.write (`<hr>`)
}
listOfAudiences (listOfAuditors)


let nameFacult: string = 'строймат'
document.write (`<p>1 Список аудиторий для указанного факультета. (<b>${nameFacult}</b>)</p>`)
let a: any = []
a = listOfAuditors.filter(function(el){return el.faculty == nameFacult})
listOfAudiences (a)



function groupData(group:any) {
  document.write (`<h2>Списки аудиторий для группы:</h2>`)
  document.write (`<h3>Наименование группы: ${group.title}</h3><p>Количество студентов: ${group.livestock}</p><p> Факультет: ${group.faculty}</p>`)
  document.write (`<hr>`)
  let audit = listOfAuditors.filter(function(el){return el.faculty == group.faculty && el.number_of_assholes >= group.livestock })
  listOfAudiences (audit)
}
groupData(group)
// let title 
// let livestock
// let faculty
// for (let el of group){
  
// }
let f = listOfAuditors.filter(function(el){return el.faculty == group.faculty })
let n = listOfAuditors.filter(function(el){return el.number_of_assholes >= group.livestock })
let t = listOfAuditors.filter(function(el){return el.name == group.title })
document.write (`<h2>Списки аудиторий для группы по названию</h2>`)
listOfAudiences (t)
document.write (`<h2>Списки аудиторий для группы по количеству мест</h2>`)
listOfAudiences (n)
document.write (`<h2>Списки аудиторий для группы по профилю</h2>`)
listOfAudiences (f)
document.write (`<hr>`)

listOfAuditors.sort((a,b)=>a.number_of_assholes-b.number_of_assholes)
document.write (`<p>1 Список аудиторий расположенный по количеству мест:</p>`)
listOfAudiences(listOfAuditors)
document.write (`<hr>`)

listOfAuditors.sort((a,b)=>a.name.localeCompare(b.name))
document.write (`<p>1 Список аудиторий расположенный по алфавиту:</p>`)
listOfAudiences(listOfAuditors)


 
  

  

  
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

/*
Задание
1
Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков.
*/
function makingStringStatistics (str: string) {
  
}
/*
2
Написать функцию, которая принимает двузначное число
и возвращает его в текстовом виде.
Например: 35 – тридцать пять, 89 – восемьдесят девять,
12 – двенадцать.
3
Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
4
Написать функцию, которая преобразует названия css-
стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, text-
align в textAlign.
5
Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.
6
Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.
7
Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.
8
Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.
9
Написать функцию, которая принимает строку и раздели-
тель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат:
“10”, “08”, “2020”.
Выполняя задание, не используйте функцию split().
10 Написать функцию вывода текста по заданному шаблону.
Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % ука-
зывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего
входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
8, 2020) должна вывести “Today is Monday 10.8.2020”.
*/