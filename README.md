# mcldtools.github.io
Web app for CLD Assessment

# Guiding principles
* Plain html5, css, javascript - no packages
* Use of template strings where appropriate
* Mobile first, but looks fine on laptops

# Basic Design
* Navigation icons are handmade inline svg
* Data entry goes into cookies
* All functions in the functions.js script
* Two languages so far, french and english
* Intro languages in intro_en or intro_fr
* The most "important" function is setup() that initializes each page and paints the navigation bar
* A global cookie object is decoded from document.cookie
* All the text from the spreadsheet is in entext.js or frtext.js
* All data entry pages are controled by en.html or fr.html

# Known issues and items to complete
* Saving and displaying basic info needs to be redone.
* French display of results data is not yet done
* All but the first spider need to be complete.
* Export and import of data needs to be added.

# Key References
https://www.w3schools.com/js/js_cookies.asp
