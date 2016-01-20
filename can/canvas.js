$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
$.c = $.can = function (c, width, h, x, y) {
	var g = G(arguments), o, el
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	o.c = o.c || 'x'
	el = $('<canvas>')
	el.attr({width: o.w, height: o.h})
	el.C(o.c)
	if (N(o.x)) {
		el.abs(o.x, o.y)
	}
	if (g.p) {
		el.drag()
	}
	el.A().al(.8)
	el = $superCan(el)
	return el
}
$superCan = function (el) {
	//superCanvas =
	el = $(el) //to be called internally by $.c //works on FIRST canvas in jquery obj
	el.canvas = el[0]
	el.context = el.canvas.getContext('2d')
	//if (O(window['cjs'])) {el.stage = new cjs.Stage(el.canvas)}
	var cv = el
	_canBasic(el)
	_canIndex(el)
	return el
}
__C = function () {
	z();
	c = $.c('y').drag()
	x = c.ctx()
	return c
}
$.fn.drag = $.fn.drag || function () {
	return this
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
_canIndex = function (el) {
	_canDrawImg(el)
	_canGrad(el)
	_canEvents(el)
	_canShadow(el)
	_canPixel(el)
	_canText(el)
	_canTransform(el)
	_canDraw(el)
	//_canMug(el)
	return el
}
_canBasic = function (el) {
	el.cx = function () {
		return this[0].getContext('2d')
	}
	el.W = function (width) {
		var args = G(arguments)
		width = args[0]
		if (U(width)) {
			return this.attr('width')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('width', width)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.H = function (height) {
		var args = G(arguments)
		height = args[0]
		if (U(height)) {
			return this.attr('height')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('height', height)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.WH = function (w, h) {
		if (U(w)) {
			var width = this.W(),
					height = this.H()
			return {
				width: width, w: width,
				height: height, h: height
			}
		}
		h = h || w
		return this.W(w).H(h)
	}
	el.Z = function (d) {
		d = d || 5;
		return this.WH(d * 100, d * 100)
	}
	el.osL = el.offsetLeft = el.l = function (theOffset) {
		if (!theOffset) {
			return offsetLeft(x.q)
		}
		return parseInt(theOffset - x.offsetLeft())
	};
	//  el.ox=function(){return x.q.q.offset().left}
	el.osT = el.offsetTop = el.t = function (y) {
		if (!y) {
			return offsetTop(y.q)
		}
		;
		return parseInt(y - x.offsetTop())
	};
	//  el.oy=function(){return x.q.q.offset().top}
	el.img = $('<img>')
	el.cp = el.copy = function () {
		el.img.src(el.toDataURL())
		return el
	}
	el.ps = el.paste = function () {
		var g = G(arguments)
		if (!g.n) {
			el.clearRect()
		}
		if (g.p) {
			el.fit(el.img)
		}
		else {
			el.draw(el.img.src())
		}
	}
	el.S = el.save = function () {
		el.context.save()
		return el
	}
	el.R = el.restore = function () {
		el.context.restore()
		return el
	}
	el.al = el.globalAlpha = el.alpha = el.op = function (alpha) {
		//dont mix up with element/jquery alpha //maybe opacity for element and alpha for canvas?
		if (U(alpha)) {
			return this.context.globalAlpha
		}
		this.context.globalAlpha = alpha
		return this
	}
	return el
}
_canEvents = function (el) {
	el.$ = function (func) {
		el.click(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.$$ = function (func) {
		el.dblclick(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.over = el.MV = function (func) {
		el.mouseover(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.out = el.MO = function (func) {
		el.mouseout(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.enter = el.ME = function (func) {
		el.mouseenter(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.leave = el.ML = function (func) {
		el.mouseleave(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.up = el.MU = function (func) {
		el.mouseup(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.move = el.MM = function (func) {
		el.mousemove(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.down = el.MD = function (func) {
		el.mousedown(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	return el
}
_canDrawImg = function (el) {
	el.me = function me(n) {//randomly draw my face
		var g = G(arguments), n = g[0] || 200
		if (x.me.d) {
			clearInterval(x.me.d);
			x.me.d = false
		}
		else {
			x.me.d = I(function () {
				x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
			}, n)
		}
		return x
	}
	el.me.shouldDrawMeId = false
	el.mugX = function (m) {
		qP('/mug', {u: m}, function (m) {
			x.fit(m)
		})
		return x
	}
	el.tick = function () {
		var ctx = this.ctx()
		ctx.tick.apply(ctx, arguments)
		return this
	}
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//this just a simple proxy to drawImage // dont use?
	el.drawImage = el.dI = function () {
		var el = this, g = G(arguments)
		g[1] = N(g[1]) ? g[1] : 0
		g[2] = N(g[2]) ? g[2] : 0
		$(el)[0].getContext('2d').drawImage.apply(
				$(el)[0].getContext('2d'), g
		)
	}
	//this will create the image (from string), and then draw it
	el.dr = el.draw = function () {
		$l('el.dr')
		var el = this, g = G(arguments)
		$.i(g.f, function (i) {
			g[0] = i
			__g = g
			el.dI.apply(el, g)
		})
	}
	el.fit = function f(i, x, y) {
		var el = this//$l('fit: - el.W():' + el.W())
		i = i || 'me'
		x = x || 0
		y = y || 0
		el.draw(i, x, y, el.W(), el.H())
		//el.draw(img, X, Y, el.width(), el.height())
		return el
	}
	el.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.img(i, function (i) {
				that.draw(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	}
	//draw it where u say, but as if its reg point was its center
	el.drawRegCenter = el.dC2 = function f(i, x, y) {
		var that = this
		$.img(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
		return this
	}
	el.Cd = function (a, x, y) {
		var that = this
		a = a || 'me'
		x = x || 100
		y = y || 100
		$.img(a,
				function (img) {
					that.drawImage(
							img.src,
							x - img.W() / 2,
							y - img.H() / 2
					)
				})
	}
	return el
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
 
_canDraw = function (el) {
	_drawLine = function (el) {
		//draw line ( [x,y],[x,y] || x,y,x,y )
		//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
		//fresh start
		el.ln = el.line = function rc(p) {
			var args = G(arguments), p = args[0]
			if (N(args[0])) {
				el.begin(args[0], args[1])
				el.lineTo(args[2], args[3])
				el.stroke()
				return el
			}
			if (A(args[0]) && N(args[0][0])) {
				el.begin(args.f)
				_.e(args.r, function (p) {
					el.lineTo(p[0], p[1])
				})
				el.stroke()
				return el
			}
			if (AA(p)) {
				_.e(args,
						function (p) {
							el.line.apply(null, p)
						})
			}
			el.stroke()
			return el
		}
		el.fitEx = function () {
			this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
		}
		el.sun = function (a, b, s) {
			s = s || 1;
			this.rG([[a || 0, b || a || 0],
						s * 100, s * 500],
					{'y': 0, 1: tCl('p', 0)},
					600, 600)
		}
		el.ball = function (b) {
			b = b || {}
			var dir = b.d || false,
					px = b.x || 100, py = b.y || 100, rad = b.r || 100,
					per = b.p || Math.PI * 2,
					ss = $r('c', b.s),
					fs = $r('c', b.f),
					lw = D(b.l) ? b.l : 4
			return x.com(
					'b', ['a', px, py, rad, 0, per, dir],
					{f: fs, s: ss, w: lw}, 'f', 's')
		}
		el.pointInPath = el.pip = function (c, a, b) {
			return this.context.isPointInPath(a, b)
		}
		el.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.beginPath();
			this.moveTo(x, y);
			this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
		//normal prop (as methods)
		el.lW = el.lineWidth = function (w) {
			if (U(w)) {
				return el.context.lineWidth
			}
			el.context.lineWidth = w
			return el
		}
		el.lC = el.lineCap = function (w) {
			if (U(w)) {
				return el.context.lineCap
			}
			el.context.lineCap = w
			return el
		}
		el.lJ = el.lineJoin = function (w) {
			if (U(w)) {
				return el.context.lineJoin
			}
			el.context.lineJoin = w
			return el
		}
	}
	_canCurves = function (el) {
		el.arc = function (a, b, c, d, e, f, g) {
			el.context.arc(a, b, c, d, e, f, g)
			return el
		}
		el.arcTo = el.arc2 = function a2(X) {
			var g = G(arguments)
			if (A(X)) {
				return _a(a2(x), X)
			}
			this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
			this.stroke()
			return this
		}
		el.bezierCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return this
		}
		el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return el
		}
		el.curveTo = function (a, b, c, d, e, f, g) {
			if (N(e)) {
				return this.bezierCurveTo(a, b, c, d, e, f)
			}
			else return this.quadraticCurveTo(a, b, c, d, e, f, g)
		}
		el.cir = function (X, Y, R, fs, ss) {
			var g = G(arguments),
					X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
					fs = g[3],
					ss = g[4]
			el.bP()
			el.arc(X, Y, r, 0, 7, false)
			el.fS(fs)
			el.sS(ss)
			el.s().f()
			return el
		}
		el.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.ctx().strokeStyle = 'Red'
			this.ctx().beginPath();
			this.ctx().moveTo(x, y);
			this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
		return el
	}
	_drawLine(el)
	_canCurves(el);
	el.f = el.fS = el.fs = el.fill = function (c) {
		if (U(c)) {
			el.context.fill()
		}
		else {
			el.context.fillStyle = oO('c', c)
		}
		return el
	}
	el.s = el.stroke = el.sS = function (c) {
		var el = this
		if (U(c)) {
			el.context.stroke()
		}
		else {
			el.context.strokeStyle = oO('c', c)
		}
		return el
	}//ss
	el.fsl = function (fS, sS, l) {
		this.context.f(fS)
		if (sS) {
			this.context.s(sS)
		}
		if (N(l)) {
			this.context.l(l)
		}
		return this
	}
	el.cP = el.closePath = function () {
		el.context.closePath()
		return el
	}
	el.bP = el.beginPath = el.begin = function (x, y) {
		el.context.beginPath()
		if (N(x)) {
			el.moveTo(x, y)
		}
		if (A(x)) {
			el.moveTo(x[0], x[1])
		}
		return el
	}
	el.mT = el.moveTo = function (x, y) {
		el.context.moveTo(x, y)
		return el
	}
	el.lT = el.lineTo = function (x, y) {
		if (A(x)) {
			_.e(arguments,
					function (x) {
						el.lineTo(x[0], x[1])
					})
		}
		el.context.lineTo(x, y)
		return el
	}
	el.cl = el.clip = function () {
		el.context.clip()
		return el
	}
	el.fR = el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.fillRect(a, b, c, d)
		return this
	}
	el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		this.context.fillRect(a, b, c, d)
		return this
	}
	el.colorFillRect = el.cfr = function (a) {
		var args = G(arguments)
		this.save()
		this.fillStyle = a
		this.fillRect(0, 0, this.W(), this.H())
		this.restore()
		return this
	}
	el.roundRect = function (X, y, width, height, radius) {
		el = this.context
		el.beginPath()
		el.moveTo(X + radius, y);
		el.lineTo(X + width - radius, y);
		el.quadraticCurveTo(X + width, y, X + width, y + radius);
		el.lineTo(X + width, y + height - radius);
		el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
		el.lineTo(X + radius, y + height);
		el.quadraticCurveTo(X, y + height, X, y + height - radius);
		el.lineTo(X, y + radius);
		el.quadraticCurveTo(X, y, X + radius, y);
		el.closePath();
		el.fill()
		return el
	}
	el.roundRect.test = function () {
		el.roundRect(100, 100, 200, 400, 20)
	}
	//clear screen [+ fill with color || run fx]
	el.clr = el.clear = el.clearRect = function (a, b, c, d) {
		if (S(a)) {
			el.fillStyle(a);
			return el.fillRect()
		}
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.clearRect(a, b, c, d)
		// if(F(a)){a()}
		return el
	}
	el.hL = el.horizontalLine = el.lnh = function (X, Y, l) {
		var g = G(arguments), X = g[0], Y = g[1], l = g[2],
				X2 = g.p ? X + l : g.n ? X - l : l
		return x.ln(X, Y, X2, Y)
	}
	el.vL = el.verticalLine = el.lnv = function (X, Y, len) {
		var g = G(arguments),
				X = g[0],
				Y = g[1],
				len = g[2],
				Y2 = g.p ? Y + len
						: g.n ? Y - len
						: len
		return x.ln(X, Y, X, Y2)
	}
	return el
}
 
_canShadow = function (el) {
	el.shC = el.shdC = el.shadowColor = function (color) {
		if (U(color)) {
			return this.context.shadowColor
		}
		this.context.shadowColor = oO('c', color)
		return this
	}
	el.shB = el.shdB = el.shadowBlur = function (blurNumber) {
		if (U(blurNumber)) {
			return this.context.shadowBlur
		}
		this.context.shadowBlur = blurNumber
		return this
	}
	el.shX = el.shdX = el.shadowOffsetX = function (offsetX) {
		if (U(offsetX)) {
			return this.context.shadowOffsetX
		}
		this.context.shadowOffsetX = offsetX
		return this
	}
	el.shY = el.shdY = el.shadowOffsetY = function (offsetY) {
		if (U(offsetY)) {
			return this.context.shadowOffsetY
		}
		this.context.shadowOffsetY = offsetY
		return this
	}
	el.shd = el.shadow = function (color, x, y, num) {
		el.shadowColor(color)
		el.shadowOffsetX(x).shadowOffsetY(y)
		el.shadowBlur(num)
		return el
	}
	return el
}
_canText = function (el) {
	el.font = function (font) {
		this.context.font = HTML5.font(font)
		return this
	}
	el.strokeText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		this.context.strokeText(t, X, Y)
		return this
	}
	el.fillText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		if (g.p) {
			this.tx(t, X, Y, '-')
			this.tx(t, X, Y)
		}
		else this.context.fillText(t, X, Y)
		return this
	}
	el.measureText = el.measure = function (t) {
		return this.context.measureText(t)
	}
	el.textWidth = function (t) {
		return parseInt(this.measureText(t).width)
	}
	el.centerHorizontalText = function (text, height) {
		this.fillText(text,
				this.W() / 2 - this.textWidth(text) / 2,
				height
		)
		return this
	}
	return el
}
_canPixel = function (el) {
	el.gD = el.getData = function (x, y, w, h) {
		//historic.. dont delete ! data = x('G', X, Y, w, h).res
		var g = G(arguments),
				x = g[0] || 0,
				y = g[1] || 0,
				w = g[2] || this.W(),
				h = g[3] || this.H(),
				data = this.context.getImageData(x, y, w, h)
		// data.h = data.height
		// data.w = data.width
		// data.d = data.data
		return data
	}
	el.pD = el.putData = function (data, x, y) {
		x = x || 0
		y = y || 0
		this.context.putImageData(data, x, y)
		return this
	}
	el.gP = el.getPut = function (a, x, y) {
		var g = G(arguments),
				a = g[0],
				x = g[1],
				y = g[2],
				data = this.gD.apply(this.context, a)
		if (g.n) {
			this.clear()
		}
		return x.pD(data, x, y)
	}
	el.pixelsNegative = function () {
		var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1]
			data[i + 2] = 255 - data[i + 2]
			data[i + 3] = 255
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsInvert = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 225 - data[i];
			data[i + 1] = 225 - data[i + 1]
			data[i + 2] = 225 - data[i + 2]
		}
		this.pD(imgData)
	}
	el.pixelsGrayscale = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg
			data[i + 1] = avg
			data[i + 2] = avg
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsFade = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 7; i < _.size(data); i += 4) {
			data[i] = 90
		}
		this.pD(imgData)
		return el
	}
	return el
}
_canGlobComp = function (el) {
	el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
		if (U(compOp)) {
			return this.context.globalCompositeOperation
		}
		this.context.globalCompositeOperation = oO('g', compOp)
		return this
	}
	return el
}
_canTransform = function (el) {
	el.crop = function rc(x1, y1, x2, y2) {
		var el = this
		if (A(x1)) {
			return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
		}
		el.draw(
				el[0].toDataURL(),
				x1, y1, x2, y2,
				0, 0, this.W(), this.H()
		)
		return this
	}
	el.crop = function rc(x1, y1, x2, y2) {
		if (A(x1)) {
			return rc(
					x1[0], x1[1],
					x1[2] - x1[0],
					x1[3] - x1[1]
			)
		}
		this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
		return this
	}
	el.scaleImCen = function (img, s) {
		var w = this.W(), h = this.H(), s = s || 1
		this.draw(img,
				w * s / -2 + w / 2,
				h * s / -2 + h / 2//+ w/2
				,
				w * s,
				h * s)
	}
	el.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	el.scaleImCenSpiral = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	//give scale cos(rads), skew:sin(rads)  ??
	el.norm = function () {
		el.context.scale(this.W() / 10, this.H() / 10)
		return this
	}
	el.scale = el.sc = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.scale(X, Y)
	}
	el.translate = el.tr = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.translate(X, Y)
	}
	el.rotate = el.rt = function (r) {
		var g = G(arguments),
				r = g[0] || 1
		//r=pi(-6)*r
		//x.fr(0,0,1,1)
		//x({f:$r('c')
		x.x.rotate(r)
	}
	el.transform = el.tf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('t', a, c, e, b, d, f)
	}
	el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('st', a, c, e, b, d, f)
	}
	return el
}
function beta() {
	_canPat(el)
	_canPat = function (el) {
		el.pattern = el.createPattern = function (im, pat) {
			//im = im || $.img('me')[0]
			var pattern = this.context.createPattern(im, pat || 'repeat')
			return pattern
		}
		el.testPattern = function () {
			var that = this
			$.img('me', function (img) {
				var pattern = that.pattern(img[0], 'repeat')
				that.fillStyle(pattern).fillRect()
			})
		}
		return el
	}
}
$.fit = fit = function (a, b, c) {
	return $.canvas(c || 'r', b || 700, b || 700).A().fit(a || 'me')
}
 