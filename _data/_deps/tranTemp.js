 
AMR0 =  function () {
//  cjs.sharedCode()
	var stage, isDrawing, drawingCanvas,
	 oldPt, oldMidPt, displayCanvas,
			image, bitmap, maskFilter, 
			cursor, text, blur
			
	examples.showDistractor()
	
	
	image = new Image();
	image.onload = handleComplete
	image.src = "/chicks.png"
	
	
	cjs.testCanvas()
	
	
	stage = new cjs.Stage("testCanvas");
	text = new cjs.Text("Loading...", "20px Arial", "#FFF");
	text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
	text.textAlign = "center"
	function handleComplete() {
		examples.hideDistractor();
		st=stage
		cjs.Touch.enable(stage);
		
		st.enableMouseOver();
		
		 
		st.on("stagemousedown", handleMouseDown);
		st.on("stagemouseup", handleMouseUp);
		st.on("stagemousemove", handleMouseMove);
		

		drawingCanvas = new cjs.Shape();

		bitmap = new cjs.Bitmap(image);
		blur = new cjs.Bitmap(image);
		
		blur.filters = [new cjs.BlurFilter(24, 24, 2),
		 new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
		blur.cache(0, 0, 960, 400);
		text.text = "Click and Drag to Reveal the Image.";
		stage.addChild(blur, text, bitmap);
		
		updateCacheImage(false);
		
		cursor = new cjs.Shape(new cjs.Graphics()
				.beginFill("#FFFFFF")
				.drawCircle(0, 0, 25));
		cursor.cursor = "pointer";
		
		stage.addChild(cursor);
	}
	
	
	function handleMouseDown(event) {
		oldPt = new cjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt;
		isDrawing = true;
	}
	
	function handleMouseMove(event) {
		cursor.x = stage.mouseX;
		cursor.y = stage.mouseY;
		if (!isDrawing) {
			stage.update();
			return;
		}
		var midPoint = new cjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
		drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
				.beginStroke("rgba(0,0,0,0.2)")
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;
		oldMidPt.x = midPoint.x;
		oldMidPt.y = midPoint.y;
		updateCacheImage(true);
	}
	
	function handleMouseUp(event) {
		updateCacheImage(true);
		isDrawing = false;
	}
	
	function updateCacheImage(update) {
		if (update) {
			drawingCanvas.updateCache();
		} else {
			drawingCanvas.cache(0, 0, image.width, image.height);
		}
		maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
		bitmap.filters = [maskFilter];
		if (update) {
			bitmap.updateCache(0, 0, image.width, image.height);
		} else {
			bitmap.cache(0, 0, image.width, image.height);
		}
		stage.update();
	}
}
TRF0 =   function () {
	degToRad = Math.PI / 180;
	
	cjs.testCanvas()
	
	//cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	
	 examples.showDistractor()
	
	
	stage = new cjs.Stage("testCanvas")
	stage.enableMouseOver();
	cjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	var img = new Image();
	img.onload = handleImageLoad;
	img.src = "/chicks.png";
	function handleImageLoad(evt) {
		examples.hideDistractor();
		var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
		sliceWidth = imgWidth / sliceCount;
		sliceContainer = new cjs.Container();
		sliceContainer.x = stage.canvas.width / 2;
		for (var i = 0; i < sliceCount; i++) {
			var slice = new cjs.Bitmap(img);
			slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
			slice.cache(0, 0, sliceWidth, imgHeight);
			slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
			sliceContainer.addChild(slice);
		}
		var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
		slider.on("change", handleSliderChange, this);
		stage.addChild(sliceContainer, slider);
		updateEffect(slider.value);
	}
	
	
	function handleSliderChange(evt) {updateEffect(evt.target.value);}
	
	function updateEffect(value) {
		var l = sliceContainer.getNumChildren();

		for (var i = 0; i < l; i++) {
			var slice = sliceContainer.getChildAt(i);
			slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
			if (i % 2) {
				slice.skewY = value;
			} else {
				slice.skewY = -value;
				slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
			}
			slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
			slice.filters[0].matrix.setColor(Math.sin(slice.skewY * degToRad) * -80);
			slice.updateCache();
		}
		
		stage.update();
	}
}