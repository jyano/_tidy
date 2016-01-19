 
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