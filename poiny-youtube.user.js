// ==UserScript==
// @name		Pointy Youtube
// @namespace	maxh.name
// @version		2.7
// @description	Give Youtube non-rounded corners
// @author		maxh
// @match		*://*.youtube.com/*
// @icon		https://github.com/teh-maxh/pointy-youtube/blob/main/icon.png?raw=true
// @grant		none
// @homepage	https://www.maxh.name/projects/pointy-youtube
// ==/UserScript==

(function() {
	var sheet = new CSSStyleSheet();
	var rule = "#ytd-player.ytd-watch-flexy {border-radius: 0 !important;}";
	sheet.insertRule(rule);
	document.adoptedStyleSheets = [sheet];
})();