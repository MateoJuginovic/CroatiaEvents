function Event(naziv, opis, datum, vrijeme, adresa, vrsta, brojac){
    this.naziv = naziv;
    this.opis = opis;
    this.datum = datum;
    this.vrijeme = vrijeme;
    this.adresa = adresa;
    this.vrsta = vrsta;
    this.brojac = 0;
    this.ispis = function(){
        console.log(this.naziv + " " + this.opis + " " + this.datum + " " + this.vrijeme+ " " + this.adresa + " " + this.vrsta + " " + this.brojac);
    }
}



let n = 1;
let niz = [];

function unos(){
  let naziv = document.getElementById("nazivUnos").value;
  let opis = document.getElementById("opisUnos").value;
  let datum = document.getElementById("datumUnos").value;
  let vrijeme = document.getElementById("vrijemeUnos").value;
  let adresa = document.getElementById("adresaUnos").value;
  let vrsta = document.getElementById("vrstaUnos").value;

  if(naziv != "" && opis != "" && datum != "" && vrijeme != "" && adresa != "" && vrsta != ""){
    let event = []

    event[n] = new Event(naziv, opis, datum, vrijeme, adresa, vrsta);
    
    event[n].ispis();

    niz.push(event[n]);

    n++;

    document.getElementById("sadrzaj").innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
      <div class="card" style="max-width:100%;">
          <img src="slika.png" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${naziv}</h5>
              <p class="card-text">${opis}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${vrsta}</li>
              <li class="list-group-item">${datum}</li>
              <li class="list-group-item">${vrijeme}</li>
              <li class="list-group-item">${adresa}</li>
              <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
          </ul>
      </div>
    </div>`;
    console.log(niz);
  }else{
    alert("Unesite sve potrebne podatke");
  }
}



//-----Filtriranje-----
let sadrzaj = document.getElementById("sadrzaj");

function filterKoncert(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    console.log(niz[index].vrsta);
    if(niz[index].vrsta == "Koncert"){
      
      document.getElementById("sadrzaj").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
              <img src="slika.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${niz[index].naziv}</h5>
                  <p class="card-text">${niz[index].opis}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${niz[index].vrsta}</li>
                  <li class="list-group-item">${niz[index].datum}</li>
                  <li class="list-group-item">${niz[index].vrijeme}</li>
                  <li class="list-group-item">${niz[index].adresa}</li>
                  <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
              </ul>
          </div>
        </div>`;
    }
  }
}

function filterProsvjed(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    console.log(niz[index].vrsta);
    if(niz[index].vrsta == "Prosvjed"){
      
      document.getElementById("sadrzaj").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
              <img src="slika.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${niz[index].naziv}</h5>
                  <p class="card-text">${niz[index].opis}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${niz[index].vrsta}</li>
                  <li class="list-group-item">${niz[index].datum}</li>
                  <li class="list-group-item">${niz[index].vrijeme}</li>
                  <li class="list-group-item">${niz[index].adresa}</li>
                  <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
              </ul>
          </div>
        </div>`;
    }
  }
}

function filterRadionica(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    console.log(niz[index].vrsta);
    if(niz[index].vrsta == "Radionica"){
      
      document.getElementById("sadrzaj").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
              <img src="slika.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${niz[index].naziv}</h5>
                  <p class="card-text">${niz[index].opis}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${niz[index].vrsta}</li>
                  <li class="list-group-item">${niz[index].datum}</li>
                  <li class="list-group-item">${niz[index].vrijeme}</li>
                  <li class="list-group-item">${niz[index].adresa}</li>
                  <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
              </ul>
          </div>
        </div>`;
    }
  }
}

function filterSajam(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    console.log(niz[index].vrsta);
    if(niz[index].vrsta == "Sajam"){
      
      document.getElementById("sadrzaj").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
              <img src="slika.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${niz[index].naziv}</h5>
                  <p class="card-text">${niz[index].opis}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${niz[index].vrsta}</li>
                  <li class="list-group-item">${niz[index].datum}</li>
                  <li class="list-group-item">${niz[index].vrijeme}</li>
                  <li class="list-group-item">${niz[index].adresa}</li>
                  <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
              </ul>
          </div>
        </div>`;
    }
  }
}

function filterOstalo(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    console.log(niz[index].vrsta);
    if(niz[index].vrsta == "Ostalo"){
      
      document.getElementById("sadrzaj").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
              <img src="slika.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${niz[index].naziv}</h5>
                  <p class="card-text">${niz[index].opis}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${niz[index].vrsta}</li>
                  <li class="list-group-item">${niz[index].datum}</li>
                  <li class="list-group-item">${niz[index].vrijeme}</li>
                  <li class="list-group-item">${niz[index].adresa}</li>
                  <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
              </ul>
          </div>
        </div>`;
    }
  }
}

function filterSve(){
  document.getElementById("sadrzaj").innerHTML = "";
  for(index in niz){
    document.getElementById("sadrzaj").innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
      <div class="card" style="max-width:100%;">
          <img src="slika.png" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text">${niz[index].opis}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item">${niz[index].adresa}</li>
              <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
          </ul>
      </div>
    </div>`;
  }
}
//----------



//-----Search-----

let search = document.getElementById("search");

document.getElementById("search").addEventListener("keyup", (event) =>{
  let pretraga = event.currentTarget.value;
  console.log(pretraga);
  document.getElementById("sadrzaj").innerHTML = "";

  for(index in niz){
    if(niz[index].naziv.includes(pretraga)){
      document.getElementById("sadrzaj").innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
        <div class="card" style="max-width:100%;">
          <img src="slika.png" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text">${niz[index].opis}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item">${niz[index].adresa}</li>
              <li class="list-group-item"><button class="btn btn-outline-success" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: 100%;" class="zanimaMe">Zanima me</button></li>
          </ul>
        </div>
      </div>`;
    }
  }
})
//----------

$(document).ready(function () {
  $(".zanimaMe").click(function () {
    alert('You clicked the form' + this.getAttribute('class'));
  })
})