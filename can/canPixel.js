CV29 = PXXX = CANPOL = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
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
CANXOR = CANGLOBALCOMP = function () {
	cv = $.c('u', 1000, 800)
	cv.draw('me', 100, 100)
	cv.draw('me', 200, 200)
	cv.draw('me', 300, 300)
	_.in(2, function () {
		cv.globalCompositionOperation('xor')
		cv.on('click', function (ev) {
			x = ev.pageX
			y = ev.pageY
			cv.draw('me', x - 120, y - 150)
		})
	})
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
CVL = function () {
	__C()
	Q(['me'], function (q) {
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}
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
		// c.pD(d , 120, 120 )
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