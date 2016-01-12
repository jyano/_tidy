window.$pt = window.$pt || {}
gpc = gpcas
// other lib:  http://jsclipper.sourceforge.net/6.1.3.2/main_demo.html
gpc.g = gpc.geometry
PolyDefault = gpc.g.PolyDefault;
ArrayList = gpc.util.ArrayList;
PolySimple = gpc.g.PolySimple;
Clip = gpc.g.Clip;
OperationType = gpc.g.OperationType;
LmtTable = gpc.g.LmtTable;
ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
EdgeTable = gpc.g.EdgeTable;
EdgeNode = gpc.g.EdgeNode;
ScanBeamTree = gpc.g.ScanBeamTree;
Rectangle = gpc.g.Rectangle;
BundleState = gpc.g.BundleState;
LmtNode = gpc.g.LmtNode;
TopPolygonNode = gpc.g.TopPolygonNode;
AetTree = gpc.g.AetTree;
HState = gpc.g.HState;
VertexType = gpc.g.VertexType;
VertexNode = gpc.g.VertexNode;
PolygonNode = gpc.g.PolygonNode;
ItNodeTable = gpc.g.ItNodeTable;
StNode = gpc.g.StNode;
ItNode = gpc.g.ItNode;
gpc.PS = gpc.g.PolySimple
gpc.PD = gpc.g.PolyDefault
pS = ps = $pt.pS = gpc.PS.prototype
pD = $pt.pD = gpc.PD.prototype
M.btwPts = function (x, x1, x2) {
	var res1 = (x < (x1 + 0.1) && x >= x2 - 0.1)
	var res2 = (x > (x1 - 0.1) && x <= x2 + 0.1)
	return res1 || res2
}
M.onSgm = isOnSegment = function (px, py, x1, y1, x2, y2) {
	var btwPts = M.btwPts(px, x1, x2) && M.btwPts(py, y1, y2)
	return btwPts && isOnLine(px, py, x1, y1, x2, y2)
}
M.slope = function (x1, y1, x2, y2) {
	return (y2 - y1) / (x2 - x1)
}
M.lnY = function (x, x1, y1, x2, y2) {
	var mx = M.slope(x1, y1, x2, y2)
	var b = x - x1 + y1
	var y = mx * b
	return y
}
M.onLn = function (px, py, x1, y1, x2, y2) {
	M.veryClose = function (a, b) {
		return M.abs(a - b) > 0.1
	}
	var vC = M.veryClose
	return vC(x2, x1) ?
			!vC(py,
					(y2 - y1) / (x2 - x1) * (px - x1) + y1) :
			vC(px - x1)
}
 
$pD = gpc.pD = gpc.p = function (pts) {
	
	//make new polyDefault
	//can add points to it
	if (gpc.isPol(pts)) {
		return pts
	}
	//if (S(pts)){ pts = $vs[pts] }
	//ok so if it is already a gPoly, just return it..
	//but if not (it is points).. so make a new gPoly (default) and return it
	var pD = new gpc.PD
	return pts ? pD.A(pts) : pD
}
//	M.p: //it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}
M.p = b2d.gpcPD = function () {
	var g = G(arguments), p, b, fs, vs
	// if it started off as a gPoly, just return it as is
	if (b2d.iGP(g[0])) {
		return g[0]
	}
	p = new PolyDefault()
	if (b2d.iB(g[0])) {
		fs = g[0].fs()
		vs = fs[0].wV()
		_.eR(fs, function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g[0]) ? g[0].wV() :
				g[0]
	}
	p.A(vs)
	return p
}
$gP$ = function () {
	// = M.p = b2d.gpcPD 
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, pts
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
	}
	else {
		pts = b2d.iF(g.f) ? g.f.wV() : g.f
	}
	return $pD(pts)
}
$gP = function (pts) {
	// = M.poly
	var pD = new gpc.PD()
	pD.aPts(pts)
	return pD
}
pS.ty = pS.type = function () {
	return ('pS')
}
pD.ty = pD.type = function () {
	return ('pD')
}
function bigEnough(f) {
	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?
	return M.p(f).getArea() > 2000
} 
