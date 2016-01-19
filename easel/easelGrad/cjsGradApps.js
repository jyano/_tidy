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
 