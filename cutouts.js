 
$.fn.dots = function () {
		var el = this
		el.img = el.copy()
		// el.img = $.img()
		// el.img.src(el.toDataURL())
		//el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			$l('click:' + x + ', ' + y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x);
			el.dats.push(y) //vestige from phaser physics?
			el.line(el.DOTS)
		})
		el.$$(function (X, Y) {
			var du
			//el.C('X')
			el.off('click')
			el.closePath()  //el.paste() // el.copy()  //el.save()
			du = el.toDataURL()
			//el.clear()
			//	el.clip()
			//	el.paste() 
			//	el.fit(du)
		})
		return el
	}

$.cut = function (m) {
		z();
		m = m || 'me'
		$('body').A(
				$.bt('save sprite', function () {
					c.snap(CUTOUTS)//; EDIT()
				}), $.br(2),
				$.bt('start cut', function () {
					c.dots()
				}), $.br(2),
				$.bt('restart cut', function () {
					$.cut(m)
				}), $.br(2),
				c = $.c('r', 500, 500).A().fit(m)
		)
	} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
 

CHECKMUG=function(){
	$.myMug(function(mug){
		m = mug
		i = new Image()
		i.src = mug
		$(i).A()
	})
}