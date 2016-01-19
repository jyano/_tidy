pD.ptsAlt = function (fn) {
	pD.pts = function (fn) {
		var pD = this, g = G(arguments), o
		o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
		var pts = g.n ? b2d.sub(pD.pts(), o.n) :
				g.p ? b2d.add(pD.pts(), o.n) :
						pD.pts()  //if (g.n) {pts = _.m(pts, function (v) {return V(v).sub(g[0])})}//if (g.p) {pts = _.m(pts, function (v) {return V(v).add(g[0])})}
		if (o.fn) {
			_.e(pts, o.fn);
			return pD
		}
		return pts  //used in MEET//= pD.vs = pD.points =	
	}
	var p = this, g = G(arguments), o
	var pts = []
	_.t(p.n(), function (i) {
		pts.push([p.getX(i), p.getY(i)])
	})
	if (F(fn)) {
		_.e(pts, function (v) {
			fn(v)
		})
		return p
	}
	return pts
	pS.pts = pD.pts = function (fn) {
		var pS = this,
				pts = []
		_.t(pS.nPts(), function (index) {
			var pt = pS.pt(index)
			pts.push(pt)
			//alt:_.t(pS.num(), function (i) {var pt = [pS.getX(i), pS.getY(i)]pts.push(pt)})
		})
		if (F(fn)) {
			_.e(pts, function (v, i) {
				fn(v, i, pts)
			});
			return pS
		}
		return pts
		//= pS.vs = pS.ptsArr = ps.ptsArray = ps.verts = ps.pts
//= pS.ePt = pS.vsArr = pS.vs = pS.pts = pS.vs
// =  pD.ePt = pD.vsArr
	}
}