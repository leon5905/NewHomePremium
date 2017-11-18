var SlideShow = {
	initialize: function (backgroundImageList) {
		
		"use strict";


		// console.log(backgroundImageList);

		// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
		!function () { function t(t) { this.el = t; for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++)e.call(this, n[i]) } function n(t, n, i) { Object.defineProperty ? Object.defineProperty(t, n, { get: i }) : t.__defineGetter__(n, i) } if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) { var i = Array.prototype, e = i.push, s = i.splice, o = i.join; t.prototype = { add: function (t) { this.contains(t) || (e.call(this, t), this.el.className = this.toString()) }, contains: function (t) { return -1 != this.el.className.indexOf(t) }, item: function (t) { return this[t] || null }, remove: function (t) { if (this.contains(t)) { for (var n = 0; n < this.length && this[n] != t; n++); s.call(this, n, 1), this.el.className = this.toString() } }, toString: function () { return o.call(this, " ") }, toggle: function (t) { return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t) } }, window.DOMTokenList = t, n(Element.prototype, "classList", function () { return new t(this) }) } }();

		// canUse
		window.canUse = function (p) { if (!window._canUse) window._canUse = document.createElement("div"); var e = window._canUse.style, up = p.charAt(0).toUpperCase() + p.slice(1); return p in e || "Moz" + up in e || "Webkit" + up in e || "O" + up in e || "ms" + up in e };

		// window.addEventListener
		(function () { if ("addEventListener" in window) return; window.addEventListener = function (type, f) { window.attachEvent("on" + type, f) } })();

		// Vars.
		var $body = document.querySelector('body');

		// Disable animations/transitions until everything's loaded.
		// $body.classList.add('is-loading');

		// window.addEventListener('load', function () {
		// 	window.setTimeout(function () {
		// 		$body.classList.remove('is-loading');
		// 	}, 100);
		// });

		var requiredImageFormat = [];

		for (var i = 0; i < backgroundImageList.length; i++) {
			var itemSrc = backgroundImageList[i];

			requiredImageFormat[i] = itemSrc;
			// console.log(i);
		}

		// console.log(requiredImageFormat);

		// Settings.
		var settings = {
			// Images (in the format of 'url': 'alignment').

			// images: {
			// 	'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg': 'center',
			// 	'https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg': 'center',
			// 	'images/bg03.jpg': 'center',
			// 	'images/bg04.jpg': 'center',
			// 	'images/bg05.jpg': 'center',
			// 	'images/bg06.jpg': 'center',
			// 	'images/bg07.jpg': 'center',
			// },
			images:requiredImageFormat,
			// Delay.
			delay: 6000
		};

		// Vars.
		var randomNum = Math.floor(Math.random() * backgroundImageList.length);
		// randomNum = 0;

		var pos = randomNum, lastPos = randomNum,
			$wrapper, $bgs = [], $bg,
			k, v;

		// Create BG wrapper, BGs.
		$wrapper = document.createElement('div');
		$wrapper.id = 'bg';
		$body.appendChild($wrapper);

		for (var i=0;i<settings.images.length;i++) {
			// Create BG.
			$bg = document.createElement('div');
			$bg.style.backgroundImage = 'url("' + settings.images[i] + '")';
			$bg.style.backgroundPosition = 'center';
			$wrapper.appendChild($bg);

			// Add it to array.
			$bgs.push($bg);
		}

		console.log ('bgs length : ' + $bgs.length);

		// Main loop.
		console.log('accessing ' + pos);

		$bgs[pos].classList.add('visible');
		$bgs[pos].classList.add('top');
		$('#bg').css('opacity', '2s ease-in-out');
		console.log('bg opacity');

		// Bail if we only have a single BG or the client doesn't support transitions.
		if ($bgs.length == 1
			|| !canUse('transition'))
			return;

		window.setInterval(function () {

			lastPos = pos;
			pos++;

			// Wrap to beginning if necessary.
			if (pos >= $bgs.length)
				pos = 0;

			// Swap top images.
			$bgs[lastPos].classList.remove('top');
			$bgs[pos].classList.add('visible');
			$bgs[pos].classList.add('top');

			// Hide last image after a short delay.
			window.setTimeout(function () {
				$bgs[lastPos].classList.remove('visible');
			}, settings.delay / 2);

		}, settings.delay);

	},

	backgroundSlide: function (backgroundImageList) {

	}
}

	// (function () {

	// 	"use strict";

	// 	// Methods/polyfills.

	// 	// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
	// 	!function () { function t(t) { this.el = t; for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++)e.call(this, n[i]) } function n(t, n, i) { Object.defineProperty ? Object.defineProperty(t, n, { get: i }) : t.__defineGetter__(n, i) } if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) { var i = Array.prototype, e = i.push, s = i.splice, o = i.join; t.prototype = { add: function (t) { this.contains(t) || (e.call(this, t), this.el.className = this.toString()) }, contains: function (t) { return -1 != this.el.className.indexOf(t) }, item: function (t) { return this[t] || null }, remove: function (t) { if (this.contains(t)) { for (var n = 0; n < this.length && this[n] != t; n++); s.call(this, n, 1), this.el.className = this.toString() } }, toString: function () { return o.call(this, " ") }, toggle: function (t) { return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t) } }, window.DOMTokenList = t, n(Element.prototype, "classList", function () { return new t(this) }) } }();

	// 	// canUse
	// 	window.canUse = function (p) { if (!window._canUse) window._canUse = document.createElement("div"); var e = window._canUse.style, up = p.charAt(0).toUpperCase() + p.slice(1); return p in e || "Moz" + up in e || "Webkit" + up in e || "O" + up in e || "ms" + up in e };

	// 	// window.addEventListener
	// 	(function () { if ("addEventListener" in window) return; window.addEventListener = function (type, f) { window.attachEvent("on" + type, f) } })();

	// 	// Vars.
	// 	var $body = document.querySelector('body');

	// 	// Disable animations/transitions until everything's loaded.
	// 	$body.classList.add('is-loading');

	// 	window.addEventListener('load', function () {
	// 		window.setTimeout(function () {
	// 			$body.classList.remove('is-loading');
	// 		}, 100);
	// 	});

	// 	// Slideshow Background.
	// 	(function () {

	// 		// Settings.
	// 		var settings = {

	// 			// Images (in the format of 'url': 'alignment').
	// 			images: {
	// 				'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg': 'center',
	// 				'https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg': 'center',
	// 				'images/bg03.jpg': 'center',
	// 				'images/bg04.jpg': 'center',
	// 				'images/bg05.jpg': 'center',
	// 				'images/bg06.jpg': 'center',
	// 				'images/bg07.jpg': 'center',
	// 			},

	// 			// Delay.
	// 			delay: 6000

	// 		};

	// 		// Vars.
	// 		var randomNum = Math.floor(Math.random() * 7);
	// 		randomNum = 0;

	// 		var pos = randomNum, lastPos = randomNum,
	// 			$wrapper, $bgs = [], $bg,
	// 			k, v;

	// 		// Create BG wrapper, BGs.
	// 		$wrapper = document.createElement('div');
	// 		$wrapper.id = 'bg';
	// 		$body.appendChild($wrapper);

	// 		for (k in settings.images) {

	// 			// Create BG.
	// 			$bg = document.createElement('div');
	// 			$bg.style.backgroundImage = 'url("' + k + '")';
	// 			$bg.style.backgroundPosition = settings.images[k];
	// 			$wrapper.appendChild($bg);

	// 			// Add it to array.
	// 			$bgs.push($bg);

	// 		}

	// 		// Main loop.
	// 		$bgs[pos].classList.add('visible');
	// 		$bgs[pos].classList.add('top');
	// 		$('#bg').css('opacity', '2s ease-in-out');

	// 		// Bail if we only have a single BG or the client doesn't support transitions.
	// 		if ($bgs.length == 1
	// 			|| !canUse('transition'))
	// 			return;

	// 		window.setInterval(function () {

	// 			lastPos = pos;
	// 			pos++;

	// 			// Wrap to beginning if necessary.
	// 			if (pos >= $bgs.length)
	// 				pos = 0;

	// 			// Swap top images.
	// 			$bgs[lastPos].classList.remove('top');
	// 			$bgs[pos].classList.add('visible');
	// 			$bgs[pos].classList.add('top');

	// 			// Hide last image after a short delay.
	// 			window.setTimeout(function () {
	// 				$bgs[lastPos].classList.remove('visible');
	// 			}, settings.delay / 2);

	// 		}, settings.delay);

	// 	})();
	// })();