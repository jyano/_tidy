CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug',
	
			{url: defaultMug},
	
			function () {
				z()
				TWEEN()
			})
} 

  