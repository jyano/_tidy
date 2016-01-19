


$a.post('/cutout', function (q, p) {// CREATE NEW CUTOUT
	Cutout.create({
		un: q.session.un,
		dU: q.body.dU
		//, /dats: q.body.dats, data: q.body.d
		// ,physicsData: q.body.dats
	}, function(x, da){p.send(da)})
	
})




$a.get('/cutouts', function (q, p) {//FIND ALL// good: $findAllP('cutout', p)
	Cutout.find(function (x, da) {p.send(da)})
})

$a.get('/cutout', function (q, p) {
//FIND MY
	Cutout.find({un: q.un}, function (x, da) {
		p.send(da)
	})
})



// DELETE

$a.del('/cutout', function (q, p) {
	Cutout.remove(q.body, function (x, da) {
		p.send(da)
	})
})

// DATA
 