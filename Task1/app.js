let _car = { Manufacturer: 'Porhe', Model: '911 Carrera 4 GTS Coupé', Year: '2022', AVGSpeed: '150' }

function PrintCar(car) {
    for (const key in car) {
        if (Object.hasOwnProperty.call(car, key)) {
            const element = car[key];
            console.log(element);

        }
    }

}

function Time(avSpeed) {
    let dist = parseInt(prompt(`Enter distans `))
    let timeInWay = dist / avSpeed;

    let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;

    let timeTotal = dist / avSpeed + timeInRest;

    console.log(`Total travel time Travel time = ${timeTotal.toFixed(1)} h`);
}

PrintCar(_car)

Time(_car.AVGSpeed)