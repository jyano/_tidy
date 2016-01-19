  
	$.eD = $.editDiv = function (words) {//$.dE
		canMove = true
		changeLocation = true
		inputMove = true
		mouse = 'up'
		ta = $.ta().mar(4)
		sp = $.sp().C('z')
		fn = function () {
			sp.T(ta.v())
		}
		d = $.dA('+').C('n', 'y').pad(8)
		d.zIndex(0)
		xBt = $.bt('', function () {
			d.rm()
		}).WH(4).C('red')
		d.md(function () {
			inputMove = false;
			mouse = 'div'
		})
		d.mu(function () {
			mouse = 'up'
		})
		d.md(function () {
			$.editDiv.TOP++
			$(this).zIndex($.editDiv.TOP)
		})
		
		ta.md(function (e) {
			$.editDiv.TOP++
			$(this).parent().zIndex($.editDiv.TOP)
			location = {top: d.Y(), left: d.X()}
			inputMove = true
			mouse = 'input'
			e.stopPropagation()
		})
		ta.mm(function (e) {
			if (inputMove) {
				e.stopPropagation();
				d.XY(location.left, location.top)
			}
		})
		if (U(words)) {
			return d.A(xBt, $.br(), sp.hd(), ta,
					$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
						$(this).pa().free()
					})
			).$$(function (e) {
						e.stopPropagation()
						sp.T(ip.v())
						xBt.gg();
						ip.gg();
						sp.gg()
					})
		}
		else {
			ip.v(words)
			sp.T(ta.v())
			return d.$$(function (e) {
				e.stopPropagation()
				sp.T(ta.v())
				xBt.gg();
				ip.gg();
				sp.gg()
			}).A(xBt, $.br(), sp, ip.hd())
		}
	};

	$.editDiv.TOP = 0

	
	ZYZ=function(){
	z()
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
	
} 