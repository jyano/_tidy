$.floatIp = function (t, fn) {
	var g = G(arguments), f
	f = $.f().K('text-center').C('o').fS(20)
			.dg().minW(200)
			.A($.sm(t), $.ip())
	if (F(fn)) {
		f.sm(fn)
	}
	return f
}