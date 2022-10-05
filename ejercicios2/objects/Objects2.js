//USING OBJECTS LITERALS


let car={
    name:"GT",
    marks:"BMW",
    engine:"1998cc",
    start: function(){
        console.log("we starting engine")
    }
}

car.stop=function(){
    console.log("Applying breakes")
}

car.breaktype="allDisc"

console.log(car)