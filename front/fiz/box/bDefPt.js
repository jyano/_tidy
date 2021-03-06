bD.kin = function () {
	return this.T(1)
}
bD.kin = function () {
	return this.T(1)
}

bD.A = bD.ang = bD.Ang = function (an) {
	var bD = this
	bD.GA = function () {
		return this.angle
	}
	bD.SA = function (an) {
		this.angle = an;
		return this
	}
	return U(an) ? this.GA() : this.SA(an)
}
bD.rt = bD.rot = function (rt) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
}
bD.GFR = function () {
	return this.fixedRotation
}
bD.SFR = function (fR) {
	this.fixedRotation = fR
	return this
}
bD.fR = bD.FR = bD.fixedRot = function (fR) {
	return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
	bD.fixedRotAlt = bD.fRalt = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
	}
}
bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(1)
}
bD.fR0 = bD.r1 = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(0)
}
bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}
bD.SB = function () {
	this.bullet = isBul;
	return this
}
bD.bul = bD.bull = function (isBul) {
	return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
}
bD.b1 = bD.mB = function () {
	return this.bul(1)
}
bD.b0 = function () {
	return this.bul(0)
}
bD.bul = bD.bull = function (isBul) {
	//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
	if (U(isBul)) {
		return this.bullet
	}
	this.bullet = isBul;
	return this
}
bD.sl = bD.aSl = function (aS) {
	return this.ASl(aS ? true : false)
}
bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
	return this.sl(1)
}
bD.s0 = function () {
	return this.sl(0)
}
bD.lV = function (lV) {
	bD.SLV = function (lV) {
		this.linearVelocity = lV;
		return this
	}
	var bD = this
	return U(lV) ? this.linearVelocity : this.SLV(lV)
	function alt() {
		bD.lV = function (vel) {
			if (U(vel)) {
				return this.linearVelocity
			}
			this.linearVelocity = vel;
			return this
		}
	}
}
bD.lD = function (lD) {
	var bD = this
	bD.SLD = function (lD) {
		this.linearDamping = lD;
		return this
	}
	return U(lD) ? this.linearDamping : this.SLD(lD)
	function alt() {
		bD.lD = function (dm) {
			var bD = this
			if (U(dm)) {
				return bD.linearDamping
			}
			bD.linearDamping = dm
			return bD
		}
	}
}
bD.aD = function (aD) {
	var bD = this
	bD.SAD = function (aD) {
		this.angularDamping = aD;
		return this
	}
	return U(aD) ? this.angularDamping : this.SAD(aD)
	function alt() {
		bD.aD = function (damp) {
			if (U(damp)) {
				return this.angularDamping
			}
			this.angularDamping = damp;
			return this
		}
	}
}
bD.aV = function (vel) {
	var bD = this
	bD.SAV = function (aV) {
		this.angularVelocity = aV;
		return this
	}
	return U(vel) ? this.angularVelocity : this.SAV(vel)
	function alt() {
		bD.aV = function (vel) {
			if (U(a)) {
				return this.angularVelocity
			}
			this.angularVelocity = vel
			return this
		}
	}
}
bD.inertia = function (ine) {
	if (U(ine)) {
		return this.insertiaScale
	}
	this.insertiaScale = ine
	return this
}
bD.SAc = function (ac) {
	this.active = ac;
	return this
}
bD.ac = function (ac) {
	return this.SAc(ac ? true : false)
}
bD.a1 = bD.mA = function () {
	return this.ac(1)
}
bD.a0 = function () {
	return this.ac(0)
}
bD.ASl = function (aS) {
	var bD = this;
	bD.allowSleep = aS;
	return bD
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
bD.STy = function (ty) {
	this.type = ty;
	return this
}
bD.T = bD.ty = function (ty) {
	return U(ty) ? this.type : this.STy(ty)
}
bD.dyn = function () {
	return this.T(2)
}
bD.stat = function () {
	return this.T(0)
}
bD.kin = function () {
	return this.T(1)
}
bD.ty = bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.stat = function () {
	return this.T(0)
}
bD.dyn = function () {
	return this.T(2)
}
bD.ty = bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
  
bD.A = bD.ang = bD.Ang = function (an) {
	var bD = this
	bD.GA = function () {
		return this.angle
	}
	bD.SA = function (an) {
		this.angle = an;
		return this
	}
	return U(an) ? this.GA() : this.SA(an)
}
bD.rt = bD.rot = function (rt) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
}
bD.STy = function (ty) {
	this.type = ty;
	return this
}
bD.ty = function (ty) {
	return U(ty) ? this.type : this.STy(ty)
}
bD.dyn = function () {
	return this.T(2)
}
bD.stat = function () {
	return this.T(0)
}
bD.kin = function () {
	return this.T(1)
}
bD.ty = bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.stat = function () {
	return this.T(0)
}
bD.dyn = function () {
	return this.T(2)
}
bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.lV = function (lV) {
	bD.SLV = function (lV) {
		this.linearVelocity = lV;
		return this
	}
	var bD = this
	return U(lV) ? this.linearVelocity : this.SLV(lV)
	function alt() {
		bD.lV = function (vel) {
			if (U(vel)) {
				return this.linearVelocity
			}
			this.linearVelocity = vel;
			return this
		}
	}
}
bD.aV = function (vel) {
	var bD = this
	bD.SAV = function (aV) {
		this.angularVelocity = aV;
		return this
	}
	return U(vel) ? this.angularVelocity : this.SAV(vel)
	function alt() {
		bD.aV = function (vel) {
			if (U(a)) {
				return this.angularVelocity
			}
			this.angularVelocity = vel
			return this
		}
	}
}
bD.SAc = function (ac) {
	this.active = ac;
	return this
}
bD.ac = function (ac) {
	return this.SAc(ac ? true : false)
}
bD.a1 = bD.mA = function () {
	return this.ac(1)
}
bD.a0 = function () {
	return this.ac(0)
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
bD.inertia = function (inertia) {
	if (U(inertia)) {
		return this.insertiaScale
	}
	this.insertiaScale = inertia;
	return this
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
bD.lD = function (lD) {
	var bD = this
	bD.SLD = function (lD) {
		this.linearDamping = lD;
		return this
	}
	return U(lD) ? this.linearDamping : this.SLD(lD)
	function alt() {
		bD.lD = function (dm) {
			var bD = this
			if (U(dm)) {
				return bD.linearDamping
			}
			bD.linearDamping = dm
			return bD
		}
	}
}
bD.aD = function (aD) {
	var bD = this
	bD.SAD = function (aD) {
		this.angularDamping = aD;
		return this
	}
	return U(aD) ? this.angularDamping : this.SAD(aD)
	function alt() {
		bD.aD = function (damp) {
			if (U(damp)) {
				return this.angularDamping
			}
			this.angularDamping = damp;
			return this
		}
	}
}
bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}
bD.SB = function () {
	this.bullet = isBul;
	return this
}
bD.bul = bD.bull = function (isBul) {
	return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
}
bD.b1 = bD.mB = function () {
	return this.bul(1)
}
bD.b0 = function () {
	return this.bul(0)
}
bD.bul = bD.bull = function (isBul) {
	//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
	if (U(isBul)) {
		return this.bullet
	}
	this.bullet = isBul;
	return this
}
bD.sl = bD.aSl = function (aS) {
	return this.ASl(aS ? true : false)
}
bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
	return this.sl(1)
}
bD.s0 = function () {
	return this.sl(0)
}
bD.ASl = function (aS) {
	var bD = this;
	bD.allowSleep = aS;
	return bD
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
bD.GFR = function () {
	return this.fixedRotation
}
bD.SFR = function (fR) {
	this.fixedRotation = fR
	return this
}
bD.fR = bD.FR = bD.fixedRot = function (fR) {
	return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
	bD.fixedRotAlt = bD.fRalt = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
	}
}
bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(1)
}
bD.fR0 = bD.r1 = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(0)
}
bD.inertia = function (ine) {
	if (U(ine)) {
		return this.insertiaScale
	}
	this.insertiaScale = ine
	return this
}
function position(){
	bD.Set = function () {
// actual sig: bD.position.Set(x, y)
		var bD = this
		bD.position.Set.apply(bD.position, arguments)
		return bD
	}
	bD.GXY = bD.GP = function () {
		return this.position
	}
	bD.SP = function (x, y) {
		this.position = V(x, y)
		return this
	}
	bD.SXY = function (x, y) {
		var v = V(x, y)
		return this.Set(v.x, v.y)
	}
	bD.GX = function () {
		return this.GP().x
	}
	bD.GY = function () {
		return this.GP().y
	}
	bD._X = bD.SX = function (x) {
		return this.SXY(x, this.GY())
	}
	bD._Y = bD.SY = function (y) {
		return this.SXY(this.GX(), y)
	}
	bD.gXY = bD.gP = function () {
		return this.GP().m()
	}
	bD.gX = function () {
		return this.gXY().x
	}
	bD.gY = function () {
		return this.gXY().y
	}
	bD.sXY = bD.set = function (x, y) {
		var v = V(x, y).d()
		this.Set(v.x, v.y)
		return this
	}
	bD.sX = function (x) {
		return this.sXY(x, this.gY())
	}
	bD.sY = function (y) {
		return this.sXY(this.gX(), y)
	}
	bD.X = function (x) {
		return U(x) ? this.gX() :
				this.sX(x)
	}
	bD.Y = function (y) {
		return U(y) ? this.gY() :
				this.sY(y)
	}
	bD.XY = bD.p = bD.ps = bD.xy = function () {
		var bD = this, g = G(arguments)
		return g.u ? bD.gXY() : bD.sXY(g.f, g.s)
//if (x === '*') {x = M.r() * 10 * 60}
//if (y === '*') {y = M.r() * 10 * 60}
//if(O(x)){this.position=x;return this}
	}
	bD.Set = function () {
// actual sig: bD.position.Set(x, y)
		var bD = this
		bD.position.Set.apply(bD.position, arguments)
		return bD
	}
	bD.GXY = bD.GP = function () {
		return this.position
	}
	bD.SP = function (x, y) {
		this.position = V(x, y)
		return this
	}
	bD.SXY = function (x, y) {
		var v = V(x, y)
		return this.Set(v.x, v.y)
	}
	bD.GX = function () {
		return this.GP().x
	}
	bD.GY = function () {
		return this.GP().y
	}
	bD._X = bD.SX = function (x) {
		return this.SXY(x, this.GY())
	}
	bD._Y = bD.SY = function (y) {
		return this.SXY(this.GX(), y)
	}
	bD.gXY = bD.gP = function () {
		return this.GP().m()
	}
	bD.gX = function () {
		return this.gXY().x
	}
	bD.gY = function () {
		return this.gXY().y
	}
	bD.sXY = bD.set = function (x, y) {
		var v = V(x, y).d()
		this.Set(v.x, v.y)
		return this
	}
	bD.sX = function (x) {
		return this.sXY(x, this.gY())
	}
	bD.sY = function (y) {
		return this.sXY(this.gX(), y)
	}
	bD.X = function (x) {
		return U(x) ? this.gX() :
				this.sX(x)
	}
	bD.Y = function (y) {
		return U(y) ? this.gY() :
				this.sY(y)
	}
	bD.XY = bD.p = bD.ps = bD.xy = function () {
		var bD = this, g = G(arguments)
		return g.u ? bD.gXY() : bD.sXY(g.f, g.s)
//if (x === '*') {x = M.r() * 10 * 60}
//if (y === '*') {y = M.r() * 10 * 60}
//if(O(x)){this.position=x;return this}
	}
}
position()