cjs.Filter.prototype.bd = cjs.Filter.prototype.b = function () {
	var bd = this.getBounds()
	bd.w = bd.width
	bd.h = bd.height
	return bd
}
/*

 AlphaMapFilter : Map a greyscale image to the alpha channel of a display object
 AlphaMaskFilter: Map an image's alpha channel to the alpha channel of a display object
 BlurFilter: Apply vertical and horizontal blur to a display object
 ColorFilter: Color transform a display object
 ColorMatrixFilter: Transform an image using a ColorMatrix

 */
dO.aFl = function (fl) {
	var dO = this
	dO.filters = dO.filters || []
	dO.filters.push(fl)
	return dO
}
dO.gFl = function () {
	this.filters = this.filters || []
	return _.l(this.filters)
}
dO.fl = dO.Fl = function (fl, i) {
	var dO = this, g = G(arguments)
	if (g.A) {
		return dO.fl.apply(dO, g.f)
	}
	dO.filters = dO.filters || []
	if (U(fl)) {
		return _.l(dO.filters)
	}
	if (N(fl)) {
		return dO.filters[fl]
	} // filters are only displayed when the display object is cached
	// later, you can call updateCache() to update changes to your filters
	//	_.e(g, function (fl) {dO._fl(fl)}) 
	if (O(fl)) {
		dO.filters.push(fl)
	} //if (O(i)) {dO.ca(i)}
	//if (!g.n) {i = dO.image;dO.ca(0, 0, i.width, i.height)}
	return dO
}
dO.flBds = function () {
	return this.gFl().getBounds()
}
passTest = function (g) {
	return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
}
toObImg = function (i) {
	return $(i.image ? i.image : i)[0]
}
toImg = function (i) {
	return i.image ? i.image : $(i)[0];
}
updateCacheImage = function (upd) {
	if (upd) {
		h.updateCache()
	}
	else {
		h.ca(0, 0, i.width, i.height)
	}
	mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
	bm.filters = [mskF]
	if (upd) {
		bm.ca(i)
	}
	else {
		bm.ca(i)
	}
	st.u()
}
$L('alphaMapFilter', 'alphaMaskFilter', 'colorMatrixFilter', 
'colorFilter', 'blurFilter', 'cache', 'grad')
function alphaMapFilter() {
	dO.alMapFl = dO.aMF = function (a, b, c, d, e, f, g, h) {
		var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	$AlMapFl = function (a, b, c, d, e) {
//Map a greyscale image to the alpha channel of a display object
		return new cjs.AlphaMapFilter(a, b, c, d, e)
	}
}
function alphaMaskFilter() {
	$AlMaskFl = function (a, b, c, d, e) {
		forMaskFilter = function trx(n) {
			var g = G(arguments)
			var a = []
			//for making mask filter
			if (g.n) {
				return 'rgba(0,0,0,' + g[0] || 0 + ')'
			}
			_.e(g, function (n) {
				a.push(trx(n, '-'))
			})
			return a
		}
		//Map an image's alpha channel to the alpha channel of a display object
		var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
		if (O(a) && a.cacheCanvas) {
			a = a.cacheCanvas
		}
		fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
		return fl
	}
	dO.alMaskFl = dO.aF = function (a, b, c, d, e, f, g, h) {
		dO_aF = function (h) {
			var ob = this
			ob.fl($AlMaskFl(h))
			return ob
		}
		var bf
		bf = $AlMaskFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	dO.aF2 = function (h) {
		var ob = this
		this.fl2($AlMaskFl(h))
		return ob
	}
}
function colorFilter() {
	$ColFl = function (a, b, c, d, e, f, g, h) {
		return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
	}
	dO.colFl = function (a, b, c, d, e, f, g, h) {
		var cf = $ColFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(cf)
		return cf
	}
}
function blurFilter() {
	_$BlurFl = _$Bfl = function (x, y, q) {
		return new cjs.BlurFilter(x, y, q)
	}
	$BlurFl = function () {
		var g = G(arguments), fl, o
		o = {x: g.f, y: g.s, q: g.t}
		o.y = N(o.y) ? o.y : o.x
		o.q = o.q || 1
		return _$Bfl(o.x, o.y, o.q)
	}
	dO.blurFl = dO.blFl = function (a, b, c, d, e, f, g, h) {
		var bf
		bf = $BlurFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
}
function colorMatrixFilter() {
	colorMatrix()
	function colorMatrix() {
		cM = cjs.ColorMatrix.prototype
		var m = cM
		cM.s = function (s) {
			this.adjustSaturation(s)
			return this
		}
		cM.h = function (c) {
			this.adjustHue(c)
			return this
		}
		cM.b = function (c) {
			this.adjustBrightness(c)
			return this
		}
		cM.co = function (c) {
			this.adjustContrast(c)
			return this
		}
		cM.c = m.adjustColor
		cM.cl = m.clone
		cM.cc = m.concat
		cM.m = m.copyMatrix
		cM.r = m.reset
		cM.A = m.toArray
		cM.S = m.toString
		$ColMx = _$ColMx = function (a, b, c, d) {
			return new cjs.ColorMatrix(a, b, c, d)
		}
		//$ColMx = function (a, b, c, d) {return _$ColMxFl(O(a) ? a : $ColMx(a, b, c, d))}
	}
	
	$ColMxFl = function (m) {
		var g = G(arguments)
		var colMxFl = new cjs.ColorMatrixFilter(m)
		return colMxFl
	}
	dO.colMxFl = function (cM) {
		this.filters = this.filters || []
		var cf = $ColMxFl(cM)
		this.filters.push(cf)
		return cf
	}
}
function cache() {
	dO.uCx = dO.updateContext
	dO.caCv = dO.cC = dO.cc = function () {
		return this.cacheCanvas
	}
	dO.gCDU = function (ca) {
		return this.getCacheDataURL(ca)
	}
	dO.uCa = dO.updCa = function (ca) {
		this.updateCache(ca);
		return this
	}
	dO.uc = dO.uncache = function (ca) {
		this.uncache(ca);
		return this
	}
	dO.__ca = function () {
		this.cache.apply(this, arguments);
		return this
	}
	dO._ca = function (x, y, w, h) {
		var dO = this
		x = N(x, 0)
		y = N(y, 0)
		w = N(w, dO.width)
		h = N(h, dO.height)
		dO.__ca(x, y, w, h)
		return dO
	}
	dO.ca = function () {
		var dO = this, g = G(arguments), o
		var st = dO.getStage()
		var op
		if (!g.n && !g.p && O(dO.image)) {
			dO._ca($(dO.image)[0])
		}
		if (passTest(g)) {
			op = g.f;
			dO.updCa(op);
			return dO
		}
		o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.f} :
				N(g.s) ? {w: g.f, h: g.s} : {}
		if (O(o.i)) {
			o.i = toImg(o.i)
			dO = toObImg(dO)
			if (!g.n) {
				dO._ca()
			}
		}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
				st ? st.W() : 0)
		o.h = N(o.h) ? o.h :
				O(o.i) ? o.i.height :
						st ? st.H() : 0
		return dO._ca(o.x, o.y, o.w, o.h)
	}
}
function mugFl() {
	MUGFL1 = function () {
		s = $St()
		s.mug(function (b) {
			b.XY(-100, -50)
			b.cc()
			b.clMF('a', '+')
			b.clMF('w', '+')
			cjs.bindSlide(b)
		})
		wMb(function (b) {
			b.xy(400, 0).cc()
			SL(b)
			b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
					.dr0(400).H().cc(400).cc('*'))
			]).cc(400)
		}, s)
		wMb(function (b) {
			b.xy(100, 300).cc()
			SL(b)
			b.cc().fl([
				clF(.3, 1, .3, 1, 0, 0, 0, 0)
			]).cc('+')
		}, s)
		wMb(function (b) {
			var ag = 0, rg = 20, sp = 0.04;
			b.xy(500, 300).cc();
			SL(b)
			//this has gotta just mean 'on tick'
			tt(function (e) {
				v = sin(ag += sp) * rg;
				b.cc('+').fl([blF(v, v, 2)])
			})
		}, s)
	}
	MUGFL = function () {
		$St()
		s.mug(function (b) {
			bb = b
			b.XY(-100, -50)
			b.cache(0, 0, b.W(), b.H())
			cM = new cjs.ColorMatrix()
			cM.adjustHue(-180)
			cM.adjustSaturation(100)
			cM.adjustBrightness(300)
			cM.adjustContrast(-600)
			b.filters = cM
			b.updateCache()
			cjs.bindSlide(b)
		})
	}
}
manyFilters = BLOB = function () {//https://www.youtube.com/watch?v=mU1JcPikdMs
	img = new Image();
	img.onload = handleImageLoad;
	img.src = "/me.png";
	function handleImageLoad() {
		$.c().id('testCanvas')
		var canvas = document.getElementById("testCanvas");
		// create a new stage and point it at our canvas:
		stage = new createjs.Stage(canvas);
		var bmp = new createjs.Bitmap(img).set({scaleX: 0.5, scaleY: 0.5});
		stage.addChild(bmp);
		var colorMatrix = new createjs.ColorMatrix();
		colorMatrix.adjustSaturation(-100);
		colorMatrix.adjustContrast(50);
		var blackAndWhiteFilter = new createjs.ColorMatrixFilter(colorMatrix);
		bmp = bmp.clone();
		// filters are only displayed when the display object is cached
		// later, you can call updateCache() to update changes to your filters
		bmp.filters = [blackAndWhiteFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.x = 480;
		stage.addChild(bmp);
		var blurFilter = new createjs.BlurFilter(64, 0, 1);
		bmp = bmp.clone();
		bmp.filters = [blurFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.y = 200;
		stage.addChild(bmp);
		var removeRedFilter = new createjs.ColorFilter(0.25, 0.75, 1, 1); // red, green, blue, alpha
		bmp = bmp.clone();
		bmp.filters = [removeRedFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.x = 0;
		stage.addChild(bmp);
		var frame = new createjs.Shape();
		frame.graphics.setStrokeStyle(10).beginStroke("#000")
				.moveTo(480, 0).lineTo(480, 400)
				.moveTo(0, 200).lineTo(960, 200);
		frame.compositeOperation = "destination-out"; // punch the frame out.
		stage.addChild(frame);
		// draw to the canvas:
		stage.update();
	}
}
blurFilter = BLR = BLFL = function () {//http://jsfiddle.net/lannymcnie/BRrm5/
	BLRFL1 = BLURFILT = function () {
		st = $St('z', 800)
		h = $H().XY(100).a2(st).f('r').dc(50)
		fl = h.fl($BlurFl(50, 50, 10))
		bd = fl.getBounds()
		h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
		/*
		 h.startMoving()
		 h.vx = 1
		 h.vy = 1
		 */
	}
	BLRFL2 = function () {
		Q(function () {
			st = $St().t()
			h = st.h(100, 100, 'r').cir(50)
			_.in(1, function () {
				h.colFl(0, 0, 0, 1, 0, 0, 255, 0)
				h.ca(-50, -50, 100, 150)
			})
			_.in(2, function () {
				f = h.blFl(59, 59, 1)
				bd = f.b()
				h.ca(-50 + bd.x,
						-50 + bd.y,
						100 + bd.w,
						100 + bd.h)
			})
		})
	}
	BLRFL3 = function () {
		$St().bm('me', function (bm) {
			bm.dg()
			bm.alMapFl(_$BlurFl(20, 10))
			var b = bm.flBds()
			bm.cache(b.x - 50, b.y - 50, b.width + 400, b.height + 400)
		})
	}
	$.c().id('test').C('z')
	var stage = new createjs.Stage("test");
	var s = new createjs.Shape();
	var g = s.graphics;
	g.f("#FF0000").dc(0, 0, 75);
	s.x = 100;
	s.y = 100;
	s.filters = [new createjs.BlurFilter(65, 25, 3)];
	stage.addChild(s);
	s.cache(-100, -100, 200, 200);
	s.alpha = 0.5;
	stage.update();
}
blurFilter = ANIMBLUR = function () {
//http://www.olivierpons.fr/createjs/EaselJS-master/examples/Filters_simple.html
	var img;
	var stage;
	var angle;
	var canvas;
	var range;
	var speed;
	angle = 0;
	range = 30;
	speed = 0.1;
	img = new Image();
	img.onload = handleImageLoad;
	img.src = "/me.png";
	function handleImageLoad() {
		$.c().id('testCanvas')
		canvas = document.getElementById("testCanvas");
		stage = new createjs.Stage(canvas);
		bmp = new createjs.Bitmap(img);
		bmp.cache(0, 0, img.width, img.height);
		stage.addChild(bmp);
		createjs.Ticker.setFPS(15);
		createjs.Ticker.addEventListener("tick", tick);
	}
	
	function tick(event) {
		angle += speed;
		var value = Math.sin(angle) * range;
		bmp.updateCache();
		bmp.filters = [new createjs.BlurFilter(value, value, 2)];
		stage.update(event);
	}
}
colorFilter = CLFL = function () {
	COLF1 = function () {
		shape = new cjs.Shape().set({x: 100, y: 100});
		shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
		shape.filters = [$ColFl(0, 0, 0, 1, 0, 0, 255, 0)]
		shape.cache(-50, -50, 100, 100);
		$St().A(shape)
	}
//https://jsfiddle.net/mcfarljw/J4S3Z/
	$.c().id('demo').C('y')
	st = stage = new createjs.Stage("demo");
	$.i('me', function (i) {
		
		// shape.cache(-50, -50, 100, 100)
		var bmp = new cjs.Bitmap(i).X(100).Y(100)
		bmp.filters = [
			$ColFl(0, 0, 0, 1, 0, 0, 255, 0)
		]
		bmp.dg()
		bmp.cache(-200, -250, 600, 600)
		st.addChild(bmp);
	})
	createjs.Ticker.addEventListener('tick', tick);
	var container = new createjs.Container();
	var stroke = new createjs.Shape();
	stroke.graphics.f("black").p("AAeAKYgeAUAAAAAAAoYAAAoAKAeAoA8YAyBaAeBGAeBuYAUBGAAA8AKFKYAADcAKDSAAAoYAAAyAAD6gKD6YAAD6gKFeAAC0YAAH0geEOhkFKYgoCWAABkAyCCYBQDSAoA8AyAAYAyAABaigAKhaYAKgoAAqoAAsqYAKsgAAraAAhaYAKkYAyk2Ayh4YAKgeAKgoAAgUYAAgegKgKgygoYhQg8i+h4gogKYgygKgoAAgoAK").cp().ef();
	container.addChild(stroke);
	stage.addChild(container);
	stage.update();
	createjs.Tween.get(stroke).to({
		x: 500
	}, 2000).addEventListener("change", handleChange);
	function handleChange() {
		console.log('changing');
		if (container.cacheCanvas)
			container.updateCache();
	}
	
	setTimeout(function () {
		container.filters = [new createjs.ColorFilter(0, 0, 0, 1, 230, 142, 142, 1)];
		container.cache(0, 0, 600, 600);
	}, 1000);
	console.log(container);
	function tick() {
		stage.update();
	}
}
colorMatrixFilter = GREY = CLMXFL = function () {
	$St().bm('me', function (bm) {
		bm.dg()
		var matrix = $ColMx()
				.adjustHue(180)
				.adjustSaturation(-100);
		bm.filters = [
			$ColMxFl(matrix)
		]
		bm.cache(-200, -200, 800, 800);
	})
}
alphaMapFIlter = MAPF = ALMAPFL = function () {
	$St()
	$.i('me', function (i) {
		var box = new cjs.Shape();
		box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
		box.graphics.drawRect(0, 0, 100, 100);
		box.cache(0, 0, 100, 100);
		var bmp = new cjs.Bitmap(i);
		bmp.filters = [
			$AlMapFl(box.cacheCanvas)
		]
		bmp.cache(0, 0, 100, 100);
		st.addChild(bmp)
	})
}
alphaMaskFilter = AMR = ALMSFL = ALPHAMASKREVEAL = function () {
	/*This example demonstrates revealing an image using another image as the
	 mask. The mask is created by drawing a
	 shape, and then caching the shape to make an image with an alpha
	 channel. It is then applied to the image as
	 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
	 */
	cjs.testCanvas()//  cjs.sharedCode()
	var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
			image, bitmap, maskFilter, cursor, text, blur
	examples.showDistractor()
	image = new Image();
	image.onload = handleComplete
	image.src = "/chicks.png"
	stage = new createjs.Stage("testCanvas");
	text = new createjs.Text("Loading...", "20px Arial", "#FFF");
	text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
	text.textAlign = "center"
	function handleComplete() {
		examples.hideDistractor();
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);
		stage.addEventListener("stagemousemove", handleMouseMove);
		drawingCanvas = new createjs.Shape();
		bitmap = new createjs.Bitmap(image);
		blur = new createjs.Bitmap(image);
		blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
		blur.cache(0, 0, 960, 400);
		text.text = "Click and Drag to Reveal the Image.";
		stage.addChild(blur, text, bitmap);
		updateCacheImage(false);
		cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
		cursor.cursor = "pointer";
		stage.addChild(cursor);
	}
	
	function handleMouseDown(event) {
		oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt;
		isDrawing = true;
	}
	
	function handleMouseMove(event) {
		cursor.x = stage.mouseX;
		cursor.y = stage.mouseY;
		if (!isDrawing) {
			stage.update();
			return;
		}
		var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
		drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
				.beginStroke("rgba(0,0,0,0.2)")
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;
		oldMidPt.x = midPoint.x;
		oldMidPt.y = midPoint.y;
		updateCacheImage(true);
	}
	
	function handleMouseUp(event) {
		updateCacheImage(true);
		isDrawing = false;
	}
	
	function updateCacheImage(update) {
		if (update) {
			drawingCanvas.updateCache();
		} else {
			drawingCanvas.cache(0, 0, image.width, image.height);
		}
		maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
		bitmap.filters = [maskFilter];
		if (update) {
			bitmap.updateCache(0, 0, image.width, image.height);
		} else {
			bitmap.cache(0, 0, image.width, image.height);
		}
		stage.update();
	}
}
function grad() {
	radial()
	stroke()
	function radial() {
		gx.bRGF = function () {
			return this.beginRadialGradientFill.apply(this, arguments)
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rg = function (o) {
			var h = this, g = G(arguments),
					gx = h.graphics,
					o
			if (A(g[0]) && A(g[1])) {
				gx.rf(
						[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
				)
				return h
			}
			o = O(g[0]) ? g[0] :
					S(g[1]) ? _.x({c1: g[0], c2: g[1]},
							N(g[7]) ?
							{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
									: N(g[5]) ?
							{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
									: N(g[4]) ?
							{x2: g[2], r1: g[3], r2: g[4]}
									: N(g[3]) ?
							{r1: g[2], r2: g[3]}
									:
							{r2: g[2]})
							: S(g[0]) ?
					{c2: g[0]}
							: {}
			$df.grad(o)
			o.x2 = N(o.x2, o.x1)
			o.y2 = N(o.y2, o.y1)
			o.r1 = N(o.r1, 1);
			o.r2 = N(o.r2, 100)
			return o
		}
		h.rf = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rf(
					[o.c1, o.c2],
					[o.s1, o.s2],
					o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
	}
	
	function stroke() {
		h.ls = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.lg.apply(h, g)
			gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.rs = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
		h.ls = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.lg.apply(h, g)
			gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.rs = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
	}
	
	setup = function () {
		cv = $('<canvas width=500 height=400 id="canvas">').a2($('body'))
		s = st = stage = new cjs.Stage("canvas", 420, 500, 30)
		h = new cjs.Shape().a2(st)
	}
	gx.bLGF = function () {
		return this.beginLinearGradientFill.apply(this, arguments)
	}
	gx.lGF = function () {
		var gx = this, g = G(arguments)
		g[0] = _.m(g[0], function (col) {
			return oO('c', col)
		})
		return gx.bLGF.apply(gx, g)
	}
	h.lg = cjs.lg = function () {
		var g = G(arguments), o//h=this, gx=h.graphics,
		if (g.A) {
			return cjs.lg.apply(null, g.f)
		}
		o = g.O ? g.f :
				_.x({c1: g.f, c2: g.s},
						N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
								: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
								: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
		o.c1 = oO('c', o.c1 || 'z');
		o.c2 = oO('c', o.c2 || 'w')
		o.s1 = N(o.s1, 0);
		o.s2 = N(o.s2, 1)
		o.x1 = N(o.x1, 0);
		o.y1 = N(o.y1, 0)
		o.x2 = N(o.x2, 0)
		o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
		return o
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	ct.mick = function (x, y, lf) {
		var ct = this,
				h = ct.h(x, y).drag()
						.c({l: 20, C: 0, lf: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
		ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		return h
	}
}
function bad() {
	function linGradNeedsFixin() {
		LR0 = LINGRAD = function () {
			c = $.c('y').drag()
			x = c.ctx()
			x = c.ctx()
			x.lg({
				x1: 50, y1: 500, y2: 100,
				cS: {o: .2, r: .6, g: .8}
			})
			x.fr(0, 0, 100, 100)
		}
		OVALS8 = GRADS2 = SETTRANSFORM = function () {
			s = $St(800).bm('me', function (me) {
				b = me
				b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
				m = b.getMatrix()
				function tf(a, b, c, d, e, f, g, h, i) {
					return this.x = a || 0,
							this.y = b || 0,
							this.scaleX = null == c ? 1 : c,
							this.scaleY = null == d ? 1 : d,
							this.rotation = e || 0,
							this.skewX = f || 0,
							this.skewY = g || 0,
							this.regX = h || 0,
							this.regY = i || 0,
							this
				}
			})
			//////
			h = s.h(40, 10, 'b', 16).drag()
			h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
			h.c({
				C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
			}).de(400, 100)
			h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
					.de(100, 200, 500, 300)
			h.ls('r', 'w', 300, 100, 400, 140)
					.de(300, 0, 300, 500)
			//B+
		}
	}
	
	MICK = function () {
		$St()
		s.mick(500, 200)
		s.mick(700, 100, {c1: 'b', c2: 'X'})
		s.mick(700, 300, {c2: 'b'})
		s.mick(100, 100, {y2: 10})
		s.mick(100, 200, {y2: 200})
		s.mick(100, 300, {x2: 100})
	}
	DRAWSCIRCLESWORKS = RGB = function () {
		gx = $Gx().f(cjs.rgb(255, 0, 0)
		).ss(10).s('white')
		gx.dc(0, 0, 100).dc(100, 0, 100)
		gx.s('blue').f('green').dc(0, 300, 100)
		st = $St().A($Sh(gx).XY(300, 100)).u()
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		st.A(h).u()
	}
	RG1221 = RADGRAD = function () {
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG11 = RADIALGRAD = function () {
		setup()
		h.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG1441 = RADIALGRADRECT = function () {
		s = cjs.S()
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = cjs.h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.h(10, 10).a2(s).drag()
			h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
					x1,
					y1,
					r1,
					x2,
					y2,
					r2
			)
					.dr(0, 0, 400, 400)
					.endFill()
			// x--
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
	}
	RG11 = RADIALGRAD1 = function () {
		setup()
		h.x = 20
		h.y = 20
		st.addChild(h)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		h.graphics.drawRect(0, 0, 100, 100)
		h.graphics.endFill()
		st.update()
	}
	RG161 = RADIALGRADFILL2 = function () {
		setup()
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		st.update()
	}
	RG151 = RADIALGRADFILL = function () {
		setup()
// 2 colors
		h.x = 20
		h.y = 20
		h.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		h.graphics.drawRect(0, 0, 100, 100)
		h.graphics.endFill()
		st.addChild(h)
// 3 colors
		h = new cjs.Shape();
		h.x = 20;
		h.y = 140;
		h.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		h.graphics.drawRect(0, 0, 100, 100);
		st.addChild(h);
// alpha
		h = new cjs.Shape();
		h.x = 20;
		h.y = 260;
		h.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		h.graphics.drawRect(0, 0, 100, 100);
		h.graphics.endFill();
		st.addChild(h);
	}
}
LGR = LINSTROKE = GRADOVALS = function () {
	setup()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B 
RGR = $$TWOEXAMPLES$$ = function () {
	var RG1 = function () {
		var cv = $.c().W(500).H(400)
		$H().a2($St(cv)).graphics
				.bRGF(["orange", "blue"], [0, 1], 100, 100, 0, 100, 100, 350)
				.dr(0, 0, 500, 500)
		return $.d($.h1('radial grad'), cv)
	}
	var RG2 = function () {
		var cv = $.c().W(500).H(400)
		st = $St(cv)
		st.A(h = $H())
		gx = h.graphics
		gx.bRGF(["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50).dc(100, 100, 50)
		return $.d($.h1('radial grad fill'), cv)
	}
	$s({$flexDiv: {dp: 'fl', wr: 'wr'}})
	var d = $.d().id('flexDiv')
	d.A(RG1(), RG2())
}
NIP = function () {
	REC8 = GRADS1 = function () {
		s = $St()
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
		///////////////
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.h(10, 10).a2(s).drag()
			h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
		h = s.h(480, 270).drag()
		h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
		s.h(180, 270).drag()
				.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
				{w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
	}//B+ 
	s = St()
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = $h(10, 10).a2(s).drag().al(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
		h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	h2 = $h(500, 100).a2(s);
	h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
	////////
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
}//C
DRAWCAR = function () {
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/timeBased.htmlLAYYS = USINGLAYERSINEASEL9 = function () {
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.bt('safd', function () {
		s.sXY(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
	}
}
 