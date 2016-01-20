 
cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
cjs.Sp = cjs.Sprite
_$SS = cjs._spriteSheet = _$spriteSheet = function (sS) {
	return new cjs.SS(sS)
}
$SS = cjs.spriteSheet = $spriteSheet = function (sS) {
	sS.images = sS.images || sS.i
	sS.animations = sS.animations || sS.a
	sS.frames = sS.frames || sS.f
	sS.framerate = sS.framerate || sS.r
	//fix source (needs a '/')
	//sS.images[ 0 ] = _.ensureSlash( sS.images[0] )
	//set next to false, on all anims
	// _.e(sS.animations, function(an){an.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return _$SS(sS)
}
cjs.SS = cjs.SpriteSheet
cjs.iSS = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('SpriteSheet') != -1
}
cjs.toSS = function (sS) {
	if (U(sS)) {
		return
	}
	//call a spritesheet by name
	if (S(sS)) {
		sS = cjs._sp[sS]
	}
	//it if it is a sS literal, it makes it into a sS
	return sS.images || sS.i ? $SS(sS) : sS
}
cjs.toSS = function (sS) {
	if (U(sS)) {
		return
	}
	//call a spritesheet by name
	if (S(sS)) {
		sS = cjs._sp[sS]
	}
	//it if it is a sS literal, it makes it into a sS
	return sS.images || sS.i ? $SS(sS) : sS
}
cjs.iSS = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('SpriteSheet') != -1
}
sS = cjs.SS.prototype
sS = cjs.SpriteSheet.prototype
//methods
sS.cl = function () {
	return this.clone.apply(this, arguments)
}
sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
	return this.getAnimation.apply(this, arguments)
}
sS.fr = sS.getFr = function () {
	return this.getFrame.apply(this, arguments)
}
sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
	return this.getFrameBounds.apply(this, arguments)
}
sS.numFr = function () {
	return this.getNumFrames.apply(this, arguments)
}
//Properties
sS.ans = sS.anims = function () {
	return this.animations
}
sS.iC = function () {
	return this.complete
}
sS.fR = sS.rate = sS.r = function (rate) {
	var sS = this
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
//Events
sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
	var sS = this
	sS.on('complete', fn)
	return sS
}
sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
	/*
	
	 'getframe' event:
	 Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
	 Event Payload:
	
	 index Number
	 The frame index.
	 frame Object
	 The frame object that getFrame will return.
	 */
	var sS = this
	sS.on('getframe', fn)
	return sS
}
//other:
sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
	var sS = this
	a = a || true
	b = b || false
	c = c || false
	$SSU.aFF(sS, a, b, c)
	return sS
}
//methods
sS.cl = function () {
	return this.clone.apply(this, arguments)
}
sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
	return this.getAnimation.apply(this, arguments)
}
sS.fr = sS.getFr = function () {
	return this.getFrame.apply(this, arguments)
}
sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
	return this.getFrameBounds.apply(this, arguments)
}
sS.numFr = function () {
	return this.getNumFrames.apply(this, arguments)
}
//Properties
sS.ans = sS.anims = function () {
	return this.animations
}
sS.iC = function () {
	return this.complete
}
sS.fR = sS.rate = sS.r = function (rate) {
	var sS = this
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
//Events
sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
	var sS = this
	sS.on('complete', fn)
	return sS
}
sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
	/*
	
	 'getframe' event:
	 Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
	 Event Payload:
	
	 index Number
	 The frame index.
	 frame Object
	 The frame object that getFrame will return.
	 */
	var sS = this
	sS.on('getframe', fn)
	return sS
}
//other:
sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
	var sS = this
	a = a || true
	b = b || false
	c = c || false
	$SSU.aFF(sS, a, b, c)
	return sS
}
sS = cjs.SpriteSheet.prototype
//methods
sS.cl = function () {
	return this.clone.apply(this, arguments)
}
sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
	return this.getAnimation.apply(this, arguments)
}
sS.fr = sS.getFr = function () {
	return this.getFrame.apply(this, arguments)
}
sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
	return this.getFrameBounds.apply(this, arguments)
}
sS.numFr = function () {
	return this.getNumFrames.apply(this, arguments)
}
//Properties
sS.ans = sS.anims = function () {
	return this.animations
}
sS.iC = function () {
	return this.complete
}
sS.fR = sS.rate = sS.r = function (rate) {
	var sS = this
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
//Events
sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
	var sS = this
	sS.on('complete', fn)
	return sS
}
sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
	/*
	
	 'getframe' event:
	 Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
	 Event Payload:
	
	 index Number
	 The frame index.
	 frame Object
	 The frame object that getFrame will return.
	 */
	var sS = this
	sS.on('getframe', fn)
	return sS
}
//other:
sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
	var sS = this
	a = a || true
	b = b || false
	c = c || false
	$SSU.aFF(sS, a, b, c)
	return sS
}
meSprite = function () {
	return $sprite(SS).XY(10).drag()
}
meSprite = function () {
	meSS = $SS(MeSprite)
	meSp = $Sp(meSS)
	meSp.XY(10)
	meSp.drag()
	return meSp
}
MESP = function () {
	st = _$St().t()
	sp = meSprite().a2(st)
	sp.p('jump')
}
SPRITE = function (sprite) {
	sprite = $sprite(sprite || SS).XY(10).drag()
	stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
	stage.A(sprite)
	controls = {
		jump: function () {
			sprite.gotoAndPlay('jump')
		},
		explode: function () {
			sprite.gotoAndPlay('explode')
		},
		spin: function () {
			sprite.gotoAndPlay('spin')
		},
		stop: function () {
			sprite.stop()
		},
		play: function () {
			sprite.play()
		}
	}
	$.div('yellow', 460, 89).css({
		position: 'absolute',
		top: 200,
		left: 300,
		padding: 20,
		opacity: .9
	}).A().drag().A(
			$.span(' '),
			$.button('spin', function () {
				controls.spin()
			}), $.span(' '),
			$.button('jump', function () {
				controls.jump()
			}), $.span(' '),
			$.button('explode', function () {
				controls.explode()
			}), $.span(' '),
			$.button('play', function () {
				controls.play()
			}), $.span(' '),
			$.button('stop', function () {
				controls.stop()
			}), $.span(' '),
			$.button('meta', function () {
				SPRITE()
			})
	)
	s = sprite
	return controls
}
SPRITE2 = function () {
	stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
	stage.A(sprite = $sprite(SS).XY(10).drag())
}
function meSpriteSetup() {
	meSpriteFrames = [
		[2, 2, 1024, 512, 0, 0, 0],
		[1030, 2, 1024, 512, 0, 0, 0],
		[2058, 2, 1024, 512, 0, 0, 0],
		[2, 518, 1024, 512, 0, 0, 0],
		[1030, 518, 1024, 512, 0, 0, 0],
		[2058, 518, 1024, 512, 0, 0, 0],
		[2, 1034, 1024, 512, 0, 0, 0],
		[1030, 1034, 1024, 512, 0, 0, 0],
		[2058, 1034, 1024, 512, 0, 0, 0],
		[2, 1550, 1024, 512, 0, 0, 0],
		[1030, 1550, 1024, 512, 0, 0, 0],
		[2058, 1550, 1024, 512, 0, 0, 0],
		[2, 2066, 1024, 512, 0, 0, 0],
		[1030, 2066, 1024, 512, 0, 0, 0],
		[2058, 2066, 1024, 512, 0, 0, 0],
		[2, 2582, 1024, 512, 0, 0, 0],
		[1030, 2582, 1024, 512, 0, 0, 0],
		[2058, 2582, 1024, 512, 0, 0, 0],
		[2, 3098, 1024, 512, 0, 0, 0],
		[1030, 3098, 1024, 512, 0, 0, 0],
		[2058, 3098, 1024, 512, 0, 0, 0],
		[2, 2, 1024, 512, 1, 0, 0],
		[1030, 2, 1024, 512, 1, 0, 0],
		[2058, 2, 1024, 512, 1, 0, 0],
		[2, 518, 1024, 512, 1, 0, 0],
		[1030, 518, 1024, 512, 1, 0, 0],
		[2058, 518, 1024, 512, 1, 0, 0],
		[2, 1034, 1024, 512, 1, 0, 0],
		[1030, 1034, 1024, 512, 1, 0, 0],
		[2058, 1034, 1024, 512, 1, 0, 0],
		[2, 1550, 1024, 512, 1, 0, 0],
		[1030, 1550, 1024, 512, 1, 0, 0],
		[2058, 1550, 1024, 512, 1, 0, 0],
		[2, 2066, 1024, 512, 1, 0, 0],
		[1030, 2066, 1024, 512, 1, 0, 0],
		[2058, 2066, 1024, 512, 1, 0, 0],
		[2, 2582, 1024, 512, 1, 0, 0],
		[1030, 2582, 1024, 512, 1, 0, 0],
		[2058, 2582, 1024, 512, 1, 0, 0],
		[2, 3098, 1024, 512, 1, 0, 0]
	]
	meSpriteAnims = {
		explode: $An([34, 35, 36, 37, 38, 39], 0.1),
		spin: $An([25, 26, 27, 28, 29, 30, 31, 32, 33]),
		jump: $An([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
	}
	meSpriteImgs = ["/guy_0.png", "/guy_1.png"]
	MeSprite = SS = {framerate: 24, images: meSpriteImgs, frames: meSpriteFrames, animations: meSpriteAnims}
}
$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
//extractFrame
$SSU.exFr = function () {
	/*
	
	 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
	 Defined in extractFrame:106
	 Returns a single frame of the specified sprite sheet as a new PNG image. 
	 An example of when this may be useful is to use a spritesheet frame
	 as the source for a bitmap fill.
	 WARNING: In almost all cases it is better to display
	 a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
	 The extractFrame method may cause cross-domain warnings
	 since it accesses pixels directly on the canvas.
	 Parameters:
	
	 spriteSheet SpriteSheet
	 The SpriteSheet instance to extract a frame from.
	 frameOrAnimation Number | String
	 The frame number or animation name to extract.
	 If an animation name is specified, only the first frame of the animation will be extracted.
	 Returns:
	
	 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
	 */
	return this.exactFrame.apply(this, arguments)
}
//addFlippedFrames
$SSU.aFF = function () {
	/*
	 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
	 Defined in addFlippedFrames:76
	 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
	 This is an experimental method, and may be buggy. Please report issues.
	
	 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
	
	 For example:
	 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
	
	 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
	 Parameters:
	
	 spriteSheet SpriteSheet
	 horizontal Boolean
	 If true, horizontally flipped frames will be added.
	 vertical Boolean
	 If true, vertically flipped frames will be added.
	 both Boolean
	 If true, frames that are flipped both horizontally and vertically will be added.
	
	 */
	$SSU.addFlippedFrames.apply($SSU, arguments)
}
cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
	var ssb = new cjs.SpriteSheetBuilder()
	ssb = new createjs.SpriteSheetBuilder()
	if (mc) {
		ssb.A(mc)
	}
	return ssb
}
//https://www.youtube.com/watch?v=HaJ615V6qLk 
sSB = cjs.SpriteSheetBuilder.prototype
sSB.sc = sSB.Z = function (sc) {
	if (U(sc)) {
		return this.scale
	}
	this.scale = sc;
	return this
}
sSB.maxW = function (sc) {
	if (U(sc)) {
		return this.maxWidth
	}
	this.maxWidth = sc;
	return this
}
sSB.oRd = sSB.oC = sSB.complete = function (fn) {
	this.on("complete", fn)
	return this
}
sSB.oRdA = sSB.loadA = sSB.async = function () {
	var sSB = this, g = G(arguments), o
	o = g.F_ ? {readyFn: g.f, build: g.s} : {build: g.f}
	if (o.readyFn) {
		sSB.oRd(o.readyFn)
	}
	return sSB.bA(o.build)
}
sSB.aMC = sSB.A = function (mc) {
	this.addMovieClip(mc)
	return this
}
sSB.bA = function (a) {
	this.buildAsync(a)
	return this
}
SSBUILDER = function () {
	z();
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = cjs.stage(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.transform(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)
}
SSBUILDER = function () {
	z();
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = cjs.stage(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.transform(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)
}
cjs.parseZoe = function (sprObj) {
	//fix source (needs a '/')
	sprObj.images[0] = S.eL(sprObj.images[0])
	//set next to false, on all anims
	//_.e(sprObj.animations, function(anim){anim.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return sprObj
}
//official examples:  
cjs.parseZoe = function (sprObj) {
	
	
	//fix source (needs a '/')
	sprObj.images[0] = S.eL(sprObj.images[0])
	//set next to false, on all anims
	//_.e(sprObj.animations, function(anim){anim.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return sprObj
}
cjs.zoeSp = cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {
	if (sS.images) {
		sS = cjs.parseZoe(sS)
		sS = $SS(sS)
	}
	return $Sp(sS)
} 