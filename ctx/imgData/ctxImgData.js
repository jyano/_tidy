x.cID = function(){
	var x = this
	return x.createImageData.apply(x, arguments)
	 
}

x.gID =  = function () {
	var x = this
	return x.getImageData.apply(x, arguments)
}

x.pID =   function () {
	var x = this
	x.putImageData .apply(x, arguments)
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