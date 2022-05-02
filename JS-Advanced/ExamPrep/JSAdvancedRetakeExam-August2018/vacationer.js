class Vacationer {

    constructor(fullName, creditCard) {

        this.creditCard = creditCard;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
        this.fullName = fullName;
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        if (value.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        const regex = new RegExp('^[A-Z]{1}[a-z]{1,30}$');
        value.forEach(n => {
            if (!regex.test(n)) {
                throw new Error("Invalid full name");
            }
        });

        this._fullName = {
            firstName: value[0],
            middleName: value[1],
            lastName: value[2],
        }
    }

    get creditCard() {
        return this._creditCard;
    }
    set creditCard(value) {
        if (!value) {
            this._creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        }
        else {
            if (value.length < 3) {
                throw new Error('Missing credit card information');
            }
            let [cardNumber, expirationDate, securityNumber] = value;
            this._creditCard = {
                cardNumber: cardNumber,
                expirationDate: cardNumber,
                securityNumber: cardNumber
            };
        }
    }

    generateIDNumber() {
        let result = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
        const vowels = ["a", "e", "o", "i", "u"];
        let lastChar = this.fullName.lastName.charAt(this.fullName.lastName.length - 1);

        return result += vowels.includes(lastChar) ? '8' : '7';
    }

}