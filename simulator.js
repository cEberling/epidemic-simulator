import {height, width} from "./constants.js";
import {collision} from "./forces/collision.js";
import {boundedBox} from "./forces/boundedbox.js";
import {cluster} from "./forces/cluster.js";
import {peopleService} from "./services/peopleService.js";
import {clusterService} from "./services/clusterService.js";
import {showClusters} from "./constants.js";

export class Simulator {
    constructor() {
        this.people = peopleService.getPeople();
    }

    startSimulation() {
        let circles = drawPeople(this.people);
        d3.forceSimulation()
            .velocityDecay(0)
            .alphaTarget(1)
            .on('tick', () => ticked(circles))
            .force('collision', collision())
            .force('box', boundedBox())
            .force('cluster', cluster())
            .nodes(this.people);

        drawClusters()
    }
}

function drawPeople(people) {
    return d3.select('body').select('svg')
        .attr('width', width)
        .attr('height', height)
        .selectAll('.person')
        .data(people)
        .enter().append('circle')
        .attr('class', 'person')
        .style('fill', function (d) { return d.fill })
        .attr('r', function (d) { return d.size })
        .attr('cx', function (d) { return d.x })
        .attr('cy', function (d) { return d.y });
}

function drawClusters() {

    if(showClusters) {
        return d3.select('body').select('svg')
            .attr('width', width)
            .attr('height', height)
            .selectAll('.cluster')
            .data(clusterService.getClusters())
            .enter().append('circle')
            .attr('class', 'cluster')
            .attr("fill-opacity", "0").style("stroke", "lightgray")
            .attr('r', function (d) {
                return d.r
            })
            .attr('cx', function (d) {
                return d.x
            })
            .attr('cy', function (d) {
                return d.y
            });
    }
}

function ticked(circles) {
    circles
        .attr('cx', function (d) { return d.x })
        .attr('cy', function (d) { return d.y })
        .style('fill', function (d) { return d.fill });
}

let simulator = new Simulator()

export {simulator}