$L('color', 'load', 'path', 'poly', 'curve', 'rec')
x.cv = x.cv0 = function () {
	return this.canvas
}
x.$cv = x.$ = function () {
	return $(this.cv())
}
x.H = function () {
	return this.cv().height
}
x.W = function () {
	return this.cv().width
}
x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
x._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}
function color() {
	x.fS = x.f = x.c = x.fs = function (c, C, l) {
		var g = G(arguments)
		if (g.u) {
			this.fill()
			if (g.p) {
				this.s()
			}
			return this
		}
		this.fillStyle = oO('c', c)
		if (C) {
			this.C(C)
		}
		if (N(l)) {
			this.l(l)
		}
		return this
	}
	x.sS = x.s = x.C = x.ss = function () {
		var g = G(arguments), o
		if (g.u) {
			this.stroke();
			if (g.p) {
				this.f()
			}
			return this
		}
		o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
		if (o.C) {
			this.strokeStyle = oO('c', o.C)
		}
		if (N(o.l)) {
			this.l(o.l)
		}
		return this
	}
	x.al = function (al) {
		this.globalAlpha = al;
		return this
	}
}
function load() {
	CV21 = FLOATCVQ = function () {
		Q(function () {
			__C()
			x.b(400, 100, 'r', 'o', 30).l(600, 400)
			x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
			x.b().a(400, 75, 50, 0, 340, '-')
			x.tl(-100, 0, R(30), 2)
					.b(400, 100, 'x', 'b', 30)
					.l(600, 400)
			x.d('me')
			x.d(x, 300, 300)
			x.d(x, 300, 300)
			//x.scICen('guy', .7)
			//Uncaught TypeError: Cannot read property 'd' of undefined
		})
	}
	GC1 = XORMORE = function () {
		c = __C()
		Q(function () {
					x.d('me', 100, 100)
					x.d('me', 200, 100)
					x.d('me', 300, 100)
					x.d('me', 400, 100)
					x.d('me', 500, 100)
					x.d('me', 150, 150) //  x.sO(); x.dO()
					x.xo()
					c.$(
							function () {
								var g = G(arguments), o
								o = {x: g.f, y: g.s}
								x.d('guy', o.x, o.y)
							}
					)
				}
		)
	}
}
function _pre() {
	x = ctx = CanvasRenderingContext2D.prototype
}
function path() {
	x.iP = x.ptInPth = function (x, y) {
		return this.isPointInPath(x, y)
	}
	x.b = x.beg = x.bP = function () {
		var g = G(arguments)
		this.beginPath()
		if (g.u) {
			return this
		}
		if (g.N_) {
			this.mt(g.f, g.s)
			if (g.t) {
				this.c(g.t, g[3], g[4])
			}
		}
		else {
			this.c.apply(this, g)
		}
		return this
	}
	x.mt = function () {
		var x = this, g = G(arguments)
		if (g.A_) {
			x.mt(g.f[0], g.f[1])
			g.eR(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.moveTo(N(g.f, 0), N(g.s, 0))
			if (N(g.t)) {
				x.lt(g.t, g[3])
			}
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.lt = function () {
		var g = G(arguments), x = this
		if (g.A_ && A(g.f[0])) {
			x.lt.apply(x, g.f)
		}
		else if (O(g.s)) {
			g.e(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.lineTo(g.f, g.s)
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.l = x.lW = function (n) {
		var g = G(arguments)
		if (!g.n) {
			this.lineWidth = n;
			return this
		}
		return this.lt(g.f, g.s)
	}
	x.cP = x.x = x.cp = function () {
		this.closePath();
		return this
	}
	x.lC = function (c) {
		var g = G(arguments);
		if (c == 'r') {
			c = 'round'
		}
		else if (c == 'r') {
			c = 'square'
		}
		else if (c == 'b') {
			c = 'but'
		}
		this.lineCap = c
		return this
	}
	x.lJ = function (n) {
		var g = G(arguments);
		if (g.N) {
			this.lineJoin = n;
			return this
		}
	}
}
function rec() {
	x.r = function () {
		var ctx = this, g = G(arguments), o
		o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, ctx.W())
		o.h = N(o.h, ctx.H())
		ctx.rect(o.x, o.y, o.w, o.h)
		return ctx
	}
	x.fr = x.fR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.fr2 = x.fR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.sR = x.sr = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.sr2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.cR = x.clR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.cr2 = x.cR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.r2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
}
function poly() {
	x.pol = function (vs, ox, oy) {
		var x = this, i
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
		_.e(_.r(vs), function (v) {
			x.lt(v[0] + ox, v[1] + oy)
		})
		return x.cp().s().f()
	}
	x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
		var x = this
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
		_.e(_.r(vxs), function (vx) {
			x.lt(vx[0] + ox, vx[1] + oy);
		})
		x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
		if (hole) {
			x.fS("#ffffff")
		}
		x.cp().s().f()
	}
}
function curve() {
	x.a = function () {
		var g = G(arguments), x = this,
				o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
				{r: g.f}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		o.rt1 = N(o.rt1, 0)
		o.rt2 = N(o.rt2, 360)
		o.ccw = g.n ? true : false
		this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.arc2 = x.at = function () {
		var g = G(arguments), o
		o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
		this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.quadratic = x.qt = function () {
		this.quadraticCurveTo();
		return this
	}
}
CVDR = CVDRAW = CV1 = FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
CVFS = XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
CVPOL = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPol(flatTri, 'r', 'v')
}
gr = xGr = CanvasGradient.prototype
gr.aCS = function (stopNum, color) {
	//= gr.add1CS
	var gr = this, g = G(arguments)
	gr.addColorStop(stopNum, oO('c', color))
	return gr
}
gr.cS = gr.stop = gr.s = gr.c = function (stop, color) {
	var gr = this, g = G(arguments)
	gr.cSOb = gr.stops = function (stopOb) {
		var gr = this, g = G(arguments)
		_.e(stopOb, function (v, k) {
			var o = S(v) ? {k: k, v: v} : {k: v, v: k}
			gr.aCS(o.k, $r('c', o.v))
		})
		return gr
	}
	if (A(g.f)) {
		g.e(function (cS) {
			gr.aCS(cS[0], cS[1])
		})
		return gr
	}
	return g.O ? gr.cSOb(g.f) :
			gr.aCS(g.f, g.s)
}
x.cRG = x.rG = function (x0, y0, r0, x1, y1, r1) {
	// = x.radGrad =x.rf 
	x0 = N(x0, 0)
	y0 = N(y0, 0)
	r0 = N(r0, 0)
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	r1 = N(r1, 0)
	return this.createRadialGradient(x0, y0, r0, x1, y1, r1)
}
x.cLG = x.lG = function (x1, y1, x2, y2) {
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	x2 = N(x2, 0)
	y2 = N(y2, 0)
	//= x.lf = x.lGr
	return this.createLinearGradient(x1, y1, x2, y2)
}// = x.linGrad
x.lg = function () {
	var x = this,
			g = G(arguments), o, gr
	o = g.O ? g.f : N(g.t) ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x2: g.f, y2: g.s}
	gr = x.cLG(o.x1, o.y1, o.x2, o.y2)
	return o.cS ? x.c(gr.cS(o.cS)) :
			gr
}
CANGRAD = $$$CONTAINSFOURAPPS$$$ = function () {
	var GR11 = function () {
		var c = $.c('y').W(500).H(500)
		var x = c.gC()
		x.f(x.cLG(50, 0, 500, 100).cS([.2, 'o'], [.6, 'r'], [.8, 'g']))
		c.fr()
		//prev: x.fillStyle = x.cLG(50, 0, 500, 100).cS(.2, 'orange').cS(.6, 'red').cS(.8, 'green')
		//prev: c.fillRect()
		return $.d().A($.h1('lin rad ctx'), c)
	}
	var GR2 = function () {
		var c = $.c('y').W(500).H(500).drag()
		var x = c.gC()
		x.lg({
			cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
			x1: 50, x2: 500, y2: 100
		}).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100})
				.fr(300, 0, 300)
		return $.d().A(
				$.h1('ctx lG example')
				, c
		)
	}
	var Z2W = function () {
		var c = $.c('y').W(500).H(500).dg()
		var x = c.ctx()
		x = c.gC().lg({cS: {z: 0, w: 1}, x2: x.W(), y2: 0}).fr()
		return $.d().A($.h1('ctx lg black2white'), c)
	}
	var RGSAMP = function () {
		return $.d().A(
				$.h1('can rG sample'),
				$.c('y').W(500).H(500).drag().rGSample())
	}
	$s({
		$flexDiv: {dp: 'fl', wr: 'wr'}
	})
	var d = $.d().id('flexDiv')
	d.A(GR11(), GR2(), Z2W(), RGSAMP())
}
_canGrad = function (el) {
	el.cLG = el.lG = function (a, b, c, d) {
		// =el.linearGradient =  el.createLinearGradient
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		return this.gC().cLG(a, b, c, d)
	}
	el.cRG = el.rG = function rg() {
		//= el.radialGradient =el.createRadialGradient
		var g = G(arguments)
		g[0] = g[0] || 200
		g[1] = g[1] || 200
		g[2] = g[2] || 100
		g[3] = g[3] || 250
		g[4] = g[4] || 250
		g[5] = g[5] || 800
		return this.gC().cRG(g[0], g[1], g[2], g[3], g[4], g[5])
	}
	el.lGBlackToWhite = function () {
		var gr = this.cLG(0, 0, this.W(), 0)
		gr.stop(0, "black").stop(1, "white")
		this.fillStyle(gr)
		this.fillRect()
	}
	el.lGDiagnal = function (gr) {
		gr = gr || this.cLG()
		gr.stop(0, 'r')
		gr.stop(.1, 'r')
		gr.stop(.15, 'b')
		gr.stop(.2, 'r')
		gr.stop(.5, 'y')
		gr.stop(1, 'b')
		this.fillStyle(gr)
		this.fillRect()
		return this
	}
	el.rGSample = function () {
		var gr = this.cRG()
		gr.aCS(0, 'r')
		gr.aCS(.15, 'b')
		gr.aCS(.2, 'r')
		gr.aCS(.5, 'y')
		gr.aCS(1, 'b')
		this.fS(gr)
		this.fillRect()
		return this
	}
	el.growingSun = function () {
		var that = this
		var a = 0,
				b = 1000,
				gr
		var func = function () {
			a += 1
			b -= 2
			gr = that.cRG(200, 200, a, 290, 270, b)
			gr.aCS(.1, 'Yellow')
			gr.aCS(.3, 'Red')
			gr.aCS(1, 'Violet')
			//  gr = x.gr( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
			that.fillStyle(gr)
			that.fillRect()
		}
		setInterval(func, 100)
	}
	el.sun = function (a, b, s) {
		s = s || 1;
		this.rG(
				[[a || 0, b || a || 0], s * 100, s * 500],
				{'y': 0, 1: tCl('p', 0)},
				600,
				600
		)
	}
	el.ball = function (b) {
		b = b || {}
		var dir = b.d || false,
				px = b.x || 100, py = b.y || 100, rad = b.r || 100,
				per = b.p || Math.PI * 2,
				ss = $r('c', b.s),
				fs = $r('c', b.f),
				lw = D(b.l) ? b.l : 4
		return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
	}
	return el
}
x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'])) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
		}
	}
	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	g[1] = N(g[1], 0)
	g[2] = N(g[2], 0)
	x.drawImage.apply(x, g)
	return x
}
x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	if (S(o.i)) {
		if (O(window['Q']) && Q.ran) {
			o.i = Q.i(o.i)
		}
		else {
			$.i(g[0], function (i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
}
x.jD = function (img, p1, p2, p3, p4) {
	var x = this, i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
$L('crop', 'clip', 'dataUrl', 'center')
function center() {
	x.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.i(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.i(i, function (i) {
				that.dr(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	} //draw it where u say, but as if its reg point was its center
	x.drawRegCenter = function f(i, x, y) {
		var that = this
		$.i(i, function (e, i) {
			that.draw(i[0],
					(that.W() / 2) - (i.W() / 2),
					(that.H() / 2) - (i.H() / 2))
		})
		return this
	}
}
function crop() {
	x.cr = function (x1, y1, x2, y2) {
		var ctx = this
		var cv = ctx.cv()
		var i = this.u()
		if (A(x1)) {
			return ctx.crop(
					x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
			)
		}
		ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
		return cv
	}
}
function clip() {
	x.clp = x.cl = function () {
		this.clip();
		return this
	}
}
function dataUrl() {
	x.dU = x.tDU = x.u = function () {
		return this.cv().toDataURL()
	}
}
DRI = DRAWIMAGE = function () {
	DRI.CSS()
	d = $.d().A(
			$cv = $.c(900, 400)
	)
	x = $cv.ctx()
	$i = $.i('chicks')
	$i.load(function () {
		x.drawImage($i[0], 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i, 400, 100, 500, 200)
	})
}
DRI.CSS = function () {
	$CSS({
		body: {C: 'o'},
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
}
x.cD = function () {
	this.createImageData()
	return this
}
x.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.getImageData(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
x.pD = function (d, x, y) {
	this.putImageData(d, N(x, 0), N(y, 0))
	return this
}
XX7 = INVERSE = RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
}
CV2 = PIX = function () {
	canvas = c = $.c('b', 900, 500)
	canvas.draw('sun', 0, 0)
	_.in(2, function () {
		pixels = canvas.gD(100, 100, 500, 500)
		canvas.pD(pixels, 100, 110)
		canvas.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}
x.shC = function (c) {
	this.shadowColor = oO('c', c)
	return this
}
x.shX = function (c) {
	this.shadowOffsetX = c
	return this
}
x.shY = function (c) {
	this.shadowOffsetY = c
	return this
}
x.shB = function (c) {
	this.shadowBlur = c
	return this
}
CTXSHAD = function () {
	__C()
	x.xShadow = 3
	x.yShadow = 3
	x.shadowBlur = 10
	x.shadowStyle = 'red'
	x.r(188, 40, 200, 100).f('r')
			.shC('#999').shB(20).shX(15).shY(15).f()
}
x.globalCompOp = x.o = x.op = x.cO = function (o) {
	this.globalCompositeOperation = o;
	return this
}
x.Ds = x.dO = function () {
	this.o('destination-out');
	return this
}
x.dS = x.dI = function () {
	return this.o('destination-in')
}
x.sD = x.sI = function () {
	this.o('source-in');
	return this
}
x.Sd = x.sO = function () {
	this.o('source-out');
	return this
} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
x.ds = x.dV = function () {
	this.o('destination-over');
	return this
}
x.SD = x.sT = x.sA = function () {
	this.o('source-atop');
	return this
}
x.DS = x.dT = x.dA = function () {
	this.o('destination-atop');
	return this
}
x.li = function () {
	this.o('lighter');
	return this
}
x.co = function () {
	this.o('copy');
	return this
}
x.xo = function () {
	this.o('xor');
	return this
}
XORCX = GCO = GCOMP = function () {
	Q(function () {
		__C()
		x.d('me', 100, 100)
		x.d('me', 200, 100)
		x.d('me', 300, 100)
		x.d('me', 400, 100)
		x.d('me', 500, 100)
		x.d('me', 150, 150) //  x.sO(); x.dO()
		x.xo()
		c.$(function () {
			var g = G(arguments), o
			o = {x: g.f, y: g.s}
			x.d('guy', o.x, o.y)
		})
	})
	function alt() {
		CG1 = GCOMP = XORSTAMP = function () {
			__C()
			x.fit('chicks')
			x.xo()
			c.$(function (xx, yy) {
				$.i('me', function (e, i) {
					x.drawImage(i[0], xx - ($(i).W() / 2), yy - ($(i).H() / 2)
					)
				})
			})
		}
	}
}
x.F = function () {
	var g = G(arguments), o
	o = {f: g.f}
	if (g.N_) {
		o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
	}
	this.font = o.f
	return this
}
x.ft = x.fT = function (x, y, t) {
	var g = G(arguments)
	if (g.N_) {
		this.fillText(g.t, g.f, g.s)
	}
	else {
		this.fillText(g.t, x.W() / 2, 200)
	}
}
x.mL = function () {
} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
x.t = x.T = function () {
	var g = G(arguments), x = this, o, t
	o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
			S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
					g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
							S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
							{t: g.f, x: g.s, y: g.t}
	o.x = N(o.x, x.W() / 2)
	o.y = N(o.y, 200)
	if (o.c) {
		x.c(o.c, o.c)
	}
	if (o.f) {
		g.n ?
				x.F(o.f, '-') :
				x.F(o.f)
	}
	x.fillText(o.t, o.x, o.y)
	return x
}
x.tA = function () {
}
x.tB = x.Bl = function () {
}
x.sc = x.Z = function (x, y) {
	y = N(y, x)
	this.scale(x, y);
	//this.scale.apply(this, arguments)
	return this
}
x.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
	this.translate(tX, tY)
	if (N(rt)) {
		this.rt(rt)
	}
	if (N(sX)) {
		this.sc(sX, sY)
	}
	return this
}
x.sX = function (x) {
	return this.sc(x, 1)
}
x.sY = function (y) {
	return this.sc(1, y)
}
x.rt = function (n) {
	this.rotate(M.tR(n));
	return this
}
x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sT = x.sTf = function () {
	this.setTransform.apply(this, arguments)
	return this
}
CV14 = CXTF = CTXTRANSFORM = function () {
	__C()
	x.fR(0, 0, 250, 100)
	x.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
	x.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
}
CV30 = TRANZ = function () {
	z()
	x = $.c('yellow', 1000, 800).A()
	y = $.c('purple', 400).A()
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	identity = function (x) {
		x.stf(1, 0, 0, 1, 0, 0)
	}
	rotate = function (x, a) {
		identity(x)
		x.rt(tRad(a))
	}
	rotateByAngle = function (px, py, a) {
		var x, y
		x = (px * cos(a)) - (py * sin(a))
		y = (py * cos(a)) + (px * sin(a))
	}
	rotateAroundZero = function (px, py, r) {
		var x, y, a = 'angle'
		x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
		y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
	}
	transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
	//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
	//x=x+e,y=y+f
	//to scale, use a,d and set others to 0
	CV23 = TRANS = function () {
		z()
		x = $.c('y', 1000, 800)
		y = $.c('u', 400)
		x.$$(function () {
			x.fit('me')
		})
		x.fit('me')
		identity = function (x) {
			x.stf(1, 0, 0, 1, 0, 0)
		}
		rotate = function (x, a) {
			identity(x);
			x.rt(tRad(a))
		}
		rotateByAngle = function (px, py, a) {
			var x, y
			x = (px * cos(a)) - (py * sin(a))
			y = (py * cos(a)) + (px * sin(a))
		}
		rotateAroundZero = function (px, py, r) {
			var x, y, a = 'angle'
			x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
			y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
		}
		transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
		//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
		//x=x+e,y=y+f
		//to scale, use a,d and set others to 0
	}
}
CST = CLIPSTARS = function () {
	$l('clip stars')
	__C()
	Q(fn)
	//just draws green circ?
	function fn(ld) {
		$l('--clipstars')
		x.Star = function (r) {
			var ctx = this
			r = N(r, R(4, 2))
			ctx.b(r, 0, 'w') // first point drawn is the right most point
			_.t(9, x9)
			return x.f()
			function x9(i) {
				x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
			}
		}
		x.tl(75, 75).a(60).cl()
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)
		_.t(10, x10)
	}
	
	function x10() {
		$l('x10')
		x._(function () {
			x.tl(R(150, -75), R(150, -75)
			).Star()
		})
	}
}
function beta() {
	x.pt = x.Pt = function () {
		return this.createPattern()
	}
	ADB = function () {
		_ADBE = function (fn) {
			return function () {
				$Ld(function () {
					__C()
					j = x.d('me', 100, 300)
					i = x.d('chicks', 600, 300)
					fn()
				})
			}
		}
		ADBE = _ADBE(function () {
			c.$(function (x1, y1) {
				x.a(x1, y1, 10).s()
			})
		})
		ADBE()
	}
}
$.fn.ctx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).cx()
}