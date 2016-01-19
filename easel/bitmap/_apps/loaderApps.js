
QU1 = function () {
	$St()
	Q(["me", {id: "guy", src: "/guy.png"}], function (q) {
		st.A(q.bm("me"))
		st.A(q.bm("guy", 300, 300))
	})
}
QU0 = function () {
	Q(['guy', 'me'], function () {
		$.A(Q.get('me'))
	})
}
QU = MF = MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(q.bm('me'))
		st.A( q.bm('guy').dg())
	})
	
}
QU2 = function () {
	Q([{id: "myImage", src: "/me.png"}
	], function (q) {
		q.bm("myImage", $St())
	})
}

QU3 = function () {
	Q([$it("me"), $it({id: "guy", src: "/guy.png"})], function (q) {
		q.bm("me", $St());
		q.bm("guy", st)
	})
}

IT = QU4 = function () {
	Q(function () {
	
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	
	}).mf("me", guyIt)
}


//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
function later() {
	cjs.mf = cjs.manifest = function () {
		var g = G(arguments)
		var mf = []
		_.e(g, function (i) {
			mf.push($it(i))
		})
		return mf
	}
	cjs.handleFileLoad = function (e) {
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
		alert('manifest')
		return cjs.mf.apply(null, _.m(a.images, function (i) {
			return _.crs(i)
		}))
	}
}
guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
