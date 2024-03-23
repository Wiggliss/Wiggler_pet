
class FooterBar extends HTMLElement {

	constructor () {


		super();

		this.innerHTML =`
        <a href="../../other/About_Us.html" class="aboutus"><img src="Sitewide_Images/Wigglis.webp" class="wigglis"/></a>
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

