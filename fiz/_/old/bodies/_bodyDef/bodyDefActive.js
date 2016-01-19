bD.SAc = function (ac) {
	this.active = ac;
	return this
}
bD.ac = function (ac) {
	return this.SAc(ac ? true : false)
}
bD.a1 = bD.mA = function () {
	return this.ac(1)
}
bD.a0 = function () {
	return this.ac(0)
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}