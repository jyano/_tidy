 
UPLOADS = function () {
	
	$.fm()
	
	y = 80
	
	n = 0
	$.picDiv = function (top) {
		return $.dA('b', '+')
				.WH('auto').XY(200, top)
				.K('pic')
				.pad(25)
	}
	$.get('myFileImgs', function (p) {
		_.e(p, function(p){
			$l('pic: ' + n++)
			$.picDiv(y).A(UpPic(p))
			y += 220
		})
	})
	
	function UpPic(p) {
		return $.sp().A(
				$.pic(p),
				$.delBt('/pic', p)
		)
	}
	
	/*
	 $.G('myPics',  function(p){_.e(p, function(p){
	
	 $l('pic: ' + n++)
	 $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
	 y+= 220
	 })
	
	 })*/
	UPLOADSalt = function () {
		$.format()
		var top = 80
		s1.A(
				$.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..')
		)
		$.g('/myPics', function (pics) {
			_.e(pics, function (pic) {
				var fileName = pic._id + pic.ext
				picDiv = function (top) {
					return $.divA('blue', 100, 100).WH('auto').K('pic')
							.XY(200, top).pad(16).drag()
				}
				$.delete = function (url, data, func) {
				}
				var theButton = $.bt('delete', function (element) {
					$.ajax({
						type: 'DELETE',
						data: pic,
						url: '/pic',
						success: function (result) {
							$(element.target).closest('div').remove()
						}
					})
				})
				var theImg = $.img(fileName).W(120).H(120).click(function () {
					cut(fileName)
				})
				var thePicDiv = picDiv(top).A(theImg, theButton)
				$('body').A(thePicDiv)
				top += 220
			})
		})
	}
}
 