AVATAR = function () {
	st = $.dragStage().t()
	//d = qq( st.ob.canvas )
	//d2=$.d().drg().w(500).h(500).c('o')
	//CT(d, st).o('$$',  sav(st,'avatar') )
	st.$$(function () {
		st.snap('avatar')
	})
	d = $.d('x', '+')
	$.Gj('img', function (i) {
		_.e(i, eachI)
	})
	//d2( st )
}