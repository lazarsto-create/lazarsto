var grid8 = {
	shots:[],
	adColumns:[],
	images:[],
	debug:true,
	clickCallback:null,
	playAnimation:null,
	init: function (callback) {
		this.playAnimation = callback;
		this.loadManifest(this.loadDynamicData.bind(this));
		document.body.addEventListener('click', function() {
			if (this.clickCallback!=null) this.clickCallback()
		}.bind(this));
	},
	onClick(callback) {
		this.clickCallback = callback;
	},
	loadDynamicData: function (manifest) {
		var queryString = window.location.search,
			imagesToPreload = [];
		const urlParams = new URLSearchParams(queryString);
		let self = this,
			shots, 
			maxShots = manifest.maxShots;
		for (let s = 0; s < manifest.maxShots; s++) {
			if (urlParams.get(`s${s}_Shottype`) != undefined) shots = s + 1;
		}
		for (let s = 0; s < maxShots; s++) {
			for (const [key, value] of Object.entries(manifest.shotStructure)) { 
				if (urlParams.get(`s${s}_${key}`) != undefined) shots = s + 1;
			}
		}
		if (urlParams.get('shots') != undefined) shots = urlParams.get('shots');
		for (let s = 0; s < shots; s++) {
			let newShot = {};
			for (const [key, value] of Object.entries(manifest.shotStructure)) {
				let paramName = `s${s}_${key}`;
				if (urlParams.get(paramName) == undefined) newShot[key] = value.default;
				else newShot[key] = urlParams.get(paramName);
				if (value.type == "image") {
					imagesToPreload.push(newShot[key]);
					this.images.push(newShot[key]);
				}
			}
			self.shots.push(newShot);
		}
		console.log(self.shots);
		if (manifest.adColumns != undefined) {
			for (const [key, value] of Object.entries(manifest.adColumns)) {
				let paramName = `${key}`;
				if (urlParams.get(paramName) == undefined) this.adColumns[key] = value.default;
				else this.adColumns[key] = urlParams.get(paramName);
			}
		}
		this.preloadImages(imagesToPreload, function () {
			if (this.playAnimation!=null) this.playAnimation();
		}.bind(this));
	},
	preloadImages: function (images, callback) {
		callback();
	},
	loadManifest: function (callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', './manifest.json', true);
		xhr.responseType = 'json';
		xhr.onload = function () {
			var status = xhr.status;
			if (status == 200) {
				callback(xhr.response);
			} else {
				console.error(status);
			}
		}.bind(this);
		xhr.send();
	}
}
function $(query) {
	return document.querySelectorAll(query);
}