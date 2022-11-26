// ==UserScript==
// @name spotify adblock test 2
// @version  0.1
// @run-at   document-start
// @author   Wordhater
// @include  http*://open.spotify.com/*
// @grantnone
// ==/UserScript==


window.setInterval(function () {
	const ad_title = document.querySelector('[data-testid="context-item-info-ad-title"]');
	console.log(ad_title);
	
	const cover_image = document.getElementsByClassName('cover-art-image')
	
	if (ad_title != null) {
		cover_image.playbackSpeed = 16
	}else{
		cover_image.playbackSpeed = 16
	}
}, 1000);
