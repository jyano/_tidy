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
BOX00 = function () {
	$box()
	w.aAF(210, 210, [ V(-30, 0), V(0, -30), V(30, 0) ])
	w.aAF(120, 180, [ V(-30, 0), V(0, -30), V(30, 0) ])
	
	var i = 0
	
	_.ev(.2, function () {
		w.cCB(210, 0, 45).I(V(i++ % 2 ? 0.5 : -0.5, 0))
	})
}

BOX2D = function () {
	
	$canW()
	
	b2d.somePolyFixt = [[[-100, 0], [0, -100], [100, 0], [60, 50]]]
	b2d.compoundShape = [[50, 10], [60, 30, 0, 0, 40], [120, 30, 0, 0, 29], [60, 10, 0, 50, 60], [84, 10, 15, 80, -120]]
	b2d.compoundShape2 = [[50, 10], [20, 20], [20, 10, 0, 0, 10], [40, 10, 50, 0, 45], [84, 10, 15, 80, -120], [60, 10, 0, 50, 60]]
	b2d.compoundStar = [
		[10, 10], [20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	w.D(100, 100, b2d.somePolyFixt)
	w.D(200, 100, b2d.compoundShape)
	w.D(300, 100, b2d.compoundShape2)
	w.D(400, 100, b2d.compoundStar)
	w.S(200, 200, 'w', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [[20, 20, -100, 50, 60], [100, 120, 0, 0, 100], [100, 20], [10, 300]])
	w.D(400, 400, [['b', 30], ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.S(100, 200, 'w', 50, 50)
	w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	w.me(400, 200)
	w.me(400, 300)
	w.me(400, 400)
	//w.addTenBalls() ..not color yet
}


CUPS = function (o) {
	$canW(_.extend({g: 20}, o || {}))//.db()
	cup = [[20, 20], [100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80]]
	cup2 = [[100, 40, 0, 40, 0], ['g', 200, 40, -80, -40, 260], ['g', 200, 40, 80, -40, -80], [100]]
	cup3 = [[100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80], [34, -80, -130], [34, 80, -130]]
	w.B(280, 500, 'r', cup)
	b = w.B(280, 500, 'r', cup)
	w.B(600, 500, 'b', cup2)
	w.B(900, 500, 'y', cup3)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
//W.fluffy()
	w.db()
}
MAZE = function () {
	w = b2d.W()
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
	y = w.ship()
	w.grid(maze, 100, 200, 20, 30)
	w.S(400, 200, 10)
}
PINS = function () {
	w = b2d.W().db()//=SEPARATOR=COLORCONC
	pin = [['o', [-20, 20], [0, -80], [20, 20], [0, -40]], ['w', 8, 0, -75], ['w', 8, -20, 20], ['w', 8, 20, 20]]
	_.times(15, function (i) {
		w.B(100 + (i * 60), 300, pin)
	})
	w.ship()
}
SENSOR = function () {
	w = b2d.W().chalk(
			'box goes up on coll with vortex, and right AFTER',
			'ball goes up with continued pressure')
	y = w.ship()
	b = w.ball(100, 100, 40)
	x = w.box(50, 100, 60, 60)
	w.stat(1000, 200, b2d.circ(500).sensor(true)).K('vortex')
	moveX = function () {
		x.vY(-20)
	}
	moveB = function () {
		b.vY(-20)
	}
	// w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
	y.when('vortex', moveX, function () {
		x.vX(20)
	})      //this happens every RE-ENTRY into sensor (when)
	// w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
	y.while('vortex', moveB)
}
GUYINBED = function () {
	w = b2d.W()
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	w.B(400, 100, 'y', guyInBed)
	w.B(100, 100, 'r', [
		[guyInBed]
	])
	w.B(100, 100, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.B(400, 100, guyInBed)
}
COLSENCLAS = function () {
	w = b2d.W()
	b = w.B(300, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']]) //BEAUTIFUL !!!
	w.beg(function (cx) {
		if (cx.with('arm')) {
			b.I(50, 50)
		}
		if (cx.with('arm', w.right)) {
			w.C('w')
		}
	})
}
FDOT = function () {
	w = b2d.W()
	b1 = w.S(400, 400, 50)
	f1 = b1.fixt()
	f1.dot()
	b2 = w.S(800, 400, 80, 80)
	f2 = b2.fixt()
	f2.dot()
	f2.C('p')
	verts = [[-100, 0], [0, 100], [100, -20]]
	b = w.S(200, 200, [verts]).rot(25)
	f = b.fixt()
	w.S(400, 200, [f.verts()])
	w.S(600, 200, [f.verts('+')])
	v = f.wVerts()
	_.each(v, function (v) {
		w.dot(v)
	})
	//need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
	//its a VertsArr
	b = w.S(100, 500, 50, 50)
	f = b.fixt()
	fh = f.shp()
	h = b2d.polyH(100, 50)
	f.shp(h)
}
TESTPOLYF = function () {
	w = b2d.W();
	$l('testpolyf')
	w.S(700, 200, 'o', [
		b2d.circ(40),
		b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
		b2d.circ(10, 100, 100, '-'),
		['w', b2d.circ(10, 100, -100)],
		b2d.poly(10, 300, '-'), //sets as sensor
		['b', b2d.poly(300, 10)],
		['w', [100, 0], [150, -100], [200, 20]],
		[[200, 0], [250, -100], [300, 20], 'arr'],
		['p', 50, 'pink']])
	b = w.S(300, 400, 'r', [
		b2d.poly(200, 100),
		['g', b2d.circ(40, 100, 100).K('excited')],
		[5, 100, 200, 0, 'orgasmic excited']
	])
	//apparently b.fixt is LIFO
	f = b.fixt().K('happy').dot('b')
	$l('f is f: ' + f.is(f))
	$l('f is happy: ' + f.is('happy'))
	$l('f.next is excited: ' + f.next().is('excited'))
	$l('f is orgasmic: ' + f.is('orgasmic'))
	w.db()
}
MASS = function () {
	w = b2d.W({g: 0}).db()
	y = w.B(400, 200, 'y', 50).den(.1).lV(10)
	r = w.B(200, 500, 'r', 40).den(1)
	b = w.B(200, 500, 'b', 25).den(100)
	p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
}
BBOD = function () {
	w = $box()
	cir = w.dB(220, 60)
	cir.A($cF(60))
	b = w.dB(300, 400)
	b.CF($rF(100, 100))
	w.sB(500, 1000).CF($rF(1200, 100))
}
BR1 = BOXO = function () {
	$box()
	b = w.CB($sB(450, 500))
	b.CF($cF(10))
	b.CF($rF(10, 500, 0, 0, 50))
	_.in(function () {
		b1 = w.sB(320, 200)
		//small circle ()FOR REFERENCE:
		b1.CF($fD($cH(10)))
		// a few rectangle fixtures!:
		b1.CF($fD($pH().sAOB(400, 200, 90)))
		b1.CF($rF(400, 150, V(-300, 0), -30))
		b1.rF(300, 50, 300, 100, 30)
	})
}

BR2 = SAB = function () {
	$box()
	var b = w.D(100, 100)
	b.CF($fD($cH(40)))
	b.fD($pH().box(100, 100, 100, 200, 78))
	b = w.sB(500, 400)
	b.CF($fD($cH(4)))
	b.rF()
	b.rF(40)
	b.rF(200, 20)
	b.rF(200, 20, -10)
	b.rF(100, 400, 100, 0, 20)
}
BR3 = ASBOX = OBOX = function () {
//pH.sAB handles both box and oriented box!
	$box()
	w.dB(300, 100).fD($rH(300, 200, V(500, 200), 20))
	w.dB(500, 100).rF(300, 200, V(500, 200), 20)
	w.dB(300, 100).rF(200, 300)
	w.dR(900, 300, 300, 200)
}
BR4 = SABB = DYNREC = STATREC = function () {
	$box()
	//  dynamic rectangle
	w.dR(500, 0, 100, 50, 0, 200, 45)
	//  static rectangle
	w.sR(500, 0, 120, 150, 0, 200, 45)
	//pH.sAB handles both box and oriented box!
	w.sR(100, 100)
	w.sR(100, 200, 20)// rt
	w.sR(100, 300, 20, 20) //w, h (as box)
	w.sR(100, 370, 20, 20, 20) // w,h,r
	w.sR(100, 420, 20, 20, 20, 20)// w,h,x,y,rt
	w.sR(100, 500, 20, 20, 20, 20, 20)
}
BCIR = function () {
	$box()
	w.sB(350, 200).f($fD($cH(80), '-'))
	w.sB(150, 300).fD($cH(30))
	w.sB(450, 200).cir(80)
	w.dC_(700, 300, 100).stat().CF($cF(100, 60, 60))
}
BPOL = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	$box()
	w.aTri(120, 180).aTri(160, 210)
	_.ev(.4, function () {
		w.CB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.CF($fD($cH(45)))
		w.dB(210, 0).CF_($cF(15)).lV$()
	})
}
verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
TRI = function () {
	$box()
	//long way
	w.D(400, 400).CF($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	//w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	//w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.CF(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
SAAA = function () {
	$box()
	aH = $aH([-100, 0], [0, -100], [100, -20], [50, 20])
	//fD = $fD(aH)
//	w.D(150, 200).f(fD)
//	w.D(240, 300).f($fD($aH(verts)))
//	w.D(434, 400).f($aF((verts)))
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
BRAD = function () {
	$box()
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
	n = 1
	_.ev(1, function () {
		if (n < 300) {
			var b = w.D(350, 200).aV(2).lV(1, 1)
			R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
					b.fD($cH(n *= 1.3))
			$l('n:' + n)
		}
	})
}
LNV = function () {
	$box().G(0)
	_.t(10, function () {
		w.bal()
	})
	_.ev(3, function () {
		w.eB(function (b) {
			b.lV(V(0, 20))
		})
	})
	/*
	 b = w.box(400, 400, 200, 200).bS('me')
	
	 f = function () {
	 b.I(0, -400, b.GetWorldPoint(b2d.V(100 / 30, -100 / 30)))
	 }
	 f2 = function () {
	 cjs.tick(f)
	 }
	
	
	
	 W().box(400, 400, 200, 200).bS('me')
	 _.in(2,function(){
	 $t(function () {
	 b.lV(V(-1, -1))
	 })
	 })
	 w.p('thrust')
	 */
}
FSEL = function () {
	n = 0
	box(function () {
		//$l('tick-'+ n++)
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	w.mouse = {x: 0, y: 0}
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.click(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.mouse = mouse
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
		if (w.mj) {
			var targ = w.mj.targ()
			$l('mouse joint target: ' + targ.x + ', ' + targ.y)
			w.mj.targ(mouseX, mouseY)
		}
		else {
			$l('no mouse joint')
		}
	})
	w.G(0)
	b = w.circle(420, 400, 150)
	w.circle(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
			mj.frq(120)
			mj.dmpRat(.01)
			mj.mxFo(100000)
			fq = mj.frq()
			$l(fq)
			w.mj = mj
		})
		return false
	})
	cv.dblclick(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f) {
			f.B().kill()
		})
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		mouseX = mouse.x
		mouseY = mouse.y
	})
	cv.mouseup(function () {
		w.DestroyJoint(w.mj)
		w.mj = null
	})
}
FSEL0 = function () {
	box0(function () {
		if (w.mj) {
			$l('yes')
		} else {
			$l('no')
		}
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
	})
	w.circleStat(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	n = 0
	w.qPoint(300, 400, function (f, b, w) {
		$l("hit" + n++)
		//b.kill()
		//	w.mj = w.mJ(b, o.x, o.y)
		//return true
	})
}
SHS = function () {
	W().p()
	w.S(100, 100, [[10]])
	b = w.S(300, 400)
	//rectangle fixutre -- no color
	b.rect(40, 40)
	//circle fixture -- no color
	b.f($cF(100, 100, 100))
	b = $eM.fixts().stat()
	_.in(1, function () {
		b.dyn()
	})
	/*
	 $l('circle is 0, poly is 1.. ill prove it..')
	 fs = b.fs()
	
	 _.ev(3, function () {
	
	 if (f = fs.pop()) {$l('shape type: ' + f.H().m_type)
	 f.rm()
	
	 }})
	 */
	_.in(3, function () {
		b1 = w.A($dB(300, 200))
		b1.f($cF(100).de(1).re(1))
		b1.aV(3)
		//b.cirB(40)
	})
}
FXT = MAS = function () {
	W()
	w.D(800, 400, [
		$cF(20),
		$cF(5).bits(1, 2), //cat is 1, but will only collide with 2's
		$cF(10, 100, 100, '-'),
		$cF(10, 100, -100),
		$pF(10, 300, '-'), //sets as sensor
		$pF(300, 10)
	])
	r = w.BALL(200, 200, 50, 'r').rsM()
	b = w.BALL(200, 200, 50, 'b')
	b.f().de(1)
	y = w.BALL(200, 200, 50, 'y')
	y.f().de(1)
	y.rsM()
	p = w.BALL(200, 200, 50, 'p')
	p.f().de(10000)
	p.rsM()
	function grows() {
		rad = 10
		x = 400
		y = 440
		v = {x: 0, y: 0}
		//mouse joints messed up
		w.bump(400, 300, 40)
		w.bump(290, 350, 40)
		w.bump(280, 220, 40)
		addBody()
		$t(function () {//destroyAndAddBody
			b.destroyFixture(
					b.f()
			)//b.destroyFixture(fixture)
			rad += .1
			x = b.X();
			y = b.Y();
			v = b.lV()
			addBody()
		})
		function addBody() {
			b = w.A($dB(x, y).lV(v), $cF(rad))
		}
	}
	
	_.in(2, grows)
}
SENSORCONTROL = function () {
	W({g: 3})
	w.S(300, 300, 'o', [[40, 40, '-']])
	w.S(540, 300, 'o', [[40, 40, '-']])
	w.S(780, 300, 'o', [[40, 40, '-']])
	y = w.ship(300, 100).linDamp(2)
	aCo = w.acc(1000, -1000)
	w.beg(function () {
		aCo.body(y)
	})
	w.end(function () {
		aCo.remove(y)
	})
	//  The easiest approach to utilize the controllers is to create sensor fixtures
	// that test when a begin/end  event has occurred with a body.
	// In the beginContact method, add the body to the controller.
	// In the endContact method, remove the body.
}
CLASSES = function () {
	w = b2d.W()
	b = w.ball(100, 100, 50)
	b1 = w.ball(100, 200, 40)
}
MESSAGEPASSING = function () {
	w = b2d.W()
	b = ball(100, 100, 50)
	b1 = ball(100, 200, 40)
}
UNION = function () {
	w = b2d.W()
	b = w.brick(300, 300, 50, 50)
	b2 = w.brick(320, 320, 50, 50)
	_.times(20, function () {
		u = b2d.conc(
				Math.poly(b.V()).union(Math.poly(b2.V())).verts()
		).XY(300, 100)
	})
}
BOOTBALL = function () {
	W({g: 0})
	b = w.B(270, 500, 'o', 40).rest(.5)
	r = w.S(300, 300, 'g', 100, 20).rot(20)
	r.fixt(b2d.poly(20, 40, 60, -20))
	r.XY(200, 500).den(.1).damp(1000, 1000).rot(100).dyn()//.angVel(200)
	r.rev(w.B(200, 500, 'w', 20).damp(1000, 1000).den(100))
	cjs.tick(function () {
		b.F(0, 20)
	})
}
ULTMJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'})
	w.B(300, 400, 'r', 50, 50);
	w.B(800, 400, 'r', 50, 50);
	w.B(1200, 400, 'r', 50, 50);
	w.B(1600, 400, 'y', 100, 100).K('m')
	y = w.ship().track()
}
WORLDS = function () {
	W()
	w.bal(300, 400, 30)
}
STAIRS = function () {
	w = b2d.W()
	w.S(0, 0, [
		[500, 500, 600, 100],
		[500, 400, 500, 100],
		[500, 300, 500, 100],
		[500, 350, 450, 100],
		[320, 400, 50, 600]])
}
NAMESPACE = function () {
// w.B(200,200,b2d.fixts('tri3'))
//w.B(200,200,b2d.fixts('c50'))
	b2d.fixts = {}
	b2d.fixts.tri3 = [[-100, 0], [0, -50], [400, 0]]
	b2d.fixts.c50 = [50]
}
FRICKY = function () {
	w = b2d.W()
	b2d.fricky = [[10, 10], [20, 40, 0, 0, 90, [1, 0, 0]], [20, 40, 0, 0, 180, [1, 0, 0]]]
	b2d.bouncy = [[10, 10], [20, 40, 0, 0, 90, [1, .9, 1]], [20, 40, 0, 0, 180, [1, .9, 1]]]
	b2d.massy = [[10, 10], [20, 40, 0, 0, 90, [2, .5, 1]], [20, 40, 0, 0, 180, [2, .5, 1]]]
	b2d.fluffy = [[10, 10], [20, 40, 0, 0, 90, [.1, .5, .1]], [20, 40, 0, 0, 180, [.1, .5, .1]]]
	w.S(600, 100, b2d.fricky)
	w.S(700, 100, b2d.bouncy)
	w.S(800, 100, b2d.massy)
	w.S(900, 100, b2d.fluffy)
}
BOX1 = function () {
	$box()
	world = w
	var fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(7, 7);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(4, 6);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	bodyDef.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fixDef.shape = new b2CircleShape(1.5); //circle shape
		bodyDef.position.Set(7, 0);
		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0),
				body.GetWorldCenter()); //Push the shape slightly
	}, 100);
}
BX0 = COUNT = function () {
	$box()
	$l('bod count : ' + w.numBods())
	cF = $cF(50)
	b = w.cB($bD())
	b.cF(cF)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
BOXW1 = function () {
	$box()
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
MAZE = BXD = function () {
	$box()
	w.grid(maze, 100, 200, 20, 30)
	w.bump(400, 200, 10)
	b = w.D(200, 100)
	b.f($fD($cH(100, 200)))
	b.f($fD($pH(100, 200)))
}
FPAR = DICK = BED = function () {
	y = W().ship()
	w.A($dB(300, 300), guyInBed) // have to fix w.dyn
	w.D(100, 100, b2d.fxPar(guyInBed))
	w.D(400, 300, b2d.fxPar(dick)
	)
	w.D(400, 300, dick)
}
DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	W()
	r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
	r2 = w.BRICK(300, 300, 400, 10, 'o')
	r3 = w.BRICK(300, 300, 400, 10, 'w')
	r4 = w.BRICK(300, 300, 400, 10, 'w')
	r5 = w.BRICK(300, 300, 400, 10, 'b')
	flipDen = function (r) {
		r.de(r.de() == 0 ? 1 : 0)
	}
	flipStage = function () {
		w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
	}
	flipStage()
	_.ev(5, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
}
DENSITY = DSY = function () {//nice it tells me den when i click on bods( /fxs ? )
	W({g: 0, W: 600, H: 500})
	b = w.ball(100, 100, 65).de(1)
	f = b.f()
	h = f.H()
	d = f.mD()
	m = f.mass()
	x = w.box(300, 200, 30, 50).de(1)
	_.in(1, function () {
		x.BOX(200, 30).de(1)
	})
	w.b$(function (fixture) {
		var b = this
		$l('')
		$l('---- MASS ----')
		$l('total mass: ' + b.GetMass().toFixed(3))
		b._m()
		$l('_')
		$l('')
	})
}
IMPR = function () {
	W({g: 0, w: 0}).Y()
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(-1000, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	s = $Sg(0, 0, 1200, 600)
	s1 = $Sg(1200, 0, 0, 600)
	lArr = 'the shape world transform'
	// nl = '2Vec2 — returns the hit fraction.'
	// You can use this to compute the contact point
	// p = (1 - lambda) segment.p1 + lambda segment.p2.
	// sg = ''//segment:b2Segment — returns the normal at the contact point.
	// If there is no intersection, the normal is not set.
	maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	s.TestSegment(lArr, nl, s1, maxLam)
	ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
}
BOX0 = function () {
	w = _$boxWorld()
	$l('bod count : ' + w.numBods())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	b = w.cB($dBD())
	b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
BOXW = function () {
	w = $_W().sDD(
			$dD($.c('z', 1800, 1500)))
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}
 