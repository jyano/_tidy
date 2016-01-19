appInitRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}

onRdyFn = function () {
	if (window[_app = S.uC(_app)]) {
		window[_app]()
	}
}
logInUser = function (un) {
	k.em('id', un);
	k.em('joinRoom', _username)
	$.get('/myMug', function (mug) {
		__mug = mug
		//$l('going to home page..')
		Y('HomePage')
	})
}
userOnRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		__un = un
		__un ? logInUser(__un) : Y('GuestPage')
	
	})
} 