import {clusterDefinitions} from "../clusters.js";

let currentPhase = 0;
let started = false;

function changePhase() {
    if (started) {
        currentPhase = ++currentPhase % clusterDefinitions.length;
        setTimeout(changePhase, clusterDefinitions[currentPhase].duration);
    }
}

class PhaseService {

    start() {
        if (!started) {
            started = true;
            setTimeout(changePhase, clusterDefinitions[currentPhase].duration);
        }
    }

    stop() {
        started = false;
    }

    getCurrentPhase() {
        return clusterDefinitions[currentPhase];
    }
}

let service = new PhaseService();

export {service as phaseService};