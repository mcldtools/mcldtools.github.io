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
function setCookie(cname, cvalue) {
  const expiry="Fri, 01 Jan 2038 00:00:01 GMT";
	const arg = cname + "=" + cvalue + ";" + expiry;
	document.cookie = arg ;
}
function setColor(cname,x){
  console.log('set color',cname,x);
	for(i=0;i<5;i++){
		let s='';
		if(i==x) s='background-color:blue;color:white';
		e=document.getElementById(cname+x);
    console.log(i,x,e);
		if(e) e.style=s;
	}
}
function setit(cname,x){
	setColor(cname,x);
	setCookie(cname,x);
}
