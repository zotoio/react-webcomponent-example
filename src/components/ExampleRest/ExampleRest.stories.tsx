import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleRest from './ExampleRest';
import * as fetchMock from 'fetch-mock';

fetchMock.get('*', JSON.stringify(require('./ExampleRest.mock.json')));

const stories = storiesOf('Components', module);

stories.add('ExampleRest', () => <ExampleRest />, { info: { inline: true } });
