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

        companyType: type

    }

    return company;
}

const companyOne = companyConstructor('Gore Hall Produce Ltd', 'farm', 100);
companyOne.address.city = 'Southport';
companyOne.address.postCode = 'PR98EB';
companyOne.address.country = 'UK';


const {employees:[emp]} = companyOne;
console.log(emp);