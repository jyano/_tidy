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
  