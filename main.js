// Структура деструктуризации в конструкторе:
/* class Scroll {
    constructor({element1, element2}) {} 
    }
let myScroll = new Scroll({
    element1: blabla,
    element2: 100 
}) */

// window.innerHeight - показывает высоту экрана
// window.innerWidth -  показывает ширину экрана

//(с.15) -instanceof - проверяет есть ли такой элемент в чем то, в данном случае: есть ли element в HTML-документе
//(c.23) window.addEventListener('scroll', () => ) // -scroll - событие, когда прокручиваешь(скроллишь) сайт 
//(c.27) -scrollY - отдает расстояние в px прокрученное(проскроленное) от верхней части скрола

//(c.51)__.clientHeight - встроенный ключ, выдает высоту элемента




class Scroll {
    constructor({element, top, unit}) { // -сделали деструктуризацию: constructor({__})
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) {  // -instanceof - проверяет есть ли такой элемент в чем то, в данном случае: есть ли element в HTML-документе
            this.el = element
        }
        this.range = top
        this.unit = unit
        this.el.style.position = 'fixed' // -зафиксировали панель
        this.el.style.top = this.checkUnit() + 'px' // -добавили для панели отступ сверху 100px 
        
        window.addEventListener('scroll', () => this.move()) // -scroll - событие: когда прокручиваешь(скроллишь) сайт 
        window.addEventListener('resize', () => this.move()) // -resize - событие: чтобы расположение элемента само подстраивалось, если меняется размер экрана(сайта) 
    }
    move() {
        // -scrollY - отдает расстояние в px прокрученное(проскроленное) от верхней части скрола
        this.pxOrPer = this.checkUnit()
        
        // закрепляем нашу панель сверху:
        if(this.pxOrPer - scrollY > 0) { // -для положительных чисел
            this.el.style.top = this.pxOrPer - scrollY + 'px'
        }else { // -для отрицательных чисел
            this.el.style.top = 0
        }
    }
    checkUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0 
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.el.clientHeight //- __.clientHeight - встроенный ключ, выдает высоту элемента
        }
    }
}

let nav = document.querySelector('.header__nav')
let myScroll = new Scroll({
    element: nav,
    top: 100
})

class Hover{
    constructor(el) {
        this.block = document.querySelector(el)
        this.block.addEventListener('mouseover', () => this.move())
    }
    move() {
        this.block.style.position = 'absolute'
        this.lee = document.querySelector('.header__nav')
        this.el = document.querySelector('.header')
        this.kel = document.querySelector('.header__content')
        this.top = this.el.clientHeight - this.kel.clientHeight - this.lee.clientHeight
        this.left = this.el.clientWidth - this.kel.clientWidth
        this.block.style.top = rand(0, this.top)+'px'
        this.block.style.left = rand(0, this.left)+'px'
        
    }
}
function rand(min, max) {
    return Math.floor(Math.random() * (max +1 - min) + min)
}

let element = new Hover('.header__content')
