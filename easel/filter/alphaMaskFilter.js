cjs.Filter.prototype.b = function () {
	var bd = this.getBounds()
	bd.w = bd.width
	bd.h = bd.height
	return bd
}
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
SPRITESWITHFILTERS = function () {
	stage = $St()
	$t("tick", function tick(event) {
		color += 5;
		grant3.filters = [
			new cjs.BlurFilter(10, 10, 1),
			new cjs.ColorFilter(1, 1, 1, 1, color % 255, color / 2 % 255, color / 3 % 255)
		];
		grant3.updateCache(); // Sprite has to be updated. EXPENSIVE!
		st.update();
	})
	// Preload the image. Image is coming from CORS-enabled server.
	var img = document.createElement("img");
	img.crossOrigin = "Anonymous";
	img.src = "http://php5.gskinner.com/CORS/runningGrant-easel.png";
	img.onload = createSprites;
	var grant3; // Stored to allow access in the tick
	var color = 0;
	
	function createSprites() {
		
		// 1. Default Sprite. No blur.
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant = new createjs.Sprite(data, "run");
		stage.addChild(grant);
		// 2. Cache the image. 
		// Note that this is faster (one time cache), but obviously requires
		// some padding on each frame to prevent the edge bleed
		var bmp = new createjs.Bitmap(img);
		bmp.filters = [new createjs.BlurFilter(10, 10, 1)];
		bmp.cache(0, 0, img.width, img.height);
		var data2 = new createjs.SpriteSheet({
			"images": [bmp.cacheCanvas], // Note we are using the bitmap's cache
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant2 = new createjs.Sprite(data2, "run");
		grant2.x = 185;
		stage.addChild(grant2);
		// 3. Cache the Sprite instead
		// More expensive because it needs to be updated each frame (see tick below)
		grant3 = new createjs.Sprite(data, "run");
		grant3.x = 185 * 2;
		grant3.cache(0, 0, 165, 292);
		stage.addChild(grant3);
	}
}
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
dO.aF = function (h) {
	var ob = this
	ob.fl($AF(h))
	return ob
}
dO.aF2 = function (h) {
	var ob = this
	this.fl2(AlphaMaskFilter(h))
	return ob
}
AlphaMaskFilter = $aFl = $Afl = $AF = $Af = function (a, b, c, d, e) {
	//Map an image's alpha channel to the alpha channel of a display object
	var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
	if (O(a) && a.cacheCanvas) {
		a = a.cacheCanvas
	}
	fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
	return fl
}
dO.aF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
AMR = ALPHAMASKREVEAL = function () {
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
/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */