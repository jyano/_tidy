 
	pD.U = function (p) {
		var pD = this, g = G(arguments)
		g.e(function (pol) {
			pD = pD.union(gpc.p(pol))
		})
		return pD
	}
	pD.D = function () {
		var pD = this,
				g = G(arguments)
		g.e(function (pol) {
			pD = pD.difference(gpc.p(pol))
		})
		return pD
	}
	pD.I = pD.intersection
	pD.X = pD.xor
//
	
	pD.plus = function (x, y) {
		return M.p(_.m(this.pts(), function (v) {
					return V(v).add(x || 0, y || 0)
				}
		))
	}
	pD.U = function () {
		var pD = this, g = G(arguments), uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
		function alt() {
			pD.U = function () {
				var pD = this, g = G(arguments),
						uP
				if (b2d.iB(g[0])) {
					uP = pD.U(g[0].f())
					_.eR(g[0].fs(), function (f) {
						uP = pD.U(f)
					})
					return uP
				}
				return pD.union(M.p(g[0]))
			}
		}
	}
//
	pD.minus = function (x, y) {
		var p = this,
				pts = p.pts()
		pts = _.m(pts, function (v) {
			v = V(v)
			return v.sub(x || 0, y || 0)
		})
		return M.p(pts)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
	}
	
	$uni = UNI = function () {
		//= b2d.u
		var g = G(arguments), p
		if (g.A) {
			return g.ap(UNI)
			//return $a(UNI,g.f)
		}
		p = M.p(g.f)
		g.eR(function (pol) {
			p = p.U(M.p(pol))
		})
		return p
	}
	
 
$DIF = function () {
	var g = G(arguments), p
	if (g.A) {
		return g.ap($DIF)
	}
	p = M.p(g.f)
	g.eR(function (pol) {
		p = p.D(M.p(pol))
	})
	return p
} 