var liczba = 16.5;
var text = "Tadzio wiertełko";
var prawda = true;

console.log( typeof liczba );
console.log( typeof text );
console.log( typeof prawda );

var czyJestSmog = false;
if( czyJestSmog ) {
console.log("Jest smog"); 
} else
console.log("Nie ma smogu");

//typ number

var pensja = 4500;
var premia = 5/100;

var calkowitaPensja = ( pensja * premia) + pensja;
console.log(calkowitaPensja);

//typ string

var pensjaString = "4500";
var premiaString = "1200";

var calkowitaPensjaString = pensjaString + "in" + premiaString;
console.log(calkowitaPensjaString);

//typy specjalne

var zmiennaBezWartosci;
console.log(zmiennaBezWartosci);
//console.log(zmiennaKtoraNieIstnieje);

var zmiennaNull = null;
console.log(zmiennaNull);