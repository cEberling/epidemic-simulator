import {height, width} from "../constants.js";
import {clusterDefinitions} from "../clusters.js";

let clusterCollection = {};

class ClusterService {

    constructor() {
        createCluster(clusterDefinitions)
    }

    getRandomCluster() {
        let clusterSelection = {};
        for(let clusters in clusterCollection) {

            let i = Math.floor(Math.random() * clusterCollection[clusters].length);
            clusterSelection[clusters] = clusterCollection[clusters][i];
        }
        return clusterSelection;
    }

    getClusters() {
        return Object.entries(clusterCollection).flatMap(x => x[1])
    }
}

function createCluster(descriptions) {
    for(let description of descriptions) {
        let clusterType = [];
        for(let i = 0 ; i < description.count ; i++) {
            clusterType.push({
                x: Math.random() * (width - 2 * description.size) + description.size,
                y: Math.random() * (height - 2 * description.size) + description.size,
                r: description.size,
                name: description.name
            })
        }
        clusterCollection[description.name] = clusterType;
    }
}

let service = new ClusterService();

export {service as clusterService};
