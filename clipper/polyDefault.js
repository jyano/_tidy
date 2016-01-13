pD.nPols = function () {

//= pD.nIP = pS.nIP = pD.numPol
//get number of pols
// =pS.numPol = pD.nPol = pS.nPol = ps.numInnerPolygons
// = ps.numPolys = ps.nP = pD.numPolys = pD.nP
	return this.getNumInnerPoly()
}



pD.gPol = pS.gPol = function (n) {
//= pS.gIP = pD.g
//get inner pol
	// = pS.getPoly = pS.g = pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g
	return this.getInnerPoly(n || 0)
	//GETS ITSELF? //useless?
}


pD.polys = function (fn) {
//= pD.e = pD.eIPol = pD.polies = pS.ePol = pD.each = pD.eP
// iterate over ALL inner pols
	var pD = this
	var num = pD.nPols()
	var polys = []
	_.t(num, function (i) {
		polys.push( pD.gPol(i) )
	})
	if (!F(fn)){return polys}
	_.e(polys, function (poly, i) {
		fn(poly, i, num)
	})
	return pD
}
 



pS.X = pD.X = function (i) {//get x val of an index pt
	// = pS.x = pD.x = pS.gX = pD.gX 
	i = N(i, 0)
	return this.getX(i)
}
pS.Y = pD.Y = function (i) {
	i = N(i, 0)
//get y val of an index pt
//=pS.y = pD.y = pS.gY = pD.gY
	return this.getY(i)
}
pS.pt = pD.pt = function (i) {
//get a point from an index poly
	var pol = this
	return [pol.X(i), pol.Y(i)]
}
pD.nPts = pS.nPts = function () {
	//= pS.n = pD.n
	// get num of points of a pol
	return this.getNumPoints()
}

pS.aPt = pD.aPt = pD.A = function (pts) {
//
//add a point to a poly
	// = pS.A = pD.A
	var pol = this
	pts = A(pts) ? pts : [pts]
	_.e(pts, function (pt) {
		pol.addPoint(V(pt))
	})
	return pol
}


bx.add = function (pts, p) {

	return _.m(pts, function (pt) {
	
		return V(pt).add(p)

	})

}



bx.sub = function (vs, p) { //bx.ptsMinus = bx.vertsMinus =
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}

v.sub = v.s = function () {
//subtract from one vert?
//subtract from a whole bunch of verts and get back array?
	var v = this, g = G(arguments), o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}

v.add = v.a = function () {
	
	var v = this, g = G(arguments) 
	//if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	
	var v1 = g.u ? V(1, 1) :
			V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}


pD.pts = function (fn) {


	var pD = this, g = G(arguments), o
	
	o = g.F ? {fn: g.f} : 
	{num: g.f, fn: g.s}
	var pts = []
	_.t(pD.nPts(), function (i) {
		var pt = [pD.x(i), pD.y(i)]
		pts.push(pt)
	})
	
	
	pts = g.n ? b2d.sub(pts, o.num) :
			g.p ? b2d.add(pts, o.num) :
					pts



	if (o.fn) {_.e(pts, o.fn); return pD}
	
	
	return pts
}
 

  