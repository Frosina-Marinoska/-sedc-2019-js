

function Car(model, color, year, fuel, select, fuelCons, distance) {
    this.model = model; 
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.select = select;
    this.fuelCons = fuelCons;
    this.distance = distance;

    this.checkFuelConsumation = function(){
        document.getElementById("paragraf").innerText = (this.fuelCons*this.distance)/100 + ` ${this.fuel}`;
    }
    
};


let model = document.getElementById("inModel");
let color = document.getElementById("inColor");
let year = document.getElementById("inYear");
let fuel = document.getElementById("inFuel");

let select = document.getElementsByClassName("gorivo");
let fuelCons = document.getElementById("potGorivo");
let distance = document.getElementById("kmPominati");
let list = document.getElementById("lista");
let btnDodava = document.getElementById("btn-dodava");
let resultat = [];



function brishenje(novo){
    document.getElementById("inModel").value = "";
    document.getElementById("inColor").value = "";
    document.getElementById("inFuel").value = "";
    document.getElementById("inYear").value = "";
    document.getElementById("gorivoGorivo").value = "";
    document.getElementById("potGorivo").value = "";
    document.getElementById("kmPominati").value = "";
    document.getElementById("lista").value = "";
};

function printing(novo){
    list.innerHTML = "";
    let index = 0;
    for(let li of resultat ){
       
        list.innerHTML +=
        `  <li>
        <div>model: ${novo.model}</div>
        <div>color: ${novo.color}</div>
        <div> year: ${novo.year}</div>
        <div> fuel: ${novo.fuel}</div>
        <div> vid na gorivo: ${novo.select} </div>
        <div> potroshuvacka: ${novo.fuelCons} </div>
        <div> km: ${novo.distance}  </div>
        <button id = "iter-${index}" class = "btn-check" >check fuel cons</button> 
        <p id="paragraf">result here</p>
    </li>`
    }
    index++;
};




btnDodava.addEventListener("click", function(){
    let model = document.getElementById("inModel").value;
    let color = document.getElementById("inColor").value;
    let year = document.getElementById("inYear").value;
    let fuel = document.getElementById("inFuel").value;
    let select = document.getElementById("gorivoGorivo").value;
    let fuelCons = document.getElementById("potGorivo").value;
    let distance = document.getElementById("kmPominati").value;
    
    let novo = new Car(model, color, year, fuel, select, fuelCons, distance);

    resultat.push(novo);
   
    printing(novo);
    brishenje();



});

document.addEventListener("click", function(e){
    if(e.target.className == "btn-check"){
        let index = parseInt(e.target.id.split("-")[1]);
        console.log(resultat[index]);
        let curentPlayer = resultat[index];
        
        curentPlayer.checkFuelConsumation();
    }
});



