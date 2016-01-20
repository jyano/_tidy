cjs.tween = function (a, b) {
	cjs.tween = function (a, b) { // EaselTween=tw=
		var displayObject = a
		if (U(b)) {
			return tweenGet(displayObject)
		}
		//first arg passed to twg, and then rest of args are 'to' pams
		var g = G(arguments)
		displayObject = tweenGet(g[0])
		_.each(g.r, function (b) {
			
			//can pass obj, time ,ease
			if (A(b)) {
				if (b[2]) {
					displayObject = displayObject.to(ww1(b[0]), b[1], cjs.ease(b[2]))
				}
				
				//can pass obj, time
				else if (b[1]) {
					
					//can set pops to another obj??
					if (O(b[1])) {
						displayObject = displayObject.set(ww1(b[0]), b[1])
					}
					else {
						displayObject = displayObject.to(ww1(b[0]), b[1])
					}
				}
				else {
					displayObject = displayObject.tick(a[0])
				}
			}

//can pass a function and it will run when it's its turn
			else if (F(b)) {
				displayObject = displayObject.call(b, [])
			}
			
			
			//make it wait, optionally pass in true! ?
			else if (N(b)) {
				if (b < 0) {
					// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
					displayObject = displayObject.wait(b * -1, true)
				}
				else {
					displayObject = displayObject.wait(b)
				}
			}
			
			
			
			//for playing/stopping?
			else if (O(b) && b.length == 1) {
				if (b.p) {
					displayObject = displayObject.play(b.p)
				}
				else if (b.s) {
					displayObject = displayObject.stop(b.s)
				}
			}
			else {
				displayObject = displayObject.to(ww1(b))
			}
		})
		return Tw(displayObject)
	}
// EaselTween=tw=
	var displayObject = a
	if (U(b)) {
		return tweenGet(displayObject)
	}
	//first arg passed to twg, and then rest of args are 'to' pams
	var g = G(arguments)
	displayObject = tweenGet(g[0])
	_.each(g.r, function (b) {
		
		//can pass obj, time ,ease
		if (A(b)) {
			if (b[2]) {
				displayObject = displayObject.to(ww1(b[0]), b[1], cjs.ease(b[2]))
			}
			
			//can pass obj, time
			else if (b[1]) {
				
				//can set pops to another obj??
				if (O(b[1])) {
					displayObject = displayObject.set(ww1(b[0]), b[1])
				}
				else {
					displayObject = displayObject.to(ww1(b[0]), b[1])
				}
			}
			else {
				displayObject = displayObject.tick(a[0])
			}
		}

//can pass a function and it will run when it's its turn
		else if (F(b)) {
			displayObject = displayObject.call(b, [])
		}
		
		
		//make it wait, optionally pass in true! ?
		else if (N(b)) {
			if (b < 0) {
				// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
				displayObject = displayObject.wait(b * -1, true)
			}
			else {
				displayObject = displayObject.wait(b)
			}
		}
		
		
		
		//for playing/stopping?
		else if (O(b) && b.length == 1) {
			if (b.p) {
				displayObject = displayObject.play(b.p)
			}
			else if (b.s) {
				displayObject = displayObject.stop(b.s)
			}
		}
		else {
			displayObject = displayObject.to(ww1(b))
		}
	})
	return Tw(displayObject)
}
 