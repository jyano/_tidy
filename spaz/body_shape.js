b.H = function (arg) {
	var g = G(arguments),
			arg = g[0],
			b = this,
			len = length(g)
	if (U(arg)) {
		return b
	}
	if (A(g[0]) && U(g[1])) {                                       //passing a single array, suggest MULTIPLE fixts //[f1,f2,..]
		_.e(g[0], function (a) {
			if (g.n) {
				a.push('-')
			}
			b.H.apply(b, a)
		})
	}
	else if (S(g[0]) && A(g[1]) && U(g[2])) {                                             //[col,[f1,f2,..]]
		_.each(g[1], function (f) {
			if (b2d.isFD(f)) {
				b.f(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f.unshift(g[0])
				}                                     //f= _.map(f, function(a){return a})
				if (b2d.isFD(f[1])) {
					b.f(f[1]).C(f[0])
				} else {
					b.H.apply(b, f)
				}
			}
		})
	}
	else if (b2d.isFD(g[0])) {
		b.f(g[0])
	}                                                   //fixtDef
	else if (S(g[0]) && b2d.isFD(g[1])) {
		b.f(g[1]).C(g[0])
	}                               //['color', fixtDef]
	else if (O(g[1])) {  //  if(g.n){g.push('-')}  //  b.fig(g)
		o = S(g[0]) ? {c: _.f(g), v: _.r(g)} : {v: g}
		if (g.n) {
			o.s = 1
		}
		b.fig(o)
	}
	
	// else if(O(g[0])){$l('o');o=g[0]
	//    if(o.t=='c'){  b.cir(o) }}
	else if (len == 1 || len == 3) {
		o = {c: g[0], r: g[1], x: g[2], y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	else {
		if (g.n) {
			g.push('-')
		}
		;
		b.RECT.apply(b, g)
	}//rect
	function length(arr) {
		var len = arr.length
		if (S(_.first(arr))) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}


BODYSHAPE = BSH = function () {

	w = b2d.W()
	w.ball()

	b = w.S(400, 300)
	b.H('o', 50)
	b.H('r', 50, 50)
	b.H('b', 50, 50, 50)
	b.H('g', 50, 50, 50, 50)
	b.H('w', 50, 50, 50, 50, 50)
	b.H('u', [-100, 0], [0, -50], [200, -10])

	b2 = w.D(600, 300).H([
		['o', 50],
		['r', 50, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])

	b3 = w.D(600, 300).H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ?
	{
		x: g.f, y: g.s, i: g.t, w: g.fo, h: g.fi, c: g.si
	} : {
		x: g.f, y: g.s, w: g.t, h: g.fo, c: g.fi
	}
	b = w.D(o.x, o.y, o.c || 'y', o.w, o.h) // allpha?: b = w._D( o )
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	;
	h.bf(o.i || 'sun');
	h.rec(o.w, o.h);
	b.bS(h);
	return b
}
b.GFL = b.GetFixtureList
b.CF = b.GFL = b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.FL()
	}
	f = b.CF(f)
	return f
}
f.setC = function (c) {
	if (c) {
		this.C(c)
	}
	return this
}
b.f = function (fs) {
	var b = this, g = G(arguments)
	return g.u ? b.GFL() : b.CF(fs)
}
b._fxt = b.fColor = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	return b.CF(f).setC(c)
}
b.fxt = b.fCol = function () {
	var b = this, g = G(arguments), o, pol;
	if (g.u) {
		return b.GFL()
	}
	if (g.S_) {
		g.L--
	}
	;
	if (g._S) {
		g.L--
	}////PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.SA) {
		g.e1(function (f) {//'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				}
				bx.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}////      PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	}//[ [],[],fD,4,[] ]
	else if (bx.iFD(g.f)) {
		return b.fCol(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b.fCol(g.s, g.f)
	}//('c', fD)
	//POL	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		o = g.S_ ? {c: g.f, v: g.r} : {v: g}
		if (g.n) {
			b.sen(1);
			o.s = 1
		}
		;
		b.pol(o)
	}
	//CIR
	else if (g.L == 1 || g.L == 3) {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	//REC
	else {
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
		if (g.n) {
			o.s = 1
		}
		;
		b.rec(o).C(o.c);
		$a(b, 'rec', g.g)
	}
	return b.d(1)
}
function fixtureSingleSprite() {
	f.sp = f.Sp = function (sp) {
		var f = this
		if (U(sp)) {
			return f.sprite
		}
		f.sprite = sp
		return f
	}
}
function fixtureSpritesArray() {
	f.bS = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sp;
		$transform = $bindOnce = function (sp, b, o) {
			sp.XY(b.X() + o.x, b.Y() + o.y).rt(b.rt() + o.rt)
		}
		$bindTransform = function (sp, b, o) {
			$t(function () {
				$transform(sp, b, o)
			})
			return sp
		}
		f.bindLoaderSprite = function (j) {
			//= f.bSQ 
			var f = this
			f.ctDob = f.ctSprite = f.ctSp = function (sp) {
				var f = this
				sp.XY(
						f.pos().x,
						f.pos().y
				).rC()
				f.bS($Ct().A(sp))
				return this
			}
			Q(function () {
				f.ctSp(Q.b(j))
			})
			return f
		}
		f.sprites = f.sprites || []
		//higher level.. can handle obs AND !!!  Q-strings
		if (S(g.f)) {
			return f.bindLoaderSprite(g.f)
		}
		o = cjs.iDO(g.f) ? {
			j: g.f, rt: g.s,
			x: g.t, y: g.fo,
			o: g.fi
		} : g.f
		var sp = o.j.al(N(o.al, 1))
		sp = $bindTransform(sp, b, $df.bsDF(o))
		return f.spritesPush(sp.a2(w.gx))
	}
	f.spritePush = function (j) {
		this.sprites = this.sprites || []
		this.sprites.push(j)
		return this
	}
	f.cSp = function (o) {
		var f = this, b = f.B(), w = b.W()
		var cir = w.g.h().cir(o)
		f.bS(cir)
		f.g = cir
		return f
	}
	f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
		var g = G(arguments)
		gg = g
		alpha = N(alpha) ? alpha : 1
		obj.opacity(alpha)
		//takes any display object.  right now, just used for shapes
		//because bindSprite fetches the bm's by string.
		//but when i set up preloader, then i would use this i suppose :)
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var f = this,
				body = this.body(),
				stage = body.wor().s
		startingRotation = N(startingRotation) ? startingRotation : 0
		//f.sprite = obj
		//f.sprite.a2(stage)
		o = obj.a2(stage)
		f.sprites = f.sprites || []
		f.sprites.push(obj)
		//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {//if(!f.sprite){return}
			obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
			obj.rotation = body.rot() + startingRotation
		})
		return this
	}
	f.sp = function () {
		return this.sprites[0]
	}
	f.bS = f.bindSprite = function (j, a, x, y, al) {//f.gx= f.spr= f.bindSprite2=
		var f = this, b = f.B(), s = b.wor().s, g = G(arguments), o
		f.sprites = f.sprites || []
		o = cjs.isDisplayOb(j) ? {j: j, a: a, x: x, y: y, o: al}
				: O(j) ? j : {}
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.a = _.tN(o.a)
		o.o = _.tN(o.o, 1)
		f.sprites.push(o.j.op(o.o).a2(s))                      //takes any display object.  right now, just used for shapes//because bindSprite fetches the bm's by string. //but when i set up preloader, then i would use this i suppose :)                                                 //f.sprite = obj  //f.sprite.a2(stage)                                                 //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {
			o.j.XY(b.X() + o.x, b.Y() + o.y)
					.rot(b.rot() + o.a)
		})                                    //if(!f.sprite){return}
		return f
	}
}
function kill() {
	f.removeSprites = function () {
		var f = this
		f.sprites = f.sprites || []
		_.each(f.sprites,
				function (s) {
					if (O(s) && s.parent) {
						s.remove()
					}
				}
		)
		f.sprites = []
		return this
	}
	f.kill = f.remove = function () {
		var f = this, b = f.B()    // if(this.sprite  ){this.sprite.remove()}
		f.removeSprites()
		b.destroyFixt(f)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	}
	f.rmSp = function () {
		_.e(this.sprites || [], function (s) {
			cjs.rmOb(s)
		})
		this.sprites = []
		return this
	} //= f.xSp=f.Xx=f.rmSp
	f.rpSp = function (sp) {
		this.rmSp()
		if (sp) {
			this.bS(sp)
		}
		return this
	}
	f.rmSp = function () {
		var f = this
		f.sprites = f.sprites || []
		_.e(f.sprites, function (s) {
			cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
		})
		f.sprites = []
		return f
	} //= f.xSp=f.Xx=f.rmSp
	f.rpSp = function (sp) {
		var f = this
		f.rmSp()
		if (sp) {
			f.bS(sp)
		}
		return f
	}
	f.kill = function () {
		var f = this, b = f.B(), w = b.W()
		if (!f) {
			return
		}
		if (w._fPreKill) {
			w._fPreKill(f)
		}
		if (b) {
			b.rmF(f)
		}
	}//= f.xx = f.remove
	f.setKill = function () {
		var that = this
		var flagNum = Math.random()
		this.B().W().flag(flagNum)
		$t(function () {
			if (w.flagged(flagNum)) {
				that.kill()
			}
		})
	}
	f.killBody = function () {
		this.B().kill()
	}
	f.killB = f.kB = f.xB = f.xX = f.XX = function () {
		if (this && this.B()) {
			this.B().kill()
		}
	}
	f.removeSprites = function () {
		var f = this
		f.sprites = f.sprites || []
		_.each(f.sprites,
				function (s) {
					if (O(s) && s.parent) {
						s.remove()
					}
				}
		)
		f.sprites = []
		return this
	}
	f.kill = f.remove = function () {
		// if(this.sprite  ){this.sprite.remove()}
		this.removeSprites()
		this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	}
	f.kill = function () {
		if (this.sprite) {
			this.sprite.remove()
		}
		this.remove();
		return
	}
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g.t}
	var easelMet = f.iC() ? 'cir' : 'pol'
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	f.B()._i = f.B().i = w.st[easelMet](f.hDat(o))
	//*** look.. we just put the easel shape display object on the fixture's body
	// we called it i.. just i 
	// but i prefer _i
	f.rpSp(f.B()._i)
	// .. then we made it the main FIXTURE sprite,
	// which gets bound to the actual fixture,
	// but is clearly ALSO... referenced on the body
	// so that is just temp on the body because it will get constantly overwrittern!!
	//so can be used short term.. but why not an array???
	// wel they are already probably an array of the fixture?? body can iterate fixtures// better that way becasue then they can be more easily associated with their assoc fixtures
	return f
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.C = f.color = function (c, C, l) {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			r, p, o
	o = O(g[0]) ? g[0] : {c: c, C: C, l: l}
	o.c = (o.c == '*') ? $r() : o.c || 'b'
	o.C = o.C || o.c
	f.removeSprites()
	h = w.s.h()
	if (f.isCirc()) {
		$l('isCir')
		h.cir(
				f.pX(), f.pY(), f.rad(),
				o.c, o.C, o.l
		)
	}
	else {
		h.poly(f.verts(), o.c, o.C, o.l)
	}
	f.bS(h)
	return f
};
COL = function () {
	W().C('z')
	b = w.bump({c: 'w', r: 100})
	f = b.f()
	f.C('y')
	// f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)
	setTimeout(function () {
		b.dyn()
	}, 1000)
}
b.stg = function () {
	return this.wor().s
}
b.click = function (func) {
	var b = this, w = this.wor()
	w.s.on('stagemouseup', function (e) {
		w.queryPoint(function (f) {
					if (b == f.B()) {
						_.bind(func, b)(f)
					}
				},
				e.rawX, e.rawY)
	})
}
b.img = b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
	var body = this, stage = body.wor().s
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm  //only one???
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y()) //can simplify?
			bm.rotation = body.rot() + startingRotation
		}
	}, '-') // what is this negative doing ?????
	return body
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
	function alt() {
		b.mid = function () {
			var b = this, w = b.wor()
			return b.XY(w.w / 2, w.h / 2)
		}
	}
}
w.gx = function (o) {
	var w = this, W = o.W, H = o.H
	w.bg = new cjs.Stage($.can(o.C || 'z', W, H).P('a').XY(0, 0)[0]).A().tick();
	w.bg.linGrad = function (c1, c2) {
		var s = this, H = s.H(), W = s.W()
		c1 = oO('c', c1 || 'b')
		c2 = oO('c', c2 || 'r')
		if (R()) {
			$l('=')
			if (R()) {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, 0, H).dr(0, 0, W, H)
			}
			else {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, 0).dr(0, 0, W, H)
			}
		}
		else {
			$l('/')
			if (R()) {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, H, 0, 0).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, H).dr(0, 0, W, H)
				}
			}
			else {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, 0, 0, H).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, H, W, 0).dr(0, 0, W, H)
				}
			}
		}
	}
	w.bg.SHAPE = w.bg.shape(0, 0, 'w')
	w.bg.linGrad('z', 'w')
	w.s = w.stage = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().noAutoClear().tick()
	w.canvas = w.s.canvas
	w.c = w.can = $(w.canvas).id('canvas')
	w.ctx = w.context = w.c.ctx('2d')
	w.hud = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().tick()
	w.hud.h = w.hud.shape().fs($r()).rect(0, 0, 5000, 5000).opacity(.3)
	w.hud.c = $(w.hud.canvas)
	w.s.back = w.bg
	w.s.HUD = w.hud
	return w
}
w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		world.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.chalk = function () {
	this.s.chalk.apply(this.s, arguments)
	return this
}
function stage() {
	w.setBg = function (o) {
		var w = this;
		if (o.i) {
			w.s.bm(o.i)
		}
		;
		return w
	}
	w.auCl = function (aC) {
		var w = this, st = w.st
		if (U(aC)) {
			return st.autoClear
		}
		st.autoClear = aC ? true : false
		return w
	}
	w.ggAuCl = function () {
		var w = this
		w.auCl(!w.auCl())
		return w
	}
}
function world() {
//function write() {
	CHALK = function () {
		w = b2d.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
}
w.dot = function (col, x, y) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2]
	if (g.m) {
		w.dot(col, x, y);
		w.dot(col, x, y, '+')
	}
	if (g.p) {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'b'
		}
		w.hud.dot(col, x, y)
		//w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
	}
	else {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'w'
		}
		w.s.dot(col, x, y)
	}
	return w
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.fadeTitle = function (text) {
	text = text || 'no text provided, yo'
	setTimeout(function () {
		t = w.s.text(text, 50, 'white', 600, 100)
		t.tween([{a: 0, sxy: 0}, 2000])
		setTimeout(function () {
			t.remove()
		}, 1000)
	}, 500)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.C = function (col) {
	var w = this
	w.c.C(col)
	return w
}
b.bindSprite2 = function (obj, startingRotation, x, y) {
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	//  stage.A( displayObject = obj )
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rot() + startingRotation
		})
	})
	return body
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
b.centerScale = function (scale) {
	var body = this
	body.stg().sXY(scale)
			.X(300 - ((body.X() - 300) * scale))
			.Y(150 - ((body.Y() - 150)) * scale)
	return this
}
b.color = function (c1, c2) {
	c1 = c1 || 'b';
	c2 = c2 || c1
	_.each(this.fixts(), function (f) {
		f.color(c1, c2)
	})
}
b.hCen = b.hoCen = b.hzCen = function () {
	var b = this
	return b.X(b.W().st.W() / 2)
}
b.constF = function (x, y) {
	var b = this
	$t(function () {
		b.F(x, y)
	})
	return b
}
b.warp = function (p) {
	var p = this
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
f.dot = function (c) {
	var f = this, b = f.B(), w = b.W()
	var stg = w.s
	if (c) {
		return stg.dot(c, f.cen())
	}
	return stg.dot(f.cen())
}
w.gridDrawer = function (x, y, len, spa) {
	var w = this
	len = N(len) ? len : 30;
	spa = N(spa) ? spa : 20
	return function (x, y) {
		b.rect(len, len, x * spa, y * spa);
		return b
	}
}
w.GRID = function (gd, x, y, l, spa) {//spacing
	var w = this
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.rect(l, l, rw * spa, c * spa, 'p');
			}
		})
	})
	return b.K('grid')
}
COLORMAZE = MMM = MARIOMAZE = function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	p = w.p(2.5).XY(220, 70).con('thrust').aD(10000)
	//p.follow(300, 150)
	grid = w.GRID(maze, 100, -100, 14, 40)
	score = 100
	$t(function () {
		
		//grid.aV(.2)
		//w.st.HUD.pen(score)
	})
	//w.b(function (cx) {cx.w('player', 'grid', function() {score--		   })})
	// grid.angDamp(1)
}
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.div())
	//is a point within the fixture // very accurate
}
killBodSprites = w._preKill = function (b) {
	
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	b.sprite = null
	if (b.sp()) {
		b.sp().rm()
	}
	b.fs(function (f) {
		f.rmSp()
	})
}
w.killFxtSprites = w._fPreKill = function (f) {
	f.rmSp()
}
	 

 