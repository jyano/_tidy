$a.delete('/user', function (q, p, nx) {
	User.remove(q.body, function (z, da) {
		if (!z) {
			p.send(da)
		}
		else {
			$l('z')
		}
	})
})

 