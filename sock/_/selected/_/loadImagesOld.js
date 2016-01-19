loadImagesDivOld = function () {
	theImagesDiv.E()
	eaI(function (img) {
		theImagesDiv(
				$imageSizeFuncCan(
						img.d, 1, function () {
							st.wBm(img.d, function (bm) {
								SL(bm.sxy(.4));
								bm.rgc('+');
								selected(bm)
							})
						})
		)
	})
}