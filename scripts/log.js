function check() {
	// window.open ('URL', "_newtab" );    
	var nam = document.getElementById('username').value;
	var pass = document.getElementById('psd').value;
	// alert(nam + "  " + pass);
	if(nam == "admin" && pass == "admin") {
		// alert(nam + "  " + pass);
		// window.location.href = "profile.html";
		// location.replace("https://www.google.com");
		// replaceLocation();
		document.form1.username.value = "";
		window.location.href = "./profile.html";
		return false;
		// window.location.href = "https://www.google.com";
	} 
	else if(nam == "" || pass == "") {
		if (name == "" && pass == "") {
			alert("Usename and Password cannot be empty");
		}
		else if(nam == "") {
			alert("Usename cannot be empty");
		} else {
			alert("Password cannot be empty");
		}
	} 
	else {
		alert("Invalid Username or Password");
	}
 }