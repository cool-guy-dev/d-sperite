//flood fill (recursion base)
//copyright by cool-guy-is-cool
//built for Bsprite-online pixelart editor

//inspired from geeks for geeks flood fill algorythem for js.
//recursor
function floodFillUtil(x, y, prevC, newC)
{
  var cc = context.getImageData(x,y,10,10);
  var currentC = `(${cc.data[0]},${cc.data[1]},${cc.data[2]},${cc.data[3]})`;
	if (currentC != prevC) return;
  if (x >= 320 || x < 0 || y>= 320 || y < 0) return;
  context.fillRect(x,y,10 ,10);

	floodFillUtil(x + 10, y, prevC, newC);
	floodFillUtil(x - 10, y, prevC, newC);
	floodFillUtil(x, y + 10, prevC, newC);
	floodFillUtil(x, y - 10, prevC, newC);
	}

//main call
function floodFill(screen, x, y, newC) {
  var xfloodfill = X;
  var yfloodfill = Y;
  var getCanvasDataVar = context.getImageData(xfloodfill,yfloodfill,10,10);
	var prevC = `(${getCanvasDataVar.data[0]},${getCanvasDataVar.data[1]},${getCanvasDataVar.data[2]},${getCanvasDataVar.data[3]})`;
	if (prevC == newC) return;
	floodFillUtil(xfloodfill, yfloodfill, prevC, newC);
}
