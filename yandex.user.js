// ==UserScript==
// @name        yandex
// @namespace   /
// @include     http://yandex.ru/
// @version     0.1
// @grant       none
// ==/UserScript==

function init(){
	
	var promoText=document.getElementsByClassName('b-yabrowser-promo__text').item(0);
	if(promoText)promoText.parentNode.removeChild(promoText);

	var topRibbon=document.getElementsByClassName('b-head-universal-wrapper').item(0);
	if(topRibbon)topRibbon.parentNode.removeChild(topRibbon);
	
	var ads=new Array();
	var items=document.getElementsByClassName('serp-item');
	for(var i=0;i<items.length;i++){
		var item=items.item(i);
			
		var adLabel=item.getElementsByClassName('serp-item__label serp-item__label_before_yes');
		if(adLabel.length){
			ads.push(item);
		}
		
	}
	for(var i=0;i<ads.length;i++){
		ads[i].parentNode.removeChild(ads[i]);
	}
	
}

var readyStateCheckInterval = setInterval(function(){
	if(document.readyState === "complete"){
		init();
		clearInterval(readyStateCheckInterval);
	}
},10);