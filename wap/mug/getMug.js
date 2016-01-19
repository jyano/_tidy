$.myMug = function (fn) {
	$.get('/myMug', fn)
}
$mug = function (un, fn) {
	//make default un YOU (_username)
	$.get('/mugByUn/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
} 

