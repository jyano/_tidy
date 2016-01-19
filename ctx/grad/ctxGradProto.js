gr = xGr = CanvasGradient.prototype
gr.aCS = function (stopNum, color) {
	//= gr.add1CS
	var gr = this, g = G(arguments)
	gr.addColorStop(stopNum, oO('c', color))
	return gr
}
gr.cS = gr.stop = gr.s = gr.c = function (stop, color) {
	var gr = this, g = G(arguments)
	gr.cSOb = gr.stops = function (stopOb) {
		var gr = this, g = G(arguments)
		_.e(stopOb, function (v, k) {
			var o = S(v) ? {k: k, v: v} : {k: v, v: k}
			gr.aCS(o.k, $r('c', o.v))
		})
		return gr
	}
	if (A(g.f)) {
		g.e(function (cS) {
			gr.aCS(cS[0], cS[1])
		})
		return gr
	}
	return g.O ? gr.cSOb(g.f) :
			gr.aCS(g.f, g.s)
}
