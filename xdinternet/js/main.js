Slip(document.getElementById('container'), 'y').webapp();
Slip(document.getElementById('container'), 'y').webapp().end(function() {
  if (this.page === 5) location.reload();
});
