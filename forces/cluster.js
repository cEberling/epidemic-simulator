import {velocity} from "../constants.js";
import {phaseService} from "../services/phaseService.js";

export function cluster() {
    let nodes

    function force() {
        for(const node of nodes) {
            let phase = phaseService.getCurrentPhase()
            let cluster = node.cluster[phase.name];
            if (isOutsidCluster(cluster, node.x, node.y)) {

                if(!node.movingToCluster) {
                    node.movingToCluster = true;
                    let randomPointInCluster = getRandomPoint(node.cluster[phase.name]);
                    let dx = randomPointInCluster.x - node.x;
                    let dy = randomPointInCluster.y - node.y;
                    let d = Math.sqrt(dx * dx + dy * dy);

                    node.vx = velocity * dx / d;
                    node.vy = velocity * dy / d;
                }
            }
            else {
                if(isOutsidCluster(cluster, node.nextX(), node.nextY())) {
                    if(!node.movingToCluster) {
                        node.movingToCluster = true;
                        let dx = cluster.x - node.nextX();
                        let dy = cluster.y - node.nextY();
                        let d = Math.sqrt(dx * dx + dy * dy);
                        let vx = dx / d;
                        let vy = dy / d;
                        node.addV(vx, vy);
                        node.addV(vx, vy);

                    }
                }
                else {
                    node.movingToCluster = false;
                }
            }
        }
    }

    force.initialize = function (_) {
        nodes = _
    };

    return force;
}

function isOutsidCluster(cluster, x, y) {
    let dx = cluster.x - x;
    let dy = cluster.y - y;
    let d = Math.sqrt(dx * dx + dy * dy);

    return d > cluster.r;
}

function getRandomPoint(cluster) {
    let distance = Math.random() * cluster.r;

    let x = (Math.random() * 2 * distance) - distance;

    let maxY = Math.sqrt(distance * distance - x * x);

    let y = (Math.random() * 2 * maxY) - maxY;
    return {
        x: cluster.x + x,
        y: cluster.y + y
    }
}