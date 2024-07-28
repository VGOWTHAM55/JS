var x, y;
for (x = 2; x <= 100; x++) {
  var z = true;
  for (y = 2; y < x; y++) {
    if (x % y == 0) {
      z = false;
      break;
    }
  }
  if (z) {
    console.log(x + "");
  }
}
