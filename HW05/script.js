var numbers = [3, 4, 5, 6,];


let niza = `Elementi na nizata i nivniot zbir: `;

function suma(numbers){
    dva = 0;
    for(eden = 0; eden < numbers.length; eden++){
        dva = dva + numbers[eden];        
        var frosina1 = document.getElementById("frosina");
        frosina1.innerHTML = `<h3> sumata e: ${dva}</h3>`;
        
        
        niza += numbers[eden];

        
        if (eden < numbers.length - 1){
            niza += '+';
           
        } 
    }   
 
}

suma(numbers);
document.write(niza +="=" + dva);
console.log(suma);

