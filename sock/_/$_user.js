$.user = function (u) {
	var userA = $.a('', function () {
		window.location = '/wap/user/' + u.username
	}).K('thumbnail')
	userA.A(
			$.i(u.mug || defaultMug),
			$.h4(u.username),
			$.h5('status: ' + u.status),
			$.bt('X', function () {
			}),
			$.bt('be me', function () {
			})
	)
	return userA
}