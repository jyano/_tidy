function colMaxFilterErase(){
	FL1 = SCRATCHOFF = function () {
		var _mPt
		st = $St(1000).mO(1)
		st.bm('chicks', function (bm) {
			h = $H().s(.3)
			h.ss(45, 'r', 'round').ca(bm.image)
			bF = $bF(24, 24, 2)
			cMF = $cMF($cM(60))
			bm.fl(h.aF(), '-').ca(i)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i);
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mx = _pt.x
				my = _pt.y
				mPt = $Pt(
						M.av(_pt.x, mx),
						M.av(_pt.y, my)
				)
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
				bm.fl(h.aF(), '-').ca(i)
				_mPt = V(mPt)
			})
		})
	}
	FL3 = ERASEFL11 = function () {
		$.i('chicks', function (e, i) {
			St().trDr().A(
					$Bm(i).fl($FB(20, 0), $ColMxFl(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			).m({
						d: function () {
							oldPt = st.m();
							oldMidPt = oldPt;
						},
						u: function () {
							b.fl2($AF(h.ca(i))).ca()
						},
						m: function () {
							var midPoint
							if (!st._dr) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							b.fl2($AF(h.ca(i))).ca()
						}
					}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
		})
	}
	FL4 = ERASEDOT = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $ColMxFl(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.m({
				d: function () {
					oldPt = st.m();
					oldMidPt = oldPt;
				},
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				m: function () {
					var midPoint
					if (!st._dr) {
						return st.u()
					}
					midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
					oldPt = st.m()
					oldMidPt.x = V(midPoint)
					b.aF2(h.ca(i)).ca()
				}
			})
			cu = st.h('w').dc(25).cu('N')//.bM()
		})
	}
	FL5 = ERASEFL111 = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $ColMxFl(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			cu = st.h('w').dc(25).cu('N').bM()
			st.m({
				u: function () {
					b.fl2(
							$AF(h.ca(i))).ca()
				},
				d: function () {
					mt = st.m()
				},
				m: function () {
					if (st._dr) {
						b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
					}
				}
			})
		})
	}
	FL6 = ERASEFLWORKS = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			h = $H().ss(40, 'r', 'r').C(.9).ca(i)
			b = $Bm(i).aF2(h)
			st.A(
					$Bm(i).al(.2).fl(
							$BlurFl(40), $ColMxFl(20, -20, 80, 10),
							$BlurFl(40)
					),
					$T('Drag to Reveal!!', "20px Arial", "#FFF",
							st.W() / 2, st.H() - 40).tA("center"),
					b
			)
			st.m({
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._dr) {
						h.dl(m, st.m()).ca(i)
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
	FL7 = ERASEFL = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			var m
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			st.A(
					$Bm({
						i: i,
						fl: [$ColMxFl(20, -20, 80, 10), $FB(40)],
						al: .2
					}),
					$Tc('Smudge!', 100, 'r', st),
					b = $Bm({
						i: i,
						aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
					})
			)
			st.m({
				u: function () {
					b.fl2(
							$AF(h.ca())
					).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._md) {
						h.dl(m || st.m(), st.m()).ca()
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
}
function mouseBlur(){
	CHARCOAL = BLF2 = function () {
		var isDrawing
		st = $St()
		t = $T("Loading...")
		t.set({x: st.W() / 2, y: st.H() - 40})
		t.textAlign = "center"
		$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
			i = img[0]
			h = $H().a2(st)
			bm = new cjs.Bitmap(i)
			bl = new cjs.Bitmap(i)
			bl.filters = [
				$BlurFl(24, 24, 2),
				$ColMxFl($ColMx(60))
			]
			bl.cache(0, 0, 960, 400)
			t.text = "Click and Drag to Reveal the Image.";
			st.A(bl, t, bm)
			st.A(cu = $H('r').dc(25))
			cu.cursor = "pointer"
			st.enableMouseOver()
			st.on("stagemousedown", function (e) {
				o = new cjs.Point(st.mouseX, st.mouseY)
				oM = o;
				isDrawing = true
			})
			st.on("stagemouseup", function (e) {
				isDrawing = false
			})
			st.on("stagemousemove", function (e) {
				var m
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					st.u();
					return
				}
				m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
				h.graphics.ss(40, "round", "round");
				h.graphics.s("rgba(0,0,0,0.2)")
				// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
				h.graphics.mt(m.x, m.y)
				h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
				o.x = st.mouseX;
				o.y = st.mouseY;
				oM.x = m.x;
				oM.y = m.y
			})
		})
	}
	BLF1 = function () {
		st = $St()
		var isDrawing
		$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
			i = img[0]
			h = $H().a2(st)
			bm = new cjs.Bitmap(i)
			bl = new cjs.Bitmap(i)
			bl.filters = [
				$BlurFl(24, 24, 2),
				$ColMxFl($ColMx(60))
			]
			bl.cache(0, 0, 960, 400)
			//t.text = "Click and Drag to Reveal the Image.";
			st.A(bl, t, bm)
			updateCacheImage(false)
			st.A(cu = $H('r').dc(25))
			cu.cursor = "pointer"
			st.enableMouseOver()
			st.on("stagemousedown", function (e) {
				oldPt = new cjs.Point(st.mouseX, st.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			})
			st.on("stagemouseup", function (e) {
				updateCacheImage(true);
				isDrawing = false
			})
			st.on("stagemousemove", function (e) {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					st.u();
					return;
				}
				midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
				h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true)
			})
		})
	}
	FL9 = Q21 = function () {
		var pt
		st = $St(1000).mO(1)
		h = st.h().ss('g', 40, 's', 'b', 1)
		st.MD(function () {
			pt = st.m()
		})
		st.MU(function () {
			pt = 0
		})
		st.MM(function () {
			if (pt) {
				_pt = st.m();
				mx = _pt.x;
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
				h.mt(mPt.x, mPt.y).qt(_pt, pt)
				pt = V(mPt)
			}
		})
		$.i('chicks', function (i) {
			$Bm(i).a2(st).al(.2)
		})
	}
	FL2 = ERASEFL1 = function () {
		$.i('chicks', function (e, i) {
			$St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			st.A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.trDr()
			st.MD(function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				b.fl2(
						$AF(h.ca(i))).ca()
			})
			st.MM(function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				b.fl2($AF(h.ca(i))).ca()
			})
			//cursor
			st.h().f("#FFFFFF").dc(25)//.cu('pointer').bM()
		})
	}
	BLF3 = function () {
		$.i('me', function (img) {
			iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
			s = $St();
			s.enableMouseOver()
			h = $H().a2(s)
			i = img[0]
			bm = $Bm(i)
			bl = $Bm(i)
			bl.Fl($bF(24, 24, 2), i)
			bl.Fl($cMF($cM(60)), i)
			bl.ca(0, 0, 960, 400)
			s.A(bl, bm)
			h.ca(i)
			bm.fl($aF(s.cc()), i);
			s.u()
			// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
			s.MU(function (e) {
				iDr = 0
				h.ca(i)
				bm.fl($aF(s), i)
				s.u()
			})
			s.MD(function (e) {
				iDr = oM = o = s.m()
			})
			s.MM(function (e) {
				var mP             //   cu.x = s.mX(); cu.y = s.mY()
				if (!iDr) {
					s.u();
					return
				}
				mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
				h.ss(40, "round", "round")
						.C("rgba(0,0,0,0.2)")
						.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
				o = s.m()
				oM = V(mP)
				h.ca(i)
				bm.fl($aF(s.cc()), i);
				s.u()
			})
		})
	}
	BLF = function () {
		$.i('me', function (img) {
			iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
			s = $St();
			s.enableMouseOver()
			h = $H().a2(s)
			i = img[0]
			bm = $Bm(i)
			bl = $Bm(i)
			bl.Fl($bF(24, 24, 2), i)
			bl.Fl($cMF($cM(60)), i)
			bl.ca(0, 0, 960, 400)
			s.A(bl, bm)
			h.ca(i)
			bm.fl($aF(s.cc()), i);
			s.u()
			// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
			s.MU(function (e) {
				iDr = 0
				h.ca(i)
				bm.fl($aF(s), i)
				s.u()
			})
			s.MD(function (e) {
				iDr = oM = o = s.m()
			})
			s.MM(function (e) {
				var mP             //   cu.x = s.mX(); cu.y = s.mY()
				if (!iDr) {
					s.u();
					return
				}
				mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
				h.ss(40, "round", "round")
						.C("rgba(0,0,0,0.2)")
						.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
				o = s.m()
				oM = V(mP)
				h.ca(i)
				bm.fl($aF(s.cc()), i);
				s.u()
			})
		})
	}}