// ==UserScript==
// @name         AutoTrimps-madsgkk
// @version      1.0-Zek
// @namespace    https://madsgkk.github.io/AutoTrimps
// @updateURL    https://madsgkk.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *madsgkk.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Arche';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://madsgkk.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
