  


$a.get('/myMug', function (q, p) {// $l('q.b: ' + q.b); $l('q.un: ' + q.un)
	$myUn = function (q) {
		return {un: q.session.un}
	}
	
	User.findOne($myUn(q), function (z, u) {
		//$l('in findOne callback'); $l('da: ' + da)
		p.send(u.mug)
	})
})

$a.get('/mugByUsername/:un', function (q, p) {
	//$l('q.params.un: ' + q.params.un)
	User.findOne({un: q.params.un}, function (z, u) {
		p.send(u.mug)
	})
})
 
  
 