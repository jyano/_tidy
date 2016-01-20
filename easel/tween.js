 
cjs.Tw = cjs.Tween;
cjs.Tw.g = cjs.Tw.get //this returns tween-get on a display obj //you can optionally pass an array (ob, op1, op2..)

cjs.ww = function (o) {
	var w = {}
	ww1 = function (o) {
		var w = {}
		if (N(o.x)) {
			w.x = o.x
		}
		if (N(o.y)) {
			w.y = o.y
		}
		if (N(o.xy)) {
			w.x = w.y = o.xy
		}
		if (N(o.sx)) {
			w.scaleX = o.sx
		}
		if (N(o.sy)) {
			w.scaleY = o.sy
		}
		if (N(o.sxy)) {
			w.scaleX = w.scaleY = o.sxy
		}
		if (N(o.s)) {
			w.scaleX = w.scaleY = o.s
		}
		if (N(o.kx)) {
			w.skewX = o.kx
		}
		if (N(o.ky)) {
			w.skewY = o.ky
		}
		if (N(o.kxy)) {
			w.skewX = w.skewY = o.kxy
		}
		if (N(o.k)) {
			w.skewX = w.skewY = o.k
		}
		if (N(o.r)) {
			w.rotation = o.r
		}
		if (N(o.a)) {
			w.alpha = o.a
		}
		if (N(o.rx)) {
			w.regX = o.rx
		}
		if (N(o.ry)) {
			w.regY = o.ry
		}
		if (N(o.rxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.gy)) {
			w.regY = o.ry
		}
		if (N(o.gxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.g)) {
			w.regX = w.regY = o.g
		}
		if (o.v == 0) {
			w.visible = false
		}
		if (o.v == 1) {
			w.visible = true
		}
		return w
	}
	if (N(o.x)) {
		w.x = o.x
	}
	if (N(o.y)) {
		w.y = o.y
	}
	if (N(o.xy)) {
		w.x = w.y = o.xy
	}
	if (N(o.sx)) {
		w.scaleX = o.sx
	}
	if (N(o.sy)) {
		w.scaleY = o.sy
	}
	if (N(o.sxy)) {
		w.scaleX = w.scaleY = o.sxy
	}
	if (N(o.s)) {
		w.scaleX = w.scaleY = o.s
	}
	if (N(o.kx)) {
		w.skewX = o.kx
	}
	if (N(o.ky)) {
		w.skewY = o.ky
	}
	if (N(o.kxy)) {
		w.skewX = w.skewY = o.kxy
	}
	if (N(o.k)) {
		w.skewX = w.skewY = o.k
	}
	if (N(o.r)) {
		w.rotation = o.r
	}
	if (N(o.a)) {
		w.alpha = o.a
	}
	if (N(o.rx)) {
		w.regX = o.rx
	}
	if (N(o.ry)) {
		w.regY = o.ry
	}
	if (N(o.rxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.gy)) {
		w.regY = o.ry
	}
	if (N(o.gxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.g)) {
		w.regX = w.regY = o.g
	}
	if (o.v == 0) {
		w.visible = false
	}
	if (o.v == 1) {
		w.visible = true
	}
	return w
	alt = function (o) {
		var w = {}
		if (N(o.x)) {
			w.x = o.x
		}
		if (N(o.y)) {
			w.y = o.y
		}
		if (N(o.xy)) {
			w.x = w.y = o.xy
		}
		if (N(o.sx)) {
			w.scaleX = o.sx
		}
		if (N(o.sy)) {
			w.scaleY = o.sy
		}
		if (N(o.sxy)) {
			w.scaleX = w.scaleY = o.sxy
		}
		if (N(o.s)) {
			w.scaleX = w.scaleY = o.s
		}
		if (N(o.kx)) {
			w.skewX = o.kx
		}
		if (N(o.ky)) {
			w.skewY = o.ky
		}
		if (N(o.kxy)) {
			w.skewX = w.skewY = o.kxy
		}
		if (N(o.k)) {
			w.skewX = w.skewY = o.k
		}
		if (N(o.r)) {
			w.rotation = o.r
		}
		if (N(o.a)) {
			w.alpha = o.a
		}
		if (N(o.rx)) {
			w.regX = o.rx
		}
		if (N(o.ry)) {
			w.regY = o.ry
		}
		if (N(o.rxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.gy)) {
			w.regY = o.ry
		}
		if (N(o.gxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.g)) {
			w.regX = w.regY = o.g
		}
		if (o.v == 0) {
			w.visible = false
		}
		if (o.v == 1) {
			w.visible = true
		}
		return w
	}
}
$Tw = function (a, b) {
	var g = G(arguments)
	var displayObject = a
	if (U(b)) {
		return tweenGet(displayObject)
	}
	//first arg passed to twg, and then rest of args are 'to' pams
	displayObject = tweenGet(g[0])
	_.e(g.r, function (b) {
		//can pass obj, time ,ease
		if (A(b)) {
			if (b[2]) {
				displayObject = displayObject.to(cjs.ww(b[0]), b[1], $Ea(b[2]))
			}
			//can pass obj, time
			else if (b[1]) {
				//can set pops to another obj??
				if (O(b[1])) {
					displayObject = displayObject.set(cjs.ww(b[0]), b[1])
				}
				else {
					displayObject = displayObject.to(cjs.ww(b[0]), b[1])
				}
			}
			else {
				displayObject = displayObject.tick(a[0])
			}
		}

//can pass a function and it will run when it's its turn
		else if (F(b)) {
			displayObject = displayObject.call(b, [])
		}
		//make it wait, optionally pass in true! ?
		else if (N(b)) {
			if (b < 0) {
				// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
				displayObject = displayObject.wait(b * -1, true)
			}
			else {
				displayObject = displayObject.wait(b)
			}
		}
		//for playing/stopping?
		else if (O(b) && b.length == 1) {
			if (b.p) {
				displayObject = displayObject.play(b.p)
			}
			else if (b.s) {
				displayObject = displayObject.stop(b.s)
			}
		}
		else {
			displayObject = displayObject.to(cjs.ww(b))
		}
	})
	return Tw(displayObject)
	function Tw(tween) {
		var g = G(arguments), w = tween
		return w
	}
	
	function tweenPops() {
		var g = G(arguments), o = {}
		g.e(function (arg) {
			if (arg == 'l') {
				o.loop = true
			}
			if (arg == 't') {
				o.useTicks = true
			}
			if (arg == 'i') {
				o.ignoreGlobalPause = true
			}
			if (arg == 'o') {
				o.override = true
			}
			if (arg == 'p') {
				o.paused = true
			}
			if (N(arg)) {
				o.position = arg
			}
			if (F(arg)) {
				o.onChange = arg
			}
		})
		return o
	}
	
	function tweenGet(a) {
		return A(a) ? cjs.Tw.g(a[0], tweenPops.apply(null, _.r(a)))
				: cjs.Tw.g(a)
	}
}
tw = cjs.Tween.prototype
tw.lp = tw.setLoop = function (a) {
	if (U(a)) {
		return this.loop
	}
	this.loop = a ? true : false
	return this
}
//w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.
tw.tog = tw.gg = tw.toggle = tw.$ = function () {
	var isPaused = this._paused
	if (isPaused) {
		this.setPaused(false)
	}
	else {
		this.setPaused(true)
	}
	return this
}
tw.tk = function (a) {
	w.tick(a);
	return w
}
tw.th = tw.t = tw.then = function (tw, a, b) {
	return this.to(cjs.ww(tw), a, b)
}
tw.dur = tw.dr = function (a) {//total time duration
	//get time of tween in ms
	//duration:read only
	if (U(a)) {
		return this.duration
	}
}
tw.iGP = tw.ig = tw.ignore = function (a) {
	if (U(a)) {
		return this.ignoreGlobalPause
	}
	this.ignoreGlobalPause = a ? true : false;
	return this
}
tw.ps = tw.pos = function (a, b) {
	
	//get or set position of tween (in time in ms)// see w.dr
	if (U(a)) {
		return w.position
	}
	if (b == 'n') {
		b = cjs.Tween.NONE
	}//0
	if (b == 'l') {
		b = cjs.Tween.LOOP
	}//1 default
	if (b == 'r') {
		b = cjs.Tween.REVERSE
	}//2
	tw.setPosition(a, acm(b))
	//default is loop, can use r|n
	return w
}
tw.Plugin = function (a, b) {
	var g = G(arguments), a = g[0], b = g[1]
	if (U(a)) {
		return g.p ? w.pluginData.data : w.pluginData
	}
	if (U(b)) {
		w.pluginData = a;
		return w
	}
	w.pluginData[a] = b
	return w
}
dO = cjs.DisplayObject.prototype
dO.tw = dO.tween = function () {
	var i = this, g = G(arguments), tw
	g.unshift(i)
	tw = _tw = $Tw.apply(null, g)
	return tw
}
dO.twL = dO.tweenLoop = function () {
	var dO = this, g = G(arguments)
	g.unshift([dO, 'l'])
	return _tw = $Tw.apply(dO, g)
}
dO.spin = dO.sp = function () {
	this.twL([{r: 360}, 4000]);
	return this
}
dO.grow = function () {
	this.tw([{sxy: 10}, 10000])	//$Tw(this, [{sxy: 10}, 10000]);
	return this
}
tweens = _TW = {}
tweens.prod1 = function (a) {
	return $Tw(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
tweens.prod2 = function (a) {
	return $Tw(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
tweens.rpunch = function (arm) {
	
	//arm=arm|| c1.g('arm')
	return $Tw(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.lpunch = function (lf) {
	return $Tw(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
tweens.rott = function (a) {
	return $Tw(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
tweens.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	$Tw(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
tweens.shakeX = function (a) {
	return $Tw(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
TWEENBOX = function () {
	TWEENBOX = function () {
		z()
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}//A--------
	TWEENBOX = function () {
		z()
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}//A--------
	z()
	stage = dragStage().tick()
	stage.bm('me', function (bm) {
		SL(bm)
		cjs.tween(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
		cjs.tween(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
		)
		//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
	})
	dragStage().tick().bm('me', function (bm) {
		b = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		rotateShake(bm)
	})
}
EASING = function () {
	stage = createjs.stage(1000, 10000).tick().A()
	stage.mug(
			function (b) {
				bb = b
				b.sXY(.2).XY(50, 100)
				cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
				)
			})
	eas = function (y, e) {
		stage.mug(
				function (b) {
					b.sXY(.2).XY(50, y)
					cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
					b.$(function () {
						pop(e + ' : ' + oO('E', e))
					})
				})
	}
	eas(300, 'bO');
	eas(500, 'bI');
	eas(700, 'bIO')
	eas(900, 'bnO');
	eas(1100, 'bnI');
	eas(1300, 'bnIO')
	eas(1500, 'cO');
	eas(1700, 'cI');
	eas(1900, 'cIO')
	eas(2100, 'eO');
	eas(2300, 'eI');
	eas(2500, 'eIO')
	eas(2700, 'qO');
	eas(2900, 'qI');
	eas(3100, 'qIO')
	eas(3900, 'qnO');
	eas(4100, 'qnI');
	eas(4300, 'qnIO')
	eas(4500, 'sO');
	eas(4700, 'sI');
	eas(4900, 'sIO')
	eas(5100, 'qdO');
	eas(5300, 'qdI');
	eas(5500, 'qdIO')
}
TWEEN = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
TWEEN = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
TWEENPOS = function () {
	TWEENPOS = function () {
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS = function () {
		z()
		s = cjs.stage(500).A()
		s.bm('me', function (bm) {
			b = bm;
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
				w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
			})
			setInterval(function () {
				tweens.rpunch(g)
			}, 2000)
		})
	}
	s = $St(500).t().A()
	s.bm('me', function (bm) {
		b = bm
		s.bm('guy', function (guy) {
			g = guy
			guy.XY(200)
			w0 = $Tw(guy, [{r: 3000}, 100000])
			w = $Tw(bm, [{sx: 3}, 1000])
					.wait(1000).pause(w0).then({sy: 3}, 4000)
					.play(w0).then({sy: .3}, 4000)
		})
	})
}///B
EAART = function () {
	s = stage = $St(500, 600).A()
	s.can.P('a').XY(300)
	s.A(h = shape = cjs.shape())
	h.rec(100, 200, 0, 200, 'red')
			.rec(100, 100, 100, 20, 'green')
			.rec(145, 120, 10, 80, 'orange')
			.cir(105, 100, 20, 'blue')
			.cir(105, 100, 8, 'black')
			.cir(200, 100, 20, 'blue')
			.cir(200, 100, 8, 'black')
			.cir(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.tweenLoop(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.tweenLoop(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
$Ldr('TIMSPIN', function () {
	$St().qB('guy').scXY(.5, .3).XY(300, 300).spin()
	_.in(3, function () {
		T.f(1)
	});
	_.in(9, function () {
		T.f(1000)
	})
})
EASELART8 = TWEEN = function () {
	stage = $St(500, 600)
	shape = stage.Sh()
	gx = shape.graphics.FS()
	shape.rec(100, 200, 0, 200, 'a')
	shape.rec(100, 100, 100, 20, 'g')
	shape.rec(145, 120, 10, 80, 'o')
	shape.cir(105, 100, 20, 'b')
	shape.cir(105, 100, 8, 'x')
	shape.cir(200, 100, 20, 'b')
	shape.cir(200, 100, 8, 'x')
	//shape.circle(100,20,100,'g')
	SL(shape)
	shape.rX(100).rY(300).X(100).Y(300)
	p = function () {
		$Tw([shape, {l: 1}],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
		)
		$Tw([shape, {l: 1}],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
///
POPSPIN = function () {
	angle = 0
	img = $.img('me', handleImageLoad)[0]
	function stop() {
		cjs.Ticker.removeEventListener("tick", tick)
	}
	
	function handleImageLoad() {
		canvas = $.c('p', 960, 400).id("testCanvas").A()
		stage = $St(canvas)
		stage.autoClear = true;
		bmp = new cjs.Bitmap(img)
				.rXY(img.width >> 1, img.height >> 1)
				.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		stage.A(bmp).update();
		cjs.Ticker.timingMode = cjs.Ticker.RAF
		cjs.tick(tick)
	}
	
	function tick(event) {
		angle += 0.01
		var value = Math.sin(angle) * 360
		bmp.rt(value).sXY(value / 360)
		stage.update(event)
	}
}
function needsWorld() {
	TWEENER = NEEDSWORLD = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	WAPTWEEN = NEEDSWORLD = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----}
}
TWEX = NOTFINISHED = function () {
	target.alpha = 1;
	cj.Tween.get(target)
			.wait(500)
			.to({alpha: 0, visible: false}, 1000)
			.call(handleComplete);
	function handleComplete() {
		alert('Tween complete')
	}
}
TWEENART = function (a) {
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	s = $St()
	s.mug(function (b) {
				b.XY(300);
				b.rC(); //centers it's reg point?
				SK(b)
				$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
				s.mug(function (b) {
					b.XY(200);
					b.rC();
					b.WH(200);
					SL(b);
					$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
					s.mug(function (b) {
						b.rC();
						b.XY(600);
						SC(b)
						$Tw([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			},
			EDIT()
	)
}
TWEENART = function (a) {
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	s = $St()
	s.mug(function (b) {
				b.XY(300);
				b.rC(); //centers it's reg point?
				SK(b)
				$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
				s.mug(function (b) {
					b.XY(200);
					b.rC();
					b.WH(200);
					SL(b);
					$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
					s.mug(function (b) {
						b.rC();
						b.XY(600);
						SC(b)
						$Tw([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			},
			EDIT()
	)
}
$Ea = cjs.Ea = cjs.ease = function (e) {
	return cjs.Ease[oO('E', e)]
}
TWEENPOS1 = function () {
	_$St().t().bm('me', function (me) {
		st.bm('guy', function (guy) {
			guy.XY(200)
			cjs.tween(me, [{sx: 3}, 1000]).wait(1000).pause(
					w0 = cjs.tween(guy, [{r: 3000}, 100000]))
					.then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
		})
	})
}
TWEENER = function () {
	TWEENER = function () {
		z()
		s = createjs.stage(500).tick().A()
		s.bm('me', function (bm) {
			s.bm('guy', function (guy) {
				g = guy
				b = bm
				tween = cjs.tween(bm,
						//pass in objects and they are 'to', 'to', etc..
						[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
						//make it wait
						1000,
						//pass in a function and it will run when it's its turn
						function () {
							s.bm('chicks', function (b) {
								cjs.tween(b, [{sxy: .2}, 2000])
							})
						}
				).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
				tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
				stop = function () {
					tween.stop();
					tween2.stop()
				}
			})
		})
	}
	TWEENER = function () {
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	Q(['me', 'chicks', 'guy'], function () {
		W()
		guy = w.i.qB('chicks', 300, 300)
		me = w.i.qB('me')
		w0 = $Tw(guy, 200, [{r: 3000}, 100000])
		$Tw(me,
				[{sx: 3}, 1000])
				.wait(1000)
				.pause(w0)
				.then({sy: 3}, 4000)
				.play(w0)
				.then({sy: .3},
				4000)
		/*     .wait(1000).pause(w0).then({sy:3}, 4000)
		 .play(w0).then({sy:.3},4000)
		
		
		 tw =$Tw(
		 w.i.qB('me'),
		 [{sx:2,sy:2}, 3000],
		 [{a:0},300],
		 1000,
		 function(){$Tw(w.i.qB('chicks').spin(),
		 [{sxy:.2}, 2000])
		 }
		
		 )
		
		 */
		//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
		//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
	})
}//B+++++
TWEENPOS = function () {
	TWEENPOS = function () {
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS = function () {
		z()
		s = cjs.stage(500).A()
		s.bm('me', function (bm) {
			b = bm;
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
				w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
			})
			setInterval(function () {
				tweens.rpunch(g)
			}, 2000)
		})
	}
	z()
	s = $St(500).t().A()
	s.bm('me', function (bm) {
		b = bm
		s.bm('guy', function (guy) {
			g = guy
			guy.XY(200)
			w0 = $Tw(guy, [{r: 3000}, 100000])
			w = $Tw(bm, [{sx: 3}, 1000])
					.wait(1000).pause(w0).then({sy: 3}, 4000)
					.play(w0).then({sy: .3}, 4000)
		})
	})
}///B
WAPTWEEN = function (a) {
	WAPTWEEN = function (a) {
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	Q(['me', 'chicks', 'guy'], function () {
		W()
		me = w.i.qB('me')
		$Tw(
				[me, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
		TR(me)
		$Tw([me, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	//$.ev(2, function(){ tweens.rpunch(g) } )
}//B+++++
TWEENBALLS = function () {
	TWEENBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, '$$ me')
	})
}//world//A-----
EASELART8 = TWEEN = function () {
	stage = $St(500, 600)
	shape = stage.Sh()
	gx = shape.graphics.FS()
	shape.rec(100, 200, 0, 200, 'a')
	shape.rec(100, 100, 100, 20, 'g')
	shape.rec(145, 120, 10, 80, 'o')
	shape.cir(105, 100, 20, 'b')
	shape.cir(105, 100, 8, 'x')
	shape.cir(200, 100, 20, 'b')
	shape.cir(200, 100, 8, 'x')
	//shape.circle(100,20,100,'g')
	SL(shape)
	shape.rx(100).ry(300).x(100).y(300)
	p = function () {
		EaselTween([shape, {l: 1}],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
		)
		EaselTween([shape, {l: 1}],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
EAART = function () {
	z()
	s = stage = cjs.stage(500, 600).A()
	s.can.P('a').XY(300)
	s.A(h = shape = cjs.shape())
	h.rect(100, 200, 0, 200, 'red')
			.rect(100, 100, 100, 20, 'green')
			.rect(145, 120, 10, 80, 'orange')
			.circ(105, 100, 20, 'blue')
			.circ(105, 100, 8, 'black')
			.circ(200, 100, 20, 'blue')
			.circ(200, 100, 8, 'black')
			.circ(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.tweenLoop(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.tweenLoop(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
//this returns tween-get on a display obj
//you can optionally pass an array (ob, op1, op2..)
//old:
//w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.
//tw.tkXXX = function (a) {		this.tick(a);return this	}
//A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
TWEX = function () {
	target.alpha = 1;
	createjs.Tween.get(target)
			.wait(500)
			.to({alpha: 0, visible: false}, 1000)
			.call(handleComplete);
	function handleComplete() {
		//Tween complete
	}
}
//w.target
//use when returned
// w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
// w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
//use in queue
TWEEN = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEENART = function (a) {
	
	
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	wMb(
			function (b, s) {
				b.xy(300);
				b.rgc(); //centers it's reg point?
				SK(b)
				cjs.tween(
						[b, 'l'],
						{sxy: .5},
						[{sxy: .7}, 500],
						[{sxy: .5}, 500]
				)
				wMb(function (b) {
					s.a(b)//manual add necessary?
					b.xy(200);
					b.rgc();
					b.wh(200);
					SL(b);
					cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
					wMb(function (b) {
						s.a(b);
						b.rgc();
						b.xy(600);
						SC(b)
						cjs.tween([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			}, EDIT()
	)
}
TWEEN = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEENART = function (a) {
	
	
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	wMb(
			function (b, s) {
				b.xy(300);
				b.rgc(); //centers it's reg point?
				SK(b)
				cjs.tween(
						[b, 'l'],
						{sxy: .5},
						[{sxy: .7}, 500],
						[{sxy: .5}, 500]
				)
				wMb(function (b) {
					s.a(b)//manual add necessary?
					b.xy(200);
					b.rgc();
					b.wh(200);
					SL(b);
					cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
					wMb(function (b) {
						s.a(b);
						b.rgc();
						b.xy(600);
						SC(b)
						cjs.tween([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			}, EDIT()
	)
}
TWEEN = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEENART = function (a) {
	
	
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	wMb(function (b, s) {
				b.xy(300);
				b.rgc(); //centers it's reg point?
				SK(b)
				cjs.tween(
						[b, 'l'],
						{sxy: .5},
						[{sxy: .7}, 500],
						[{sxy: .5}, 500])
				wMb(function (b) {
					s.a(b)//manual add necessary?
					b.xy(200);
					b.rgc();
					b.wh(200);
					SL(b);
					cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
					wMb(function (b) {
						s.a(b);
						b.rgc();
						b.xy(600);
						SC(b)
						cjs.tween([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			}, EDIT()
	)
}
TWEENBOX = DRAGSTAGE = function () {
	stage = $.dragStage()
	stage.bm('me', function (bm) {
		SL(bm)
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 100],
				[{x: 0, sxy: .7, r: -30, a: .5}, 100])
		//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
	})
	$.dragStage().t().bm('me', function (bm) {
		b = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		rotateShake(bm)
	})
}
EAS1 = function () {
	W()
	Q(function () {
		b = w.i.qB('me').sXY(.2).XY(50, 100)
		$Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000])
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
		function eas(y, e) {
			b = w.i.qB('me').sXY(.2).XY(50, y)
			$Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
			b.$(function () {
				pop(e + ' : ' + oO('E', e))
			})
		}
	})
}//A---
EAS = function () {
	W()
	Q(function () {
		b = w.i.qB('me').sXY(.2).XY(50, 100)
		$Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000])
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
		function eas(y, e) {
			b = w.i.qB('me').sXY(.2).XY(50, y)
			$Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
			b.$(function () {
				pop(e + ' : ' + oO('E', e))
			})
		}
	})
}//A---