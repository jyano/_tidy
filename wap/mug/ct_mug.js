ct._mug = function (sc, fn) {
	var ct = this
	$.get('/myMug', function (mug) {
		ct.bm(mug, sc, fn)
	})
	return ct
}
ct.mug = function () {
	var ct = this, g = G(arguments), o
	o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
	o.sc = N(o.sc) ? o.sc : 1
	o.fn = o.fn || function () {
	}
	$.myMug(function (m) {
		ct.bm(m, o.sc, o.fn)
	})
	return ct
}
