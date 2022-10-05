//CREATING AN OBJECT USING OBJECT.CREATE()

const coder={
    isStudying:false,
    printIntroduction:function(){
        console.log(`My name is ${this.name}. Am I studying ${this.isStudying}`)
    }
}


const me=Object.create(coder)
me.name="Elvis"
console.log(me)
console.log(me.isStudying)
console.log(me.printIntroduction())