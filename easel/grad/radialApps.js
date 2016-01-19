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