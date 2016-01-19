YellowDifAlt = function () {
	d = $.dA(500).c('y')(
			$.bt('freeze', createjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bm.x(bm.x() + 10)
			}),
			$.bt('left', function () {
				bm.x(bm.x() - 10)
			}),
			$.bt('up', function () {
				bm.y(bm.y() - 10)
			}),
			$.bt('down', function () {
				bm.y(bm.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bm.sxy(1.1, '*')
			}),
			$.bt('smaller', function () {
				bm.sxy(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bm.sx(bm.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bm.sx(bm.sx() * .9)
			}),
			$.bt('taller', function () {
				bm.sy(bm.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bm.sy(bm.sy() * .9)
			}),
			$.br(),
			$.bt('CW', function () {
				bm.rt(bm.rt() + 10)
			}),
			$.bt('CCW', function () {
				bm.rt(bm.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bm))
			}),
			$.bt('set index to 3', function () {
				st.ix(bm, 3)
				pop('index: ' + st.ix(bm))
			}),
			$.bt('z-up', function () {
				st.ix(bm, st.ix(bm) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bm, st.ix(bm) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bm)
			}),
			$.bt('clone', function () {
				st.A(
						$Ct().A(
								bm.clone()
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
	d = $.dA('y', 500).A(
			$.bt('freeze', cjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bm.x(bm.x() + 10)
			}),
			$.bt('left', function () {
				bm.x(bm.x() - 10)
			}),
			$.bt('up', function () {
				bm.y(bm.y() - 10)
			}),
			$.bt('down', function () {
				bm.y(bm.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bm.sXY(1.1, '*')
			}),
			$.bt('smaller', function () {
				bm.sXY(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bm.sx(bm.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bm.sx(bm.sx() * .9)
			}),
			$.bt('taller', function () {
				bm.sy(bm.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bm.sy(bm.sy() * .9)
			}), $.br(),
			$.bt('CW', function () {
				bm.rt(bm.rt() + 10)
			}),
			$.bt('CCW', function () {
				bm.rt(bm.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bm))
			}),
			$.bt('set index to 3', function () {
				st.ix(bm, 3)
				pop('index: ' + st.ix(bm))
			}),
			$.bt('z-up', function () {
				st.ix(bm, st.ix(bm) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bm, st.ix(bm) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bm)
			}),
			$.bt('clone', function () {
				st.A($Ct().A(bm.ob.clone()))
			}), $.br(),
			$.bt('save', function () {
				st.sv(function () {
					loadImagesDiv()
				})
			}),
			$.bt('paint', function () {
				stagePainter(st)
			}),
			$.bt('', function () {
			})
	)
	d = $.dA('y', 500).A(
			$.bt('freeze', cjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bm.x(bm.x() + 10)
			}),
			$.bt('left', function () {
				bm.x(bm.x() - 10)
			}),
			$.bt('up', function () {
				bm.y(bm.y() - 10)
			}),
			$.bt('down', function () {
				bm.y(bm.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bm.sXY(1.1, '*')
			}),
			$.bt('smaller', function () {
				bm.sXY(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bm.sx(bm.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bm.sx(bm.sx() * .9)
			}),
			$.bt('taller', function () {
				bm.sy(bm.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bm.sy(bm.sy() * .9)
			}), $.br(),
			$.bt('CW', function () {
				bm.rt(bm.rt() + 10)
			}),
			$.bt('CCW', function () {
				bm.rt(bm.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bm))
			}),
			$.bt('set index to 3', function () {
				st.ix(bm, 3)
				pop('index: ' + st.ix(bm))
			}),
			$.bt('z-up', function () {
				st.ix(bm, st.ix(bm) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bm, st.ix(bm) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bm)
			}),
			$.bt('clone', function () {
				st.A($Ct().A(bm.ob.clone()))
			}), $.br(),
			$.bt('save', function () {
				st.sv(function () {
					loadImagesDiv()
				})
			}),
			$.bt('paint', function () {
				stagePainter(st)
			}),
			$.bt('', function () {
			})
	)
}