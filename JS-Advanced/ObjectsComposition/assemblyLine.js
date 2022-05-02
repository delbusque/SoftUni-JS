function createAssemblyLine(){

    const library = {
        hasClima(myCar) {
            myCar.temp = 21,
            myCar.tempSettings = 21,
            myCar.adjustTemp = function(){
                if(myCar.temp < myCar.tempSettings){
                    myCar.temp += 1;
                }
                else if(myCar.temp > myCar.tempSettings){
                    myCar.temp -= 1;
                }
            }
        },

        hasAudio(myCar) {
            myCar.currentTrack = {
                'name': null,
                'artist': null
            },
            myCar.nowPlaying = function(){
                if(this.currentTrack.name !== null && this.currentTrack.artist !== null){
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(myCar) {
            myCar.checkDistance = function(number){
                if(number < 0.1){
                    console.log("Beep! Beep! Beep!")
                }
                else if(0.10 <= number && number < 0.25){
                    console.log("Beep! Beep!")

                }
                else if(0.25 <= number && number < 0.5){
                    console.log("Beep!")

                }
                else{
                    console.log("")
                }
            }
        }
    }
    return library;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.2);
myCar.checkDistance(0.05);
myCar.checkDistance(1);
myCar.checkDistance(0.4);

