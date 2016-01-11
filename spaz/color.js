w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}
b.C = function (col) {
	this.each(function (f) {
		f.C(col)
	})
	return this
}
f.C = f.color = function (c1, c2) {
	var f = this, b = f.body(),
			w = b.wor(), shape, rad, pos
	c1 = c1 || 'b'
	c2 = c2 || c1
	if (f.isCirc()) {
		rad = f.rad()
		pos = f.pos()
		shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
	}
	else {
		shape = w.s.shape().poly(f.verts(), c1, c2, 1)
	}
	f.removeSprites()
	f.bindSprite(shape)
	// return this
}
w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
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
		bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1),
				N(sY, sX || 1)).rt(N(rt, 0))
	}
}
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
ob.linkedCirs = function () {
	h = w.i.h().dc(100, 100, 50)
	h1 = w.i.h(-100, -100, '+').c('b', 'r', 10)
	h1.dc(200, 200, 50)
	h1.dc(400, 200, 50)
	h1.dc(600, 200, 50)
	h1.dc(300, 300, 50)
	h1.c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
}
