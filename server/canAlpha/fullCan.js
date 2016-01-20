CV25 = FULLCAN1 = function () {
	$('html').css({
		height: '100%'//, of:'h'
	})
	$('body').css({
		margin: 0,
		//g:0,
		height: '100%'
	})
	var s = 'Click or tap the screen to start the game',
			fo = 'bold 16px Arial',
			x = $.c('p',
					$('body').W(),
					$('body').H()
			).A()
	//
	// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
	$.i('me', function (image) {
		image = $(image.target)
		var origW = image.W()
		image.W(Math.round((50 * $('body').W()) / 100))
		image.H(Math.round((image.W() * image.H() ) / origW))
		x.draw(
				image,
				x.W() / 2 - image.W() / 2,
				x.H() / 2 - image.H() / 2
		)
	})
}
CV11 = FULLCAN = function () {
	$('html').css(
			{
				height: '100%'//, of:'h'
			}
	)
	$('body').css(
			{
				margin: 0,
				//g:0,
				height: '100%'
			}
	)
	var s = 'Click or tap the screen to start the game',
			fo = 'bold 16px Arial',
			x = $.c('pink', $('body').W(), $('body').H()).A()
	// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
	$.i(
			'me', function (image) {
				image = $(image.target)
				var origW = image.W()
				image.W(Math.round((50 * cW()) / 100))
				image.H(Math.round((image.W() * image.H() ) / origW))
				x.draw(
						image,
						x.W() / 2 - image.W() / 2,
						x.H() / 2 - image.H() / 2
				)
			}
	)
}
 