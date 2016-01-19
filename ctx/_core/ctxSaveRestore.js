x.S = function () {
	this.save();
	return this
}

x.R = function () {
	this.restore();
	return this
}

x._ = x.temp = function (fn) {
	
	this.S();
	
	_.b(fn, this)();
	
	return this.R()
}
  
  