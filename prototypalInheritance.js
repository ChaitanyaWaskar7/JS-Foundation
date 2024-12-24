// constructor funtion
function Person(name)
{
    this.name = name
}

Person.prototype.greet = function ()
{
    console.log(`Hello I am ${this.name}`)
}

let chaitanya = new Person('Chaitanya')
chaitanya.greet()