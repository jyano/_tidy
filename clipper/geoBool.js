b2d.iG = b2d.iGP = gpc.iPol = b2d.isGPoly = function (a) {
	// = b2d.iG  = b2d.isGPoly
	return O(a) && F(a.isHole)
}
pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
b2d.hasVerts = b2d.hV = function (poly) {
	return poly.m_List.get(0)
}
gpc.iPg = gpc.isPol = function (a) {
	return O(a) && F(a.isHole)
}
gpc.iPD = gpc.iDP = gpc.iD = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pD'
}
gpc.iPS = gpc.iSP = gpc.iS = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pS'
}
pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}