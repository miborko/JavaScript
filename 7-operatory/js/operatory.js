var liczba1 = 13;
var liczba2 = 6;


//console.log( liczba2 * liczba1 );
//console.log( liczba1 / liczba2 );
//console.log( liczba1 + liczba2 );
//console.log( liczba1 - liczba2 );
//console.log( liczba1 % liczba2 );
//
////liczba1++;
////console.log( liczba1 );
////liczba1--;
////console.log( liczba1 );
//
//console.log(liczba1++);
//console.log(++liczba1);

//console.log(liczba1 +=2); //liczba1 = liczba1 + 2
//console.log(liczba1 -=2); 
//console.log(liczba1 *=2); 
//console.log(liczba1 /=2); 

//var wynik = (liczba1 >= liczba2) ? "Liczba1 większa od liczba2" : "liczba1 mniejsza od liczba2";
//console.log(wynik);
//
//var wynik = (liczba1 == liczba2) ? "Liczba1 większa od liczba2" : "liczba1 mniejsza od liczba2";
//console.log(wynik);
//
//var wynik = (liczba1 != liczba2) ? "prawda" : "fałsz";
//console.log(wynik);



//operatory logiczen

//var pietro = 14;
//
//if( liczba1 > liczba2 && pietro == 14 ) {
//    console.log("Spełnione zostały dwa warunki, także TRUE");
//}

var pietro = 10;

if (liczba1 > liczba2 && pietro || 14) {
    console.log("Spełniony przynajmniej jeden z warunków");
}

if (liczba1 == liczba2) {
    console.log("Liczby są równe");
} else if (liczba1 < liczba2) {
    console.log("Liczba 1 większa od liczba2");
} else if (liczba1 == "Smog") {
    console.log("Liczba równa się smog");
} else {
    console.log("Kod który wykona się gdy żaden z warunków nie zostanie spełniony");
}