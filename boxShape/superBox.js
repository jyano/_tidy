 
BOX1 = function () {
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
BOX = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500)))
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
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
  