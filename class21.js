class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn ){
        var { nombre, apellido } = this
        console.log(`Hola soy ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola soy ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, isDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (isDev) {
        console.log('Ah no sabia que eras desarrollador')
    }
}

var abe = new Persona('Abelardo', 'Salazar', 1.78)
var kaen = new Persona('Kaendry','Betancourt', 1.55)
var pao = new  Desarrollador('Paola', 'Lucena', 23)

abe.saludar(responderSaludo)
kaen.saludar(responderSaludo)
pao.saludar(responderSaludo)