$a.post('/user/unIsAvail', function (q, p) {
	User.findOne({un: q.body.un}, function (z, user) {
		p.send(user ? false : q.body.un)
	})
})
$a.post('/un', function (q, p) {
	$l('un')
	un = q.body.un
	$l('un: ' + un)
	q.session.un = un
	q.session.save(function () {
		$l('q.session: ' + q.session)
		p.send(q.session)
	})
})