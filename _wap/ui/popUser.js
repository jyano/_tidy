Y.popUser = Y.uPop = function (un) {
	if (!un) {
		return $('.pop').$(function () {
			k.em('pop', {t: $('.pt').v, b: $('.pb').v})
		})
	}
	$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
		d = $.d()
		dv.A(
				$.br(),
				$.hr(),
				$.h3('User: ' + un), $.br(),
				$.c(300).fit(mug),
				d = $.d(),
				msg = $.ta().C('w', 'z'),
				$.btMail(msg, un),
				$.btCh(un, msg),
				$.bt('fullPf', function () {
					Y.loc('/wap/profiles/' + un)
				})
		)
		$.w(dv)
		$.sts(un, d);
		$.pf(un, d)
	})
}
 