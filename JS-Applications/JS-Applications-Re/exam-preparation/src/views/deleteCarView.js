import * as carService from '../services/carService.js';

export const renderDeleteCar = (ctx) => {
    const carId = ctx.params.carId;

    carService.getOne(carId).then(car => {
        if (car._ownerId != ctx.user._id) {
            ctx.page.redirect('/listing');
            //alert('Wrong car owner');
            throw 'Wrong car owner';
        }
        if (confirm(`Dou your really want to delete ${car.brand} ${car.model}`)) {
            return carService.del(carId);
        } else {
            throw 'Abort deletion'
        }

    }).then(() => ctx.page.redirect('/listing'));

}