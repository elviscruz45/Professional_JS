/*const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  //const unboundGetX = module.getX;
  //console.log(unboundGetX()); 

*/


let person = {
    names: 'John Dosse',
    getName:function() {
        console.log(this.names);
    }
};
setTimeout(person.getName, 1000)

