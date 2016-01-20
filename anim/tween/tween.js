 
cjs.Tw = cjs.Tween;
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
}
cjs.Tw.g = cjs.Tw.get //this returns tween-get on a display obj //you can optionally pass an array (ob, op1, op2..)
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