function solution(wallpaper) {
  let startx = 50;
  let starty = 50;
  let finishx = 0;
  let finishy = 0;

  wallpaper.forEach((line, i) => {
    [...line].forEach((val, j) => {
      if (val === '#') {
        startx = Math.min(startx, i);
        starty = Math.min(starty, j);
        finishx = Math.max(finishx, i + 1);
        finishy = Math.max(finishy, j + 1);
      }
    });
  });
  return [startx, starty, finishx, finishy];
}
