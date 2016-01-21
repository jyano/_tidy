h.rg = function (o) {
	var h = this, g = G(arguments),
			gx = h.graphics,
			o
	if (A(g[0]) && A(g[1])) {
		gx.rf(
				[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
		)
		return h
	}
	o = O(g[0]) ? g[0] :
			S(g[1]) ? _.x({c1: g[0], c2: g[1]},
					N(g[7]) ?
					{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
							: N(g[5]) ?
					{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
							: N(g[4]) ?
					{x2: g[2], r1: g[3], r2: g[4]}
							: N(g[3]) ?
					{r1: g[2], r2: g[3]}
							:
					{r2: g[2]})
					: S(g[0]) ?
			{c2: g[0]}
					: {}
	$df.grad(o)
	o.x2 = N(o.x2, o.x1)
	o.y2 = N(o.y2, o.y1)
	o.r1 = N(o.r1, 1);
	o.r2 = N(o.r2, 100)
	return o
}
$df = {
	bsDF: function (o) {
		o = o || {}
		o.x = N(o.x, 0);
		o.y = N(o.y, 0);
		o.rt = N(o.rt, 0);
		o.al = N(o.al, 1)
		return o
	},
	xyr: function (o) {
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 0)
		return o
	},
	im: function (o) {
		o.i = o.i || 'me';
		o.al = N(o.al, 1)
	},
	sc: function (o) {
		o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
		if (!A(o.sc)) {
			o.sc = [o.sc, o.sc]
		}
		;
		return o
	},
	b: function () {
		var g = G(arguments), o
		o = g.A ? {hs: g.f} : g.f || {}
		o.hs = o.hs || []
		o.i = o.i || 'me'
		return o
	},
	h: function (o) {
		o = o || {}
		if (U(o.v)) {
			o.v = [[-100, 50], [0, -50], [100, 0]]
		}
		//o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
		o.c = o.c || 'p'
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.a = _.tN(o.a)
		o.r = N(o.r, 40)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w || 100)
		o.d = N(o.d, 0.5)
		o.b = N(o.b, 0.5)
		o.f = N(o.f, 0.5)
		o.s = D(o.s) ? o.s : 0
		o.o = N(o.o, 1)
		o.q = D(q) ? o.q : true
		return o
	},
	rec: function (o) {
		o.al = N(o.al, 1)
		o.c = o.c || 'z'
		o.C = o.C || 'w'
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.a = N(o.a, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, 50)
		return o
	},
	cov: function (x, y, c, C, l, l2) {
		alert('b2d.cov')
		var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],
				o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
						: N(x) ? {x: x, y: y, c: c, C: C, l: l}
						: x,
				h = new cjs.Shape()
		df.oDef(o)
		h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)
		if (o.d) {
			h.drag()
		}
		return h
	},
	oDef: function (o) {
		o = o || {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.a = N(o.a, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, 50)
		o.r = N(o.r, 50)
		o.c = o.c || 'z'
		o.C = o.C || 'w'
		return o
	},
	grad: function (o) {
		o = o || {}
		o.c1 = oO('c', o.c1 || 'z')
		o.c2 = oO('c', o.c2 || 'w')
		o.s1 = N(o.s1)
		o.s2 = N(o.s2, 1)
		o.x1 = N(o.x1)
		o.y1 = N(o.y1)
		return o
	}
}

oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}