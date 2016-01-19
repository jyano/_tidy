SELECTED = function () {
	st = dragStage()
	st.wBm('coin', function (bm) {
		coin = bm;
		SL(coin)
		selected(bm)
	})
	st.wBm('sun', function (bm) {
		sun = bm;
		SL(bm)
		selected(bm)
	})
	TextAdder(st)
	st.wBm('me', function (bm) {
		me = bitmap = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		//rotateShake(bm)
		selected(bm)
		st.wBm('flame', function (bm) {
			flame = bm;
			SL(bm);
			selected(bm)
		})
		st.wBm('guy', function (bm) {
			guy = bm;
			SL(bm);
			selected(bm)
		})
	})
	theImagesDiv = $div().a().drg().c('y')
	loadImagesDiv()
	d = YellowDiv()
}