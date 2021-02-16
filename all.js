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
function setCookie(cname,cvalue) {
  const expiry="Fri, 01 Jan 2038 00:00:01 GMT";
	const arg = cname + "=" + cvalue + ";" + expiry;
	document.cookie = arg ;
}
function setColor(cname,x){
//  console.log('set color',cname,x);
	for(i=0;i<5;i++){
		let s='';
		if(i==x) s='background-color:blue;color:white';
		e=document.getElementById(cname+i);
//    console.log(i,x,e);
		if(e) e.style=s;
//    console.log(i,x,e);
	}
}
function setit(clicked_id){
//  console.log("setit",clicked_id);
  const cname=clicked_id.substr(0,2);
  const x=clicked_id.substr(2,1);
  setColor(cname,x)
	setCookie(cname,x);
}

function putRubric(cname,contents,cprior,cnext) { // Create layout based on an array of options
	// First, put the navbar, title and 5 questions
  s="<nav><a href=/ >Home</a> <a href="+cprior+".html>Prior</a> <a href="+cnext+".html>Next</a>"
  +"<a href=/results.html>Results</a> <a href=/data.html>Data</a></nav>\n"
 
  +"<h2>"+contents[0]+"</h2>\n";
  document.write(s);
  for(i=0;i<5;i++){
    document.write("<p><button id="+cname+i+" onclick='setit(this.id)'>"+i+"</button>\n"+contents[1+i]+"</p>\n");
  }
	// Next, paint the color of the button if preset
	x=getCookie(cname);
  	if(x>'') document.getElementById(cname+x).style='background-color:navy;color:white;';
  const str1="<h3>Comment</h3>\n<textarea class=wide id='n"+cname+"' rows=3 width=100% onchange='changed(this)'>\n</textarea>\n";
  const str2="<button onclick='saveComment('n"+cname+"' class=unsaved>Click to save comment</button>\n";
  document.write(str1+str2);
}
