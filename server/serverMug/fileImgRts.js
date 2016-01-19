$a.get('/myFileImgs', //$w.user,
 function (q, p) {
	$l('myFileImgs')
	
	ImgFile.find(//{user: q.session.un},
			function (z, pics) {p.json(pics)})
}) 