var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

//console.log( imiona[2] );

console.log(imiona);

imiona[5] = "Monika";
imiona[6] = "Marcin";
imiona[2] = "Adam";

console.log(imiona);

//push dodaje elementy na konczu tablicy i z automatu przypisze kolejny indeks

imiona.push("Mikołaj", "Michał");
console.log(imiona);

//pop usuwa ostatni element tablicy

var usunietyElement = imiona.pop();

console.log(imiona);

// wstawienie elementu na poczatku tablicy

imiona.unshift("Kasia", "Michał");

console.log(imiona);

//usuwanie elementu z poczatku tablicy

imiona.shift();

console.log(imiona);

//sprawdzanie ilosci elementow tablicy

console.log(imiona.length);

//rozbijanie tablicy na ciag tekstowy

//var tablicaJakoTekst = imiona.join("-----");
//console.log(tablicaJakoTekst);

//odwracanie tablicy

var imionaReverse = imiona.reverse();
console.log(imionaReverse);

//sortowanie tablicy

var posortowana = imiona.sort();
console.log(posortowana);