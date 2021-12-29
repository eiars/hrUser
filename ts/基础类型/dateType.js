var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 布尔型
var isDone = false;
isDone = true;
// 数值
var a = 10;
var b = 10;
var c = 10;
var d = 0xa;
// 字符串
var name1 = 'tom';
name1 = 'jack';
var age = 12;
var info = "My name is ".concat(name1, ", I am ").concat(age, " years old!");
// undefined和null
var u = undefined;
var n = null;
// 数组
var list1 = [1, 2, 3];
var list2 = [11, 22, 33];
// 元组Tuple(数组中元素类型可不同的数组)
var t1;
t1 = ['hello', 10];
// t1 = [10, 'hello'] err
console.log(t1[0].substring(1));
// 枚举enum(一组数值赋值key，然后根据key快速获取对应值)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Gray"] = 3] = "Gray";
})(Color || (Color = {}));
// 枚举数值默认从0开始依次递增，可根据特定名称得到对应枚举数值
var myColor = Color.Green;
console.log(myColor, Color.Red, Color.Green, Color.Blue, Color.Gray);
// 枚举可对元素进行赋值(赋值可为字符串)
var Color1;
(function (Color1) {
    Color1[Color1["Read"] = 1] = "Read";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var Color2;
(function (Color2) {
    Color2["Read"] = "id";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color1, Color1.Read); // { '1': 'Read','2': 'Green','4': 'Blue',Read: 1,Green: 2,Blue: 4 } 1
console.log(Color2, Color2.Read); // { '2': 'Green', '4': 'Blue', Read: 'id', Green: 2, Blue: 4 } 'id'
console.log(Color[0], Color1[1], Color2['id']); // Red Read undefined
// any(任何类型)
var notSure = 4;
notSure = 'naybe a string';
notSure = false;
var anyList = [1, true, 'free'];
anyList[1] = 100;
console.log(notSure, anyList);
// void (没有任何类型，例当函数没有返回值，其返回的就是void类型)
function fn() {
    console.log('fn()');
    // return undefined //undefined
    // return null // null
    // return 1 // error
}
console.log(fn());
// object
function fn2(obj) {
    console.log('fn2()', obj);
    // return undefined // undefined
    // return null // null
    // return {} // {}
    // return 1 // error
    return obj; //[String: 'abc']
}
// console.log(fn2(new String('abc')))
// console.log(fn2('abc')) // error
console.log(fn2(String)); // [Function: String]
// 联合类型Union Types(可以是多种类型中的一种)
function toString2(x) {
    return x.toString();
}
function getLength(x) {
    // if (x.length) {
    // return x.length //error
    // } else {
    return x.toString().length;
    // }
}
// 类型断言 尖括号、as,tsx中只能用as （编译阶段生效，运行时不影响）
function getLength2(x) {
    if (x.length) {
        console.log(typeof (x));
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
console.log(getLength2('ere'));
// 类型推断
// 定义时赋值了，推断为对应类型
var b9 = 123;
console.log(typeof (b9));
// 定义变量时没有赋值，推断为any型
var b10;
console.log(typeof (b10));
b10 = 123;
console.log(typeof (b10));
b10 = '1bc';
console.log(typeof (b10));
var person1 = {
    id: 1,
    name: 'tom',
    age: 20
};
// person1.id = 2 // error
console.log(person1);
var mySearch = function (source, sub) {
    return source.search(sub) > -1;
};
console.log(mySearch('abcd', 'bc'));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
console.log(Car);
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.alert = function () {
        console.log('Car alert');
    };
    Car2.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car2.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car2;
}());
var car2test = new Car2();
car2test.alert();
car2test.lightOn();
car2test.lightOff();
// 类
// 类的定义与使用
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello ".concat(this.message);
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
// 继承
// 类的继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function (distance) {
        console.log("Animal run ".concat(distance, "m"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.cry = function () {
        console.log('wang wang!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.run(2);
dog.cry();
console.log('------------------------');
// ------------------------
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.run = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " run ").concat(distance, "m"));
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.run = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('sliding……');
        _super.prototype.run.call(this, distance);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.run = function (distance) {
        if (distance === void 0) { distance = 50; }
        console.log('dashing……');
        _super.prototype.run.call(this, distance);
    };
    Horse.prototype.xxx = function () {
        console.log('xxx()');
    };
    return Horse;
}(Animal1));
var snake = new Snake('sn');
snake.run();
var horse = new Horse('ho');
horse.run();
// 父类型引用指向子类型的实例 ==> 多态
var tom = new Horse('ho22');
tom.run();
// 子类型引用指向父类型的实例
var tom3 = new Animal1('tom3');
tom3.run();
// 函数
// 命名函数
function add1(x, y) {
    return x + y;
}
// 匿名函数
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(1, 2));
var myAdd2 = function (x, y) {
    return x + y;
};
console.log(2, 3);
// 使用?实现可选参数
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'A'; }
    if (lastName) {
        return firstName + '-' + lastName;
    }
    else {
        return firstName;
    }
}
console.log(buildName('C', 'D'));
console.log(buildName('c'));
console.log(buildName());
// 剩余参数（typeScript里，把所有参数收集到一个变量里，剩余参与被当作个数不限的可选参数）
function info1(x) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(x, args);
}
info1('abc', 'c', 'b', 'a');
function add3(x, y) {
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
    else if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
}
console.log(add3(1, 2));
console.log(add3('a', 'b'));
// console.log(add3(1, 'a')) // error
// 泛型 (定义时不指定类型，使用时再指定类型)
function createArray(value, count) {
    var arr = [];
    for (var index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
var arr1 = createArray(11, 3);
var arr2 = createArray('aa', 3);
console.log(arr1, '-arr1-', arr1[0].toFixed(), arr2, '-arr2-', arr2[0].split(''));
//使用函数泛型
function createArray2(value, count) {
    var arr = [];
    for (var index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
var arr3 = createArray2(11, 3);
console.log(arr3[0].toFixed());
// console.log(arr3[0].split('')) // error
var arr4 = createArray2('aa', 3);
console.log(arr4[0].split(''));
// console.log(arr4[0].toFixed())
function swap(a, b) {
    return [a, b];
}
var result = swap('abc', 123);
console.log(result[0].length, result[1].toFixed());
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    return User1;
}());
var UserCRUD = /** @class */ (function () {
    function UserCRUD() {
        this.data = [];
    }
    UserCRUD.prototype.add = function (user) {
        user = __assign(__assign({}, user), { id: Date.now() });
        this.data.push(user);
        console.log('保存user', user.id);
    };
    UserCRUD.prototype.getById = function (id) {
        console.log(this.data);
        // return this.data.find(item => item.id === id)
        return this.data[0];
    };
    return UserCRUD;
}());
var userCRUD = new UserCRUD();
userCRUD.add(new User1('tom', 12));
userCRUD.add(new User1('tom2', 13));
console.log(userCRUD.data);
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var myGenericString = new GenericNumber();
myGenericString.zeroValue = 'abc';
myGenericString.add = function (x, y) {
    return x + y;
};
console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12));
// 泛型约束
// 没约束的泛型
function fny(x) {
    // console.log(x.length)  //error
}
function fny2(x) {
    console.log(x.length);
}
fny2('BC');
// 内置对象(全局作用域上存在的对象，ECMAScript内置对象、BOM/DOM内置对象)
// 1、MCMAScript内置对象
var b1 = new Boolean(1);
var n1 = new Number(true);
var s1 = new String('abc');
var d1 = new Date();
var r = /^1/;
var e = new Error('error message');
b1 = true;
// let bb: boolean = new Boolean(2)  // error
// 2、BOM和DOM内置对象
console.log(document);
// const div: HTMLElement = document.getElementById('test')
// const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function (event) {
    console.dir(event.target);
});
// const fragment: DocumentFragment = document.createDocumentFragment()
// console.log(div, '--div--', divs,'---divs---', fragment)
