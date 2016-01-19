$.fn.selPic = function () {
	$('.pic').e(function () {
		$(this).C('b')
	})
	this.parent().C('y')
}
$mug = function (fn) {
	$.get('/getMug', fn)
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
 

