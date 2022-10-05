//using es6 classes
class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
  }
    
let car1 = new Vehicle('GT', 'BMW', '1998cc');

console.log(Object.keys(car1))

console.log(car1.name);
console.log(car1)