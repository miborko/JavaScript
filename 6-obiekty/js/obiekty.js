var imie = "Czesław";

var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function( parametrImie ) {
        this.imie = (parametrImie);
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);
//console.log(osoba["nazwisko"]);

osoba.wyswietlSzczegoly("Wojciech");

//dodawanie wlasciwosci

osoba.wiek = 36;
//console.log(osoba.wiek);
osoba.wyswietlWiek = function() {
    console.log(this.wiek);
}

osoba.wyswietlWiek();









