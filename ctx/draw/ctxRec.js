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