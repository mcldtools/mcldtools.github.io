// This includes all functions called by pages independent of language
function setup(){
  // first, pull in the cookie object and return it
  cookie=document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    prev[name] = decodeURI(value);
    return prev
  }, {});  
// next, output the navbar with the appropriate arrow links in this template
// note - now in this system, 0=info, 1=rubric, 2=a1 etc
now=cookie.pointer; // what page are we one?
if(now==undefined) now=1;
if(now>28) now=28;
prior=now-1; if(prior<0) prior=0;
next=now+1;
lang=cookie.lang;
LANG=lang.toUpperCase();
console.log('setup lang',lang);

const contents=`<nav>
<a id='lang' onclick='setLang()'>${LANG}</a>
<a href=/ ><svg height='24' width='24'>
<circle cx='12' cy='12' r='10' stroke='white' stroke-width='3'></circle>
<circle cx='12' cy='7' r='2' fill='white'></circle>
<line x1='12' y1='20' x2='12' y2='11' stroke='white' stroke-width='3'></line>
</svg></a>
<a href=${lang}.html?${prior}><svg height='24' width='24'>
<polygon points='0,12 12,24 12,18 24,18 24,6 12,6 12,0' fill='white'></polygon></svg></a>
<a href=${lang}.html?0><svg height='24' width='24'>
<polygon points='12,0 24,12 18,12 18,24 6,24 6,12 0,12' fill='white'></polygon></svg></a>
<a href=${lang}.html?${next}><svg height='24' width='24'>
<polygon points='24,12 12,24 12,18 0,18 0,6 12,6 12,0' fill='white'></polygon></svg></a>
<a href=results.html><svg height='24' width='24'>
<line x1='2' y1='0' x2='2' y2='22' stroke='white' stroke-width='3'></line>
<line x1='2' y1='22' x2='24' y2='22' stroke='white' stroke-width='3'></line>
<line x1='08' y1='18' x2='8' y2='8' stroke='white' stroke-width='4'></line>
<line x1='15' y1='18' x2='15' y2='0' stroke='white' stroke-width='4'></line>
<line x1='22' y1='18' x2='22' y2='10' stroke='white' stroke-width='4'></line>
</svg></a>
</nav>`;
document.write(contents);
return cookie;
}

function setLang(){ // for now, this will be a toggle
  lang=document.getElementById('lang').innerHTML;
  if(lang=='EN') {lang='FR';} else {lang='EN'}
  setCookie('lang',lang.toLowerCase());
  location.reload();
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}



function setCookie(cname,cvalue) {
  const expiry="Fri, 01 Jan 2038 00:00:01 GMT";
	const arg = cname + "=" + cvalue + ";" + expiry;
	document.cookie = arg ;
}

function saveComment(cname) {
  const com=document.getElementById(cname).value;
  console.log('saveComment',cname,com);
  setCookie(cname,com);
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
  // And fill in the comment if it exists
  cid='n'+cname;
  com=getCookie(cid);
  const str1="<h3>Comment</h3>\n<textarea class=wide id='"+cid+"' rows=3 width=100% >\n";
  const str2="</textarea>\n<button onclick='saveComment("+'"'+cid+'"'+")'>Click to save comment</button>\n";
  document.write(str1+com+str2);
}

function spider(data,labels) {
  n=data.length;
	document.write('<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">');
	document.write('<style> .n {font: 10px sans-serif; fill: black;}</style>'); 
	for(r=10;r<110;r=r+10) { // first layout the grid
		y=120-r;
		document.write('<text class="n" x="121" y="'+y+'">'+r+'</text>');
		document.write('<polygon points="');
		for(i=0;i<n;i++) { putXY(r,i,n);}
		document.write('" fill="none" stroke="blue" /></polygon>');
	}
  // Next draw the data points
  document.write('<polygon points="');
  for(i=0;i<n;i++) putXY(data[i],i,n);
  document.write('" fill="green" fill-opacity="25%" stroke="darkgreen"></polygon>');
  // Next put the labels in the appropriate points
  for(i=0;i<n;i++){
  	a=(2*Math.PI*i)/n;
  	x=Math.floor(115+105*Math.sin(a));
  	y=Math.floor(125-105*Math.cos(a));
  	document.write('<text class="n" x="'+x+'" y="'+y+'">'+labels[i]+'</text>');
  }
  document.write("</svg>\n");
}