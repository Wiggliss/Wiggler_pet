
class FooterBar extends HTMLElement {

	constructor () {


		super();

		this.innerHTML =`
        <a href="Wiggler_Pet_Nonspecific/About_Us.html" class="aboutus"><span class="wigglis">About Us</span></a>
        `;

	}


	connectedCallback () {
		console.log('connected!', this);
	}


	disconnectedCallback () {
		console.log('disconnected', this);
	}

}


if ('customElements' in window) {
	customElements.define('footer-bar', FooterBar);
}

