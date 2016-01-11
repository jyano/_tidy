$l('official')
window.examples = window.examples||{}
$L('distractor', 'promote', 'slider')

cjs.utils = function () {
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.sharedCode = function () {
	if (document.body) {
		setupEmbed()
	}
	
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	var o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
examples = {}
cjs.utils = function () {
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.sharedCode = function () {
	if (document.body) {
		setupEmbed()
	}
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	var o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}


cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}
cjs.manifest = function (fn) {
	_manifest_ = [{
		id: "chicks", src: "/chicks.png"
	},
		{id: "me", src: "/me.png"},
		{id: "guy", src: "/guy.png"},
		{id: "sun", src: "/sun.png"}]
	var q = cjs.loadQueue()
	q.complete(function () {
		fn(function (getResult) {
			return q.getResult(getResult)
		})
	})
			.manifest(_manifest_)
}
cjs.sharedCode = function () {
	var o
	if (document.body) {
		setupEmbed()
	}
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.promote = function (subclass, prefix) {
	var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
	if (supP) {
		subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
		for (var n in supP) {
			if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
				subP[prefix + n] = supP[n];
			}
		}
	}
	return subclass
}
cjs.slider = function () {
	/**
	 * Simple slider control for EaselJS examples.
	 **/
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		// public properties:
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	var p = cjs.extend(Slider, cjs.Shape);
// public methods:
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
// private methods:
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	window.Slider = cjs.promote(Slider, "Shape");
}

function distractor() {

	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
		 document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function promote() {
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
}
function slider() {
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
}
function official() {
	examples = {}
	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
	}
	cjs.manifest = function (fn) {
		_manifest_ = [{
			id: "chicks", src: "/chicks.png"
		},
			{id: "me", src: "/me.png"},
			{id: "guy", src: "/guy.png"},
			{id: "sun", src: "/sun.png"}]
		var q = cjs.loadQueue()
		q.complete(function () {
			fn(function (getResult) {
				return q.getResult(getResult)
			})
		})
				.manifest(_manifest_)
	}
	cjs.utils = function () {
	}
	cjs.extend = function (subclass, superclass) {
		function o() {
			this.constructor = subclass
		}
		
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o())
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
	cjs.sharedCodeX = function () {
		if (document.body) {
			setupEmbed()
		}
		else {
			document.addEventListener("DOMContentLoaded", setupEmbed)
		}
		function setupEmbed() {
			if (window.top != window) {
				document.body.className += " embedded"
			}
		}
		
		var o = window.examples = {}
		o.showDistractor = function (id) {
			var div = id ? document.getElementById(id) :
					document.querySelector("div canvas").parentNode;
			div.className += " loading"
		}
		o.hideDistractor = function () {
			var div = document.querySelector(".loading")
			div.className = div.className.replace(/\bloading\b/)
		}
	}
	PRM = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	PRM1 = PROMOTE = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	DSTR = DISTRACTORDOESNOTHING = function () {
		st = stage = $St()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
	}
	function transform() {
//offical examples:
		TRF = TRANSF = function () {
			z()
			degToRad = Math.PI / 180;
			cjs.testCanvas()
			//cjs.sharedCode()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
			stage = new createjs.Stage("testCanvas")
			stage.enableMouseOver();
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			var img = new Image();
			img.onload = handleImageLoad;
			img.src = "/chicks.png";
			function handleImageLoad(evt) {
				examples.hideDistractor();
				var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
				sliceWidth = imgWidth / sliceCount;
				sliceContainer = new createjs.Container();
				sliceContainer.x = stage.canvas.width / 2;
				for (var i = 0; i < sliceCount; i++) {
					var slice = new createjs.Bitmap(img);
					slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
					slice.cache(0, 0, sliceWidth, imgHeight);
					slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
					sliceContainer.addChild(slice);
				}
				var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
				slider.on("change", handleSliderChange, this);
				stage.addChild(sliceContainer, slider);
				updateEffect(slider.value);
			}
			
			function handleSliderChange(evt) {
				updateEffect(evt.target.value);
			}
			
			function updateEffect(value) {
				var l = sliceContainer.getNumChildren();
				for (var i = 0; i < l; i++) {
					var slice = sliceContainer.getChildAt(i);
					slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
					if (i % 2) {
						slice.skewY = value;
					} else {
						slice.skewY = -value;
						slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
					}
					slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
					slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
					slice.updateCache();
				}
				stage.update();
			}
			
			TRAN1 = function () {
				degToRad = Math.PI / 180;
				cjs.testCanvas()
				cjs.utils()
				cjs.slider()
				examples.showDistractor()
				stage = new createjs.Stage("testCanvas")
				stage.enableMouseOver();
				createjs.Touch.enable(stage);
				stage.mouseMoveOutside = true;
				var img = new Image();
				img.onload = handleImageLoad;
				img.src = "/chicks.png";
				function handleImageLoad(evt) {
					examples.hideDistractor();
					var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
					sliceWidth = imgWidth / sliceCount;
					sliceContainer = new createjs.Container();
					sliceContainer.x = stage.canvas.width / 2;
					for (var i = 0; i < sliceCount; i++) {
						var slice = new createjs.Bitmap(img);
						slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
						slice.cache(0, 0, sliceWidth, imgHeight);
						slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
						sliceContainer.addChild(slice);
					}
					var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
					slider.on("change", handleSliderChange, this);
					stage.addChild(sliceContainer, slider);
					updateEffect(slider.value);
				}
				
				function handleSliderChange(evt) {
					updateEffect(evt.target.value);
				}
				
				function updateEffect(value) {
					var l = sliceContainer.getNumChildren();
					for (var i = 0; i < l; i++) {
						var slice = sliceContainer.getChildAt(i);
						slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
						if (i % 2) {
							slice.skewY = value;
						} else {
							slice.skewY = -value;
							slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
						}
						slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
						slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
						slice.updateCache();
					}
					stage.update();
				}
			}
		}
		TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
			z()
			angle = 0
			img = $.img('me', handleImageLoad)[0]
			function stop() {
				cjs.Ticker.removeEventListener("tick", tick)
			}
			
			function handleImageLoad() {
				canvas = $.canvas('p', 960, 400).id("testCanvas").A()
				stage = cjs.stage(canvas)
				stage.autoClear = true;
				bmp = new createjs.Bitmap(img)
						.rXY(img.width >> 1, img.height >> 1)
						.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
				stage.A(bmp).update();
				cjs.Ticker.timingMode = cjs.Ticker.RAF
				cjs.tick(tick)
			}
			
			function tick(event) {
				angle += 0.01
				var value = Math.sin(angle) * 360
				bmp.rot(value).sXY(value / 360)
				stage.update(event)
			}
			
			/*
			 TFR2 = TRANSFORMSIMPLE = function () {
			 z()
			 angle = 0
			 img = $.img('me', handleImageLoad)[0]
			 function stop() {
			 cjs.Ticker.removeEventListener("tick", tick)
			 }
			
			 function handleImageLoad() {
			 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
			 stage = cjs.stage(canvas)
			 stage.autoClear = true;
			 bmp = new createjs.Bitmap(img)
			 .rXY(img.width >> 1, img.height >> 1)
			 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			 stage.A(bmp).update();
			 cjs.Ticker.timingMode = cjs.Ticker.RAF
			 cjs.tick(tick)
			 }
			
			 function tick(event) {
			 angle += 0.01
			 var value = Math.sin(angle) * 360
			 bmp.rot(value).sXY(value / 360)
			 stage.update(event)
			 }
			 }
			 */
		}
	}
}
COOL = DRAWONCHICKS= function () {
	pt = 0
	h = $St().mO(1).h()
	h.graphics._ss('g', 40, 's', 'b', 1)
	st.MD(function () {
		pt = st.m()
	})
	st.MU(function () {
		pt = 0
	})
	
	st.MM(function () {
		if (pt) {
			h.line(pt, pt = st.m())
		}
	})
	
	st.bm('chicks', function (b) {
		b.XY(500, 300).al(.2)
	})
}

PROMOTE = JUSTLOGS=function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
DISTRACT = NOTHING=function () {
	 
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
window.examples = window.examples || {}
distractor()
promote()
slider()
cjs.utils = function () {
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.sharedCode = function () {
	if (document.body) {
		setupEmbed()
	}
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	var o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function distractor() {
	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function promote() {
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
}
function slider() {
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
}
PROMOTE = JUSTLOGS = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
DISTRACT = NOTHING = function () {
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
ASS = ASS_SKETCH = COOL = DRAWONCHICKS = function () {
	pt = 0
	st = $St()
	st.bm('chicks', function (b) {
		h = $h().a2(st)
		st.mO(1).h()
		h.graphics._ss('g', 40, 's', 'b', 1)
		st.MD(function () {
			pt = st.m()
		})
		st.MU(function () {
			pt = 0
		})
		st.MM(function () {
			if (pt) {
				h.line(pt, pt = st.m())
			}
		})
		b.XY(500, 300).al(.2)
	})
}
function distractor() {
	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function promote() {
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
}
function slider() {
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
}
function _pre() {

//neads loadque
	cjs.Shape.prototype.same = function () {
		return $h(this)
	} //h.copy
	cjs.manifest = function (func) {
		var q = cjs.loadQueue()
		q.complete(
				function () {
					func(function (getResult) {
						return q.getResult(getResult)
					})
				})
				.manifest([{
					id: "chicks", src: "/chicks.png"
				},
					{id: "me", src: "/me.png"},
					{id: "guy", src: "/guy.png"},
					{id: "sun", src: "/sun.png"}])
	}
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
	}
	WINDIG = function () {
		cjs.manifest(function (q) {
			$.hdr().A($.h1('grahics winding')).A()
			$.d().A($.c(960, 400)
					.id("testCanvas"))
			st = s = stage = $St(["testCanvas"])
			h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
			cjs.bm = function (img) {
				var g = G(arguments), img = g[0],
						bm = new cjs.Bitmap(img)
				if (g.N) {
					bm.rC()
				}
				return bm
			} //warning: can't yet change to $Bm!!
			bm = cjs.bm(q("chicks"), '-')
					.a2(s).X(470).drag()
			bm.mask = h.same().X(470)
		})
	} //Uncaught TypeError: Cannot read property 'image' of undefined
	$Ldr('WINDG', function (ld) {
		ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
				.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
	})
	WINDING = function () {
		cjs.Shape.prototype.same = function () {
			return $h(this)
		} //h.copy
		cjs.manifest = function (func) {
			var q = cjs.loadQueue()
			q.complete(
					function () {
						func(function (getResult) {
							return q.getResult(getResult)
						})
					})
					.manifest([{
						id: "chicks", src: "/chicks.png"
					},
						{id: "me", src: "/me.png"},
						{id: "guy", src: "/guy.png"},
						{id: "sun", src: "/sun.png"}])
		}
		cjs.worldsMostInterestingShape = function () {
			var h = cjs.shape()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
			return h
		}
		WINDING = function () {
			cjs.Shape.prototype.same = function () {
				return $h(this)
			} //h.copy
			cjs.manifest = function (func) {
				var q = cjs.loadQueue()
				q.complete(
						function () {
							func(function (getResult) {
								return q.getResult(getResult)
							})
						})
						.manifest([{
							id: "chicks", src: "/chicks.png"
						},
							{id: "me", src: "/me.png"},
							{id: "guy", src: "/guy.png"},
							{id: "sun", src: "/sun.png"}])
			}
			cjs.manifest(function (q) {
				$.hdr().A($.h1('grahics winding')).A()
				$.d().A($.c(960, 400)
						.id("testCanvas"))
				st = s = stage = $St(["testCanvas"])
				h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
				cjs.bm = function (img) {
					var g = G(arguments), img = g[0],
							bm = new cjs.Bitmap(img)
					if (g.N) {
						bm.rC()
					}
					return bm
				} //warning: can't yet change to $Bm!!
				bm = cjs.bm(q("chicks"), '-')
						.a2(s).X(470).drag()
				bm.mask = h.same().X(470)
			})
		} //Uncaught TypeError: Cannot read property 'image' of undefined
		cjs.manifest(function (q) {
			$.hdr().A($.h1('grahics winding')).A()
			$.d().A($.c(960, 400).id("testCanvas"))
			st = s = stage = $St(["testCanvas"])
			h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
			cjs.bm = function (img) {
				var g = G(arguments), img = g[0],
						bm = new cjs.Bitmap(img)
				if (g.N) {
					bm.rC()
				}
				return bm
			} //warning: can't yet change to $Bm!!
			bm = cjs.bm(q("chicks"), '-')
					.a2(s).X(470).drag()
			bm.mask = h.same().X(470)
		})
	}
	function more() {
		$L('distractor', 'promote', 'slider')
		cjs.worldsMostInterestingShape = function () {
			var h = cjs.shape()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
			return h
		}
		cjs.utils = function () {
		}
		cjs.extend = function (subclass, superclass) {
			function o() {
				this.constructor = subclass
			}
			
			o.prototype = superclass.prototype;
			return (subclass.prototype = new o())
		}
		cjs.sharedCode = function () {
			if (document.body) {
				setupEmbed()
			}
			else {
				document.addEventListener("DOMContentLoaded", setupEmbed)
			}
			function setupEmbed() {
				if (window.top != window) {
					document.body.className += " embedded"
				}
			}
			
			var o = window.examples = {}
			o.showDistractor = function (id) {
				var div = id ? document.getElementById(id) :
						document.querySelector("div canvas").parentNode;
				div.className += " loading"
			}
			o.hideDistractor = function () {
				var div = document.querySelector(".loading")
				div.className = div.className.replace(/\bloading\b/)
			}
		}
		function distractor() {
			examples.showDistractor = function (id) {
				var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
				div.className += " loading"
			}
			examples.hideDistractor = function () {
				var div = document.querySelector(".loading")
				div.className = div.className.replace(/\bloading\b/)
			}
		}
		
		function promote() {
			cjs.promote = function (subclass, prefix) {
				var subP = subclass.prototype, supP = getProto(subP)
				
				function getProto(subP) {
					return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
				}
				
				if (supP) {
					subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
					for (var n in supP) {
						if (subP.hasOwnProperty(n) && (F(supP[n]))) {
							subP[prefix + n] = supP[n]
						}
					}
				}
				return subclass
			}
			cjs.promoteX = function (subclass, prefix) {
				var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
				if (supP) {
					subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
					for (var n in supP) {
						if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
							subP[prefix + n] = supP[n];
						}
					}
				}
				return subclass
			}
		}
		
		function slider() {
//  Simple slider control for EaselJS examples.
			function Slider(min, max, width, height) {
				this.Shape_constructor();
				this.min = this.value = min || 0;
				this.max = max || 100;
				this.width = width || 100;
				this.height = height || 20;
				this.values = {};
				this.trackColor = "#EEE";
				this.thumbColor = "#666";
				this.cursor = "pointer";
				this.on("mousedown", this._handleInput, this);
				this.on("pressmove", this._handleInput, this);
			}
			
			p = cjs.extend(Slider, createjs.Shape);
			p._checkChange = function () {
				var a = this, b = a.values;
				if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
					b.min = a.min;
					b.max = a.max;
					b.value = a.value;
					b.width = a.width;
					b.height = a.height;
					return true;
				}
				return false
			}
			p._handleInput = function (evt) {
				var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
				val = Math.max(this.min, Math.min(this.max, val));
				if (val == this.value) {
					return;
				}
				this.value = val;
				this.dispatchEvent("change")
			}
			p.isVisible = function () {
				return true;
			};
			p.draw = function (ctx, ignoreCache) {
				if (this._checkChange()) {
					var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
					this.graphics.clear()
							.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
							.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
				}
				this.Shape_draw(ctx, true)
			}
			Slider = cjs.promote(Slider, "Shape")
			cjs.slider = function () {
				/**
				 * Simple slider control for EaselJS examples.
				 **/
				function Slider(min, max, width, height) {
					this.Shape_constructor();
					// public properties:
					this.min = this.value = min || 0;
					this.max = max || 100;
					this.width = width || 100;
					this.height = height || 20;
					this.values = {};
					this.trackColor = "#EEE";
					this.thumbColor = "#666";
					this.cursor = "pointer";
					this.on("mousedown", this._handleInput, this);
					this.on("pressmove", this._handleInput, this);
				}
				
				var p = createjs.extend(Slider, createjs.Shape);
// public methods:
				p.isVisible = function () {
					return true;
				};
				p.draw = function (ctx, ignoreCache) {
					if (this._checkChange()) {
						var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
						this.graphics.clear()
								.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
								.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
					}
					this.Shape_draw(ctx, true)
				}
// private methods:
				p._checkChange = function () {
					var a = this, b = a.values;
					if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
						b.min = a.min;
						b.max = a.max;
						b.value = a.value;
						b.width = a.width;
						b.height = a.height;
						return true;
					}
					return false
				}
				p._handleInput = function (evt) {
					var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
					val = Math.max(this.min, Math.min(this.max, val));
					if (val == this.value) {
						return;
					}
					this.value = val;
					this.dispatchEvent("change")
				}
				window.Slider = createjs.promote(Slider, "Shape");
			}
		}
		
		function _pre() {
			examples = {}
		}
	}
	
	$Ldr('WINDG', function (ld) {
		ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
				.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
	})
	
}
AWESOME = XX6 = GRAPHICSTEST = function () {
	stage = $St()
	canvas = stage.canvas
	// grab canvas width and height for later calculations:
	w = canvas.width
	h = canvas.height
	img = $.img('me', layout)[0]
	function layout() {
		var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
			createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
		var padding = 5
		var _width = 155
		var _height = 155
		var cols = 4
		var space = 0
		var border = createBorder();
		_.times(arr.length, function (i) {
			var tile = arr[i]()
			tile.x = 42 + (_width + padding) * (i % cols)
			tile.y = 42 + (i / cols | 0) * (_height + padding)
			stage.A(tile)
		})
		stage.A(border)
		stage.update()
	}
	
	function createBorder() {
		var s = $H()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = $H().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = $H().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = $H().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = $H().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = $H()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = $H().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = $H().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = $H().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = $H()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
gx._ss = function () {	//=0//=0//=10//=false
	var gx = this, g = G(arguments)
	if (g.S_) {
		return gx._s(g.f)._ss.apply(gx, g.r)
	}
	var l = N(g.f, 4)
	var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
	var jts = N(g.t, 0)
	var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
	var ignSc = g.n ? true : false
	gx.ss(l, caps, jts, mit, ignSc)
	return gx
}
gx.F = function (fC) {
	return this._f(fC || 'z')
}
gx.S = function (sC) {
	return this._s(sC || 'w')
}
gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
	return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
}
gx.FS = gx.C = function (f, s, w) {
	// = gx.fs = gx.fC = gx.cCL
	var gx = this
	gx.F(f).S(s).SS(w)
	return gx
}
$Gx = function (a) {
	return new cjs.Gx(a).FS()
}
gx._mt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.mt(o.x, o.y)
	return gx
}
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
}
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
gx._dc = function () {
	/*
	 // dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
	 example: 
	 var gx = new cjs.Gx().ss(1);
	 gx.s(cjs.Gx.getRGB(0,0,0));
	 gx.f(cjs.Gx.getRGB(255,0,0));
	 gx.dc(0,0,100);
	 var s = new cjs.Shape(g);
	 s.x = 100; 
	 s.y = 100;
	 st.addChild(s);
	 st.update();
	 */
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, r: g.t} : {r: g.f}
	return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
}
gx.cir = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ?
			{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
			{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
	if (!g.n) {
		o.fC = o.fC || 'z'
		o.sC = o.sC || 'w'
		o.ss = N(o.ss, 4)
	}
	if (o.fC) {
		gx.fC(o.fC)
	}
	if (o.sC) {
		gx.sC(o.sC)
	}
	if (N(o.ss)) {
		gx.ss(o.ss)
	}
	return gx._dc(o)
}
gx._dr = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	gx.dr(o.x, o.y, o.w, o.h)
	// drawRect ( x  y  w  h ) Graphics chainable :
	// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
	return gx
}
gx._pol = function () {
	var gx = this, g = G(arguments)
	if (g.A) {
		return gx._pol.apply(gx, g.f)
	}
	gx.mt(g.f0, g.f1)
	_.e(_.r(g), function (pt) {
		gx.lt(pt[0], pt[1])
	})
	return gx.lt(g.f0, g.f1)
}
gx.pol = function (pts, f, s, w) {
	var gx = this, g = G(arguments)
	if (N(pts[0])) {
		g.e(function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	else {
		gx.FS(f, s, w)
		_.e(pts, function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	return gx.cp()
}
gx._f = function (col) {
	return this.f(oO('c', col))
}
gx._s = function (col, thickness) {
	// = gx.col = gx.sC
	var gx = this
	gx.s(oO('c', col))
	if (N(thickness)) {
		gx.SS(thickness)
	}
	return gx
}
function world() {
	HGXX = NEEDSWORLD = function () {
		W()
		h = w.i.h()
		h.graphics.ss(40, "round", "round")
		h.C("rgba(0,0,0,0.2)").mt(100, 100)
		h.graphics.curveTo(200, 500, 600, 300)
	}
}
NOTHING = DISTRACT = function () {
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
DSTR = ERR = DISTRACTORDOESNOTHING = function () {
	st = stage = $St()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
}
NOTHING = DRL = DRAWLINE = XX5 = HDL11 = needsOBx = function () {
	St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
	DRAWLINE1 = DLN = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
	}
}
 