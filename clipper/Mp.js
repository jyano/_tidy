b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
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
M.p = b2d.gpcPD = function () {var g = G(arguments), p, b, fs, vs
	// if it started off as a gPoly, just return it as is
	if (b2d.iGP(g[0])) {return g[0]}
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
				g[0]}
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
	if (b2d.iGP(g.f)) {return g.f}
	
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
		
	}
	else {pts = b2d.iF(g.f) ? g.f.wV() : g.f}
	return $pD(pts)
}
$gP = function (pts) {
	// = M.poly
	var pD = new gpc.PD()
	pD.aPts(pts)
	return pD
}
//function type() {
pS.ty = function () {
	// = pS.type
	return ('pS')
}
pD.ty = function () {
	//= pD.type
	return ('pD')
}
gpc.iPg = gpc.isPol = function (a) {
	return O(a) && F(a.isHole)
}
gpc.iPD = gpc.iDP = gpc.iD = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pD'
}
gpc.iPS = gpc.iSP = gpc.iS = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pS'
}

//function bool() {
// get num of points of a pol

pD.nPts = pS.nPts = pS.n = pD.n = function () {
	return this.getNumPoints()
}

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
// function points(){
//get or iterate all the pts of 1/more? pol
pD.pts = function (fn) {
	var pD = this, g = G(arguments), o
	//= pD.vs
	o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
	var pts = g.n ? b2d.sub(pD.pts(), o.n) :
			g.p ? b2d.add(pD.pts(), o.n) :
					pD.pts()
	if (o.fn) {
		_.e(pts, o.fn);
		return pD
	}
	return pts
	function docs() {
		
		//used in MEET
		//= pD.vs = pD.points =	
		function alt() {
			pD.pts = pD.vs = function (fn) {
				var p = this, g = G(arguments), o
				var pts = []
				_.t(p.n(), function (i) {
					pts.push([p.getX(i), p.getY(i)])
				})
				if (g.n) {
					pts = _.m(pts, function (v) {
						return V(v).sub(g[0])
					})
				}
				if (g.p) {
					pts = _.m(pts, function (v) {
						return V(v).add(g[0])
					})
				}
				if (F(fn)) {
					_.e(pts, function (v) {
						fn(v)
					})
					return p
				}
				return pts
			}
		}
	}
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
function opers() {
	pD.U = function (p) {
		var pD = this, g = G(arguments)
		g.e(function (pol) {
			pD = pD.union(gpc.p(pol))
		})
		return pD
	}
	pD.D = function () {
		var pD = this,
				g = G(arguments)
		g.e(function (pol) {
			pD = pD.difference(gpc.p(pol))
		})
		return pD
	}
	pD.I = pD.intersection
	pD.X = pD.xor
//
	$uni = UNI = function () {
		//= b2d.u
		var g = G(arguments), p
		if (g.A) {
			return g.ap(UNI)
			//return $a(UNI,g.f)
		}
		p = M.p(g.f)
		g.eR(function (pol) {
			p = p.U(M.p(pol))
		})
		return p
	}
	pD.plus = function (x, y) {
		return M.p(_.m(this.pts(), function (v) {
					return V(v).add(x || 0, y || 0)
				}
		))
	}
	pD.U = function () {
		var pD = this, g = G(arguments), uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
		function alt() {
			pD.U = function () {
				var pD = this, g = G(arguments),
						uP
				if (b2d.iB(g[0])) {
					uP = pD.U(g[0].f())
					_.eR(g[0].fs(), function (f) {
						uP = pD.U(f)
					})
					return uP
				}
				return pD.union(M.p(g[0]))
			}
		}
	}
//
	pD.minus = function (x, y) {
		var p = this,
				pts = p.pts()
		pts = _.m(pts, function (v) {
			v = V(v)
			return v.sub(x || 0, y || 0)
		})
		return M.p(pts)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
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
}
function hole() {
	gpc.iPol = function (a) {
		//b2d.iGP =
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function _alpha() {
	pD.ifHasPol = function () {
		var pD = this
		if (pD.hasAtLeastOnePoly()) {
			return pD
		}
	}
	pD.bigEnough = function () {
		return this.getArea() > 2000
	}
	pD.tooSmall = function () {
		return !this.bigEnough()
	}
}
f.A = f.area = function () {
	return M.p(this).getArea()
}
pD.polygons = pD.polys = pD.ps = pD.hs = pD.pols = function () {
	$l('pD.polys')
	var pD = this, g = G(arguments),
			o = b2d.iB(g.f) ? {
				polys: b2d.reg(this._polys(), g.f),
				fn: g.s
			} :
					g.N_ ? {
						polys: b2d.reg(this._polys(), V(g.f, g.s)),
						fn: g.t
					} :
					{fn: g.f}
	if (g.p) {
		o.polys = _.m(o.polys, M.p)
	}
	if (F(o.fn)) {
		_.e(o.polys, o.fn);
		return this
	}
	;
	return o.polys
} // used in MEET 

function points(){
	bx.pts = function () {
		var g = G(arguments)
		var pts = g.s ? g : g.f
		return _.m(pts, bx.div)
		function docs() {
			
			//= b2d.verts
			//all this does is to 'scale down' a series of points
			//can pass in pts naked OR in an array
			//can pass in: (1) verts ([],[],[]) OR (2) an array [[],[],[]]
		}
	}
	bx.recPts = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
		function docs() {
			// =	b2d.recVerts = b2d.recPoints = b2d.recV
		}
	}
	bH.pts = bH.vs = function () {
		return this.m_vertices
	}
	pH.pts = pH.vs = pH.verts = function () {
		var verts = this.m_vertices
		return _.m(verts, function (v) {
			return [v.x * 30, v.y * 30]
		})
		function alt() {
			pH.vs = pH.vertsx = function () {
				alert('pH.vs. see boxShapes.js')
				var pH = this
				return _.m(pH.m_vertices, function (v) {
					return [v.x * 30, v.y * 30]
				})
			}
		}
	}
	pH.vec = pH.setAsVec = function (v, sc) {
		var pH = this //used by SepLib
		pH.SetAsVector(_.m(v, function (v) {
			return V(v).d(N(sc, 30))
		}))
		return pH
		function alt() {
			pH.setAsVec = function (vec, scale) {
				scale = N(scale) ? scale : 30
				vec = _.map(vec, function (v) {
					return V(v).div(scale)
				})
				this.SetAsVector(vec)
				return this
			}
		}
	}
	b2d.pts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		if (g.s) {
			return _.m(g, b2d.div)
		}
		//passed in verts ([],[],[])
		return _.m(g.f, b2d.div) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}
	}
	b2d.ptsDvdd = b2d.divPoints = b2d.divPts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		return _.m(g.s ? g : //passed in verts ([],[],[])
						g.f,
				b2d.div
		) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}	
	}
	fD.pts = fD.vrt = fD.verts = function () {
		var h = this.H()
		var verts = h.vs()
		return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
		function alt() {
			fD.vrt = fD.verts = function () {
				var shape = this.shape,
						verts = shape.m_vertices,
						verts = [
							verts[0].mult(),
							verts[1].mult(),
							verts[2].mult(),
							verts[3].mult()]
				return $l(verts)
			}
		}
	}
	pD.pts = pD.vs = function (fn) {
		var pD = this,
				g = G(arguments),
				o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
				vs = []
		_.t(pD.n(), function (i) {
			vs.push([pD.x(i), pD.y(i)])
		})
		vs = g.n ? b2d.sub(vs, o.num) :
				g.p ? b2d.add(vs, o.num) :
						vs
		if (o.fn) {
			_.e(vs, o.fn);
			return pD
		}
		return vs
	}//used in MEET
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//= f.points = f.verts = f.vertices = f.vs
//=f.vs = f.points = f.verts = f.vertices =
	/*
	 b2d.tA source :
	 function(vs) {
	 return _.m(vs, function (v) { return [v.x, v.y]  })
	 }
	
	 v.tA:function () { return [v.x, v.y] }
	 */
	f._pts = function () {
		// alt: return b2d.m(  this.H().m_vertices  )
		var f = thisf.__pts = function () {
			return this.H().m_vertices
		}
		return _.m(f.__pts(), b2d.mult)
	}
	f.locPts = function () {
		var f = this, b = this.B(), g = G(arguments)
		return g.p ?
				_.m(f._pts(), function (v) {
					return v.rt(b.rt())
				}) :
				f._pts()
		// (optionally rotated locally by body's rotation)
	}
	f.pts = function () {
		var f = this, b = f.B(),
				g = G(arguments)
		var vs = _.m(f._pts(), function (v) {
			return g.n ?
					v : v.rt(b.rt())
		})
		return b2d.tA(vs)
		function alt() {
			f.pts = function () {
				var f = this, b = f.B(), g = G(arguments)
				return b2d.tA(_.m(f._pts(), function (v) {
					return g.n ? v : v.rt(b.rt())
				}))
			}
		}
	}
	f.wPts = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = g.p ?  // was g.N
				f.pts('+') :
				f.pts()
		return _.m(pts, function (v) {
			return v.add(b)
		})
		//give world verts of fixt rotated
		// (or optionally, not rotated for some reason)
		f.wV = function () {
			return b2d.tA(b2d.add(this.pts(), this.B()))
			function alt() {
				f.wV = function () {
					var f = this, b = f.B(), g = G(arguments),
							vs
					vs = g.n ? f.vs() : f.vs('+')
					return b2d.tA(_.m(vs, function (v) {
						return V(v).add(b)
					}))
				}
			}
		}
	}
	f.GP = function () {
		return $pD(this.wPts())
	}
	f.ptsA = function () {
		var f = this
		return _.m(f.pts(), function (v) {
			v = V(v)
			return [v.x, v.y]
		})
		//=f.vsA
	}
	f.wPtsA = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = f.pts()
		var pt = V(b.X(), b.Y())
		return b2d.tA(b2d.add(pts, pt))
	}
	f.wPtsGP = function () {
		return $pD(this.wPts())
	}
	b.pgPts = function () {
		return M.poly(this.V())
		function docs() {
//= b.polyVerts
		}
	}
	b.pts = function (fn) {
		var b = this
		var arr = []
		var pD = b.uni()
		if (F(fn)) {
			pD.ePol(fn);
			return b
		}
		return pD.pts()
		function docs() {
			function alt() {
				b.pts = b.ps = function (fn) {
					var b = this, arr = [], p = b.uni()
					if (F(fn)) {
						p.ps(b, fn);
						return b
					}
					p.ps(b, function (v) {
						arr.push(v)
					})
					return arr
				}
			}
		}
	}
	b.ptsGP = function () {
		var b = this
		var num = this.num()
		if (num == 0) {
			return
		}
		var fs = b.fixts()
		var pg = fs[0]
		if (num == 1) {
			return pg.union(pg)
		}
		_.e(_.r(fs), function (f) {
			f = M.poly(f)
			pg = M.poly(pg.union(f))
		})
		return pg
		function docs() {//		 
			//return this.union()
			//it used to just get from the FIRST fixt,
			//but now it unions them all together :)
			//b.verts = function(){ return this.fixt().verts() }
		}
	}
	b.wPtsGP = function () {
		var b = this, g = G(arguments)
		return b.pD().pts()
	}
	b.wPts = function () {
		var p = this.transform().position.mult()
		return _.m(this.pts(), function (pt) {
			return pt.add(p)
		})
	}
	b.rtWPts = function () {
		var b = this
		return _.m(b.rtPts(), function (v) {
			return V(v.x + b.X(), v.y + b.Y())
		})
	}
	b.rtPts = function () {
		var b = this
		var rt = M.tR(b.rt())
		return _.m(b.pts(), function (v) {
			var v = V(v)
			var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
			var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
			return V(x, y)
		})
		function docs() {
			
			//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
			function alt() {
				b.rtPts = b.rotVerts = function () {//rotated but local
					newX = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.cos(rad) - y * Math.sin(rad)
					}
					newY = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.sin(rad) + y * Math.cos(rad)
					}
					f.Vold = function () {//f.rotVerts=
						return this.wPts()
						newX = function (x, y, rot) {
							rot = Math.toRadians(rot)
							x *= Math.cos(rot).toFixed(3)
							y *= Math.sin(rot).toFixed(3)
							return x - y
						}
						newY = function (x, y, rot) {
							rot = Math.toRadians(rot)
							return (x * Math.sin(rot)) + (y * Math.cos(rot))
						}
						var verts = this.verts(), b = this.B()
						return _.map(verts, function (v) {
							var x = v.x, y = v.y
							return V(
									newX(x, y, b.rot()) + b.X(),
									newY(x, y, b.rot()) + b.Y())
						})
					}//this becomes wVerts
					var b = this, pts = b.verts()
					return _.m(pts, function (v) {
						var x = v.x,
								y = v.y
						return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
					})
				}
			}
			
			//this returns [V,V,V...]
		}
	}
}
function bodUni(){
	   b.sum = function (b1) {
		   return $UNI(this, b1).pts(this, '-')
	   }
	   b.uni = function () {
		   var b = this, g = G(arguments)
		   var fs = b.fs()
		   if (g.u) {
			   return !g.n ?
					   $UNI(fs).tlNeg(b) : $UNI(fs)
		   }
		   //unite with fixt or first-fixt(of body)
		   if (O(g.f) && !F(g.s)) {
			   return b.f().uni(b2d.tF(g.f))
		   }
	   }
	   b.U = function () {
		   var b = this, g = G(arguments)
		   var pD = b.pD()
		   g.e(function (arg) {
			   pD = pD.U(arg)
		   })
		   return pD.tlNeg(b)
	   }
	   b.union = function () {
		   var num = this.num(),
				   fs = this.fixts()
		   if (num == 0) {
			   return
		   }
		   if (num == 1) {
			   return fs[0].pts()
		   }
		   return fs[0].union(_.rest(fs))
	   }
	   b.minus = function (fOrB) {
		   return this.rel(
				   this.pts().difference(fOrB.pts())
		   )
	   }
   }
function bigEnough(f) {
	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?
	return M.p(f).getArea() > 2000
}
function translate() {
	f.pos = f.cirPos = function () {
		var f = this
		var h = f.H()
		var posPt = h.m_p
		return V(posPt.x, posPt.y).mult()
		function docs() {
			// for circs
		}
	}
	b.pos = function () {
		return this.tf().position.m()
	}
	b.reg = b.rel = function (p) {
		var b = this
		var pts = gpc.iP(p) ? p.pts() : p
		return _.m(pts, function (v) {
			v = V(v)
			return V(v.x - b.X(), v.y - b.Y())
		})
		function docs() {
			//my poly operations can only work with POSITIVE vertices
			//but box2d needs fixt vertices specified relative to a body
			//so this allows the body that the operation was based on to take responsibility
			//for converting them back
			//you can pass in the verts, or the gPoly itself!
			//this returns [V,V,V...]
		}
	}
	pD.tlNeg = pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {// = pD.reg
		return $gP(b2d.sub(this.pts(), V(x, y)))
		// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
		//you can pass in the verts, // or the gPoly itself! //what about a f?
	}
	pD.tl = function (x, y) {
		return $gP(b2d.add(this.pts(), V(x, y)))
	}
	pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
		return this.reg(-V(x, y).x, -V(x, y).y)
	}
	pD.maybeTl = pD.maybeHere = function (xy) {
		return xy ? this.tl(xy) : this
	}
//my poly operations can only work with POSITIVE vertices
//but box2d needs fixt vertices specified relative to a body
//so this allows the body that the operation was based on to take responsibility
//for converting them back
//you can pass in the verts, or the gPoly itself!
	b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
		var b = this
		var vs = gpc.iP(p) ? p.vs() : p
		return _.m(vs, function (v) {
			v = V(v);
			return V(v.x - b.X(), v.y - b.Y())
		})
		//this returns [V,V,V...]
	}
	b.rel = function (gPoly) {
		var b = this
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
		return _.m(verts,
				function (v) {
					return V(v[0] - b.X(), v[1] - b.Y())
				})
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	b.pos = function () {
		return this.tf().position.m()
	} //used in MEET
	pD.reg = pD.rel = function (b) {
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!
		//what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
	pD.tl_possibleAlt = function () {
//pD.tl:
//=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
		pD.ger = function (x, y) {
			var pD = this
			var v = V(x, y);
			pD = pD.reg(-v.x, -v.y)
			return pD
		}
	}
}
function fixtDif(){
	f.dif = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pD = f.GP()
		g.e(function (ob) {
			pD = bx.iB(ob) ?
					ob.gPolWithout(pD) :
					pD.D(ob)
		})
		if (!pD.hasAtLeastOnePoly()) {
			alert('f.dif (scrape.js?)')
		}
		var toBeRegged = g.n ? b : f
		return pD.reg(f).reg(toBeRegged)
		if (g.n) {
			_.in(function () {
				f.kill()
			})
		}
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
	f.minus = f.diff = function (bOrF) {
		var f = this, b = f.body(), g = G(arguments),
				verts, poly
		//can handle a fixt OR a body! or even a gPoly itself!
		poly = f.pts().difference(b2d.isGPoly(bOrF) ?
				bOrF : bOrF.pts())
		_.e(g.r, function (bOrF) {
			poly = poly.difference(
					b2d.isGPoly(bOrF) ?
							bOrF : bOrF.pts())
		})
		if (b2d.hasVerts(poly)) {
			return b.rel(poly)
		}
	}
	f.difKill = function (difWhat) {
		var f = this, g = G(arguments)
		var difdFxt = f.dif(difWhat) //vs is f minus something
		_.in(function () {
			f.kill()
			//then f goes away
		})
		return difdFxt
	}
	f.dif = function () {
		var f = this, g = G(arguments)
		var pD = f.tGP()
		g.e(function (v) {
			pD = pD.D(v)
		})
		pD = pD.tlNeg(f.B())
		if (g.n) {
			f.kill()
		}
		return pD.ifHasPol()
		//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	}
}
function bodSub() {
	bSub = b.reducePolyBy = b.gPolWithout = function (pD) {
		this.fs(function (f) {
			pD = pD.D(f)
		})
		return pD
		// =b.cutPol = b.difFromPol = b.gPolWo = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
	b.subF = function (f1, x, y) {
		var b = this
		var v = V(x, y)
		b.fs(function (f) {
			f.sub($pol(f1, v))
		})
		return b
	}
	b.dif = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = DIF(b, o).reg(b)
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return p
	}
	b.subB = function (b1) {
		return this.fs(function (f) {
			b1.sub(f)
		})
	}
	b.sub1 = function (pD) {
		var b = this, g = G(arguments)
		if (b2d.iF(pD)) {
			b.subF(pD)
		}
		else if (b2d.iB(pD)) {
			b.subB(pD)
		}
		if (g.n) {
			pD.kill()
		}
		return b
	}
	b.sub = function () {
		var b = this, gg = G(arguments), c = b.c()
		gg.e(function (g) {
			if (b2d.iF(g)) {
				b.fs(function (f) {
					f.sub(g)
				})
				if (gg.n) {
					g.kill()
				}
			}
			else if (b2d.iB(g)) {
				g.fs(function (f) {
					b.sub(f)
				})
				if (gg.n) {
					g.kill()
				}
			}
		})
		b.C(b.c())
		return b
	}
	b.subtract = function (a) {
		var g = G(arguments), a = g[0]
		_.each(this.fixts(),
				function (f) {
					f.sub(a)
				})
		if (g.n) {
			a.kill()
		}
		return this
	}
	b.sub = function (a) {
		var p = this.minus(a)
		this.clear()
		this.conc(p)
	}
	b.subPolAtFxt = function (pol, fxt) {
		var g = G(arguments)
		var xy = g.n ? fxt.B().kXY() : fxt.B()
		this.subPol(pol, xy)
		return this
	}
}
function bodDiff() {
	b.dif = b.without = function (o) {
		var b = this, g = G(arguments)
		var f = b.f(), fs = b.fs()
		if (b.count() == 1) {
			return b.f().dif(o, '-')
		}
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return $DIF(b, o).tlNeg(b)
	}
	b.DIF = function (b2) {
		var g = G(arguments), b2 = g[0]
		this.fs(function (f) {
			f.DIFF(b2)
		})
		if (g.n) {
			b2.kill()
		}
		return this
	}
	b.DIFF = function (b2) {
		var g = G(arguments), b2 = g[0],
				b = this, f = b.fixt(), dffV = b.dff(b2).verts()
		b2d.conc(b, _.map(dffV, function (v) {
			return V(v[0] - b.X(), v[1] - b.Y())
		}))
		f.kill()
		b.rot(0)
		if (g.n) {
			b2.kill()
		}
		return this
	}
}
function fixtSub() {
	f.sub = function () {
		var f = this, b = f.B(), g = G(arguments),
				p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
		p = f.dif(g[0], '-') //vs is f minus something
		if (p && !M.p(p).hH()) {
			f.kill() //then f goes away
			if (M.p(p).getArea() < 2000) {
				return
			}
			b.pol(p)//the body makes a new f, from the the vs
		}
		if (g.n) {
			g[0].kill()
		}
		if (g.p) {
			g[0].dyn()
		} //can optionally delete the 'something'
		return f
	}
	f.sub = function (f1) {
		var f = this, b = f.B(), g = G(arguments)
		var pD = f.dif(f1, '-')   //   kill THIS f
		if (g.n) {
			f1.kill()
		}
		if (g.p) {
			f1.dyn()
		}
		if (pD.bigEnough() || g.m) {
			b.pol(pD)
		}
		return f
	}
}
function fixtUni(){
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.jA) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	f.union = function (f2) {
		var f = this, b = f.body(), p //can handle a fixt OR a body!
		if (A(f2)) {
			return this.union.apply(this, f2)
		}
		p = f.pts().union(f2.pts())
		_.e(_.r(arguments), function (f) {
			p = p.union(f.pts())
		})
		return b.rel(p)
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.tlNeg(b) // return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
}
function bodySub() {
	b.subAll = function (poly) {
		return this.fs(function (f) {
			f.sub(poly)
		})
	}
	b.subPol = b.subPoly = b.subP = function (poly, xy) {
		return this.subAll($pol(poly, xy))
	}
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
//lets begin:
	f.sub = function () {
		
		//= f.scrapeWith
		var f = this, b = f.B(), g = G(arguments)
		var difdFxt = f.difKill(g.f)
		if (!bigEnough(difdFxt)) {
			return
		}
// we get the dif of the this and the thing we are subtracting from it...
// then we kill THIS fixt
//here, body makes a new f from the dif (hence, it might be slimmer)
//again... it is fixtizing the result of the gPol subtraction operation
// it subtracted something from this... killed itself..
// .. and now is adding a NEW fixture to replace itself..
//but the new fixture is the difference result of subtracting something else, from it
//so after that subtraction, it killed itself, and and now 
// we are replacing the body that held that fixt, replaces it with the resutl
// of the difference between it and another fixt
		b.pol(difdFxt)
		if (g.n) {
			
			//now that other thing that we subtracted from our fixt before it was killed and replaced..
			//..letst talk about that thing
			//we can optionally kill that thing too!!
			//it may have been a real manufactured body or fixt
			//... though there should be a better way than that!!! !!!! :=)(+
			what.kill()
		}
		if (g.p) {//and  aparently we can also optionally dynamize it!
			what.dyn()
		}
		return f
	}
	f.sub = function (b2) {
		// = f.DIF = f.DIFF
		var f = this, g = G(arguments), b2 = g[0]
		f.B().sep(f.minus(b2))
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	f.reduceB = f.scrapeBodWith = f.subFromBod = function (b) {
		bod.fs(function (f) {
			f.sub(b)
		})
	}
}
function bodyDif() {
	b.gPolWo = without = b.pDWo = function (gPol) {
		this.fs(function (f) {
			gPol = gPol.D(f)
		})
		return gPol
	}
	b.dif = b.without = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = $dif(b, o).reg(b)
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return p
	}
}
function bool(){
	b2d.iG = b2d.iGP = gpc.iPol = b2d.isGPoly = function (a) {
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
	b2d.hasVerts = b2d.hV = function (poly) {
		return poly.m_List.get(0)
	}
}


w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
w.polUnion = w.polU = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).U(p2))
}
w.polStatic = w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.differenceBody = w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
$DIF = function () {
	var g = G(arguments), p
	if (g.A) {
		return g.ap($DIF)
	}
	p = M.p(g.f)
	g.eR(function (pol) {
		p = p.D(M.p(pol))
	})
	return p
}
b.sub = b.scrape = function () {
	var b = this, g = G(arguments), col = g.f
	b.subF = b.scrapeWithFxt = b.subFxt = b._sub = function (f) {
		var b = this
		b.fs(function (fxt) {
			fxt.sub(f)
		})
		return b
	}
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) :
				b2d.iB(ob) ?
						b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
b.explosion = b.exp = function () {//alert('b.exp is random!')
	var b = this, xy
	xy = b.pos()
	b.kill()//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
	return w.D(xy.x, xy.y).rec(60, 60).rot(45)
}
explodableOnContact = b.expl = function (c) {
// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	var b = this
	var victim = b
	victim.cl(function (f) {
		var bulletF = f, bulletB = f.B()
		victim.subF('expl', bulletB.killXY())
		if (c) {
			victim.C(c === '*' ? $r() : c)
		}
	})
	return b
}
b.scrapeWith = b.subFrom = function (fromWhat) {
	var b = this
	b.fs(function (f) {
		fromWhat.sub(f)
	})
	return b
}
b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}
b.explAlt = function (col) {
	var b = this
	b.cl(function (f) {
		b.subPolAtFxt('expl', f, '-')._colorize(col)
	})
	return b
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
}
pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
//function polys(){
//get number of pols
pD.nIP = pS.nIP = pD.numPol = function () {
// =pS.numPol = pD.nPol = pS.nPol = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP
	return this.getNumInnerPoly()
}
//get inner pol
pD.g = pS.gIP = function (n) {
	// = pS.getPoly = pS.g = pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g
	return this.getInnerPoly(n || 0)
	function docs() {
		//GETS ITSELF? //useless?
	}
}
// iterate over ALL inner pols
pD.eIPol = pD.polies = pD.ePol = pS.ePol = pD.each = pD.e = pD.eP = function (fn) {
	var pD = this
	var polys = []
	_.t(pD.nIP(), function (pol) {
		polys.push(pD.g(pol))
	})
	if (F(fn)) {
		_.e(polys, fn);
		return pD
	} //_.t(pD.nIP(), function (i) {fn(pD.g(i), pD, i)}) //_.t(pD.nIP(), function (n) {fn(pD.iPol(n), n, nIP)})
	return polys
}

function _pre(){

	w.ter = function () {
		var w = this, ter = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
				ter.push({
					b: b,
					vs: b.f().vs(),
					p: M.p([
						V(i * 25 + 410, j * 25 + 210),
						V(i * 25 + 410, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 210)])
				})
			})
		})
		return ter
	}
	w.destructableBricks = w.ter = function () {
		var w = this, ter = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
				ter.push({
					b: b,
					vs: b.f().vs(),
					p: M.p([
						V(i * 25 + 410, j * 25 + 210),
						V(i * 25 + 410, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 210)
					])
				})
			})
		})
		return ter
	}
	w.destructableBricks = w.ter = function () {
		var w = this, ter = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
				ter.push({
					b: b,
					vs: b.f().pts(),
					p: M.p([V(i * 25 + 410, j * 25 + 210), V(i * 25 + 410, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 190), V(i * 25 + 430, j * 25 + 210)])
				})
			})
		})
		return ter
	}
}