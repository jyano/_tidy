 
//get a point from an index poly
	 pS.pt = pD.pt = function (i) {
		 var pol = this
		 return [pol.X(i), pol.Y(i)]
	 }
//add a point to a poly
	 pS.aPt = pD.aPt = pD.A = pD.addPoints = function (pts) {
		 // = pS.A = pD.A
		 var pol = this
		 pts = A(pts) ? pts : [pts]
		 _.e(pts, function (pt) {
			 pol.addPoint(V(pt))
		 })
		 return pol
	 }
	 pS.pts = pD.pts = function (fn) {
		 var pS = this, pts = []
		 _.t(pS.nPts(), function (index) {
			 var pt = pS.pt(index)
			 pts.push(pt)
			 //alt:_.t(pS.num(), function (i) {var pt = [pS.getX(i), pS.getY(i)]pts.push(pt)})
		 })
		 if (F(fn)) {
			 _.e(pts, function (v, i) {
				 fn(v, i, pts)
			 });
			 return pS
		 }
		 return pts
		 function docs() {
			 //= pS.vs = pS.ptsArr = ps.ptsArray = ps.verts = ps.pts
//= pS.ePt = pS.vsArr = pS.vs = pS.pts = pS.vs
// =  pD.ePt = pD.vsArr
		 }
	 }
//get x val of an index pt
	 pS.X = pD.X = function (i) {
		 // = pS.x = pD.x = pS.gX = pD.gX 
		 return this.getX(i)
	 }
//get y val of an index pt
	 pS.Y = pD.Y = function (i) {

//=pS.y = pD.y = pS.gY = pD.gY
		 return this.getY(i)
	 }
