function saveform(formid){
    expiry="Fri, 01 Jan 2038 00:00:01 GMT";
    const form = document.getElementById(formid);
    Array.from(form.elements).forEach((input) => {
      document.cookie=input.name+'='+URIEncode(input.value)+';expires='+expiry+';path=/';
    });
}