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

	$.i(defaultMug)
	
	$.myMug(function(mg){
		$l(m =mg)
		$.i(mg)
		i = new Image()
		$i = $(i)
		$i.A()
		i.src = mg
	})
	
	$.bt('CHANGEMUGTX', function () {
		//it automatically changes your userMug to the defaultMug
		$.post('/changeMug',
				{dU: defaultMug},
				function () {
					 $l("ffg")
					//TWEEN()
				})
	})
}
 
SETMUG=function(){

Q(function(){
	me= Q.get('me')
	x=$.c().ctx()
	x.d( me, 0,0 )
	_.in(function(){
		dU = x.dU()
		$l(dU)
	})
	
	
})

	
}

  