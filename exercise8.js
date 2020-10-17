function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
}

window.onload = function () {
    initGrid();
}


/*## Exercise #8 (10): Color picker

  - Make a color picker that displays a color palette; display colored tiles (rectangles) in the "colors" div.
  - When a colored tile is clicked:
    * write the code of that color inside the "selected" div;
    * set the background of the "selected" div to that color.
  - You are given the [HTML file](exercise8.html) and [part of the JS code](exercise8.js) that collects the different colors in an array. (Only the JS file needs to be edited.)*/
 