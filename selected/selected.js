YellowDif=function(){
var d= $divA(500).c('y')(
		$.bt('freeze', createjs.Tween.removeAllTweens),
		$.bt('right', function () {
			bitmap.x(bitmap.x() + 10)
		}),
		$.bt('left', function () {
			bitmap.x(bitmap.x() - 10)
		}),
		$.bt('up', function () {
			bitmap.y(bitmap.y() - 10)
		}),
		$.bt('down', function () {
			bitmap.y(bitmap.y() + 10)
		}),
		$.br(),
		//fix
		$.bt('bigger', function () {
			bitmap.sxy(1.1, '*')
		}),
		$.bt('smaller', function () {
			bitmap.sxy(.9, '*')
		}),
		//
		$.bt('wider', function () {
			bitmap.sx(bitmap.sx() * 1.1)
		}),
		$.bt('thinner', function () {
			bitmap.sx(bitmap.sx() * .9)
		}),
		$.bt('taller', function () {
			bitmap.sy(bitmap.sy() * 1.1)
		}),
		$.bt('shorter', function () {
			bitmap.sy(bitmap.sy() * .9)
		}),
		$.br(),
		$.bt('CW', function () {
			bitmap.rt(bitmap.rt() + 10)
		}),
		$.bt('CCW', function () {
			bitmap.rt(bitmap.rt() - 10)
		}),
		$.br(),
		$.bt('get index', function () {
			pop('index: ' + st.ix(bitmap))
		}),
		$.bt('set index to 3', function () {
			st.ix(bitmap, 3)
			pop('index: ' + st.ix(bitmap))
		}),
		$.bt('z-up', function () {
			st.ix(bitmap, st.ix(bitmap) + 1)
		}),
		$.bt('z-down', function () {
			st.ix(bitmap, st.ix(bitmap) - 1)
		}),
		$.bt('remove', function () {
			st.rm(bitmap)
		}),
		$.bt('clone', function () {
			st.a(
					EaselContainer().a(
							SuperDisplayObject(bitmap.ob.clone())
					)
			)
		}),
		$.br(),
		$.bt('save', function () {
			st.sv(function () {
				loadImagesDiv()
			})
		}),
		$.bt('paint', function () {
			stPainter(st)
		}),
		$.bt('', function () {
		}),
		///////////
		$.bt('freeze', createjs.Tween.removeAllTweens),
		$.bt('right', function () {
			bitmap.x(bitmap.x() + 10)
		}),
		$.bt('left', function () {
			bitmap.x(bitmap.x() - 10)
		}),
		$.bt('up', function () {
			bitmap.y(bitmap.y() - 10)
		}),
		$.bt('down', function () {
			bitmap.y(bitmap.y() + 10)
		}),
		$.br(),
		//fix
		$.bt('bigger', function () {
			bitmap.sxy(1.1, '*')
		}),
		$.bt('smaller', function () {
			bitmap.sxy(.9, '*')
		}),
		//
		$.bt('wider', function () {
			bitmap.sx(bitmap.sx() * 1.1)
		}),
		$.bt('thinner', function () {
			bitmap.sx(bitmap.sx() * .9)
		}),
		$.bt('taller', function () {
			bitmap.sy(bitmap.sy() * 1.1)
		}),
		$.bt('shorter', function () {
			bitmap.sy(bitmap.sy() * .9)
		}),
		$.br(),
		$.bt('CW', function () {
			bitmap.rt(bitmap.rt() + 10)
		}),
		$.bt('CCW', function () {
			bitmap.rt(bitmap.rt() - 10)
		}),
		$.br(),
		$.bt('get index', function () {
			pop('index: ' + st.ix(bitmap))
		}),
		$.bt('set index to 3', function () {
			st.ix(bitmap, 3)
			pop('index: ' + st.ix(bitmap))
		}),
		$.bt('z-up', function () {
			st.ix(bitmap, st.ix(bitmap) + 1)
		}),
		$.bt('z-down', function () {
			st.ix(bitmap, st.ix(bitmap) - 1)
		}),
		$.bt('remove', function () {
			st.rm(bitmap)
		}),
		$.bt('clone', function () {
			st.a(
					EaselContainer().a(
							SuperDisplayObject(bitmap.ob.clone())
					)
			)
		}),
		$.br(),
		$.bt('save', function () {
			st.sv(function () {
				loadImagesDiv()
			})
		}),
		$.bt('paint', function () {
			stPainter(st)
		}),
		$.bt('', function () {
		})
)
return d
}
 


SELECTED = function () {
	z()
	st = $.dragStage()
	
	/*
	st.bm('coin', function (bm) {
		coin = bm;
		SL(coin)
		selected(bm)
	})
	st.bm('sun', function (bm) {
		sun = bm;
		SL(bm)
		selected(bm)
	})*/
	
	TextAdder(st)
	
	st.bm('me', function (bm) {
		me = bitmap = bm
		SL(bm)
		bm.rgc('+')
		
		/*
		cjs.scaleShake(bm)
		//rotateShake(bm)
		selected(bm)
		
		st.bm('flame', function (bm) {
			flame = bm;
			SL(bm);
			selected(bm)
		})
		st.bm('guy', function (bm) {
			guy = bm;
			SL(bm);
			selected(bm)
		})*/
	})
	
	d = $.d('y', '+')
	d.E()
	
	$.eG('cutouts', function (cutout) {
		
		d.A($.imageSizeFuncCan(cutout.dU, 1, function () {
					

			st.bm(cutout.dU, function (bm) {
				
				//SL(bm.sXY(.4)); bm.rgc('+')
				
				selected(bm)
	
			})
				
		}))
		
	})
 
	d = YellowDiv()
	
	function selected(bm) {//SL(bm)
		bm.$(function () {
			cjs.Tween.removeAllTweens()
			bitmap = bm
			cjs.scaleShake(bm.dO)
		})
	}
} 
 
  