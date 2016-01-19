TESTMYMUG = function () {
	$.get('/myMug', function (da) {
		$.h1('in callback..').A()
		$.i(da).A().C('black').drag()
	})
}
TESTMYMUGUN = function (un) {
	un = un || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.g('/mugByUsername/' + un, function (da) {
		z()
		$.h1('in callback..').A()
		$.i(da).A().C('z').drag()
	})
}
//testDefaultMug = function () {$.i(defaultMug).A()}
TESTCHANGEMUG = function () {
	//it automatically changes your userMug to the defaultMug
	$.po('/changeMug', {url: defaultMug}, function () {
		z();
		TWEEN()
	})
}
$mugTest = function () {
	z();
	s = cjs.stage(800, 800).A()
	s.mug(function (mug) {
		m = mug
	})
}
MUGTX = function () {
	z()
	$.h1('testing myMug ...').A()
	$.get('/myMug', function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
MUGBYUNTX = function (username) {
	z()
	username = username || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.get('/mugByUsername/' + username, function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
DFMGTX = function () {
	z()
	$.i(defaultMug).A()
}
MUGTX = function () {
	z()
	$.h1('testing myMug ...').A()
	$.get('/myMug', function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
MUGBYUNTX = function (username) {
	z()
	username = username || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.get('/mugByUsername/' + username, function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
DFMGTX = function () {
	z()
	$.i(defaultMug).A()
}