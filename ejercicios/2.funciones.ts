//functions

function add(a:number,b:number):number{
    return a+b
}
const sum=add(4,5)
console.log(sum)

function createAdder(a:number):(number)=>number{
    return function(b:number){
        return a+b
    }
}

const addFour=createAdder(4)
const fourPlus6=addFour(6)
console.log(fourPlus6)

function fullName(firstName?:string,lastName:string="Smith"):string{
    return `${firstName} ${lastName}`;
}

const richard=fullName()
console.log(richard)