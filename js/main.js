'use strict';


// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2); // devuelve 100,100
age = 200;
console.log(age, age2); // devuelve 200,100

/* En el 1º caso asignamos a age2 el valor de age, en el 2º caso age cambia de valor pero age2 no cambia */

let name = 'Gloria';
let name2 = name;
console.log(name, name2); // devuelve Gloria, Gloria
name = 'Javi';
console.log(name, name2); // devuelve Javi, Gloria

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;
console.log(players, team);

// You might think we can just do something like this:

team[3] = 'Lux';
console.log(players, team);

/* Con team hago una copia, pero hago una modificación en uno de ellos también se modifica el array inicial */

/* EXPLICACIÓN

however what happens when we update that array?
now here is the problem!
oh no - we have edited the original array too!
Why? It's because that is an array reference, not an array copy. They both point to the same array! */

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
team2[3] = 'gloria';
console.log (players, team2);

/* Con el método slice creamos una copia idéntica del otro array y si hacemos modificaciones en el segundo array, el array principal permanecerá intacto*/


// one way
// or create a new array and concat the old one in

const team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread

const team4 = [...players];
team4[3]= 'silvia';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'carlos';
console.log(players, team5);

/* Con estos métodos de ES6 tampoco se modifica el array inicial players */

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects

const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

const captain = person;
captain.number = 99;
console.log(person, captain);

/* Ocurre lo mismo que en caso anterior, se estan modificando ambos objetos */

// how do we take a copy instead?

const cap2 = Object.assign({}, person, { age: 12, height: 150});
console.log(person, cap2);



// We will hopefully soon see the object ...spread

// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
	name: 'wes',
	age: 100,
	social: {
		twitter: '@wesbos',
		facebook: 'wesbos.developer'
	}
}

const dev = Object.assign({}, wes);
dev.name = 'Wesley';
dev.social.twitter = '@gloriafercu';
console.log(wes, dev);

/* Con Object.assign hacemos una copia del objeto wes, si hacemos una modificación en su copia dev en una propiedad del primer nivel solo se modificará dev, sin embargo cuando hacemos una modificación en una propiedad de segundo nivel(social que es un nuevo objeto) se modifica en los dos objetos */

/* Para hacer una copia profunda de un objeto haríamos lo siguiente */

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@wesbos';
console.log(wes, dev2);


const names = ['Gloria', 'Javi', 'Ana'];
const names2 = names;
console.log(names, names2);
// devuelve names = ['Gloria', 'Javi', 'Ana']
//					names2 = ['Gloria', 'Javi', 'Ana']

names2[2] = 'Sergio';
console.log(names, names2);
// devuelve names = ['Gloria', 'Javi', 'Sergio']
//					names2 = ['Gloria', 'Javi', 'Sergio']

const name2 = names.slice();
names2[2] = 'Sergio';
console.log(names, names2);
// devuelve names = ['Gloria', 'Javi', 'Ana']
//					names2 = ['Gloria', 'Javi', 'Sergio']

const names = {
	name: 'Gloria',
	surname: 'Fernandez'
}
const names2 = names;
console.log(names, names2); // son copias exactas

names2.surname = 'Pérez';
console.log(names, names2);
/* devuelve const names = {
										name: 'Gloria',
										surname: 'Pérez'
									}
		devuelve const names2 = {
											name: 'Gloria',
											surname: 'Pérez'
										}
*/

const names2 = Object.assign({}, names);
names2.surname = 'Pérez';
console.log(names, names2);
/* devuelve const names = {
										name: 'Gloria',
										surname: 'Fernández'
									}
		devuelve const names2 = {
											name: 'Gloria',
											surname: 'Pérez'
										}
*/

const names = {
	name: 'Gloria',
	surname: 'Fernandez'
	social: {
		twitter: '@bichito',
		facebook: 'bichito2015'
	}
}
const names2 = JSON.parse(JSON.stringify(names));
names2.social.facebook = 'zarpitas';
console.log(names, names2);
/* devuelve const names = {
										name: 'Gloria',
										surname: 'Fernández'
										social: {
											twitter: '@bichito',
											facebook: 'bichito2015'
											}
										}
		devuelve const names2 = {
											name: 'Gloria',
											surname: 'Pérez'
											social: {
												twitter: '@bichito',
												facebook: 'zarpitas'
												}
											}
*/
