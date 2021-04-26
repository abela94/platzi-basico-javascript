const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {

    return new Promise((resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
            .get(url,opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

function funError(id){
    console.log(`Sucedio un error al obtener al personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]

    var promises =  ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promises)
        console.log(personajes)
    } catch (id) {
        funError(id)
    }
}

obtenerPersonajes()

/* var promises =  ids.map(function(id) {
    return obtenerPersonaje(id)
}) */

/* obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .catch(onerror) */