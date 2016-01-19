x.dI = function (){
	var g=G(arguments)
	g[0] = $(g[0])[0]
	this.drawImage.apply(this,g)
	return this
}

x.dISize=function(imgRsc, x,y,w,h){
	var x = this
	x.drawImage()
	return x
}

x.dIClip = function(img, srcX, srcY, srcW,srcH, x,y,w,h){
	
	
	var x = this,g=G(arguments),o
	
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





x._d = function (i, p2, p3, p4, p5) {var x = this, g = G(arguments), o
	o={}
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


	if (g[0] == x) {g[0] = g[0].cv()}
	
	o.x=g[1] = N(g[1], 0)

	o.y=g[2] = N(g[2], 0)
	
	x.dI.apply(x, g)
	
	return x
}







x.d = function (i, p2, p3, p4, p5) {var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	
	
	if (S(o.i)) {
		if (O(window['Q']) && Q.ran) {o.i = Q.i(o.i)}
		
		
		else {
			$.i(g[0], function (i) {
				x._d(i[0], p2, p3, p4, p5)
			})
			
			return this}
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