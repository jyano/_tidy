x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sTf = x.sT = function () {
	this.setTransform.apply(this, arguments)
	return this
}
 