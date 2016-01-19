 

$a.get('/user/session', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
	}
	else {
		ss.views = 1
	}
	p.send(ss)
})

$a.get('/user/ses', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
		p.setHeader('Content-Type', 'text/html')
		p.write('<p>views: ' + ss.views + '</p>')
		p.write('<p>expires in: ' + (ss.cookie.maxAge / 1000) + 's</p>')
		p.write(JSON.stringify(ss, null, '\t'))
		p.end()
	}
	else {
		ss.views = 1
		p.end('welcome to the session demo. refresh!')
	}
})
$a.get('/login', function (q, p) {
	p.send('fred')
}) 
$a.get('/user', function (q, p) {
	Ur.fi(p.daFn($user))
})

$a.get('/user/:un', function (q, p) {
	Ur.f1(
			q.un_(),
			p.daFn($user))
	p.j($user(user))
})

$user = function (o) {
	if (A(o)) {
		return _.m(o, $user)
	}
	return {
		id: o.id,
		un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status'
	}
}