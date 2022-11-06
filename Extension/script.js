document.addEventListener('DOMContentLoaded', function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "", true);  //database query file
	xhr.onreadystatechange = function() {
	
		if (xhr.readyState == 4) {
			varxhrjson = JSON.parse(xhr.responseText);
			/* Replace the below mentioned field id's with that of your form */
			chrome.tabs.executeScript(null,{code:"document.getElementById('name').value = '"+varxhrjson['cname']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('email').value = '"+varxhrjson['cmail']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('password').value = '"+varxhrjson['cpassword']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('password_check').value = '"+varxhrjson['cpassword']+"'"});
		}
	}
	xhr.send();
});