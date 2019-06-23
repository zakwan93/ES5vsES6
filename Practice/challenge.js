class Element {
    constructor(name, buildYear){
		this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element{
	constructor(name, buildYear, numberOfTrees, parkArea){
        super(name,buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;  // km2
    }
    
    treeDensity(){
        const density = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has a tree denstiy of ${density} trees per square km.`);
    }
}


class Street extends Element{
	constructor(name,buildYear, length, size = 3){
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, "tiny");
        classification.set(2,"small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)}.`)
    }
}

// 3 Parks
let park1 = new Park("Green Park", 1978, 215, 0.2);
let park2 = new Park("Oak Park", 1998, 3541, 2.9);
let park3 = new Park("National Park", 2007, 949, 0.4);

const allParks = [park1,park2,park3];
// console.log(allParks);

//4 Streets
let street1 = new Street("Ocean Avenue", 1999, 1.1 , 4);
let street2 = new Street("Evergreen Street" , 2008, 2.7, 2);
let street3 = new Street("4th Strret", 2015, 0.8);
let street4 = new Street("Sunset Boulevard", 1982, 2.5, 5);

const allStreets = [street1, street2, street3, street4]
// console.log(allStreets);

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0 );
    return [sum , sum / arr.length];
}



function reportPark(p) {
    console.log("-------PARKS REPORT --------")
    //Density   
    p.forEach(el => el.treeDensity());
    // console.log(p);

    //Average age
    const ages = p.map( cur => new Date().getFullYear() - cur.buildYear);
    const [totalAge , avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years. `)

    //which parks has more than 1000 strees
    const index = p.map( el => el.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[index].name} has more than 1000 trees.`);

}

function reportStreet(s){
    console.log("-------STREETS REPORT --------")

    // Total and average length of town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${(totalLength).toFixed(2)} of km, with an average of ${(avgLength).toFixed(2)} km. `)
 
    //Size clarrification of all streets
    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreet(allStreets);