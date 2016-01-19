x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sT = x.sTf = function () {
	this.setTransform.apply(this, arguments)
	return this
}
 