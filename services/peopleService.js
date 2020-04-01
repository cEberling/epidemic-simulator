import {Person} from "../models/person.js";
import {n} from "../constants.js";

let people = []

class PeopleService {

    constructor() {
        generatePeople(n);
    }
    getPeople() {
        return people;
    }
}

function generatePeople(count){
    for(let i = 0; i < count ; i++) {
        people.push(new Person());
    }
}

let service = new PeopleService();

export {service as peopleService};