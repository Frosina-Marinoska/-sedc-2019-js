let row = prompt("kolku rediici sakash?");
let column = prompt("kolku coloni sakas?");
let   i = 0;
let y = 0;


    
     

   let table2= document.getElementById("table1");
        
  

function novo(row, column){
    
   let table2= document.getElementById("table1");
   
  var Body5 = document.createElement("tbody");

  for(i=1; i<=row; i++){
    var red = document.createElement("tr");

    for (y=1; y<=column; y++){
        var kolona = document.createElement("td");
        var cellText = document.createTextNode("redica " + i + ", kolona " + y);

      kolona.appendChild(cellText);
        red.appendChild(kolona);
       

    };
    Body5.appendChild(red);  
    };
table2.appendChild(Body5);
  };
  novo(row,column);

