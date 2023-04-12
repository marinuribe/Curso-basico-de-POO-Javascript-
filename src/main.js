const victor = {
    name: 'Victor',
    age: '29',
    hobbies: ['Running', 'Play videogames', 'Reading'],

    // This is a method
    addHobbie(hobbie){
        this.hobbies.push(hobbie)
    },
};

victor.hobbies.push('Make rockets')

// This is a prototype
function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
}
// This is a methond for a prototype
Person.prototype.addHobbie = function (hobbie) {
    this.hobbie = hobbie;
}

// This is a instance of the Person prototype
const billy = new Person('Billy', 9, ['To sleep', 'To eat'])