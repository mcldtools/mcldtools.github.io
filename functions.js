const version = 'v50';
const langlist = ['am','ar','bd','ee','en','es','fr','lg','ny','sw'];
const maxpage = 38; // 37 is More 38 is Full Report
lang = localStorage.getItem("lang");
page = parseInt(localStorage.getItem("page"));
if(isNaN(page)) {page=0; localStorage.setItem('page','0');}
if (langlist.indexOf(lang)==-1) { setLang(); lang = 'en'; }
LANG = lang.toUpperCase();

const navbar = `<a id='lang' class=tall onclick='setLang()'>${LANG}</a>
<a href=intro_${lang}.html><svg height='24' width='24'><title>Info</title>
<circle cx='12' cy='12' r='10' stroke='white' stroke-width='3'></circle>
<circle cx='12' cy='7' r='2' fill='white'></circle>putMo
<line x1='12' y1='20' x2='12' y2='11' stroke='white' stroke-width='3'></line>
</svg></a>
<a onclick="prior();"><svg height='24' width='24'><title>Prior</title>
<polygon points='0,12 12,24 12,18 24,18 24,6 12,6 12,0' fill='white'></polygon></svg></a>
<a onclick="goto(0);"><svg height='24' width='24'><title>Home</title>
<polygon points='12,0 24,12 18,12 18,24 6,24 6,12 0,12' fill='white'></polygon></svg></a>
<a onclick="next();"><svg height='24' width='24'><title>Next</title>
<polygon points='24,12 12,24 12,18 0,18 0,6 12,6 12,0' fill='white'></polygon></svg></a>
<a onclick="goto(32);"><svg height='24' width='24'><title>Diagrams</title>
<line x1='2' y1='0' x2='2' y2='22' stroke='white' stroke-width='3'></line>
<line x1='2' y1='22' x2='24' y2='22' stroke='white' stroke-width='3'></line>
<line x1='08' y1='18' x2='8' y2='8' stroke='white' stroke-width='4'></line>
<line x1='15' y1='18' x2='15' y2='0' stroke='white' stroke-width='4'></line>
<line x1='22' y1='18' x2='22' y2='10' stroke='white' stroke-width='4'></line>
</svg></a>
<a onclick="goto(37);"><span class=tall >&vellip;&nbsp;</span> ${version}</a>
`;


var now=0;
var s=""; // this string compiles the output for a given main content div
// https://www.slingacademy.com/article/javascript-set-html-lang-attribute-programmatically
const changeLang = (languageCode) => {
  document.documentElement.setAttribute("lang", languageCode);
 };

// functions being debuggged
// Read in a saved html file and enter the data to local storage
function read_html(){

}


 // Functions that generate page contents into the s string
// First - the main router
// Main page contents script -- using global p variable

function putPages() {
  console.log(page);
	if(page==0) {
		putToc();
  } else if(page==1){
  	  putBasics();
  } else if(page<32) {
  	  putRubric(rubric['p'+page]);
  } else if(page<37) {
	    const n=page-31;
	    s='<h2>'+basics["figure1"]+n+basics["figure2"]+'</h2>';
	    putResults(page); // spider diagrams
  } else if(page==37) {
      putMore();
  } else if(page==38) {
      putFull(); // Full report
  }
	document.getElementById("main").innerHTML=s;
}

 function setup() {
  // these functions run for a pwa
  window.onload = () => {
    'use strict'; // register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js');
    }
  }

  // next, output the navbar with the appropriate arrow links in this template
  // note - now in this system, 0=rubric, 1=basics, 2=a1 etc through maxpage

  // The navbar contains inline SVG for efficient icons
  document.getElementById("navbar").innerHTML = navbar;
}

function next(){
  page=page+1;
  if(page>maxpage) page=maxpage;
  goto(page);
}

function prior(){
  goto(Math.max(page - 1, 0));
}

function goto(x) {
  localStorage.setItem('page',x);
  window.location.href=`${lang}.html`;
}

function setLang() { // increment language setting
  const olang=lang;
  let i=langlist.indexOf(lang)+1;
  if(i==langlist.length) i=0;
  lang=langlist[i];
  localStorage.setItem('lang', lang);
  location.href = window.location.href.replace(olang, lang);
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function saveform(formid) {
//  expiry = "Fri, 01 Jan 2038 00:00:01 GMT";
  const form = document.getElementById(formid);
  Array.from(form.elements).forEach((input) => {
    val=input.value;
    if(val=='undefined') val='';
    val=val.replace(/[^a-zA-Z0-9 -.,]/g, '');
    localStorage.setItem(input.name,val)} );
  location=lang+".html?"+(now+1);
}

function saveComment(cname) {
  const com = document.getElementById(cname).value;
  localStorage.setItem(cname, com);
  next();
}
function setColor(cname, x) {
  for (i = 0; i < 5; i++) {
    let s = '';
    if (i == x) s = 'background-color:blue;color:white';
    e = document.getElementById(cname + i);
    if (e) e.style = s;
  }
}
function setit(clicked_id) {
  const cname = clicked_id.substr(0, 2);
  const x = clicked_id.substr(2, 1);
  setColor(cname, x)
  localStorage.setItem(cname, x);
}

function putSelect(fname,arr) { // currently, only allowed per form
  s+= "<label class=wide>" + basics[fname] + ": <select id='" + fname + "' name='" + fname + "'>\n";
  for (i = 0; i < arr.length; i++) {
    s += "<option value='" + i + "'";
    if (localStorage.getItem(fname) == i) s += " SELECTED";
    s += ">" + arr[i] + "</option>\n";
  }
  s+= "</select></label>\n";
}

function putDate(fname) {
  let d = localStorage.getItem(fname);
  if (!d) {
    let d = new Date().toISOString().slice(0, 10);
    localStorage.setItem(fname, d);
  }
  s+='<div class=wide>'+basics[fname]+': <input type=date name=' + fname + ' value="' + d + '"></div>';
}

function putText(fname) {
  let d = localStorage.getItem(fname);
  s += "<p>" + basics[fname] + "</p><textarea name="+fname+" class=wide rows=4 width=100%>" + d + "</textarea>\n";
}

function putInput(fname) {
  let val=localStorage.getItem(fname);
  if (val=="null" || val=="undefined") val='';
  s+='<label class=wide>'+basics[fname]+': <input name="'+fname+'" value="'+val+'"></label>';
}
function putNumber(fname){
  let val = localStorage.getItem(fname);
  if(val === undefined || val===null) val = 0;
  s+='<label class=wide>'+basics[fname]+': <input name='+fname+' type=number min=0 max=1000 value='+val+"></label>\n";
}

function putYears(fname,y1) {
  const y2=new Date().getFullYear();
  s+= "<div class=wide><label>" + basics[fname] + ": <select id='" + fname + "' name='" + fname + "'>\n";
  for (i = y1; i < y2; i++) {
    s += "<option value='" + i + "'";
    if (localStorage.getItem(fname) == i) s += " SELECTED";
    s += ">" + i + "</option>\n";
  }
  s+= "</select></div>\n";
}


function putYN(fname){
  putSelect(fname,yn);
}

function putBasics() {
  s=`<h1>${basics.h1}</h1>
  <form id=basics>`;
  putInput("organization");
  putSelect("orgtype",orgtypes);
  putInput("program");
  putInput("country");
  putInput("region");
  putSelect('stage',stages);
  putInput("name");
  putDate("date");
  putInput("comment");
  s+=`<a class=wide href="javascript:saveform('basics');">${basics.save}</a></form>`;
  document.getElementById("main").innerHTML=s;
}

// Put the Full report
function putFull(){

  const subhead=`<p><a class=wide onclick="downloadfull();">${downbutton}</a></p>\n<p>${sendmail}</p>`;
  s=subhead+`<p>${basics["program"]}: ${localStorage.getItem("program")}<br>
  ${basics["organization"]}: ${localStorage.getItem("organization")}<br>
  ${basics["country"]}: ${localStorage.getItem("country")}<br>
  ${basics["region"]}: ${localStorage.getItem("region")}<br>
  ${basics["stage"]}: ${localStorage.getItem("stage")}<br>
  ${basics["date"]}: ${localStorage.getItem("date")}<br>
  ${basics["comment"]}: ${localStorage.getItem("comment")}</p>
  <table>
    <thead><tr><th>Item</th><th>Value</th><th>Comment</th></tr></thead>
      <tbody>`;
  putRows();
  s+=`  </tbody>    
  </table>`;
}

function putRow(i) {
  pp='p'+i;
  qname=rubric[pp][0];
  cname=qname.substr(0, 2).toLowerCase();
  qval=localStorage.getItem(cname);
  qcomment=localStorage.getItem('n'+cname);
  s+='<tr><td>'+qname+'</td><td>'+qval+'</td><td>'+qcomment+'</td></tr>\n';
}

function putRows() { for(i=2;i<32;i++) putRow(i); }

function putRubric(contents) { // Create layout based on an array of options
  cname = contents[0].substr(0, 2).toLowerCase();
  s="<h2>" + contents[0] + "</h2>";
  for (i = 0; i < 5; i++) {
    s+="<p><button id=" + cname + i + " onclick='setit(this.id)'>" + i + "</button>\n" + contents[1 + i] + "</p>";
  }
  // And fill in the comment if it exists
  cid = 'n' + cname;
  let com = localStorage.getItem(cid);
  if (com == undefined) com = '';
  const str1 = "<h3>"+comment+"</h3>\n<textarea class=wide id='" + cid + "' rows=3 width=100% >\n";
  const str2 = "</textarea>\n<button onclick='saveComment(" + '"' + cid + '"' + ")'>"+clickto+"</button>\n";
  s+=str1 + com + str2;
  document.getElementById("main").innerHTML=s;
  // Next, paint the color of the button if preset
  x = localStorage.getItem(cname);
  if (x > '') document.getElementById(cname + x).style = 'background-color:navy;color:white;';

}

function putXY(r, i, n) { // convert radius and index in spider to x,y pair
  a = (2 * Math.PI * i) / n;
  x = Math.floor(120 + r * Math.sin(a));
  y = Math.floor(120 - r * Math.cos(a));
  s+=' ' + Math.floor(x) + ',' + Math.floor(y);
}


// for the 4 different diagrams

function computeByDimensions(labels, lengths) {
  let scores = [];
  for (i = 0; i < labels.length; i++) { // which major dimension
    scores[i] = 0;
    for (j = 1; j <= lengths[i]; j++) { // which sub dimension
      const cname = labels[i].toLowerCase() + j;
      let x = +localStorage.getItem(cname);
      if (isNaN(x)) x = 0;
      x--;
      if (x < 1) x = 0;
      scores[i] += x;
    }
    if (isNaN(scores[i])) scores[i] = 0;
    scores[i] = Math.floor(scores[i] * 100 / (lengths[i] * 3));
  }
  return scores;
}

function computeScores(labels) {
  let scores = [];
  for (i = 0; i < labels.length; i++) {
    x = localStorage.getItem(labels[i].toLowerCase());
    if (isNaN(x)) x = 0; x--; if (x < 1) x = 0;
    scores[i] = Math.floor((100 * x)/3);
  }
  return scores;
}

function putToc(){ // x is the title of the first entry
  s=`<a class=wide onclick="goto(1);">${basics['h1']}</a>
  `;
// this correspond to the first page in each category
  const whichp=[2,8,10,15,18,20,24,25,28];
	for(i=0;i<9;i++) { // put the 9 full-width buttons
      s+=`<a class="wide" onclick="goto(${whichp[i]});"}>${dimensions[i]}</a>
      `;
	}
  document.getElementById("main").innerHTML=s;
}
// note -- p numbers lengths and formulas are entirely different in the community version
function putResults(p) {
  let scores = []; let labels = []; let tags = [];
  if (p == 32) {
    const lengths = [6, 2, 5, 3, 2, 4, 1, 3, 4]; // number of sub-elements in each
    labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // uppercase version of labels
    scores = computeByDimensions(labels, lengths);
    spider(scores, labels);
    putDimensionScores(scores, labels);
  } else if (p == 33) {
    labels = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
    tags = ['p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else if (p == 34) {
    labels = ['B1', 'B2', 'C1', 'C2', 'C3', 'C4', 'C5'];
    tags = ['p8', 'p9','p10', 'p11', 'p12', 'p13', 'p14'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else if (p == 35) {
    labels = ['D1', 'D2', 'D3', 'E1', 'E2', 'F1', 'F2', 'F3', 'F4', 'G1'];
    tags = [ 'p15', 'p16','p17','p18','p19','p20','p21','p22','p23','p24'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else {
    labels = ['H1', 'H2', 'H3', 'I1', 'I2', 'I3', 'I4'];
    tags = ['p25', 'p26', 'p27', 'p28', 'p29', 'p30', 'p31'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  }
}

function putMore() {
  s = "<h1>"+basics["more"]+"</h1>";
  s += "<p><a class=wide onclick='goto(38);'>"+basics["full"]+"</a></p>";
  s += "<p><a class=wide onclick='clearStorage();'>"+basics["clear"]+"</a></p>";
//  s += "<p><a class=wide href=uploadFile.html>"+basics["load"]+"</a></p>";
}

function putDimensionScores(scores) { // table of scores with dimension labels
  let t = "<center>\n<table>\n";
  for (i = 0; i < scores.length; i++) {
    t += "<tr><td>" + scores[i] + "</td><td>";
    t += dimensions[i] + "</td></tr>\n";
  }
  s += t + "</table>\n</center>";
}

function putRubricScores(scores, tags) {
  let t = "<center>\n<table>\n";
  for (i = 0; i < scores.length; i++) {
    t += "<tr><td>" + scores[i] + "</td><td>";
    t += rubric[tags[i]][0] + "</td></tr>\n";
  }
  s += t + "</table>\n</center>";
}

function spider(data, labels) {
  n = data.length;
  s+='<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">';
  s+='<style> .n {font: 10px sans-serif; fill: black;}</style>';
  for (r = 10; r < 110; r = r + 10) { // first layout the grid
    y = 120 - r;
    s+='<text class="n" x="121" y="' + y + '">' + r + '</text>';
    s+='<polygon points="';
    for (i = 0; i < n; i++) { putXY(r, i, n); }
    s+='" fill="none" stroke="blue" /></polygon>';
  }
  // Next draw the data points
  s+='<polygon points="';
  for (i = 0; i < n; i++) putXY(data[i], i, n);
  s+='" fill="rgba(0,255,0,0.3)" stroke="darkgreen"></polygon>';
  // Next put the labels in the appropriate points
  for (i = 0; i < n; i++) {
    a = (2 * Math.PI * i) / n;
    x = Math.floor(115 + 105 * Math.sin(a));
    y = Math.floor(125 - 105 * Math.cos(a));
    s+='<text class="n" x="' + x + '" y="' + y + '">' + labels[i] + '</text>';
  }
  s+="</svg>";
}

// ADMIN Functions
function putMailButton(){
  let msg="Email the data";
  if(lang=='fr') msg='Envoyer les données par e-mail';
  if(lang=='es') msg='Enviar datos por correo electrónico';
  const text=JSON.stringify(localStorage);
  const href1="mailto:admin@mcld.org?subject=MCLD+Data&body=";
  const button="<a class=wide href="+href1+encodeURI(text)+">"+msg+"</a>";
  document.getElementById("mailbutton").innerHTML=button;
}

function downloadfull(){
  const downfilename = localStorage.getItem("date") + localStorage.getItem("program") + '.html';
  const reporthead=`<!DOCTYPE html>
  <html><head>
<meta name="google" content="notranslate"><style>
    html {font-family:sans-serif; margin: 0 auto; max-width: 900px;}
    table, th, td {border: 1px solid navy; border-collapse: collapse; padding:5px;}
  </style></head>
  <body tabindex="-1">`;
  download(downfilename,reporthead+s+"</body></html>");
}

function download(filename,text) { // download the s string as an html
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function downloadStorage() {
  const filename = localStorage.getItem("date") + localStorage.getItem("organization") + '.json';
  const text = JSON.stringify(localStorage);
  download(filename,text);
}

function convert2Storage(){
  document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    localStorage.setItem(name,decodeURI(value));
  }, {});
}

function clearStorage() {
  localStorage.clear();
  alert("OK, data cleared");
}
