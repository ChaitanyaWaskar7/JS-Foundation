c - 1
let sum = 0;
let i = 1

while (i <= 5)
{
    sum = sum + i;
    i++
}

console.log("sum :" , sum)

c -2

let countdown = []
let i = 5

while (i > 0)
{
    countdown.push(i)
    i--;
}

console.log(countdown)

c- 3
let teaCollection = [];
let tea;

do {
    tea = prompt(`Write your favourite tea , type (stop) to finish :) `)
    if (tea == 'stop')
    {
        console.log('thanks')
    }
    else {
        teaCollection.push(tea)
    }
} while (tea !== "stop");

c- 4

let total = 0;
let k = 1;

do {
    total = total + k;
    k++;
} while (k <= 3);

console.log("total :",total)

c-5
let multiplyNumbers = []

let numbers = [2, 4, 6]

for (let l = 0; l < numbers.length;l++)
{
    multiplyNumbers.push(numbers[l] * 2)
}

console.log("multiplyNumbers : ", multiplyNumbers)

c-6

let cities = ['Paris', 'New York', 'London', 'Tykyo']

let citylist = []

for (let i = 0; i < cities.length; i++)
{
    citylist.push(cities[i])
}

console.log("citylist :", citylist)

c -7
for loop
let teaTypes = ['green tea', 'black tea', 'chai', 'coffee']

let teaList = []

for (let i = 0; i < teaTypes.length; i++)
{
    if (teaTypes[i] === "chai")
    {
        break;
    }
    teaList.push(teaTypes[i])
}

console.log(teaList)

c -8

let cities = ["Lodon", "NewYork", "Paris", "Berlin"]

let visitedCities = []

for (let i = 0; i < cities.length; i++)
{
    if (cities[i] === "Paris")
    {
        continue;
    }

    visitedCities.push(cities[i])
}

console.log("visitedCities",visitedCities)

c- 9

let numbers = [1, 2, 3, 4, 5]

let newNumbers = []

for (const num of numbers) {
    if (num === 4)
    {
        break;
    }
    newNumbers.push(num)
}

console.log("newNumbers" , newNumbers)

c -10

let teas = ["chai", "green tea", "herbal tea", "black tea"]

let newTeas = [];

for (const tea of teas) {
    if (tea === "herbal tea")
    {
        continue
    }
    newTeas.push(tea)
}

console.log("newTeas", newTeas)

c-11
for in loop

let citiesPopulation = {
    "London": 890202,
    "New York": 99878,
    "Paris": 77809,
    "Berlin":888220
}

let citypopulation = {};

for (const key in citiesPopulation) {
    if (key === "Berlin")
    {
        break;
    }
    citypopulation[key] = citiesPopulation[key]
}

console.log("citypopulation : ",citypopulation)

c-12
let citiesPopulation = {
    "London": 2000,
    "New York": 9000,
    "Paris": 4000,
    "Berlin":10000
}

let finalPop = {}

for (const city in citiesPopulation) {
    if (citiesPopulation[city] < 5000)
    {
        continue;
    }
    finalPop[city] = citiesPopulation[city]
}

console.log(finalPop)

c- 13
let teaCollection = ["early tea", "green tea", "chai", "ooolang tea"]

let newTeaCollection = []

teaCollection.forEach(tea => {
    if (tea === "chai")
    {
        return;
    }

    newTeaCollection.push(tea)
});

console.log("newTeaCollection :", newTeaCollection)

c -14

let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let teavelCities = []

worldCities.forEach(city => {
    if (city === "Sydney")
    {
        return;
    }
    teavelCities.push(city)
});

console.log("teavelCities :",teavelCities)

c-15

let numbers = [2, 5, 7, 9]

let newNumbers = []

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] == 7)
    {
     continue;
    }

    newNumbers.push(numbers[i] * 2)
}

console.log("newNumbers :",newNumbers)

c -16

let myTeas = ["chai", "green tea", "black tea", "jasmin tea", "herbal tea"]

let shortTeas = [];

for (const tea of myTeas) {
    if (tea.length == 10)
    {
        continue;
    }
    shortTeas.push(tea)
}
console.log(shortTeas)



