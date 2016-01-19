x.C = x.c = x.fS = x.f = x.fs = function (c, C, l) {

	var g = G(arguments)

	if (g.u) {
		this.fill()
		if (g.p) {this.s()}
		return this
	}
	
	this.fillStyle = oO('c', c)
	
	if (C) {this.C(C)}

	if (N(l)) {this.l(l)}

	return this
}


x.col = x.sC= x.sS = x.s  = x.ss = function () {
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