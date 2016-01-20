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
BCA= BIGCANAPP = BIGCANDEMOAPP = SHOWEDITATONEANDONLYGAMEDEVMEETUP = function () {
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
 