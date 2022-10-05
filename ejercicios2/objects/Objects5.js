elvis=new Object()


elvis.nombre="Elvis"
console.log(elvis)

jose={}

jose.casa=true

console.log(jose)

marcos=Object.create(jose)

console.log(marcos)




const hola = new Object();
const como = new Object(undefined);
const estas = new Object(null);

console.log(hola)
console.log(como)
console.log(estas)

