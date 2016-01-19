STATUS = function () {
	$.fm()
	s1.A(
			$.h1('status'),
			$.ip().id('statusInput'),
			$.bt('update', function () {
				$.P('status',
						{text: $('#statusInput').v()}, function () {
							$l('status updated')
						})
			}))
}
STATUS = function () {
	$.fm()
	s1.A(
			$.h1('status'),
			$.ip().id('statusInput'),
			$.bt('update', function () {
				$.P('status',
						{text: $('#statusInput').v()}, function () {
							$l('status updated')
						})
			}))
}
showStatus = stat = function (ur, dv) {
	$wSts(ur, function (sts) {
		dv($.h3('STATUS: ' + sts))
	})
}
STATUS = function () {
	$.fm()
	s1.A(
			$.h1('sts'),
			$.ip().id('stsInput'),
			$.bt('update', function () {
				sts = $('#stsInput').v()
				$.post('/sts', {text: sts}, function () {
					$l('sts updated')
				})
			})
	)
}
showStatus = stat = function (user, theDiv) {
	withStatus(user,
			function (status) {
				theDiv($.h3('STATUS: ' + status))
			})
}
STATUS = function () {
	$.format()
	s1.A(
			$.h1('status'),
			$.input().id('statusInput'),
			$.button('update', function () {
				status = $('#statusInput').val()
				$.post('/status', {text: status}, function () {
					$l('status updated')
				})
			})
	)
}
//api calls
withStatusX = wUSt = function (user, func) {//with first status?
	qG('/sts1',
			{u: user},
			function (status) {
				func(status.c)
			})
}
showStatus = stat = function (user, theDiv) {
	withStatus(user,
			function (status) {
				theDiv($.h3('STATUS: ' + status))
			})
}
STATUS = function () {
	$.format()
	s1.A(
			$.h1('status'),
			$.input().id('statusInput'),
			$.button('update', function () {
				status = $('#statusInput').val()
				$.post('/status', {text: status}, function () {
					$l('status updated')
				})
			})
	)
}

//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})

$.wStatus = function (user, fn) {
	$.get('sts1', {u: user},
			function (sts) {
				fn(sts.c)
			})
} //with first status?