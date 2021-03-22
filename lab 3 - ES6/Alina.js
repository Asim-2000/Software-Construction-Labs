class GeneralElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends GeneralElement {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

    //method treeDensity()
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends GeneralElement {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

    //method classifyStreet
  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`
    );
  }
}


function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("----PARKS REPORTS----");
  // Density
  p.forEach((el) => el.treeDensity());

  // Average age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which park has more than 1000 trees;
  const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("---- STREETS REPORT ----");

  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map((el) => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  //Classify sizes
  s.forEach((el) => el.classifyStreet());
}

const allParks = [
  new Park("Green Park", 1997, 0.2, 215),
  new Park("Askari Park", 1964, 2.9, 3541),
  new Park("F10 Park", 1793, 0.4, 949),
];

const allStreets = [
  new Street("Ocean Avenue", 2009, 1.1, 4),
  new Street("Allama Iqbal Street", 2015, 2.7, 2),
  new Street("10th Street", 2000, 0.8),
  new Street("Sunset Boulevard", 1992, 2.5, 5),
];


reportParks(allParks);
reportStreets(allStreets);
