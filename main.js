function Event(naziv, opis, datum, vrijeme, adresa, vrsta, imeSlike){
    this.naziv = naziv;
    this.opis = opis;
    this.datum = datum;
    this.vrijeme = vrijeme;
    this.adresa = adresa;
    this.vrsta = vrsta;
    this.slika = imeSlike;
    this.ispis = function(){
        console.log(this.naziv + " " + this.opis + " " + this.datum + " " + this.vrijeme+ " " + this.adresa + " " + this.vrsta + " " + this.slika);
    }
}

let niz = [];
let n = 4;

function unos(){
  let naziv = document.getElementById("nazivUnos").value;
  let opis = document.getElementById("opisUnos").value;
  let datum = document.getElementById("datumUnos").value;
  let vrijeme = document.getElementById("vrijemeUnos").value;
  let adresa = document.getElementById("adresaUnos").value;
  let vrsta = document.getElementById("vrstaUnos").value;
  let slika = document.getElementById("slikaUnos");

  let imeSlike;
  let x = slika.files;
  for (var i = 0; i < x.length; i++) {
    imeSlike = x[i].name;
  }

  if(naziv != "" && opis != "" && datum != "" && vrijeme != "" && adresa != "" && vrsta != "Odaberi vrstu događaja" && imeSlike != undefined){
    let event = []

    event[n] = new Event(naziv, opis, datum, vrijeme, adresa, vrsta, imeSlike);

    niz.push(event[n]);

    n++;

    let sadrzaj2 = document.getElementById("sadrzaj2");

    sadrzaj2.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
        <div class="card" style="max-width:100%;">
          <img src="${imeSlike}" class="card-img-top" alt="Slika nedostupna">
          <div class="card-body">
            <h5 class="card-title">${naziv}</h5>
            <p class="card-text overflow-auto">${opis}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${vrsta}</li>
            <li class="list-group-item">${datum}</li>
            <li class="list-group-item">${vrijeme}</li>
            <li class="list-group-item overflow-auto">${adresa}</li>
          </ul>
        </div>
      </div>`;
  }else{
    alert("Unesite sve potrebne podatke");
  }
}



//-----Filtriranje-----
function filterKoncert(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    if(niz[index].vrsta == "Koncert"){
      sadrzaj2.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
            <img src="${niz[index].slika}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text" overflow-auto>${niz[index].opis}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
              
            </ul>
          </div>
        </div>`;
    }
  }
}

function filterProsvjed(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    if(niz[index].vrsta == "Prosvjed"){
      sadrzaj2.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
            <img src="${niz[index].slika}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text overflow-auto">${niz[index].opis}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
              
            </ul>
          </div>
        </div>`;
    }
  }
}

function filterRadionica(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    if(niz[index].vrsta == "Radionica"){
      sadrzaj2.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
            <img src="${niz[index].slika}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text overflow-auto">${niz[index].opis}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
              
            </ul>
          </div>
        </div>`;
    }
  }
}

function filterSajam(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    if(niz[index].vrsta == "Sajam"){
      sadrzaj2.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
            <img src="${niz[index].slika}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text overflow-auto">${niz[index].opis}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
              
            </ul>
          </div>
        </div>`;
    }
  }
}

function filterOstalo(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    if(niz[index].vrsta == "Ostalo"){
      sadrzaj2.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
          <div class="card" style="max-width:100%;">
            <img src="${niz[index].slika}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${niz[index].naziv}</h5>
              <p class="card-text overflow-auto">${niz[index].opis}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${niz[index].vrsta}</li>
              <li class="list-group-item">${niz[index].datum}</li>
              <li class="list-group-item">${niz[index].vrijeme}</li>
              <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
              
            </ul>
          </div>
        </div>`;
    }
  }
}

function filterSve(){
  sadrzaj2.innerHTML = "";
  for(index in niz){
    sadrzaj2.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
      <div class="card" style="max-width:100%;">
        <img src="${niz[index].slika}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${niz[index].naziv}</h5>
          <p class="card-text overflow-auto">${niz[index].opis}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${niz[index].vrsta}</li>
          <li class="list-group-item">${niz[index].datum}</li>
          <li class="list-group-item">${niz[index].vrijeme}</li>
          <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
          
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
  sadrzaj2.innerHTML = "";

  for(index in niz){
    if(niz[index].naziv.includes(pretraga)){
      sadrzaj2.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
        <div class="card" style="max-width:100%;">
          <img src="${niz[index].slika}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${niz[index].naziv}</h5>
            <p class="card-text overflow-auto">${niz[index].opis}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${niz[index].vrsta}</li>
            <li class="list-group-item">${niz[index].datum}</li>
            <li class="list-group-item">${niz[index].vrijeme}</li>
            <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
            
          </ul>
        </div>
      </div>`;
    }
  }
})
//----------


//-----Unos pet fiksiranih evenata-----
let event1 = new Event("Jelena Rozga, Koncert", "Atraktivni koncert jedinstvene zvijezde hrvatske estrade za sve uzraste!", "2021-04-11", "20:30", "Spaladium Arena Split", "Koncert", "slika.jpg");
let event2 = new Event("Prosvjed ugostitelja", "Prosvjed ugostitelja protiv nametnutih i nepoštenih korona mjera.", "2021-07-02", "14:00", "Zagreb, Split, Duborvnik", "Prosvjed", "slika2.jpeg");
let event3 = new Event("Radionica za mlade", "Radionica za djecu osnovnih škola koju provodi udruga iz Splita.", "2021-11-09", "15:40", "Split", "Radionica", "slika3.jpg");
let event4 = new Event("Shift konferencija", "Tijekom dva dana Shift postaje mjesto okupljanja ljudi širom svijeta.", "2021-10-06", "13:00", "Split", "Sajam", "slika4.jpg");
let event5 = new Event("Turnir baluna", "Tradicionalni turnir malog baluna svih uzrasta. Uplata 200kn po ekipi.", "2021-11-08", "12:00", "Šibenik", "Ostalo", "slika5.jpg");

niz.push(event1);
niz.push(event2);
niz.push(event3);
niz.push(event4);
niz.push(event5);

for(index in niz){
  sadrzaj2.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-okvir">
    <div class="card" style="max-width:100%;">
      <img src="${niz[index].slika}" class="card-img-top" alt="Slika nedostupna">
      <div class="card-body">
        <h5 class="card-title">${niz[index].naziv}</h5>
        <p class="card-text overflow-auto">${niz[index].opis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${niz[index].vrsta}</li>
        <li class="list-group-item">${niz[index].datum}</li>
        <li class="list-group-item">${niz[index].vrijeme}</li>
        <li class="list-group-item overflow-auto">${niz[index].adresa}</li>
        
      </ul>
    </div>
  </div>`;
}
//----------



//-----Unos triju najpopularnijih evenata-----
let sadrzaj1 = document.getElementById("sadrzaj1");

sadrzaj1.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-4 card-okvir">
    <div class="card" style="max-width:100%;">
      <img src="${event1.slika}" class="card-img-top" alt="Slika nedostupna">
      <div class="card-body">
        <h5 class="card-title">${event1.naziv}</h5>
        <p class="card-text overflow-auto">${niz[index].opis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${event1.vrsta}</li>
        <li class="list-group-item">${event1.datum}</li>
        <li class="list-group-item">${event1.vrijeme}</li>
        <li class="list-group-item overflow-auto">${event1.adresa}</li>
      </ul>
    </div>
  </div>`;

sadrzaj1.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-4 card-okvir">
    <div class="card" style="max-width:100%;">
      <img src="${event2.slika}" class="card-img-top" alt="Slika nedostupna">
      <div class="card-body">
        <h5 class="card-title">${event2.naziv}</h5>
        <p class="card-text overflow-auto">${event2.opis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${event2.vrsta}</li>
        <li class="list-group-item">${event2.datum}</li>
        <li class="list-group-item">${event2.vrijeme}</li>
        <li class="list-group-item overflow-auto">${event2.adresa}</li>
      </ul>
    </div>
  </div>`;

sadrzaj1.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-4 card-okvir">
    <div class="card" style="max-width:100%;">
      <img src="${event4.slika}" class="card-img-top" alt="Slika nedostupna">
      <div class="card-body">
        <h5 class="card-title">${event4.naziv}</h5>
        <p class="card-text overflow-auto">${event4.opis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${event4.vrsta}</li>
        <li class="list-group-item">${event4.datum}</li>
        <li class="list-group-item">${event4.vrijeme}</li>
        <li class="list-group-item overflow-auto">${event4.adresa}</li>
      </ul>
    </div>
  </div>`;