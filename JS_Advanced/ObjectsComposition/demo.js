function companyConstructor(name, type, number) {

    const company = {

        companyName: name,
        address: {

            postCode: '',
            city: '',
            country: '',
        },

        management: {
            owner: '',
            CEO: ''
        },

        employees: [
            {name: 'Boyan', position: 'manager'},
            {name: 'Boryana', position: 'manager'},],

        companyType: type,

        print() {
            console.log(`${this.companyName} -> ${this.companyType}`)

        }

    }

    return company;
}

const companyOne = companyConstructor('Gore Hall Produce Ltd', 'farm', 100);
companyOne.address.city = 'Southport';
companyOne.address.postCode = 'PR98EB';
companyOne.address.country = 'UK';

const fabric = companyConstructor('Fabric Ltd', 'fabric', 200);;
const print = companyOne.print;
fabric.print = print;
fabric.print();


companyOne.print();



const {employees:[emp]} = companyOne;
console.log(emp);