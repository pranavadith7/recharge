function openWin() {
    window.location.replace("./index.html");
}

var ele = document.getElementsByClassName("send");
var i;
for(i=0; i<ele.length; i++) {
	if(!isNaN(ele[i].value)) {
		document.getElementById("res").innerHTML = "Amount " + ele[i].value + " Recharged successfully."
	}
}