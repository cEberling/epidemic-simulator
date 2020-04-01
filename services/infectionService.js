import {peopleService} from "./peopleService.js";
import {patientZeroTime, infectionProb} from "../constants.js"

class InfectionService {

    constructor() {
        this.people = peopleService.getPeople();
    }

    startInfection() {
        setTimeout(() => {this.people[0].infect()} , patientZeroTime);
    }

    contact(personA, personB) {
        if (personA.infected || personB.infected) {
            if(Math.random() < infectionProb) {
                personA.infect();
                personB.infect();
            }
        }
    }
}

let service = new InfectionService();

export {service as infectionService};