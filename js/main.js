var pencolor = "#000";
//canvas x,y
var X;
var Y;
//basic switches
var mousedown = false;

//calls
const canvas = document.getElementById('gameCanvas');
context = canvas.getContext("2d");

//mouse pos algorythem;
window.addEventListener('load', function () {

  let last_event; // we will store our mouseevents here

  // we now listen to the mousemove event on the document,
  // not only on the canvas
  document.addEventListener('mousemove', ev_mousemove);
  document.addEventListener('scroll', fireLastMouseEvent, { capture: true } );
  // to get the initial position of the cursor
  // even if the mouse never moves
  // we listen to a single mouseenter event on the document's root element
  // unfortunately this seems to not work in Chrome
  document.documentElement.addEventListener( "mouseenter", ev_mousemove, { once: true } );

  // called in scroll event
  function fireLastMouseEvent() {
    if( last_event ) {
      // fire a new event on the document using the same clientX and clientY values
      document.dispatchEvent( new MouseEvent( "mousemove", last_event ) );
    }
  }

  // mousemove event handler.
  function ev_mousemove (ev) {
    const previous_evt = last_event || {};
    const was_offscreen = previous_evt.offscreen;

    // only for "true" mouse event
    if( ev.isTrusted ) {
      // store the clientX and clientY props in an object
      const { clientX, clientY } = ev;
      last_event = { clientX, clientY };
    }

    // get the relative x and y positions from the mouse event
    const point = getRelativePointFromEvent( ev, canvas );

    // check if we are out of the canvas viewPort
    if( point.x < 0 || point.y < 0 || point.x > canvas.width || point.y > canvas.height ) {
      // remember we were
      last_event.offscreen = true;
      // if we were already, don't draw
      if( was_offscreen ) { return; }
    }
    // we come from out-of-screen to in-screen
    else if( was_offscreen ) {
      // move to the previous point recorded as out-of-screen
      const previous_point = getRelativePointFromEvent( previous_evt, canvas );
      context.moveTo( previous_point.x, previous_point.y );
    }
    X = Math.floor(point.x/10)*10
    Y = Math.floor(point.y/10)*10
    draw_m()
    // // add the new point to the context's sub-path definition
    // context.lineTo( point.x, point.y );

    // // clear the previous drawings
    // context.clearRect( 0, 0, canvas.width, canvas.height );
    // // draw everything again
    // context.stroke();

  }

  function getRelativePointFromEvent( ev, elem ) {
    // first find the bounding rect of the element
    const bbox = elem.getBoundingClientRect();
    // subtract the bounding rect from the client coords
    const x = ev.clientX - bbox.left;
    const y = ev.clientY - bbox.top;
    return { x, y };
  }
});

//draw on mouse move
function draw_m() {
  context.fillStyle = pencolor;
	if (mousedown == true) {
		var dash = false;
		var flower= true;
		if (flower==true) {
			context.fillRect(X,Y,10 ,10);
			context.fillRect(X+10,Y,10 ,10);
			context.fillRect(X,Y+10,10 ,10);
			context.fillRect(X-10,Y,10 ,10);
			context.fillRect(X,Y-10,10 ,10);
		}
		if (dash==true) {
			context.fillRect(X-10,Y,10 ,10);
			context.fillRect(X,Y,10 ,10);
			context.fillRect(X+10,Y,10 ,10);


		}
		else{
			context.fillRect(X,Y,10 ,10);


	}
}

		}

//draw on click
function draw_p() {
	context.fillRect(X,Y,10 ,10);
		// var dash = false;
		// var flower = false;
		// if (flower==true) {
		// 	context.fillRect(X,Y,10 ,10);
		// 	context.fillRect(X+10,Y,10 ,10);
		// 	context.fillRect(X,Y+10,10 ,10);
		// 	context.fillRect(X-10,Y,10 ,10);
		// 	context.fillRect(X,Y-10,10 ,10);
		// }
		// if (dash=true) {
		// 	context.fillRect(X-10,Y,10 ,10);
		// 	context.fillRect(X,Y,10 ,10);
		// 	context.fillRect(X+10,Y,10 ,10);


		// }
		// else{
		// 	context.fillRect(X,Y,10 ,10);
		// }
}
// function zoom() {
// 	canvas.setAttribute("width",'100px')
// 	canvas.setAttribute("height",'100px')

// }
// var M = 32;
// var N = 32;
// 	var screen = finalCanvasData;
// 	var x = X,
// 		y = Y,
// 		newC = 3;
// var finalCanvasData;
// function zoom(){
// 	var getCanvasDataX = 0;
// 	var getCanvasDataY = 0;
// 	var finalCanvasData = [
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	];
// 	for (var i = 0; i < 32; i++) {
// 		getCanvasDataX = 0;
// 		for (var j = 0; j < 32; j++) {
// 			var getCanvasDataVar = context.getImageData(getCanvasDataX,getCanvasDataY,10,10);
// 			finalCanvasData[i][j] = `(${getCanvasDataVar.data[0]},${getCanvasDataVar.data[1]},${getCanvasDataVar.data[2]},${getCanvasDataVar.data[3]})`
// 			getCanvasDataX += 10;
// 		}
// 		getCanvasDataY += 10;
// 	}
// 	floodFill(finalCanvasData,"(22,22,22,1)");
// }
//
//
// function floodFillUtil(screen, x, y, prevC, newC)
// 	{
// 		var floodfillX = x;
// 		var floodFillY = y;
//
// 		// Base cases
// 		var getCanvasDataVar = context.getImageData(floodfillX,floodfillY,10,10);
// 		// if (x < 0 || x >= M || y < 0 || y >= N) return;
// 		if (getCanvasDataVar != prevC) return;
//
// 		// Replace the color at (x, y)
// 		context.fillStyle = newC;
// 		context.fillRect(X,Y,10 ,10);
//
// 		// Recur for north, east, south and west
// 		floodFillUtil(screen, x + 10, y, prevC, newC);
// 		floodFillUtil(screen, x - 10, y, prevC, newC);
// 		floodFillUtil(screen, x, y + 10, prevC, newC);
// 		floodFillUtil(screen, x, y - 10, prevC, newC);
//
//
// 	}
//
// 	// It mainly finds the previous color
// 	// on (x, y) and calls floodFillUtil()
//
// var just +=1;
// function floodFill(screen,newC) {
// 	if (just == 1){
// 		var just += 1
// 		return
// 	};
// 	var getCanvasDataVar = context.getImageData(X,Y,10,10);
// 	var prevC = `(${getCanvasDataVar.data[0]},${getCanvasDataVar.data[1]},${getCanvasDataVar.data[2]},${getCanvasDataVar.data[3]})`;
// 	if (prevC == newC) return;
// 	floodFillUtil(screen, X, Y, prevC, newC);
// 	}
//
// 	// Driver code
