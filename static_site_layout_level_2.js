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
    
   
    <div class="navbartop">
        <a href="../rise/rise.html" class="navbartoplink1"></a> <a
            href="../world/world.html" class="navbartoplink2"></a>
        <a href="../other/other.html" class="navbartoplink3"></a>
        <div class="WeaponGuides"> <input id="collapsibleWeaponGuides" class="toggle" type="checkbox">
            <label for="collapsibleWeaponGuides" class="collapsible"><img src="../Sitewide_Images/How2weap.webp" class="WeapGuideButton"></label>
    
            <div class="collapsible-contentWeaps">
                <div class="collapsible-content-inside">
    
                    <input id="WeaponGuidesSunbreak" class="toggle" type="checkbox">
                    <label for="WeaponGuidesSunbreak" class="collapsible">Sunbreak</label>
    
                    <div class="collapsible-contentWeaps">
                        <div class="collapsible-content-inside RiseGuides">
    
                            <a
                                href="../rise/guide/greatsword.html"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/longsword.html"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"/></a><br>
                            <a
                            href="../rise/guide/sword_and_shield.html"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/dual_blades.html"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/hammer.html"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/hunting_horn.html"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/lance.html"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/gunlance.html"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/switch_axe.html"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"/></a><br>
    
                            <a
                                href="../rise/guide/charge_blade.html"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/insect_glaive.html"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/light_bowgun.html"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/heavy_bowgun.html"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"/></a><br>
                            <a
                                href="../rise/guide/bow.html"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"/></a>
                        </div>
                    </div>
                </div>
                <br>
                <input id="collapsible1.0" class="toggle" type="checkbox">
                <label for="collapsible1.0" class="collapsible">World</label>
    
                <div class="collapsible-contentWeaps">
                    <div class="collapsible-content-inside WorldGuides">
    
    
                        <a
                            href="../world/guide/greatsword.html"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"></a><br>
                        <a
                            href="../world/guide/longsword.html"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/sword_and_shield.html"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/dual_blades.html"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/hammer.html"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/hunting_horn.html"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/lance.html"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/gunlance.html"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/switch_axe.html"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"></a><br>
    
                        <a
                            href="../world/guide/charge_blade.html"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"></a><br>
                        <a
                            href="../world/guide/insect_glaive.html"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"/></a><br>
                        <a
                            href="../world/guide/light_bowgun.html"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"></a><br>
                        <a
                            href="../world/guide/heavy_bowgun.html"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"></a><br>
                        <a
                            href="../world/guide/bow.html"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"/></a>
                    </div>
                </div>
            </div>
        </div>
        </a>
        <div class="wrap-collabsible BuildGuides">
            <input id="collapsibleBuilds" class="toggle" type="checkbox">
            <label for="collapsibleBuilds" class="collapsible"><img class="BuildsButton" src="../Sitewide_Images/mh\ chest\ icon.webp"></label>
    
            <div class="collapsible-contentBuilds">
                <div class="collapsible-content-inside ">
    
    
                    <input id="Risebuilds" class="toggle" type="checkbox">
                    <label for="Risebuilds" class="collapsible">Sunbreak</label>
    
                    <div class="collapsible-contentBuilds">
                        <div class="collapsible-content-inside">
    
    
                            <input id="RiseGS" class="toggle" type="checkbox">
                            <label for="RiseGS" class="collapsible"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/greatsword.html">META</a><br><a
                                        href="../rise/progression/greatsword.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseLS" class="toggle" type="checkbox">
                            <label for="RiseLS" class="collapsible"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/longsword.html">META</a><br><a
                                        href="../rise/progression/longsword.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseSNS" class="toggle" type="checkbox">
                            <label for="RiseSNS" class="collapsible"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/sword_and_shield.html">META</a><br><a
                                        href="../rise/progression/sword_and_shield.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseDB" class="toggle" type="checkbox">
                            <label for="RiseDB" class="collapsible"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/dual_blades.html">META</a><br><a
                                        href="../rise/progression/dual_blades.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseHammer" class="toggle" type="checkbox">
                            <label for="RiseHammer" class="collapsible"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/hammer.html">META</a><br><a
                                        href="../rise/progression/hammer.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseHorn" class="toggle" type="checkbox">
                            <label for="RiseHorn" class="collapsible"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/hunting_horn.html">META</a><br><a
                                        href="../rise/progression/hunting_horn.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseLance" class="toggle" type="checkbox">
                            <label for="RiseLance" class="collapsible"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/lance.html">META</a><br><a
                                        href="../rise/progression/lance.html">PROG</a>
                                </div>
                            </div>
    
                            <input id="RiseGunlance" class="toggle" type="checkbox">
                            <label for="RiseGunlance" class="collapsible"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/gunlance.html">META</a><br><a
                                        href="../rise/progression/gunlance.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseSwitchAxe" class="toggle" type="checkbox">
                            <label for="RiseSwitchAxe" class="collapsible"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/switch_axe.html">META</a><br><a
                                        href="../rise/progression/switch_axe.html">PROG</a>
    
                                </div>
                            </div>
                            <input id="RiseChargeBlade" class="toggle" type="checkbox">
                            <label for="RiseChargeBlade" class="collapsible"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/charge_blade.html">META</a><br><a
                                        href="../rise/progression/charge_blade.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseInsectGlaive" class="toggle" type="checkbox">
                            <label for="RiseInsectGlaive" class="collapsible"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/insect_glaive.html">META</a><br><a
                                        href="../rise/progression/insect_glaive.html">PROG</a>
    
                                </div>
                            </div>
                            <input id="RiseLBG" class="toggle" type="checkbox">
                            <label for="RiseLBG" class="collapsible"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/light_bowgun.html">META</a><br><a
                                        href="../rise/progression/light_bowgun.html">PROG</a>
                                </div>
                            </div>
    
                            <input id="RiseHBG" class="toggle" type="checkbox">
                            <label for="RiseHBG" class="collapsible"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/heavy_bowgun.html">META</a><br><a
                                        href="../rise/progression/heavy_bowgun.html">PROG</a>
                                </div>
    
                            </div>
                            <input id="RiseBow" class="toggle" type="checkbox">
                            <label for="RiseBow" class="collapsible"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"/></label>
    
                            <div class="collapsible-contentBuilds">
                                <div class="collapsible-content-inside">
                                    <a
                                        href="../rise/meta/bow.html">META</a><br><a
                                        href="../rise/progression/bow.html">PROG</a>
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
                        <img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/greatsword.html">META</a><br><a
                                    href="../world/progression/greatsword.html">PROG</a>
                            </div>
                        </div> <input id="WorldLS" class="toggle" type="checkbox">
                        <label for="WorldLS" class="collapsible">
                        <img src="../Sitewide_Images/longsword.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/longsword.html">META</a><br><a
                                    href="../world/progression/longsword.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldSNS" class="toggle" type="checkbox">
                        <label for="WorldSNS" class="collapsible">
                        <img src="../Sitewide_Images/sns.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/sword_and_shield.html">META</a><br><a
                                    href="../world/progression/sword_and_shield.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldDB" class="toggle" type="checkbox">
                        <label for="WorldDB" class="collapsible">
                        <img src="../Sitewide_Images/db.webp" class="WeaponIcon"/>
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/dual_blades.html">META</a><br><a
                                    href="../world/progression/dual_blades.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldHammer" class="toggle" type="checkbox">
                        <label for="WorldHammer" class="collapsible">
                        <img src="../Sitewide_Images/hammer.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/hammer.html">META</a><br><a
                                    href="../world/progression/hammer.html">PROG</a>
                            </div>
                        </div> <input id="WorldHorn" class="toggle" type="checkbox">
                        <label for="WorldHorn" class="collapsible">
                        <img src="../Sitewide_Images/horn.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/hunting_horn.html">META</a><br><a
                                    href="../world/progression/hunting_horn.html">PROG</a>
                            </div>
                        </div> <input id="WorldLance" class="toggle" type="checkbox">
                        <label for="WorldLance" class="collapsible">
                        <img src="../Sitewide_Images/lance.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/lance.html">META</a><br><a
                                    href="../world/progression/lance.html">PROG</a>
                            </div>
                        </div> <input id="WorldGunlance" class="toggle" type="checkbox">
                        <label for="WorldGunlance" class="collapsible">
                        <img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/gunlance.html">META</a><br><a
                                    href="../world/progression/gunlance.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldSwitchAxe" class="toggle" type="checkbox">
                        <label for="WorldSwitchAxe" class="collapsible"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"/></label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/switch_axe.html">META</a><br><a
                                    href="../world/progression/switch_axe.html">PROG</a>
                            </div>
                        </div> <input id="WorldChargeBlade" class="toggle" type="checkbox">
                        <label for="WorldChargeBlade" class="collapsible">
                        <img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/charge_blade.html">META</a><br><a
                                    href="../world/progression/charge_blade.html">PROG</a>
                            </div>
                        </div> <input id="WorldInsectGlaive" class="toggle" type="checkbox">
                        <label for="WorldInsectGlaive" class="collapsible"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"/></label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/insect_glaive.html">META</a><br><a
                                    href="../world/progression/insect_glaive.html">PROG</a>
                            </div>
                        </div> <input id="WorldLBG" class="toggle" type="checkbox">
                        <label for="WorldLBG" class="collapsible"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"/></label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/light_bowgun.html">META</a><br><a
                                    href="../world/progression/light_bowgun.html">PROG</a>
                            </div>
                        </div> <input id="WorldHBG" class="toggle" type="checkbox">
                        <label for="WorldHBG" class="collapsible">
                        <img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"/>
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/heavy_bowgun.html">META</a><br><a
                                    href="../world/progression/heavy_bowgun.html">PROG</a>
                            </div>
                        </div>
                        <input id="WorldBow" class="toggle" type="checkbox">
                        <label for="WorldBow" class="collapsible">
                        <img src="../Sitewide_Images/bow.webp" class="WeaponIcon">
                        </label>
                        <div class="collapsible-contentBuilds">
                            <div class="collapsible-content-inside">
                                <a
                                    href="../world/meta/bow.html">META</a><br><a
                                    href="../world/progression/bow.html">PROG</a>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </div>
    <aside class="homeiconlink"><a href="../index.html"><img src="../Sitewide_Images/Farcaster.webp" class="homeicon"></a></aside>
             
       
       
       
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

