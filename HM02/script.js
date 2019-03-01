function produkt(ovosje){
    switch(ovosje.toLowerCase()){
        case "kiwi":
            alert(" cena 150 den");
            break;

        case "portokali":
            alert("cenata e 200 den");
            break;
        case "banani":
            alert("cenata e 250 den");
            break;
        case "jabolka":
            alert("cenata e 100 den");
            break;
        case "krushi":
            alert("cenata e 550 den");
            break;
        case "creshi":
            alert("cenata e 1250 den");
            break;
        case "mandarini":
            alert("cenata e 120 den");
            break;
        case "citron":
            alert("cenata e 50 den");
            break;
        case "avokado":
            alert("cenata e 130 de");
            break;
        case "pomelo":
            alert("cenata e 300 den");
            break;
        case "ananas":
            alert("cenata e 450 den");
            break;
         default:
             prompt("nemame takvo ovoshje! Imame kiwi, portokal, jabolka, pomelo, avokado...");
            
    
    }
       

}
var ovosje = prompt("vnesi ovosje");
produkt(ovosje);
