import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleGraph from './ExampleGraph';

const stories = storiesOf('Components', module);

stories.add('ExampleGraph', () => <ExampleGraph />, { info: { inline: true } });
