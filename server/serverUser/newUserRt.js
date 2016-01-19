$a.post('/user', function (q, p, nx) {
	Ur.cr(q.b, function (z, user) {
		q.ss.un = user.un
		q.ss.sv(function () {
			p.js(user.un)
		})
	})
})

$a.post('/user/user', function (q, p, nx) {
	User.create(q.body, function (z, user) {
		if (z) {
			p.j('z');
			nx(z)
		}
		else {
			$l(user)
			var ss = q.ss = q.session
			// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
			//set session u=u.u (user name= user.username)
			q.ss.un = user.un //set session li=true (loggedIn=true)//q.ss.loggedIn = true
			//save ss and send back a json obj of username -so a string?
			//_.x(q.session, {un: u.un, loggedIn: true})
			q.ss.save(function () {
				p.json(ss)
			})
		}
	})
	//$l(z.code == 11000 ? '!!' : '!');//$d(z);
})