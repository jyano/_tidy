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
		_userMug = mug
	})

}

MYMUG=function(){
	$.myMug(function(mg){
		$l(m =mg)
		i = new Image()
		$i = $(i)
		$i.A()
		i.src = mg
	})
}
CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug',
			{url: defaultMug},
			function () {
				z()
				TWEEN()
			})
} 

  