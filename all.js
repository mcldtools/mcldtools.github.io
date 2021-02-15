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
  console.log('set color',cname,x);
	for(i=0;i<5;i++){
		let s='';
		if(i==x) s='background-color:blue;color:white';
		e=document.getElementById(cname+i);
    console.log(i,x,e);
		if(e) e.style=s;
    console.log(i,x,e);
	}
}
function setit(clicked_id){
  const cname=clicked_id.substring(0,2);
  const x=clicked_id.substring(2,1);
  setColor(cname,x)
	setCookie(cname,x);
}

function presetColor(cname){
  x=getCookie(cname);
  if(x>'') document.getElementById(cname+x).style='background-color:navy;color:white;'
}
function putComment(cname){
  const str1="<h3>Comment</h3>\n<textarea class=wide id='n"+cname+"' rows=3 width=100% onchange='changed(this)'>\n</textarea>\n";
  const str2="<button onclick='saveComment('n"+cname+"' class=unsaved>Click to save comment</button>\n";
  document.write(str1+str2);
}
function putRubric(cname,contents) { // Create layout based on an array of options
  document.write("<h2>"+contents[0]+"</h2>\n");
  for(i=0;i<5;i++){
    document.write("<p><button id="+cname+i+" onclick='setit(this.id)' id='"+cname+i+"'>"+i+"</button>\n"+contents[1+i]+"</p>\n");
  }
}