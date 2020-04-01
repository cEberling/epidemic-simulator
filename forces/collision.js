import {r, quadtreeIterations} from "../constants.js";
import {infectionService} from "../services/infectionService.js";

function isOutsideOf(nodeA, x0,  x1, y0, y1) {
    return x0 > nodeA.x ||
        y0 > nodeA.y ||
        x1 < nodeA.x ||
        y1 < nodeA.y;
}

export function collision() {
    let nodes

    function force() {

        for (let i = 0 ; i < quadtreeIterations; i++) {
            iterate()
        }

        function iterate() {
            let tree = d3.quadtree()
                .x(n => n.x)
                .y(n => n.y)
                .addAll(nodes)

            for (let n of nodes) {
                tree.visit(collide(n))
            }
        }

        function collide (n) {
            
            let nodeA = n

            function apply(quad, x0, y0, x1, y1) {
                let nodeB = quad.data
                if (nodeB) {
                    if (nodeB.index <= nodeA.index) {
                        return
                    }

                    if (isCollision(nodeA, nodeB)) {
                        nodeA.movingToCluster = false;
                        nodeB.movingToCluster = false;
                        let baX = nodeA.x - nodeB.x
                        let baY = nodeA.y - nodeB.y

                        let d = Math.sqrt(baX * baX + baY * baY)

                        let vx = baX / d;
                        let vy = baY / d;

                        let k = nodeA.vx
                        let l = nodeA.vy

                        nodeA.vx = nodeB.vx
                        nodeA.vy = nodeB.vy

                        nodeB.vx = k
                        nodeB.vy = l

                        nodeA.addV(vx, vy)
                        nodeB.addV(-vx, -vy)

                        infectionService.contact(nodeA, nodeB);
                    }
                }

                return isOutsideOf(nodeA, x0, x1, y0, y1)
            }
            return apply;
        }
    }

    force.initialize = function (_) {
        nodes = _
    }

    return force
}

function isCollision(nodeA, nodeB) {
    let dx = nodeA.x - nodeB.x
    let dy = nodeA.y - nodeB.y

    let distance = Math.sqrt(dx * dx + dy * dy)
    return distance < 2 * r
}
