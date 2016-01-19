$a.post('/dudes', function (q, p) {
	$l('dudes')
	$l(q.body)
	Dude.create(q.body, function (z, dude) {
		if (z) {
			$l('z')
		}
		else {
			$l(dude)
		}
	})
})
