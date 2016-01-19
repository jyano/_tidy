x.cP = x.x = x.cp = function () {
	this.closePath();
	return this
}


x.b = x.beg = x.bP = function () {var x=this,g = G(arguments)

	x.beginPath()

	if (g.u) {return x}

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