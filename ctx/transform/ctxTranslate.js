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