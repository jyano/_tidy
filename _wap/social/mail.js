$mailButton = btMail = function (message, user) {
	return $.button('mail',
			function () {
				$.post('/sMsg', {m: message.V(), to: user.u}
				)
			})
}
_toFr = function (to, fr) {
	return {to: to, fr: fr}
}
$toFr = function (q) {
	return __toFr(q.body.to, q.u)
}
$mail = function (to, from, txt) {
	return {to: to, from: from, text: txt}
}