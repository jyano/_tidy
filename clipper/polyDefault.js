 
	pD.pts = pD.vs = function (fn) {
		var pD = this,
				g = G(arguments),
				o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
				vs = []
		_.t(pD.n(), function (i) {
			vs.push([pD.x(i), pD.y(i)])
		})
		vs = g.n ? b2d.sub(vs, o.num) :
				g.p ? b2d.add(vs, o.num) :
						vs
		if (o.fn) {
			_.e(vs, o.fn);
			return pD
		}
		return vs
	}//used in MEET 
// get num of points of a pol
	pD.nPts = pS.nPts = pS.n = pD.n = function () {
		return this.getNumPoints()
	}
// function points(){
//get or iterate all the pts of 1/more? pol
	pD.pts = function (fn) {
		var pD = this, g = G(arguments), o
		//= pD.vs
		o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
		var pts = g.n ? b2d.sub(pD.pts(), o.n) :
				g.p ? b2d.add(pD.pts(), o.n) :
						pD.pts()
		if (o.fn) {
			_.e(pts, o.fn);
			return pD
		}
		return pts
		function docs() {
			
			//used in MEET
			//= pD.vs = pD.points =	
			function alt() {
				pD.pts = pD.vs = function (fn) {
					var p = this, g = G(arguments), o
					var pts = []
					_.t(p.n(), function (i) {
						pts.push([p.getX(i), p.getY(i)])
					})
					if (g.n) {
						pts = _.m(pts, function (v) {
							return V(v).sub(g[0])
						})
					}
					if (g.p) {
						pts = _.m(pts, function (v) {
							return V(v).add(g[0])
						})
					}
					if (F(fn)) {
						_.e(pts, function (v) {
							fn(v)
						})
						return p
					}
					return pts
				}
			}
		}
	}
 