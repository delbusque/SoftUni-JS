function workerModifier(obj) {

    const worker = Object.assign(obj);

    if(worker.dizziness === true){
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }
    return worker;

}

inputObj = {
     weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false 
};

console.log(workerModifier(inputObj));