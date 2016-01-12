w = b2d.World.prototype
w.edgeChain = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]),
			x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
	if (A(g[0])) {
		
		//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
		//  w.weld(x,b)
		// X=g[0][0]
		// Y=g[0][1]
	}
	_.each(g, function (e) {
		if (A(e)) {
			e = w.edgeD.apply(w, e)
		}
		w.weld(e, x)
	})
	//  w.weld(x2  , x)
	w.dot(300, 300)
	return x2
}
w.edge = function (x1, y1, x2, y2) {
	var w = this, e
	// you would always want a single stat?
	w.line(x1, y1, x2, y2)
	e = w.S(0, 0, b2d.edge(x1, y1, x2, y2))
	return e
}
w.edgeD = function (x1, y1, x2, y2) {
	var w = this, l, e
	l = w.line(x1, y1, x2, y2)
	e = w.D(0, 0, b2d.edge(x1, y1, x2, y2)).den(1)
	e.bindSprite2(l)
	return e
}
w.edges = function (ptArr) {
	var w = this, e
	ptArr = ptArr || []
	i = V(ptArr.shift())
	i2 = V(ptArr.shift())
	e = w.edge(i.x, i.y, i2.x, i2.y)
	_.each(ptArr, function (v) {
		i = i2
		i2 = V(v)
		e.glue(
				w.edge(i.x, i.y, i2.x, i2.y)
		)
	})
}
w.edgesD = function (ptArr) {
	var w = this
	ptArr = ptArr || []
	i = V(ptArr.shift())
	i2 = V(ptArr.shift())
	w.edge(i.x, i.y, i2.x, i2.y)
	_.each(ptArr, function (v) {
		i = i2
		i2 = V(v)
		w.edge(i.x, i.y, i2.x, i2.y)
	})
}
w.edgeArr = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
	_.each(g, function (e) {
		e = w.edgeD(e[0], e[1], e[2], e[3])
		w.weld(e, x, V(g[0][0], g[0][1]))
	})
	return x
}
w.sTW = w.sToW = w.gTL = function (x, y) { //works
	var w = this,
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = w.lTG = function (x, y) {//also works!
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.boxes = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.box.apply(w, g)
	})
	return w
}
w.brcks = w.boxesStat = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.brick.apply(w, g)
	})
	return w
}
w.edgAr = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
	_.e(g, function (e) {
		e = w.edgD(e[0], e[1], e[2], e[3])
		w.wed(e, x, V(g[0][0], g[0][1]))
	})
	return x
}
w.edgD = function (x1, y1, x2, y2) {
	var w = this,
			l = w.l(x1, y1, x2, y2),
			e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
	e.bS(l) //bS2
	return e
}
w.edgs = function () {
	var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
	if (A(g[0])) {
		//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
		//  w.weld(x,b)
		// X=g[0][0]
		// Y=g[0][1]
	}
	_.e(g, function (e) {
		if (A(e)) {
			e = w.edgD.apply(w, e)
		}
		w.wed(e, x)
	})//  w.weld(x2  , x)
	w.dot(300, 300)
	return x2
}
w.edgsD = function (ar) {
	var w = this
	ar = ar || [V(), V(100, 100)]
	i = V(ar.shift())
	i2 = V(ar.shift())
	w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		w.edg(i.x, i.y, i2.x, i2.y)
	})
}
w.edg = function (x1, y1, x2, y2) {
	var w = this
	// you would always want a single stat?
	w.l(x1, y1, x2, y2, '-')
	return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
}
w.edgs = function (ar) {
	var w = this, e
	ar = ar || []
	i = V(ar.shift())
	i2 = V(ar.shift())
	e = w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		e.glu(w.edg(i.x, i.y, i2.x, i2.y))
	})
}
w.K = function () {
	return this.B.apply(this, arguments).kin()
}
function kin() {
	bD.kin = function () {
		return this.T(1)
	}
	bD.kin = function () {
		return this.T(1)
	}
}
w.kin = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.kin(x, y), fixtDef)
	return body
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.vertsKin = function (x, y, arrs) {
	var bod = this.kin(x, y)
	_.each(arrs, function (arr) {
		bod.convex(arr[0], _.rest(arr))
	})
	return bod
}
w.sB = function (x, y) {
	return this.cB($sBD(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
}
w.kB = function (x, y) {
	return this.CB($kB(x, y))
}
w.edgAr = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
	_.e(g, function (e) {
		e = w.edgD(e[0], e[1], e[2], e[3])
		w.wed(e, x, V(g[0][0], g[0][1]))
	})
	return x
}
w.edgD = function (x1, y1, x2, y2) {
	var w = this,
			l = w.l(x1, y1, x2, y2),
			e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
	e.bS(l) //bS2
	return e
}
w.edgs = function () {
	var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
	if (A(g[0])) {
		//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
		//  w.weld(x,b)
		// X=g[0][0]
		// Y=g[0][1]
	}
	_.e(g, function (e) {
		if (A(e)) {
			e = w.edgD.apply(w, e)
		}
		w.wed(e, x)
	})//  w.weld(x2  , x)
	w.dot(300, 300)
	return x2
}
w.edgsD = function (ar) {
	var w = this
	ar = ar || [V(), V(100, 100)]
	i = V(ar.shift())
	i2 = V(ar.shift())
	w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		w.edg(i.x, i.y, i2.x, i2.y)
	})
}
w.edg = function (x1, y1, x2, y2) {
	var w = this
	// you would always want a single stat?
	w.l(x1, y1, x2, y2, '-')
	return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
}
w.edgs = function (ar) {
	var w = this, e
	ar = ar || []
	i = V(ar.shift())
	i2 = V(ar.shift())
	e = w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		e.glu(w.edg(i.x, i.y, i2.x, i2.y))
	})
}
w.fixts = function (x, y, f) {
	var w = this
	f = b2d.fixts[f]
	return w.B(x, y, f)
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
w.GG = function () {
	return this.GetGravity()
}
w.SG = function (gv) {
	this.SetGravity(gv);
	return this
}
w.gv = w.G = function (x, y) {
	var w = this, v, gv
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var v, currGrav = this.GetGravity()
			if (U(x)) {
				return currGrav
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			if (x == 'flip') {
				v = V(-currGrav.x, -currGrav.y)
			}
			w.SetGravity(v)
			return this
		}
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
}
w.polS = function () {
	alert('you found w.polS');
	var w = this, g = G(arguments), b, o
	if (g.jA) {
		return w.pol.apply(w, g.f)
	}
	if (O(g[0]) && O(g[1])) {
		g.e(function (g) {
			w.pol(g).stat()
		});
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.CF = function () {
	this.ClearForces();
	return this
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.loop = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
function walls() {
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht)
				.stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
	w.flat = function () {
		var w = this, b
		return b
	}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
	w.tall = function Side(x) {
		var ht = w.can.height
		return this.wall(x, ht / 2, 40, ht)
	}
	w.long = function Flat(y) {
		var wd = w.can.width
		return this.wall(wd / 2, y, wd, 40)
	}
	w.walls = function (wa) {
		var w = this;
		if (wa === 0) {
			return w
		}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
		w.left = w.tall(0)
		w.right = w.tall(w.can.width)
		w.roof = w.long(0)
		w.floor = w.long(w.can.height)
		return w
	}
	//
	w.vW = function (col, H, x, y) {
		var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
		if (!S(col)) {
			y = x;
			x = H;
			H = col;
			col = 'x'
		}
		H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
		if (U(x)) {
			x = cW / 2;
			y = cH / 2 - H / 2
		}
		else if (U(y)) {
			x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
			y = cH / 2 - H / 2
		}
		//x-=10?
		return w.R(col, 20, H, x, y).bo(.2).K('wall')
	}
	w.walls = function (o) {
		var w = this,
				can = w.canvas,
				W = can.width,
				H = can.height,
				wa = o.w,
				col, h
		if (wa == 0) {
			return w
		}
		if (F(wa)) {
			wa()
		}
		else if (A(wa)) {
			col = wa[0]
			W = wa[1]
			h = wa[2]
			if (!S(col)) {
				h = W;
				W = col;
				col = 'o'
			}
			W = N(W) ? W : w.W()
			h = N(h) ? h : w.H()
			w.floor = w.R(col, W, 20, 0, h - 20)
			w.right = w.R(col, 20, h, W - 20, 0)
			w.roof = w.R(col, W, 20, 0, 0)
			w.left = w.R(col, 20, h, 0, 0)
		}
		else if (wa == '_') {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'L') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'U') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
		}
		w.$$(function () {
			w.S(w.mx, w.my, 'x', [[10, 10, '-']])
		})
		return w
	}
}
//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	var w = this
	var b = w.brick(x, y, wd, ht)
			.stat().fr(0).K('wall')
	return b
}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}
w.yShip = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-halfSide, halfSide], [0, -side * 2], [halfSide, halfSide]])
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		n = N(n) ? n : 1
		this.I(this.dir().mult(n * 0.1))
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(),
				x = lv.x,
				y = lv.y,
				a = this.angVel(),
				abs = Math.abs
		return (abs(x) > 0.5) || (abs(y) > 0.5) || (abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(
				y.X() + dist.x,
				y.Y() + dist.y,
				6,
				'w'
		).K(kind).addClass('bul bullet')
		bullet.I(y.GetWorldVector(V(0, -100)).div(4))
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship.den(.5).K('ship')
}
w.yShipEquilateral = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.dir()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.linVel(), x = lv.x, y = lv.y, a = this.angVel()
		return (Math.abs(x) > 0.5) || (Math.abs(y) > 0.5) || ( Math.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').addClass(kind).K(kind)
		bullet.addClass('bullet bul')
		vec = y.GetWorldVector(V(0, -100))
		bullet.impulse(vec.x / 4, vec.y / 4)
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship
}
w.left = w.horiz = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.X(num, '-')
	})
}
w.up = w.vert = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.Y(num, '-')
	})
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
w.GBL = w.bLX = function () {
	return this.GetBodyList()
}
w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
w.each = w.eachBody = function (l, uD) {//=w.e=w.eB
	//can pass a cb to be run on EACH body
	//can also pass a uD to restrict cb to
	//run only on bodies with that uD
	var w = this,
			bs = w.GetBodyList(), k, b
	if (S(l)) {
		k = l;
		l = uD
	} else {
		k = uD
	}
	while (bs) {
		b = bs
		bs = bs.next()
		if (b.has(k)) {
			l(b)
		}
	}
	return w
}
w.eachD = w.eachDyn = function (l) {
	var w = this;
	w.each(function (b) {
		if (b.isDyn()) {
			l(b)
		}
	})
	return w
}
w.e$ = w.b$ = function (fn) {
	var w = this
	w.eB(function (b) {
		b.$(fn)
	})
	return w
}// = w.eachClick = w.bodyClick 
w.eD = w.eDB = w.eDyn = function (fn) {
	return this.eB(function (b) {
		if (b.iD()) {
			fn(b)
		}
	})
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	$t(function () {
		w.bds(fn)
	})
	return w
}
w.bds = w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.e = w.eB = function () {
	var w = this, g = G(arguments), o, b
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	b = w.B()
	while (b) {
		b.kFn = function (k, fn) {
			var b = this, g = G(arguments), o
			o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
			if (b.of(o.k) && F(o.fn)) {
				o.fn(b)
			}
			return b
		}
		b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
	}
	return w
}
w.each = function (func, userData) {
	var bodies = this.GetBodyList(), kind, body
	if (S(func)) {
		kind = func;
		func = userData
	} else {
		kind = userData
	}
	while (bodies) {
		body = bodies
		bodies = bodies.next()
		if (!kind || body.is(kind)) {
			func(body)
		}
	}
	return this
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	z(function () {
		w.e(fn)
	})
	return w
}
w.inEv = function (n1, n2, fn) {
	_.in(n1, function () {
		_.ev(n2, function () {
			fn()
		})
	})
}
w.evIn = function (n1, n2, fn) {
	_.ev(n1, function () {
		_.in(n2, function () {
			fn()
		})
	})
}
w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.bL = function () {
	return this.GetBodyList()
}    //can be result of w.b if g.u//= w.getBodyList
w.rnRecs = w.randRects = function () {
	var that = this
	_.t(30, function (i) {
		that.BRICK(
				M.r() * 1100 + 20,
				M.r() * 150 + 40,
				M.r() * 30 + 15,
				M.r() * 30 + 15
		).K('rR randomRect')
	})
	return this
}
w.rnF = w.randFx = function () {
	return this.dynamic(M.r() * 1000, 100,
			b2d.randomFixture())
}
w.random = w.addRandomBodies = function (howMany) {
	var w = this
	_.t(howMany || 10, function () {
		w.addRandomBody()
	})
	return w
}
w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.BALL(100 + (i * 8), 50, 10)
	})
	return w
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
function randBods() {
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
	w.randRects = function (ob) {
		var that = this
		ob = ob || {}
		var y = ob.y || 0,
				z = N(ob.z) ? ob.z : 1
		_.times(30, function (i) {
			that.rect(
					Math.random() * 1100 + 20,
					(Math.random() * 150 + 40) + y,
					(Math.random() * 30 + 15) * z,
					(Math.random() * 30 + 15) * z
			).stat().K('randomRect')
		})
		return this
	}
	w.addRandomBody = w.randomFixture = function () {
		var body = this.dynamic(Math.random() * 1000, 100,
				b2d.randomFixture())
		return body
	}
	w.random = w.addRandomBodies = function (howMany) {
		howMany = howMany || 10;
		var that = this
		_.times(howMany, function (num) {
			that.addRandomBody()
		})
		return this
	}
	w.addTenBalls = function (num) {
		num = num || 10;
		var that = this
		_.times(num, function (i) {
			that.ball(100 + (i * 80), 200)
		})
		return this
	}
	w.addHundBalls = function (num) {
		num = num || 100;
		var that = this
		_.times(num, function (i) {
			that.circ(100 + (i * 8), 50, 10)
		})
		return this
	}
}
w.aTri = function (x, y) {
	this.sB(x, y).CF(
			$fD($pH()._SAA([
				V(-1, 0), V(0, -1), V(1, 0)
			]))
	)
	return this
}
w.aAF = w.aF__ = function () {
	var w = this, g = G(arguments)
	w.aF.apply(w, g)
	return w
}
w.A = function (bD, fD) {
	var w = this,
			g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w.R = function (c, W, H, x, y) {
	alert('w.R')
	var w = this, g = G(arguments),
			wC = w.cen(),
			r
	if (!S(g.f)) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2;
		y = wC.y - H / 2
	}
	return w.S(
			x + W / 2,
			N(y, x) + H / 2,
			c,
			W, H
	)
	old = function () {
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
	}
}
w.vW = function (col, H, x, y) {
	alert('w.vW')
	var w = this, g = G(arguments),
			cW = w.can.W(),
			cH = w.can.H()
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w.cAF = w.aF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	return sB.CF($fD($aH(A(g.t) ? g.t : _.r(g, 2))))
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
w._sB = function (x, y, fD) {
	var b = this.CB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.cCB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return b
}
w.cRB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cRF(r)
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this._sB(x, y)
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.cTri = w.tri = function (x, y) {
	return this.sB(x, y), $fD($pH()).SAA([
		V(-1, 0), V(0, -1), V(1, 0)
	], 3)
}
w.dynX = w.dynamicX = function (x, y, fD) {
	var w = this, body
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	return w.body(b2d.dyn(x, y), fD)
}
w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {
	var w = this, g = G(arguments);
	var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
}
w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}
w.dC = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return cF
}
w.dC_ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}
w.sC = function (x, y, r) {
}
////////////////////////
function soon() {
	w.boxOld = function (x, y, W, H) {//=brk=brick=
		w.circleStat = function (x, y, r) {
			var cir = w.sB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		w.circle = function (x, y, r) {
			var cir = w.dB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
		w.brickOld = function (x, y, W, H) {//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
		}
	}
	w.aRF = function () {
		var w = this, g = G(arguments)
		var b = w.sB(g.f, g.s)
		b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		return w
	}
	w.aCF = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cCF(r)
		return w
	}
// uses k:
	w.box = w.bi = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A($dB(x, y), $rF(W, H)).K('box')
	}
	w.cF = function (bD, fD) {
		return this.cB(bD).cF(fD)
	}
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
}
w.bulBD = w.bul = function (x, y) {
	return this.B($bulBD(x, y))
}
w.bul = function (x, y) {
	var def, body
	def = b2d.dyn(x, y)
	def.bullet = true
	body = this.createBody(def)
	return body
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.B($sB(0, 0))
	eg.f($eF(a, b, c, d))
	return eg
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.walls = function (o) {
	var w = this,
			can = w.canvas,
			W = can.width,
			H = can.height,
			wa = o.w,
			col, h
	if (wa == 0) {
		return w
	}
	if (F(wa)) {
		wa()
	}
	else if (A(wa)) {
		col = wa[0]
		W = wa[1]
		h = wa[2]
		if (!S(col)) {
			h = W;
			W = col;
			col = 'o'
		}
		W = N(W) ? W : w.W()
		h = N(h) ? h : w.H()
		w.floor = w.R(col, W, 20, 0, h - 20)
		w.right = w.R(col, 20, h, W - 20, 0)
		w.roof = w.R(col, W, 20, 0, 0)
		w.left = w.R(col, 20, h, 0, 0)
	}
	else if (wa == '_') {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'L') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'U') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
	}
	w.$$(function () {
		w.S(w.mx, w.my, 'x', [[10, 10, '-']])
	})
	return w
}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
w.tall = function Side(x) {
	var ht = w.can.height
	return this.wall(x, ht / 2, 40, ht)
}
w.long = function Flat(y) {
	var wd = w.can.width
	return this.wall(wd / 2, y, wd, 40)
}
w.walls = function (wa) {
	var w = this;
	if (wa === 0) {
		return w
	}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
	w.left = w.tall(0)
	w.right = w.tall(w.can.width)
	w.roof = w.long(0)
	w.floor = w.long(w.can.height)
	return w
}
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		g.e(function (g) {
			w.pol(g)
		});
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		_.e(g.t, function (p) {
			b.pol({v: p})
		})
		return g.m ? M.p(b) : b
	}
	o = g.O ? g.f : N(g.f) ? {x: g.f, y: g.s, p: g.t} : {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		if (b2d.iB(o.p)) {
			o.p = M.p(o.p)
		}
		_p = o.p
		b.pol(o.p)
		if (g.m) {
			b = M.p(b)
		}
		return b
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.POLY = w.poly = w.verts = w.vs = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.dB(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
		//  bod.convex( fixt )
		//	b.convex.apply(b, arr)
	})
	return b
}
w.pol1 = function () {
	var w = this, g = G(arguments), o
	var v = V(g.f, g.s)
	var b = w.D(v.x, v.y)
	b.pol({v: g.t})
	return b
}
w.ps = w.poliees = function (x, y, pS) {
	pS.ps(this.D(x, y), function (pS) {
		b1.pol(pS)
	})
}
w.ps = function (x, y, p) {
	var w = this, b
	b = w.D(x, y)
	p.ps(b, function (p) {
		b1.pol(p)
	})
}
w.polies = w.ps = function (x, y, p) {
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}
w.b = w.begin = function () {
	var that = this
	_.each(arguments, function (func) {
		that.beginHandlers.push(func)
	})
	return this
}
w.cl = w.w = w.k = w.on = w.with = w.collWith = function () {
	var w = this, g = G(arguments)
	w.b(function (cx) {
		cx.w(g[0], g[1], g[2])
	})
	return w
}
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
w.collideAny = function (what, func) {
	return this.bg(what, function (cx) {
		$.do(function () {
			func(cx)
		})
	})
}
w.coll = function (k1, k2, func) {
	var that = this,
			w = this,
			name = k1 + k2
	if (F(k2)) {
		return this.collideAny(k1, k2)
	}
	this.beg(function (cx) {
		if (cx.with(k1, k2)) {
			that.flag(name, cx)
		}
	})
	cjs.tick(function () {
		var cx = that.flagged(name)
		if (cx) {
			func(cx)
		}
	})
}
w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
w.cl = function () {
	var w = this, g = G(arguments), o
	o = g.s && !F(g.s) ?
	{k: g.f, k2: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	w.b(function (cx) {
		o.k2 ? cx.wi(o.k, o.k2, o.fn) :
				cx.wi(o.k, o.fn)
	})
	return w
}
w.CL = function (k) {
	var w = this
	var fn = function rc(a, b, c) {
		w.cl(k, a, b, c)
		return rc
	}
	return fn
}
w.cl0 = function () {
	var w = this, g = G(arguments)
	w.cl.apply(w, g.concat('0'))
	return w
}
w.with = w.collWith = function (a, b, c) {
	var w = this
	w.beg(function (cx) {
		cx.with(a, b, c)
	})
	return this
}
w.class = function (k) {
	var w = this
	var ob = {
		class: k, k: k,
		world: w, w: w
	}
	ob.with = ob.collWith = function (k, func) {
		var ob = this
		if (O(k)) {
			_.each(k, function (fun, k) {
						ob.with(k, fun)
					}
			)
		}
		else {
			w.with(this.class, k, func)
		}
		return this
	}
	return ob
}
w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.BG.push(fn)
	return w
	function alt() {
		w.beg = w.begin = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.BG.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.BG.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.BG.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}//ADDS one or more handlers to beginHandlers array
	}
}
w.b = w.bg = w.beg = function () {
	//ADDS one or more handlers to beginHandlers array
	var w = this
	G(arguments).e(function (fn) {
		w.BG.push(fn)
	})
	return w
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
	return w
}
w.b = w.beg = w.begin = function (k, k2, fn) {
	var w = this, g = G(arguments)
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?
	//if first pam is a fn, it assumes 1 or more fns
	//it just puts each item into bH arr
	if (g.F_) {
		g.e(function (fn) {
			w.bH.push(fn)
		})
	}
	else if (F(g.t)) {
		w.bH.push(function (cx) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		})
	}
	else if (F(g.f)) {
		w.bH.push(function (cx) {
			if (cx.w(k)) {
				k2(cx)
			}
		})
	}
	return w
}
w.end = function (k, k2, fn) {
	var w = this, g = G(arguments), eH = w.endHandlers
	if (F(k)) {
		_.e(g, function (fn) {
			eH.push(fn)
		})
	}
	else if (F(k2)) {
		fn = k2;
		eH.push(function (cx) {
			if (cx.with(k)) {
				fn(cx)
			}
		})
	}
	else if (F(fn)) {
		eH.push(function (cx) {
			if (cx.with(k, k2)) {
				fn(cx)
			}
		})
	}
	return w
}
w.pre = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.preHandlers.push(fn)
	})
	return w
}
w.po = w.post = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.postHandlers.push(fn)
	})
	return w
}
//preSolve alterations: //enable,friction,restitutoin
w.pre = function () {
	w._pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	w.onPre = w.pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	var w = this, g = G(arguments), o, fn
	if (F(g.t)) {
		fn = function (cx, i) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		}
	}
	else if (F(g.s)) {
		fn = function (cx, i) {
			cx.w(g.f, function (f) {
				_.b(g.s, this)(f, cx, i)
			})
		} //this good
	}
	else {
		fn = g.f
	}
	//fn=$.mo(.2,fn) //this will break it!!
	w.pH.push(fn)
	return w
	function pre() {
		w.pre = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.PRE.push(fn)
			})
			return w
		}
	}
	
	function alt() {
		w.pre = function () {
			var w = this, g = G(arguments), o, fn
			w._pre = function () {
				var that = this
				_.each(arguments, function (func) {
					that.preHandlers.push(func)
				})
				return this
			}
			//this good
			//fn=$.mo(.2,fn) //this will break it!!
			return w._pre(
					F(g.t) ?
							function (cx, i) {
								if (cx.w(g.f, g.s)) {
									g.t(cx)
								}
							} :
							F(g.s) ?
									function (cx, i) {
										cx.w(g.f, function (f) {
											_.b(g.s, this)(f, cx, i)
										})
									} :
									g.f
			)
		}
	}
}
w.post = w.po = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
	function alt() {
		w.post = w.po = function () {
			var w = this, g = G(arguments)
			g.e(function (fn) {
				w.PH.push(
						function (cx, I) {
							var i = _.m(I.normalImpulses, M.fl)[0],
									t = _.m(I.tangentImpulses, M.fl)[0]
							return fn(
									cx, i, t)
						})
			})
			return w
		}
		w.po = w.post = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.PO.push(fn)
			})
			return w
		}
		w.post = function () {
			var that = this
			_.e(arguments, function (func) {
				that.postHandlers.push(func)
			})
			return this
		}
	}
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
	function alt() {
		w.end = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.END.push(fn)
			})
			return w
		}
		w.end = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.endHandlers.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.endHandlers.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.endHandlers.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}
	}
}
w.bag = w.pD = function (x, y) {
	var b = w.D(x, y), g = G(arguments)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('bag')
}
w.roc = w.rck = w.rock = w.pS = function (x, y) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('rock')
}
w.box = w.bo = w.bi = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
	w.bumpAlt = function (x, y, r) {
		x = x || 100
		y = N(y) ? y : x
		r = r || 20
		return this.A(b2d.stat(x, y),
				$cF(r)).K('bumper')
	}
}
w.bal = w.ball = w.cD = w.ba = w.cirB = function () {
	var w = this, g = G(arguments), o, b
	if (true) {
		b = w.D(g.f, g.s)
		b.cF.apply(b, _.r(arguments, 2))
	}
	else {
		o = {x: g.f, y: g.s, r: g.t}
		var b = w.D(o.x, o.y)
		b.f($cF(o.r))
	}
	return b.decor(g).K('ball')
}
w.brk = w.brick = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}
w.ball = w.ba = function (x, y, r) {
	var w = this,
			ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(
			x, y, b2d.circ(r)
	)
	return ball.K('ball')
}
w.brick = w.bii = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h)
			.K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	if (g.u) {
		return w.D(
				w.hW, w.hH)
	}
	//	o = //g.O ? g.f :
	o = g.O_ ? {p: g.f, f: g.r} :
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.cB(b2d.bD(o.p))
	b.K(g.k)
	$a(b, 'f', g.G(o.f))
	return b
}
w.D_ = w._D = function (o) {
	alert('w._D??? nah, w.D_')
	return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.D = function () {
//   super star !
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
	function alt() {
		w.dyn = w.body = w.A = function (x, y, fD) {
			var w = this, b, bd
			//pass body def
			if (b2d.isBDef(x)) {
				bd = x;
				fD = y
			}
			//make body def
			else {
				if (O(x)) {
					fD = y;
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 500
				y = N(y) ? y : 250
				bd = b2d.dyn(x, y)
			}
			b = w.CreateBody(bd)
			// pass in one fixture or an ARRAY( of fixts )
			if (fD) {
				b.fixt(fD)
			}
			return b
		}
		w.B = function () {
			var w = this, g = G(arguments), o
			return g.u ? w.bd() :
					w.cB.apply(w, arguments)
		}
		w.B = w.D = function (x, y) {
			var w = this, bd, b, fixts,
					g = G(arguments),
					x = g[0],
					y = g[1], clas
			if (S(_.last(g))) {
				clas = g.pop()
			}
			if (N(x)) {
				bd = b2d.dyn(x, y);
				fixts = _.rest(g, 2)
			}
			else {
				if (b2d.isBDef(x)) {
					bd = x
				} else {
					x = V(x);
					bd = b2d.dyn(x.x, x.y)
				}
				fixts = _.rest(g)
			}
			b = w.CreateBody(bd)
			b.H.apply(b, fixts)
			if (clas) {
				b.K(clas)
			}
			return b
		}
	}
}
w.S = function (x, y) {
	var w = this,
			g = G(arguments),
			x = g[0], y = g[1],
			bd, b, fixts, clas
	if (S(_.last(g))) {
		clas = g.pop()
	}
	if (N(x)) {
		bd = b2d.stat(x, y)
		fixts = _.rest(g, 2)
	}
	else {
		if (b2d.isBDef(x)) {
			bd = x
		}
		else {
			x = V(x);
			bd = b2d.stat(x.x, x.y)
		}
		fixts = _.rest(g)
	}
	b = w.CreateBody(bd)
	if (fixts.length) {
		b.H.apply(b,
				fixts
				//   _.map(fixts, function(f){   return A(f)?f:[f]  })
		)
	}
	if (clas) {
		b.K(clas)
	}
	return b
}
w.circleStat = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.D = function (x, y) {
	return this.cB($dB(x, y))
}
w.brickSensor = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y),
			b2d.poly(W, H).r(0).sensor(true))
			.K('brickSensor')
}
w.ball = function (x, y, r) {
	var w = this
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	var ball = w.dB(x, y).CF($cF(r))
	ball.K('ball')
	return ball
}
w.dance = function () {
	var w = this
	w.e(function (b) {
		if (b.iD()) {
			b.thr()
		}
	})//w.eD
	return w
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!!!}
w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
w.ds = w.dB = function (b) {
	var w = this, g = G(arguments), o
	return g.u ? w.eB(function (b) {
		w.destroy(b)
	}) : w.DB(b)
}
w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = function (b) {
	var w = this
	if (U(b)) {
		w.each(function (b) {
			w.destroy(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.$ = w.click = function (func) {
	var w = this
	$(w.hud.canvas).click(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
w.$$ = function (func) {
	var w = this
	$(w.hud.canvas).dblclick(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.mm(function (o) {
	w.logMXY(o)
})
w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})
w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.$$ = function (fn) {
	var w = this
	w.UI().dblclick(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {
			x: w.mx,
			y: w.my,
			X: e.clientX,
			Y: e.clientY,
			e: e
		}
		fn(o)
	})
	return w
}
w.md = function (fn) {
	var w = this
	w.i.c.mousedown(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		w.q(w.mx, w.my, function (f) {
			if (f) {
				o.f = f;
				o.b = f.B()
			}
		})
		fn(o)
	})
	return w
}
w.mu = function (fn) {
	var w = this, $cv = $(w.i.canvas)
	$cv.mouseup(function (e) {
		fn({
			x: w.mx,
			y: w.my,
			e: e
		})
	})
	return w
}
w.mdq = function (fn) {
	var w = this
	w.md(function (e) {
		w.q(e.x, e.y, function (f) {
			fn(f, e)
		})
	})
	return this
}
w.e$ = function () {
	var g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	this.e(function (b) {
		if (b.of(o.k)) {
			b.$(o.fn)
		}
	})
	return this
}
w.QA = w.Q = w.QAB = function (a, b) {
	this.QueryAABB(a, b);
	return this
}
w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.qAB = w.Q = w.queryAABB = function (func, x1, y1, x2, y2) {
	var w = this,
			AB = b2d.AB(x1, y1, x2, y2),
			num = 0
	w.QueryAABB(function (f) {
		num++
		return func(f, f.B(), num)
	}, AB)
	return num
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.rad = function (x, y, r, fn) {
	return this.Q({
		x1: x - r,
		y1: y - r,
		x2: x + r,
		y2: y + r,
		fn: fn
	})
}
w.qPt = w.q = w.qP = w.queryPt = w.query = function () {
	var w = this, g = G(arguments), o,
			fx
	o = g.S_ && N(g.s) ?
	{k: g.f, x: g.s, y: g.t, fn: g.fo} :
			g.S_ && O(g.s) ?
			{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
					g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
							g.A_ ?
							{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
							{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
	var fn = function (f) {
		if (!f) {
			alert('w.query !this(f)')
		}
		if (f.of(o.k) && f.tP(o.x, o.y)) {
			fx = f;
			return false
		}
		return true
	}
	w.qA(fn, $AB(o.x, o.y))
	if (!fx) {
		return false
	}
	if (F(o.fn)) {
		_.b(o.fn, fx)(fx);
		return w
	}
	return fx
}
w.ABpt = w.ptAB = w.bAt = w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
	var w = this, g = G(arguments), o
	var selBd = null
	w.QA(function (f) {
				if (f.B().isDyn() && f.tPt(mX, mY)) {
					selBd = f.B();
					return false
				}
				return 1
			},
			$AB(x - .001, y - .001, x + .001, y + .001))
	return selBd ? selBd : 0
}//w.getBodyAtPoint =
//this is HACK//
w.q = w.qPt = w.qP = w.queryPt = w.query = function () {
	var w = this, g = G(arguments), o,
			fx
	o = g.S_ && N(g.s) ?
	{k: g.f, x: g.s, y: g.t, fn: g.fo} :
			g.S_ && O(g.s) ?
			{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
					g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
							g.A_ ?
							{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
							{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
	var fn = function (f) {
		if (!f) {
			alert('w.query !this(f)')
		}
		if (f.of(o.k) && f.tP(o.x, o.y)) {
			fx = f;
			return false
		}
		return true
	}
	w.qA(fn, $AB(o.x, o.y))
	if (!fx) {
		return false
	}
	if (F(o.fn)) {
		_.b(o.fn, fx)(fx);
		return w
	}
	return fx
}
//END HACK//
w.QP = w.QPt = function (fn, vec) {
	this.QueryPoint(fn, vec);
	return this
}
w.QS = w.QH = function () {
	return this.QueryShape.apply(this, arguments)
}
w.qP = w.qPt = w.qPoint = function (fn, x, y) {
	return this.QP(fn, V(x, y, '-'))
} //w.queryPoint =
w.queryPoint = function (func, x, y) {
	this.QueryPoint(
			function (f) {
				_fixt = f
				_body = _fixt.GetBody()
				func(f)
			},
			V(x, y, '-')
	)
	return this
}
w.queryXY = function (func, x, y) {
	var w = this  //does not divide
	w.QueryAABB(func, b2d.AABB01(x, y))
	return w
}
w.getBodyAtPoint = function (x, y) {
	var body = null
	this.QueryAABB(function queryFunc(fxt) {
				if (!fxt.isStat() && fxt.test(
								mX * 30,
								mY * 30
						)) {
					body = fxt.body()
					return false
				}
				return true
			},
			b2d.AABB01(x, y))
	return body
}
w.bodyAt = w.bodyAtPoint = function (x, y, fn, k) {
	var w = this, b //does not div
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(function (f) {
		if (U(k) || f.of(k)) {
			if (f.test(x, y)) {
				b = f.B()
				return false
			}
		}
		return true
	}, x, y)
	if (!b) {
		return false
	}
	if (F(fn)) {
		return fn(b) || w
	}
	return b
}
w.qXY = function (x, y, fn) {
	var w = this, v
	//function on TOPMOST fixt FIRST
	// then goes down, but only if function returns 'true'
	//great way to work with fixts/bods at a certain x,y point
	if (F(x)) {
		v = V(y, fn);
		fn = x
	}
	else if (O(x)) {
		fn = y;
		v = (V(x))
	}
	else(v = V(x, y))
	w.QueryAABB(fn, b2d.AABB01(v))
	return w
}
//query a point of specific kind,
// more options on fixts
w.XY = function (x, y, fn, k) {
	var w = this, fixt = false // - -> bottom, + all ? :)
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(x, y, function (f) {
		if (f.ofClass(k) && f.test(x, y)) {  //k null -> true // doesnt need to div, because qXY will div
			fixt = f;
			return false
		}
		return true
	}) //stops at top most fixt
	if (fixt && F(fn)) {
		fn = _.bind(fn, fixt)
		return fn(fixt) || w
	} // or w? //makes sense actually
	return fixt
}
//query bodies
w.bXY = function (x, y, fn, k) {
	var w = this,
			b = false
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(x, y, function (f) {
		if (f.ofClass(k) && f.test(x, y)) {
			b = f.B();
			return false
		} //cycles through all the fixts to find the first
		return true
	})
	if (F(fn)) {
		return _.bind(fn, b)(fn(b)) || w
	}
	return b
}//**
w.dynAt = w.at = w.bodyAtPoint = function (x, y) {
	var body = null, func
	func = function (f) {
		if (f.isDyn() && f.testPoint(x, y)) {
			body = f.B();
			return false
		}
		return true
	}
	this.queryXY(func, x, y)
	return body
}
w.QPt = function (fn, p) {
	this.QueryPoint(fn, p)
	return this
} //= w._qPoint
w.qPoint = function () {
	var w = this, g = G(arguments), o
	o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
	return w.QPt(function (f) {
		return o.fn(f, f.B(), f.B().W())
	}, o.v.d())
}
w._qPoint = function (fn, p) {
	this.QueryPoint(fn, p)
	return this
}
w.qPoint = function () {
	var g = G(arguments), o
	o = g.N_ ?
	{v: V(g.f, g.s), fn: g.t} :
	{v: g.f, fn: g.s}
	var fn = function (f) {
		var b = f.B(), w = b.W()
		return o.fn(f, b, w)
	}
	var point = o.v.div()
	this._qPoint(fn, point)
	return this
}
w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w.DB = w.DBo = w.DBd = function (b) {
	this.DestroyBody(b);
	return this
}
w.DB = function (a) {
	this.DestroyBody(a);
	return this
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.wn = w.whe = w.when = function () {
	var w = this, g = G(arguments), o
	o = F(g[0]) ? {b: g[0], e: g[1]}
			: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
			: {k: g[0], k2: g[1], b: g[2], e: g[3]}
	//when b,[e]  k,b,[e]  k,k2,b,[e]
	if (o.k2) {
		w.b(o.k, o.k2, o.b);
		if (o.e) {
			w.end(o.k, o.k2, o.e)
		}
	}
	else if (o.k) {
		w.b(o.k, o.b);
		if (o.e) {
			w.end(o.k, o.e)
		}
	}
	else {
		w.b(o.b);
		if (o.e) {
			w.end(o.e)
		}
	}
	return w
}
w.wl = w.whi = w.while = function (k, k2, fn) {
	var w = this, push
	if (F(fn)) {
		w.wn(k, k2,
				function () {
					push = true
				},
				function () {
					push = false
				})
		z(function () {
			if (push) {
				fn()
			}
		})
	}
	else if (F(k2)) {
		w.wn(k, function () {
			push = true
		}, function () {
			push = false
		});
		z(function () {
			if (push) {
				k2()
			}
		})
	}
	return w
}
w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}