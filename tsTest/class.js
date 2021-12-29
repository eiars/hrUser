// interface Person {
//   firstName: string
// 	lastName: string
// }
// function greeter(person: Person) {
// 	return `Hello,${person.firstName} ${person.lastName}`
// }
// let user = {
// 	firstName: 'Yee',
// 	lastName: 'Huang'
// }
// console.log(greeter(user))
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello,".concat(person.firstName, " ").concat(person.lastName);
}
var user = new User('Yee', 'Huang');
console.log(greeter(user));
