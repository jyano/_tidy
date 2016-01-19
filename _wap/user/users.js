USERSTABS = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
} 

USERSBOOT = function () {
	d = $.Ct().A(
			$.R(),
			$.h1('users'),
			$.d('y').id('ct')
					.A('users will go here via ajax in a moment...',
					$.br(2))
	).C('r')
	//i = 0
	$.G('users', function (u) {
		d.E();
		_.e(u, function (u) { //$l(u.username + '-' + i++)
			d.A(
					$.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2")
							.A($.user(u))
			)
		})
	})
}  