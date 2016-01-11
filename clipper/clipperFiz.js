pD.maybeTl = function (xy) {
	return xy ? this.tl(xy) : this
	//= pD.maybeHere	
}
//p1 = $pD(vs1);
//p2 = $pD(vs2)
pD.tl = function (x, y) {
	var pts = this.pts()
	return $gP(b2d.add(pts, V(x, y)))
	function docs() {
		//=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
		function possibleAlt() {
			pD.ger = function (x, y) {
				var pD = this
				var v = V(x, y);
				pD = pD.reg(-v.x, -v.y)
				return pD
			}
		}
	}
}
pD.tlNeg = function (x, y) {
	// = pD.reg
	var pts = this.pts()
	return $gP(b2d.sub(pts, V(x, y)))
// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
}
// dif
f.sub = f.DIF = f.DIFF = function (b2) {
	var f = this, g = G(arguments), b2 = g[0]
	f.body().conc(f.minus(b2))
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
}
f.minus = f.diff = function (bOrF) {
	var f = this, b = f.body(), verts, poly
	//can handle a fixt OR a body! or even a gPoly itself!
	poly = f.polyVerts().difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	_.each(_.rest(arguments), function (bOrF) {
		poly = poly.difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	})
	if (b2d.hasVerts(poly)) {
		return b.rel(poly)
	}
}
/// uni
f.union = function (f2) {
	var f = this,
			b = f.body(), p //can handle a fixt OR a body!
	if (A(f2)) {
		return this.union.apply(this, f2)
	}
	p = f.polyVerts().union(
			f2.polyVerts()
	)
	_.each(_.rest(arguments), function (f) {
		p = p.union(f.polyVerts())
	})
	return b.rel(p)
}
FVS = function () {
	W()
	b = w.D(300, 300, 'r', [[80, 40, 0, 0, 3]])
	f = b.f()
	//f1 = b.cir(20)
	f.vs()
}
b.polyClone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		b.poly.apply(b, _.map(f.verts(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b
}
b.clone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		var h, x, y, r
		if (f.isCirc()) {
			h = f.shape()
			x = h.m_p.x * 30
			y = h.m_p.y * 30
			r = h.m_radius * 30
			b.circ(r, x, y)
		}
		else {
			b.poly(f.verts())
		}
	})
	return b
}
b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
	$l('b.reg')
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v);
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.glu = function (a, b) {
	return a.glu(b)
}
function boxUni() {
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		return $uni(this, b1).vs(this, '-')
	}
	w.polU = function (x, y, p1, p2) {
		return this.pol(x, y, M.p(p1).U(p2))
	}
	w.polS = function () {
		alert('you found w.polS');
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
	b2d.glu = function (a, b) {
		return a.glu(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g[0]) && !F(g[0])) {
			return b.f().uni(b2d.tF(g[0]))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.jA) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		var b = this
		return UNI(b, b1).vs(b, '-')
	}
	b.sum = function (b1) {
		return $UNI(this, b1).vs(this, '-')
	}
	b.U = function () {
		var b = this, g = G(arguments)
		var pD = b.pD()
		g.e(function (arg) {
			pD = pD.U(arg)
		})
		return pD.tlNeg(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments)
		var fs = b.fs()
		if (g.u) {
			return !g.n ? $UNI(fs).tlNeg(b) :
					$UNI(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	w.polU = function (x, y, p1, p2) {
		var w = this, p
		p = w.pol(x, y, M.p(p1).U(p2))
		return p
	}
	w.polU = function (x, y, p1, p2) {
		//alert('w.polU')
		return this.pol(x, y, M.p(p1).U(p2))
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.tlNeg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
}
b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	var b = this, w = b.W(), g = G(arguments)
	return w.pol(x, y, b)
}
b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	return this.W().pol(x, y, this)
}
f.cloneTo = function (b) {

// *makes pol
// * gets the verts from its shape..  conver it to an array of arrs,
// and it will polif the specified body with that vsA
// (lets you 'stamp' in a specified body)
	var f = this
	if (f.isCir()) {
		var h = f.H()
		var x = h.m_p.x * 30
		var y = h.m_p.y * 30
		b.cir(h.rad(), x, y, $r())
	}
	else {
		b.pol({c: $r(), v: f.vs()})
		// alt??! b.pol( f.vsA() )
		// maybe both work???
	}
	return f
}
b.clone = function (x, y, rt) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	rt = N(rt, b.rt())
	var ty = b.ty()
	//make a new body at the right 'transform' (copying this body)
	var b1 = w.D(x, y).ty(ty).rt(rt)
	//then.. for each of this body's fixtures....
	// stamp it 'on' that damn body
	// when u are done.. it will be just like you !!!
	return b.cloneTo(b1)
} //= b.cloneNew = b.pClone = b.polyClone
CLO = function () {
	W([400, 400]).G(100)
	b = w.D(200, 200, 'r', 30, 30)
	b.clone(300, 300).C('g')
}
b.cloneTo = function (b1) {

// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
	this.fs(function (f) {
		f.cloneTo(b1)
	})
	return b1
}
function copy() {
	b.copy = function (x, y) {
		var b = this, w = b.W()
		return w.pol(x, y, b)
	}
	COP = function () {
		W([400, 400]).G(100)
		b = w.D(200, 200, 'r', 30, 30)
		b.copy(300, 300).C('g')
	}
}
b.subF = function (f1, x, y) {
	var b = this
	var v = V(x, y)
	b.fs(function (f) {
		f.sub($pol(f1, v))
	})
	return b
}
b.subB = function (b1) {
	return this.fs(function (f) {
		b1.sub(f)
	})
}
b.sub1 = function (pD) {
	var b = this, g = G(arguments)
	if (b2d.iF(pD)) {
		b.subF(pD)
	}
	else if (b2d.iB(pD)) {
		b.subB(pD)
	}
	if (g.n) {
		pD.kill()
	}
	return b
}
b.sub = function () {
	var b = this, g = G(arguments)
	g.e(function (pD) {
		b.sub1(pD, g.o)
	})
	if (g.f !== 0) {
		//	b.C(g.f || b.c())
	}
	return b
}
b.sub = function () {
	var b = this, gg = G(arguments), c = b.c()
	gg.e(function (g) {
		if (b2d.iF(g)) {
			b.fs(function (f) {
				f.sub(g)
			})
			if (gg.n) {
				g.kill()
			}
		}
		else if (b2d.iB(g)) {
			g.fs(function (f) {
				b.sub(f)
			})
			if (gg.n) {
				g.kill()
			}
		}
	})
	b.C(b.c())
	return b
}
b.dif = b.without = function (o) {
	var b = this, g = G(arguments)
	var f = b.f(), fs = b.fs()
	if (b.count() == 1) {
		return b.f().dif(o, '-')
	}
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return $DIF(b, o).tlNeg(b)
}
b.dff = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
b.DIF = function (b2) {
	var g = G(arguments),
			b2 = g[0]
	this.eachFixt(function (f) {
		f.DIFF(b2)
	})
	if (g.n) {
		b2.kill()
	}
	return this
}
b.union = function () {
	var num = this.num(),
			fs = this.fixts()
	if (num == 0) {
		return
	}
	if (num == 1) {
		return fs[0].polyVerts()
	}
	return fs[0].union(_.rest(fs))
}
b.minus = function (fOrB) {
	return this.rel(
			this.polyVerts().difference(fOrB.polyVerts())
	)
}
b.subtract = function (a) {
	var g = G(arguments), a = g[0]
	_.each(this.fixts(),
			function (f) {
				f.sub(a)
			})
	if (g.n) {
		a.kill()
	}
	return this
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.map(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
}
b.gPolWithout = b.gPolWo = function (pD) {
	this.fs(function (f) {
		pD = pD.D(f)
	})
	return pD
	function doc() {
		// =b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
}
b.without = b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = $dif(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
b.scrapeWith = b.subFrom = function (fromWhat) {
	var b = this
	b.fs(function (f) {
		fromWhat.sub(f)
	})
	return b
}
b.scrapeWithFxt = b.subFxt = b.subF = b._sub = function (f) {
	var b = this
	b.fs(function (fxt) {
		fxt.sub(f)
	})
	return b
}
b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}
b.scrape = b.sub = function () {

/// hhi im here ///////////////////////////////////////////////////////
	var b = this, g = G(arguments), col = g.f
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) : b2d.iB(ob) ? b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = DIF(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments), p
//f.dif does the math and returns the answer (vs)
	p = M.p(f)
	g.e(function (g) {
		if (b2d.iB(g)) {
			g.fs(function (f) {
				p = p.D(f)
			})
		}
		else {
			p = p.D(g)
		}
	})
	if (!b2d.hV(p)) {
		$l('!hV(p)')
		return
	}
	p = p.reg(f)
	if (g.n) {
		p = p.reg(f.B())
	}
	return p
}
f.sub = function () {
	var f = this, b = f.B(), g = G(arguments),
			p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
	p = f.dif(g[0], '-') //vs is f minus something
	if (p && !M.p(p).hH()) {
		f.kill() //then f goes away
		if (M.p(p).getArea() < 2000) {
			return
		}
		b.pol(p)//the body makes a new f, from the the vs
	}
	if (g.n) {
		g[0].kill()
	}
	if (g.p) {
		g[0].dyn()
	} //can optionally delete the 'something'
	return f
}
f.dif = function () {
	var f = this, g = G(arguments)
	var pD = f.tGP()
	g.e(function (v) {
		pD = pD.D(v)
	})
	pD = pD.tlNeg(f.B())
	if (g.n) {
		f.kill()
	}
	return pD.ifHasPol()
	function docs() {
		//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	}
}
f.sub = function (f1) {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.dif(f1, '-')   //   kill THIS f
	if (g.n) {
		f1.kill()
	}
	if (g.p) {
		f1.dyn()
	}
	if (pD.bigEnough() || g.m) {
		b.pol(pD)
	}
	return f
}
f.scrapeBodWith = f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.GP()
	g.e(function (ob) {
		pD = bx.iB(ob) ? ob.gPolWithout(pD) :
				pD.D(ob)
	})
	if (!pD.hasAtLeastOnePoly()) {
		alert('f.dif (scrape.js?)')
	}
	var toBeRegged = g.n ? b : f
	return pD.reg(f).reg(toBeRegged)
	if (g.n) {
		_.in(function () {
			f.kill()
		})
	}
	function doc() {
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
}
f.difKill = function (difWhat) {
	var f = this, g = G(arguments)
	var difdFxt = f.dif(difWhat) //vs is f minus something
	_.in(function () {
		f.kill()
		//then f goes away
	})
	return difdFxt
}
f.scrapeWith = f.sub = function () {
	var f = this, b = f.B(), g = G(arguments)
	var difdFxt = f.difKill(g.f)
	
	function bigEnough(f) {
		//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		return M.p(f).getArea() > 2000
	}
	
	if (!bigEnough(difdFxt)) {
		return
	}
	b.pol(difdFxt)
	if (g.n) {
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
		what.kill()
	}
	if (g.p) {//and  aparently we can also optionally dynamize it!
		what.dyn()
	}
	return f
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt
}
f.scrapeBodWith = f.subFromBod = function (b) {
	b.fs(function (f) {
		f.sub(b)
	})
}
w.dynamicPolyBody = w.polD = function (x, y, p1, p2) {
	var w = this
	return w.pol(x, y, M.p(p1).D(p2))
}
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	return ter
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
function fromBefore() {
	$DIF = function () {
		var g = G(arguments)
		if (g.A) {
			return g.ap($DIF)
		}
		var p = M.p(g.f)
		g.eR(function (pol) {
			p = p.D(M.p(pol))
		})
		return p
	}
	f.DIFFold = function (b2) {
		var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
		// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
		diff = f.minus(b2)
		//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
		// b.conc(   b.rel(diff) )
		b.conc(diff)
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	b.DIFF = function (b2) {
		var g = G(arguments),
				b2 = g[0],
				b = this, f = b.fixt(),
				dffV = b.dff(b2).verts()
		b2d.conc(b,
				_.map(dffV, function (v) {
					return V(v[0] - b.X(), v[1] - b.Y())
				}))
		f.kill()
		b.rot(0)
		if (g.n) {
			b2.kill()
		}
		return this
	}
	b.sub = function (a) {
		var p = this.minus(a)
		this.clear()
		this.conc(p)
	}
}
bH.vs = function () {
	return this.m_vertices
}
pH.vs = pH.verts = function () {
	var verts = this.m_vertices
	return _.m(verts, function (v) {
		return [v.x * 30, v.y * 30]
	})
	function alt() {
		pH.vs = pH.vertsx = function () {
			alert('pH.vs. see boxShapes.js')
			var pH = this
			return _.m(pH.m_vertices, function (v) {
				return [v.x * 30, v.y * 30]
			})
		}
	}
}
pH.vec = pH.setAsVec = function (v, sc) {
	var pH = this //used by SepLib
	pH.SetAsVector(_.m(v, function (v) {
		return V(v).d(N(sc, 30))
	}))
	return pH
	function alt() {
		pH.setAsVec = function (vec, scale) {
			scale = N(scale) ? scale : 30
			vec = _.map(vec, function (v) {
				return V(v).div(scale)
			})
			this.SetAsVector(vec)
			return this
		}
	}
}
f.wV = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs
	vs = g.n ? f.vs() : f.vs('+')
	return b2d.tA(_.m(vs, function (v) {
		return V(v).add(b)
	}))
}
bx.pts = function () {
	var g = G(arguments)
	var pts = g.s ? g : g.f
	return _.m(pts, bx.div)
	function docs() {
		//= b2d.verts
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		//can pass in: (1) verts ([],[],[]) OR (2) an array [[],[],[]]
	}
}
bx.recPts = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH],
		[x + hW, y + hH], [x - hW, y + hH]]
	function docs() {
		// =	b2d.recVerts = b2d.recPoints = b2d.recV
	}
}
f._pts = function () {
	var f = this
	f.__pts = function () {
		return this.H().m_vertices
	}
	return _.m(f.__pts(), b2d.mult)
}
f.locPts = function () {
	var f = this, b = this.B(), g = G(arguments)
	var pts = f._pts()
	return g.p ? _.m(pts, function (v) {
		return v.rt(b.rt())
	}) :
			pts
	function docs() { 	// (optionally rotated locally by body's rotation)
	}
}
f.pts = function () {
	var f = this, b = f.B(), g = G(arguments)
	return b2d.tA(_.m(f._pts(), function (v) {
		return g.n ? v : v.rt(b.rt())
	}))
	function docs() {

//=f.vs = f.points = f.verts = f.vertices =
		// 
		/*
		 b2d.tA source :
		 function(vs) {
		 return _.m(vs, function (v) { return [v.x, v.y]  })
		 }
		
		 v.tA:function () { return [v.x, v.y] }
		 */
	}
}
f.ptsA = function () {
	var f = this
	return _.m(f.pts(), function (v) {
		v = V(v)
		return [v.x, v.y]
	})
	function docs() {//=f.vsA
	}
}
f.wPts = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pts = g.p ?  // was g.N
			f.pts('+') : f.pts()
	return _.m(pts, function (v) {
		return v.add(b)
	})
	function docs() {
//give world verts of fixt rotated (or optionally, not rotated for some reason)
	}
}
f.wPtsA = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pts = f.pts()
	var pt = V(b.X(), b.Y())
	pts = b2d.add(pts, pt)
	return b2d.tA(pts)
}
f.wPtsGP = function () {
	return $pD(this.wPts())
}
f.pos = f.cirPos = function () {
	var f = this
	var h = f.H()
	var posPt = h.m_p
	return V(posPt.x, posPt.y).mult()
	function docs() {
		// for circs
	}
}
f.GP = function () {
	var f = this
	var pts = f.wPts()
	return $pD(pts)
}
b.pts = function (fn) {
	var b = this
	var arr = []
	var pD = b.uni()
	if (F(fn)) {
		pD.ePol(fn);
		return b
	}
	return pD.pts()
	function docs() {
		function alt() {
			b.pts = b.ps = function (fn) {
				var b = this, arr = [], p = b.uni()
				if (F(fn)) {
					p.ps(b, fn);
					return b
				}
				p.ps(b, function (v) {
					arr.push(v)
				})
				return arr
			}
		}
	}
}
b.ptsGP = function () {
	var b = this
	var num = this.num()
	if (num == 0) {
		return
	}
	var fs = b.fixts()
	var pg = fs[0]
	if (num == 1) {
		return pg.union(pg)
	}
	_.e(_.r(fs), function (f) {
		f = M.poly(f)
		pg = M.poly(pg.union(f))
	})
	return pg
	function docs() {//		 
		//return this.union()
		//it used to just get from the FIRST fixt,
		//but now it unions them all together :)
		//b.verts = function(){ return this.fixt().verts() }
	}
}
b.wPtsGP = function () {
	var b = this, g = G(arguments)
	return b.pD().pts()
}
b.wPts = function () {
	var p = this.transform().position.mult()
	return _.m(this.pts(), function (pt) {
		return pt.add(p)
	})
}
b.rtWPts = function () {
	var b = this
	return _.m(b.rtPts(), function (v) {
		return V(v.x + b.X(), v.y + b.Y())
	})
}
b.rtPts = function () {
	var b = this
	var rt = M.tR(b.rt())
	return _.m(b.pts(), function (v) {
		var v = V(v)
		var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	function docs() {
		
		//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
		function alt() {
			b.rtPts = b.rotVerts = function () {//rotated but local
				newX = function (x, y, rad) {
					rad = Math.toRadians(rad)
					return x * Math.cos(rad) - y * Math.sin(rad)
				}
				newY = function (x, y, rad) {
					rad = Math.toRadians(rad)
					return x * Math.sin(rad) + y * Math.cos(rad)
				}
				f.Vold = function () {//f.rotVerts=
					return this.wPts()
					newX = function (x, y, rot) {
						rot = Math.toRadians(rot)
						x *= Math.cos(rot).toFixed(3)
						y *= Math.sin(rot).toFixed(3)
						return x - y
					}
					newY = function (x, y, rot) {
						rot = Math.toRadians(rot)
						return (x * Math.sin(rot)) + (y * Math.cos(rot))
					}
					var verts = this.verts(), b = this.B()
					return _.map(verts, function (v) {
						var x = v.x, y = v.y
						return V(
								newX(x, y, b.rot()) + b.X(),
								newY(x, y, b.rot()) + b.Y())
					})
				}//this becomes wVerts
				var b = this, pts = b.verts()
				return _.m(pts, function (v) {
					var x = v.x,
							y = v.y
					return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
				})
			}
		}
		
		//this returns [V,V,V...]
	}
}
b.pos = function () {
	return this.tf().position.m()
}
b.pgPts = function () {
	return M.poly(this.V())
	function docs() {
//= b.polyVerts
	}
}
b.reg = b.rel = function (p) {
	var b = this
	var pts = gpc.iP(p) ? p.pts() : p
	return _.m(pts, function (v) {
		v = V(v)
		return V(v.x - b.X(), v.y - b.Y())
	})
	function docs() {
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		//this returns [V,V,V...]
	}
}
b2d.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	if (g.s) {
		return _.m(g, b2d.div)
	}
	//passed in verts ([],[],[])
	return _.m(g.f, b2d.div) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}
}
b2d.divPoints = b2d.divPts = b2d.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
			g.s ? g : //passed in verts ([],[],[])
					g.f,
			b2d.div
	) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}	
}
b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
fD.vrt = fD.verts = function () {
	var h = this.H()
	var verts = h.vs()
	return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
	function alt() {
		fD.vrt = fD.verts = function () {
			var shape = this.shape,
					verts = shape.m_vertices,
					verts = [
						verts[0].mult(),
						verts[1].mult(),
						verts[2].mult(),
						verts[3].mult()]
			return $l(verts)
		}
	}
}