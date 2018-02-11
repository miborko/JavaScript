class Ogloszenie{
    constructor(tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    
    wyswietlOgłoszenie() {
        console.log( "Ogłoszenie: Tytuł: " + this.tytul + " " + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this.cena );
    }
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Świeżynka prosto od 80letniego Niemca", "656-666-511", 10000 );
ogloszenie1.wyswietlOgłoszenie();

var ogloszenie2 = new Ogloszenie( "Sprzedam audi", "Licznik nie cofany", "8411323489489", 215000);
ogloszenie2.wyswietlOgłoszenie();

console.log( typeof ogloszenie1 );