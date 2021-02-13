function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	const expires = "expires="+ d.toUTCString();
	const arg = cname + "=" + cvalue + ";" + expires + ";path=/";
	console.log(arg);
	document.cookie = arg ;
	console.log("Cookie: " + document.cookie);
}
function setit(cname,x){
	setColor(cname,x);
	setCookie(cname,x,3000);
}
function setColor(cname,x){
	for(i=0;i<5;i++){
		let s='';
		if(i==x) s='background-color:blue;color:white';
		document.getElementById(cname+x).style=s;
	}
}
