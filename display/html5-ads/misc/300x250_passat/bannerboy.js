var bannerboy = {
	image_cache : {},

	createDiv : function(_settings) {

		var div = document.createElement("div");
		var settings = _settings || {};

		// default settings
		settings.position = settings.position || "absolute";

		// handle image
		if(settings.backgroundImage) {

			div.style.backgroundSize = settings.backgroundSize || "contain";
			div.style.backgroundRepeat = settings.backgroundRepeat || "no-repeat";

			if(Object.prototype.toString.call(settings.backgroundImage) === "[object Array]") {			
				div.images = settings.backgroundImage;
				div.sequences = {};
				div.currentFrame = 1;
				div.addSequence = function(label, frames) { this.sequences[label] = frames; };
				div.playSequence = function(label) {
					var _this = this;
					var sequence = this.sequences[label];
					for(var i = 0; i < sequence.length; ++i) {
						setTimeout(function(frame) {
							_this.gotoAndStop(frame);
						}, (1000 / 18) * i, sequence[i])
					}
				};
				div.gotoAndStop = function(frame) { this.currentFrame = frame; this.style.backgroundImage = "url(" + this.images[frame - 1] + ")"; };
				
				for(var i = 0; i < div.images.length; ++i) {
					loadImg(div.images[i], i == 0);
				}
			} else {
				loadImg(settings.backgroundImage, true);	
			}
			
		} else {
			applySettings();
		}
		
		function applySettings() {
			if(settings.id) div.id = settings.id;
			if(settings.parent) settings.parent.appendChild(div);
			if(settings.innerHTML) div.innerHTML = settings.innerHTML;
			delete settings.innerHTML;
			delete settings.retina;
			delete settings.parent;
			//delete settings.class;
			//delete settings.id;
			//delete settings.backgroundImage;
			TweenLite.set(div, settings);
		}

		function loadImg(src, doSetImage) {
			var img = bannerboy.image_cache[src];
			if (img) { // if preloaded
				if(doSetImage) setImage.apply(img);
			} else {
				img = document.createElement("img");
				img.src = src;
				if(doSetImage) img.onload = setImage;
				bannerboy.image_cache[src] = img;
			}
		}

		// apply settings
		function setImage() {
			document.body.appendChild(this); // IE hack
			settings.width =  Math.round(settings.width || (settings.retina ? this.width / 2 : this.width));
			settings.height = Math.round(settings.height || (settings.retina ? this.height / 2 : this.height));
			settings.backgroundImage = "url(" + this.src + ")";

			// remove non-greensock properties
			applySettings();
			document.body.removeChild(this); // IE hack
		}

		// functions	
		div.appendChildren = function(children) { for(var i = 0; i < children.length; ++i) this.appendChild(children[i]); }
		div.set = function(settings) { TweenLite.set(this, settings); }
		div.to = function(time, settings) { TweenLite.to(this, time, settings); }
		div.from = function(time, settings) { TweenLite.from(this, time, settings); }
		div.fromTo = function(time, from, to) { TweenLite.fromTo(this, time, from, to); }
		div.get = function(property) { if(this._gsTransform && this._gsTransform[property]) return parseFloat(this._gsTransform[property]); else return parseFloat(this.style[property]); }
		div.centerHorizontal = function() { TweenLite.set(this, {left: 0, right: 0, marginLeft: "auto", marginRight: "auto"}); }
		div.centerVertical = function() { TweenLite.set(this, {top: 0, bottom: 0, marginTop: "auto", marginBottom: "auto"}); }
		div.center = function() { TweenLite.set(this, {top: 0, left: 0, right: 0, bottom: 0, margin: "auto"}); }

		return div; 
	},

	preloadImages : function(images, callback) {

		var numImages = images.length;
		var loadedImages = 0;
		var img = null;
		for(var i = 0; i < numImages; ++i) {
 			img = document.createElement("img");
			img.src = img.shortSrc = images[i];
			img.onload = function() {
				loadedImages++;
				bannerboy.image_cache[this.shortSrc] = this;
				if(loadedImages == numImages) callback();
			}
		}
	}
}