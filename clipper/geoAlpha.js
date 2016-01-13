function hole() {
	gpc.iPol = function (a) {
		//b2d.iGP =
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function _alpha() {
	pD.ifHasPol = function () {
		var pD = this
		if (pD.hasAtLeastOnePoly()) {
			return pD
		}
	}
	pD.bigEnough = function () {
		return this.getArea() > 2000
	}
	pD.tooSmall = function () {
		return !this.bigEnough()
	}
}
function bigEnough(f) {
	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?
	return M.p(f).getArea() > 2000
} 