function month(monthIndex, year) {
    let currMonth = new Date(year, monthIndex, 0).getDate();
    console.log(currMonth)
}

month(2, 2012)