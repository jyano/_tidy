 

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
 
 
x.cP = x.x = x.cp = function () {
	this.closePath();
	return this
}
 