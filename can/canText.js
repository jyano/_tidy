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
CANTEXT = function () {
	__C()
	x.t('hello', 100, 100)
}
CV19 = TEXTTX = function () {
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
}
CANNTX = function () {
	__C()
	x.setFont('Helsinki 23px')
	x.f('b').fillText('haffasfsf', 400, 500)
}
