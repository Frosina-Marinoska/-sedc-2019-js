

var race = ['White','Black','Bushmen','Oriental','Australian Aborigine'];
function print(array){
    console.log("Print array: " + race);
}
//mozebi ne treba ovaa funkcija no ja upotrebiv za da gi pokaze i vrednostite na elementite od nizata. 


function array(race){
	
	return race;
}

console.log("the second element is " + race[1] );
console.log("the last element is " + race[race.length-1]);
console.log(race);
race.push("robot");
console.log(race);
console.log(race.length);
race.splice(2,5, "sarena race");
console.log(race);
race.splice(1,0,"sarena race");
console.log(race);