class Cat {

}
//give the class at least 3 properties
Cat = {
    firstName: "Smoke",
    lastName: "Harris",
    age: 5,
    furColor: "grey",
    eyeColor: "green",
};
//give the class at least 3 methods
Cat = {
    meow: function() {
        console.log('meow')
    }

}

Cat = {
    headPat: function() {
        console.log('head pat')
    }
}

Cat = {
        run: function() {
            alert('cat ran away')
        }
    }
    //create two instances of the class (two cats)
    //log both instances to see their properties
    //invoke each method from both instances



class Pirate {

    constructor() {
        Pirate.name = "Sparrow"
        Pirate.room = 5
        Pirate.build = 1991
    }

}
console.log(Pirate)

Pirate.getName = function() {
    return this.name;
}
Pirate.getRoom = function() {
    return this.room;
}
Pirate.getBuild = function() {
    return this.build
}



//create 3 properties that are set by the constructor
//create 3 methods
//instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
//loop over each array and print 3 properties of each pirate

const jollyRogger = ['Sparrow', 'Willow', 'James']
const blackPearl = ['House', 'Clark', 'Lewis']

for (let i = 0; i < jollyRogger.length; i++) {
    console.log()
}

for (let i = 0; i < blackPearl.length; i++) {
    console.log()
}