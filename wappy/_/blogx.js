BLOGX = function (u) {
	z()
	WAPNAV()
	format()
	s1(h1('user ' + u + ' blog'))
	
	$.get('/pstu', {u: u}, function (i) {
	
		blp(i, s2, '+')
		
	}, '+')
} 