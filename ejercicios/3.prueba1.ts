import { Console } from "console"

//boolean
let muted:boolean
muted=false

// Numeros

let age=6
let numerador:number=42
let denominador:number=age
let resultado=numerador/denominador

// string

let nombre:string="Richard"
let saludo=`me llamo ${nombre}`


//Arreglos

let people:string[]=[]
people=["Isabel","Nicole"]

people.push("9000")

let peopleAndNumbers:Array<string|number>=[]

peopleAndNumbers.push(91023)
peopleAndNumbers.push("Ricardo")

//Enum

enum Color{
    Rojo="Rojo",
    Verde="Verde",
    Azul="Azul",
}

let colorFavorito:Color=Color.Azul

console.log(colorFavorito)

//Any
let comodin:any="Joker";
comodin={type:"Wildcard"}

//Object
let someObject:object={type:"WildCard"}