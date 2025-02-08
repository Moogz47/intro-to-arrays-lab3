// STEP 1
let cities = ["Windsor", "Toronto", "Detroit", "Troy", "Las Vegas", "Pullman", "Seattle"];

// STEP 2
console.log(cities[0]);
console.log(cities[6]);
console.log(cities[3]);

// STEP 3
console.log(cities.length)

// STEP 4
cities.push("Los Angeles")
console.log(cities);
let visited = cities.slice(0,4)
console.log(visited);
cities.pop()
console.log(cities)
cities.pop()
console.log(cities)

// STEP 5
let cities2 = ["Windsor", "Toronto", "Detroit", "Troy", "Las Vegas", "Pullman", "Seattle"];
for (const city of cities2) {
console.log(city);
}
const iterator = cities2.entries();
for (let e of iterator) {
    console.log(e);
}

// STEP 6
let [firstCity2, secondCity2] = cities2;
console.log(firstCity2);
console.log(secondCity2);
console.log(cities2.slice(2,7));
