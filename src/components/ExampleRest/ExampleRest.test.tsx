import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExampleRest from './ExampleRest';
import * as fetchMock from 'fetch-mock';

describe('ExampleRest', () => {
    beforeEach(() => {
        fetchMock.get('*', JSON.stringify(require('./ExampleRest.mock.json')));
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ExampleRest />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
