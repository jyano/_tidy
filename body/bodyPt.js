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
b.I = function (imp, pt, pt2) {
	/*
	 //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
	 if (g.A) {return b.I.apply(b, g.f)}
	 o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
	 o.i = o.i || b.v().d(40)
	 o.v = o.v || b.wC()
	 b.ApplyImpulse(o.i, o.v.div())
	 */
	var b = this, g = G(arguments), o
	b.imp = function (imp, pt) {
		return this.AI(imp, pt || this.GWC())
	}
	o = O(g.f) ? {imp: g.f, pt: g.s} :
	{imp: V(g.f, g.s), pt: g.t}
	o.imp = o.imp || b.worldVec().d(40)
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
function velocity() {
	b.aV = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
	}
	b.lV2 = b.lV$ = function (lV, y) {
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
		}
	}
	b.lV1 = function () {
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
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.W = b.wor = b.world = function () {
	return this.GetWorld()
}
function _pre() {
	b.rt = function (angle) {
		var g = G(arguments),
				ang = g[0],
				newAng,
				currAng = Math.toDegrees(this.GetAngle())
		if (U(ang)) {
			return currAng
		}
		if (g.p) {
			newAng = currAng + ang
		}
		else if (g.n) {
			newAng = currAng - ang
		}
		else if (g.m) {
			newAng = currAng * ang
		}
		else if (g.d) {
			newAng = currAng / ang
		}
		else {
			newAng = ang
		}
		this.SetAngle(Math.toRadians(newAng))
		return this
	}
	b.XY = function (x, y) {
		var newPos
		if (x === '*') {
			x = Math.random() * 10
		}
		if (y === '*') {
			y = Math.random() * 10
		}
		if (U(x)) {
			var pos = this.GetPosition()
			return pos.mult()
		}
		y = N(y) ? y : x
		newPos = V(x / 30, y / 30)
		this.SetPosition(newPos)
		return this
	}
	b.X = function (x) {
		var g = G(arguments), pos = this.XY()
		if (U(x = g[0])) {
			return pos.x
		}
		this.XY($.update(pos.x, x, g), pos.y)
		return this
	}
	b.Y = function (y) {
		var g = G(arguments), pos = this.XY()
		if (U(y = g[0])) {
			return pos.y
		}
		this.XY(pos.x, $.update(pos.y, y, g))
		return this
	}
	b.rt = b.rot = function (angle, ms) {
		var b = this, g = G(arguments), r = g[0], ms = g[1],
				a = Math.toDegrees(b.GetAngle()) //currAng
		if (U(r)) {
			return a
		}
		if (N(ms)) {
			b.stop = I(function () {
				b.rot(r, '+')
			}, ms)
		}
		else {
			b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
		}
		return b
	}
	b.X = function (x) {
		var g = G(arguments),
				pos = this.XY()
		if (U(x = g.f)) {
			return pos.x
		}
		this.XY(
				_.upd(pos.x, x, g), pos.y
		)
		return this
		function alt() {
			b.X = function (x) {
				var g = G(arguments), pos = this.XY()
				if (U(x = g[0])) {
					return pos.x
				}
				this.XY($.update(pos.x, x, g), pos.y)
				return this
			}
		}
	}
	b.Y = function (y) {
		function alt() {
			b.Y = function (y) {
				var g = G(arguments), pos = this.XY()
				if (U(y = g[0])) {
					return pos.y
				}
				this.XY(pos.x, $.update(pos.y, y, g))
				return this
			}
		}
		
		var b = this,
				g = G(arguments),
				pos = b.XY()
		if (g.u) {
			return pos.y
		}
		this.XY(pos.x,
				_.upd(pos.y, y, g))
		return this
	}
	b.XY = function (x, y) {
		function alt() {
			b.XY = function (x, y) {
				var newPos
				if (x === '*') {
					x = Math.random() * 10
				}
				if (y === '*') {
					y = Math.random() * 10
				}
				if (U(x)) {
					var pos = this.GetPosition()
					return pos.mult()
				} //used to parseInt.. necessary?
				y = N(y) ? y : x
				newPos = V(x / 30, y / 30)
				this.SetPosition(newPos)
				return this
			}
		}
		
		var b = this, g = G(arguments),
				newPos, pos
		if (x === '*') {
			x = R(10)
		}
		if (y === '*') {
			y = R(10)
		}
		if (g.u) {
			pos = b.GetPosition()
			return pos.m().tF(0)
		} //used to parseInt.. necessary?
		if (b2d.iB(x)) {
			y = x.Y()
			x = x.X()
		}
		y = N(y) ? y : x
		newPos = V(x / 30, y / 30)
		this.SetPosition(newPos)
		return this
	}
	b.W = b.GW = function () {
		return this.GetWorld()
	}
	b.N = b.GN = function () {
		return this.GetNext()
	}
	b.GT = function () {
		return this.GetType()
	}
	b.ST = function (ty) {
		this.SetType(ty)
		return this
	}
	b.GP = function () {
		return this.GetPosition()
	}
	b.SP = function (ps) {
		this.SetPosition(ps);
		return this
	}
	b.STf = function (tf) {
		this.SetTransform(tf);
		return this
	}
	b.GTf = function (tf) {
		return this.GetTransform()
	}
	b.SA = function (ang) {
		this.SetAngle(ang);
		return this
	}
	b.GA = function () {
		return this.GetAngle()
	}
	b.SPAA = function () {
		this.SetPositionAndAngle.apply(this, arguments)
		return this
	}
}
//b.CF( fD.cH(45) ) 
b.GM = function () {
	return this.GetMass()
}
//
b.A = function (fD) {
	this.cF(fD);
	return this
}
b.isSen = b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (U(g[0])) {
		return f.m_isSensor
	}
	f.m_isSensor = g[0] ? true : false
	return b
}
b.iK = b.isKin = function () {
	return this.GetType() == 1
}
b.kin = function () {
	return this.type(1)
}
function destroy() {
	b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
		var b = this
		return b.of(k) ? b.K('ds destroy') : b
	}
	b.ds = function () {
		var b = this
		b.W().DB(b)
		return b
	} //= b.destroy
}
function isBull() {
	b.decor = isBullet = function (g) {
		var b = this
		if (g.n) {
			b.mS()
		}
		else if (g.p) {
			b.mBu()
		}
		else if (g.m) {
			b.mS().mBu()
		}
		return b
	}
	b.SB = function (bu) {
		this.SetBullet(bu);
		return this
	}
	b.IB = function () {
		return this.IsBullet()
	}
}
function type() {
	b.ty = b.type = function (a) {
		var b = this
		if (U(a)) {
			return b.GetType()
		}
		b.SetType(a)
		return b
	}
	b.iD = b.isDyn = function () {
		return this.GetType() == 2
	}
	b.dyn = function (resumeVel) {
		var b = this
		b.type(2)
		if (resumeVel == b && O(b._linVel)) {
			b.lV(b._linVel)
		}
		b._linVel = null
		return b
		function alt() {
			b.dyn = function (resumeVel) {
				this.type(2)
				if (resumeVel == true && O(this._linVel)) {
					this.linVel(this._linVel)
				}
				this._linVel = null
				return this
			}
		}
	}
	b.iS = b.isStat = function () {
		return this.GetType() == 0
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
}
b.stat = function () {
	var v = this.lV()
	//huh??? oh can get/set type of body
	this.lV(V(v.x, v.y))
	this.ty(0)
	return this
}
function fxdRot() {
	b.fR = b.sFR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
	b.fR1 = b.fixRot = function () {
		return this.fixedRot(true)
	}
	b.fR0 = b.FR = function () {
		return this.fixedRot(false)
	}
	b.fixedRot = b.sFR = b.fR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
	b.SFR = function (fR) {
		this.SetFixedRotation(fR)
		return this
	}
	b.IFR = function () {
		return this.IsFixedRotation()
	}
}
function sleep() {
	b.SAw = function (sA) {
		this.SetAwake(sA);
		return this
	}//return  _.set(b, 'SetAwake', sA)
	b.IAw = function () {
		return this.IsAwake()
	}
	b.SSA = function (sA) {
		this.SetSleepingAllowed(sA);
		return this
	}
	b.ISA = function () {
		return this.IsSleepingAllowed()
	}
	b.SAc = function (ac) {
		this.SetActive(ac);
		return this
	}
	b.IAc = function () {
		return this.IsActive()
	}
	b.awake = function () {
		var g = G(arguments)
		this.SetAwake(g.n ? false : true)
		return this
	}
	b.aw1 = b.wake = b.wakeUp = function () {
		this.SetAwake(true);
		return this
	}
	b.aw0 = b.sleep = function () {
		this.SetAwake(false);
		return this
	}
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
b.GD = b.GDf = function () {
	return this.GetDefinition()
}
b.GLD = function () {
	return this.GetLinearDamping()
}
b.GAD = function () {
	return this.GetAngularDamping()
}
b.GLV = function () {
	return this.GetLinearVelocity()
}
b.GAV = function () {
	return this.GetAngularVelocity()
}
b.SLD = function (lD) {
	this.SetLinearDamping(lD);
	return this
}
b.SAD = function (aD) {
	this.SetAngularDamping(aD);
	return this
}
b.SLV = function (lV) {
	this.SetLinearVelocity(lV);
	return this
}
b.SAV = function (aV) {
	this.SetAngularVelocity(aV)
	return this
}
b.wC = function () {
	return this.GWC().m()
}
b.GLC = b.GLcC = function () {
	return this.GetLocalCenter()
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.rF = function () {
	// = b.$rF = b.rH
	return this.CF($rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}
///////////////////
b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
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
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = b.pol = function () {
	return this.f($pF.apply(null, arguments))
}
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
sens()
dfr()
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
}
b.DF = b.dsFx = function (fixt) {
	this.DestroyFixture(fixt)
	return this
}
b.empty = b.clear = function () {
	return this.fs(function (f) {
		f.kill()
	})
}
b.rmF = function (f) {
	if (f) {
		this.DF(f)
	}
	else {
		this.fs(function (f) {
			this.rmF(f)
		})
	}
	return this
}
b.polyArr = b.convex = function (col, arr, str) {
	var b = this, w = b.wor(), h, f,
	//when and if should i call .conc/.sep ?
	// i could auto-conc it.. but ill lose track of the fixts?
			g = G(arguments)
	if (g.length > 2) { //passing points direclty: ([],[],[]) or ('r',[],[],[])
		if (S(col)) {
			arr = _.rest(g)
		}
		else {
			col = 'p';
			arr = g
		}
	}
	if (!S(col)) {   // ['c', [[],[]] ]   or [[],[]]
		if (S(col[0])) {
			arr = _.rest(col);
			col = col[0]
		}
		else {
			arr = col;
			col = null
		}
	}
	if (S(_.last(arr))) {
		str = arr.pop()
	}
	f = b.poly.apply(b, arr)
	if (str) {
		f.K(str)
	}
	if (col) {
		f.bindSprite(w.s.poly(arr, col, col))
	}
	return f// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! // can check my current libs first!! :)
}
b.grp = function (i) {
	f = this.fixt()
	if (U(i)) {
		return f.grp()
	}
	f.grp(i);
	$l('set to ' + i)
	return this
}
b.onAddFxt = function () {
	this.rMD()
	return this
}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
b.fD = b.fxD = b.$fD = function (fD) {
//return this.CF( $fD(fD) )
	return this.CF($fD.apply(null, arguments))
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.fs = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
	function alt() {
		b.fixts = b.each = b.eachFixt = function (func) {
			var fl = this.fixt(), arr = [],
					g = G(arguments), func = g[0]
			while (fl) {
				arr.push(fl);
				fl = fl.GetNext()
			}
			//order by biggest
			if (g.p) {
				arr = arr.sort(function (a, b) {
					return b.area() - a.area()
				})
			}
			//order by smallest
			if (g.n) {
				arr = arr.sort(function (a, b) {
					return a.area() - b.area()
				})
			}
			if (F(func)) {
				_.each(arr, func);
				return this
			}
			return arr
		}
	}
	
	// = b.e
}
b.CF = function () {//b.CF = b.CreateFixture
	return this.CreateFixture.apply(this, arguments)
}
b.CF_ = function () {//b.CF = b.CreateFixture
	this.CreateFixture.apply(this, arguments)
	return this
}
b.CF2 = function () {
	return this.CreateFixture2.apply(this, arguments)
}
b.dsF = b.dF = b.DF = b.DFx = function (f) {
	this.DestroyFixture(f);
	return this
}
b.GFL = b.GFxL = function () {
	return this.GetFixtureList()
}
function sens() {
	b.togSen = function () {
		return this.sensor(!this.sensor())
	}
	b.sen = b.iS = function (s) {
		var b = this
		var f = b.f()
		if (U(isSensor)) {
			return f.m_isSensor
		}
		b.fs(function (f) {
			f.sen(s)
		})
		return b
	}
	b.s1 = b.sens = function () {//turns on
		this.f().sensor(true);
		return this
	}
	b.sr1 = b.s1 = b.mS = function () {
		return this.sSr(1)
	}
	b.sSr = function (sr) {
		var b = this
		b.fs(function (f) {
			f.sr(sr)
		})
		return b
	}
	b.sr = b.sens = function (sr) {
		var b = this
		if (U(sr)) {
			return b.f().iSr()
		}
		b.sSr(sr)
		return b
	}
}
function dfr() {
	b.de = function (den) {
		if (U(den)) {
			return this.list().GetDensity()
		}
		this.each(function (f) {
			f.SetDensity(den)
		})
		this.ResetMassData()
		return this
	}
	b.fr = function (fric) {
		if (U(fric)) {
			return this.list().GetFriction()
		}
		this.each(function (f) {
			f.SetFriction(fric)
		})
		return this
	}
	b.re = function (rest) {
		if (U(rest)) {
			return this.list().GetRestitution()
		}
		this.each(function (f) {
			f.SetRestitution(rest)
		})
		return this
	}
	b.DFR = b.DFB = function (d, f, r) {
		return this.den(d).fric(f).rest(r)
	}
	b.DBF = function (d, r, f) {
		var b = this
		b.den(d)
		if (N(r)) {
			this.rest(r)
		}
		if (N(f)) {
			b.fric(f)
		}
		return b
		function alt() {
			b.DBF = function (d, r, f) {
				var b = this
				b.den(d)
				if (N(r)) {
					this.rest(r)
				}
				if (N(f)) {
					b.fric(f)
				}
				return b
			}
		}
	}
	b.fr = b.fric = function (fr) {
		var b = this
		if (U(fr)) {
			return b.f().GetFriction()
		}
		b.fs(function (f) {
			f.SetFriction(fr)
		})
		return b
		function alt() {
			b.fric = function (fric) {
				if (U(fric)) {
					return this.list().GetFriction()
				}
				this.each(function (f) {
					f.SetFriction(fric)
				})
				return this
			}
		}
	}
	b.de = b.d = b.den = function (d) {
		var b = this
		if (U(d)) {
			return b.f().GetDensity()
		}
		b.fs(function (f) {
			f.SetDensity(d)
		})
		b.ResetMassData()
		return b
		function alt() {
			b.den = function (den) {
				if (U(den)) {
					return this.list().GetDensity()
				}
				this.each(function (f) {
					f.SetDensity(den)
				})
				this.ResetMassData()
				return this
			}
		}
	}
	b.re = b.r = b.bo = b.rest = function (r) {
		function alt() {
			b.bo = b.rest = function (rest) {
				if (U(rest)) {
					return this.list().GetRestitution()
				}
				this.each(function (f) {
					f.SetRestitution(rest)
				})
				return this
			}
		}
		
		var b = this
		if (U(r)) {
			return b.f().GetRestitution()
		}
		b.fs(function (f) {
			f.SetRestitution(r)
		})
		return b
	}
	b.de = b.den = function (de) {
		var b = this//$l('b.de boxBody.js')
		if (U(de)) {
			return b.f().de()
		}
		b.e(function (f) {
			f.SetDensity(de)
		})
		return this.RMD()
	}
	b.de1 = function () {
		return this.de(1)
	}
	b.fr = b.fric = function (fr) {
		var b = this
		return D(fr) ?
				b.fs(function (f) {
					f.SetFriction(fr)
				}) :
				b.list().GetFriction()
	}
	b.re = b.rest = function (re) {
		var b = this
		return D(re) ? b.fs(function (f) {
			f.re(re)
		}) :
				b.f() ? b.f().GetRestitution() : false
	}
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b.GW = b.W = b.wor = b.world = function () {
	return this.GetWorld()
}
b.GN = b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.fR = b.sFR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR1 = b.fixRot = function () {
	return this.fixedRot(true)
}
b.fR0 = b.FR = function () {
	return this.fixedRot(false)
}
b.fixedRot = b.sFR = b.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.SFR = function (fR) {
	this.SetFixedRotation(fR)
	return this
}
b.IFR = function () {
	return this.IsFixedRotation()
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.rt = function (angle) {
	var g = G(arguments),
			ang = g[0],
			newAng,
			currAng = Math.toDegrees(this.GetAngle())
	if (U(ang)) {
		return currAng
	}
	if (g.p) {
		newAng = currAng + ang
	}
	else if (g.n) {
		newAng = currAng - ang
	}
	else if (g.m) {
		newAng = currAng * ang
	}
	else if (g.d) {
		newAng = currAng / ang
	}
	else {
		newAng = ang
	}
	this.SetAngle(Math.toRadians(newAng))
	return this
}
b.XY = function (x, y) {
	var newPos
	if (x === '*') {
		x = Math.random() * 10
	}
	if (y === '*') {
		y = Math.random() * 10
	}
	if (U(x)) {
		var pos = this.GetPosition()
		return pos.mult()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.X = function (x) {
	var g = G(arguments), pos = this.XY()
	if (U(x = g[0])) {
		return pos.x
	}
	this.XY($.update(pos.x, x, g), pos.y)
	return this
}
b.Y = function (y) {
	var g = G(arguments), pos = this.XY()
	if (U(y = g[0])) {
		return pos.y
	}
	this.XY(pos.x, $.update(pos.y, y, g))
	return this
}
b.rt = b.rot = function (angle, ms) {
	var b = this, g = G(arguments), r = g[0], ms = g[1],
			a = Math.toDegrees(b.GetAngle()) //currAng
	if (U(r)) {
		return a
	}
	if (N(ms)) {
		b.stop = I(function () {
			b.rot(r, '+')
		}, ms)
	}
	else {
		b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.X = function (x) {
	var g = G(arguments),
			pos = this.XY()
	if (U(x = g.f)) {
		return pos.x
	}
	this.XY(
			_.upd(pos.x, x, g), pos.y
	)
	return this
	function alt() {
		b.X = function (x) {
			var g = G(arguments), pos = this.XY()
			if (U(x = g[0])) {
				return pos.x
			}
			this.XY($.update(pos.x, x, g), pos.y)
			return this
		}
	}
}
b.Y = function (y) {
	function alt() {
		b.Y = function (y) {
			var g = G(arguments), pos = this.XY()
			if (U(y = g[0])) {
				return pos.y
			}
			this.XY(pos.x, $.update(pos.y, y, g))
			return this
		}
	}
	
	var b = this,
			g = G(arguments),
			pos = b.XY()
	if (g.u) {
		return pos.y
	}
	this.XY(pos.x,
			_.upd(pos.y, y, g))
	return this
}
b.XY = function (x, y) {
	function alt() {
		b.XY = function (x, y) {
			var newPos
			if (x === '*') {
				x = Math.random() * 10
			}
			if (y === '*') {
				y = Math.random() * 10
			}
			if (U(x)) {
				var pos = this.GetPosition()
				return pos.mult()
			} //used to parseInt.. necessary?
			y = N(y) ? y : x
			newPos = V(x / 30, y / 30)
			this.SetPosition(newPos)
			return this
		}
	}
	
	var b = this, g = G(arguments),
			newPos, pos
	if (x === '*') {
		x = R(10)
	}
	if (y === '*') {
		y = R(10)
	}
	if (g.u) {
		pos = b.GetPosition()
		return pos.m().tF(0)
	} //used to parseInt.. necessary?
	if (b2d.iB(x)) {
		y = x.Y()
		x = x.X()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.GP = function () {
	return this.GetPosition()
}
b.SP = function (ps) {
	this.SetPosition(ps);
	return this
}
b.STf = function (tf) {
	this.SetTransform(tf);
	return this
}
b.GTf = function (tf) {
	return this.GetTransform()
}
b.SA = function (ang) {
	this.SetAngle(ang);
	return this
}
b.GA = function () {
	return this.GetAngle()
}
b.SPAA = function () {
	this.SetPositionAndAngle.apply(this, arguments)
	return this
}
b.wC = function () {
	return this.GWC().m()
}
b.GLC = b.GLcC = function () {
	return this.GetLocalCenter()
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
b.GCxL = function () {
	return this.GetContactList()
}
b.GCoL = function () {
	return this.GetControllerList()
}
b.GJL = function () {
	return this.GetJointList()
}
b.M = function () {
	return this.Merge.apply(this, arguments) || this
}
b.S = function () {
	return this.Split.apply(this, arguments) || this
}
b.GMD = function () {
	return this.GetMassData()
}
b.SMD = function (mD) {
	this.SetMassData(mD);
	return this
}
b.RMD = function () {
	this.ResetMassData();
	return this
}
b.GM = function () {
	return this.GetMass()
}
b.GLVFLP = b.GlVLP = function () {
	return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
}
b.GLVFWP = function () {
	return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
}
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
}
b.GLV2 = function () {
	return this.GetLocalVector()
}
b.GWV2 = function () {
	return this.GetWorldVector()
}
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
b.GLP = function () {
	return this.GetLocalPoint.apply(this, arguments)
}
b.GWP = b.GWPt = function () {
	return this.GetWorldPoint.apply(this, arguments)
}
b.isBu = function () {
}
b.SB = function (bu) {
	this.SetBullet(bu);
	return this
}
b.IB = function () {
	return this.IsBullet()
}
b.SAw = function (sA) {
	this.SetAwake(sA);
	return this
}//return  _.set(b, 'SetAwake', sA)
b.IAw = function () {
	return this.IsAwake()
}
b.SSA = function (sA) {
	this.SetSleepingAllowed(sA);
	return this
}
b.ISA = function () {
	return this.IsSleepingAllowed()
}
b.SAc = function (ac) {
	this.SetActive(ac);
	return this
}
b.IAc = function () {
	return this.IsActive()
}
b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.aw1 = b.wake = b.wakeUp = function () {
	this.SetAwake(true);
	return this
}
b.aw0 = b.sleep = function () {
	this.SetAwake(false);
	return this
}
b.GM = function () {
	return this.GetMass()
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
	var b = this
	return b.of(k) ? b.K('ds destroy') : b
}
b.ds = function () {
	var b = this
	b.W().DB(b)
	return b
} //= b.destroy
b.ty = b.type = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}
b.GT = function () {
	return this.GetType()
}
b.ST = function (ty) {
	this.SetType(ty)
	return this
}
b.iD = b.isDyn = function () {
	return this.GetType() == 2
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
	function alt() {
		b.dyn = function (resumeVel) {
			this.type(2)
			if (resumeVel == true && O(this._linVel)) {
				this.linVel(this._linVel)
			}
			this._linVel = null
			return this
		}
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
	function alt() {
		b.stat = function () {
			var v = this.linVel()
//huh??? oh can get/set type of body
			this._linVel = V(v.x, v.y)
			this.type(0)
			return this
		}
	}
}
b.iS = b.isStat = function () {
	return this.GetType() == 0
}
b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
b.destroySpaz = b.kill = b.rm = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.ds()
}
b.destroyFixt = b.destroyFixture = function (f) {
	this.DestroyFixture(f)
	return this
}
b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.destroy()
}
b.destroy = function () {
	this.W().DestroyBody(this)
}
b.setDestroy = function () {
	return this.K('destroy')
}
b.setDestroyIf = function (data) {
	if (this.is(data)) {
		this.setDestroy()
	}
}
//function kill() {
 
b.rF = function () {
	// = b.$rF = b.rH
	return this.CF($rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}
///////////////////
b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
b.A = function (fD) {
	this.CF(fD);
	return this
}
 