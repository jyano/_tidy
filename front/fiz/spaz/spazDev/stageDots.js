b.Bm = function (iS, x, y, sX, sY, rt) {
	var b = this, w = b.W(), g = G(arguments);
	b.gx = b.gx || w.gx.ct()
	if (S(iS)) {
		this.gx.bm(iS, fn)
	}
	if (O(iS)) {
		fn(iS);
		return iS
	}
	return b
	function fn(bm) {
		bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1), N(sY, sX || 1)).rt(N(rt, 0))
	}
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
//w.i.dot( cx.pt().x, ct.pt().y )
//fail
//  w.i.dot('y', v)  //  w.i.dot(  v)  //  w.dot(  v)
//works:  w.dot('r', v)
w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ? {x: g.f, y: g.s} : {x: V(g.f).x, y: V(g.s).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
b.dot = function (x, y) {//b.dot() // dots the center of mass, not xy ??!!!
	var b = this, w = b.W(), s = b.stg(), g = G(arguments)
	if (N(x)) {
		w.dot(b.wP(x, y))
		if (g.p) {
			T.t(function () {
				w.dot(b.wP(x, y))
			})
		}
		return b
	}
	c = oO('c', g[0] || 'y')
	if (g.p) {
		w.dot(c, b.cen())
	}
	else {
		w.dot(c, b.X(), b.Y())
	}
	return b
}
b.dot = function (col) {//b.dot() // dots the center of mass, not xy ??!!!
	var b = this,
			s = b.stg(),
			g = G(arguments)
	col = oO('c', g[0] || 'y')
	if (g.p) {
		s.dot(col, b.cent())
	}
	else {
		s.dot(col, b.X(), b.Y())
	}
	return this
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ?
		{x: g.f, y: g.s} :
		{x: V(g.f).x, y: V(g.f).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
META = function () {
	W([800, 600], {w: 'L'}).C('w')._(function () {
		$.rulers()
		//initial me
		p = w.p(200, 200, 5).stat()
		//initial balls
		_.t(5, function Ball() {
			w.D(R(200, 50), R(-100), $r(), 30)
		})
		_.ev(3, MetaBall)
	})
	function MetaBall() {
		var b = w.D(400, 400, 'b', 80)
		b.$h('x', 'X', 1).c('x', 'X', 1).bf(
				w.s.cv0,
				cjs.m2d(.6, .1, .1, .6, -40, 180)
		).cir(80)
	}
}
ct.d = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
ct.d = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this,
			dot,
			tween
	if (b2d.isGPoly(color)) {
		_.each(color.verts(), function (v) {
			that.dot(V(v))
		})
		return this
	}
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.d = ct.dot = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	if (b2d.isGPoly(g.f)) {
		_.e(g.f.vs(), function (v) {
			ct.dot(V(v))
		})
		return this
	}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.S_ ? (
			
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
i.dot = function () {
	var i = this
	i.getStage().dot(i.X(), i.Y())
	return i
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
ct.dot = function (c, x, y) {
	var that = this,
			s = this,
			dot,
			tween
	if (b2d.isGPoly(c)) {
		_.each(c.verts(), function (v) {
			s.dot(V(v))
		})
		return this
	}
	if (A(c)) {
		_.each(c,
				function (G) {
					if (A(G)) {
						s.dot.apply(s, G)
					}
					else {
						s.dot(G)
					}
				})
		return
	}
	if (!S(c)) {
		y = x;
		x = c;
		c = 'y'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : s.W() / 2
	y = N(y) ? y : s.H() / 2
	//dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)
	//dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)
	dot = s.h(x, y).circ(8, c, c).drag()
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return s
}
ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.d = ct.dot = function (c, x, y) {
	var ct = this, o, dot, tw, g = G(arguments)
	if (b2d.isGPoly(g.f)) {
		_.e(g.f.vs(),
				function (v) {
					ct.dot(V(v))
				})
		return this
	}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	o = g.O ? g.f : g.S_ ? {c: g.f, x: g.s, y: g.t} : {x: g.f, y: g.s}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	dot = this.h(o.x, o.y)
			.cir(8, o.c, 'p' || o.c, 2)
			.al(.7).drag()
	tw = dot.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	dot.$$(function () {
		tw.$()
	})
	return dot.K('dev dot')
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
w.dot = function () {
	this.s.dot.apply(this.st, arguments)
	return this
}
f.dot = function (col) {
	var f = this, w = f.wor(), cent = f.cent()
	if (S(col)) {
		w.dot(col, cent)
	} else {
		w.dot(cent)
	}
	return this
}
f.dots = function () {
	b2d.polyDot(this.wVerts())
	return this
}
b.dot = function (color) {
	color = oO('c', color || 'y')
	this.stg().dot(color, this.cent()) //  this.X(), this.Y()
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
f.dot = function (c) {
	var f = this, b = f.B(), w = b.W()
	var stg = w.s
	if (c) {
		return stg.dot(c, f.cen())
	}
	return stg.dot(f.cen())
}
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(),
			g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.div())
	//is a point within the fixture // very accurate
}