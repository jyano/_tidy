$a.post('/changeMug', function (q, p) {
	// could be a put?
	
	
	var ur = q.user
	
	ur.mug = q.body.dU
	
	ur.save(function(z,da){ p.send(da) })
	
})
