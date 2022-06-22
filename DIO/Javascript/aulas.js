
// MAPS 
const myMap = new Map ();

myMap.set('apple', 'fruit');

myMap.get('apple');
// apple = fruit

myMap.delete('apple');

myMap.get('apple');
// false

// SET
const mySet = new Set ();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);

//uso de funções e map
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Artur', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Pedro', 'Admin');

console.log(getAdmins(usuarios));

//uso de set
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

//uso de async e await
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;     
}

//apis
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://www.google.com.br', {
    method: 'GET',
    cache: 'no-cache',

})
    .then(response => response.json())
    .then(json => console.log(json))



