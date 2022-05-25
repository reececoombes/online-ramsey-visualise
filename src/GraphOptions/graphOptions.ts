import {Options} from "vis";

export const graphOptions : Options & {nodes: {opacity: number}} = {
    layout: {
        hierarchical: false,
    },
    edges: {
        color: "#000000",
        width: 5,
        arrows: {
            to: {
                enabled: false,
            }
        },
        smooth: {
            enabled: true,
            type: "continuous",
            forceDirection: false,
            roundness: 0.55,
        }
    },
    nodes: {
        size: 20,
        opacity: 0.8,
        color: '#333333',
        shape: 'dot'
    },
    height: `${window.innerHeight}`,
    physics: {
        barnesHut: {
            gravitationalConstant: 0,
            centralGravity: 0,
            springLength: 0,
            springConstant: 0,
            avoidOverlap: 1
        }
    }
};