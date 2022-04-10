class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {

        let [...rest] = [username, salary, position, department];

        if (salary < 0) {
            throw new Error('Invalid input!');
        } else {
            for (const arg of rest) {
                if (arg == '' || arg == undefined || arg == null) {
                    throw new Error('Invalid input!');
                } else {

                    let currentEmployee = {};

                    if (!this.departments[department]) {
                        this.departments[department] = [];
                        this.departments[department]['allSalaries'] = 0;
                        currentEmployee['name'] = username;
                        currentEmployee['salary'] = salary;
                        currentEmployee['position'] = position;
                        currentEmployee['department'] = department;
                        this.departments[department].push(currentEmployee);
                        this.departments[department]['allSalaries'] += salary;
                        this.departments[department]['averageSalary'] = this.departments[department]['allSalaries'] / this.departments[department].length;

                    } else {
                        currentEmployee['name'] = username;
                        currentEmployee['salary'] = salary;
                        currentEmployee['position'] = position;
                        currentEmployee['department'] = department;
                        this.departments[department].push(currentEmployee);
                        this.departments[department]['allSalaries'] += salary;
                        this.departments[department]['averageSalary'] = this.departments[department]['allSalaries'] / this.departments[department].length;
                    }
                    return `New employee is hired. Name: ${currentEmployee.name}. Position: ${currentEmployee.position}`;
                }
            }
        }
    }

    bestDepartment() {
        let bestDep = [];
        for (const department in this.departments) {
            bestDep.push(this.departments[department])
        }
        bestDep.sort((a, b) => b.averageSalary - a.averageSalary);

        bestDep[0].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary;
        })

        let output = [];
        output.push(`Best Department is: ${bestDep[0][0].department}`);
        output.push(`Average salary: ${(bestDep[0].averageSalary).toFixed(2)}`);

        let bestEmpl = bestDep[0].slice();

        bestEmpl.forEach(e => {
            output.push(`${e.name} ${e.salary} ${e.position}`)
        })

        return output.join('\n');
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());