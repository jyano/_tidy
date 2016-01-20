$.fn.fitMug = $.fn.mug = function (ur) {
	var cv = this
	$.post('/mug', {u: ur}, function (mug) {
		cv.fit(mug)
	})
	return cv
}  
