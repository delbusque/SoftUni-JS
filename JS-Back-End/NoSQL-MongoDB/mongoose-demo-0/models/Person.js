const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: {
        type: Number,
        min: [2, 'Grade can not be lower than 2'],
        max: 6,

    },
    phone: {
        type: String,
        required: [true, 'Why No phone ?'],
        minlength: [10, 'Phone should be exactly 10 characters !'],
        maxlength: [10, 'Phone should be exactly 10 characters !']
    }
})

personSchema.methods.greet = function () {
    return `I am ${this.age} and my name is ${this.name} !`
}

personSchema.virtual('isTeenager').get(function () {
    return this.age < 20;
})

personSchema.path('age').validate(function () {
    return this.age > 12
}, 'Person age should be greater than 12 !')

const Person = mongoose.model('Person', personSchema);

module.exports = Person;