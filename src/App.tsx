import React from "react";
import { SimpleGraph } from "./SimpleGraph/SimpleGraph";
import styled from "styled-components";
import {DisplayGame} from "./DisplayGame/DisplayGame";

const App = () => (
    <Container className="App">
        <DisplayGame />
        {/*<SimpleGraph/>*/}
    </Container>
);

const Container = styled.div`
height: 100%`

export default App;
