import * as React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

const ComponentWrapper = styled.div`
    padding-left: 20px;
    color: grey;
    min-width: 300px;
    min-height: 230px;
`;

const data = {
    datasets: [
        {
            data: [100, 200, 300],
            backgroundColor: ['red', 'green', 'blue']
        }
    ],
    labels: ['Cash', 'Stocks', 'Property']
};

const options = {
    responsive: true,
    legend: {
        position: 'right'
    }
};

class ExampleGraph extends React.Component<any, any> {
    public displayName: 'My Portfolio';

    public render() {
        return (
            <ComponentWrapper>
                <h1>My Portfolio</h1>
                <Pie data={data} options={options} />
            </ComponentWrapper>
        );
    }
}

export default ExampleGraph;
