var prethodniPolozaj = window.pageYOffset;
window.onscroll = function() {
  var sadasnjiPolozaj = window.pageYOffset;
  if (prethodniPolozaj > sadasnjiPolozaj) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-175px";
  }
  prethodniPolozaj = sadasnjiPolozaj;
}
/*
var odbrojavanje = new Date("Jan 1, 2019 00:00:00").getTime();
var x = setInterval(function() {
	var sad = new Date().getTime();
	var razlika = odbrojavanje - sad;

		var dani = Math.floor(razlika / (1000*60*60*24));
		var sati = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minuti = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
		var sekundi = Math.floor((razlika % (1000 * 60)) / 1000);

			document.getElementById("sat").innerHTML = dani + "d " + sati + "s " + minuti + "min " + sekundi + "s ";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("sat").innerHTML = "ODBROJAVANJE ZAVRSENO";
	}
}); */
