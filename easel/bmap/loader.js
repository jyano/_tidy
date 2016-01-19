ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}


ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
	if (F(fn)) {
		this.on("complete", fn)
	}
	return this
}


ld.mf = function (mf) {
	// q.mf protosig: 
	// (1) 'me',..
	// (2)  {src:'me', id:'him'},.. 
	// (3) [ {src:*, id:*}, 'me',.. ]		
	mf = $its(A(mf) ? mf : G(arguments))
	this.loadManifest(mf)
	return this
} 

 
_$Ld = function () {
	return new cjs.LoadQueue(true)
}

$Ld = $ld = cjs.lQ = Q = function () {

	
//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
	
	var g = G(arguments), o
	
	o = g.F_ ? {done: g.f, file: g.s} :
			(g.A_ || g.S_) ?
			{mf: g.f, done: g.s, file: g.t} :
					g.f
	
	o.mf = o.mf || _MF
	var ld = _$Ld()
	if (o.file) {ld.file(o.file)}
	if (o.done) {ld.done(function (e) {
			//o.done(function(i) {return ld.i(i)}, e)
			o.done(ld)
		})}
		
	if (o.mf) {ld.mf(o.mf)}

	Q = ld

	Q.ran = true

	return Q
}


Q.ran = false


ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
	
	
	var b, g = G(arguments)
	
	b = Q.bm(name)
			.XY(N(x, 0), N(y, 0))
			.sXY(N(sX, 1), N(sY, sX || 1))
			.rt(N(rt, 0))


	if (!g.n) {b.rC()}
	if (g.p) {b.drag()}
	
	this.A(b);
	return b
}

Q1 = function (imgs, fn) {
	var q = cjs.lq()
	mf = []
	_.e(imgs, function (v) {
		mf.push({
			src: cjs.src(v),
			id: v
		})
	})
	
	q.manifest(mf)
	
	q.complete(function () {
		fn(q)
	})
}
ld.jQuery = ld.$ = function (i) {
	return $(this.i(i))
}
ld.dfF = cjs.handleFileLoad = function (e) {
	alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
	images = window['images'] || {}
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
	this.on("fileload", fn)
	return this
}
ld.bm = function (i, ct, x, y) {
	var ld = this
	var bm = $Bm(ld.get(i))
	if (N(ct)) {
		bm.XY(ct, x)
	}
	else if (O(ct)) {
		bm.a2(ct, x, y)
	}
	return bm
}


 function manifest(){
	 $Mf = function (mf, fn) {
		 cjs.manifest = function (fn) {
			 _manifest_ = [{
				 id: "chicks", src: "/chicks.png"
			 },
				 {id: "me", src: "/me.png"},
				 {id: "guy", src: "/guy.png"},
				 {id: "sun", src: "/sun.png"}]
			 var q = cjs.loadQueue()
			 q.complete(function () {
				 fn(function (getResult) {
					 return q.getResult(getResult)
				 })
			 })
					 .manifest(_manifest_)
		 }
		 return $Ld(fn).mf(mf)
	 }
	 _mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
	 _MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
	 _$it = function (i) {
		 return {src: _.src(i), id: i}
	 }
	 $it = function (i) {
		 return S(i) ? _$it(i) : i
	 }
	 $its = function (its) {
		 return _.m(A(its) ? its : arguments, $it)
	 }
	 }
	 
	 manifest()