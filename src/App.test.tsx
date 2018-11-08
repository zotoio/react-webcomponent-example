import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as fetchMock from 'fetch-mock';

describe('App', () => {
    beforeEach(() => {
        fetchMock.get('*', JSON.stringify(require('./components/ExampleRest/ExampleRest.mock.json')));
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
