function Person(first,last,age,eyeColor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyeColor;
  
}
Person.prototype.getName = function () {
        return this.firstName + this.lastName
}
const father = new Person("Ram","Sharma",45,"blue");
console.log(father.getName())
const str = "Hello"


Object.prototype