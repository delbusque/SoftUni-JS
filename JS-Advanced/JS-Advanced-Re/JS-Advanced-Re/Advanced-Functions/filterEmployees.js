function solve(data, criteria) {
    let result = [];
    let employeeData = JSON.parse(data);
    let criteriaData = criteria.split('-');
    let currentCriteria = criteriaData[0];
    let currentData = criteriaData[1];

    employeeData.forEach(empl => {
        if (empl[currentCriteria] == currentData) {
            result.push(empl);
        } else if (criteria == 'all') {
            result.push(empl);
        }
    });

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`);
    }
}

let data = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

let criteria = 'all';


solve(data, criteria);