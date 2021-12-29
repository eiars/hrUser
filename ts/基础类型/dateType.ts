// 布尔型
let isDone: boolean = false
isDone = true

// 数值
let a:number = 10
let b:number = 0b1010
let c:number = 0o12
let d:number = 0xa

// 字符串
let name1: string = 'tom'
name1 = 'jack'
let age:number = 12
const info = `My name is ${name1}, I am ${age} years old!`

// undefined和null
let u:undefined = undefined
let n: null = null

// 数组
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [11, 22, 33]

// 元组Tuple(数组中元素类型可不同的数组)
let t1: [string, number]
t1 = ['hello', 10]
// t1 = [10, 'hello'] err
console.log(t1[0].substring(1))

// 枚举enum(一组数值赋值key，然后根据key快速获取对应值)
enum Color {Red, Green, Blue, Gray}
// 枚举数值默认从0开始依次递增，可根据特定名称得到对应枚举数值
let myColor: Color = Color.Green
console.log(myColor, Color.Red, Color.Green, Color.Blue, Color.Gray)
// 枚举可对元素进行赋值(赋值可为字符串)
enum Color1 {Read = 1, Green = 2, Blue = 4}
enum Color2 {Read = 'id', Green = 2, Blue = 4}
console.log(Color1, Color1.Read) // { '1': 'Read','2': 'Green','4': 'Blue',Read: 1,Green: 2,Blue: 4 } 1
console.log(Color2, Color2.Read) // { '2': 'Green', '4': 'Blue', Read: 'id', Green: 2, Blue: 4 } 'id'
console.log(Color[0], Color1[1], Color2['id']) // Red Read undefined

// any(任何类型)
let notSure:any = 4
notSure = 'naybe a string'
notSure = false
let anyList: any[] = [1, true, 'free']
anyList[1] = 100
console.log(notSure, anyList)

// void (没有任何类型，例当函数没有返回值，其返回的就是void类型)
function fn(): void {
  console.log('fn()')
  // return undefined //undefined
  // return null // null
  // return 1 // error
}
console.log(fn())

// object
function fn2(obj: object):object {
  console.log('fn2()', obj)
  // return undefined // undefined
  // return null // null
  // return {} // {}
  // return 1 // error
  return obj //[String: 'abc']
}
// console.log(fn2(new String('abc')))
// console.log(fn2('abc')) // error
console.log(fn2(String)) // [Function: String]


// 联合类型Union Types(可以是多种类型中的一种)
function toString2(x: number | string): string {
  return x.toString()
}
function getLength(x: number | string) {
  // if (x.length) {
    // return x.length //error
  // } else {
    return x.toString().length
  // }
}

// 类型断言 尖括号、as,tsx中只能用as （编译阶段生效，运行时不影响）
function getLength2(x: number | string) {
  if ((<string>x).length) {
    console.log(typeof(x))
    return (<string>x).length
  } else {
    return x.toString().length
  }
}
console.log(getLength2('ere'))

// 类型推断
// 定义时赋值了，推断为对应类型
let b9 = 123
console.log(typeof(b9))
// 定义变量时没有赋值，推断为any型
let b10
console.log(typeof(b10))
b10 = 123
console.log(typeof(b10))
b10 = '1bc'
console.log(typeof(b10))


// 接口 （对象属性和方法的抽象）
// 接口类型的对象
// 多了或少了属性不允许
// 可选属性：?
// 只读属性: readonly
interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}
const person1: IPerson = {
  id: 1,
  name: 'tom',
  age: 20,
  // sex: '男'
  // xxx: 12 // error 接口中未定义不能有
}
// person1.id = 2 // error
console.log(person1)

// 函数类型
// 接口描述函数类型（入参数的类型与返回出参的类型）
interface SearchFunc {
  (source: string, substring: string): boolean
}
const mySearch: SearchFunc = function(source: string, sub: string): boolean {
  return source.search(sub) > -1
}
console.log(mySearch('abcd', 'bc'))

// 类实现接口
// 1、一个类可以实现多个接口
// 2、一个接口可以继承多个接口
interface Alarm {
  alert(): any
}
interface Light {
  lightOn(): void
  lightOff(): void
}
class Car implements Alarm {
  alert() {
      console.log('Car alert')
  }
}
console.log(Car)

class Car2 implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}
let car2test = new Car2()
car2test.alert()
car2test.lightOn()
car2test.lightOff()
// 接口继承接口
interface LightableAlarm extends Alarm, Light {}

// 类
// 类的定义与使用
class Greeter {
  message: string
  constructor(message: string) {
    this.message = message
  }
  greet(): string {
    return `Hello ${this.message}`
  }
}
const greeter = new Greeter('world')
console.log(greeter.greet())

// 继承
// 类的继承
class Animal {
  run(distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}
class Dog extends Animal {
  cry() {
    console.log('wang wang!')
  }
}
const dog = new Dog()
dog.run(2)
dog.cry()
console.log('------------------------')
// ------------------------
class Animal1 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run(distance: number = 0) {
    console.log(`${this.name} run ${distance}m`)
  }
}
class Snake extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  run(distance: number = 5) {
    console.log('sliding……')
    super.run(distance)
  }
}
class Horse extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  run(distance: number = 50) {
    console.log('dashing……')
    super.run(distance)
  }
  xxx() {
    console.log('xxx()')
  }
}
const snake = new Snake('sn')
snake.run()
const horse = new Horse('ho')
horse.run()
// 父类型引用指向子类型的实例 ==> 多态
const tom: Animal1 = new Horse('ho22')
tom.run()
// 子类型引用指向父类型的实例
const tom3: Snake = new Animal1('tom3')
tom3.run()


// 函数
// 命名函数
function add1(x: number, y: number): number {
  return x + y
}
// 匿名函数
let myAdd = function(x: number, y: number): number {
  return x + y
}
console.log(myAdd(1, 2))
let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}
console.log(2, 3)


// 使用?实现可选参数
function buildName(firstName: string = 'A', lastName?: string): string {
  if (lastName) {
    return firstName + '-' + lastName
  } else {
    return firstName
  }
}
console.log(buildName('C', 'D'))
console.log(buildName('c'))
console.log(buildName())
// 剩余参数（typeScript里，把所有参数收集到一个变量里，剩余参与被当作个数不限的可选参数）
function info1(x: string, ...args: string[]) {
  console.log(x, args)
}
info1('abc', 'c', 'b', 'a')
//函数重载（函数名相同，形参不同的多个函数）
function add3(x: string, y: string): string
function add3(x: number, y: number): number
function add3(x: string | number, y: string | number): string | number {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}
console.log(add3(1, 2))
console.log(add3('a', 'b'))
// console.log(add3(1, 'a')) // error


// 泛型 (定义时不指定类型，使用时再指定类型)
function createArray(value: any, count: number): any[] {
  const arr: any[] = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}
const arr1 = createArray(11, 3)
const arr2 = createArray('aa', 3)
console.log(arr1, '-arr1-', arr1[0].toFixed(), arr2, '-arr2-', arr2[0].split(''))
//使用函数泛型
function createArray2<T>(value: T, count: number) {
  const arr: Array<T> = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed())
function swap<K, V>(a: K, b: V): [K, V] {
  return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log(result[0].length, result[1].toFixed())
// 泛型接口
interface IbaseCRUD<T> {
  data: T[]
  add: (t: T) => void
  getById: (id: number) => T
}
class User1 {
  id?: number
  name: string
  age: number
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
class UserCRUD implements IbaseCRUD<User1> {
  data: User1[] = []
  add(user: User1): void {
    user = { ...user, id: Date.now()}
    this.data.push(user)
    console.log('保存user', user.id)
  }
  getById(id: number): User1 {
    console.log(this.data)
    // return this.data.find(item => item.id === id)
    return this.data[0]
  }
}
const userCRUD = new UserCRUD()
userCRUD.add(new User1('tom', 12))
userCRUD.add(new User1('tom2', 13))
console.log(userCRUD.data)
// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}
let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = 'abc'
myGenericString.add = function(x, y) {
  return x + y
}
console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
// 泛型约束
// 没约束的泛型
function fny<T>(x: T): void {
  // console.log(x.length)  //error
}
// 使用泛型约束
interface Lengthwise {
  length: number
}
function fny2<T extends Lengthwise>(x: T): void {
  console.log(x.length)
}
fny2('BC')
// fny2(123) //error number没有length熟悉

// 声明文件
// declare var定义类型，不会真实定义一个变量，在编译结果中会被删除
// 声明文件一般是xxx.d.ts文件
declare var jQuery: (selector: string) => any
// 内置对象(全局作用域上存在的对象，ECMAScript内置对象、BOM/DOM内置对象)
// 1、MCMAScript内置对象
let b1: Boolean = new Boolean(1)
let n1: Number = new Number(true)
let s1: String = new String('abc')
let d1: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b1 = true
// let bb: boolean = new Boolean(2)  // error
// 2、BOM和DOM内置对象
// console.log(document)
// const div: HTMLElement = document.getElementById('test')
// const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
// const fragment: DocumentFragment = document.createDocumentFragment()
// console.log(div, '--div--', divs,'---divs---', fragment)

