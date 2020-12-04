function show(simCard, colorName) {
	var i;
	var x = document.getElementsByClassName("sims");
	for(i=0; i<x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(simCard).style.display = "block";
	// document.getElementById(simCard).style.backgroundColor = "#1111";
	var table = document.getElementsByClassName("tables");
	var j;
	for(j=0; j<table.length; j++) {
		table[j].style.backgroundColor = colorName;
	}

	if(colorName == "red") {
		document.getElementById("air").style.backgroundColor = colorName;
		document.getElementById("air").style.color = "white";
		document.getElementById("bsn").style.backgroundColor = "#2196f3";
		document.getElementById("ji").style.backgroundColor = "#2196f3";
	}
	else if(colorName == "navy") {
		document.getElementById("bsn").style.backgroundColor = colorName;
		document.getElementById("bsn").style.color = "white";
		document.getElementById("air").style.backgroundColor = "#2196f3";
		document.getElementById("ji").style.backgroundColor = "#2196f3";
	}
	else {
		document.getElementById("ji").style.backgroundColor = colorName;
		document.getElementById("ji").style.color = "black";
		document.getElementById("bsn").style.backgroundColor = "#2196f3";
		document.getElementById("air").style.backgroundColor = "#2196f3";
	}
	document.getElementByClassName("content").style.backgroundColor = colorName;
}

show('airtel', 'red');