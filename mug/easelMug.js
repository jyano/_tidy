function ct_mug() {
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
}
ct_mug()
LDTX = function () {
	St()
	$Ld([{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}],
			function (ld) {
				st.A($Bm(ld.get("myImage")))
			}
	)
}
MUG = function () {
	St().mug(function (mug) {
		m = mug
	})
}  
 