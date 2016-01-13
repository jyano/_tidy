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
			b.fl2($AF(h.ca(i))).ca()
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