//USING CONSTRUCTORS
function vehicle(name,marker,engine){
    this.name=name
    this.marker=marker
    this.engine=engine
}

let car=new vehicle("Gt","BMW","1998cc")


car.breaktype="allDiss"

console.log(car)