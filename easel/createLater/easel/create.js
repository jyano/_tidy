 
cjs.testCanvas = function () {
	return $.c(960, 400).id("testCanvas").a2($.d())
}


$L('proto',    'bool')
cj.PD = function () {
	eD = $pt.eD
	mx = $pt.mx
	tx = t = $pt.tx
	lQ = ld = $pt.ld
	dO = $pt.dO
	h = $pt.h
	ct = $pt.ct
	st = $pt.st
	gx = $pt.gx
}
cj.PD()

ct.h = function () {
	var ct = this,
			h = $H.apply(null, arguments)
	ct.A(h)
	return h
}

$Sh = function (gx) {
	return new cjs.Shape(gx)
}
cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
	if (cjs.iH(x)) {
		return $Sh(x.graphics)
	}
	var h = $Sh()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}

$H = $h = function () {
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
	return h
}
$Sh = $H = $h = function (x) {
	var g = G(arguments), o
	var h = new cjs.Shape(cjs.iH(x) ? x.graphics : x)
	//pass in your own obj to use 'o.i/o.bf'
	o = g.O ? g.f : // or 'o.lf' or 'o.rf'
			N(g.fo) ? {x: g.f, y: g.s, C: g.t, lW: g.fo} : //x,y C-l
					N(g.f) ? {x: g.f, y: g.s, c: g.t, C: g.fo, lW: g.fi} : //x,y c-C-l
							N(g.s) ? {C: g.f, lW: g.s} : // C-l
							{c: g.f, C: g.s, lW: g.t} // c-C-l
	h.XY(N(o.x, 0), N(o.y, 0))
	//h.c(o.c || 'z', o.C || 'w', o.lW || 8)
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.lW)) {
		h.l(o.lW)
	}
	if (g.p) {
		h.dg()
	}
	return h
}
$Sh = function (gx) {
	return new cjs.Shape(gx)
}
cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
	if (cjs.iH(x)) {
		return $Sh(x.graphics)
	}
	var h = $Sh()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}
$H = $h = function () {
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
	return h
}
$H = $h = function () {
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
	return h
}
$H = $h = function () {
	var g = G(arguments),
			h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
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
	return h
}
$H = $h = function () {
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
	return h
}
function proto() {
	$pt.eD = cj.ED.prototype
	$pt.gx = cj.Gx.prototype
	$pt.st = cj.St.prototype
	$pt.ct = cj.Ct.prototype
	$pt.h = cj.H.prototype
	$pt.dO = cj.DO.prototype
	ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	$pt.ss = $pt.sS = cj.SS.prototype
	$pt.sp = cj.Sp.prototype
	$pt.ssB = $pt.sSB = cj.SSB.prototype
	$pt.tw = cj.Tween.prototype
	$pt.mc = cj.MovieClip.prototype
	$pt.tl = cj.Timeline.prototype
	$pt.mx = cjs.Matrix2D.prototype
	$pt.tx = cj.Tx.prototype
}
function bool() {
	cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.iDO = cj.isDisplayOb = function (ob) {
		return O(ob) && F(ob.getStage)
	}
	cj.isCont = cj.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cj.iH = cj.isShape = function (h) {
		return O(h) && h.graphics
	}
	cj.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
	cj.isText = cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.hasDim = function (bm) {
		return !cj.iH(bm) && !cj.iCt(bm)
	}
}
function _pre() {
	cj = cjs = createjs
	T = cj.Tk = cj.Ticker
	cj.Pt = cj.Point
	cjs.R = cjs.Rectangle
	cj.ED = cj.EventDispatcher
	cj.DO = cj.DisplayObject
	cj.Ct = cj.Container
	cj.St = cj.Stage
	cj.Gx = cj.Graphics
	cj.H = cj.Sh = cj.Shape
	cj.LQ = cj.LoadQueue
	cj.M = cj.Mx = cj.Matrix2D
	cj.Tx = cj.Text
	cj.SS = cj.SpriteSheet
	cj.MC = cj.MovieClip
	cj.Sp = cj.Sprite
	cj.SSB = cj.SpriteSheetBuilder
	cj.Tl = cj.Timeline
	window.$pt = window.$pt || {}
}
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
$Ldr = function (name, fn) {
	return window[name] = function () {
		$Ld(fn)
	}
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
$hsl = cjs.HSL = function (a, b, c) {
	return U(a) ? cj.HSL(M.r() * 360, 100, 50) :
			cj.Gx.getHSL(a, b, c)
}
$rgb = cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
$Ld = $ld = cjs.lQ = Q = function () {
	_$Ld = function () {
		return new cjs.LoadQueue(true)
	}
//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
	var g = G(arguments), o
	o = g.F_ ? {done: g.f, file: g.s} :
			(g.A_ || g.S_) ? {mf: g.f, done: g.s, file: g.t} :
					g.f
	o.mf = o.mf || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
	var ld = _$Ld()
	if (o.file) {
		ld.file(o.file)
	}
	if (o.done) {
		ld.done(function (e) {
			//o.done(function(i) {return ld.i(i)}, e)
			o.done(ld)
		})
	}
	if (o.mf) {
		ld.mf(o.mf)
	}
	Q = ld
	Q.ran = true
	return Q
}
Q.ran = false
Q1 = function (imgs, fn) {
	var q = cjs.lq()
	mf = []
	_.e(imgs, function (v) {
		mf.push({
			src: cjs.src(v),
			id: v
		})
	})
	q.manifest(mf)
	q.complete(function () {
		fn(q)
	})
}
ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
	if (F(fn)) {
		this.on("complete", fn)
	}
	return this
}
ld.mf = function (mf) {
	// q.mf protosig: 
	// (1) 'me',..
	// (2)  {src:'me', id:'him'},.. 
	// (3) [ {src:*, id:*}, 'me',.. ]		
	mf = $its(A(mf) ? mf : G(arguments))
	this.loadManifest(mf)
	return this
}
function fileLoad() {
	ld.dfF = cjs.handleFileLoad = function (e) {
		alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
		images = window['images'] || {}
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
		this.on("fileload", fn)
		return this
	}
}
ld.jQuery = ld.$ = function (i) {
	return $(this.i(i))
}
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
	var b, g = G(arguments)
	b = Q.b(name)
			.XY(N(x, 0), N(y, 0))
			.sXY(N(sX, 1), N(sY, sX || 1))
			.rt(N(rt, 0))
	if (!g.n) {
		b.rC()
	}
	if (g.p) {
		b.drag()
	}
	this.A(b);
	return b
}
$it = function (i) {
	var _$it = function (i) {
		return {src: _.src(i), id: i}
	}
	return S(i) ? _$it(i) : i
}
$its = function (its) {
	var g = G(arguments)
	if (!g.A) {
		its = g
	}
	return _.m(its, $it)
}
QU = MF = MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(me = q.bm('me'))
		st.A(guy = q.bm('guy'))
		guy.dg()
	})
}
QU0 = function () {
	Q(mf5, function () {
		$.A(Q.i('me'))
	})
}
QU1 = function () {
	$Ld(mf3, function (ld) {
		$St().A(ld.bm("me"), ld.bm("guy", 300, 300))
	})
}
QU2 = function () {
	$Ld(mf1, function (ld) {
		ld.bm("myImage", $St())
	})
}
QU3 = function () {
	$Ld(mf2, function (ld) {
		ld.bm("me", $St());
		ld.bm("guy", st)
	})
}
IT = QU4 = function () {
	$Ld(function (ld) {
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
function later() {
	cjs.mf = cjs.manifest = function () {
		var g = G(arguments)
		var mf = []
		_.e(g, function (i) {
			mf.push($it(i))
		})
		return mf
	}
	cjs.handleFileLoad = function (e) {
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
		alert('manifest')
		return cjs.mf.apply(null, _.m(a.images, function (i) {
			return _.crs(i)
		}))
	}
}
events1 = ['added',
	'mouseover', 'rollover', 'rollout', 'mouseout',
	'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
	'removed',
	'tick'
]
events = ['drawend',
	'drawstart',
	'mouseenter',
	'mouseleave',
	'stagemousedown',
	'stagemousemove',
	'stagemouseup',
	'tickend',
	'tickstart'
]
eD.aEL = eD.addEventListener
eD.hEL = eD.hasEventListener
eD.O = eD.off
eD.o = eD.on
eD.dE = eD.dispatchEvent
eD.rAEL = eD.removeAllEventListeners
eD.rEL = eD.removeEventListener
eD.tS = eD.toString
eD.wT = eD.willTrigger
EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
eD.init = function () {
	//note: 'initialize' is the only STATIC method of eventDispatcher
	this.initialize.apply(this, arguments)
	return this
}
dO.uM = dO.underMouse = function () {
	var dO = this, stg = dO.getStage()
	if (stg.mouseInBounds) {
		var pt = dO.gTL(stg.mouseX, stg.mouseY)
		return dO.hitTest(pt.x, pt.y)
		// alt : return hitTest( pt )
	}
}
dO.mouEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.mouseEnabled
	}
	dO.mouseEnabled = g.f ? true : false
	return dO
}
dO.$ = dO.click = function (fn) {
	return this.on('click', fn)
}
dO.$$ = dO.dblclick = function (fn) {
	return this.on('dblclick', fn)
}
st.hEv = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.handleEvent
	}
	st.handleEvent = g.f
	return st
}
st.eDE = function () {
	var st = this, g = G(arguments)
	st.enableDOMEvents.apply(st, arguments)
	return st
}
MU = HITC = HITCIRCLES = function () {
	st = $St(1000, '+') // look no .tick() necesary!! look below :)
	ct = $Ct()
	st.A(ct.XY(150))
	_.t(25, function () {
		$H().XY(rndLoc(), rndLoc()).f(rndHSL()).dc(30).a2(ct)
	})
	T.on("tick", function (e) {
		ct.rotation += 3
		n = ct.getNumChildren()
		ct.ch(function (ch) {
			uM = ch.uM()
			ch.alpha = ch.uM() ? 1 : 0.1
			pt = ch.globalToLocal(st.m().x, st.m().y)
			if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
				ch.al(1)
			}
		})
	})
	function rndLoc() {
		return M.r() * 300 - 150
	}
	
	function rndHSL() {
		return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
	}
}
MU0 = ENTERST = function () {
	$St()
	st.bm('me')
	st.on('mouseenter', function () {
		$.br().A()
		$('body').A('once<br>')
	}, null, true)
	st.on('mouseenter', function () {
		$('body').A('many<br>')
	}, null, false)
}//A-
MU1 = MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	st = $St(1600, 1000)
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	st.on('mouseenter', function () {
		$('body').C($r())
	})
	ct = (new cjs.Container().a2(st)).bm('me', function (bm) {
		bm.sXY(.2).XY(100, 80)
		bm.on('click', function () {
			$l('lit')
		}, this, true) //just once
	})
	//make a container
	st.ct(function (ct, st) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
		// the middle size me demonstrates stopPropogation
		// if you click it, the container does not feel the click
		ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function (e) {
				$l('mid')
				e.stopPropagation()
			})
		})
		ct.bm('me', function (bm) {
			bm.sXY(1.5)
					.on('click', function () {
						$l('big')
					})
		})
		ct.on('click', function () {
			$l('con')
		})
	})
	function alt() {
		MU3 = MX0 = MATRIX0 = function () {
			st = $St(1600, 1000)
			// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
			// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			$.d('b', 50, 50).A()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			st.on('mouseenter', function () {
				$('body').C($r())
			})
			st.A(ct = container = c = $Ct())
			ct.bm('me', function (bm) {
				//b.sxy(.2).xy(100,80)
				//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
			})
			//make a container
			st.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				// the middle size me demonstrates stopPropogation
				// if you click it, the container does not feel the click
				ct.bm('me', function (b) {
					b.sXY(.4).XY(100, 180)
					//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
				})
				ct.b('me', function (b) {
					b.sXY(1.5)
					// b.o('$',fL('big'))  //on click, log('big')
				})
				//on click, log('con')
				//c.o('$',  fL('con'))
			})
			st.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
				//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
				// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
				//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
			})//.MV(40)
			st.ct(function (c, s) {
				c.x(700)
				c.mg(function (b) {
					b.sxy(.8).xy(200, 80)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(100, 280)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				c.o('v', function (g, e) {
					$l('v')
					g.sxy(.01, '+')
				})
				c.o('rv', function (g, e) {
					$l('rv')
					g.sxy(.01, '+')
				})
				c.o('o', function (q, e, g) {
				})
				c.o('ro', function (q, e, g) {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40)
			st.ct(function (ct, st) {
				ct.X(1400)
				ct.bm('me', function (bm) {
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, ct)
					ct.bm('me', function (bm) {
						//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						ct.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
				//guy slides stage
				ct.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					SL(bm, stage)
				})
			})
		}
	}
}
MU2 = HAN = HANDEV = function () {
	$St()
	st.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	st.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
		}
		b.on('pressmove', b)
	})
	st.t()
	function alt() {
		MU6 = HANDLEEVENT = function () {
			St()
			s.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			s.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
				}
				b.on('pressmove', b)
			})
		}
	}
}//B+
BUB = BUBBLE = function () {
	stage = $St()
	output = new createjs.Text(
			"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
			"13px courier").lWH(280, 13).XY(190, 10)
	background = new createjs.Shape().N("background")
	background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
	label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
			.N('label')
			.tA("center")
			.tB("middle")
	button = new createjs.Container().XY(20).N('button').A(background, label)
	// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
	// button.mouseChildren = false;
	stage.A(button, output)
	// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
	_.each([stage, button, label, background], function (target) {
		target.on("click", handleClick, false);
		target.on("click", handleClick, true)
	})
	stage.update()
}
MU3 = MOUSE = BUB8 = MOUSEVENTS = BUBBBLE = function () {
	St()
	output = $T(
			"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
			"13px courier").lWH(280, 13).XY(190, 10)
	bg = $H().n("background")
	bg.graphics.f("red").rr(0, 0, 150, 60, 10)
	lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
	// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
	// button.mouseChildren = false;
	st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
	// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
	_.e([st, bt, lb, bg], function (tg) {
		tg.$(handleClick, false);
		tg.$(handleClick, true)
	})
	st.u()
	function handleClick(e) {
		if (e.currentTarget == st && e.eventPhase == 1) {
			output.text = "target : eventPhase : currentTarget\n"
		}// this is the first dispatch in the event life cycle, clear the output.
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == st && e.eventPhase == 3) {
			st.u()
		}// this is the last dispatch in the event life cycle, render the stage.
	}
}//B+
MU4 = RMEVT8 = function () {
	function alt() {
		MU7 = REMOVEEVENT = function () {
			St()
			s.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			s.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
					me.off('pressmove', cb)
				}
				b.on('pressmove', b)
			})
		}
	}
	
	St()
	st.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	st.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
	})
	///////
	s.can.P('a').XY(300)
	s.A(h = shape = $h())
	h.rec(100, 200, 0, 200, 'red')
			.rec(100, 100, 100, 20, 'green')
			.rec(145, 120, 10, 80, 'orange')
			.cir(105, 100, 20, 'blue')
			.cir(105, 100, 8, 'black')
			.cir(200, 100, 20, 'blue')
			.cir(200, 100, 8, 'black')
			.cir(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.twL(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.twL(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
MU5 = MOUSEENTERSTAGE = function () {
	St()
	s.bm('me')
	s.on('mouseenter', function () {
		$('body').prepend('once<br>')
	}, null, true)
	s.on('mouseenter', function () {
		$('body').prepend('many<br>')
	}, null, false)
}
MOUSEENTERSTAGE = function () {
	z()
	stage = s = cjs.stage(500, 500).A().tick()
	s.bm('me')
	s.on('mouseenter', function () {
		$('body').prepend('once<br>')
	}, null, true)
	s.on('mouseenter', function () {
		$('body').prepend('many<br>')
	}, null, false)
}
HANDLEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
		}
		b.on('pressmove', b)
	})
}
REMOVEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
	})
}
//
testShape = function () {
	z()
	stage = createjs.stage(600).tick().A()
	shape = new createjs.Shape()
	stage.A(shape)
	shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
}
function handleClick(e) {
	if (e.currentTarget == stage && e.eventPhase == 1) {
		// this is the first dispatch in the event life cycle, clear the output.
		output.text = "target : eventPhase : currentTarget\n"
	}
	output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
	if (e.currentTarget == stage && e.eventPhase == 3) {
		// this is the last dispatch in the event life cycle, render the stage.
		stage.update()
	}
}
MOUSEENTERSTAGE = function () {
	z()
	stage = s = cjs.stage(500, 500).A().tick()
	s.bm('me')
	s.on('mouseenter', function () {
		$('body').prepend('once<br>')
	}, null, true)
	s.on('mouseenter', function () {
		$('body').prepend('many<br>')
	}, null, false)
}
HANDLEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
		}
		b.on('pressmove', b)
	})
}
REMOVEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
	})
}
st.m = function (ob) {
	var st = this
	if (U(ob)) {
		//return $Pt(this.mX(), this.mY())
		return $Pt(st.mouseX, st.mouseY)
	}
	if (O(ob)) {
		if (ob.d) {
			st.MD(ob.d)
		}
		if (ob.u) {
			st.MU(ob.u)
		}
		if (ob.m) {
			st.MM(ob.m)
		}
	}
	return st
}
st.mX = st.mx = function () {
	return this.m().x
}
st.mY = st.my = function () {
	return this.m().y
}
ct.moCh = ct.muCh = ct.mouCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.mouseChildren
	}
	ct.mouseChildren = g.f ? true : false
	return ct
}
st.eMO = st.mO = function (ms) {
	var st = this, g = G(arguments)
	if (U(g[0]) || g[0]) {
		st.enableMouseOver(N(g[0]) ? g[0] : true)
	}
	else {
		st.enableMouseOver(g.f ? true : false)
	}
	return st
}
st.mMO = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseMoveOutside
	}
	st.mouseMoveOutside = g.f ? true : false
	return st
}
st.mIB = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseInBounds
	}
	st.mouseInBounds = g.f ? true : false
	return st
}
ct.gOUPs = function () {
	return this.getObjectsUnderPoint.apply(this, arguments)
}
ct.gOUP = function () {
	return this.getObjectUnderPoint.apply(this, arguments)
}
st.MD = function (fn) {
	return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
	return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
	return this.on('stagemouseup', fn)
}
dO.dg = dO.drag = dO.SL = function () {
	cjs.drag(this);
	return this
}
cjs.drag = cjs.SL = LS = cjs.bindSlide = SL = function () {
	var g = G(arguments)
	var b = g.f
	var b2 = g.s || b
	return b.on('mousedown', function (e) {
		var bx = b2.x - e.rawX
		var by = b2.y - e.rawY
		b.on('pressmove', function (e) {
			if (!g.p) {
				b2.x = bx + e.rawX
			}
			if (!g.n) {
				b2.y = by + e.rawY
			}
		})
	})
}
T.t = cjs.t = cjs.tick = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		if (!g.n) {
			fn()
		}
		return T.on('tick', fn) // T.addEventListener? return T?
	}
	return g.n ? T.t('+') - T.t() :
			Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
$t = function (fn) {
	T.t(fn)
}
cj.t = cj.tick = function (func) {
	func();
	cjs.Ticker.on('tick', func)
}
cj.stop = function () {
	cjs.Ticker.removeAllEventListeners()
}
cj.stopListening = function () {
	cjs.Ticker.removeAllEventListeners()
}
T.p = function () {
	T.setPaused(false);
	return T
}
T.P = T.s = function () {
	T.setPaused(true);
	return T
}
T.s = cjs.xL = function () {
	T.removeAllEventListeners()
}
T.$ = function () {
	T.setPaused(T.getPaused() == false ? true : false)
	return T
}
T.i = function () {
	//indicates the target time (in ms) between ticks
	//default is 50 (20 fps)
	//Note: actual time between ticks may be more than specified,
	//  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
	return T.interval
}
T.f = function (numTicks) {
	var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
	if (N(numTicks)) {
		T.setFPS(numTicks);
		return T
	}
	return g.n ?
			T.getFPS() :
			T.getMeasuredFPS() //returns *ACTUAL* frames
	// / ticks per second//
	// Depending on performance,
	// this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
	//Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
	T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
	return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
T.iP = function () {
	return T.getPaused()
}
ct.tkCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.tickChildren
	}
	ct.tickChildren = g.f ? true : false
	return ct
}
DRAWCAR = function () {
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/timeBased.htmlLAYYS = USINGLAYERSINEASEL9 = function () {
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.bt('safd', function () {
		s.sXY(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
	}
}
DRAWSCIRCLESWORKS = RGB = function () {
	gx = $Gx().f(cjs.rgb(255, 0, 0)
	).ss(10).s('white')
	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	st = $St().A($Sh(gx).XY(300, 100)).u()
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	st.A(h).u()
}
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
setup = function () {
	cv = $('<canvas width=500 height=400 id="canvas">').a2($('body'))
	s = st = stage = new cjs.Stage("canvas", 420, 500, 30)
	h = new cjs.Shape().a2(st)
}
$L('linNeedsFixin', 'radial', 'stroke', 'mick', 'nip')
gx.bLGF = function () {
	return this.beginLinearGradientFill.apply(this, arguments)
}
gx.lGF = function () {
	var gx = this, g = G(arguments)
	g[0] = _.m(g[0], function (col) {
		return oO('c', col)
	})
	return gx.bLGF.apply(gx, g)
}
h.lg = cjs.lg = function () {
	var g = G(arguments), o//h=this, gx=h.graphics,
	if (g.A) {
		return cjs.lg.apply(null, g.f)
	}
	o = g.O ? g.f :
			_.x({c1: g.f, c2: g.s},
					N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
							: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
							: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
	o.c1 = oO('c', o.c1 || 'z');
	o.c2 = oO('c', o.c2 || 'w')
	o.s1 = N(o.s1, 0);
	o.s2 = N(o.s2, 1)
	o.x1 = N(o.x1, 0);
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
	return o
}
h.lf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = cjs.lg(g)
	gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
	return h
}
h.lG = h.linGrad = function () {
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
function linNeedsFixin() {
	LR0 = LINGRAD = function () {
		c = $.c('y').drag()
		x = c.ctx()
		x = c.ctx()
		x.lg({
			x1: 50, y1: 500, y2: 100,
			cS: {o: .2, r: .6, g: .8}
		})
		x.fr(0, 0, 100, 100)
	}
	OVALS8 = GRADS2 = SETTRANSFORM = function () {
		s = $St(800).bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
		//////
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({
			C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
		}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
				.de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140)
				.de(300, 0, 300, 500)
		//B+
	}
}
function radial() {
	gx.bRGF = function () {
		return this.beginRadialGradientFill.apply(this, arguments)
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rg = function (o) {
		var h = this, g = G(arguments),
				gx = h.graphics,
				o
		if (A(g[0]) && A(g[1])) {
			gx.rf(
					[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			)
			return h
		}
		o = O(g[0]) ? g[0] :
				S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						N(g[7]) ?
						{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								: N(g[5]) ?
						{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								: N(g[4]) ?
						{x2: g[2], r1: g[3], r2: g[4]}
								: N(g[3]) ?
						{r1: g[2], r2: g[3]}
								:
						{r2: g[2]})
						: S(g[0]) ?
				{c2: g[0]}
						: {}
		$df.grad(o)
		o.x2 = N(o.x2, o.x1)
		o.y2 = N(o.y2, o.y1)
		o.r1 = N(o.r1, 1);
		o.r2 = N(o.r2, 100)
		return o
	}
	h.rf = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rf(
				[o.c1, o.c2],
				[o.s1, o.s2],
				o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	RG1221 = RADGRAD = function () {
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG11 = RADIALGRAD = function () {
		setup()
		h.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG1441 = RADIALGRADRECT = function () {
		s = cjs.S()
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = cjs.h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.h(10, 10).a2(s).drag()
			h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
					x1,
					y1,
					r1,
					x2,
					y2,
					r2
			)
					.dr(0, 0, 400, 400)
					.endFill()
			// x--
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
	}
	RG11 = RADIALGRAD1 = function () {
		setup()
		h.x = 20
		h.y = 20
		st.addChild(h)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		h.graphics.drawRect(0, 0, 100, 100)
		h.graphics.endFill()
		st.update()
	}
	RG161 = RADIALGRADFILL2 = function () {
		setup()
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		st.update()
	}
	REC8 = GRADS1 = function () {
		s = $St()
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
		///////////////
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.h(10, 10).a2(s).drag()
			h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
		h = s.h(480, 270).drag()
		h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
		s.h(180, 270).drag()
				.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
				{w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
	}//B+ 
	RG151 = RADIALGRADFILL = function () {
		setup()
// 2 colors
		h.x = 20
		h.y = 20
		h.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		h.graphics.drawRect(0, 0, 100, 100)
		h.graphics.endFill()
		st.addChild(h)
// 3 colors
		h = new cjs.Shape();
		h.x = 20;
		h.y = 140;
		h.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		h.graphics.drawRect(0, 0, 100, 100);
		st.addChild(h);
// alpha
		h = new cjs.Shape();
		h.x = 20;
		h.y = 260;
		h.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		h.graphics.drawRect(0, 0, 100, 100);
		h.graphics.endFill();
		st.addChild(h);
	}
	RGS = $$TWOEXAMPLES$$ = function () {
		var RG1 = function () {
			var cv = $.c().W(500).H(400)
			$H().a2($St(cv)).graphics
					.bRGF(["orange", "blue"], [0, 1], 100, 100, 0, 100, 100, 350)
					.dr(0, 0, 500, 500)
			return $.d($.h1('radial grad'), cv)
		}
		var RG2 = function () {
			var cv = $.c().W(500).H(400)
			st = $St(cv)
			st.A(h = $H())
			gx = h.graphics
			gx.bRGF(["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50).dc(100, 100, 50)
			return $.d($.h1('radial grad fill'), cv)
		}
		$s({$flexDiv: {dp: 'fl', wr: 'wr'}})
		var d = $.d().id('flexDiv')
		d.A(RG1(), RG2())
	}
}
function stroke() {
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	LINSTROKE = DRAGST = GRADOVALS = function () {
		setup()
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	}//B
}
function mick() {
	ct.mick = function (x, y, lf) {
		var ct = this,
				h = ct.h(x, y).drag()
						.c({l: 20, C: 0, lf: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
		ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		return h
	}
	MICK = function () {
		$St()
		s.mick(500, 200)
		s.mick(700, 100, {c1: 'b', c2: 'X'})
		s.mick(700, 300, {c2: 'b'})
		s.mick(100, 100, {y2: 10})
		s.mick(100, 200, {y2: 200})
		s.mick(100, 300, {x2: 100})
	}
}
function nip() {
	NIP = CIRCRG8 = GRADS = function () {
		s = St()
		nip = function () {
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			var h = $h(10, 10).a2(s).drag().al(.8)
			h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
					x1, y1, r1, x2, y2, r2)
					.dc(0, 0, 100)
					.endFill()
			return h
		}
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			//  h.remove()
			// h=cjs.h(10, 10).a2(s).drag()
			h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		h2 = $h(500, 100).a2(s);
		h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
		////////
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
	}//C
}
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
h.f = function (fil, str) {
	var h = this, gx = h.graphics
	gx._f(fil)
	if (S(str)) {
		gx._s(str)
	}
	return h
}
h.s = h.C = h.sC = function (str, l) {
	var h = this, gx = h.graphics
	if (N(l)) {
		h.l(l)
	}
	gx._s(str)
	return h
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
shapes()
function shapes() {
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
	$Rec = function (a, b, c, d) {
		return new cjs.R(a, b, c, d)
	}
	REC = function () {
		$St()
		h = st.Sh().dg()
		gx = h.graphics
		gx.FS()._dr()
		gx = st.Gx().FS()._dr(100, 100, 500, 10)
		h.dr(100, 100, 500, 10)
		st.Gx().FS()._dr(500, 30)
	}
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
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments)
		h.cp() // ?
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
	cj.cir = function () {
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
	$Cir = function () {
		var g = G(arguments), o
		o = S(g.f) ?
		{c: g.f, x: g.s, y: g.t, r: g.fo} :
		{x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
	ct.dc = function (x, y, r, f, s, width, opt) {
		return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
	}
	ct.cir = function () {
		var h = this.h()
		return h.cir.apply(h, arguments)
	}
	ct.circle = function (x, y, rad, color) {
		this.A(cjs.cir(x, y, rad, color))
		return this
	}
	ct.cir = function () {
		var ct = this, g = G(arguments), h = this.h(), o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
				{r: g.f, c: g.s}
		h.c(o.c)
		h._dc(o.x, o.y, o.r)
		return h
	}
	CIR5 = HCR = function () {
		$St()
		gx = $Gx()
		$Sh(gx).XY(300, 100).a2(st)
		gx._f('p')._s('w').ss(10)
				._dc(100).dc(100, 0, 100)
		gx._s('b')._f('g').dc(0, 300, 100)
		h = $Sh().f('b').s('y').lW(30)
				.cir(100, 100, 100).cir(400, 400, 40, 'r')
				.a2(st)
	}
	CIR6 = ROTCIRS = function () {
		ct = $Ct().a2($St(1000, '+')).A(
				$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
		)
		$t(function (e) {
			ct.rt(ct.rt() + 3)
		})
	}
	CIR8 = function () {
		$St()
		s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
				[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
		s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
	}
	CIR = function () {
		$Sh().a2($St(600)).f('r', 'y').lW(30)
				.dc(400, 400, 200)
				.dr(100, 0, 200, 200)
	}
	CIR1 = HDC = function () {
		$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
	}
	CJCIR = function () {
		ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
		h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
		ct.A(cjs.cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
	}
	CIR2 = function () {
		ct = $Ct().a2($St(600))
		ct.A(
				cjs.cir(100, 100).f('y').dc(0, 0, 4)
		)
		ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
		ct.A(cjs.cir(80, 300, 'g', 'y', 30))
	}
	CIR3 = CJSCIR = function () {
		ct = $Ct().a2($St(600))
		ct.A(
				cjs.cir(400, 300).f('r').dc(28, 40, 40)
		)
		_.in(2, function () {
			ct.A(
					cjs.cir(80, 300, 300, 'g', 'y', 30)
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
	CIR4 = DRG = GOB = function () {
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
		$s({
			body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'},
			canvas: {M: 20}
		})
		st = $St($.c(600, 300)[0])
		st.A($Tx('h.dc', '50px Arial', 'white').X(400))
		h = $H().a2(st)
		h.dc()
		h.dc(36)
		h.dc(18, 'o')
		h.dc(200, 100)
		h.dc(300, 100, 20, 'r')
		h.dc(300, 200, 20)
		//
		st2 = $St($.c(600, 300)[0]).t()
		st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
		st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
		//
		st1 = $St($.c(600, 300)[0]).t()
		st1.A($Tx('cjs.cir', '50px Arial', 'white').X(400))
		st1.A(cjs.cir(300, 'g'))
		st1.A(cjs.cir(140, 220, 20, 'o').dc())
		st1.A(cjs.cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
		st3.A(
				$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
		)
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
		st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
		st1.A(cjs.cir(300, 'g'))
		st1.A(cjs.cir(140, 220, 20, 'o').dc())
		st1.A(cjs.cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
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
		circ = cjs.cir(plX, plY, plR, 'yellow')
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
				ct.A(cjs.cir(10, 'z').XY(x, y))
			})
		})
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