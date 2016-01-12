// is body.Isactive??
v.tA = function () {
	return [this.x, this.y]
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}
b2d.AB = function (x1, y1, x2, y2) {
	var ab = new b2d.Collision.b2AABB()
	ab.lowerBound.Set(x1 / 30, y1 / 30)
	ab.upperBound.Set(x2 / 30, y2 / 30)
	return ab
	function alt() {
		b2d.AABB = function (a, b, c, d) {//this is the one that works!
			var aabb = new b2AABB()
			aabb.lowerBound.Set(a, b)
			aabb.upperBound.Set(c, d)
			return aabb
		}
	}
}
$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2d.AABB() // ??
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
	function alt() {
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		AABB = AB = function (a, b, c, d) {
			var ab = new b2AABB()
			ab.lowerBound.Set(a, b)
			ab.upperBound.Set(c, d)
			return ab
		}//b2d.AB =
	}//get rectangle by two coords
}
AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
	return $aB(a - .001, b - .001, a + .001, b + .001)
	function alt() {
		AB001 = function (a, b) {
			return AB(a - .001, b - .001, a + .001, b + .001)
		}
	}
}
b2d.AABB01 = function (x, y) {//now used div
	var v = V(x, y).div(),
			x = v.x,
			y = v.y
	return this.AABB(x - .001, y - .001, x + .001, y + .001)
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
b2d.M.b2Transform.prototype.toArr = function () {
	var tf = this
	var pos = tf.position,
			R = tf.R,
			col1 = R.col1,
			col2 = R.col2
	return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
TREC = function () {
	W()
	b = w.CreateBody($bD(300, 400))
	//b.rec('r', 100,400, 400,200,33)
	b.f(30, 40, 20)
	b.f(30, 40) //nothing??
	// b.f([[20, 165, -50, -50, 45]])
	//b.f(20, 165, -50, -50, 45)
	w.D(300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
}
function debug() {
	w.DDD = function () {
		this.DrawDebugData();
		return this
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
	function bug() {
		debugDraw = new b2DebugDraw();
		debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
		debugDraw.SetDrawScale(20.0);
		debugDraw.SetFillAlpha(0.5);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
		w.SetDebugDraw(debugDraw);
	}
	
	w.bug = function (id) {
		var can, ctx
		can = id ? $("#" + id)[0] : $0("#canvas")
		ctx = can.getContext("2d")
		return this.SDD(
				$dD().ctx(ctx).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
	}
	function moreBug() {
		w.dD = w.dbD = w.bug = function () {
			var dbD = $dD.apply($dD, arguments)
			// this.scale = dd.scale()
			return this.SDD(dbD)
		}
		w.sDD = w.db = w.debug = function (d) {
			var w = this;
			return U(d) ? w.ggAuCl() :
					d === w ? w.auCl(0) :
							d === false ? w.auCl(1) :
									w.SDD(d)
//p.debugDraw  =p.dD= p.sDD=
		}
		w.dd = function (o) {
			var w = this
			if (o.clear !== false) {
				w.debug(b2d.debugDraw(
						w.context, 30).flags(shB || jB).alpha(.6).line(3000))
			} // w.bug(w.ctx, 30, '*', .6 )
			return w
		}
		w.db = w.debug = function (data) {
			
			//p.debugDraw  =p.dD= p.sDD=
			if (U(data)) {
				this.s.autoClear = this.s.autoClear ? false : true;
				return this
			}
			if (data === true) {
				this.s.autoClear = false;
				return this
			}
			if (data === false) {
				this.s.autoClear = true;
				return this
			}
			this.SDD(data)
			return this
		}
	}
	
	bx.DD = b2DebugDraw = bx.D.b2DebugDraw
	bx.DD.hBit = b2d.DD.e_shapeBit
	dD.SS = dD.ctx = function (ctx) {
		var dD = this  //it is looking for  a context?
		if (U(ctx)) {
			return dD.GetSprite()
		}
		dD.SetSprite(ctx)
		return dD
		//dD.cx = dD.spr = dD.i = dD.sprite = 
	}
	dD.SDS = function (sc) {
		this.SetDrawScale(sc)
		return this
	}
	dD.sc = function (sc) {
		var dD = this
		if (U(sc)) {
			return dD.GetDrawScale()
		}
		dD.SDS(sc)
		return dD
		// = dD.dS = dD.scale = dD.drawScale
	}
	dD.SA = dD.al = dD.alpha = dD.fA = function (al) {
		var dD = this
		if (U(al)) {
			return this.GetAlpha()
		}
		this.SetAlpha(al)
		return this
//Get/SetAlpha(al:N)    used for lines
	}
	dD.SFA = dD.fA = dD.fAl = function (a) {
		var dD = this
		if (U(a)) {
			return dD.GetFillAlpha()
		}
		dD.SetFillAlpha(a)
		return dD
		//= dD.alpha = dD.fillAlpha
	}
	dD.SLT = dD.lT = function (lt) {
		var dD = this
		if (U(lt)) {
			return dD.GetLineThickness()
		}
		dD.SetLineThickness(lt);
		return dD
		// = dD.line
	}
	dD.SF = dD.fl = function (fl) {
		var dD = this
		var DD = b2DebugDraw
		if (U(fl)) {
			return dD.GetFlags()
		}
		if (flags == '*') {
			flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
		}
		dD.SetFlags(flags);
		return dD
		//dD.flags = dD.F =
	}
	dD.SF = function () {
		this.SetFlags.apply(this, arguments)
		return this
	}
	dD.cv = function (cv) {
		cv = cv || $.c()
		return this.ctx($(cv)[0].getContext("2d"))
	}
	$dD = function (sp, sc) {

// = b2d.debugDraw
		//=DebugDraw=dbD
		var dD = new b2d.DD()
		if (sp) {
			dD.sp(sp);
		}
		if (N(sc)) {
			dD.sc(sc)
		}
		return dD
	}
	$dDAlt = function () {
		$dD = function () {
			var g = G(arguments), o, dbD = new b2DebugDraw()
			var DD = b2DebugDraw
			//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
			var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
			o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
			if ($.iC(o.cx)) {
				o.cx = $(o.cx).ctx()
			}
			o.sc = N(o.sc, 30)
			o.fl = o.fl || flags
			o.l = N(o.l, 20)
			o.al = N(o.al, .95)
			if (o.cx) {
				dbD.sprite(o.cx)
			}
			if (o.sc) {
				dbD.scale(o.sc)
			}
			dbD.flags(o.fl)
			dbD.alpha(N(o.al, 0.5))
			return _dbD = dbD
			function alt() {
				b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
					var dd = new b2d.DebugDraw()
					//can pass in either canvas or context
					if ($.isCan(sprite)) {
						sprite = sprite.ctx()
					}
					if (sprite) {
						dd.sprite(sprite)
					}
					if (scale) {
						dd.scale(scale)
					}
					if (flags) {
						dd.flags(flags)
					}
					dd.alpha(N(alpha) ? alpha : 0.5)
					// dd.line( N(line)? line :1 )
					// dd.SetLineThickness(1)
					return dd
				}
			}
		}
		$_DD = function () {
			return new b2d.DD
		}
		var g = G(arguments), o, dbD = new b2DebugDraw()
		var DD = b2DebugDraw
		//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
		if ($.iC(o.cx)) {
			o.cx = $(o.cx).ctx()
		}
		o.sc = N(o.sc, 30)
		o.fl = o.fl || flags
		o.l = N(o.l, 20)
		o.al = N(o.al, .95)
		if (o.cx) {
			dbD.sprite(o.cx)
		}
		if (o.sc) {
			dbD.scale(o.sc)
		}
		dbD.flags(o.fl)
		dbD.alpha(N(o.al, 0.5))
		return _dbD = dbD
	}
	$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
	$dD.hBit = $dD.shape = $dD.h = b2d.DD.e_shapeBit //1
	$dD.jBit = $dD.jt = $dD.j = b2d.DD.e_jointBit //2
	$dD.pair = $dD.p = b2d.DD.e_pairBit //8
	$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
	$dD.co = b2d.DD.e_controllerBit //20
	bx.hBit = bx.DD.e_shapeBit
	bx.jBit = bx.DD.e_jointBit
}
debug()
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
function edges() {
	b2d.edge = function (x1, y1, x2, y2) {
		var fd = b2d.poly()
		fd.shape.SetAsEdge(V(x1, y1).div(), V(x2, y2).div())
		return fd
	}// https://developer.chrome.com/devtools/docs/workspaces !!!!!
}
function more() {
	//edge shape:
	pH.SAE = function (v1, v2) {
		this.SetAsEdge(v1, v2)
		return this
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
}
function edgePairs() {//b2ControllerEdge "A controller edge is used to connect bodies and controllers together in a bipartite graph.";
	b2d.CE = b2d.CoE = b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
// In graph theory, 
// a bipartite graph (or bigraph)
// is a SIMPLE graph 
// whose vertices can be divided 
// into two disjoint sets  (X,Y)  ~ G = (X,Y, E)
// and
// (that is, and are each independent sets)
// such that
// every edge connects a vertex in to one in .
// ( every edge is between a vertex in X and a vertex in Y
// Vertex set and are often denoted as partite sets.
	cE = b2d.CE.prototype
	cE.co = cE.Co = cE.C = function () {
		return this.controller
	}
	cE.pC = function () {
		return this.prevController
	}
	cE.nC = function () {
		return this.nextController
	}
	cE.pB = function () {
		return this.prevBody
	}
	cE.nB = function () {
		return this.nextBody
	}
	cE.b = cE.B = function () {
		return this.body
	}
}
b.H = b.h = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (g.u) {
		return b.f() && b.f().H() // return b
	}
	//passing a single array, suggest MULTIPLE fixts
	//[f1,f2,..]
	if (A(g[0]) && U(g[1])) {
		_.each(g[0], function (a) {
			b.H.apply(b, a)
		})
	}
	
	
	//[col,[f1,f2,..]]
	else if (S(g[0]) && A(g[1]) && U(g[2])) {
		_.each(g[1], function (f) {
			if (b2d.isFixtDef(f)) {
				b.fixt(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f = _.map(f, function (a) {
						return a
					})
					//*** ?
					f.unshift(g[0])
				}
				if (b2d.isFixtDef(f[1])) {
					b.fixt(f[1]).C(f[0])
				}
				else {
					b.H.apply(b, f)
				}
			}
		})
	}
	//fixtDef
	else if (b2d.isFixtDef(g[0])) {
		b.fixt(g[0])
	}
	//['color', fixtDef]
	else if (S(g[0]) && b2d.isFixtDef(g[1])) {
		b.fixt(g[1]).C(g[0])
	}
	
	//verts
	else if (O(g[1])) {
		if (g.n) {
			g.push('-')
		}
		b.conc(g)
		//b.convex(g)
	}
	
	//circ
	else if (len == 1 || len == 3) {
		if (g.n) {
			g.push('-')
		}
		b.CIRC.apply(b, g)
	}
	
	//rect
	else {
		if (g.n) {
			g.push('-')
		}
		b.RECT.apply(b, g)
	}
	function length(arr) {
		var len = arr.length
		if (S(arr[0])) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b._colorize = function (c) {
	if (c) {
		this.C(c === '*' ? $r() : c)
	}
	return this
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
}
CRAZY = function () {
	W({g: 0}).randRects();
	b = w.D(300, 400, 'r', 200, 200).cn('thrust')
	w.b(function (cx) {
		w.dot($r(), cx.p())
		lP = b.lP(cx.p())
		b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
	})
}
bH.rad = function (r) {
	var bH = this;
	bH.GR = function () {
		return this.GetRadius()
	}
	bH.SR = function (rad) {
		this.SetRadius(rad);
		return this
	}
	bH.sRad = function (r) {
		var bH = this
		if (bH.ty() == 'c') {
			return bH.SR(r / 30)
		}
		bH.m_radius = r / 30
		return bH
	}
	bH.gRad = function () {
		var bH = this
		return bH.ty() == 'c' ? bH.GR() * 30 :
		bH.m_radius * 30
	}
	return U(r) ? bH.gRad() : bH.sRad(r)
}
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0), N(v.y, 0)
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
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
	return b2d.bodyDef(x, y).T(1)
}
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
$kB = $bD1 = function (x, y) {
	return $bD(x, y).ty(1)
}