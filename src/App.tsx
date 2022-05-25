import React from "react";
import { SimpleGraph } from "./simple-graph/SimpleGraph";
import styled from "styled-components";

const App = () => (
    <Container className="App">
        <SimpleGraph />
    </Container>
);

const Container = styled.div`
height: 100%`

export default App;
