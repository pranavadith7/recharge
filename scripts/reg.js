function check(form) {
			var em = form.email.value;
			var ph = form.num.value;
			var phlen = ph.length;
			var com = ".com";
			var l = 3;
			var emtrue = 1;
			var 
			for(var i=em.length-1; i>=0 && l>=0; i--) {
				if(em.charAt(i) != com.charAt(l)) {
					emtrue = 0;
					break;
				}
				l--;
			}
			var one = 0;
			var two = 0;
			// for(var i=0; i<em.length; i++) {
			// 	if(em.charAt(0) != "@" && em.charAt(0) != ".") {
			// 		one = 1;
			// 	}
			// 	if(em.charAt(i) == "@") {
			// 		i++;
			// 		if(i<em.length) {
			// 			if(em.charAt(i) !=".") {
			// 				two = 1;
			// 			}
			// 		}
			// 	}
			// }
			if(emtrue == 0 && one == 1 && two == 1) {
				alert("Need a valid email id");
			}
			if(phlen == 10) {
				alert("Need  valid mobile number");
			}
			if(form.pass.value == form.conpass.value) {
				if(emtrue == 1 && phlen == 10) {
					window.location.href = "regsuccess.html";
					return false;
				}
			}
			else {
				alert("Sorry, Passwords do not match");
			}
		}