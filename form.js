function saveform(formid){
    expiry="Fri, 01 Jan 2038 00:00:01 GMT";
    const form = document.getElementById(formid);
    Array.from(form.elements).forEach((input) => {
      document.cookie=input.name+'='+encodeURI(input.value)+';expires='+expiry+';path=/';
    });
}
// truly, this could be sped up so we only do it once on a page
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


function preset(formid) {
  const form = document.getElementById(formid);
  Array.from(form.elements).forEach((input) => {
    input.value=getCookie(input.name);
  });
}