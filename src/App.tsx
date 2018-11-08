import * as React from 'react';
import styled from 'styled-components';
import ExampleRest from './components/ExampleRest/ExampleRest';
import ExampleGraph from './components/ExampleGraph/ExampleGraph';

const AppWrapper = styled.div`
    border: 2px solid silver;
    font-family: sans-serif;
    border-radius: 15px;
    padding: 15px;
    margin: 15px;
    display: inline-block;
`;

class App extends React.Component<any, any> {
    public render() {
        return (
            <AppWrapper>
                <ExampleGraph />
                <ExampleRest />
            </AppWrapper>
        );
    }
}

export default App;
