 
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