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
    const [graphKey, setGraphKey] = useState(0)
    // const graph = {
    //     nodes: nodes,
    //     edges: edges,
    // };

    // setNodes(])

    console.log(nodes);

    const events = {
        select: function (event : graphData) {
            const { nodes, edges } = event;
            // console.log(nodes);
        },
    };
    return (
        <>
            {/*<p>{nodes.toString()}</p>*/}
            <button onClick={() => {
                setNodes((prevNodes) => [...prevNodes, {id: nodeCount}] );
                setNodeCount((prevNodeCount) => prevNodeCount + 1);
                setGraphKey((prevGraphKey) => prevGraphKey+1);
            }}>Add node</button>
            <Graph
                key={graphKey}
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