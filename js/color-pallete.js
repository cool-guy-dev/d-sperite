var pallete = document.getElementById('pallete');
var current_pallete_tab = 1;
// current_pallete_tab
// 1 = Basic
// 2 = Skin
// 3 = Nature
// 4 = Legend
// 5 = Custom
var globalcolor = "#000";

function showPallete(type) {
  for (var i = 0; i < json; i++) {
  }
}
function changePalleteTab() {
  if (current_pallete_tab == 1) {
    showPallete(current_pallete_tab)
  }
  if (current_pallete_tab == 2) {
    showPallete(current_pallete_tab)
  }
  if (current_pallete_tab == 3) {
    showPallete(current_pallete_tab)
  }
  if (current_pallete_tab == 4) {
    showPallete(current_pallete_tab)
  }
  if (current_pallete_tab == 5) {
    showPallete(current_pallete_tab)
  }
}
function addToPallete(color) {
  var pallete_item = document.createElement('button');
  pallete_item.setAttribute("class",'pallete_item');
  pallete_item.setAttribute("style",`background:${color};`);
  pallete_item.setAttribute("onclick",'pencolor = this.style.backgroundColor;');
  pallete.appendChild(pallete_item)
}
function setColorToColorSelectors(selector) {
  selector = document.getElementById(selector);
  console.log(selector);
  selector.style.backgroundColor = pencolor;
}
