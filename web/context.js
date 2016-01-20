GCO = XORCX = GCOMP = SHADOW = DRI = DRAWIMAGE = function () {
	$s({
		bd: {C: 'o'},
		d: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		c: {outline: 'dashed yellow 20px'}
	})
	__C()
	$Im('chicks').ld(function () {
		x.dI(this, 100, 100)
		x.dI(this, 400, 100, 500, 200)
		x.xShadow = 3
		x.yShadow = 3
		x.shadowBlur = 10
		x.shadowStyle = 'red'
		x.r(188, 40, 200, 100).f('r')
				.shC('b').shB(20).shX(15).shY(15).f()
		Q(function () {
			x.d('me', 300, 300)
			//  x.sO(); x.dO()
			x.xo()
			c.$(function () {
				/*
				 cv.on('click', function (ev) {
				 x = ev.pageX
				 y = ev.pageY
				 cv.draw('me', x - 120, y - 150)
				 })
				 */
				var g = G(arguments), o
				o = {x: g.f, y: g.s}
				x.d('guy', o.x, o.y)
			})
		})
	})
}
CANGRAD = $$$CONTAINSFOURAPPS$$$ = function () {
	var GR11 = function () {
		var c = $.c('y').W(500).H(500)
		var x = c.gC()
		x.f(x.cLG(50, 0, 500, 100).cS([.2, 'o'], [.6, 'r'], [.8, 'g']))
		c.fr()
		//prev: x.fillStyle = x.cLG(50, 0, 500, 100).cS(.2, 'orange').cS(.6, 'red').cS(.8, 'green')
		//prev: c.fillRect()
		return $.d().A($.h1('lin rad ctx'), c)
	}
	var GR2 = function () {
		var c = $.c('y').W(500).H(500).drag()
		var x = c.gC()
		x.lg({
			cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
			x1: 50, x2: 500, y2: 100
		}).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100})
				.fr(300, 0, 300)
		return $.d().A(
				$.h1('ctx lG example')
				, c
		)
	}
	var Z2W = function () {
		var c = $.c('y').W(500).H(500).dg()
		var x = c.ctx()
		x = c.gC().lg({cS: {z: 0, w: 1}, x2: x.W(), y2: 0}).fr()
		return $.d().A($.h1('ctx lg black2white'), c)
	}
	var RGSAMP = function () {
		return $.d().A(
				$.h1('can rG sample'),
				$.c('y').W(500).H(500).drag().rGSample())
	}
	$s({
		$flexDiv: {dp: 'fl', wr: 'wr'}
	})
	var d = $.d().id('flexDiv')
	d.A(GR11(), GR2(), Z2W(), RGSAMP())
}
//can apps
CANS = THREECANS = FIT = CANFIT = CV4 = function () {
	c1 = $.can('r', 800, 400)
	c2 = $.can('b', 800, 400)
	c3 = $.can('X', 800, 400)
	c3.css('outline', '34px dotted green')
	_.in(2, function () {
		C1 = $.c('r', 200, 400)
		C2 = $.c('b', 50, 50)
		C4 = $.c('y', 100, 10)
		d = $.d().C('o')
		d.A(C1, C2, C4).css({
			'display': 'flex',
			'justify-items': 'center'
		})
		$('canvas').attr({
			width: 'auto', height: 'auto'
		}).css({
			width: 'auto', height: 'auto',
			'flex-grow': 1,
			'flex-shrink': 1
		})
		$('canvas').e(function () {
			$(this).ctx().jD('me')
		})
	})
	_.in(4, function () {
		c = __C();
		c.fit('me')
		m = $.c(800).fit('me')
		g = $.c('b', 600).fit('guy')
	})
}
CANSHAD = function () {
	c = $.c('b', 700)
	c.draw('me', 100, 100)
	c.shadowColor('y')
			.shadowBlur(100)
			.shadowOffsetX(300)
			.shadowOffsetY(100)
	c.draw('me', 200, 200)
	c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
	c.shadowColor('g')
	c.draw('me', 0, 300)
	c.shadow('p', 30, 200, 20)
	c.draw('guy', 400, 200)
	//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
	// c.roundRect(100,50,100,100,50).stroke()//.fill()
	_.in(function () {
		c.ctx().col('y').lW(30)
		c.line(10, 10, 50, 500).stroke()
		c.line([
			[[100, 100], [200, 200], [140, 900]]
			// ,  [[150,150],[250,250], [20,300]]
		]).stroke();
		//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
		//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()}
	})
}
XP2 = DRAWAPP = CV19 = TEXTTX = function () {
	__C()
	x.b('b', 'g', 30)
	x.T(100, 'Jason Yanofski', 10, 150)
	x.lg({
		x1: 0, y1: 0, x2: x.W(),
		y1: 0, cS: {m: 0, b: .5, r: 1}
	})
	x.T('Jason Yanofski', 10, 290, '-')
	function alt() {
		CV18 = TXTT = function () {
			__C()
			x.b('b', 'g', 30)
			x.T(100, 'Jason Yanofski', 10, 150)
			x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
			x.T('Jason Yanofski', 10, 290, '-')
		}
	}
	
	_.in(function () {
		x.t('hello', 100, 100)
	})
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(first)
	function first() {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(then)
	}
	
	function then() {
		x.S()
		x.tl(200, 200);
		draw()
		x.R()
		x.tl(20, 20);
		draw()
	}
}
PXXX = CANPOL = CVL = function () {
	__C()
	Q(['me'], function (q) {
		$.cx().d(Q.i('me')).pol(flatTri)
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
	CLD = CANVASQLOADER = function () {
		__C();
		$Ld(['me'], function (q) {
					me = q.get('me')
					c.drawImage(me, 100, 100)
					c.pD(c.gD(100, 100, 500, 500), 120, 120)
					c.f("red").fr(10, 10, 50, 50)
					imgData = c.gD(10, 10, 50, 50)
					c.pD(imgData, 10, 70)
				}
		)
	}
	CPX = PIXEL = function () {
		c = $.c();
		$Ld(['me'], function (ld) {
			me = ld.get('me')
			c.drawImage(me, 100, 100)
			d = c.gD(100, 100, 500, 500)
			c.pD(d, 120, 120)
			zeros = nums = 0
			_.e(d.data, function (d) {
				if (d == 0) {
					zeros++
				} else {
					nums++
				}
			})
			$l('zeros: ' + zeros + ' - nums: ' + nums)
		})
	}
	CP1 = PIXELTEST = function () {
		c = __C();
		$Ld(
				['me'], function (q) {
					me = q.get('me')
					c.drawImage(me, 100, 100)
					d = c.gD(100, 100, 500, 500)
					// c.pD(d , 120, 120 )
					zeros = 0
					nums = 0
					_.each(
							d.data, function (d) {
								if (d == 0) {
									zeros++
								} else {
									nums++
								}
							}
					)
					$l('zeros: ' + zeros + ' - nums: ' + nums)
				}
		)
	}
}
FAN = CV6 = function () {
	x = $.c('y', 1000, 800).A()
	_.in(function () {
		x.f('b').fillText('haffasfsf', 400, 500)
	})
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	guidewires = false
	dragging = false
	mousedown = {}
	loc = {}
	restoreDrawingSurface = function () {
	}
	updateRubberband = function (m) {
		x.ln(
				mousedown.x,
				mousedown.y,
				m.x,
				m.y
		)
	}
	drawGuidewires = function () {
	}
	x.MD(
			function (X, Y) {
				dragging = true
				mousedown = {x: X, y: Y}
			}
	)
	x.MM(
			function (X, Y) {
				if (dragging) {
					restoreDrawingSurface()
					updateRubberband({x: X, y: Y})
				}
				if (guidewires) {
					drawGuidewires(loc.x, loc.y)
				}
			}
	)
	x.MU(
			function (X, Y) {
				dragging = false
				restoreDrawingSurface()
				updateRubberband({x: X, y: Y})
			}
	)
}
RUB = function () {
	can = $.c('y', 1000, 800)
	can.$$(function () {
		can.fit('me')
	})
	can.fit('me')
	guidewires = false
	dragging = false
	mousedown = {}
	loc = {}
	rr = null
	data = null
	can.MD(function (x, y) {
		data = can.gD()
		dragging = true
		mousedown = {x: x, y: y}
	})
	can.MM(function (X, Y) {
		var m = {x: X, y: Y}, d = mousedown
		if (dragging) {
			can.pD(data)
			can.ln(d.x, d.y, d.x, m.y)
			can.ln(d.x, d.y, m.x, d.y)
			can.ln(m.x, m.y, m.x, d.y)
			can.ln(m.x, m.y, d.x, m.y)
		}
	})
	can.MU(function (X, Y) {
		dragging = false
		var d = mousedown, x1, x2, y1, y2
		if (X > d.x) {
			x1 = d.x;
			x2 = X
		} else {
			x1 = X;
			x2 = d.x
		}
		if (Y > d.y) {
			y1 = d.y;
			y2 = Y
		} else {
			y1 = Y;
			y2 = d.y
		}
		rr = [x1, y1, x2, y2]
		can.pD(data)
		can.crop(rr)
		//    data=can.gD()
	})
	RUB1 = function () {
		loc = {}
		rr = null
		guidewires = false
		dragging = false
		mousedown = {}
		data = null
		c = can = $.c('y', 1000, 800).fit('me')
		c.$$(function () {
			c.fit('me')
		})
		c.MD(
				function (x, y) {
					data = can.gD()
					dragging = true
					mousedown = {x: x, y: y}
				}
		)
		c.MM(
				function (X, Y) {
					var m = {x: X, y: Y},
							d = mousedown
					if (dragging) {
						can.pD(data)
						can.ln(d.x, d.y, d.x, m.y)
						can.ln(d.x, d.y, m.x, d.y)
						can.ln(m.x, m.y, m.x, d.y)
						can.ln(m.x, m.y, d.x, m.y)
					}
				}
		)
		c.MU(
				function (X, Y) {
					dragging = false
					var d = mousedown, x1, x2, y1, y2
					if (X > d.x) {
						x1 = d.x;
						x2 = X
					} else {
						x1 = X;
						x2 = d.x
					}
					if (Y > d.y) {
						y1 = d.y;
						y2 = Y
					} else {
						y1 = Y;
						y2 = d.y
					}
					rr = [x1, y1, x2, y2]
					can.pD(data)
					can.crop(rr)
					// data = can.gD()
				}
		)
	}
}
BCA = BIGCANAPP = BIGCANDEMOAPP = SHOWEDITATONEANDONLYGAMEDEVMEETUP = function () {
	var picHolder
	$.format()
	picHolder = $.sp().id('pics')
	s2.A(picHolder)
	var picHolder
	$.fm()
	s2.A(picHolder = $.sp().id('pics'))
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(
				function () {
					var mouse = $('#mouse')
					mouse.val('click')
					mouse.change()
					mug = img.d
				}
		)
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			x = canvas = $.c('yellow', 1000, 800)
	)
	setInterval(
			function () {
				//  x.bc()
			}, 10000
	)
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(function () {
			var mouse = $('#mouse')
			mouse.val('click')
			mouse.change()
			mug = img.d
		})
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			c = cv = x = canvas = $.c('y', 1000, 800))
	//  _.ev(10, function(){x.bc()})
	s1.A($.lb('mouse'),
			/*
			 $.scv('none','click','enter','leave','move').id('mouse').o(
			 function(s){
			 x.q.ub()
			 if(s=='click'){
			 x.$(function(X,Y){
			 x.Cd(mug,X,Y)
			 })}
			
			
			 if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})
			
			 x.MU(function(){x.q.ub('mousemove')})}
			
			
			 }),
			
			
			 */
			$.lb('global comp'),
			//scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt('SAVE(sv)', function () {
				x.sv()
			}), $.br(2),
			$.bt('CUT(dots)', function () {
				x.q.q.unbind()
				qi('mouse').v('none')
				x.dots()
			}), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				c.dr(
						$w['mug'] || 'me'
				)
			}), $.br(2),
			$.bt('dC:draw center', function () {
				cv.dC(window['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt('tictactoe',
					function () {
						x.ln(tictactoe)
					}), $.br(4),
			$.bt('sampLinGrad',
					function () {
						x.sampLinGrad()
					}), $.br(2),
			$.bt('sampRadGrad',
					function () {
						x.sampRadGrad()
					}), $.br(2),
			$.bt('ctxx',
					function () {
						xxx('barney')
					}), $.br(2),
			$.bt('bads',
					function () {
						bad(x, 200, 8)
					}), $.br(2),
			$.bt('coins',
					function () {
						coin(x, 200, 8)
					}), $.br(2)
	)
	s1(
			$.lb('mouse'),
			$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
					function (s) {
						x.q.ub()
						if (s == 'click') {
							x.$(
									function (X, Y) {
										x.Cd(mug, X, Y)
									}
							)
						}
						if (s == 'enter') {
							x.ME(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'leave') {
							x.ML(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'move') {
							x.MD(function () {
								x.MM(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							})
							x.MU(function () {
								x.q.ub('mousemove')
							})
						}
					}
			),
			$.lb('global comp'),
			$.sl.apply(this, V(oO('g'))).$(function (v) {
				x.gc(v)
			}),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt(
					'SAVE(sv)', function () {
						x.sv()
					}
			), $.br(2),
			$.bt(
					'CUT(dots)', function () {
						x.q.q.unbind()
						qi('mouse').v('none')
						x.dots()
					}
			), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				x.d($w['mug'] || 'me')
			}), $.br(2),
			$.bt('dC:draw center', function () {
				x.dC($w['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt(
					'tictactoe', function () {
						x.ln(tictactoe)
					}
			), $.br(4),
			$.bt(
					'sampLinGrad', function () {
						x.sampLinGrad()
					}
			),
			$.br(2),
			$.bt(
					'sampRadGrad', function () {
						x.sampRadGrad()
					}
			),
			$.br(2),
			$.bt(
					'xxx', function () {
						xxx('barney')
					}
			), $.br(2),
			$.bt(
					'bads', function () {
						bad(x, 200, 8)
					}
			), $.br(2),
			$.bt(
					'coins', function () {
						coin(x, 200, 8)
					}
			), $.br(2)
	)
}
x = ctx = CanvasRenderingContext2D.prototype
$.fn.ctx = $.fn.cx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).ctx()
}
x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
x._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}
// ctx canvas
x.cv = x.cv0 = function () {
	return this.canvas
}
x.$cv = x.$ = function () {
	return $(this.cv())
}
x.dU = x.tDU = x.u = function () {
	return this.cv().toDataURL()
}
x.H = function () {
	return this.cv().height
}
x.W = function () {
	return this.cv().width
}
//  color 
x.C = x.c = x.fS = x.f = x.fs = function (c, C, l) {
	var g = G(arguments)
	if (g.u) {
		this.fill()
		if (g.p) {
			this.s()
		}
		return this
	}
	this.fillStyle = oO('c', c)
	if (C) {
		this.C(C)
	}
	if (N(l)) {
		this.l(l)
	}
	return this
}
x.col = x.sC = x.sS = x.s = x.ss = function () {
	var g = G(arguments), o
	o = g.N_ ? {l: g.f} :
	{C: g.f, l: g.s}
	if (o.C) {
		this.strokeStyle = oO('c', o.C)
	}
	if (N(o.l)) {
		this.l(o.l)
	}
	this.stroke();
	if (g.p) {
		this.f()
	}
	return this
}
x.al = function (al) {
	this.globalAlpha = al;
	return this
}
x.pt = x.Pt = function () {
	return this.createPattern()
}
//  imgData
x.cID = function () {
	var x = this
	return x.createImageData.apply(x, arguments)
}
x.gID = function () {
	var x = this
	return x.getImageData.apply(x, arguments)
}
x.pID = function () {
	var x = this
	x.putImageData.apply(x, arguments)
	return x
}
x.cD = function () {
	this.cID()
	return this
}
x.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.gID(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
x.pD = function (d, x, y) {
	return this.pID(d, N(x, 0), N(y, 0))
}
//  shad 
x.shC = function (c) {
	this.shadowColor = oO('c', c)
	return this
}
x.shX = function (c) {
	this.shadowOffsetX = c
	return this
}
x.shY = function (c) {
	this.shadowOffsetY = c
	return this
}
x.shB = function (c) {
	this.shadowBlur = c
	return this
}
 

//  drawImg 
x.dI = function () {
	var g = G(arguments)
	g[0] = $(g[0])[0]
	this.drawImage.apply(this, g)
	return this
}
x.dISize = function (imgRsc, x, y, w, h) {
	var x = this
	x.drawImage()
	return x
}
x.dIClip = function (img, srcX, srcY, srcW, srcH, x, y, w, h) {
	var x = this, g = G(arguments), o
	o = {
		img: g.f,
		srcX: g.s, srcY: g.t,
		srcW: g.fo, srcH: g.fi,
		x: g.si, y: g.se,
		w: g.ei, h: g.ni
	}
	x.drawImage(o.srcX, o.srcY, o.srcW, o.srcH, o.x, o.y, o.w, o.h)
	return x
}
x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	o = {}
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'] && Q.ran)) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g.f, function (i) {
				x._d($(i)[0], g.s, g.t, g.fo, g.fi)
			})
		}
	}
	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	o.x = g[1] = N(g[1], 0)
	o.y = g[2] = N(g[2], 0)
	x.dI.apply(x, g)
	return x
}
x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	if (S(o.i)) {
		if (O(window['Q']) && Q.ran) {
			o.i = Q.i(o.i)
		}
		else {
			$.i(g[0], function (i) {
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}
x.dC = function f(i, x, y) {
	var that = this
	i = i || 'me'
	x = x || 100
	y = y || 100
	if (U(x)) {//draw img in center of can
		$.i(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
	}
	else {//draw it by specifying location of its center
		y = y || x
		$.i(i, function (i) {
			that.dr(i, x - i.W() / 2, y - i.H() / 2)
		})
	}
	return this
} //draw it where u say, but as if its reg point was its center
x.drawRegCenter = function f(i, x, y) {
	var that = this
	$.i(i, function (e, i) {
		that.draw(i[0],
				(that.W() / 2) - (i.W() / 2),
				(that.H() / 2) - (i.H() / 2))
	})
	return this
}
x.cr = function (x1, y1, x2, y2) {
	var ctx = this
	var cv = ctx.cv()
	var i = this.u()
	if (A(x1)) {
		return ctx.crop(
				x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
		)
	}
	ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
	return cv
}
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
}
x.jD = function (img, p1, p2, p3, p4) {
	var x = this, i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
 
//  globComp 
x.globalCompOp = x.o = x.op = x.cO = function (o) {
	this.globalCompositeOperation = o;
	return this
}
x.Ds = x.dO = function () {
	this.o('destination-out');
	return this
}
x.dS = function () {

// = x.dI CLASH WITH DRAWIMAGE
	return this.o('destination-in')
}
x.sD = x.sI = function () {
	this.o('source-in');
	return this
}
x.Sd = x.sO = function () {
	this.o('source-out');
	return this
} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
x.ds = x.dV = function () {
	this.o('destination-over');
	return this
}
x.SD = x.sT = x.sA = function () {
	this.o('source-atop');
	return this
}
x.DS = x.dT = x.dA = function () {
	this.o('destination-atop');
	return this
}
x.li = function () {
	this.o('lighter');
	return this
}
x.co = function () {
	this.o('copy');
	return this
}
x.xo = function () {
	this.o('xor');
	return this
}
  
//  text 
x.mL = function () {
} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
x.t = x.T = function () {
	var g = G(arguments), x = this, o, t
	o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
			S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
					g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
							S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
							{t: g.f, x: g.s, y: g.t}
	o.x = N(o.x, x.W() / 2)
	o.y = N(o.y, 200)
	if (o.c) {
		x.c(o.c, o.c)
	}
	if (o.f) {
		g.n ?
				x.F(o.f, '-') :
				x.F(o.f)
	}
	x.fillText(o.t, o.x, o.y)
	return x
}
x.tA = function () {
}
x.tB = x.Bl = function () {
}
x.F = function () {
	var g = G(arguments), o
	o = {f: g.f}
	if (g.N_) {
		o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
	}
	this.font = o.f
	return this
}
x.ft = x.fT = function (x, y, t) {
	var g = G(arguments)
	if (g.N_) {
		this.fillText(g.t, g.f, g.s)
	}
	else {
		this.fillText(g.t, x.W() / 2, 200)
	}
}
//  transform
x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sTf = x.sT = function () {
	this.setTransform.apply(this, arguments)
	return this
}
x.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
	this.translate(tX, tY)
	if (N(rt)) {
		this.rt(rt)
	}
	if (N(sX)) {
		this.sc(sX, sY)
	}
	return this
}
x.sX = function (x) {
	return this.sc(x, 1)
}
x.sY = function (y) {
	return this.sc(1, y)
}
x.sc = x.Z = function (x, y) {
	y = N(y, x)
	this.scale(x, y);
	//this.scale.apply(this, arguments)
	return this
}
x.rt = function (n) {
	this.rotate(M.tR(n));
	return this
}
  
//  gradradient
gr = xGr = CanvasGradient.prototype
gr.aCS = function (stopNum, color) {
	//= gr.add1CS
	var gr = this, g = G(arguments)
	gr.addColorStop(stopNum, oO('c', color))
	return gr
}
gr.cS = gr.stop = gr.s = gr.c = function (stop, color) {
	var gr = this, g = G(arguments)
	gr.cSOb = gr.stops = function (stopOb) {
		var gr = this, g = G(arguments)
		_.e(stopOb, function (v, k) {
			var o = S(v) ? {k: k, v: v} : {k: v, v: k}
			gr.aCS(o.k, $r('c', o.v))
		})
		return gr
	}
	if (A(g.f)) {
		g.e(function (cS) {
			gr.aCS(cS[0], cS[1])
		})
		return gr
	}
	return g.O ? gr.cSOb(g.f) :
			gr.aCS(g.f, g.s)
}
x.cLG = x.lG = function (x1, y1, x2, y2) {
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	x2 = N(x2, 0)
	y2 = N(y2, 0)
	//= x.lf = x.lGr
	return this.createLinearGradient(x1, y1, x2, y2)
}// = x.linGrad
x.lg = function () {
	var x = this,
			g = G(arguments), o, gr
	o = g.O ? g.f : N(g.t) ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x2: g.f, y2: g.s}
	gr = x.cLG(o.x1, o.y1, o.x2, o.y2)
	return o.cS ? x.c(gr.cS(o.cS)) :
			gr
}
x.cRG = x.rG = function (x0, y0, r0, x1, y1, r1) {
	// = x.radGrad =x.rf 
	x0 = N(x0, 0)
	y0 = N(y0, 0)
	r0 = N(r0, 0)
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	r1 = N(r1, 0)
	return this.createRadialGradient(x0, y0, r0, x1, y1, r1)
}

_canGrad = function (el) {
	el.cLG = el.lG = function (a, b, c, d) {
		// =el.linearGradient =  el.createLinearGradient
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		return this.gC().cLG(a, b, c, d)
	}
	el.cRG = el.rG = function rg() {
		//= el.radialGradient =el.createRadialGradient
		var g = G(arguments)
		g[0] = g[0] || 200
		g[1] = g[1] || 200
		g[2] = g[2] || 100
		g[3] = g[3] || 250
		g[4] = g[4] || 250
		g[5] = g[5] || 800
		return this.gC().cRG(g[0], g[1], g[2], g[3], g[4], g[5])
	}
	el.lGBlackToWhite = function () {
		var gr = this.cLG(0, 0, this.W(), 0)
		gr.stop(0, "black").stop(1, "white")
		this.fillStyle(gr)
		this.fillRect()
	}
	el.lGDiagnal = function (gr) {
		gr = gr || this.cLG()
		gr.stop(0, 'r')
		gr.stop(.1, 'r')
		gr.stop(.15, 'b')
		gr.stop(.2, 'r')
		gr.stop(.5, 'y')
		gr.stop(1, 'b')
		this.fillStyle(gr)
		this.fillRect()
		return this
	}
	el.rGSample = function () {
		var gr = this.cRG()
		gr.aCS(0, 'r')
		gr.aCS(.15, 'b')
		gr.aCS(.2, 'r')
		gr.aCS(.5, 'y')
		gr.aCS(1, 'b')
		this.fS(gr)
		this.fillRect()
		return this
	}
	el.growingSun = function () {
		var that = this
		var a = 0,
				b = 1000,
				gr
		var func = function () {
			a += 1
			b -= 2
			gr = that.cRG(200, 200, a, 290, 270, b)
			gr.aCS(.1, 'Yellow')
			gr.aCS(.3, 'Red')
			gr.aCS(1, 'Violet')
			//  gr = x.gr( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
			that.fillStyle(gr)
			that.fillRect()
		}
		setInterval(func, 100)
	}
	el.sun = function (a, b, s) {
		s = s || 1;
		this.rG(
				[[a || 0, b || a || 0], s * 100, s * 500],
				{'y': 0, 1: tCl('p', 0)},
				600,
				600
		)
	}
	el.ball = function (b) {
		b = b || {}
		var dir = b.d || false,
				px = b.x || 100, py = b.y || 100, rad = b.r || 100,
				per = b.p || Math.PI * 2,
				ss = $r('c', b.s),
				fs = $r('c', b.f),
				lw = D(b.l) ? b.l : 4
		return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
	}
	return el
}
//  draw paths
x.cP = x.x = x.cp = function () {
	this.closePath();
	return this
}
x.b = x.beg = x.bP = function () {
	var x = this, g = G(arguments)
	x.beginPath()
	if (g.u) {
		return x
	}
	if (g.N_) {
		x.mt(g.f, g.s)
		if (g.t) {
			x.C(g.t, g.fo, g.fi)
		}
	}
	else {
		x.C.apply(x, g)
	}
	return x
}
x.iP = x.ptInPth = function (x, y) {
	return this.isPointInPath(x, y)
}
x.mT = x.mt = function () {
	var x = this, g = G(arguments)
	if (g.A_ && A(g.f[0])) {
		x.mt.apply(x, g.f)
	}
	else if (g.A_) {
		x.mt(g.f[0], g.f[1])
		g.eR(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.moveTo(N(g.f, 0), N(g.s, 0))
		if (N(g.t)) {
			x.lt(g.t, g[3])
		}
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.lT = x.lt = function () {
	var g = G(arguments), x = this
	if (g.A_ && A(g.f[0])) {
		x.lt.apply(x, g.f)
	}
	else if (O(g.s)) {
		g.e(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.lineTo(g.f, g.s)
	}
	return g.n ? x.s() :
			g.p ? x.f() :
					g.m ? x.D() : x
}
//draw curves
x.ac = x.a = function () {
	var g = G(arguments), x = this,
			o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
			{r: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.rt1 = N(o.rt1, 0)
	o.rt2 = N(o.rt2, 360)
	o.ccw = g.n ? true : false
	this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.ac2 = x.arc2 = x.at = function () {
	var g = G(arguments), o
	o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
	this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.ac4 = x.quad = x.quadratic = x.qt = function () {
	this.quadraticCurveTo();
	return this
}
// lineProps 
x.l = x.lW = function (n) {
	var g = G(arguments)
	if (!g.n) {
		this.lineWidth = n;
		return this
	}
	return this.lt(g.f, g.s)
}
x.lC = function (c) {
	var g = G(arguments);
	if (c == 'r') {
		c = 'round'
	}
	else if (c == 'r') {
		c = 'square'
	}
	else if (c == 'b') {
		c = 'but'
	}
	this.lineCap = c
	return this
}
x.lJ = function (n) {
	var g = G(arguments);
	if (g.N) {
		this.lineJoin = n;
		return this
	}
}
x.clp = x.cl = function () {
	this.clip();
	return this
}
x.Mt = x._pol = function () {
	this.b()
	return this.mt.apply(this.arguments)
}
x.pol = function (vs, ox, oy) {
	var x = this, i
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
//  rectangles
x.r = function () {
	var ctx = this, g = G(arguments), o
	o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, ctx.W())
	o.h = N(o.h, ctx.H())
	ctx.rect(o.x, o.y, o.w, o.h)
	return ctx
}
x.r2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.fr = x.fR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x, o.y, o.w, o.h)
	return this
}
x.fr2 = x.fR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.sR = x.sr = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x, o.y, o.w, o.h)
	return this
}
x.sr2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.cR = x.clR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x, o.y, o.w, o.h)
	return this
}
x.cr2 = x.cR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
	var x = this
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
	_.e(_.r(vxs), function (vx) {
		x.lt(vx[0] + ox, vx[1] + oy);
	})
	x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
	if (hole) {
		x.fS("#ffffff")
	}
	x.cp().s().f()
}
XX7 = INVERSE = RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
	canvas = c
	_.in(function () {
		canvas.draw('sun', 0, 0)
		_.in(2, function () {
			pixels = canvas.gD(100, 100, 500, 500)
			canvas.pD(pixels, 100, 110)
			canvas.f("r").fr(10, 10, 50, 50)
			imgData = c.gD(10, 10, 50, 50)
			c.pD(imgData, 10, 70)
		})
	})
}
//  loader 
$.fn.ld = function () {
	var q = this
	q.load.apply(q, arguments)
	return q
}
 
x.dc = function (xx, y, rad) {
	var x = this
	x.ac(xx, y, N(rad, 0))
	return x
}
x.cir = function (xx, y, rad, fCol, sCol) {
	var x = this
	if (fCol) {
		x.fC(fCol)
		if (sCol) {
			x.sC(sCol)
		}
	}
	x.dc(xx, y, N(rad, 0))
	return x
}
x.cvC = function (c) {
	$(this.canvas).C(c)
	return this
}
CST = CLIPSTARS = function () {
	__C()
	Q(function (ld) {
		x.tl(75, 75).ac(60).clp()
		x.Star = function (r) {
			var ctx = this
			r = N(r, R(4, 2))
			ctx.b(r, 0, 'w') // first point drawn is the right most point
			_.t(9, function (i) {
				x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
			})
			return x.f()
		}
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75})
				.fr(-75, -75, 250)
		_.t(10, function () {
			x._(function () {
				x.tl(R(150, -75),
						R(150, -75)).Star()
			})
		})
	})
	// http://jsfiddle.net/shiyam/w63z4hs6/
	canvas = $.c().id('myCanvas')[0]
	var x = canvas.getContext('2d');
	var xx = canvas.width / 2;
	var y = canvas.height / 2;
	var clipx = canvas.width / 2;
	var clipy = canvas.height / 2;
	var radius = 75;
	var offset = 50;
	clipFunction();
	function clipFunction() {
		
		/*
		 * save() allows us to save the canvas context before
		 * defining the clipping region so that we can return
		 * to the default state later on
		 */
		x.save();
		x.beginPath();
		x.arc(clipx, clipy, radius, 0, 2 * Math.PI, false);
		x.clip();
		// draw blue circle inside clipping region
		x.beginPath();
		x.arc(xx - offset, y - offset, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'blue';
		x.fill();
		// draw yellow circle inside clipping region
		x.beginPath();
		x.arc(xx + offset, y, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'yellow';
		x.fill();
		// draw red circle inside clipping region
		x.beginPath();
		x.arc(xx, y + offset, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'red';
		x.fill();
		/*
		 * restore() restores the canvas context to its original state
		 * before we defined the clipping region
		 */
		x.restore();
		/*x.beginPath();
		 x.arc(x, y, radius, 0, 2 * Math.PI, false);
		 x.lineWidth = 10;
		 x.strokeStyle = 'blue';
		 x.stroke();*/
	}
	
	$("#myCanvas").on("mousedown", function () {
		$("#myCanvas").on("mousemove", function (e) {
			var mousePos = getMousePos(canvas, e);
			clipx = mousePos.x;
			clipy = mousePos.y;
			clipFunction();
		});
	});
	$("#myCanvas").on("mouseup", function () {
		$("#myCanvas").off("mousemove");
	});
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}
}
FIDL = function () {
//http://jsfiddle.net/jimrhoskins/dDUC3/1/
	__C()
	// Create an image element
	img = Im()
	img.onload = function () {
		x.S()
		x.fR(0, 0, 250, 100)
		x.sTf(3, 2, -2, 1, 400, 10)
				.f('r').fR(0, 0, 250, 100)
		x.sTf(1, .5, -.5, 1, 30, 10)
				.f('b').fR(0, 0, 250, 100)
		x.R()
		x.S()	// Save the state, so we can undo the clipping
		x.b()
		x.mt([[10, 10], [100, 30], [180, 10], [200, 60]])
				.ac2(160, 70, 120, 0, 10)
				.lt([200, 180], [100, 150], [70, 180], [[20, 130], [50, 70]])
				.cP()
		x.clp().d(img)
		x.R()	// Undo the clipping
	}
	img.src = "http://i.imgur.com/gwlPu.jpg"
}

