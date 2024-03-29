      
    // Extend the HTMLElement class to create the web component
    class Burgermenu extends HTMLElement {
    
        /**
         * The class constructor object
         */
        constructor () {

                // Always call super first in constructor
                super();

                // Render HTML
                this.innerHTML =`  
  
  
  
  
  <div class="sidebar">
            <input id="sidebar" class="toggle" type="checkbox" checked>
            <label for="sidebar" class="sidebarbutton">   <img src="../Sitewide_Images/map.webp" class="burger"></label>
    
            <div class="collapsible-contentSidebar">
                <div class="collapsible-content-inside">
                    <input id="WildsBurger" class="toggle" type="checkbox">
<label for="WildsBurger" class="collapsibleSidebar"><h2>Wilds</h2></label>

<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <a href="../wilds/wilds.html"><span class="MainPagesBurger">Main Page: Wilds</span></a><br>
    <input id="WildsBurgerGS" class="toggle" type="checkbox">
    <label for="WildsBurgerGS" class="collapsibleSidebar"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"></label>
    <div class="collapsible-contentSidebar1">
            <div class="collapsible-content-inside">
                    <li><a href="../wilds/guide/greatsword.html"> guide</a></li><li><a href="../wilds/progression/greatsword.html">prog</a></li><li><a href="../wilds/meta/greatsword.html">meta</a></li>
</div></div>
<input id="WildsBurgerLS" class="toggle" type="checkbox">
<label for="WildsBurgerLS" class="collapsibleSidebar"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
        <div class="collapsible-content-inside">
            <li><a href="../wilds/guide/longsword.html"> guide</a></li><li><a href="../wilds/progression/longsword.html">prog</a></li><li><a href="../wilds/meta/longsword.html">meta</a></li>
</div></div>
<input id="WildsBurgerSNS" class="toggle" type="checkbox">
<label for="WildsBurgerSNS" class="collapsibleSidebar"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../wilds/guide/sword_and_shield.html"> guide</a></li><li><a href="../wilds/progression/sword_and_shield.html">prog</a></li><li><a href="../wilds/meta/sword_and_shield.html">meta</a></li>
</div></div>
<input id="WildsBurgerDB" class="toggle" type="checkbox">
<label for="WildsBurgerDB" class="collapsibleSidebar"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/dual_blades.html"> guide</a></li><li><a href="../wilds/progression/dual_blades.html">prog</a></li><li><a href="../wilds/meta/dual_blades.html">meta</a></li>
</div></div>
<input id="WildsBurgerHammer" class="toggle" type="checkbox">
<label for="WildsBurgerHammer" class="collapsibleSidebar"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/hammer.html"> guide</a></li><li><a href="../wilds/progression/hammer.html">prog</a></li><li><a href="../wilds/meta/hammer.html">meta</a></li>
</div></div>
<input id="WildsBurgerHorn" class="toggle" type="checkbox">
<label for="WildsBurgerHorn" class="collapsibleSidebar"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/hunting_horn.html"> guide</a></li><li><a href="../wilds/progression/hunting_horn.html">prog</a></li><li><a href="../wilds/meta/hunting_horn.html">meta</a></li>
</div></div>
<input id="WildsBurgerLance" class="toggle" type="checkbox">
<label for="WildsBurgerLance" class="collapsibleSidebar"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/lance.html"> guide</a></li><li><a href="../wilds/progression/lance.html">prog</a></li><li><a href="../wilds/meta/lance.html">meta</a></li>
</div></div>
<input id="WildsBurgerGL" class="toggle" type="checkbox">
<label for="WildsBurgerGL" class="collapsibleSidebar"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/gunlance.html"> guide</a></li><li><a href="../wilds/progression/gunlance.html">prog</a></li><li><a href="../wilds/meta/gunlance.html">meta</a></li>
</div></div>
<input id="WildsBurgerSwaxe" class="toggle" type="checkbox">
<label for="WildsBurgerSwaxe" class="collapsibleSidebar"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/switch_axe.html"> guide</a></li><li><a href="../wilds/progression/switch_axe.html">prog</a></li><li><a href="../wilds/meta/switch_axe.html">meta</a></li>
</div></div>
<input id="WildsBurgerCB" class="toggle" type="checkbox">
<label for="WildsBurgerCB" class="collapsibleSidebar"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/charge_blade.html"> guide</a></li><li><a href="../wilds/progression/charge_blade.html">prog</a></li><li><a href="../wilds/meta/charge_blade.html">meta</a></li>
</div></div>
<input id="WildsBurgerIG" class="toggle" type="checkbox">
<label for="WildsBurgerIG" class="collapsibleSidebar"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/insect_glaive.html"> guide</a></li><li><a href="../wilds/progression/insect_glaive.html">prog</a></li><li><a href="../wilds/meta/insect_glaive.html">meta</a></li>
</div></div>
<input id="WildsBurgerLBG" class="toggle" type="checkbox">
<label for="WildsBurgerLBG" class="collapsibleSidebar"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/light_bowgun.html"> guide</a></li><li><a href="../wilds/progression/light_bowgun.html">prog</a></li><li><a href="../wilds/meta/light_bowgun.html">meta</a></li>
</div></div>
<input id="WildsBurgerHBG" class="toggle" type="checkbox">
<label for="WildsBurgerHBG" class="collapsibleSidebar"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/heavy_bowgun.html"> guide</a></li><li><a href="../wilds/progression/heavy_bowgun.html">prog</a></li><li><a href="../wilds/meta/heavy_bowgun.html">meta</a></li>
</div></div>                                <input id="WildsBurgerBow" class="toggle" type="checkbox">
<label for="WildsBurgerBow" class="collapsibleSidebar"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../wilds/guide/bow.html"> guide</a></li><li><a href="../wilds/progression/bow.html">prog</a></li><li><a href="../wilds/meta/bow.html">meta</a></li>
</div></div>
                </div>
            </div>
            <input id="RisebreakBurger" class="toggle" type="checkbox">
<label for="RisebreakBurger" class="collapsibleSidebar"><h2>Risebreak</h2></label>

<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <a href="../rise/rise.html"><span class="MainPagesBurger">Page: Rise</span></a><br>
    <input id="RisebreakBurgerGS" class="toggle" type="checkbox">
    <label for="RisebreakBurgerGS" class="collapsibleSidebar"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"></label>
    <div class="collapsible-contentSidebar1">
            <div class="collapsible-content-inside">
                    <li><a href="../rise/guide/greatsword.html"> guide</a></li><li><a href="../rise/progression/greatsword.html">prog</a></li><li><a href="../rise/meta/greatsword.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerLS" class="toggle" type="checkbox">
<label for="RisebreakBurgerLS" class="collapsibleSidebar"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
        <div class="collapsible-content-inside">
            <li><a href="../rise/guide/longsword.html"> guide</a></li><li><a href="../rise/progression/longsword.html">prog</a></li><li><a href="../rise/meta/longsword.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerSNS" class="toggle" type="checkbox">
<label for="RisebreakBurgerSNS" class="collapsibleSidebar"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../rise/guide/sword_and_shield.html"> guide</a></li><li><a href="../rise/progression/sword_and_shield.html">prog</a></li><li><a href="../rise/meta/sword_and_shield.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerDB" class="toggle" type="checkbox">
<label for="RisebreakBurgerDB" class="collapsibleSidebar"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/dual_blades.html"> guide</a></li><li><a href="../rise/progression/dual_blades.html">prog</a></li><li><a href="../rise/meta/dual_blades.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerHammer" class="toggle" type="checkbox">
<label for="RisebreakBurgerHammer" class="collapsibleSidebar"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/hammer.html"> guide</a></li><li><a href="../rise/progression/hammer.html">prog</a></li><li><a href="../rise/meta/hammer.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerHorn" class="toggle" type="checkbox">
<label for="RisebreakBurgerHorn" class="collapsibleSidebar"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/hunting_horn.html"> guide</a></li><li><a href="../rise/progression/hunting_horn.html">prog</a></li><li><a href="../rise/meta/hunting_horn.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerLance" class="toggle" type="checkbox">
<label for="RisebreakBurgerLance" class="collapsibleSidebar"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/lance.html"> guide</a></li><li><a href="../rise/progression/lance.html">prog</a></li><li><a href="../rise/meta/lance.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerGL" class="toggle" type="checkbox">
<label for="RisebreakBurgerGL" class="collapsibleSidebar"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/gunlance.html"> guide</a></li><li><a href="../rise/progression/gunlance.html">prog</a></li><li><a href="../rise/meta/gunlance.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerSwaxe" class="toggle" type="checkbox">
<label for="RisebreakBurgerSwaxe" class="collapsibleSidebar"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/switch_axe.html"> guide</a></li><li><a href="../rise/progression/switch_axe.html">prog</a></li><li><a href="../rise/meta/switch_axe.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerCB" class="toggle" type="checkbox">
<label for="RisebreakBurgerCB" class="collapsibleSidebar"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/charge_blade.html"> guide</a></li><li><a href="../rise/progression/charge_blade.html">prog</a></li><li><a href="../rise/meta/charge_blade.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerIG" class="toggle" type="checkbox">
<label for="RisebreakBurgerIG" class="collapsibleSidebar"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/insect_glaive.html"> guide</a></li><li><a href="../rise/progression/insect_glaive.html">prog</a></li><li><a href="../rise/meta/insect_glaive.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerLBG" class="toggle" type="checkbox">
<label for="RisebreakBurgerLBG" class="collapsibleSidebar"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/light_bowgun.html"> guide</a></li><li><a href="../rise/progression/light_bowgun.html">prog</a></li><li><a href="../rise/meta/light_bowgun.html">meta</a></li>
</div></div>
<input id="RisebreakBurgerHBG" class="toggle" type="checkbox">
<label for="RisebreakBurgerHBG" class="collapsibleSidebar"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/heavy_bowgun.html"> guide</a></li><li><a href="../rise/progression/heavy_bowgun.html">prog</a></li><li><a href="../rise/meta/heavy_bowgun.html">meta</a></li>
</div></div>                                <input id="RisebreakBurgerBow" class="toggle" type="checkbox">
<label for="RisebreakBurgerBow" class="collapsibleSidebar"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
<div class="collapsible-content-inside">
    <li><a href="../rise/guide/bow.html"> guide</a></li><li><a href="../rise/progression/bow.html">prog</a></li><li><a href="../rise/meta/bow.html">meta</a></li>
</div></div>      </div></div>

                    <input id="WorldborneBurger" class="toggle" type="checkbox">
                    <label for="WorldborneBurger" class="collapsibleSidebar"><h2>worldborne</h2></label>
                 
                    <div class="collapsible-contentSidebar1">
                        <div class="collapsible-content-inside">
                            <a href="../world/world.html"><span class="MainPagesBurger">Main Page: world</span><br></a>
                            <input id="WorldborneBurgerGS" class="toggle" type="checkbox">
                            <label for="WorldborneBurgerGS" class="collapsibleSidebar"><img src="../Sitewide_Images/greatsword.webp" class="WeaponIcon"></label>
                            <div class="collapsible-contentSidebar1">
                                    <div class="collapsible-content-inside">
                            <li><a href="../world/guide/greatsword.html"> guide</a></li><li><a href="../world/progression/greatsword.html">prog</a></li><li><a href="../world/meta/greatsword.html">meta</a></li>
                        </div></div>
                        <input id="WorldborneBurgerLS" class="toggle" type="checkbox">
                        <label for="WorldborneBurgerLS" class="collapsibleSidebar"><img src="../Sitewide_Images/longsword.webp" class="WeaponIcon"></label>
                        <div class="collapsible-contentSidebar1">
                                <div class="collapsible-content-inside">
                                    <li><a href="../world/guide/longsword.html"> guide</a></li><li><a href="../world/progression/longsword.html">prog</a></li><li><a href="../world/meta/longsword.html">meta</a></li>
                    </div></div>
                    <input id="WorldborneBurgerSNS" class="toggle" type="checkbox">
                    <label for="WorldborneBurgerSNS" class="collapsibleSidebar"><img src="../Sitewide_Images/sns.webp" class="WeaponIcon"></label>
                    <div class="collapsible-contentSidebar1">
                            <div class="collapsible-content-inside">
                                    <li><a href="../world/guide/sword_and_shield.html"> guide</a></li><li><a href="../world/progression/sword_and_shield.html">prog</a></li><li><a href="../world/meta/sword_and_shield.html">meta</a></li>
                </div></div>
                <input id="WorldborneBurgerDB" class="toggle" type="checkbox">
                <label for="WorldborneBurgerDB" class="collapsibleSidebar"><img src="../Sitewide_Images/db.webp" class="WeaponIcon"></label>
                <div class="collapsible-contentSidebar1">
                        <div class="collapsible-content-inside">
                            <li><a href="../world/guide/dual_blades.html"> guide</a></li><li><a href="../world/progression/dual_blades.html">prog</a></li><li><a href="../world/meta/dual_blades.html">meta</a></li>
            </div></div>
            <input id="WorldborneBurgerHammer" class="toggle" type="checkbox">
            <label for="WorldborneBurgerHammer" class="collapsibleSidebar"><img src="../Sitewide_Images/hammer.webp" class="WeaponIcon"></label>
            <div class="collapsible-contentSidebar1">
                    <div class="collapsible-content-inside">
                            <li><a href="../world/guide/hammer.html"> guide</a></li><li><a href="../world/progression/hammer.html">prog</a></li><li><a href="../world/meta/hammer.html">meta</a></li>
        </div></div>
        <input id="WorldborneBurgerHorn" class="toggle" type="checkbox">
        <label for="WorldborneBurgerHorn" class="collapsibleSidebar"><img src="../Sitewide_Images/horn.webp" class="WeaponIcon"></label>
        <div class="collapsible-contentSidebar1">
                <div class="collapsible-content-inside">
                    <li><a href="../world/guide/hunting_horn.html"> guide</a></li><li><a href="../world/progression/hunting_horn.html">prog</a></li><li><a href="../world/meta/hunting_horn.html">meta</a></li>
    </div></div>
    <input id="WorldborneBurgerLance" class="toggle" type="checkbox">
    <label for="WorldborneBurgerLance" class="collapsibleSidebar"><img src="../Sitewide_Images/lance.webp" class="WeaponIcon"></label>
    <div class="collapsible-contentSidebar1">
            <div class="collapsible-content-inside">
                    <li><a href="../world/guide/lance.html"> guide</a></li><li><a href="../world/progression/lance.html">prog</a></li><li><a href="../world/meta/lance.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerGL" class="toggle" type="checkbox">
<label for="WorldborneBurgerGL" class="collapsibleSidebar"><img src="../Sitewide_Images/gunlance.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
        <div class="collapsible-content-inside">
            <li><a href="../world/guide/gunlance.html"> guide</a></li><li><a href="../world/progression/gunlance.html">prog</a></li><li><a href="../world/meta/gunlance.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerSwaxe" class="toggle" type="checkbox">
<label for="WorldborneBurgerSwaxe" class="collapsibleSidebar"><img src="../Sitewide_Images/swaxe.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/switch_axe.html"> guide</a></li><li><a href="../world/progression/switch_axe.html">prog</a></li><li><a href="../world/meta/switch_axe.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerCB" class="toggle" type="checkbox">
<label for="WorldborneBurgerCB" class="collapsibleSidebar"><img src="../Sitewide_Images/charge_blade.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/charge_blade.html"> guide</a></li><li><a href="../world/progression/charge_blade.html">prog</a></li><li><a href="../world/meta/charge_blade.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerIG" class="toggle" type="checkbox">
<label for="WorldborneBurgerIG" class="collapsibleSidebar"><img src="../Sitewide_Images/insect_glaive.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/insect_glaive.html"> guide</a></li><li><a href="../world/progression/insect_glaive.html">prog</a></li><li><a href="../world/meta/insect_glaive.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerLBG" class="toggle" type="checkbox">
<label for="WorldborneBurgerLBG" class="collapsibleSidebar"><img src="../Sitewide_Images/lbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/light_bowgun.html"> guide</a></li><li><a href="../world/progression/light_bowgun.html">prog</a></li><li><a href="../world/meta/light_bowgun.html">meta</a></li>
</div></div>
<input id="WorldborneBurgerHBG" class="toggle" type="checkbox">
<label for="WorldborneBurgerHBG" class="collapsibleSidebar"><img src="../Sitewide_Images/hbg.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/heavy_bowgun.html"> guide</a></li><li><a href="../world/progression/heavy_bowgun.html">prog</a></li><li><a href="../world/meta/heavy_bowgun.html">meta</a></li>
</div></div>                                <input id="WorldborneBurgerBow" class="toggle" type="checkbox">
<label for="WorldborneBurgerBow" class="collapsibleSidebar"><img src="../Sitewide_Images/bow.webp" class="WeaponIcon"></label>
<div class="collapsible-contentSidebar1">
    <div class="collapsible-content-inside">
            <li><a href="../world/guide/bow.html"> guide</a></li><li><a href="../world/progression/bow.html">prog</a></li><li><a href="../world/meta/bow.html">meta</a></li>
</div></div></div></div>
<br><h2>Other Guides:</h2><br> <a href="../other/other.html"><img src="../Sitewide_Images/binoculars.webp" class="Side_Img"></a> <br><h2>About Us:</h2><br> <a href="../other/About_Us.html"><img src="../Sitewide_Images/Wigglis.webp" class="Side_Img"></a> <br>
            </div>        
            <br><h2>Back to Main Page:</h2><br> <a href="../index.html"><img src="../Sitewide_Images/farcaster.webp" class="Side_Img"></a> 
            </div>        
            </div></div>
                
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
customElements.define('burger-menu', Burgermenu);
}

