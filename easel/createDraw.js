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
REC = function () {
	$St()
	h = st.Sh().dg()
	gx = h.graphics
	gx.FS()._dr()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	h.dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 30)
}
CONNECT = function () {
	z();//m$$('location=location')
	stage = $St(1000)
	pink = cjs.cir(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	stage.A(pink)
	container = new createjs.Container()
	stage.A(container)
	green = cjs.cir(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.cir(100, 'yellow', 'purple').XY(250)
	red = cjs.cir(40, 'red', 'purple').XY(200, 100)
	orange = cjs.cir(20, 'orange', 'purple').XY(300)
	container.A(green, yellow, red, orange)
	LS(yellow, container)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, container)
	SL(orange, red)
}
FAIL = SKETCH = function () {
	s = cjs.stage(500, 500).A()
	s.can.P('a').XY(300)
	s.bm('me', 0.2, function (bm) {
	})
	s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
	s.circle(100, 100, 10, 'red', 'yellow')
			.circle(10, 100, 100, 'black', 'purple')
			.circle(100, 10, 100, 'blue', 'red')
			.circle(150, 150, 120, 'red', 'blue')
			.circle(30, 'brown', 'gray')
	St()
	ct = s.ct(1000, 300).drag()
	ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
	h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
	h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	st.u()
	St()
	ct = s.ct(600, 300)
	ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
	ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
	h = ct.Sh()
	h.graphics.FS()
	h.rec({
		w: 100, h: 200, a: 20,
		c: 'b', C: 'w', l: 20, bm: 1
	}).X(100)
	_.in(8, function () {
		h.X(0)
	}) //notice how gradient is seen behind the bm!!!
}//D 
SHPEZ8 = function () {//C- only PLAY!?
	St()
	s.can.P('a').XY(200)
	s.bm('me')
	s.bm('me', 0.2, function (bm) {
	})
	h = $h().cir()
	s.A(
			$h().cir(100, 'blue', 'green').XY(100, 100).drag()
	)
	s.h().cir(100, 100, 10, 'red', 'yellow')
	s.h().cir(10, 100, 100, 'black', 'purple')
	s.h().cir(100, 10, 100, 'blue', 'red')
	s.h().cir(150, 150, 120, 'red', 'blue')
	s.h().cir(30, 'brown', 'gray')
	s.u()
}
SHPS8 = function () {
	z()
	s = stage = $St(500, 500)
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
	s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
	s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
	s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
	s.Sh().cir(150, 150, 120, 'c', 'd')
		//.fn(SL)
			.cir(30, 'x', 'x')
}
SHPES9 = function () {
	z()
	s = stage = St(500, 500).a()
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
}
RR1 = BASIC = RRR8 = ROUNDREC = function () {//C+
	s = $St()
	h = s.h()
	gx = h.graphics.FS()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}
RR2 = GOODONE = TXH8 = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	return
	//function exceedsStackSize() {
	////////////////
	h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]], [[500, 0], [600, 100]
			])
	h.cir(600, 300, 'u', 'g', 10)
	lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
	v = [[300, 300], [320, 200], [640, 400], [280, 650]]
	//two ways to make the same thing
	s.h().poly({
		v: v,
		lf: lf
	})
	s.h(250, 50).lf(lf).mt(v)
}
BB = BRUSH = BLOTCHY = function () {
	z();
	var _mPt
	st = $St(1000)
	st.mO(1)
	h = $h().a2(st)
	h.ss('o', 40, 's', 'bevel', 1)
	st.bm('chicks', function (bm) {
		// _i= i = i[0]
		bm.al(.2)
		st.A(bm)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
			_mPt = V(mPt)
		})
	})
}
TWOSTAGES = function () {
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.ct().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
GRAPHTEST8 = BROKEN = function () {
	$St();
	img = $.i('me', function () {
		s.ct().A(h = $Sh())
		gx = h.graphics.FS()
		s.A($Bm(img))
		gx.ss(32).dr(20, 20, 920, 360);
		fns = [
			function () {
				return $Sh(12, 10)
						.lf('b', 'g', 130).dr(130)
			},
			function () {
				return $Sh(40, 10, 'b', 16)
						.ls('r', 'w', 70, 140).de(70, 140)
			},
			function () {
				return $Sh(80, 80)
						.C('b', 8).rf('w', 'y', 40).dc(40)
			},
			function () {
				return $Sh(12, 10, 18)
						.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
			},
			function () {
				return $Sh(12, 12, 'g', 'r', 8)
						.rr(130, 30)
			}, //w(h) and r
			function lt() {
				return $Sh().C('o')
						.ss(16, 'round', 'round')
						.mt([40, 10], [90, 90], [90, 140])
			},
			function star() {
				return $Sh(80, 85, 'y', 'b', 3)
						.pStr(0, 0, 80, 5, .8, -95)
			},
			function hex() {
				return $Sh(80, 40, 'p')
						.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
			}
		]
		_.e(fns, withEachFn)
		function withEachFn(cont, i) {
			var W = 155, H = 155, P = 5, C = 4 //pad, cols
			s.A(tile(cont()).XY(
					42 + (W + P) * (i % C),
					42 + (i / C | 0) * (H + P)))
		}
	})[0]
	tile = createTile = function (x, y) {
		var bg, til
		bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
		til = cjs.ct().A(bg)
		if (N(x)) {
			til.X(x)
		}
		if (N(y)) {
			til.Y(y)
		}
		if (O(x)) {
			til.A(x)
		}
		return til
	}
}
TWOSTAGS = function () {
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
ST22 = function () {
	$.header().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.canvas('y', 540, 260).id('canvasOne')//.P('a').top(0).right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.canvas('o', 540, 260).id('canvasTwo')//.P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = $St(canvasName)
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.container().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
	
	/*
	
	 $.header().K("EaselJS").A(
	 $.h1('nextStage'),
	 $.p("This is an example")).A()
	 c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
	 .right(0).bor('1px solid grey').A() // background: 'none',
	 c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	 topStage = stageSetup("canvasTwo", handleEvt)
	 .N("topStage").eMO()
	 .A(makeSquare(375, 30, "pink", handleEvt))
	 .next(bottomStage)
	 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	 function stageSetup(canvasName, handler) {
	 s = stage = new cjs.Stage(canvasName).tick()
	 //stage.addEventListener("stagemousemove", handler);	// too noisy
	 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
	 s.on(ev, handler)
	 })
	 s.log = []
	 return s
	 }
	
	 function makeSquare(x, y, color, handler) {
	 var shape = cjs.shape().N('square').XY(x, y)
	 shape.graphics.f(color).dr(0, 0, 135, 135)
	 var cont = cjs.container().N('container').A(shape)
	 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
	 cont.on(ev, handler)
	 })
	 cont.cursor = "pointer"
	 return cont
	 }
	
	 function handleEvt(evt) {
	 var target = evt.target,
	 stage = target.getStage(),
	 log = stage.log
	 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
	 + " y:" + evt.stageY.toFixed(0))
	 while (log.length > 12) {
	 log.shift()
	 }
	 stage.text.text = log.join("\n")
	 if (evt.type == "mouseover") {
	 target.alpha = 0.5
	 }
	 if (evt.type == "mouseout") {
	 target.alpha = 1
	 }
	 }
	 */
}
NEEDS$DF = CJSME = function () {
	$St()
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		st.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200})
		st.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200})
		st.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40)
	})//D
}
makeSquare = function (x, y, color, handler) {
	var shape = cjs.shape().N('square').XY(x, y)
	shape.graphics.f(color).dr(0, 0, 135, 135)
	var cont = cjs.ct().N('container').A(shape)
	_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
		cont.on(ev, handler)
	})
	cont.cursor = "pointer"
	return cont
}
function old() {
	UGUNSHIP = function () {
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(Math.atan(y / x))
			if (x < 0) {
				d = Math.abs(d) + 90;
				if (y < 0) {
					d = Math.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
			t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			kD('d', function () {
				t.rt(6, '+')
			})
			kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(t)
				st.on('stmousedown', function (event) {
					e = event
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			setInterval(function () {
				t.X(t.vx, '+').Y(t.vy, '+')
				t.rotation = angleInDegrees(t)
			}, 10)
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hide(),
				$.bt('sgun', function () {
					sgun(guy)
				})
		)
		boot = $.boot()
		st = createjs.st(800, 600).tick()
		boot.A(
				div,
				st.canvas
		)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		// _.times(100,function(){var a=ast();a.a();a.p()})
		// st.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
		sgun(guy)
	}
	$rGx = $recGx = classicRecGx = function (width, height, fc, sc) {
		
		// =  cjs.rect= cjs.rect2
		width = width || 50
		height = height || 50
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new cjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth, -halfheight)
				.lt(-halfwidth, halfheight)
				.lt(halfwidth, halfheight)
				.lt(halfwidth, -halfheight)
				.lt(-halfwidth, -halfheight)
		return h
	}
}
function grid() {
	GRID = function () {
		stage = s = $St(1000, 1000)
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	GRIDD = NEEDSDRAWSQUARE = function () {
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
		
		$St()
		ct = st.ct()
		ct.SL()
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.t(rows * cols, function (i) {
			drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
			)
		})
		st.update()
	}//A-
}
h.qt = function (a, b, c, d, e, f) {
	var h = this, gx = h.graphics
	if (O(a)) {
		a = V(a)
		b = V(b)
		gx.qt(a.x, a.y, b.x, b.y)
	}
	else {
		gx.qt(a, b, c, d, e, f)
	}
	return h
}
h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	h.quadraticCurveTo(x, y, r, startA, endA, aCW)
	return h
}
h.cur = function (a, b, c, d, e, f, g, h) {
	if (O(a)) {
		return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
	}
	return this.mt(a, b).qt(c, d, e, f, g, h)
}
h.de = h.ell = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
					N(g[0]) ? {w: g[0], h: g[1]} :
							O(g[0]) ? g[0] : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.w = _.tN(o.w, 100)
	o.h = _.tN(o.h, o.w)
	gx.drawEllipse(o.x, o.y, o.w, o.h)
	return h
}
h.de2 = function (x, y, W, H, r) {
	var h = this
	h.de(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h.rr = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
					N(g[1]) ? {w: g[0], r: g[1]} :
							N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
									O(g[0]) ? g[0] : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.w = _.tN(o.w, 100)
	o.h = _.tN(o.h, o.w)
	gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
	return h
}
h.rr2 = function (x, y, W, H, r) {
	var h = this
	h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	h.bezierCurveTo(x, y, r, startA, endA, aCW)
	return h
}
h.arc = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	/*
	 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
	 For example, to draw a full circle with a radius of 20 centered at (100, 100):
	 arc(100, 100, 20, 0, Math.PI*2)
	 */
	h.arc(x, y, r, startA, endA, aCW)
	return h
}
h.arc2 = function (x, y, X, Y, r) {
	var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
	gx.arcTo(x, y, X, Y, r)
	return h
}
//
h.rc = h.roundRectComplex = function () {
	var h = this, gx = h.graphics
	gx.drawRoundRectComplex.apply(gx, arguments)
	return h
}
h.qt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
	return h
}
h.arc = h._a = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	/*
	 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
	 For example, to draw a full circle with a radius of 20 centered at (100, 100):
	 arc(100, 100, 20, 0, Math.PI*2)
	 */
	h.arc(x, y, r, startA, endA, aCW)
	return h
}
h.arc2 = h._a2 = function (x, y, X, Y, r) {
	var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
	gx.arcTo(x, y, X, Y, r)
	return h
}
h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
	var h = this,
			gx = h.graphics
	gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
	return h
}
h._qt = function (cpx, cpy, x, y) {
	var h = this, gx = h.graphics
	gx.quadraticCurveTo(cpx, cpy, x, y)
	return h
}
h.qt = function (a, b, c, d, e, f) {
	var h = this, gx = h.graphics
	if (O(a)) {
		a = V(a)
		b = V(b)
		gx.qt(a.x, a.y, b.x, b.y)
	}
	else {
		gx.qt(a, b, c, d, e, f)
	}
	return h
}
h.de = h.ell = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
					N(g.f) ? {w: g.f, h: g[1]} :
							O(g.f) ? g.f : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.w = _.tN(o.w, 100)
	o.h = _.tN(o.h, o.w)
	gx.drawEllipse(o.x, o.y, o.w, o.h)
	return h
}
h.de2 = function (x, y, W, H, r) {
	var h = this
	h.de(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h._rr = function () {
	this.graphics.rr.apply(this.graphics, arguments)
	return this
}
h.rr = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
					N(g[1]) ? {w: g.f, r: g[1]} :
							N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
									O(g.f) ? g.f : {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 100)
	o.h = N(o.h, o.w)
	return h._rr(o.x, o.y, o.w, o.h, o.r)
}
h.rr2 = function (x, y, W, H, r) {
	var h = this
	h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h.rc = h.roundRectComplex = function () {
	var h = this, gx = h.graphics
	gx.drawRoundRectComplex.apply(gx, arguments)
	return h
}
h.arc = h._a = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	/*
	 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
	 For example, to draw a full circle with a radius of 20 centered at (100, 100):
	 arc(100, 100, 20, 0, Math.PI*2)
	 */
	h.arc(x, y, r, startA, endA, aCW)
	return h
}
h.arc2 = h._a2 = function (x, y, X, Y, r) {
	var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
	gx.arcTo(x, y, X, Y, r)
	return h
}
h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
	var h = this,
			gx = h.graphics
	gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
	return h
}
h._qt = function (cpx, cpy, x, y) {
	var h = this, gx = h.graphics
	gx.quadraticCurveTo(cpx, cpy, x, y)
	return h
}
h.qt = function (a, b, c, d, e, f) {
	var h = this, gx = h.graphics
	if (O(a)) {
		a = V(a)
		b = V(b)
		gx.qt(a.x, a.y, b.x, b.y)
	}
	else {
		gx.qt(a, b, c, d, e, f)
	}
	return h
}
h.de = h.ell = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
					N(g.f) ? {w: g.f, h: g[1]} :
							O(g.f) ? g.f : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.w = _.tN(o.w, 100)
	o.h = _.tN(o.h, o.w)
	gx.drawEllipse(o.x, o.y, o.w, o.h)
	return h
}
h.de2 = function (x, y, W, H, r) {
	var h = this
	h.de(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h._rr = function () {
	this.graphics.rr.apply(this.graphics, arguments)
	return this
}
h.rr = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
					N(g[1]) ? {w: g.f, r: g[1]} :
							N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
									O(g.f) ? g.f : {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 100)
	o.h = N(o.h, o.w)
	return h._rr(o.x, o.y, o.w, o.h, o.r)
}
h.rr2 = function (x, y, W, H, r) {
	var h = this
	h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h.rc = h.roundRectComplex = function () {
	var h = this, gx = h.graphics
	gx.drawRoundRectComplex.apply(gx, arguments)
	return h
}
RR1 = BASIC = RRR8 = ROUNDREC = function () {//C+
	s = $St()
	h = s.h()
	gx = h.graphics.FS()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}
RR2 = GOODONE = TXH8 = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	return
	//function exceedsStackSize() {
	////////////////
	h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]], [[500, 0], [600, 100]
			])
	h.cir(600, 300, 'u', 'g', 10)
	lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
	v = [[300, 300], [320, 200], [640, 400], [280, 650]]
	//two ways to make the same thing
	s.h().poly({
		v: v,
		lf: lf
	})
	s.h(250, 50).lf(lf).mt(v)
}
BB = BRUSH = BLOTCHY = function () {
	z();
	var _mPt
	st = $St(1000)
	st.mO(1)
	h = $h().a2(st)
	h.ss('o', 40, 's', 'bevel', 1)
	st.bm('chicks', function (bm) {
		// _i= i = i[0]
		bm.al(.2)
		st.A(bm)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
			_mPt = V(mPt)
		})
	})
}
CVDR = CVDRAW = CV1 = FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
CVFS = XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
CVPOL = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPol(flatTri, 'r', 'v')
}
function circle() {
	$Sh = $H = $h = function () {
		var g = G(arguments), h = new cjs.Shape(),
		//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
				o = g.O ? g.f :
						g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
						{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
							// 'c-C-l' pattern
								N(g.s) ? {C: g.f, l: g.s} :
								{c: g.f, C: g.s, l: g.t}
		_h = h
		h.XY(N(o.x, 0), N(o.y, 0))
		h.c(o.c || 'z', o.C || 'w', o.l || 8)
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		if (g.p) {
			h.dg()
		}
		h.gx = h.graphics
		return h
	}
	ct.cir = function () {
		var h = this.Sh()
		return h.cir.apply(h, arguments)
	}
	ct.h = function () {
		var ct = this,
				h = $H.apply(null, arguments)
		ct.A(h)
		return h
	}
	h._dc = function () {
		var h = this
		h.graphics.dc.apply(h.graphics, arguments)
		return this
	}
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments)
		//h.cp()  // ?
		if (g.A) {
			return $a(h, 'dc', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		gx._dc.apply(gx, g)
		return h
	}
	h.cir = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (g.A) {
			return $a(h, 'cir', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f :
				N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g.fo, C: g.fi, l: g.si} :
						N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} : g.N_ ? {
							r: g.f,
							c: g.s,
							C: g.t,
							l: g.fo
						} : {c: g.f, C: g.s, l: g.t}
		//o.c = o.c || 'w'; o.C = o.C || 'z'; o.l = N(o.l, 4)
		h.c(o)
		function replaced() {
			if (o.c) {
				h.c(o.c)
			}
			if (o.C) {
				h.C(o.C)
			}
			if (N(o.l)) {
				h.l(o.l)
			}
			h.cp()
			h._dc(o)
		}
		
		if (o.bf) {
			if (N(o.bf)) {
				o.bm = 'me'
			}
			if (F(Q)) { //async
				h.bf(o.bf, function () {
					h.dc(o)
				})
			}
			else { //sync
				o.tf = o.tf || null;
				h.bf(o.bf, o.tf).dc(o)
			}
		}
		else {
			h.dc(o)
		}
		h.alpha = N(o.al, 1)
		return h
	}
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
	$cir = function () {
		var g = G(arguments), o
		var h = $Sh()
		if (g.p) {
			h.drag()
		}
		o = g.O ? g.f :
				N(g.f) && N(g.s) && N(g.t) ?
				{r: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
						N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} :
								g.N_ ? {r: g.f, c: g.s, C: g.t, l: g.fo} :
								{c: g.f, C: g.s, l: g.t}
		h.cir(o.r, o.c, o.C, o.l)
		h.regX = -N(o.x, 0)
		h.regY = -N(o.y, 0)
		h.alpha = N(o.al, 1)
		return h
		// old: cir0: x, y, rad, fCol, sCol ( h = $Sh().XY(N(g.f, 0), N(g.s, 0)) )
		//h.f(fCol || 'z')
		//var fCol = g.fo || 'w'
		//var sCol = g.fi || 'z'
		//if (sCol) {	 h.s(sCol) }
		//h.cir(0, 0, rad)
		//if (g.O) {	 var cir = g.f
		//return cjs.cir0(cir.x, cir.y, cir.r, cir.fC, cir.sC)	 }
		//h.cir(x, y, r, fCol, sCol)
	}
	h._dr = function () {
// = h.dr
		var h = this, gx = h.graphics
		gx._dr.apply(gx, arguments)
		return h
	}
	h.dr = function (x, y, W, H) {
		// = h.dr2
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.dr2(g)
			});
			return h
		}
		o = g.O ? g.f :
				U(g.t) ? {w: g.f, h: g.s} :
				{x: g.f, y: g.s, w: g.t, h: g[3]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, 50)
		h._dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h.rec = function () {
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.rec(g)
			});
			return h
		}
		o = g.O ? g.f :
				S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
						g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
								N(g.t) ?
								{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
								{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w)
		if (o.i) {
			$l('see h.rec')
			// ****************
			h.bf(o.i, function () {
				o.i = null;
				h.rec(o)
			})
			return h
		}
		if (o.c) {
			h.c(o)
		}
		if (o.lf) {
			$l('see h.rec')
			return // ****************
			h.lf({
				c1: o.c1 || 'z', c2: o.c2 || 'w',
				s1: 0, s2: 1,
				x: o.x - o.w / 2, y: o.y - o.h / 2,
				x2: o.x - o.w / 2, y2: o.y + o.h / 2
			})
		}
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	ct.rec = function () {
		var ct = this, g = G(arguments), o, ct2, h
		if (g.OO_) {
			g.e(this, 'rec');
			return this
		} //it doesnt know that's this! (scope talk)
		o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
				g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
		o.al = N(o.al, 1)
		o.rt = N(o.rt, 0)
		o.c = o.c || 'z';
		o.C = o.C || 'w'
		ct2 = ct.ct();
		h = ct2.h(o.x, o.y);
		h.rt(o.rt);
		h.c(o).al(o.al)
		if (o.lf) {
			h.lf(o)
		} else if (o.rf) {
			h.rf(o)
		}
		if (o.bm) {
			h.bR({i: 'me', hs: [o]})
		}
		else {
			h.rec(o.w, o.h)
		}
		if (g.p) {
			ct.drag()
		}
		return ct2
		function alt() {
			ct.rec = function () {
				var ct = this, g = G(arguments), o, ct2, h
				if (g.OO_) {
					g.e(this, 'rec');
					return this
				} //it doesnt know that's this! (scope talk)
				o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
						g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
				o.al = N(o.al, 1)
				o.rt = N(o.rt, 0)
				o.c = o.c || 'z';
				o.C = o.C || 'w'
				ct2 = ct.ct();
				h = ct2.h(o.x, o.y);
				h.rt(o.rt);
				h.c(o).al(o.al)
				if (o.lf) {
					h.lf(o)
				} else if (o.rf) {
					h.rf(o)
				}
				if (o.bm) {
					h.bR({i: 'me', hs: [o]})
				}
				else {
					h.rec(o.w, o.h)
				}
				if (g.p) {
					ct.drag()
				}
				return ct2
			}
			ct.rec = function () {
				var ct = this, g = G(arguments), o, ct2, h
				if (g.OO_) {
					g.e(this, 'rec');
					return this
				} //it doesnt know that's this! (scope talk)
				o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
						g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
				o.al = N(o.al, 1)
				o.rt = N(o.rt, 0)
				o.c = o.c || 'z';
				o.C = o.C || 'w'
				ct2 = ct.ct();
				h = ct2.h(o.x, o.y);
				h.rt(o.rt);
				h.c(o).al(o.al)
				if (o.lf) {
					h.lf(o)
				} else if (o.rf) {
					h.rf(o)
				}
				if (o.bm) {
					h.bR({i: 'me', hs: [o]})
				}
				else {
					h.rec(o.w, o.h)
				}
				if (g.p) {
					ct.drag()
				}
				return ct2
			}
		}
	}
	$rec = $Rec = function (a, b, c, d) {
		return new cjs.R(a, b, c, d)
	}
	CIR1 = HCR = function () {
		$St()
		h = st.Sh(300, 0, '+')
		h.gx.C('b', 'z', 10)
		h.bf('me', function (h) {
			h.dc(100, 0, 100)
					.dc(100, 300, 50)
					.es().s('black')
					.dc(-100, 300, 60)
					.cp()
		})
		st.Sh(0, 0, '+').gx
				.C('r', 'y', 10)
				._dc(30).cp()
				._dc(60).cp()
				.dc(100, 0, 100)
				.cp()
				.dc(400, 400, 100)
			//.C('z')
				.dc(100, 400, 100)
				.dc(-300, 400, 100)
		//gx._f('p')._s('w').ss(10)._dc(100).dc(100, 0, 100)
//	.C('g','b').cp().dc(0, 300, 100)
//	st.Sh('b', 'o', 10, '+').cp().cir(100, 100, 100).cp().es().cir(400, 400, 40, 'r').cp()
	}
	CIR7 = function () {
		ct = $Ct().a2($St(600))
		ct.Sh(100, 100).f('y').dc(0, 0, 40)
		$cir(80, 100, 100, 'g', 'r', 13).a2(ct)
		$cir(80, 'g', 'y', 30).a2(ct).dg()
	}
	CIR3 = function () {
		$St()
		s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
				[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
		s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
	}
	CIR5 = HDC = function () {
		$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
	}
	CIR6 = function () {
		ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
		h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
		ct.A($cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
	}
	CIR8 = CJSCIR = function () {
		ct = $Ct().a2($St(600))
		ct.A(
				$cir(400, 300).f('r').dc(28, 40, 40)
		)
		_.in(2, function () {
			ct.A(
					$cir(80, 300, 300, 'g', 'y', 30)
			)
		})
		$.bt('more', function () {
			h = $H().a2(ct)
			h.f('o').dc(100, 300, 105) ///x, r , r = 50
			h.f('z').dc(100, 300)
			h.f('r').dc(100, 300, 50)
			h.f('b').dc(100, 300) //r, x=0, y=0
			h.f('r').dc(100)
		})
	}
	CIR9 = DRG = GOB = function () {
		st = $St() //good gx = $Sh().a2(st).graphics
		//good gx = st.Sh().graphics
		h = st.Sh().drag()
		gx = h.graphics.SS()
		$.i('me', function (img) {
			gx.F()
			gx._bf(img)
			gx._dc({x: 100, y: 200, r: 200})
			gx.C('R')._dc({x: 200, y: 200, r: 200})
			gx.C('b', 'g', 30)._dc(100, 300)
		})
	}
	CIRS = function () {
		$H().f('b').a2($St()).cirs(
				[200, 200, 50],
				[400, 200, 50],
				[600, 200, 50]
		)
	}
	CIRZS = function () {
		$St()
		h.c('b', 'r', 10).XY(-100, -100)
		/*  h.dc(300,300,50)
		 gx.dc(400,400,50)
		 h.dc(500,500,50)
		 gx.dc(600,600,50)
		 */
		// h.dc(100,100,50) -> no color
		h.c().dc(100, 100, 50) // black fill, l4 white stroke
		h.c({C: 'r'}).dc(300, 300, 50)
		h.cir({
			r: 50, x: 200, y: 200,
			C: ['y', 10]//,
			//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			//ls: {c1: 'u', c2: 'o'}
		})
		h.cir({
			r: 50, x: 500, y: 200,
			C: ['y', 2]//,
			//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
			//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
		})
		h = s.h()//.lf({})
				.dc()
				.c('r', 'b', 10)//.lf({y2: 400})
				.dc(300, 300, 50)
		return
	}
	SIR = function () {
		$.C('b')
		$s({body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'}, canvas: {M: 20}})
		st = $St($.c(600, 300)[0])
		st.A($Tx('h.dc', '50px Arial', 'white').X(400))
		h = $H().a2(st)
		h.dc()
		h.graphics.cp()
		h.dc(36)
		h.graphics.cp()
		h.dc(18)
		h.graphics.cp()
		h.graphics.cp()
		h.dc(200, 100)
		h.graphics.cp()
		h.dc(300, 100, 20)
		h.graphics.cp()
		h.dc(300, 200, 20)
		//
		st2 = $St($.c(600, 300)[0]).t()
		st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
		st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
		//
		st1 = $St($.c(600, 300)[0]).t()
		////////
		st1.A($Tx('$cir', '50px Arial', 'white').X(400))
		st1.A($cir(300, 'g'))
		st1.A($cir(140, 220, 20, 'o').dc())
		st1.A($cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
		st3.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
		st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
		h = $Sh().a2(st)
		gx = h.graphics.FS()
		h.dc()
		h.dc(36)
		h.cir(18, 'o')
		h.dc(200, 100)
		h.cir(300, 100, 20, 'r')
		h.dc(300, 200, 20)
		st2 = $St($.c(600, 300)[0]).t()
		st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
		st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
		st1 = $St($.c(600, 300)[0]).t()
		st1.A(_$Tx('$cir', '50px Arial', 'white').X(400))
		st1.A($cir(300, 'g'))
		st1.A($cir(140, 220, 20, 'o').dc())
		st1.A($cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
		st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
	}
	BOWL = function () {
		$St()
		ct = container = c = $Ct().a2(st)
		plX = st.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
		//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circ = $cir(plX, plY, plR, 'yellow')
		container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: r, m: m,
				f: f, vX: 0, vY: 0, player: false
			}
		}
		_.t(nRng, function (r) {
			var crR = 0, ang = 0, rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.t(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
					y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				ct.A($cir(10, 'z').XY(x, y))
			})
		})
	}
	CIR2 = ROTCIRS = function () {
		ct = $Ct().a2($St(1000, '+')).A(
				$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
		)
		$t(function (e) {
			ct.rt(ct.rt() + 3)
		})
	}
	CIR4 = function () {
		$Sh().a2($St(600)).f('r', 'y').lW(30)
				.dc(400, 400, 200)
				.dr(100, 0, 200, 200)
	}
	JCIR = function () {
		$St()
		gx = h.graphics
		gx._f('r')._s('b').ss(130).dc(400, 300, 50)
//	gx._f('g')._s('y').ss(130).dc(500, 300, 50)
		h = st.h()
		st.A(h)
		//h.cir(400,500,220,'r','b',77)
		st.A($Cir(400, 400, 20, 'i', 'j'))
		st.A($H('b', 300, 200).dc(400))
	}
}
circle()
