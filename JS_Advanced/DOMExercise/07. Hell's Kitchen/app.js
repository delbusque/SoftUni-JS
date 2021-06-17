function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textInputElement = document.querySelector('#inputs textarea');
   let bestRestaurantElement = document.querySelector('#bestRestaurant > p');
   let bestWorkersElement = document.querySelector('#workers > p');

   function onClick() {

      let input = JSON.parse(textInputElement.value);

      let restaurants = {};

      input.forEach((token) => {
         let tokens = token.split(' - ');
         let restaurName = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         let averageSalary = 0;
         let bestSalary = 0;


         for (const worker of workersArr) {
            let workerTokens = worker.split(' ');
            let workerName = workerTokens[0];
            let workerSalary = Number(workerTokens[1]);
            

            if (workerSalary > bestSalary) {
               bestSalary = workerSalary;
            }

            workers.push({
               name: workerName,
               salary: workerSalary
            });
         }

         if (restaurants[restaurName]) {
            workers = workers.concat(restaurants[restaurName].workers);
         }

         averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         workers.sort((a, b) => b.salary - a.salary);

         restaurants[restaurName] = {
            workers,
            averageSalary,
            bestSalary
         }
      })

      let bestRestaurSalary = 0;
      let bestRastaurant;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurSalary) {

            bestRastaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary.toFixed(2),
               averageSalary: restaurants[name].averageSalary.toFixed(2),
            }
         }

         bestRestaurSalary = restaurants[name].averageSalary.toFixed(2);

      }

      bestRestaurantElement.textContent = `Name: ${bestRastaurant.name} Average Salary: ${bestRastaurant.averageSalary} Best Salary: ${bestRastaurant.bestSalary}`;

      let workersResult = [];

      bestRastaurant.workers.forEach(x => {
         workersResult.push(`Name: ${x.name} With Salary: ${x.salary}`);
      })

      bestWorkersElement.textContent = workersResult.join(' ');
   }
}