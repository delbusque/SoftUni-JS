const mongoose = require('mongoose');

const personShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is strongly required !'],
        minlength: [2, 'Name must be at least with 2 letters'],
        maxlength: 30
    },
    age: Number,
    grade: {
        type: Number,
        required: false,
    },
    sport: {
        type: String,
        enum: ['Soccer', 'Tennis', 'Swimming'],
        required: function () {
            return console.log(`${this.name} is added for playing {${this.sport}}.`);
        }
    },
    food: {
        type: String,
        enum: {
            values: ['Meat', 'Vegan'],
            message: '{VALUE} is not supported food !'
        }
    },
    locations: {
        type: [String],
        validate: {
            validator: function (arr) {
                return arr.length >= 3;
            },
            message: 'Locations should be more than two !'
        }

    }

});

personShema.methods.greet = function () {
    return `My name is ${this.name} and I am ${this.age}`;
}

personShema.virtual('isExcellent').get(function () {
    return this.grade >= 5;
})

personShema.virtual('isExcellent').set(function (value) {
    this.grade = value;
})

personShema.path('grade').validate(function () {
    return this.grade >= 2 && this.grade <= 6;
}, 'Grade must be between 2.00 and 6.00 !')



const Person = mongoose.model('Person', personShema);

module.exports = Person;