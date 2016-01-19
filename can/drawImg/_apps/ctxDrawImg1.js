x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	
	if (g.S_ && g.f.length < 10000) {

		if (O(window['Q'])) {
		
				g[0] = Q.i(g[0])
		}
		
		else {
		
			return $.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			
		}
		
		
	}


	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	
	g[1] = N(g[1], 0)
	
	g[2] = N(g[2], 0)
	
	x.drawImage.apply(x, g)
	
	return x
}




x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	
	
	if (S(o.i)) {
		if (O(window['Q']) && Q.ran) {
			o.i = Q.i(o.i)
		}
		
		
		else {
			$.i(g[0], function (i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}