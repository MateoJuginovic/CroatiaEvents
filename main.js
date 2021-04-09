function Event(naziv, opis, datum, vrijeme, grad, adresa, vrsta){
    this.naziv = naziv;
    this.opis = opis;
    this.datum = datum;
    this.vrijeme = vrijeme;
    this.grad = grad;
    this.adresa = adresa;
    this.vrsta = vrsta;
    this.ispis = function(){
        console.log(this.naziv + " " + this.opis + " " + this.datum + " " + this.vrijeme + " " + this.grad + " " + this.adresa + " " + this.vrsta);
    }
}

function unos(){
    let naziv = document.getElementById("nazivUnos").value;
    let opis = document.getElementById("opisUnos");
    let datum = document.getElementById("datumUnos");
    let vrijeme = document.getElementById("vrijemeUnos");
    let grad = document.getElementById("gradUnos");
    let adresa = document.getElementById("adresaUnos");
    let vrsta = document.getElementById("vrstaUnos");
    
    event1 = new Event(naziv, opis, datum, vrijeme, grad, adresa, vrsta);
    
    event1.ispis();
}