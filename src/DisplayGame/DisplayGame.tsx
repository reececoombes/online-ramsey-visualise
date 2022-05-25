import React, {useState} from "react";
import Graph, {graphData, graphEvents} from "react-graph-vis";

import {graphOptions} from "../GraphOptions/graphOptions";

type Node = {id: number}
type Nodes = Array<Node>;

type Edge = {from: number, to: number, color: 'red' | 'blue' | 'black'}
type Edges = Array<Edge>

export const DisplayGame = () => {
    const [nodeCount, setNodeCount] = useState<number>(0);
    const [nodes, setNodes] = useState<Nodes>([])
    const [edges, setEdges] = useState<Edges>([])
    const graph = {
        nodes: nodes,
        edges: edges,
    };

    const events = {
        select: function (event : graphData) {
            const { nodes, edges } = event;
            console.log(nodes);
        },
    };
    return (
        <>
            <button onClick={() => setNodes([...nodes, {id: nodes.length}] )}>Add node</button>
            <Graph
                graph={{nodes: nodes, edges: edges}}
                options={graphOptions}
                events={events}
                getNetwork={(network) => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
            />
        </>
    );
};

const rootElement = document.getElementById("root");
