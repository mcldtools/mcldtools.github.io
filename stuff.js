// notes on how to convert Tamarack files to MCLD files
// functions...

// replaces putTamarack
function putBasics() {
    s=`<h1>${basics.h1}</h1>
    <form id=basics>`;
    putInput("organization");
    putInput("program");
    putInput("country");
    putInput("region");
    putSelect('stage');
    putDate("date");
    putInput("comment");
    s+=`<a class=wide href="javascript:saveform('basics');">${basics.save}</a></form>`;
    document.getElementById("main").innerHTML=s;
  }
  
function setLang() { // for now, this will be a toggle
    olang = cookie.lang;
    if (olang == 'en') { lang = 'fr'; }
    else if (olang == 'fr') { lang = 'es'; }
    else (lang = 'en');
    setCookie('lang', lang);
    location.href = window.location.href.replace(olang, lang);
  }

  if (lang != 'en' && lang != 'fr' && lang != 'es') { setLang(); lang = 'en'; }
  
  
  // ADMIN Functions
function putMailButton(){
    const text=JSON.stringify(cookie);
    const msg=basics["sendmail"];
    const button=`<a class=wide target=_blank href='mailto:admin@mcld.org?subject=Data&body=${text}'>${msg}</a>`;
    document.getElementById("mailbutton").innerHTML=button;
  }

