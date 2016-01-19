function justOldFun() {
	$.fn.drawMug = cv.me = function me(interval) {
		var cv = this
		//randomly draw my face
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (cv.drawMug.shouldDrawId) {
			clearInterval(that.drawMug.shouldDrawId)
			cv.drawMug.shouldDrawId = false
		}
		else {
			cv.drawMug.shouldDrawId = setInterval(function () {
				cv.draw(window.__mug || 'me', _.r(that.W() - 200),
						_.r(that.W() - 200))
			}, interval)
		}
		return cv
	}
	$.fn.drawMug.shouldDrawId = false
}