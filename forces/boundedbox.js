import {r, width, height} from "../constants.js";

export function boundedBox() {
    let nodes

    function force() {
        for(const node of nodes) {

            if (hasHorizontalCollision(node)) {
                node.x += node.vx
                node.vx = -node.vx
            }

            if (hasVerticalCollision(node)) {
                node.y += node.vy
                node.vy = -node.vy
            }
        }
    }

    force.initialize = function (_) {
        nodes = _
    }

    return force
}

function hasHorizontalCollision(node) {
    let margin = r

    let leftBoundary = 0 + margin
    let rightBoundary = width - margin

    return node.nextX() < leftBoundary ||
        rightBoundary < node.nextX();
}

function hasVerticalCollision(node) {
    let margin = r

    let topBoundary = 0 + margin
    let bottomBoundary = height - margin

    return node.nextY() < topBoundary ||
        bottomBoundary < node.nextY();
}