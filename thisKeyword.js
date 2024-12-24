const Person = {
    name:"chaitanya",
    greet()
    {
        console.log(`Hi i am ${this.name}`)
    }
}

Person.greet()

let greetFunction = Person.greet
greetFunction()

const boundGreet = Person.greet.bind({ name: 'omkar' })
boundGreet()