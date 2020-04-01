import {plotter} from "./plot.js"
import {phaseService} from "./services/phaseService.js";
import {simulator} from "./simulator.js";
import {infectionService} from "./services/infectionService.js";

function main() {
    phaseService.start();
    simulator.startSimulation();
    infectionService.startInfection();
    plotter.startPlot()
}

main();