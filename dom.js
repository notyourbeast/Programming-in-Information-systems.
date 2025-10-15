// Define a custom element class
class HelloShadow extends HTMLElement {
    constructor() {
        super();

        // Attach shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create content
        const wrapper = document.createElement('div');
        wrapper.textContent = 'Hello from the Shadow DOM!';

        // Add some styles
        const style = document.createElement('style');
        style.textContent = `
            div {
                color: white;
                background: #0078d4;
                padding: 10px;
                border-radius: 5px;
                font-family: sans-serif;
            }
        `;

        // Append style and content to shadow root
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

// Register the custom element
customElements.define('hello-shadow', HelloShadow);
