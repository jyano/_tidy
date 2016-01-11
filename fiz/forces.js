w.rnRecs = w.randRects = function () {
	var that = this
	_.t(30, function (i) {
		that.BRICK(
				M.r() * 1100 + 20,
				M.r() * 150 + 40,
				M.r() * 30 + 15,
				M.r() * 30 + 15
		).K('rR randomRect')
	})
	return this
}
w.rnF = w.randFx = function () {
	return this.dynamic(M.r() * 1000, 100,
			b2d.randomFixture())
}
w.random = w.addRandomBodies = function (howMany) {
	var w = this
	_.t(howMany || 10, function () {
		w.addRandomBody()
	})
	return w
}
w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.BALL(100 + (i * 8), 50, 10)
	})
	return w
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
function randBods() {
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
	w.randRects = function (ob) {
		var that = this
		ob = ob || {}
		var y = ob.y || 0,
				z = N(ob.z) ? ob.z : 1
		_.times(30, function (i) {
			that.rect(
					Math.random() * 1100 + 20,
					(Math.random() * 150 + 40) + y,
					(Math.random() * 30 + 15) * z,
					(Math.random() * 30 + 15) * z
			).stat().K('randomRect')
		})
		return this
	}
	w.addRandomBody = w.randomFixture = function () {
		var body = this.dynamic(Math.random() * 1000, 100,
				b2d.randomFixture())
		return body
	}
	w.random = w.addRandomBodies = function (howMany) {
		howMany = howMany || 10;
		var that = this
		_.times(howMany, function (num) {
			that.addRandomBody()
		})
		return this
	}
	w.addTenBalls = function (num) {
		num = num || 10;
		var that = this
		_.times(num, function (i) {
			that.ball(100 + (i * 80), 200)
		})
		return this
	}
	w.addHundBalls = function (num) {
		num = num || 100;
		var that = this
		_.times(num, function (i) {
			that.circ(100 + (i * 8), 50, 10)
		})
		return this
	}
}
w.aTri = function (x, y) {
	this.sB(x, y).CF(
			$fD($pH()._SAA([
				V(-1, 0), V(0, -1), V(1, 0)
			]))
	)
	return this
}
w.aAF = w.aF__ = function () {
	var w = this, g = G(arguments)
	w.aF.apply(w, g)
	return w
}
w.A = function (bD, fD) {
	var w = this,
			g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w.R = function (c, W, H, x, y) {
	alert('w.R')
	var w = this, g = G(arguments),
			wC = w.cen(),
			r
	if (!S(g.f)) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2;
		y = wC.y - H / 2
	}
	return w.S(
			x + W / 2,
			N(y, x) + H / 2,
			c,
			W, H
	)
	old = function () {
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
	}
}
w.vW = function (col, H, x, y) {
	alert('w.vW')
	var w = this, g = G(arguments),
			cW = w.can.W(),
			cH = w.can.H()
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w.cAF = w.aF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	return sB.CF($fD($aH(A(g.t) ? g.t : _.r(g, 2))))
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
w._sB = function (x, y, fD) {
	var b = this.CB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.cCB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return b
}
w.cRB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cRF(r)
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this._sB(x, y)
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.cTri = w.tri = function (x, y) {
	return this.sB(x, y), $fD($pH()).SAA([
		V(-1, 0), V(0, -1), V(1, 0)
	], 3)
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A($cF(50).DBF())
	return b
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
w.dynX = w.dynamicX = function (x, y, fD) {
	var w = this, body
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	return w.body(b2d.dyn(x, y), fD)
}
w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {
	var w = this, g = G(arguments);
	var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
}
w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}
w.dC = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return cF
}
w.dC_ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}
w.sC = function (x, y, r) {
}
////////////////////////
function soon() {
	w.boxOld = function (x, y, W, H) {//=brk=brick=
		w.circleStat = function (x, y, r) {
			var cir = w.sB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		w.circle = function (x, y, r) {
			var cir = w.dB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
		w.brickOld = function (x, y, W, H) {//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
		}
	}
	w.aRF = function () {
		var w = this, g = G(arguments)
		var b = w.sB(g.f, g.s)
		b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		return w
	}
	w.aCF = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cCF(r)
		return w
	}
// uses k:
	w.box = w.bi = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A($dB(x, y), $rF(W, H)).K('box')
	}
	w.cF = function (bD, fD) {
		return this.cB(bD).cF(fD)
	}
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
}
w.bulBD = w.bul = function (x, y) {
	return this.B($bulBD(x, y))
}
w.bul = function (x, y) {
	var def, body
	def = b2d.dyn(x, y)
	def.bullet = true
	body = this.createBody(def)
	return body
}
b.GD = b.GDf = function () {
	return this.GetDefinition()
}
b.GLD = function () {
	return this.GetLinearDamping()
}
b.GAD = function () {
	return this.GetAngularDamping()
}
b.SLD = function (lD) {
	this.SetLinearDamping(lD);
	return this
}
b.SAD = function (aD) {
	this.SetAngularDamping(aD);
	return this
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.B($sB(0, 0))
	eg.f($eF(a, b, c, d))
	return eg
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.walls = function (o) {
	var w = this,
			can = w.canvas,
			W = can.width,
			H = can.height,
			wa = o.w,
			col, h
	if (wa == 0) {
		return w
	}
	if (F(wa)) {
		wa()
	}
	else if (A(wa)) {
		col = wa[0]
		W = wa[1]
		h = wa[2]
		if (!S(col)) {
			h = W;
			W = col;
			col = 'o'
		}
		W = N(W) ? W : w.W()
		h = N(h) ? h : w.H()
		w.floor = w.R(col, W, 20, 0, h - 20)
		w.right = w.R(col, 20, h, W - 20, 0)
		w.roof = w.R(col, W, 20, 0, 0)
		w.left = w.R(col, 20, h, 0, 0)
	}
	else if (wa == '_') {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'L') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'U') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
	}
	w.$$(function () {
		w.S(w.mx, w.my, 'x', [[10, 10, '-']])
	})
	return w
}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
w.tall = function Side(x) {
	var ht = w.can.height
	return this.wall(x, ht / 2, 40, ht)
}
w.long = function Flat(y) {
	var wd = w.can.width
	return this.wall(wd / 2, y, wd, 40)
}
w.walls = function (wa) {
	var w = this;
	if (wa === 0) {
		return w
	}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
	w.left = w.tall(0)
	w.right = w.tall(w.can.width)
	w.roof = w.long(0)
	w.floor = w.long(w.can.height)
	return w
}
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		g.e(function (g) {
			w.pol(g)
		});
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		_.e(g.t, function (p) {
			b.pol({v: p})
		})
		return g.m ? M.p(b) : b
	}
	o = g.O ? g.f : N(g.f) ? {x: g.f, y: g.s, p: g.t} : {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		if (b2d.iB(o.p)) {
			o.p = M.p(o.p)
		}
		_p = o.p
		b.pol(o.p)
		if (g.m) {
			b = M.p(b)
		}
		return b
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.POLY = w.poly = w.verts = w.vs = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.dB(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
		//  bod.convex( fixt )
		//	b.convex.apply(b, arr)
	})
	return b
}
w.pol1 = function () {
	var w = this, g = G(arguments), o
	var v = V(g.f, g.s)
	var b = w.D(v.x, v.y)
	b.pol({v: g.t})
	return b
}
w.ps = w.poliees = function (x, y, pS) {
	pS.ps(this.D(x, y), function (pS) {
		b1.pol(pS)
	})
}
w.ps = function (x, y, p) {
	var w = this, b
	b = w.D(x, y)
	p.ps(b, function (p) {
		b1.pol(p)
	})
}
w.polies = w.ps = function (x, y, p) {
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}
b.GI = function () {
	return this.GetInertia()
}
b.AF = function (v, c) {
	this.ApplyForce(v, c);
	return this
}
 
b.AI = function () {
	this.ApplyImpulse.apply(this, arguments)
	return this
}

 

b.I = function (imp , pt, pt2) {
/*
 //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
 if (g.A) {return b.I.apply(b, g.f)}
 o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
 o.i = o.i || b.v().d(40)
 o.v = o.v || b.wC()
 b.ApplyImpulse(o.i, o.v.div())
 */
	var b=this,g=G(arguments), o
	b.imp = function (imp, pt) {
		return this.AI(imp, pt || this.GWC())
	}
	o = O(g.f)? {imp: g.f, pt: g.s}: 
	{imp: V(g.f, g.s), pt : g.t}
	o.imp = o.imp ||  b.worldVec().d(40)
	return b.imp(o.imp, o.pt)
}


b.F = function (v, c, c2) {
	if (N(c)) {
		return this.F(V(v, c), c2)
	}
	if (U(c)) {
		c = this.GWC()
	}
	this.ApplyForce(v, c)
	return this
}
b.lD = function (damp) {
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
b.aD = function () {
	var b = this, g = G(arguments),
			d = g[0]
	if (U(d)) {
		return b.GetAngularDamping()
	}
	if (d == '++') {
		d = 10000
	}
	b.SetAngularDamping(d)
	return b
	function alt() {
		b.aD = function (damp) {
			if (U(damp)) {
				return this.GetAngularDamping()
			}
			this.SetAngularDamping(damp)
			return this
		}
	}
}
b.aV = function (vel) {
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
b.lV = b.lV$ = function (lV, y) {
	var b = this
	var v = this.GetLinearVelocity()
	if (U(lV)) {
		return v
	}
	if (N(y)) {
		lV = V(lV, y)
	}
	else if (N(lV)) {
		lV = V(lV, v.y)
	}
	else if (g.m) {
		return this.lV(R() ? 1 : -1, R() ? 1 : -1)
	}
	this.SetLinearVelocity(lV)
	return this.wakeUp()
	function alt() {
		b.lV = function () {
			var b = this, g = G(arguments),
					v = b.GetLinearVelocity(), o, lV
			// can pass in V | x,y
			// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
			//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
			if (g.u) {
				return v
			}
			lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
			b.SetLinearVelocity(lV)
			return b.wakeUp()
		}
		b.lV = function (vel, n2) {
			if (U(vel)) {
				return this.GetLinearVelocity()
			}
			if (N(vel)) {
				vel = V(vel, n2)
			}
			this.SetLinearVelocity(vel)
			return this
		}
	}
}

b.F = function () {
	function alt() {
		b.F = b.constF = function (v, c, c2) {//b.applyForce = b.aF  =
			var b = this, g = G(arguments), v = g[0], c = g[1], c2 = g[2]
			if (N(c)) {
				return b.F(V(v, c), c2)
			}
			if (U(c)) {
				c = b.worldCenter()
			} // gotta adjust this
			b.ApplyForce(v, c)
			if (g.p) {
				cjs.tick(function () {
					b.ApplyForce(v, c)
				})
			}
			return b
		}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
	}
	
	//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
			: {f: V(g[0]), wP: g[1]}
	o.wP = o.wP || b.wC()
	b.ApplyForce(o.f, o.wP)
	if (g.p) {
		cjs.t(function () {
			b.ApplyForce(o.f, o.wP)
		})
	}
	return b
}
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}
b.lVL = function (x, y) {
	var b = this
	b.GLVFLP = function (v) {
		return this.GetLinearVelocityFromLocalPoint(v)
	}
	return this.GLVFLP(V(x, y, '-'))
}
b.lVW = function (x, y) {
	var b = this
	b.GLVFWP = function (v) {
		return this.GetLinearVelocityFromWorldPoint(v)
	}
	return this.GLVFWP(V(x, y, '-'))
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
w.GBL = w.bLX = function () {
	return this.GetBodyList()
}
w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
w.each = w.eachBody = function (l, uD) {//=w.e=w.eB
	//can pass a cb to be run on EACH body
	//can also pass a uD to restrict cb to
	//run only on bodies with that uD
	var w = this,
			bs = w.GetBodyList(), k, b
	if (S(l)) {
		k = l;
		l = uD
	} else {
		k = uD
	}
	while (bs) {
		b = bs
		bs = bs.next()
		if (b.has(k)) {
			l(b)
		}
	}
	return w
}
w.eachD = w.eachDyn = function (l) {
	var w = this;
	w.each(function (b) {
		if (b.isDyn()) {
			l(b)
		}
	})
	return w
}
w.e$ = w.b$ = function (fn) {
	var w = this
	w.eB(function (b) {
		b.$(fn)
	})
	return w
}// = w.eachClick = w.bodyClick 
w.eD = w.eDB = w.eDyn = function (fn) {
	return this.eB(function (b) {
		if (b.iD()) {
			fn(b)
		}
	})
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	$t(function () {
		w.bds(fn)
	})
	return w
}
w.bds = w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.e = w.eB = function () {
	var w = this, g = G(arguments), o, b
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	b = w.B()
	while (b) {
		b.kFn = function (k, fn) {
			var b = this, g = G(arguments), o
			o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
			if (b.of(o.k) && F(o.fn)) {
				o.fn(b)
			}
			return b
		}
		b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
	}
	return w
}
w.each = function (func, userData) {
	var bodies = this.GetBodyList(), kind, body
	if (S(func)) {
		kind = func;
		func = userData
	} else {
		kind = userData
	}
	while (bodies) {
		body = bodies
		bodies = bodies.next()
		if (!kind || body.is(kind)) {
			func(body)
		}
	}
	return this
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	z(function () {
		w.e(fn)
	})
	return w
}
w.inEv = function (n1, n2, fn) {
	_.in(n1, function () {
		_.ev(n2, function () {
			fn()
		})
	})
}
w.evIn = function (n1, n2, fn) {
	_.ev(n1, function () {
		_.in(n2, function () {
			fn()
		})
	})
}
w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.bL = function () {
	return this.GetBodyList()
}    //can be result of w.b if g.u//= w.getBodyList
BODYAT = function () {
	w = b2d.W({g: 0})
	b = w.S(470, 270, 'y', 100)
	b1 = w.S(500, 300, 'r', 100)
	b2 = w.S(530, 330, 'o', 100)
	w.qXY(500, 300,
			function (f) {
				f.C('w')
				return true
			})
}
CLICKKILL = function () {
	box(function () {
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex ' + mouse.x)
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		return false
	})
}
b.lC = function () {
	var b = this, w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetLocalCenter().m()
}
b.lVL = b.linVelLoc = function (v, y) {
//lin vel from local point ... use case?
	v = V(v, y)
	return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
}
b.vX = function (x) {
	var b = this, g = G(arguments),
			v = b.lV()
	if (g.u) {
		return v.x
	}
	b.lV(x, v.y)
	return b
	function alt() {
		b.vX = function (x) {
			if (U(x)) {
				return this.lV().x
			}
			return this.lV(x, this.lV().y)
		}
	}
}
b.vY = function (y) {
	function alt() {
		b.vY = function (y) {
			if (U(y)) {
				return this.lV().y
			}
			return this.lV(this.lV().x, y)
		}
	}
	
	var b = this
	if (U(y)) {
		return b.lV().y
	}
	return b.lV(b.lV().x, y)
}
b.lVW = b.linVelWor = function (v, y) {//lin vel from world point
	v = V(v, y)
	return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
}
b.GLV = function () {
	return this.GetLinearVelocity()
}
b.GAV = function () {
	return this.GetAngularVelocity()
}
b.SLV = function (lV) {
	this.SetLinearVelocity(lV);
	return this
}
b.SAV = function (aV) {
	this.SetAngularVelocity(aV)
	return this
}
w.GG = function () {
	return this.GetGravity()
}
w.SG = function (gv) {
	this.SetGravity(gv);
	return this
}
w.gv = w.G = function (x, y) {
	var w = this, v, gv
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var v, currGrav = this.GetGravity()
			if (U(x)) {
				return currGrav
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			if (x == 'flip') {
				v = V(-currGrav.x, -currGrav.y)
			}
			w.SetGravity(v)
			return this
		}
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
}
w.polS = function () {
	alert('you found w.polS');
	var w = this, g = G(arguments), b, o
	if (g.jA) {
		return w.pol.apply(w, g.f)
	}
	if (O(g[0]) && O(g[1])) {
		g.e(function (g) {
			w.pol(g).stat()
		});
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.CF = function () {
	this.ClearForces();
	return this
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.loop = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
LOOPTICKER = BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
function walls() {
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht)
				.stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
	w.flat = function () {
		var w = this, b
		return b
	}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
	w.tall = function Side(x) {
		var ht = w.can.height
		return this.wall(x, ht / 2, 40, ht)
	}
	w.long = function Flat(y) {
		var wd = w.can.width
		return this.wall(wd / 2, y, wd, 40)
	}
	w.walls = function (wa) {
		var w = this;
		if (wa === 0) {
			return w
		}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
		w.left = w.tall(0)
		w.right = w.tall(w.can.width)
		w.roof = w.long(0)
		w.floor = w.long(w.can.height)
		return w
	}
	//
	w.vW = function (col, H, x, y) {
		var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
		if (!S(col)) {
			y = x;
			x = H;
			H = col;
			col = 'x'
		}
		H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
		if (U(x)) {
			x = cW / 2;
			y = cH / 2 - H / 2
		}
		else if (U(y)) {
			x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
			y = cH / 2 - H / 2
		}
		//x-=10?
		return w.R(col, 20, H, x, y).bo(.2).K('wall')
	}
	w.walls = function (o) {
		var w = this,
				can = w.canvas,
				W = can.width,
				H = can.height,
				wa = o.w,
				col, h
		if (wa == 0) {
			return w
		}
		if (F(wa)) {
			wa()
		}
		else if (A(wa)) {
			col = wa[0]
			W = wa[1]
			h = wa[2]
			if (!S(col)) {
				h = W;
				W = col;
				col = 'o'
			}
			W = N(W) ? W : w.W()
			h = N(h) ? h : w.H()
			w.floor = w.R(col, W, 20, 0, h - 20)
			w.right = w.R(col, 20, h, W - 20, 0)
			w.roof = w.R(col, W, 20, 0, 0)
			w.left = w.R(col, 20, h, 0, 0)
		}
		else if (wa == '_') {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'L') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'U') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
		}
		w.$$(function () {
			w.S(w.mx, w.my, 'x', [[10, 10, '-']])
		})
		return w
	}
}
//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	var w = this
	var b = w.brick(x, y, wd, ht)
			.stat().fr(0).K('wall')
	return b
}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}
w.yShip = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-halfSide, halfSide], [0, -side * 2], [halfSide, halfSide]])
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		n = N(n) ? n : 1
		this.I(this.dir().mult(n * 0.1))
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(),
				x = lv.x,
				y = lv.y,
				a = this.angVel(),
				abs = Math.abs
		return (abs(x) > 0.5) || (abs(y) > 0.5) || (abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(
				y.X() + dist.x,
				y.Y() + dist.y,
				6,
				'w'
		).K(kind).addClass('bul bullet')
		bullet.I(y.GetWorldVector(V(0, -100)).div(4))
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship.den(.5).K('ship')
}
w.yShipEquilateral = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.dir()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.linVel(), x = lv.x, y = lv.y, a = this.angVel()
		return (Math.abs(x) > 0.5) || (Math.abs(y) > 0.5) || ( Math.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').addClass(kind).K(kind)
		bullet.addClass('bullet bul')
		vec = y.GetWorldVector(V(0, -100))
		bullet.impulse(vec.x / 4, vec.y / 4)
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship
}
w.left = w.horiz = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.X(num, '-')
	})
}
w.up = w.vert = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.Y(num, '-')
	})
}