import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExampleGraph from './ExampleGraph';

describe('ExampleGraph', () => {
    beforeEach(() => {
        jest.mock('react-chartjs-2', () => ({
            Pie: () => null
        }));
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ExampleGraph />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
