import { html, LitElement } from '@polymer/lit-element';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'src/App';
import registerServiceWorker from 'src/registerServiceWorker';

class ReactWebcomponent extends LitElement {
    // Use this if shadow dom not wanted
    /*
    public createRenderRoot(){ return this; }

    public connectedCallback() {
        ReactDOM.render(<App/>, this);
    }
    */

    protected render() {
        ReactDOM.render(<App />, this);
        return html`
            <slot></slot>
        `;
    }
}

customElements.define('react-webcomponent', ReactWebcomponent);
registerServiceWorker();
