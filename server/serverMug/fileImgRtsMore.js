$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	$md.pic.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
	$md.pic.find(function (err, data) {
		res.json(data)
	})
})
//remove a pic
$a.delete('/pic', function (q, p) {
	Ml.rm(q.b, _json(p))
})
//get all pics(files) (everyone's)
$a.get('/pics', function (q, p) {
	Fl.fi(_json(p))
})
//remove a pic
$a.delete('/pic', function (q, p) {
	Fl.rm(req.body, function (err, data) {
		res.json(data)
	})
})
//get all pics(files) (everyone's)
$a.get('/pics', function (q, p) {
	Fl.fi(function (err, data) {
		res.json(data)
	})
})
//change to get pics?
//find all User's pics
$a.get('/myPics', $w.user, function (q, p) {
	Fl.fi({user: req.userId},
			function (err, pics) {
				res.json(pics)
			})
})
$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	Fl.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (q, p) {  //get all pics(files) (everyone's)
	Fl.find(function (err, data) {
		res.json(data)
	})
})
 