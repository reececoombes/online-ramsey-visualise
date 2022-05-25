// from https://gist.github.com/ChadJPetersen/2e2587bbd753c6a384c02519183e2031

import React from "react";
import ReactDOM from "react-dom";
import Graph, {graphData, graphEvents} from "react-graph-vis";

// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";
import {NetworkEvents} from "vis";

export const SimpleGraph = () => {
    const graph = {
        nodes: [
            { id: 1, label: "", title: "node 1 tootip text", color: 'red' },
            { id: 2, label: "", title: "node 2 tootip text" },
            { id: 3, label: "", title: "node 3 tootip text" },
            { id: 4, label: "", title: "node 4 tootip text" },
            { id: 5, label: "", title: "node 5 tootip text" },
        ],
        edges: [
            { from: 1, to: 2, color: 'red' },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 },
        ],
    };

    const options = {
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
            }
        },
        height: `${window.innerHeight}`,
        physics: {
            enabled: false,
        }
    };

    const events = {
        select: function (event : graphData) {
            const { nodes, edges } = event;
            console.log(nodes);
        },
    };
    return (
        <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={(network) => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
};

const rootElement = document.getElementById("root");
