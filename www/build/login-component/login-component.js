/*! Built with http://stenciljs.com */
const { h, Context } = window.LoginComponent;

class LoginComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "login-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return ""; }
}

export { LoginComponent };
