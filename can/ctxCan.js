x.cv = x.cv0 = function () {
	return this.canvas
}

x.$cv = x.$ = function () {
	return $(this.cv())
}
x.dU = x.tDU = x.u = function () {
	return this.cv().toDataURL()
}
x.H = function () {
	return this.cv().height
}
x.W = function () {
	return this.cv().width
}
 