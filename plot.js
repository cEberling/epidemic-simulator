import {n} from "./constants.js";
import {peopleService} from "./services/peopleService.js";
import {succeptible, infected, recovered, layout, style} from "./plotConstants.js";

class Plotter {
    constructor() {
        this.people = peopleService.getPeople();
    }

    startPlot() {
        setInterval(() => record(this.people), 100);
        Plotly.react('plot', [infected, succeptible , recovered], layout, style);
    }
}

function record(people) {
    let infectionCount = 0;
    let recoveredCount = 0;

    people.forEach((p) => {
        if(p.infected) {
            infectionCount++;
        }
        if(p.recovered) {
            recoveredCount++;
        }
    });

    let timestamp = Date.now();

    succeptible.x.push(timestamp);
    succeptible.y.push(n - infectionCount - recoveredCount);

    infected.x.push(timestamp);
    infected.y.push(infectionCount);

    recovered.x.push(timestamp);
    recovered.y.push(recoveredCount);

    layout.datarevision = timestamp;

    Plotly.react('plot', [infected, succeptible , recovered], layout, style);
}

let plotter = new Plotter();

export {plotter};