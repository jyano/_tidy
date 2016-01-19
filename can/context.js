x = ctx = CanvasRenderingContext2D.prototype
$.fn.ctx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).cx()
}
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
  ctxCan()
  function ctxCan(){
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
  }