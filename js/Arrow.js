function arrow() {
  document.getElementById('main').style.animation = 'move 2s 1';
  setTimeout("window.open('random.html', '_self')", 1000);
}

function refresh() {
  // document.getElementById('container').style.animation = 'move 2s 1';
  window.open('random.html', '_self');
}
