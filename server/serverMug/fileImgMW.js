$picByUser = function (user, fn) {
	$m.cutout.find({u: user}, fn)
}
$Mw.Pics = $Mw.P = function (q, p, nx) {
//$m.pic.find({u: q.I},
	//		function (z, pics) {
	//			p.l.I = _.m(pics, function () {return _S(pic._id) + pic.e})
	//			nx()
	//		})
	$picByUser(q.I, function (z, pics) {
		p.lc.images = p.lc.I = $arr(function (arr) {
			_.e(pics, function (pic) {
				arr.push(_S(pic._id) + pic.e)
			})
		})
		nx()
	})
}

$Mw.pic = $Mw.p = function (q, p, nx) {
	
	/*
	
	 $md.pic.findById(q.params.p,
	 function (z, i) {
	 if (z) {
	 n(z)
	 }
	 p.lc.image = p.lc.i = '/' + i._id
	 q.image = q.i = i
	 n()
	 })
	 */
	models.pic.findById(
			q.params.p,
			function (z, i) {
				if (z) {
					nx(z)
				}
				p.lc.i = '/' + i._id
				q.i = i
				nx()
			})
} 