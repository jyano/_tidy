TRANSF = function () {
	stage = St()
	degToRad = Math.PI / 180;
	//cjs.sharedCode()
	// cjs.utils()
	cjs.slider()
	stage.enableMouseOver();
	//cjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	var img = new Image()
	img.onload = handleImageLoad;
	img.src = "/chicks.png";
	function handleImageLoad(evt) {
		var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
		sliceWidth = imgWidth / sliceCount;
		sliceContainer = $Ct()
		sliceContainer.x = st.canvas.width / 2;
		for (var i = 0; i < sliceCount; i++) {
			var slice = $Bm(img)
			slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
			slice.cache(0, 0, sliceWidth, imgHeight);
			slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
			sliceContainer.A(slice);
		}
		slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
		slider.on("change", handleSliderChange, this);
		st.A(sliceContainer, slider);
		updateEffect(slider.value);
	}
	
	function handleSliderChange(evt) {
		updateEffect(evt.target.value);
	}
	
	function updateEffect(value) {
		var l = sliceContainer.getNumChildren();
		for (var i = 0; i < l; i++) {
			var slice = sliceContainer.getChildAt(i);
			slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
			if (i % 2) {
				slice.skewY = value
			}
			else {
				slice.skewY = -value;
				slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
			}
			slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
			slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
			slice.ca()
		}
		st.u();
	}
}
TRANSF = function () {
	stage = St()
	degToRad = Math.PI / 180;
	//cjs.sharedCode()
	// cjs.utils()
	cjs.slider()
	stage.enableMouseOver();
	//cjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	var img = new Image()
	img.onload = handleImageLoad;
	img.src = "/chicks.png";
	function handleImageLoad(evt) {
		var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
		sliceWidth = imgWidth / sliceCount;
		sliceContainer = $Ct()
		sliceContainer.x = st.canvas.width / 2;
		for (var i = 0; i < sliceCount; i++) {
			var slice = $Bm(img)
			slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
			slice.cache(0, 0, sliceWidth, imgHeight);
			slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
			sliceContainer.A(slice);
		}
		slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
		slider.on("change", handleSliderChange, this);
		st.A(sliceContainer, slider);
		updateEffect(slider.value);
	}
	
	function handleSliderChange(evt) {
		updateEffect(evt.target.value);
	}
	
	function updateEffect(value) {
		var l = sliceContainer.getNumChildren();
		for (var i = 0; i < l; i++) {
			var slice = sliceContainer.getChildAt(i);
			slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
			if (i % 2) {
				slice.skewY = value
			}
			else {
				slice.skewY = -value;
				slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
			}
			slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
			slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
			slice.ca()
		}
		st.u();
	}
}
TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}
TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}
TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}
TRANSFORM = function () {
	$.fm()
	s = $St()
	s.mug(function (b) {
		st = s
		b.XY(0, 0)
		b.rgc('+')
		TR(b)
		s.mug(function (b) {
			b.XY(50, 50).rgc('+');
			TR(b)
		})
		/*
		 wMb(function (b) {
		 b.XY(100, 100).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(200, 200).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(300, 300).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(400, 400).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(150, 150).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(250, 250).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(350, 350).rgc('+');
		 TR(b)
		 }, s)
		 */
	}, '-')
	s1.A($.bt('rotate', function () {
				s.ch('-')
				s.mug(function (b) {
					s.M(50); //b=Do(bj(b))
					RT(b.XY(400))
					s.mug(function (b) {
								b.XY(300).al(.5)
								RT(b, '-')
							}
					)
					s.mug(function (b) {
						KK(b.XY(200).sXY(1.4), '+')
					})
					s.mug(function (b) {
								KK(b.XY(100).sXY(.6))
							}
					)
				})
			}), $.br(2),
			$.bt('skew', function () {
				s.ch('-')
				s.mug(function (b) {
					s.mug(function (b) {
						SK(b.XY(300).rgc('+').sXY(1.5))
						s.W(2000).H(2000)
					})
					//b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
				})
			}), $.br(2),
			$.bt('register', function () {
				s.rm()
				s.mug(function (b) {
					TR(b);
					rg1(b);
					reggy(b)
				})
				s.mug(function (b) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				})
			}),
			$.br(2))
}
TRANSFORM = function () {
	$.fm()
	s = $St()
	s.mug(function (b) {
		st = s
		b.XY(0, 0)
		b.rgc('+')
		TR(b)
		s.mug(function (b) {
			b.XY(50, 50).rgc('+');
			TR(b)
		})
		/*
		 wMb(function (b) {
		 b.XY(100, 100).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(200, 200).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(300, 300).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(400, 400).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(150, 150).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(250, 250).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(350, 350).rgc('+');
		 TR(b)
		 }, s)
		 */
	}, '-')
	s1.A($.bt('rotate', function () {
				s.ch('-')
				s.mug(function (b) {
					s.M(50); //b=Do(bj(b))
					RT(b.XY(400))
					s.mug(function (b) {
								b.XY(300).al(.5)
								RT(b, '-')
							}
					)
					s.mug(function (b) {
						KK(b.XY(200).sXY(1.4), '+')
					})
					s.mug(function (b) {
								KK(b.XY(100).sXY(.6))
							}
					)
				})
			}), $.br(2),
			$.bt('skew', function () {
				s.ch('-')
				s.mug(function (b) {
					s.mug(function (b) {
						SK(b.XY(300).rgc('+').sXY(1.5))
						s.W(2000).H(2000)
					})
					//b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
				})
			}), $.br(2),
			$.bt('register', function () {
				s.rm()
				s.mug(function (b) {
					TR(b);
					rg1(b);
					reggy(b)
				})
				s.mug(function (b) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				})
			}),
			$.br(2))
}