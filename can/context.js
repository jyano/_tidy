x = ctx = CanvasRenderingContext2D.prototype
$.fn.ctx = $.fn.cx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).ctx()
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
// ctx canvas
x.cv = x.cv0 = function () {
	return this.canvas
}
x.$cv = x.$ = function () {
	return $(this.cv())
}
x.dU = x.tDU = x.u = function () {
	return this.cv().toDataURL()
}
x.H = function () {
	return this.cv().height
}
x.W = function () {
	return this.cv().width
}
//  color 
x.C = x.c = x.fS = x.f = x.fs = function (c, C, l) {
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
x.col = x.sC = x.sS = x.s = x.ss = function () {
	var g = G(arguments), o
	o = g.N_ ? {l: g.f} :
	{C: g.f, l: g.s}
	if (o.C) {
		this.strokeStyle = oO('c', o.C)
	}
	if (N(o.l)) {
		this.l(o.l)
	}
	this.stroke();
	if (g.p) {
		this.f()
	}
	return this
}
x.al = function (al) {
	this.globalAlpha = al;
	return this
}
x.pt = x.Pt = function () {
	return this.createPattern()
}
//  imgData
x.cID = function () {
	var x = this
	return x.createImageData.apply(x, arguments)
}
x.gID = function () {
	var x = this
	return x.getImageData.apply(x, arguments)
}
x.pID = function () {
	var x = this
	x.putImageData.apply(x, arguments)
	return x
}
x.cD = function () {
	this.cID()
	return this
}
x.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.gID(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
x.pD = function (d, x, y) {
	return this.pID(d, N(x, 0), N(y, 0))
}
//  shad 
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
 

//  drawImg 
x.dI = function () {
	var g = G(arguments)
	g[0] = $(g[0])[0]
	this.drawImage.apply(this, g)
	return this
}
x.dISize = function (imgRsc, x, y, w, h) {
	var x = this
	x.drawImage()
	return x
}
x.dIClip = function (img, srcX, srcY, srcW, srcH, x, y, w, h) {
	var x = this, g = G(arguments), o
	o = {
		img: g.f,
		srcX: g.s, srcY: g.t,
		srcW: g.fo, srcH: g.fi,
		x: g.si, y: g.se,
		w: g.ei, h: g.ni
	}
	x.drawImage(o.srcX, o.srcY, o.srcW, o.srcH, o.x, o.y, o.w, o.h)
	return x
}
x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	o = {}
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'] && Q.ran)) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g.f, function (i) {
				x._d($(i)[0], g.s, g.t, g.fo, g.fi)
			})
		}
	}
	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	o.x = g[1] = N(g[1], 0)
	o.y = g[2] = N(g[2], 0)
	x.dI.apply(x, g)
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
 
//  globComp 
x.globalCompOp = x.o = x.op = x.cO = function (o) {
	this.globalCompositeOperation = o;
	return this
}
x.Ds = x.dO = function () {
	this.o('destination-out');
	return this
}
x.dS = function () {

// = x.dI CLASH WITH DRAWIMAGE
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
  
//  text 
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
//  transform
x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sTf = x.sT = function () {
	this.setTransform.apply(this, arguments)
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
x.sc = x.Z = function (x, y) {
	y = N(y, x)
	this.scale(x, y);
	//this.scale.apply(this, arguments)
	return this
}
x.rt = function (n) {
	this.rotate(M.tR(n));
	return this
}
  
//  gradradient
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
//  draw paths
x.cP = x.x = x.cp = function () {
	this.closePath();
	return this
}
x.b = x.beg = x.bP = function () {
	var x = this, g = G(arguments)
	x.beginPath()
	if (g.u) {
		return x
	}
	if (g.N_) {
		x.mt(g.f, g.s)
		if (g.t) {
			x.C(g.t, g.fo, g.fi)
		}
	}
	else {
		x.C.apply(x, g)
	}
	return x
}
x.iP = x.ptInPth = function (x, y) {
	return this.isPointInPath(x, y)
}
x.mT = x.mt = function () {
	var x = this, g = G(arguments)
	if (g.A_ && A(g.f[0])) {
		x.mt.apply(x, g.f)
	}
	else if (g.A_) {
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
x.lT = x.lt = function () {
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
	return g.n ? x.s() :
			g.p ? x.f() :
					g.m ? x.D() : x
}
//draw curves
x.ac = x.a = function () {
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
x.ac2 = x.arc2 = x.at = function () {
	var g = G(arguments), o
	o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
	this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.ac4 = x.quad = x.quadratic = x.qt = function () {
	this.quadraticCurveTo();
	return this
}
// lineProps 
x.l = x.lW = function (n) {
	var g = G(arguments)
	if (!g.n) {
		this.lineWidth = n;
		return this
	}
	return this.lt(g.f, g.s)
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
x.clp = x.cl = function () {
	this.clip();
	return this
}
x.Mt = x._pol = function () {
	this.b()
	return this.mt.apply(this.arguments)
}
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
//  rectangles
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
	canvas = c
	_.in(function () {
		canvas.draw('sun', 0, 0)
		_.in(2, function () {
			pixels = canvas.gD(100, 100, 500, 500)
			canvas.pD(pixels, 100, 110)
			canvas.f("r").fr(10, 10, 50, 50)
			imgData = c.gD(10, 10, 50, 50)
			c.pD(imgData, 10, 70)
		})
	})
}
//  loader 
$.fn.ld = function () {
	var q = this
	q.load.apply(q, arguments)
	return q
}
 
x.dc = function (xx, y, rad) {
	var x = this
	x.ac(xx, y, N(rad, 0))
	return x
}
x.cir = function (xx, y, rad, fCol, sCol) {
	var x = this
	if (fCol) {
		x.fC(fCol)
		if (sCol) {
			x.sC(sCol)
		}
	}
	x.dc(xx, y, N(rad, 0))
	return x
}
x.cvC = function (c) {
	$(this.canvas).C(c)
	return this
}