const studentsURL = 'http://localhost:3030/jsonstore/collections/students';
const loginURL = 'http://localhost:3030/users/login';

const studentForm = document.getElementById('form');

loadStudents();

fetch(loginURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'admin@abv.bg',
        password: 'admin'
    })
}).then(resp => resp.json())
    .then(data => {
        let token = data.accessToken;
        localStorage.setItem('auth_token', token);

    });

studentForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let facultyNumber = data.get('facultyNumber');
    let grade = data.get('grade');

    if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
        fetch(studentsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade
            })
        });

        loadStudents();

        e.currentTarget.reset();
    }

    
});

function loadStudents() {
    const resultsTable = document.getElementById('results');
    const resultsBody = resultsTable.querySelector('tbody');
    resultsBody.innerHTML = '';
    fetch(studentsURL).then(resp => resp.json())
        .then(data => {
            let studentData = Object.keys(data).map((key) => [key, data[key]]);
            studentData.forEach(student => {
                let studentRow = document.createElement('tr');
                let firstNameTd = document.createElement('td');
                let lastNameTd = document.createElement('td');
                let facultyNumberTd = document.createElement('td');
                let gradeTd = document.createElement('td');
                firstNameTd.textContent = student[1].firstName;
                lastNameTd.textContent = student[1].lastName;
                facultyNumberTd.textContent = student[1].facultyNumber;
                gradeTd.textContent = student[1].grade;


                studentRow.appendChild(firstNameTd);
                studentRow.appendChild(lastNameTd);
                studentRow.appendChild(facultyNumberTd);
                studentRow.appendChild(gradeTd);
                resultsBody.appendChild(studentRow);

            })
        })
};