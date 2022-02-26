function solve(input, sortCriteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsInput = input.map(t => t.split('|'));
    ticketsInput.forEach(t => {
        let destination = t[0];
        let price = Number(t[1]);
        let status = t[2];
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    })

    let sortedTickets = tickets.slice();
    if (sortCriteria == 'destination') {
        sortedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria == 'price') {
        sortedTickets.sort((a, b) => a.price - b.price);
    } else if (sortCriteria == 'status') {
        sortedTickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return sortedTickets;
}


let input = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

let sortCriteria = 'status';

solve(input, sortCriteria);