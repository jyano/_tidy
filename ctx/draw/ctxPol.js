x.pol = function (vs, ox, oy) {
	var x = this, i
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
	var x = this
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
	_.e(_.r(vxs), function (vx) {
		x.lt(vx[0] + ox, vx[1] + oy);
	})
	x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
	if (hole) {
		x.fS("#ffffff")
	}
	x.cp().s().f()
}
