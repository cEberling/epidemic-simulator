import {succeptibleColor, infectedColor, recoveredColor} from "./constants.js";

export const succeptible = {
    x: [],
    y: [],
    stackgroup: 'a',
    fillcolor: succeptibleColor
};

export const infected = {
    x: [],
    y: [],
    stackgroup: 'a',
    fillcolor: infectedColor
};

export const recovered = {
    x: [],
    y: [],
    stackgroup: 'a',
    fillcolor: recoveredColor
};

export const layout = {
    xaxis: {
        showticklabels: false
    },
    showlegend: false,
};

export const  style = {
    staticPlot: true
};