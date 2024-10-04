customElements.define('mi-tarjeta', class extends HTMLElement {
    constructor(){
        super();
        const template = document.getElementById('id');
        const templateContent = template.content.cloneNode(true);

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(templateContent);
    }
});
    
