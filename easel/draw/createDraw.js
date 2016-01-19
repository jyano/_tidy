//pass in your own obj to use 'o.i/o.bf'



h._load=function(){
	var h =this,gx = h.graphics, g=G(arguments),o
	o = g.N_? {x: g.f, y: g.s, C: g.t, c: g.fo, lW: g.fi}: 
	N(g.s)? {c: g.f, lW: g.s}:
	{C: g.f, c: g.s, lW: g.t}
	if(N(o.x)){
		h.XY(o.x, o.y)
	}
	if(o.C){h.C(o.C)}
	if(o.c){ h.c(o.c)}
	if(o.lW){h.lW(o.lW)}
	return h
}



h.load=function(){

}

LOAAD=function(){$St()



	 h = new cjs.Shape()
	 h = $h()

	h.load('r','g')
	// h.a2(st)
	 h.dc(30,400,40)
}
 
 
AWESOME = XX6 = GRAPHICSTEST = function () {
	stage = $St()
	canvas = stage.canvas
	// grab canvas width and height for later calculations:
	w = canvas.width
	h = canvas.height
	img = $.img('me', layout)[0]
	function layout() {
		var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
			createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
		var padding = 5
		var _width = 155
		var _height = 155
		var cols = 4
		var space = 0
		var border = createBorder();
		_.times(arr.length, function (i) {
			var tile = arr[i]()
			tile.x = 42 + (_width + padding) * (i % cols)
			tile.y = 42 + (i / cols | 0) * (_height + padding)
			stage.A(tile)
		})
		stage.A(border)
		stage.update()
	}
	
	function createBorder() {
		var s = $H()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = $H().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = $H().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = $H().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = $H().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = $H()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = $H().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = $H().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = $H().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = $H()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
h.ef = function () {
	this.graphics.endFill.apply(
			this.graphics, arguments)
	return this
}
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.clr = h.z = h.clear = function () {
	this.graphics.clear();
	return this
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h._lt = function (x, y) {
	var v = V(x, y)
	this.graphics.lt(v.x, v.y)
	return this
}
h.lt = function (x, y) {
	var h = this, gx = h.graphics, g = G(arguments)
	//A(a) && O(a[0])
	if (AO(g.f)) {
		g.e(function (v) {
			h.lt.apply(h, v)
		})
		return h
	}
	O(g.s) ? g.e(function (pt) {
		h.lt(pt)
	}) :
			gx.lt(V(x, y).x, V(x, y).y)
	return h
	function alt() {
		h.lt = function (x, y) {
			var h = this, gx = h.graphics, g = G(arguments)
			if (AO(g.f)) {
				g.e(function (v) {
					h.lt.apply(h, v)
				})
			}
			else if (O(g.s)) {
				g.e(function (pt) {
					h.lt(pt)
				})
			}
			else {
				this.graphics.lt(V(x, y).x, V(x, y).y)
			}
			return this
		}
	}
}
h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h.mt = function () {
	var g = G(arguments), o
	if (g.N) {
		return this._mt(g.f, g.s)
	}
	o = AO(g) ? {
		firPt: _.f(g.f), restPts: _.r(g.f),
		ox: g.s, oy: g.t
	} :
	{firPt: g.f, restPts: g.r}
	return this._mt(
			o.firPt[0] + N(o.ox, 0),
			o.firPt[1] + N(o.oy, 0)
	).lt(M.os(o.restPts, o.ox, o.oy))
}
h.same = h.copy = function () {
	return $h(this)
} // cjs.shape(this)
h.FS = function () {
// = h.fs = h.col
	var h = this, gx = h.graphics, g = G(arguments), o
	gx.FS.apply(gx, g)
	return h
}
h.c = function () {	// uses " c_C_L " color pattern
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.u ? {c: 'z', C: 'w', l: 6} : g.O ? g.f :
			N(g.s) ? {c: g.f, l: g.s} :
					g.N_ ? {l: g.f, C: g.s} :
					{c: g.f, C: g.s, l: g.t}
	colInArr()
	function colInArr() {
		if (A(o.c)) {
			$c_C_L = function (o, col) {
				col = col || {}
				if (N(o.c[1])) {
					col.c = o.c[0];
					col.l = o.c[1];
				}
				else if (N(o.c[0])) {
					col.l = o.c[0];
					col.C = o.c[1]
				}
				else {
					col.c = o.c[0];
					col.C = o.c[1];
					col.l = o.c[2]
				}
				return col
			}
			if (N(o.c[1])) {
				o.c = o.c[0];
				o.l = o.c[1];
			}
			else if (N(o.c[0])) {
				o.l = o.c[0];
				o.C = o.c[1]
			}
			else {
				o.c = o.c[0];
				o.C = o.c[1];
				o.l = o.c[2]
			}
		}
		if (A(o.C)) {
			$C_L = function (o, col) {
				col = col || {}
				col.C = o.C[0];
				col.l = o.C[1]
				return col
			}
			o.C = o.C[0];
			o.l = o.C[1]
		}
	}
	
	transparent()
	function transparent() {
		if (o.c == 0) {
			$gxF = function (gx, col) {
				gx.f(null);
				col.C = 'X'
			}
			gx.f(null);
			o.c = 'X'
		}
		if (o.C == 0) {
			$gxS = function (gx, col) {
				gx.s(null);
				col.C = 'X'
			}
			gx.s(null);
			o.C = 'X'
		}
		if (o.c == 00) {
			$gxFS = function (gx, col) {
				gx.f(null);
				gx.s(null);
				col.c = 'X';
				col.C = 'X'
			}
			gx.f(null);
			gx.s(null);
			o.c = 'X';
			o.C = 'X'
		}
	}
	
	colorize()
	function colorize() {
	}
	
	if (S(o.c)) {
		gx.f(oO('c', o.c))
	}
	if (S(o.C)) {
		gx.s(oO('c', o.C))
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	fGrad()
	function fGrad() {
		if (o.lf) {/*
		 $l('r: ' + o.r)
		 $l('x: ' + o.x)
		 $l('y: ' + o.y)
		 $l('x1: '+ o.lf.x1)
		 $l('y1: '+ o.lf.y1)
		 $l('x2: '+ o.lf.x2)
		 $l('y2: '+ o.lf.y2)
		 */
			o.lf = O(o.lf) ? o.lf : {}
			if (o.r) {
				o.r = N(o.r, 0);
				o.x = N(o.x, 0);
				o.y = N(o.y, 0)
				o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
				o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
				o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
				o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
			}
			h.lf(o.lf)
		}
		if (o.rf) {
			o.rf = O(o.rf) ? o.rf : {}
			o.c = [2, 'z']
			if (o.r) {
				o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
				o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
				o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
				o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
				o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
			}
			h.rf(o.rf)
		}
		if (o.ls) {
			o.ls = O(o.ls) ? o.ls : {}
			if (o.r) {
				o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
				o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
				o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
				o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
			}
			h.ls(o.ls)
		}
		if (o.rs) {
			o.rs = O(o.rs) ? o.rs : {}
			if (o.r) {
				o.rs.x1 = _.tN(o.rs.x1) + o.x
				o.rs.y1 = _.tN(o.rs.y1) + o.y
				o.rs.x2 = _.tN(o.rs.x2) + o.x
				o.rs.y2 = _.tN(o.rs.y2) + o.y
				o.rs.r2 = _.tN(o.rs.r2) + o.r
			}
			h.rs(o.rs)
		}
	}
	
	fBMap()
	function fBMap() {
		if (o.bs) {
			h.bs(o.bs)
		}
		if (o.bf) {
			h.bf(o.bf)
		}
	}
	
	//note about h.c : used to be:   h.c = function (rad) {return this.dc(0, 0, rad)}
	return h
}
h.lW = h.l = function (l, b, c) {
	var h = this, gx = h.graphics;
	gx.ss(l || 1, b, c)
	return h
}
h.ss = function () {
	var h = this, gx = h.graphics, g = G(arguments)
	gx._ss.apply(gx, g)
	return h
}
h.C = h.s = h.sC = function (str, l) {
	var h = this, gx = h.graphics
	if (N(l)) {h.l(l)}
	gx._s(str)
	return h
}
h.f = function (fil, str) {
	var h = this, gx = h.graphics
	gx._f(fil)
	if (S(str)) {gx._s(str)}
	return h
}
dO.al = dO.opacity = function (al) {
	var dO = this
	if (U(al)) {
		return dO.alpha
	}
	dO.alpha = al;
	return dO
}
dO.shad = function (color, x, y, blur) {
	cjs.shad = function (color, x, y, blur) {
		alert('cjs.shad')
		if (color == '-') {
			return new cjs.Shadow(null, 0, 0, 0)
		}
		color = S(color) ? color : 'a'
		blur = N(blur) ? blur : 10
		x = N(x) ? x : 0
		y = N(y) ? y : 0
		var shad = new cjs.Shadow(oO('c', color), x, y, blur)
		return shad
	}// = cjs.shadow
	var shadow = cjs.shad(color, x, y, blur)
	this.shadow = shadow
	return this
}
globComp()

function globComp() {
	dO.cO = dO.compOp = function (compOp) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.compositeOperation
		}
		dO.compositeOperation = compOp
		return dO
	}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
	dO.Ds = dO.dO = function () {
		return this.compOp('destination-out');
	}
	dO.dS = dO.dI = function () {
		return this.compOp('destination-in')
	}
	dO.sD = dO.sI = function () {
		this.compOp('source-in');
		return this
	}
	dO.Sd = dO.sO = function () {
		this.compOp('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
	dO.ds = dO.dV = function () {
		this.compOp('destination-over');
		return this
	}
	dO.SD = dO.sT = dO.sA = function () {
		this.compOp('source-atop');
		return this
	}
	dO.DS = dO.dT = dO.dA = function () {
		this.compOp('destination-atop');
		return this
	}
	dO.li = function () {
		this.compOp('lighter');
		return this
	}
	dO.co = function () {
		this.compOp('copy');
		return this
	}
	dO.xo = function () {
		this.compOp('xor');
		return this
	}
}
 function color(){
	 $hsl = cjs.HSL = function (a, b, c) {
		 return U(a) ? cj.HSL(M.r() * 360, 100, 50) :
				 cj.Gx.getHSL(a, b, c)
	 }
	 $rgb = cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
 }
 function graphix(){
	 $Gx = function (a) {
		 return new cjs.Gx(a).FS()
	 }
	 
	 gx = cjs.Gx.prototype
	 gx._mt = function (x, y) {
		 var gx = this, g = G(arguments), o
		 o = {x: g.f, y: g.s}
		 gx.mt(o.x, o.y)
		 return gx
	 }
	 gx._lt = function (x, y) {
		 var gx = this, g = G(arguments), o
		 o = {x: g.f, y: g.s}
		 gx.lt(o.x, o.y)
		 return gx
	 }
	 gx.fancyLt = gx.poly = function (vs, f, s, w) {
		 var gx = this, g = G(arguments), o
		 o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
		 if (o.cCL) {
			 gx.cCL.apply(gx, o.cCL)
		 }
		 _.e(o.vs, function (v) {
			 gx.lt(v[0], v[1])
		 })
		 gx.cp()
		 return this
	 }
	 
	 gxCir()
	 gxPol()
	 gxColor()
	 
	 function gxCir() {
		 gx._dc = function () {
			 var gx = this, g = G(arguments), o
			 o = g.O ? g.f :
					 N(g.s) ? {x: g.f, y: g.s, r: g.t} :
					 {r: g.f}
			 return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
		 }
		 
		 gx.cir = function () {
			 var gx = this, g = G(arguments), o
			 o = g.O ? g.f :
					 N(g.s) ?
					 {x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
					 {r: g.f, fC: g.s, sC: g.t, ss: g.fo}
			 if (!g.n) {
				 o.fC = o.fC || 'z'
				 o.sC = o.sC || 'w'
				 o.ss = N(o.ss, 4)
			 }
			 if (o.fC) {
				 gx.fC(o.fC)
			 }
			 if (o.sC) {
				 gx.sC(o.sC)
			 }
			 if (N(o.ss)) {
				 gx.ss(o.ss)
			 }
			 return gx._dc(o)
		 }
	 }
	 
	 function gxPol() {
		 gx._pol = function () {
			 var gx = this, g = G(arguments)
			 if (g.A) {
				 return gx._pol.apply(gx, g.f)
			 }
			 gx.mt(g.f0, g.f1)
			 _.e(_.r(g), function (pt) {
				 gx.lt(pt[0], pt[1])
			 })
			 return gx.lt(g.f0, g.f1)
		 }
		 gx.pol = function (pts, f, s, w) {
			 var gx = this, g = G(arguments)
			 if (N(pts[0])) {
				 g.e(function (pt) {
					 gx.lt(pt[0], pt[1])
				 })
			 }
			 else {
				 gx.FS(f, s, w)
				 _.e(pts, function (pt) {
					 gx.lt(pt[0], pt[1])
				 })
			 }
			 return gx.cp()
		 }
	 }
	 function gxColor() {
		 gx._ss = function () {	//=0//=0//=10//=false
			 var gx = this, g = G(arguments)
			 if (g.S_) {
				 return gx._s(g.f)._ss.apply(gx, g.r)
			 }
			 var l = N(g.f, 4)
			 var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
			 var jts = N(g.t, 0)
			 var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
			 var ignSc = g.n ? true : false
			 gx.ss(l, caps, jts, mit, ignSc)
			 return gx
		 }
		 gx.F = function (fC) {
			 return this._f(fC || 'z')
		 }
		 gx.S = function (sC) {
			 return this._s(sC || 'w')
		 }
		 gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
			 return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
		 }
		 gx.FS   = function (f, s, w) {
			 // = gx.fs = gx.fC = gx.cCL
			 var gx = this
			 gx.F(f).S(s).SS(w)
			 return gx
		 }
		 
		 
		 gx.C = function (f, s, w) {
			 // = gx.fs = gx.fC = gx.cCL
			 var gx = this
			 gx.F(f)
			 if(s){gx.S(s)}
			 if(w){gx.SS(w)}
			 return gx
		 }
		 
		 
		 gx._f = function (col) {
			 return this.f(oO('c', col))
		 }
		 gx._s = function (col, thickness) {
			 // = gx.col = gx.sC
			 var gx = this
			 gx.s(oO('c', col))
			 if (N(thickness)) {
				 gx.SS(thickness)
			 }
			 return gx
		 }
	 }
	 gx._dr = function () {
		 var gx = this, g = G(arguments), o
		 o = g.O ? g.f : N(g.t) ?
		 {x: g.f, y: g.s, w: g.t, h: g.fo} :
		 {w: g.f, h: g.s}
		 o.x = N(o.x, 0)
		 o.y = N(o.y, 0)
		 o.w = N(o.w, 50)
		 o.h = N(o.h, 50)
		 gx.dr(o.x, o.y, o.w, o.h)
		 // drawRect ( x  y  w  h ) Graphics chainable :
		 // Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
		 return gx
	 }
 }
 graphix()