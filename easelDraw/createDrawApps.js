REC = function () {
	$St()
	h = st.Sh().dg()
	gx = h.graphics
	gx.FS()._dr()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	h.dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 30)
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
function grid(){
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