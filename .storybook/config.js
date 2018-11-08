import { configure } from '@storybook/react';

// jest storyshot
let rc, storyPath;
if (require.context) {
    rc = require.context;
    storyPath = '../src/components';
} else {
    rc = require('require-context');
    storyPath = '../../src/components';
}

// const rc = require.context || require('require-context');
// const req = require('require-context')('../../src/components', true, /\.stories\.tsx$/);

// storybook
const req = rc(storyPath, true, /\.stories\.tsx$/);


function loadStories() {
    req.keys().forEach(filename => {
        //console.error(filename);
        req(filename);
    });
}

configure(loadStories, module);