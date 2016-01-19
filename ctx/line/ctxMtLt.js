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