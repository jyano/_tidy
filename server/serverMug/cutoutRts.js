


$a.post('/cutout', function (q, p) {// CREATE NEW CUTOUT
	$cutout = function (q) {
		return {
			un: q.session.un,
			dU: q.body.dU
			//, /dats: q.body.dats, data: q.body.d
			// ,physicsData: q.body.dats
		}}
	Cutout.create($cutout(q), function(x, da){p.send(da)})
})



//FIND ALL



$a.get('/cutouts', function (q, p) {
	//find all   images on site 
	// good: $findAllP('cutout', p)
	Cutout.find(function (x, da) {p.send(da)})
})


//FIND MY
$a.get('/cutout', function (q, p) {
	//find 'my'  cutouts//      /img
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
 