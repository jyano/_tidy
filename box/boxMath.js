V00 = function (x, y) {
	if (x === '*') {
		x = M.r() * 10
	}
	if (y === '*') {
		y = M.r() * 10
	}
	return V(N0(x), N0(y))
}
_vec = function (o, g) {
	var v = new bx.Vec(o.x, o.y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
V = function () {
	var vec = M.V.apply(null, arguments)
	return new bx.V(vec.x, vec.y)
}
Vold = function (x, y, x2, y2) {
	var g = G(arguments), x = g.f, y = g.s, x2 = g.t, y2 = g.fo, v, o
	o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	else if (O(x)) {
		o = obX(x)
		x = o.x
		y = o.y
	}
	o.x = N0(o.x)
	o.y = N(o.y, o.x)
	return _vec({x: N0(x), y: N(y, x)}, g)
	function alt() {
		V = function (x, y, x2, y2) {
			var g = G(arguments),
					x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
					v, o
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			if (A(x)) {
				y2 = x[3]
				x2 = x[2]
				y = x[1]
				x = x[0]
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			if (N(y2)) {
				x = (x - x2) / 2
				y = (y - y2) / 2
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			else if (O(x)) {
				o = obX(x)
				x = o.x
				y = o.y
			}
			o.x = N0(o.x)
			o.y = N(o.y, o.x)
			return _vec({x: N0(x), y: N(y, x)}, g)
		}
		function otherAlts() {
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g[0], y = g[1], x2 = g[2], y2 = g[3],
						vec
				if (A(x)) {
					y2 = x[3];
					x2 = x[2];
					y = x[1];
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2;
					y = (y - y2) / 2
				}
				else if (O(x)) {
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x) ? x : 0
				y = N(y) ? y : x
				vec = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					vec = vec.div()
				}
				if (g.p || g.m) {
					vec = vec.mult()
				}
				return vec
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g[0], y = g[1], x2 = g[2], y2 = g[3],
								vec
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						vec = new bx.M.b2Vec2(x, y)
						if (g.n || g.d) {
							vec = vec.div()
						}
						if (g.p || g.m) {
							vec = vec.mult()
						}
						return vec
					}
				}
			}
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
						v
				if (A(x)) {
					y2 = x[3]
					x2 = x[2]
					y = x[1]
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2
					y = (y - y2) / 2
				}
				else if (O(x)) {
					if (bx.iF(O(x))) {
						x = x.B()
					}
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x, 0)
				y = N(y, x)
				v = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					v = v.d()
				}
				if (g.p || g.m) {
					v = v.m()
				}
				return v
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments), x = g[0], y = g[1], x2 = g[2], y2 = g[3], v
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.div()
						}
						if (g.p || g.m) {
							v = v.mult()
						}
						return v
					}
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
								v
						if (A(x)) {
							y2 = x[3]
							x2 = x[2]
							y = x[1]
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2
							y = (y - y2) / 2
						}
						else if (O(x)) {
							if (bx.iF(O(x))) {
								x = x.B()
							}
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x, 0)
						y = N(y, x)
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.d()
						}
						if (g.p || g.m) {
							v = v.m()
						}
						return v
					}
				}
			}
		}
	}
}
M.V = function fn() {//x, y, x2, y2
	var g = G(arguments)
	if (g.A) {
		return fn.apply(null, g.f)
	}
	if (g.O) {
		return fn(g.f.x, g.f.y)
	}
	return N(g.t) ? {
		x: (g.f - g.t) / 2,
		y: (g.s - g.fo) / 2
	} : {x: N(g.f, 0), y: N(g.s, 0)}
} 
function lineCenter() {
	f.cent = f.center = function () {
		var bounds = this.GetAABB()
		return M.lineCenter(bounds.lowerBound,
				bounds.upperBound).mult()
	}//center point of its BOUNDING BOX
}
//https://en.wikipedia.org/wiki/Bounding_volume
$AB = function (a, b, c, d, e, f) {
	return new bx.AB()
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A($cF(50).DBF())
	return b
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
BODYAT = function () {
	w = b2d.W({g: 0})
	b = w.S(470, 270, 'y', 100)
	b1 = w.S(500, 300, 'r', 100)
	b2 = w.S(530, 330, 'o', 100)
	w.qXY(500, 300,
			function (f) {
				f.C('w')
				return true
			})
}
CLICKKILL = function () {
	box(function () {
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex ' + mouse.x)
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		return false
	})
}
LOOPTICKER = BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
fD.K = function (k) {
	var fD = this
	if (U(k)) {
		fD.getClass = function () {
			var g = G(arguments), fD = this, classes
			fD._K = fD._K || []
			this.classes = this.classes || []
			var ks = fD.classes.join(' ')
			if (g.p) {
				ks += ' : ' + fD.body().getClasses()
			}
			return ks
		}
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(k)
	return fD
}
enterFrame = function () {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DDD()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
b.$ = b.click = function (fn) {
	var b = this
	b.W().stage.on('stagemouseup', function (ev) {
		w.qPoint(
				function (f) {
					if (f.B() == b) {
						_.b(fn, b)(f)
					}
				},
				ev.rawX,
				ev.rawY
		)
	})
	return b
}
function queryPoint() {
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a WORLD point within the fixture // very accurate
	}
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a point within the fixture // very accurate
	}
}
function ray() {
	function rayy() {
		b2d.p()
	  
		b2d.Seg = function (x, y, x1, y1) {
			seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
			return seg
		}
		b2d.rCIp = function (x, y, x1, y1, maxFrac) {
			maxFrac = N(maxFrac, 1)
			return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
		}
		b2d.rCOp = function (nX, nY, maxFrac) {
			maxFrac = N(maxFrac, 1)
			op = new b2d.Collision.b2RayCastOutput(
					maxFrac, V(nX, nY)
			)
			op.maxFraction = 1
			return op
		}
		rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
			/*
			 If the ray does intersect the shape,
			 b2Fixture::RayCast will return true and we can look in the output
			 struct to find the actual fraction of the intersect point,
			 and the normal of the fixture 'surface' at that point: Raycasting
			
			 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
			 */
		}
		function rayApps() {
			IMP = function () {
				W({g: 0, w: 0}).Y()
				// y.rt(90).XY(200,240)
				w.D(200, 235, 'b', 10).lV(20, 0).d(10)
				w.D(900, 200, 'r', 100, 100).rt(45)
				r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
				r.$(function () {
					this.B().I(100, -2000)
				})
				f = r.f()
				w.i.dot(856, 240)
				/*
				 s = b2d.Seg(0,0,1200, 600)
				 s1 = b2d.Seg(1200,0, 0, 600)
				 lArr =  'the shape world transform'
				 nl = '2Vec2 — returns the hit fraction.'
				 // You can use this to compute the contact point
				 // p = (1 - lambda) segment.p1 + lambda segment.p2.
				 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
				 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
				 s.TestSegment(lArr, nl, s1, maxLam )
				 */
				ip = b2d.rCIp(0, 0, 1200, 600)
				op = b2d.rCOp(1, 2)
				res = f.rC(op, ip)
			}
			RAY = function () {
				W().C('z')
				w.S(200, 200, 'f', 100);
				w.S(500, 500, 'l', 160, 60)
				rs = w.ray(0, 0, 800, 800)
				_.in(function () {
					w.ray(0, 0, 500, 500, function (f) {
						f.C('g')
					})
					w.ray(0, 0, 500, 500, function (f) {
						f.B().bS('me')
					}, '-')
					w.ray(0, 0, 500, 500, function (f) {
						f.B().bS('sun')
					}, '+')
				})
			}
			RC = function () {
				W();
				var p1, p2, d, l
				w.me(400, 100);
				w.S(200, 200, 'r', 400, 20)
				w.$(function (v) {
					if (!p1) {
						p1 = v;
						return
					}
					if (!p2) {
						p2 = v
					} else {
						p1 = p2;
						p2 = v
					}
					w.i.e(function (c) {
						if (c.of('dot') || c.of('line')) {
							c.rm()
						}
						// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
					})
					w.d('b', p1);
					w.d('r', p2);
					w.l(p1.x, p1.y, p2.x, p2.y).K('line')
					w.rC(function (f) {
						f.B().dot()
					}, p1, p2)
				})
			}
		}
	}
	
	function rayCst() {
		w.rC = w.rayCast = function (func, v1, v2) {
			return this.RayCast(func, V(v1, '-'), V(v2, '-'))
		}
		w.RC = function () {
			this.RayCast.apply(this, arguments);
			return this
		}
		w.RCA = function () {
			this.RayCastAll.apply(this, arguments);
			return this
		}
		w.RC1 = w.RCO = function () {
			this.RayCastOne.apply(this, arguments);
			return this
		}
		function segment() {
			b2d.Seg = function (x, y, x1, y1) {
				seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
				return seg
			}
			b2d.Segment = b2d.C.b2Segment
			b2d.Segment = b2d.Collision.b2Segment
		}
		
		segment()
		b2d.rCIp = function (x, y, x1, y1, maxFrac) {
			maxFrac = N(maxFrac, 1)
			return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
		}
		b2d.rCOp = function (nX, nY, maxFrac) {
			maxFrac = N(maxFrac, 1)
			op = new b2d.Collision.b2RayCastOutput(
					maxFrac, V(nX, nY)
			)
			op.maxFraction = 1
			return op
		}
		w.rayCast = function (func, v1, v2) {
			return this.RayCast(func, V(v1, '-'), V(v2, '-'))
		}
		rayLine = function (x1, y1, x2, y2) {
			alert('rayLine')
			x1 = N(x1) ? x1 : 0
			y1 = N(y1) ? y1 : 0
			x2 = N(x2) ? x2 : 100
			y2 = N(y2) ? y2 : 100
			if (line) {
				line.remove();
				line = null
			}
			line = cjs.shape()
			line.graphics.s('white').mt(x1, y1).lt(x2, y2)
			w.s.A(line)
		}
		removeDots = function () {
			alert('removeDots')
			getDots = function () {
				var arr = []
				_.each(w.s.children, function (c) {
					if (c.N() == 'dot') {
						arr.push(c)
					}
				})
				return arr
			}
			dots = getDots()
			_.each(dots, function (dot) {
				dot.remove()
			})
		}
		b2d.Segment = b2d.C.b2Segment
		$Sg = b2d.Seg = function (x, y, x1, y1) {
			return new b2d.Segment(V(x, y), V(x1, y1))
		}
		b2d.rCIp = function (x, y, x1, y1, maxFrac) {
			maxFrac = N(maxFrac, 1)
			return new b2d.RCI(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
		}
		b2d.rCOp = function (nX, nY, maxFrac) {
			maxFrac = N(maxFrac, 1)
			op = new b2d.RCO(maxFrac, V(nX, nY))
			op.maxFraction = 1
			return op
		}
		w.RC = function (fn, p1, p2) {
			var w = this
			w.RayCast(fn, p1, p2)
			return w
		}
		w._rC = function (fn, v1, v2) {
			var w = this
			return w.RC(fn, V(v1).d(), V(v2).d())
		}
		w.rC = function () {
			var g = G(arguments), o
			if (N(g.t)) {
				$l('Ng.t')
				o = {v1: V(g.f, g.s), v2: V(g.t, g.fo), fn: g.fi}
			}
			else {
				o = {v1: g.f, v2: g.s, fn: g.t}
			}
			return this._rC(o.fn, o.v1, o.v2)
		}
		w.ray = function () {
			$l('ray')
			var w = this, g = G(arguments), o
			o = g.S_ ?
			{k: g.f, x: g.s, y: g.t, x1: g.fo, y1: g.fi, fn: g.si} :
			{x: g.f, y: g.s, x1: g.t, y1: g.fo, fn: g.fi}
			var arr = [];
			w.rC(o.x, o.y, o.x1, o.y1, function (f) {
				if (f.of(o.k)) {
					arr.push(f)
				}
			})
			if (!o.fn) {
				return arr
			}
			g.p ? o.fn(_.f(arr)) : g.n ? o.fn(_.l(arr)) : _.e(arr, o.fn)
			return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
		}
// RayCast(rayCastOutput,rayCastInput, tf)
// Cast a ray against this shape
// .// output — the ray-cast results.
// input:b2RayCastInput — the ray-cast input parameters.
// transform:b2Transform — the transform to be applied to the shape.
		w.RCO = w.rC1 = function () {
			var w = this
			w.RayCastOne
		}
		w.RCA = w.rCA = function () {
			var w = this
			w.RayCastAll
		}
		f.rC = function () {
			var inp = new b2d.RCI(V(), V(430, 450).d())
			return this.RC(inp)
		}
		b2d.RCI = b2d.RayCastInput = b2d.C.b2RayCastInput
		b2d.RCO = b2d.RayCastOutput = b2d.C.b2RayCastOutput
	}

//function ray() {
	RAYCAST = RAC = function () {
		b2d.miniWorld()
		firstPoint = secondPoint = line = null
		w.brick(200, 200, 40, 20)
		w.st.on('stagemousedown', function (ev) {
			$l('stage mouse down')
			e = ev;
			x = e.rawX;
			y = e.rawY
			if (firstPoint == null) {
				firstPoint = {x: x, y: y}
			}
			else {
				if (secondPoint == null) {
					secondPoint = {x: x, y: y}
				}
				else {
					firstPoint = secondPoint;
					secondPoint = {x: x, y: y}
				}
				removeDots()
				w.s.dot('blue', firstPoint.x, firstPoint.y)
				w.s.dot('red', secondPoint.x, secondPoint.y)
				rayLine(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
				n = 0
				w.rayCast(function (fixt) {
							n = n + 1;
							f = fixt;
							b = fixt.GetBody()
							w.s.dot(b.X(), b.Y())
						},
						firstPoint, secondPoint)
				data(n + ' guys')
			}
		})
	}
	rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
	IMP = function () {
		W({g: 0, w: 0}).Y()
		// y.rt(90).XY(200,240)
		w.D(200, 235, 'b', 10).lV(20, 0).d(10)
		w.D(900, 200, 'r', 100, 100).rt(45)
		r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
		r.$(function () {
			this.B().I(100, -2000)
		})
		f = r.f()
		w.i.dot(856, 240)
		/*
		 s = b2d.Seg(0,0,1200, 600)
		 s1 = b2d.Seg(1200,0, 0, 600)
		 lArr =  'the shape world transform'
		 nl = '2Vec2 — returns the hit fraction.'
		 // You can use this to compute the contact point
		 // p = (1 - lambda) segment.p1 + lambda segment.p2.
		 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
		 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
		 s.TestSegment(lArr, nl, s1, maxLam )
		 */
		ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
	}
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		_.in(function () {
			w.ray(0, 0, 500, 500, function (f) {
				f.C('g')
			})
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('me')
			}, '-')
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('sun')
			}, '+')
		})
	}
	RC = function () {
		W();
		var p1, p2, d, l
		w.me(400, 100);
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.i.e(function (c) {
				if (c.of('dot') || c.of('line')) {
					c.rm()
				}
				// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
			})
			w.d('b', p1);
			w.d('r', p2);
			w.l(p1.x, p1.y, p2.x, p2.y).K('line')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
	}
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		_.in(function () {
			w.ray(0, 0, 500, 500, function (f) {
				f.C('g')
			})
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('me')
			}, '-')
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('sun')
			}, '+')
		})
	}
	RC = function () {
		W();
		var p1, p2, d, l
		w.me(400, 100);
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.i.e(function (c) {
				if (c.of('dot') || c.of('line')) {
					c.rm()
				}
				// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
			})
			w.d('b', p1);
			w.d('r', p2);
			w.l(p1.x, p1.y, p2.x, p2.y).K('line')
			w.ray(p1, p2, function (f) {
				$l('ray hit')
				_f = f
				f.C('w')
			})
		})
	}
	rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
	f.rC = function () {
		var inp, res
		i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
		res = this.RayCast(inp)
		return res
	}
}
function shapes() {
	function apps() {
		CLICKKILL = function () {
			box(function () {
			})
			w.circle(420, 400, 150)
			w.circleStat(300, 400, 50)
			w.circleStat(400, 550, 50)
			w.circleStat(500, 550, 50)
			w.circleStat(550, 550, 50)
			cv.click(function (e) {
				e.preventDefault();
				cvPos = cv.position()
				cvPos.x = cvPos.left
				cvPos.y = cvPos.top
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				$l('mousex ' + mouse.x)
				w.qPoint(mouse.x, mouse.y, function (f, b, w) {
					b.kill()
					//	w.mj = w.mJ(b, o.x, o.y)
					//return true
				})
				return false
			})
		}
		FSEL = function () {
			box(function () {
			})
			w.circleStat(420, 400, 150)
			w.circleStat(300, 400, 50)
			w.circleStat(400, 550, 50)
			n = 0
			w.qPoint(300, 400, function (f, b, w) {
				$l("hit" + n++)
				//b.kill()
				//	w.mj = w.mJ(b, o.x, o.y)
				//return true
			})
		}
		FSEL = function () {
			n = 0
			box(function () {
				//$l('tick-'+ n++)
				if (w.mj) {
					w.mj.tg(mouse.x, mouse.y)
				}
			})
			w.mouse = {x: 0, y: 0}
			w.circle(420, 400, 150)
			w.circleStat(300, 400, 50)
			w.circleStat(400, 550, 50)
			w.circleStat(500, 550, 50)
			w.circleStat(550, 550, 50)
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			cv.click(function (e) {
				e.preventDefault();
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				w.qPoint(mouse.x, mouse.y, function (f, b, w) {
					w.mj = w.mJ(b, mouse.x, mouse.y)
				})
				return false
			})
			cv.mousemove(function (e) {
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				w.mouse = mouse
			})
			cv.mouseup(function () {
				w.mj = null
			})
		}
		FSEL = function () {
			box(function () {
				if (w.mj) {
					var targ = w.mj.targ()
					$l('mouse joint target: ' + targ.x + ', ' + targ.y)
					w.mj.targ(mouseX, mouseY)
				}
				else {
					$l('no mouse joint')
				}
			})
			w.G(0)
			b = w.circle(420, 400, 150)
			w.circle(300, 400, 50)
			w.circleStat(400, 550, 50)
			w.circleStat(500, 550, 50)
			w.circleStat(550, 550, 50)
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			cv.mousedown(function (e) {
				e.preventDefault();
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				w.qPoint(mouse.x, mouse.y, function (f, b, w) {
					var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
					mj.frq(120)
					mj.dmpRat(.01)
					mj.mxFo(100000)
					fq = mj.frq()
					$l(fq)
					w.mj = mj
				})
				return false
			})
			cv.dblclick(function (e) {
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				w.qPoint(mouse.x, mouse.y, function (f) {
					f.B().kill()
				})
			})
			cv.mousemove(function (e) {
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				mouseX = mouse.x
				mouseY = mouse.y
			})
			cv.mouseup(function () {
				w.DestroyJoint(w.mj)
				w.mj = null
			})
		}
		FSEL0 = function () {
			box0(function () {
				if (w.mj) {
					$l('yes')
				} else {
					$l('no')
				}
			})
			w.circle(420, 400, 150)
			w.circleStat(300, 400, 50)
			w.circleStat(400, 550, 50)
			w.circleStat(500, 550, 50)
			w.circleStat(550, 550, 50)
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			cv.mousedown(function (e) {
				e.preventDefault();
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				w.qPoint(mouse.x, mouse.y, function (f, b, w) {
					w.mj = w.mJ(b, mouse.x, mouse.y)
				})
				return false
			})
			cv.mousemove(function (e) {
				var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
				if (w.mj) {
					w.mj.tg(mouse.x, mouse.y)
				}
			})
			cv.mouseup(function () {
				w.mj = null
			})
		}
		BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
			w = $_W()
			w.SDD($dD().ctx(
							$.c('z', 1800, 1500)[0].getContext('2d'))
			)
			//the_circle = new b2CircleDef()
			n = 0
			_.ev(.1, function () {
				if (F(fn)) {
					fn(n)
				}
				n++
				w.N(1 / 5)
			})
		}
	}
	
	bx.f = function (k) {
		var arr = []
		w.each(function (b) {
			b.each(function (f) {
				if (f.is(k)) {
					arr.push(f)
				}
			})
		})
		return arr
	}
	bx.b = function (k) {
		var arr = []
		w.each(function (b) {
			if (b.of(k)) {
				arr.push(b)
			}
		})
		return arr
	}
	bH.tP = bH.tPt = function (tf, v, y) {
		var bH = this
		//bH.test = h.point =
		function alt() {
			bH.testPoint = h.tP = function (tf, vec) {
				return this.TestPoint(tf, vec)
			}
			bH.TP = function (x, y) {
				return this.TestPoint(x, y)
			}
			bH.tPt = bH.tP = function (x, y) {
				var bH = this
				alert('bH.tPt tP')
				return bH.TP(x / 30, y / 30)
			}
		}
		
		return this.TestPoint(tf, V(v, y).div())
	}
	bH.C = function () {
		return this.Copy()
	}
	bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
		return this.TestSegment(xf,
				lamb,//:Array, returns the hit fraction.
				// You can use this to compute the contact point p = (1 - lambda) segment.p1
				// + lambda segment.p2.
				norm,//:b2Vec2, returns the normal at the contact point.
				// If there is no intersection, the normal is not set.
				seg,//:b2Segment, defines the begin and end point of the ray cast
				maxLamb//:Numbera number typically in the range [0,1]
		)
	}
	bH.RC = function (fn, p1, p2) {
		return this.RayCast(fn, p1, p2)
	}
	bH.CAB = function (v1, v2) {
		var bH = this;
		return bH.ComputeAABB()
	}
	bH.CM = function (mass) {
		var bH = this;
		return bH.ComputeMass()
	}
	bH.CSA = function () {
		var bH = this
		var area = bH.ComputeSubmergedArea()
		return area
	}
}