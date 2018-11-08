import { html, LitElement } from '@polymer/lit-element';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'src/App';
import registerServiceWorker from 'src/registerServiceWorker';

/**
 * The LitElement class is an ultra-light wrapper for the W3C HTMLElement class.
 * It is published by the Polymer team, and provides helpers for templating, binding and lifecycle functions.
 * refer: https://github.com/Polymer/lit-element
 *
 * For info on 'slot' tag, refer to:
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot#Browser_compatibility
 *  On browsers that do not natively support 'slot' elements, the webcomponentjs module will polyfill this.
 *
 *  This approach means that W3C standards can be used in consuming apps to pull in component apps,
 *  without any framework lockin.  The aim is that shared webcomponents can use whichever framework
 *  becomes popular over time, without consumers needing to know anything more than the webcomponent api.
 *
 */
class ReactWebcomponent extends LitElement {

    protected render() {
        ReactDOM.render(<App />, this);
        return html`
            <slot></slot>
        `;
    }

    // Use this instead if shadow dom is not wanted. Generally you do want shadow dom for encapsulation.
    // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

    /*
    public createRenderRoot(){ return this; }

    public connectedCallback() {
        ReactDOM.render(<App/>, this);
    }
    */

}

customElements.define('react-webcomponent', ReactWebcomponent);
registerServiceWorker();
