pD.polygons = pD.polys = pD.ps = pD.hs = pD.pols = function () {
	$l('pD.polys')
	var pD = this, g = G(arguments),
			o = b2d.iB(g.f) ? {
				polys: b2d.reg(this._polys(), g.f),
				fn: g.s
			} :
					g.N_ ? {
						polys: b2d.reg(this._polys(), V(g.f, g.s)),
						fn: g.t
					} :
					{fn: g.f}
	if (g.p) {
		o.polys = _.m(o.polys, M.p)
	}
	if (F(o.fn)) {
		_.e(o.polys, o.fn);
		return this
	}
	;
	return o.polys
} // used in MEET 
//function polys(){
//get number of pols
pD.nIP = pS.nIP = pD.numPol = function () {
// =pS.numPol = pD.nPol = pS.nPol = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP
	return this.getNumInnerPoly()
}
//get inner pol
pD.g = pS.gIP = function (n) {
	// = pS.getPoly = pS.g = pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g
	return this.getInnerPoly(n || 0)
	function docs() {
		//GETS ITSELF? //useless?
	}
}
// iterate over ALL inner pols
pD.eIPol = pD.polies = pD.ePol = pS.ePol = pD.each = pD.e = pD.eP = function (fn) {
	var pD = this
	var polys = []
	_.t(pD.nIP(), function (pol) {
		polys.push(pD.g(pol))
	})
	if (F(fn)) {
		_.e(polys, fn);
		return pD
	} //_.t(pD.nIP(), function (i) {fn(pD.g(i), pD, i)}) //_.t(pD.nIP(), function (n) {fn(pD.iPol(n), n, nIP)})
	return polys
}
