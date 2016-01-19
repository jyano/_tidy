O.Pl = function(a){
	return O(a) && !F(a) && !A(a)
}

$.fn.loadBind=function(fn){
	var q=this
	fn = _.b(fn, q)
	q.load(fn)
	return q
}


Im = function(){return new Image()}

_$Im = function () {
	return $(Im())
}

$Im = function () {
	var g = G(arguments), o
	
	var $i = _$Im()
	o = O.Pl(g.f) ? g.f :
			F(g.f) ? {fn: g.f} :
			{src: g.f, fn: g.s};
	o.fn = o.fn || function () {}
	
	o.fn = _.b(o.fn, $i)
	$i.loadBind(function (e) {
		o.fn(e.target, e)
	})
	
	if (o.src) {
		$i.sr(o.src)
	}
	return $i
}

$.i = $._i = $.img = function () {
	var $i = $Im.apply(null, arguments)
	$i.A()
	return $i
}

$.fn.src = $.fn.i = $.fn.sr = function (a) {var q=this


	return U(a)? q.attr('src')
			:q.attr('src', _.src(a))
}
_.ext = S.ext = function (a, b) {
	if (S(a)) {
		return S.ct(a, '.') ? a :
				S.eR(a, b || '.png')
	}
}
_.src = function (a) {
	if (_.iDU(a)) {
		return a
	}
	a = _.ext(a || '');
	return S.startsWith(a, '/') ? a : '/' + a
}
_.iDU = function (a) {
	return S(a) && a.length > 1000

//	return _.ct(a, 'data:')
//	return s$(a).contains('data:')
}

$imgResource = function(){
	
}

_.crs = function (a) {
	return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
//_.url = function (a) {alert('S.url'); return 'url("' + a + '")'}
