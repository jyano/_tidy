$a.delete('/user', function (q, p) {
////delete user  
// does this('del') work like post or get (in terms of express)?
	User.remove(q.body, function (z, u) {
		if (!z) {
			p.send(q.body.un)
		}
		else {
			$l('z')
		}
	})
})
$a.de('/user', function (q, p) {
	Ur.rm(q.b, _json(p))
})

