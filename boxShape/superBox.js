 
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0),
			N(v.y, 0)
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).ty(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
$kB = $bD1 = function (x, y) {
	return $bD(x, y).ty(1)
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FD()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	fD.de(1)
	//if (b2d.isShape(shape)) {f.shape = shape}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
	// = b2d.fD = b2d.f
}
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr(g.s ? g : g.f)
}
_$pH = function () {
	return new b2d.PH()
}
$pH = function (W, H, x, y, a) {
	//  OR (wd, ht, xy, ang, ang2)
	var g = G(arguments), o, pH = new b2d.PH()
	if (g.u) {
		return pH
	}
	o = O(g.t) ?
	{w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	{w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	o.w = (o.w || 100) / 60
	o.h = (o.h || o.w) / 60
	o.xy = V(o.xy / 30, o.ang / 30)
	o.rt = M.tR(o.ang2 || 0)
	o = o || {}
	return g.OO_ ? $a(pH, 'sAA', g) :
			g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
					pH.SAOB(o.w, o.h, o.xy, o.rt) :
					pH
	// this is all you need for all cases (thanks to pH.set) 
	// pH.set.apply(pol, g)
}
_$cH = function (r) {
	return new b2d.CH(A(r) ? r[0] : r)
}
$cH = function () {
	
	//r, x, y
	var g = G(arguments)
	var o = {}
	var cH = _$cH(N(g.f, 50) / 30)
	if (g.s) {
		cH.XY(g.s, g.t)
	}
	return cH
	//	if (N(x) && N(y)) {h.XY(x, y)}
	// cH.lP(g.s, g.t)
}
$_rF = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	var f = $fD($pH(wd, ht, xy, ang, ang2))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
_$rF = function () {
	var pH = $pH()
	pH.sAOB.apply(pH, arguments)
	return $fD(pH)
}
$rF1 = function (wd, ht, xy, ang, ang2) {// (wd, ht, x, y, rot) 
	var g = G(arguments), o
	if (O(g.t)) {
		o = {}
	}
	else {
		o = {}
	}
//make a rec (or orientedRec) fixture
	wd = N(g[0]) ? g[0] : 50
	ht = N(g[1]) ? g[1] : 50
	x = N(g[2]) ? g[2] : 0
	y = N(g[3]) ? g[3] : 0
	rot = N(g[4]) ? g[4] : 0
	wd = g.f
	ht = g.s
	xy = g.t
	ang = g.fo
	ang2 = g.fi
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var fD = $fD($pH(wd, ht, xy, ang, ang2))
	var rec = $pH(wd, ht, x, y, rot)
	var fD = $fD(rec)
	if (g.OO_) {
		rec.arr(g)
	}
	//b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		rec.box(o)
	}
	fD = $fD(rec).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
}
$rF = function () {
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pF_ = function (kind) {
	var pF = $pF.apply(null, _.r(arguments))
	pF.sensor(true).K(kind)
	return pF
}
$pF = function (wd, ht, x, y, rt) {
	//makes a fixture using b2d.polyH
	var g = G(arguments)//	return $fD($a($pH, g))
	//SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
	//but can not pass den? who cares!
	//$fD($pH.apply(null, g))
	var f = $fD($pH(wd, ht, x, y, rt))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pFAlt = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	if (A(wd)) {
		return $aF.apply(null, arguments)
	}
	//if(b2d.isShape(wd)){fixt.shape = wd; return shape}
	//you can make a poly
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var f = $fD($pH(wd, ht, xy, ang, ang2)).fr(.2).re(.2)//.de(1)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pSn = $pS = $pSF = function (k) {
	var g = G(arguments)
	var pF = $pF.apply(null, _.r(arguments)).s1()
	pF.K(k || 'polySens')
	return pF
}
$aF = function () {
//but looks like $aF uses $aH to do all the work
	var g = G(arguments)
	return $fD($aH.apply(null, g))
}
$cFAlt = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
$cirFAlt = function (rad, x, y, den) {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
//make a circ fixture
// neg-> sensor
	var g = G(arguments),
			rad = N(g[0]) ? g[0] : 50,
			x = N(g[1]) ? g[1] : 0,
			y = N(g[2]) ? g[2] : 0,
			den = N(den) ? den : 1
	fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
	if (g.n) {
		fixt.isSensor = true
	}
	return fixt
	//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
}
$cF6 = function (rad, x, y) {
	var g = G(arguments), f
	rad = g[0];
	x = g[1];
	y = g[2];
	rad = rad || M.r() + .1
	x = N(x) ? x : 0
	y = N(y) ? y : x
	var cir = $cH(rad)
	cir.lP(V(x, y, '-'))
	f = $fD(cir)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
/*

 SetAsOrientedBox(
 hx:Number,  hy:Number, (width and height of the box)
 center:b2Vec2 = null, (center of box)
 angle:Number = 0.0 (rot in rads)
 )

 Applying this concept, the idol function continues in the following way:
 var bW:Number=5/worldScale;
 var bH:Number=20/worldScale;
 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
 var boxAngle:Number=- Math.PI/4;


 */
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$cH = function (r, x, y) {
	r = N(r) ? r : 50
	var h = new b2d.CircleShape(r / 30)
	if (N(x) && N(y)) {
		h.XY(x, y)
	}
	return h
}
b2d.iH = b2d.isShape = function (h) {
	if (!O(h)) {
		return
	}
	var ty = h.constructor.name
	return ty == "b2PolygonShape" ? 'p' :
			ty == "b2CircleShape" ? 'c' :
					ty == "b2AShape" ? 'a' : false
}
b2d.iPH = b2d.iP = function () {
	return this.iH() == 'p'
}
b2d.iCH = b2d.iC = function () {
	return this.iH() == 'c'
}
b2d.iAH = b2d.iA = function () {
	return this.iH() == 'a'
}
CIR = function () {
	W().ship()
	cH = $cH(34)
	//pass a shapeDef to a fixtDef, and pass the fixtDef to b.f
	w.D(350, 200).f($fD($cH(80), '-'))
	//pass a shapeDef to b.fD 
	w.D(150, 300).fD($cH(30))
	// call b.cF
	w.D(450, 200).cF(80)
	//use w.ball
	w.ball(650, 300, 100).cF(100, 20, 20)
}
$rH = $bH = function (a, b, c, d, e) {
	return $pH().box(a, b, c, d, e)
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
SAB = function () {
	W()
	//pH.sAB handles both box and oriented box!
	tx = function (x, y) {
		var b = w.D(x, y);
		b.f($fD($cH(4)))
		return function () {
			b.fD($pH().box(arguments))
		}
	}
	tx(100, 100)()
	tx(100, 200)(20)// rt
	tx(100, 300)(20, 20) //w, h (as box)
	tx(100, 370)(20, 20, 20) // w,h,r
	tx(100, 420)(20, 20, 20, 20)// w,h,x,y,rt
	tx(100, 500)(20, 20, 20, 20, 20)
	//
	//pH.sAB handles both box and oriented box!
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
RAD = function () {
	W().G(10).roof.kill()
	n = 1
	drp()
	_.ev(1, function () {
		if (n < 300) {
			drp()
		}
	})
	function drp() {
		var b = w.D(350, 200).aV(2).lV(1, 1)
		R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
				b.fD($cH(n *= 1.3))
		$l('n:' + n)
	}
	
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
}
$pH = _$pH = function () {
	var g = G(arguments)
	var p = new b2d.PolygonShape()
	p.sAB.apply(p, arguments)
	return p
}
$aH = function () {
	var g = G(arguments)
	var aH = $pH()
	aH.arr.apply(aH, g)
	return aH
}
SAA = function () {
	W()
	w.D(150, 200).f($fD($aH(
			[-100, 0], [0, -100],
			[100, -20], [50, 20]
	)))
	w.D(240, 300).f(
			$fD($aH(verts))
	)
	w.D(434, 400).f($aF((verts)))
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
TRI = function () {
	W()
	//long way
	w.D(400, 400).f($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.f(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
$eH = function (x1, y1, x2, y2) {
	return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
}
SAE = function () {
	W().p()
	w.eg(100, 500, 1000, 0)
	w.eg(50, 50, 100, 500)
	w.eg(0, 0, 1000, 100)
	w.cirB(410, 100, 2)
	_.in(4, function () {
		w.eg(100, 100, 500, 300)
		w.eg(100, 200, 500, 400)
		w.eg(100, 300, 500, 500)
		w.eg(1000, 100, 600, 300)
		w.eg(1000, 200, 600, 400)
		w.eg(1000, 300, 600, 500)
		w.cirB(410, 100)
	})
}
moreEdge = function () {
	EDE = function () {
		W()
		v1 = V(0, 0)
		v2 = V(40, 0)
		eH = $eH()
		eH.Set(v1, v2)
	}
	GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
		eH = $eH()
		eH.Set(v1 = V(30, 8), v2 = V(0, 0));
		eH.m_hasVertex0 = true;
		eH.m_hasVertex3 = true;
		eH.m_vertex0 = v0 = V(40, 0);
		eH.m_vertex3 = v3 = V(40, 14);
	}
//chain:
	CHAIN = CHA = function () {
		vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
		chain = $chH()
		chain.CreateChain(vs, 4);
	}
	GHOSTVERTS = GHV = function () {
// // Install ghost vertices
		chain = $chH();
		chain.SetPrevVertex(V(90, 30));
		chain.SetNextVertex(V(-60, 0))
	}
	LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
		chain = $chainH();
		chain.CreateLoop(vs, 4);
		// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
		for (i = 0; i < chain.GetChildCount(); ++i) {
			eH = $eH();
			chain.GetChildEdge(eH, i)
		}
	}
}
b2d.polySens = function (kind) {
	return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
}
b2d.fixtParse = function (arr) {

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture
	return _.m(arr, function (fixt) {
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {// weird
			return b2d.polySens.apply(null, fixt)
		}
		var len = fixt.length
		return (len == 1) ? b2d.circ(fixt[0])
				: (len == 2) ? b2d.poly.apply(null, fixt)
				: (len == 3) ? b2d.circ.apply(null, fixt)
				: b2d.poly.apply(null, fixt)
	})
	b2d.fixtParse = function (arr) {
		return _.m(arr, function (fixt) {
			var len
			if (!A(fixt)) {
				return fixt
			}
			if (fixt.isSensor) {
				return b2d.polySens.apply(null, fixt)
				return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
			}
			len = fixt.length
			if (len == 1) {
				return b2d.circ(fixt[0])
			}
			else if (len == 2) {
				return b2d.poly.apply(null, fixt)
			}
			else if (len == 3) {
				return b2d.circ.apply(null, fixt)
			}
			return b2d.poly.apply(null, fixt)
		})
	}
}
b2d.Cxs = b2d.D.Contacts
b2d.Cx = b2d.Cxs.b2Contact
b2d.toBody = function (fixtOrBody) {
	if (b2d.isBody(fixtOrBody)) {
		return fixtOrBody
	}
	if (b2d.isFixt(fixtOrBody)) {
		return fixtOrBody.body()
	}
	return false
}
b2d.bodyX = b2d.bodyDefX = function (x, y) {
	var bodyDef = new b2BodyDef()
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	bodyDef.xy(x, y)
	return bodyDef
}
b2d.tB = b2d.toBody = function (b) {
	return b2d.iB(b) ? b :
			b2d.iF(b) ? b.B() :
					null
	b2d.toBodyAlt = function (fixtOrBody) {
		if (b2d.isBody(fixtOrBody)) {
			return fixtOrBody
		}
		if (b2d.isFixt(fixtOrBody)) {
			return fixtOrBody.body()
		}
		return false
	}
}
b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
	return b2d.bodyDef(x, y).T(1)
}
b2d.fxPar = $$$cirORpoly$$$ = function (fxs, fn) {
	var b = this
	//if its not an array,, assume is fine, and leave it as is
	fxs = _.m(fxs, function (f) {
		return !A(f) ? f :
				f.length == 1 || f.length == 3 ?
						$cF.apply(null, f) :
						$pF.apply(null, f)
	})
	// fn = _.b(fn, b) ?
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	return fxs
	//if (f.isSensor) {return b2d.polySens.apply(null, f)}
}
