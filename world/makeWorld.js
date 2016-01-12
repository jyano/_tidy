$World = $W = _$W = $bW = $Wor = $boxWorld= function () {var g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ? {x: g.f, y: g.s, sleep: g.t} :
				N(g.f) ? {y: g.f, sleep: g.s} :
				{sl: g.f}
	
	o.x = N(o.x,0)
	o.y = N(o.y, 10)
	o.sleep = U(o.sleep || o.sleep) ? 
			true : false
	return new bx.W(o.x, o.y, o.sl)
}

$StepW = $box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
	box1 = function (fn) {
		w = $boxWorld()
		dD = $dD($.c('z', 1800, 1500))
		w.sDD(dD) //the_circle = new b2CircleDef()
		n = 0
		_.ev(.1, function () {
			if (F(fn)) {
				fn(n)
			}
			n++
			w.go(1 / 5, '+')
		})
	}
}
$BugW = function () {}
$MouseW = function () {}
$listenW = function () {}
$EaselW = function () {}
$WallW = function (o) {
	o = N(o) ? {g: o} : O(o) ? o : {}
	w = $W(o.g)
	var wd = o.W || 1200;
	var ht = o.H || 600
	if (o.z != false) {
		z()
	}
	w.$can = $.c('z', wd, ht).id('canvas')
	w.can = w.$can[0]
	w.ctx = w.can.getContext('2d')
	//
	$K()
	w.handle()
	w.startKilling()
	w.foot()
	w.st = w.stage = new cjs.Stage(w.can).A()
	//w.st.autoClear = false
	var ps = $(w.can)._getPosition()
	w.x = ps.x;
	w.y = ps.y
	w._mD = 0//=	_mouseIsDown
	w._mJ = 0//= _mouseJoint
	w.$u = function () {
		this.st.update();
		return this
	}
	_.sI(onInt, 1000 / 60)
	function onInt() {
		w.handleMJ()
		w.CF().St(1 / 60, 10, 10).$u().DDD()
		//runCb()
	}
	
	/*
	 function runCb() {
	 if (F(o.cb)) {
	 alert('see W.. o.cb');
	 o.cb()
	 }
	 }*/
	w.mSetup()
	tou()
	if (o.clear !== false) {
		dD = $dD(w.ctx, 30)
		dD.fl($dD.h + $dD.a + $dD.j + $dD.c + $dD.p)
		dD.fAl(.4).al(.9).l(300)
		w.sDD(dD)
	}
	_wa = o.w
	w.walls(o.w)
	return w
}
$KeysW = function () {
	$l('box world!')
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.W(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;//
	//w.H2 = w.HH = w.hH = w.H / 2;
	w.h_H = w.hH = w.h / w.H;
	w.W_w = w.Ww = w.W / w.w;
	w.w_W = w.wW = w.w / w.W;
	w.H_h = w.Hh = w.H / w.h;
	//zoom
	w._zoom = 1
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.maxZoom = w.mS = w.Ww > w.Hh ? w.Ww :
			w.Hh;
	//handling()
	//room()
	keys()
	$t(enterFrame)
	//mouse()
	//if (o.t !== 0) {w.trackeeSetup()}
	w.o = o //w.stats()
	return w
}
$SpazW = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new bx.W(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;//
	//w.H2 = w.HH = w.hH = w.H / 2;
	w.h_H = w.hH = w.h / w.H;
	w.W_w = w.Ww = w.W / w.w;
	w.w_W = w.wW = w.w / w.W;
	w.H_h = w.Hh = w.H / w.h;
	//zoom
	w._zoom = 1
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.maxZoom = w.mS = w.Ww > w.Hh ? w.Ww :
			w.Hh;
	//handling()
	//room()
	keys()
	$t(enterFrame)
	//mouse()
	//if (o.t !== 0) {w.trackeeSetup()}
	w.o = o //w.stats()
	return w
}
$ScrollW = W = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	dimensions()
	handling()
	//room()
	keys()
	mouse()
	T.t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}
function makeWorld() {
	getBodyAtMouse = function (mX, mY) {
		$l('getBodyAtMouse')
		return w.getBodyAtPoint(mX, mY)
	}
	handleJointsAlt = 0
	handleJoints = function () {
		
		//if mouse is dont.. make a new mouse joint, if there is none
		if (_mouseIsDown) {
			$l('mouseIsDown')
			if (_mouseJoint) {
				mj = _mouseJoint
				//  _mouseJoint.SetTarget(V(mX, mY))
			}
			else {
				_mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY))
			}
		}
		else {
			$l('mouseIsDown')
			if (_mouseJoint) {
				_mouseJoint.destroy();
				_mouseJoint = null
			}
		}
	}
	checkMouseDown = function () {
	}
	handleJoints2 = function () {// so far unchanged.. need to think
		if (_mouseIsDown && !_mouseJoint) {
			var b = getBodyAtMouse(mX, mY)
			bb = b
			if (b) {
				_mouseJoint = mouseJoint(b.awake(1))
			}
			else {
				bb.aI(10000, 10000)
			}
		}
		if (_mouseJoint) {
			if (_mouseIsDown) {
				
				// _mouseJoint.sT(mX,mY)
			}
			else {
				bb.aI(
						bbb.x() - MX,
						bbb.y() - MY
				)
				w.dJ(_mouseJoint)
				_mouseJoint = null
			}
		}
	}
	makeWallsPinball = function () {
		bii(10, 300, 20, 1200) //left
		bii(990, 300, 20, 1200)//right
		bii(300, 0, 3000, 20)//top
		// bii(300, 590, 3000, 20)//bottom
	}
	makeStage1 = function (X, Y, options) {
		canvas = c = $can(X, Y).a().bc('z')
		canvas.id('canvas')
		stage = s = SuperStage(canvas)
		T$.removeAllEventListeners()
		ctx = x = xx(canvas)
		stage.ob.autoClear = false
		if (options.bg) {
			stage.b(options.bg)
		}
	}
	setFixtures = function () {
		bD = $sB()
		fD = $fD().de(1).fr(.5).re(.8).H($pF())
	}
	makeShapeOnDblClk = function () {


//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world
		x.$$(function (x, y) {
			world.a(
					yn() ? DynamicBodyDef(x, y) : StaticBodyDef(x, y), fix()
			)
		})
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
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
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
function room() {
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
}
function dimensions() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
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
W = b2d.W = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	b2d.world = function (g, sleep) {     //b2d.wor =  W ???
		g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
		s = U(sleep) ? true : sleep
		var w = new b2d.World(g, sleep)
		w.SCALE = 1
		return w
	}
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	dimensions()
	handling()
	//room()
	keys()
	mouse()
	T.t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}