import {succeptibleColor, height, recoveredColor, infectedColor, infectionDuration, n, r, velocity, width} from "../constants.js";
import {clusterService} from "../services/clusterService.js";

export class Person {
    x = Math.random() * (width - 2 * r) + r;
    y = Math.random() * (height - 2 * r) + r;
    vx;
    vy;
    size = r;
    fill = succeptibleColor;
    infected = false;
    recovered = false;
    movingToCluster = false;
    cluster = clusterService.getRandomCluster();

    constructor() {
        let angle = Math.random() * 360;
        this.vx = velocity * Math.cos(angle * Math.PI / 180);
        this.vy = velocity * Math.sin(angle * Math.PI / 180);
    }

    nextX() {
        return this.x + this.vx
    }

    nextY() {
        return this.y + this.vy
    }

    addV(vx, vy) {

        let newX = vx + this.vx / velocity;
        let newY = vy + this.vy / velocity;

        if(newX === 0 && newY === 0) {
            newX = vx;
            newY = vy;
        }
        let d = Math.sqrt(newX * newX + newY * newY);
        this.vx = velocity * newX / d;
        this.vy = velocity * newY / d;


    }

    infect() {
        this.infected = true;
        this.fill = infectedColor;
        if(!this.infected && !this.recovered) {
            setTimeout(() => this.heal(), infectionDuration)
        }
    }

    heal() {
        this.recovered = true;
        this.infected = false;
        this.fill = recoveredColor
    }
}