(function () {

	var paper = $('#paper'),
		step = 15,
		width = document.width,
		height = document.height;
		



	function redraw(width, height) { 
		var ctx = paper[0].getContext('2d'),
			x,
			y;

		ctx.lineWidth = 1.0;
		ctx.strokeStyle = 'rgb(212, 228, 247)';
		ctx.lineCap = 'square';

		ctx.beginPath();
		for (x=0; x<width; x+=step) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, height);
		}

		for (y=0; y<height; y+=step) {
			ctx.moveTo(0, y);
			ctx.lineTo(width, y);
		}
		ctx.closePath();
		ctx.stroke();
	}


	$(window).resize(function () {
		var w = document.width,
			h = document.height;

		paper.attr({
			width: w,
			height: h
		});

		redraw(w, h);
	});

	paper.attr({
		width: width,
		height: height
	});
	redraw(width, height);

} ());