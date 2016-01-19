REQUESTSX = function () {
	var c = CT(), d = dv('y', 800, 600)
	c(d(h1('Buddy requests'), br(),
			MB = _d().w(600).h(500)()).$$(function () {
				d.dg()
			}))
	$.G('/gRq', function (msgs) {
		_.e(msgs, function (ms) {
			MB(_d()(
					$.h6('from ' + ms.fr + ' on ' + msg.dt),
					$.h5(msg.m),
					$.bt('accept', function () {
						$.P('/yRq', {u: msg.fr})
					}), $.bt('deny'), $.hr()))
		})
	})
}
REQUESTSX = function () {
	var c = CT(), d = dv('y', 800, 600)
	c(d(h1('Buddy requests'), br(),
			MB = _d().w(600).h(500)()).$$(function () {
				d.drg()
			}))
	qG('/gRq', function (msgs) {
		_e(msgs, function (msg) {
			MB(_d()(
					h6('from ' + msg.fr + ' on ' + msg.dt),
					h5(msg.m),
					bt('accept', function () {
						qP('/yRq', {u: msg.fr})
					}), bt('deny'), hr()))
		})
	})
}