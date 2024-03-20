// Extend the HTMLElement class to create the web component
class SidebarTopbarHomeButton extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

		// Render HTML
		this.innerHTML =`
        <link rel="shortcut icon" href="Sitewide_Images/wigglis.ico">
    
   
    <div class="navbartop">
        <a href="Wiggler_Pet_Rise_Sunbreak/index_rise.html" class="navbartoplink1"></a> <a
            href="Wiggler_Pet_World_Iceborne/index_world.html" class="navbartoplink2"></a>
        <a href="Wiggler_Pet_Nonspecific/index_nonspecific.html" class="navbartoplink3"></a>
        <div class="WeaponGuides"> <input id="collapsibleWeaponGuides" class="toggle" type="checkbox">
            <label for="collapsibleWeaponGuides" class="collapsible">Weapon Guides</label>
    
            <div class="collapsible-contentWeaps">
                <div class="collapsible-content-inside">
    
                    <input id="WeaponGuidesSunbreak" class="toggle" type="checkbox">
                    <label for="WeaponGuidesSunbreak" class="collapsible">Sunbreak</label>
    
                    <div class="collapsible-contentWeaps">
                        <div class="collapsible-content-inside">
    
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/01_Greatsword_Guide.html">GS</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/02_Longsword_Guide.html">ls</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/03_Sword_And_Shield_Guide.html">sns</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/04_Dual_Blades_Guide.html">db</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/05_Hammer_Guide.html">hammmer</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/06_Hunting_Horn_Guide.html">Horn</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/07_Lance_Guide.html">lans</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/08_Gunlance_Guide.html">gunlance</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/09_Switch_Axe_Guide.html">switch
                                axe</a><br>
    
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/10_Charge_Blade_Guide.html">charge
                                blade</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/11_Insect_Glaive_Guide.html">insect
                                glaive</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/12_Light_Bowgun_Guide.html">light
                                bowgun</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/13_Heavy_Bowgun_Guide.html">heavy
                                bowgun</a><br>
                            <a
                                href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_How_To/14_Bow_Guide.html">bow</a>
                        </div>
                    </div>
                </div>
                <br>
                <input id="collapsible1.0" class="toggle" type="checkbox">
                <label for="collapsible1.0" class="collapsible">World</label>
    
                <div class="collapsible-contentWeaps">
                    <div class="collapsible-content-inside">
    
    
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/01_Greatsword_Guide.html">Gs</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/02_Longsword_Guide.html">ls</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/03_Sword_And_Shield_Guide.html">sns</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/04_Dual_Blades_Guide.html">db</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/05_Hammer_Guide.html">hammmer</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/06_Hunting_Horn_Guide.html">horn</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/07_Lance_Guide.html">lans</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/08_Gunlance_Guide.html">gunlance</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/09_Switch_Axe_Guide.html">switch
                            axe</a><br>
    
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/10_Charge_Blade_Guide.html">charge
                            blade</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/11_Insect_Glaive_Guide.html">insect
                            glaive</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/12_Light_Bowgun_Guide.html">light
                            bowgun</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/13_Heavy_Bowgun_Guide.html">heavy
                            bowgun</a><br>
                        <a
                            href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_How_To/14_Bow_Guide.html">bow</a>
                    </div>
                </div>
            </div>
        </div>
        </a>
        <div class="wrap-collabsible BuildGuides">
            <input id="collapsibleBuilds" class="toggle" type="checkbox">
            <label for="collapsibleBuilds" class="collapsible">Builds</label>
    
            <div class="collapsible-contentBuilds">
                <div class="collapsible-content-inside">
    
    
                    <input id="Risebuilds" class="toggle" type="checkbox">
                    <label for="Risebuilds" class="collapsible">Sunbreak</label>
    
                    <div class="collapsible-contentBuilds">
                        <div class="collapsible-content-inside">
    
    
                            <input id="RiseGS" class="toggle" type="checkbox">
                            <label for="RiseGS" class="collapsible">GS</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/01_Greatsword_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/01_Greatsword_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseLS" class="toggle" type="checkbox">
                            <label for="RiseLS" class="collapsible">LS</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/02_Longsword_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/02_Longsword_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseSNS" class="toggle" type="checkbox">
                            <label for="RiseSNS" class="collapsible">SNS</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/03_Sword_And_Shield_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/03_Sword_And_Shield_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseDB" class="toggle" type="checkbox">
                            <label for="RiseDB" class="collapsible">DB</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/04_Dual_Blades_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/04_Dual_Blades_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseHammer" class="toggle" type="checkbox">
                            <label for="RiseHammer" class="collapsible">Hammer</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/05_Hammer_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/05_Hammer_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseHorn" class="toggle" type="checkbox">
                            <label for="RiseHorn" class="collapsible">Horn</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/06_Hunting_Horn_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/06_Hunting_Horn_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseLance" class="toggle" type="checkbox">
                            <label for="RiseLance" class="collapsible">Lance</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/07_Lance_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/07_Lance_Prog.html">PROG</a>
                                </div>
                            </div>
    
                            <input id="RiseGunlance" class="toggle" type="checkbox">
                            <label for="RiseGunlance" class="collapsible">Gunlance</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/08_Gunlance_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/08_Gunlance_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseSwitchAxe" class="toggle" type="checkbox">
                            <label for="RiseSwitchAxe" class="collapsible">Switch Axe</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/09_Switch_Axe_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/09_Switch_Axe_Prog.html">PROG</a>
    
                                </div>
                            </div>
                            <input id="RiseChargeBlade" class="toggle" type="checkbox">
                            <label for="RiseChargeBlade" class="collapsible">Charge Blade</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/10_Charge_Blade_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/10_Charge_Blade_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseInsectGlaive" class="toggle" type="checkbox">
                            <label for="RiseInsectGlaive" class="collapsible">Insect Glaive</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/11_Insect_Glaive_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/11_Insect_Glaive_Prog.html">PROG</a>
    
                                </div>
                            </div>
                            <input id="RiseLBG" class="toggle" type="checkbox">
                            <label for="RiseLBG" class="collapsible">Light Bowgun</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/12_Light_Bowgun_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/12_Light_Bowgun_Prog.html">PROG</a>
                                </div>
                            </div>
    
                            <input id="RiseHBG" class="toggle" type="checkbox">
                            <label for="RiseHBG" class="collapsible">Heavy Bowgun</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/13_Heavy_Bowgun_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/13_Heavy_Bowgun_Prog.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseBow" class="toggle" type="checkbox">
                            <label for="RiseBow" class="collapsible">Bow</label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Meta/14_Bow_Meta.html">META</a><br><a
                                        href="Wiggler_Pet_Rise_Sunbreak/Wiggler_Pet_Rise_Weapons_Progression/14_Bow_Prog.html">PROG</a>
                                </div>
                            </div>
    
    
                        </div>
                    </div>
    
                </div>
    
                <br>
                <input id="WorldBuilds" class="toggle" type="checkbox">
                <label for="WorldBuilds" class="collapsible">World</label>
    
                <div class="collapsible-contentBuilds">
                    <div class="collapsible-content-inside">
    
                        <input id="WorldGS" class="toggle" type="checkbox">
                        <label for="WorldGS" class="collapsible">
                            GS
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/01_Greatsword_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/01_Greatsword_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldLS" class="toggle" type="checkbox">
                        <label for="WorldLS" class="collapsible">
                            LS
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/02_Longsword_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/02_Longsword_Prog.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldSNS" class="toggle" type="checkbox">
                        <label for="WorldSNS" class="collapsible">
                            SNS
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/03_Sword_And_Shield_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/03_Sword_And_Shield_Prog.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldDB" class="toggle" type="checkbox">
                        <label for="WorldDB" class="collapsible">
                            DB
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/04_Dual_Blades_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/04_Dual_Blades_Prog.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldHammer" class="toggle" type="checkbox">
                        <label for="WorldHammer" class="collapsible">
                            Hammer
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/05_Hammer_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/05_Hammer_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldHorn" class="toggle" type="checkbox">
                        <label for="WorldHorn" class="collapsible">
                            Horn
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/06_Hunting_Horn_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/06_Hunting_Horn_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldLance" class="toggle" type="checkbox">
                        <label for="WorldLance" class="collapsible">
                            Lance
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/07_Lance_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/07_Lance_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldGunlance" class="toggle" type="checkbox">
                        <label for="WorldGunlance" class="collapsible">
                            Gunlance
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/08_Gunlance_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/08_Gunlance_Prog.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldSwitchAxe" class="toggle" type="checkbox">
                        <label for="WorldSwitchAxe" class="collapsible">
                            Switch Axe
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/09_Switch_Axe_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/09_Switch_Axe_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldChargeBlade" class="toggle" type="checkbox">
                        <label for="WorldChargeBlade" class="collapsible">
                            Charge Blade
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/10_Charge_Blade_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/10_Charge_Blade_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldInsectGlaive" class="toggle" type="checkbox">
                        <label for="WorldInsectGlaive" class="collapsible">
                            Insect Glaive
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/11_Insect_Glaive_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/11_Insect_Glaive_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldLBG" class="toggle" type="checkbox">
                        <label for="WorldLBG" class="collapsible">
                            Light Bowgun
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/12_Light_Bowgun_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/12_Light_Bowgun_Prog.html">PROG</a>
                            </div>
                        </div> <input id="WorldHBG" class="toggle" type="checkbox">
                        <label for="WorldHBG" class="collapsible">
                            Heavy Bowgun
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/13_Heavy_Bowgun_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/13_Heavy_Bowgun_Prog.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldBow" class="toggle" type="checkbox">
                        <label for="WorldBow" class="collapsible">
                            Bow
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Meta/14_Bow_Meta.html">META</a><br><a
                                    href="Wiggler_Pet_World_Iceborne/Wiggler_Pet_World_Weapons_Progression/14_Bow_Prog.html">PROG</a>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </div>
    <aside><a href="index.html" class="homeicon"></a></aside>
             
       
       
       
        `

	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}

}

// Define the new web component
if ('customElements' in window) {
	customElements.define('top-panel', SidebarTopbarHomeButton);
}

