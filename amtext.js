const basics={
    figure1:"ቁጥር ",
    figure2:" of 5.  ለተጨማሪ ውጤት ቀስቶቹን ይጫኑ",
    h1:"የፕሮግራሙ መሠረታዊ መረጃዎች",
    program:" የፕሮግራሙ ስም ",
    organization:"የድርጅቱ ስም",
    orgtype:"የድርጅቱ አይነት:",
    country:" ፕሮግራሙ የሚተገበርበት ሃገር",
    region:" ክልል፣ ዞን፤ ወርዳ ",
    name:" ግምገማውን የሚሞላው/የሚሞሉት ሰዎች ስም ",
    date:" የተሞላበት ቀን",
    stage:"ደረጃ",
    save:"መረጃውን ያስቀምጡ",
    more:"ተጨማሪ ተግባራት",
    full:"ሙሉ ዘገባ",
    clear:"ውሂብ አጽዳ",
    load:"ውሂብ ስቀል",
    comment:"አስተያየት"
}
const downbutton="ፋይሉን ለማውረድ እዚህ ጋር ይጫኑ።";
const sendmail="በኢሜል ለመላክ የወረደውን ፋይል ያያይዙ።"
const stages=['የሙከራ ጊዜ','አዲስ','አጋማሽ','የመጨረሻ ደረጃ','መጠናቀቂያ'];
const orgtypes=["መንግስታዊ/በመንግስት የተቋቋመ ","ለትርፍ ያልተቋቋመ/ የሲቪል ማህበረሰብ ድርጅት "];

const clickto="አስተያየቱን ለማስቀመጥ አስቀምጥ የሚለውን ይጫኑ ";
const comment="አስተያየት";

const dimensions=[
"ሀ: ተሳትፎ፣ አካታችነት እና ድምጽ",
"ለ: አካባቢያዊ ሀብትና ዕውቀት ",
"ሐ: የዘላቂነትና የሽግግር ስትራቴጂ ",
"መ: የተጠያቂነት ዘዴዎች.",
"ሠ: ለነባራዊ ሁኔታወ ምላሽ መስጠት", 
"ረ: ትብብር",
"ሰ: ከመንግስት አካላት/ከሲቪል ማህበረሰብ ድርጅት ጋር መሥራት ",
"ሸ. የክትትልና ግምገማ ተሞክሮዎች ",
"ቀ. ማመቻቸት"];

const rubric={
p2:["ሀ1. ፕሮገራሙ ሁሉም የማህበረሰብ ክፍሎች (ማለትም አዛውንትን፣ ወጣቶችን፣ ሴቶችንና ወንዶችን፣ ሀብታሞችንና ደሀዎችን፣ ከተለያዩ ጎሳዎች፣ሀይማኖቶች ወዘተ…) መካተታቸውን ያረጋግጣል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
"ፕሮግራሙ በቀበሌው ውስጥ የሚገኙ የተለያዩ ክፍሎችን አያካትትም፡፡ ",
"ፕሮግራሙ የተወሰኑ የተገለሉ ቡድኖችን (ሁሉንም ሳይሆን) ከግምት ውስጥ ያስገባና በስብሰባዎችና የጋራ እንቅስቃሴዎች መካተታቸውን የሚያረጋግጥ ነው፡፡",
" ፕሮግራሙ አብዛኞቹን የህብረተሰብ ክፍሎች ከግምት ውስጥ ያስገባና በስብሰባዎችና የጋራ እንቅስቃሴዎች መካተታቸውን መካተታቸውን የሚያረጋግጥ ነው፡፡ ",
" ፕሮግራሙ ሁሉንም የህብረተሰብ ክፍሎች ከግምት ውስጥ ያስገባና በስብሰባዎችና የጋራ እንቅስቃሴዎች መካተታቸውን መካተታቸውን የሚያረጋግጥ ነው፡፡"],
p3:["ሀ2. ማህበረሰብ መር ልማት ፕሮግራሙ ከመቀረጹ በፊት የማህበረሰቡ አባላት በፕሮግራሙ ቅድሚያ የሚሰጣቸውን ጉዳዮች ይወስናሉ፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" የማህበረሰብ አባላት በፕሮግራሙ ቅድሚያ የሚሰጣቸውን ጉዳዮች በመወሰን ሂደት ላይ አይሳተፉም፡፡",
" የተመረጡ የማህበረሰብ አባላት ( ለምሳሌ፡ ባህላዊ መሪዎች፣ የመሬት ባላባቶች ወዘተ...) ወይም ቡድኖች በፕሮግራሙ ቅድሚያ የሚሰጣቸው ጉዳዮች በመወሰን ሂደት ላይ ይሳተፋሉ፡፡ ",
"አብዛኞቹ የማህበረሰብ ቡድኖች በፕሮግራሙ ቅድሚያ የሚሰጣቸውን ጉዳዮች በመወሰን ሂደት ላይ ይሳተፋሉ፡፡ ",
"ሁሉምየማህበረሰብ ቡድኖች በፕሮግራሙ ቅድሚያ የሚሰጣቸውን ጉዳዮች በመወሰን ሂደት ላይ ይሳተፋሉ፤ እንዲሁም እኩል ድመጽ አላቸው፡፡"],
p4:["ሀ3. የማህበረሰብ አባላት የማህበረሰብ መር ልማት ፕሮግራምን በማቀድ ሂደት ላይ ንቁ ሚና ይጫወታሉ ፡፡",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
"የማህበረሰብ አባላት በዕቅዱ ሂደት  አይሳተፉም ",
" የተመረጡ የማህበረሰብ አባላት ( ለምሳሌ፡ የማህበረሰብ መሪዎች፣ የመሬት ባላባቶች ወዘተ...) ወይም ቡድኖች በዕቅዱ  ሂደት ላይ ይሳተፋሉ፡፡",
" አብዛኞቹ የማህበረሰብ ቡድኖች በዕቅዱ ሂደት ላይ ይሳተፋሉ፡፡",
" ሁሉም የማህበረሰብ ቡድኖች በዕቅዱ ሂደት ላይ ይሳተፋሉ፡፡"],
p5:["A4. የማህበረሰብ አካላት ሁሉንም ቡድኖችና አካባቢውን በመወከል ፕሮግራሙን ይፈጽማሉ፡፡",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
"መንግስታዊ ያልሆኑ ድርጅቶች ወይም ያካባቢው መሪዎች ፕሮግራሙን ይፈጽማሉ፡፡",
"መንግስታዊ ያልሆኑ ድርጅቶች እና/ወይም ያካባቢው መሪዎች ሁሉንም ቡድን ላይወክል የሚችል አካልን በመፍጠር ፕሮግራሙን እንዲተገብሩ ወይም ከዚህ ቀደም ከነበረው አካል ጋር እንዲሠራ ያደርጋሉ፡፡",
" ሁሉንም ቡድኖችና አካባቢያቸውን የሚወክሉ እራሳቸውን የሾሙ  አባላት ያሉበት አካላት ፕሮግራሙን ይተገብራሉ፡፡",
" ሀሉንም ቡድኖችና አካባቢውን የሚወክሉ የተመረጡ አካት ፕሮግራሙን ይተገብራሉ፡፡"],
p6:["ሀ5. ፕሮግራሙ የማህበረሰብ ተወካዮች ውሳኔ አሰጣጥ ላይ ተጽዕኖ ለማሳደርና ቅርጽ ማስያዝ እንዲችሉ ድምጻቸውንና በራስ መተማመናቸውን ይገነባለ፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ የማህበረሰብ ተወካዮችን ድምጽና በራስ መተማመንን ለመገንባት ያደረገው ምንም ጥረት የለም፡፡",
" ፕሮግራሙ የተወሰኑ የማህበረሰብ ተወካዮችን ነገር ግን ከተገለሉ ቡድኖች ያልሆኑ  ድምጽና በራስ መተማመንን ይገነባል፡፡", 
" ፕሮግራሙ የብዙ የማህበረሰብ ተወካዮችን የተወሰኑ ከተገለሉ ቡድኖችም ጨምሮ  ድምጽና በራስ መተማመንን ይገነባል፡፡",
"ፕሮግራሙ የሁሉንም የማህበረሰብ ተወካዮችን ከሁሉም የተገለሉ ቡድኖችም ጨምሮ  ድምጽና በራስ መተማመንን ይገነባል፡፡"],
p7:["ሀ6. ፕሮግራሙ መብትን( ማህበራዊ፣ ኢኮኖሚያዊና ፖልቲካዊ) በሚለከት ግንዛቤ የመፍጠርና የአካባቢ ተወካዮች መብታቸውን መጠየቅ እንዲችሉ ክህሎት የመገንባት ሥራ ይሠራል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ መብትን ለመጠየቅ እንዲቻል የግንዛቤና የክህሎት ግንባታ ሥራ አይሠራም",
" ፕሮግራሙ ስለመብት ግንዛቤ የሚፈጥር ሲሆን ነገር ግን መብትን ለመጠየቅ የሚያስችል ምንም አይነት የክህሎት ግንባታ አያደርግም፡፡",
" ፕሮግራሙ ስለመብት ግንዛቤ የሚፈጥር ሲሆን ለጥቂት ሰዎች መብትን ለመጠየቅ የሚያስችል ክህሎትን ይገነባል፡፡",
" ፕሮግራሙ ስለመብት ግንዛቤ የሚፈጥርና ከሁሉም ቡድኖች የተወከሉ የአካባቢውን ተወካዮች ስለመብት የመጠየቅ ክህሎታቸውን በመገንባት ላይ ትኩረት ያደረገ ነው፡፡"],
p8:["ለ1. የማህበረሰብ መር ልማት ፕሮግራሙ በአካባቢው ሃብትና ዕውቀት ላይ የተመሠረተ ስለመሆኑ",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ የአካባቢውን ሀብትና ዕውቀት ታሳቢ ያደረገ አይደለም",
" ፕሮግራሙ የአካባቢውን ሀብት  የሚያፈላልግ ሲሆን ዕውቀት ግን በፊት መስመር ሰራተኞች ከውጪ ወደ ማህበረሰቡ ይተላለፋል፡፡",
"ፕሮግራሙ የአካባቢውን ሀብት የሚጠቀም ሲሆን ስለአካባቢው ዕውቀትም ይገነዘባል፡፡",
"ፕሮግራሙ የአካባቢውን ሀብትና ዕውቀት ያከብራል፤ይጠቀማል፡፡"],
p9:["ለ2. ማህበረሰቡ ሀብቱን አስተዋጾ ያደርጋል (ለምሳሌ፡ ጊዜውን፣ ጥሬ ገንዘቡን፣ ጉልበቱን፣ መሬቱን፣ ቁሳቁስ ወዘተ…) አላውቅም/በቂ መረጃ የለኝም፡፡",
" የማህበረሰቡ አባላት በጥሬ ገንዘብ ወይም በአይነት ወይም በጉልበት አስተዋጽኦ አያደርጉም፡፡", 
" የማህበረሰቡ አባላት ግዴታ ስለሆነባቸው  ጊዜ/ጉልበት ወይም ሀብት(መሬት፣ ጥሬ ገንዘብ፣ ቁሳቁስ)  አስተዋጽኦ ያደርጋሉ፡፡",
" የማህበረሰቡ አባላት ደስ ሲላቸው/ሲበረታቱ  ጊዜ/ጉልበት ወይም ሀብት(መሬት፣ ጥሬ ገንዘብ፣ ቁሳቁስ)  አስተዋጽኦ ያደርጋሉ፡፡", 
"የማህበረሰቡ አባላት  የሚያስፈልገውን ይወስናሉ፤ በፈቃደኝነት ተጨማሪ ሀብት ( ጊዜ/ጉልበት፣ መሬት፣ ጥሬ ገንዘብ፣ ቁሳቁስ) ለይተው በበጎ ፈቃደኝነት ይለግሳሉ፡፡"],
p10:["ሐ1. ፕሮግራሙ እንዴትና መቼ መጠናቀቅና ለማህበረሰብ መረከብ  እንዳለበት ሲታቀድ ማህበረሰቡ ማዕከል ተደርጎ ነው፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ለፕሮግራም ማጠናቀቂያና መረካከቢያ ዕቅድ የለም፡፡",
"ለፕሮግራም ማጠናቀቂያና መረካከቢያ ዕቅድ የሚወጣው ጵሮግራሙን በሚተገብረው ድርጅት ሲሆን  የማህበረሰብ መሪዎች ወይም የማህበረሰብ አባላት እንዲያውቁት ይደረጋል፡፡",
"የፕሮግራም ማጠናቀቂያና መረካከቢያ ዕቅዱ የአካባቢ መሪዎችና የማህበረሰብ አባላት ምክር ተካቶበት ይዘጋጃል፡፡",
"የፕሮግራም ማጠናቀቂያና መረካከቢያ ዕቅዱ በአካባቢ መሪዎችና የማህበረሰብ አባላት ይመራል፡፡"],
p11:["ሐ2. ማህበረሰቡ የፕሮግራሞችን ርክክብና ሽግግር ዕቅድ ሳይቆራረጥ ለመገምገምና ለማላመድ ፕሮግራሙን ከሚተገብሩ ድርጅቶች ጋር ይሠራሉ፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
"ፕሮግራሙን ለማህበረሰቡ ለማስረከብ ዕቅድ ወይም ስትራቴጂ የለም፡፡",
"ፕሮግራሙን ለማህበረሰቡ ለማስረከብ ዕቅድ የሚዘጋጀው ፕሮግራሙ ሊያልቅ ሲል (ወይም የገንዘብ ድጋፉ ሲያልቅ) ነው፡፡",
" ፕሮግራሙን ለማህበረሰቡ ለማስረከብ ዕቅዶች  ፕሮግራሙ ሲጀምር ተዘጋጅተው በፕሮግራሙ መጨረሻ ወይም ከባድ ችግር ከገጠመ ይከለሳሉ፡፡",
" ፕሮግራሙን ለማህበረሰቡ ለማስረከብ ዕቅዶች  ፕሮግራሙ ሲጀምር ተዘጋጅተው የወቅቱን ሁኔታ እንዲከተሉ በማህበረሰብ አካላት በየጊዜው ይገመገማሉ፡፡"],
p12:["C3. ፕሮግራሙ የማህበረሰብ መዋቅሮች(እንደ ማህበረሰብ አቀፍ ድርጅቶች፣ ፐሮግራሞችን የሚተገብሩ ቡድኖች) ፕሮግራሙን ከተረከቡ በኋላ የማስቀጠል አቅም እንዲኖራቸው ያደርጋሉ፡፡ ",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ የማህበረሰብ መዋቅሮች ፕሮግራሙን ከተረከቡ በኋላ የማስቀጠል አቅም እንዲኖራቸው ምንም ያደረገው ጥረት የለም፡፡",
" የፕሮግራም መረካከቢያ ዕቅድ አለ፡፡ ነገር ግን የማህበረሰብ መዋቅሮች ፕሮግራሙን ከተረከቡ በኋላ ማስቀጠል እንዲችሉና የገንዘብ ድጋፍ ሲፈልጉ የማግኘት አቅም እንዲኖራቸው የሚያስችል ስትራቴጂ የለም፡፡",
" የማህበረሰብ መዋቅሮች ፕሮግራሙን ከተረከቡ በኋላ ማስቀጠል እንዲችሉ ለማድረግ ስትራቴጂ አለ፡፡ ነገርግን የገነዘብ ድጋፍ የማግኘት አቅማቸውን የመገንባት እንቅስቃሴዎች አልተደረጉም፡፡",
" ፕሮግራሙ የማህበረሰብ መዋቅሮች ፕሮግራሙን ከተረከቡ በኋላ የማስቀጠል አቅም እንዲኖራቸውና የገንዘብ ድጋፍ ሲፈልጉ የማግኘት አቅም እንዲኖራቸው የአቅም ግንባታ ሥራ እያከናወነ ነው፡"],  
p13:["ሐ4. ፕሮግራሙ ከተጠናቀቀ በኋላ ፕሮግራሙ ያመጣው ለውጥ/ውጤቱ በአካባቢው ተሳትፎ ይለካል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
"ፕሮግራሙ ያመጣውን ለውጥ/ውጤት ፕሮግራሙ ከተጠናቀቀ በኋላ ለመለካት ዕቅድ የለም  ወይም ካለም  ማህበረሰቡ አያውቀውም፡፡",
" ፕሮግራሙ ያመጣውን ለውጥ ፕሮግራሙ ከተጠናቀቀ በኋላ ለመለካት ዕቅዶች አሉ (ወይም ይለካል). የማህበረሰብ አባላት ስለሂደቱ ይነገራቸዋል፤ መረጃም ሲጠየቁ ይሰጣሉ፡፡",
" ፕሮግራም ያመጣው ለውጥ ፕሮግራሙ ከተጠናቀቀ በኋላ ይለካል( ወይም ለመለካት ይታቀዳል) እንዲሁም  የማህበረሰብ አባላትን በማማከር ይከናወናል፡፡",
" ፕሮግራም ያመጣው ለውጥ ፕሮግራሙ ከተጠናቀቀ በኋላ ይለካል( ወይም ለመለካት ይታቀዳል) እንዲሁም  የማህበረሰብ አባላት በሁሉም ደረጃ ንቁ ተሳትፎ ያደርጋሉ፡፡"],
p14:["ሐ5. ፕሮግራሙ ለማህበረሰቡ/ለአካባቢው የመንግስት መዋቅር ከተረከበ በኋላ ሁሉም የህብረተሰብ ክፍሎች( ሴቶች፣ ወጣቶች፣ አዛውንቶች፣ ደሃ፣ አካል ጉዳተኞች፣ አናሳ ወገኖች) ከ ማህበረሰብ -መር- ልማት እንቅስቃሴዎች አሁንም ተጠቃሚ ናቸው፡፡ ",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ከፕሮገራም ርክክብ በኋላ ማንም ተጠቃሚ እየሆነ አይደለም፤ ወይም እድለኞቹ ብቻ መጠቀም ቀጥለዋል፡፡",
"ፕሮግራሙ  ከርክክብ በኋላም ጭምር የተወሰኑ ቡድኖችን ብቻ እየጠቀመ ቀጥሏል፡፡",
" ፕሮግራሙ  ከርክክብ በኋላም  አብዛኞቹ ቡድኖችን  እየጠቀመ ቀጥሏል፡፡",
" ፕሮግራሙ  ከርክክብ በኋላም  ሁሉንም ቡድኖችን  እየጠቀመ ቀጥሏል፡፡"],
p15:["መ1. ፕሮግራሙና የማህበረሰቡ መዋቅር አስፈላጊ መረጃዎችን ለምሳሌ ምን እየሠሩ እንደሆነ፣ ለምን፣ እንዴት፣ እና የገንዘብ ድጋፉ እንዴት ሥራ ላይ እየዋለ እንደሆነ ያካፍላሉ፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ እየተከናወኑ ያሉ ሥራዎችን፣ አንዴትና ለምን እንደሚከናወኑ መረጃዎችን ለማህበረሰቡ አያካፍልም፡፡ ",
" ፕሮግራሙ ወይም የማህበረሰብ አካት ስለፕሮግራሙ መሠረታዊ መረጃዎችን አልፎ አልፎ ያካፍላሉ ነገር ግን ዝርዝር ነገሮች ሉም፡፡",
"ፕሮግራሙ ወይም የማህበረሰብ አካት ስለፕሮግራሙ  መረጃዎችን አልፎ አልፎ ያካፍላሉ (ሁሉም ባይሆኑም አብዛኞቹ መረጃዎች አሉ)፡፡",
" ፕሮግራሙ ወይም የማህበረሰብ አካት በቋሚነት ስለ ገንዘብ ድጋፍ፣ ስለ ሂደቱ፣ እና ስለ እንቅስቃሴዎች ለማህበረሰብ አባለት መረጃ ያካፍላሉ፤ ግበረመለስም ይጠይቃሉ፡፡"],
p16:["መ2. ፕሮግራሙ ለማህበረሰብ ቅሬታዎች መፍተሄ ይሰጣል፡፡  ",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
"ፕሮግራሙ የማህበረሰብ አባላት ቅሬታቸውን የሚያነሱበት ምንም መንገድ የለውም፡፡",
"ፕሮግራሙ የማህበረሰብ አባላት ቅሬታቸውን የሚያነሱበት  መንገድ አለው ግን ተደራሽና ታማኝነት ያለው አይደለም፡፡",
"ፕሮግራሙ ተደራሽነትና ታማኝነት ያለው  የማህበረሰብ አባላት ቅሬታቸውን የሚያነሱበት  መንገድ አለው፡፡ ነግር ግን ቅሬታዎች መልስ አያገኙም፡፡",
" ፕሮግራሙ ተደራሽነትና ታማኝነት ያለው  የማህበረሰብ አባላት ቅሬታቸውን የሚያነሱበት  መንገድ አለው፡ ቅሬታዎችም መልስ ያገኛሉ፡፡"],
p17:["መ3. የክትትልና ግምገማ ግኝቶች በየጊዜው ለማህበረሰብ አባላት ይደርሳሉ፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
"የክትትልና ግምገማ ግኝቶች  ለማህበረሰብ አባላት በፍጹም አይደርሱም፡፡",
"የክትትልና ግምገማ ግኝቶች  ለማህበረሰብ አባላት በፕሮግራሙ ውስጥ በሚሳተፉ ሰዎች ደስ ባላቸው ጊዜ ምናልባት ሊደርሱ ይችላሉ፡፡",
"የክትትልና ግምገማ ግኝቶች  ለማህበረሰብ አባላት ችግሮች ባጋጠሙ ጊዜ ብቻ ይደርሳሉ፡፡",
"የክትትልና ግምገማ ግኝቶች  ለማህበረሰብ አባላት በየጊዜው/በወቅቱ ይደርሳሉ፡፡"],
p18:["ሠ1. ፕሮግራሙ ለሚቀያየሩ የማህበረሰቡ ፍላጎቶችና ነባራዊ ሁኔታዎች ምላሽ የሚሰጥ ነወ፡፡",
" አላውቅም/በቂ መረጃ የለኝም፡፡ ",
" ፕሮግራሙ ለሚቀያየሩ የማህበረሰቡ ፍላጎቶች (ለምሳሌ፡ ጎርፍ፣ ድርቅ፣ ወቅታዊ ርሀብ፣ አዳዲስ ቴክኖሎጊውች ፣ የፖለቲካ መቀያየር፣ ወዘተ…) ምላሽ አይሰጥም ",
" ፕሮግራሙ የተወሰኑ ለውጦችን ማድረግ ይችላል፡፡ ",
" ፕሮግራሙ አስፈላጊ ሲሆን እንደ ማህበረሰቡ ፍላጎት መቀያየር (በአደጋና ቀውሶች ምክንያት  የሚመጡትን ጭምር) ራሱን ያስተካክላል፡፡ ",
"ፕሮግራሙ አስፈላጊ ሲሆን እንደ ማህበረሰቡ ፍላጎት መቀያየር (በአደጋና ቀውሶች ምክንያት  የሚመጡትን ጭምር) ራሱን ያስተካክላል፡፡ ወደፊት ለሚከሰቱትም  ተመሳሳይ ችግሮች ምላሽ ለመስጠት የሚያስችል ዘዴና መዋቅር ይገነባል፡፡"],
p19:["ሠ2. የማህበረሰብ መር ልማት ፕሮግራሙ ፍጥነት/ሁኔታ(ማለትም የጊዜ አጠባበቅ፣ ድግግሞሽ፣ ማህበረሰቡን የሚያሳትፍበት የጊዜ ርዝመት ) የሚወሰነው በማህበረሰብ አባላት ነው፡፡ ",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ማህበረሰቡ የፕረግራሙን ፍጥነት/ሁኔታ በመወሰን ሂደት ላይ አይሳተፍም፡፡",
"ማህበረሰቡ የፕረግራሙን ፍጥነት/ሁኔታ ይነገረዋል፡፡",
" የተወሰኑ የማህበረሰቡ አባላት ስለፕረግራሙ ፍጥነት/ሁኔታ አወሳሰን ሂደት ላይ ምክር ይሰጣሉ፡፡",
" ሁሉም የማህበረሰቡ አባላት፣የተገለሉ ቡድነ ተወካዮች አባላትን ጨምሮ ስለፕረግራሙ ፍጥነት/ሁኔታ አወሳሰን ሂደት ላይ ምክር ይሰጣሉ፡፡"],
p20:["ረ1. ፕሮግራሙ በድሃና በሀብታም፣ በድሀና በድሀ መካከል አወንታዊ ግንኙነትን ይገነባል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ የኢኮኖሚ ልዩነትን ታሳቢ አያደርግም፡፡",
"ፕሮግራሙ በድሀና በድሀ መካከል ግንኙነትን ይገነባል፡፡",
" ፕሮግራሙ ድሃና ሀብታሞችን በውይይቶችና ክርክሮች ውስጥ ያሳትፋል፡፡",
"ፕሮግራሙ ድሃና ሀብታምን ለጋራ ግብ በጋራ እንዲሰሩ ያሳትፋል፡፡"],
p21:["ረ2. ፕሮግራሙ በተመሳሳይ ቡድኖችና በተለያዩ ብሄረሰብ፣ መደብ፣ ሀይማኖት ቡድኖች፣ ወዘተ… መካከል አወንታዊ ግንኙነት ይገነባል፡፡",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ የመደብ/የብሄር/ የሀይማኖት ልዩነቶችን ከግምት ውስጥ ያስገባ አይደለም፡፡ ",
" ፕሮግራሙ ከተመሳሳይ መደብ/ብሄር/ ሀይማኖት የሚመመጡ ህዝቦች በጋራ ለማህበራዊ ለውጥ እንዲሠሩ ግንኙነትን ይገነባል፡፡ ",
"ፕሮግራሙ ከተለያዩ መደብ/ብሄር/ ሀይማኖት የሚመጡ ህዝቦችን በውይይትና በክርክር  መድረክ ያሳትፋል",
" ፕሮግራሙ ከተለያዩ መደብ/ብሄር/ ሀይማኖት የሚመጡ ህዝቦች  ለማህበራዊ ለውጥ አብረው እንዲሠሩ ግንኙነት ይገነባል፡፡"],
p22:["ረ3. ፕሮግራሙ በሴቶችና ሴቶች እንዲሁም በወንዶችና ወንዶች መካከል መልካም ግንኙነትን ይገነባል፡፡ ",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" ፕሮግራሙ ከሴቶች ጋር አይሠራም፡፡",
" ፕሮግራሙ ከተመሳሳይ ቡድን በሚመጡ ሴቶች መካከል ግንኙነትን ይገነባል፡፡ ",
" ፕሮግራሙ ከሁሉም አይነት ቡድን በሚመጡ ሴቶች ወይም በሴቶችና ወንዶች መካከል ግንኙነትን ይገነባል፡፡",
" ፕሮግራሙ በሁሉም ሴቶች መካከልና በሴቶች እና ወንዶች መካከል ግንኙነት ይገነባል፡፡"],
p23:["ረ4. ፕሮግራሙ  የአካባቢውን ማህበረሰብ ወይም መሪወቻቸውን ከ ሌሎች መንደሮች/ከበሌዎች እና ከ በተለያዩ ደረጃዎች ከሚገኙ መሪዎቻቸው ጋር(ከቀበሌ፣ ከወረዳ፣ ከዞን፣ ከክልል መሪዎቻቸው) ያገናኛል፡፡ ",
" አላውቅም/በቂ መረጃ የለኝም፡፡ ",
" ፕሮግራሙ  ከተመሳሳይ አካባቢ በሚመጡ ማህበረሰብ መካከል  ትስስርን አይገነባም፡፡ ",
" ፕሮግራሙ  ከተመሳሳይ አካባቢ በሚመጡ ማህበረሰብ/አካባቢ  መሪዎች  መካከል  ትስስርን  ይገነባል፡፡", 
" ፕሮግራሙ  በቀበሌ፣ በወረዳ፣ በዞን፣ በክልልና በሀገራት ማህበረሰብ/የአካባቢ መሪዎች መካከል ትስስርን ይገነባል፡፡", 
"  ፕሮግራሙ  በተለያዩ  የዞን/ከልላዊ/ ሃገራዊ ማህበረሰብ መካከል ለጋራ እርምጃ ያስተሳስራል፡፡ "],
p24:["ሰ1. የፕሮግራሙ የማህበረሰብ ክፍል ከአካባው የመንግስት መዋቅርና ፈጻሚ ጋር በጋራ ይሠራል፡፡ ",
"አላውቅም/በቂ መረጃ የለኝም፡፡ ", 
" ፕሮግራሙ ወይም የፕሮግራሙ የማህበረሰብ ክፍል እና ግንኙነት ያለው የአካባቢው የመንግስት መዋቅርና ፈጻሚ አካል የተቃረነ መረጃ/መልዕክት ይሰጣሉ፡፡",
"  ፕሮግራሙ ወይም የፕሮግራሙ የማህበረሰብ ክፍል እና ግንኙነት ያለው የአካባቢው የመንግስት መዋቅርና የሚመለከታቸው ፈጻሚ አካላት  ለተመሳሳይ አላማ የሚሠሩ ቢሆን እንኳን በፍጹም በጋራ አይሠረም፡፡",
"ፕሮግራሙ ወይም የፕሮግራሙ የማህበረሰብ ክፍል እና ግንኙነት ያለው የአካባቢው የመንግስት መዋቅርና የሚመለከታቸው ፈጻሚ አካላት  አልፎ አልፎ በአንዳንድ ገዳዮች ላይ በጋራ ይሠራሉ፡፡ ",
" ፕሮግራሙ ወይም የፕሮግራሙ የማህበረሰብ ክፍል እና ግንኙነት ያለው የአካባቢው የመንግስት መዋቅርና የሚመለከታቸው ፈጻሚ አካላት  በመደበኛነት ተደጋግፈው በጋራ"],
p25:["ሸ1. የማህበረሰብ አባላት ቁልፍ የፕሮግራሙ  እንቅስቃሴዎችንና አፈጻጸማቸውንይከታተላሉ፡፡ ",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
" ማህበረሰብ አሳታፊ የሆነ ክትትል የለም፡፡",
"ማህበረሰብ አሳታፊ የሆነ ክትትል አልፎ አልፎ ያጋጥማል፡፡ ",
"ማህበረሰብ አሳታፊ የሆነ ክትትል በመደበኛነት አለ፡፡ ነገር ግን ክትትሉን የሚመቻቹት የፊት መስመር ላይ ያሉ ሠራተኞች ናቸው፡፡",
" ማህበረሰብ አሳታፊ የሆነ ክትትል በመደበኛነት ያለ ሲሆን ክትትሉን የሚመቻቹት የማህበረሰቡ አባላት ወይም መዋቅሮች ናቸው፡፡"],
p26:["ሸ2. አሳታፊ የሆነ ግምገማ ይከናወናል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡", 
"ማህበረሰቡን አሳታፊ የሆነ ግምገማ የለም፡፡",
" የማህበረሰብ አባላት በአንድ ወይም በሁለት  የግምገማ ሥራዎች ላይ ይሳተፋሉ: 1) ዕቀድ; 2) መረጃ መሰብሰብ; 3) ትንተና; 4) ሪፖርት ማረጋገጥ; 5) ማጠቃለያና  ምከረ ሃሰቦች; 6) የትገበራ ዕቅድ ዝግጅት.",
" የማህበረሰብ አባላት በብዙ (በሦስት  ወይም አራት)   የግምገማ ሥራዎች ላይ ይሳተፋሉ: 1) ዕቀድ; 2) መረጃ መሰብሰብ; 3) ትንተና; 4) ሪፖርት ማረጋገጥ; 5) ማጠቃለያና  ምከረ ሃሰቦች; 6) የትገበራ ዕቅድ ዝግጅት",
"የማህበረሰብ አባላት በሁሉም የግምገማ ሥራዎች ላይ ይሳተፋሉ:1) ዕቀድ; 2) መረጃ መሰብሰብ; 3) ትንተና; 4) ሪፖርት ማረጋገጥ; 5) ማጠቃለያና  ምከረ ሃሰቦች; 6) የትገበራ ዕቅድ ዝግጅት"],
p27:["ሸ3. የክትትልና ግምገማ ሥራዎች ፕሮግራሙ  እንዴት እየሠራና  የተለያዩ የማህበረሰቡን ክፍል(ሴቶችን፣ አካል ጉዳተኛን፣ አዛውንቶችን፣ አናሳ የማህበረሰብ ክፍሎችን ጨምሮ) እንዴት ተጠቃሚ እያደረገ እንደሆነ ያያል፡፡",
"አላውቅም/በቂ መረጃ የለኝም፡፡",
" የማህበረሰብ አባላት በክትትልና ግምገማ ስለማይሳተፉ ወይም የክትትልና ግምገማ ስርዓቱ በመረጃ ስብሰባና ትንተና ወቅት የተለያዩ የማህበረሰብ ክፍሎችን ታሳቢ ስለማያደርግ ክትትልና ግምገማን አያውቁትም፡፡",
" ክትትልና ግምገማ  ፕሮግራሙ እንዴት እየሠራና  የተወሰኑ  የማህበረሰቡን ክፍል( ለምሳሌ፡ ወንዶችና ሴቶች፣ ነገር ግን የአካል ጉዳተኞችን ሳያካትት) እንዴት ተጠቃሚ እያደረገ እንደሆነ  ለመገንዘብ መረጃ ሰብስቦ ይተነተናል፡፡",
" ክትትልና ግምገማ  ፕሮግራሙ እንዴት እየሠራና  አብዛኛውን  የማህበረሰቡን  እንዴት ተጠቃሚ እያደረገ እንደሆነ  ለመገንዘብ መረጃ ሰብስቦ ይተነተናል፡፡ ",
"ክትትልና ግምገማ  ፕሮግራሙ እንዴትና ለምን እየሠራ እንደሆነና  ሁሉንም  የተለያየ የማህበረሰቡን ክፍል  እንዴት ተጠቃሚ እያደረገ እንደሆነ  ለመገንዘብ መረጃ ሰብስቦ ይተነተናል፡፡ "],
p28:["ቀ1. አመቻቾች ጊዜውን፣ ቦታውንና የስብሰባውን ቅንብር ወስነው እያንዳንዱ ሰው እንዲሳተፍ ያደርጋሉ፡፡.",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
"አመቻቾች ጊዜውን፣ ቦታውንና የስብሰባውን ቅንብር የሚወስኑት ራሳቸው  ወይም የተወሰኑ የተመረጡ የማህበረሰቡ አባላት በሚመቻቸው  ሁኔታ ነው፡፡ ",
" አማቻቾች ከሚከተሉት  ቢያነስ  አንዱን ያሟላሉ: ሁሉም ተሳታፊ በነጻነት ሊሳተፍና በነጻነት ሊናገር የሚችልበት ስብሰባዎችን በአንድ ጊዜ ማዘጋጀት, ቦታ, እና  ቅንብር  ",
"አማቻቾች ከሚከተሉት  ቢያነስ  ሁለቱን  ያሟላሉ: ሁሉም ተሳታፊ በነጻነት ሊሳተፍና በነጻነት ሊናገር የሚችልበት ስብሰባዎችን በአንድ ጊዜ ማዘጋጀት, ቦታ, ወይም ቅንብር ",
"አማቻቾች የሚከተሉትን  ሁሉንም  ያሟላሉ: ሁሉም ተሳታፊ በነጻነት ሊሳተፍና በነጻነት ሊናገር የሚችልበት ስብሰባዎችን በአንድ ጊዜ ማዘጋጀት, ቦታ, ወይም ቅንብር "],
p29:["ቀ2. የፕሮጀክት አመቻቾች  አክባሪና ለውይይት የሚያነሳሱ ናቸው፡፡ ",
" አላውቅም/በቂ መረጃ የለኝም፡፡",
"አመቻቾች ለተሳታፊዎች ምን እንደሚሠራ ያስረዳሉ፣ ይነግሯቸዋል፤ ነገር ግን ተሳታፊዎችን አያዳምጧቸውም ፤ አያከብሯቸውም፡፡ ",
"አመቻቾች ሰዎችን ያዳምጣሉ በክብር ይነከባከባሉ፡፡",
" አመቻቾች ሃሳብ ያዳምጣሉ፣ ሰዎችን በክብር ይይዛሉ፣ ሁሉም ተሳታፊ እንዲናገር ያበረታታሉ፡፡",
"አመቻቾች ሃሳብ ያዳምጣሉ፣ ሰዎችን በክብር ይይዛሉ፣  ተሳታፊዎች እርስበርሳቸው እንዲወያዩ ያበረታታሉ "],
p30:["ቀ3.ስብሰባዎችን ከአመቻቾች ጋር ከተሳተፍን በኋላ የሚሰማን ስሜት፡ ",
" አላውቅም/በቂ መረጃ የለኝም፡፡", 
" መሳተፍ ግዴታ ስለሆነ ነው እንጂ ጊዜ ማባከን ነበር፡፡",
" አዳዲስ ሃሰቦች ሰምተናል፤ አነርሱን በሚመለከት  ምን እንደምንሰራ እርግጠኞች አይደለንም፡፡",
" አዳዲስ ሃሰቦች ሰምተናል ፤ አመቻቾችም እነዴት እንደምንሠራ ነግረውናል፡፡ ",
"አዳዲስ ሃሳብና ትምህርት አግኝተናል፤ እንዴት እንደምንሠራባቸውም በጋራ ወስነናል፡፡"],
p31:["ቀ4. (ለአመቻቾች ብቻ) ሥራችንን መስራት እንድንችል ፕሮግራሙን በሚተገብረው ድርጅት/የመንግስት ኤጀንሲ እየታገዝን እንደሆነ ይሰማናል (ተከታታይ ስልጠና እናገኛለን፤ ምንእና ለምን እንደምንሠራ እንረዳለን፤  እንደሁኔታው የማስተካከል ዕድልና በጀት አለ ) ",
"አላውቅም/በቂ መረጃ የለኝም", 
"ፕሮግራሙን የሚተገብረው ድርጅት/የመንግስት ኤጀንሲ ሥራችንን ለመደገፍ ምንም ጥረት አያደርግም፡፡ ",
" ከሚከተሉት በሁለቱ ድጋፍ እናገኛለን ፡ ሀ) ሥለጠና በተደጋጋሚ እናገኛለን (አንድ ጊዜ ብቻ አይደለም) ለ) ምን እየሠራን እንደሆነና ምን ጥቅም እንዳለው እናውቃለን፡፡  ሐ)የምናመቻቻቸውን የስብሰባዎች ብዛት እና ወቅት ከማህበረሰቡ ምቾት አንጻር መቀየር እንችላለን፡፡ መ) የስብሰባ ቦታዎችና ሁሉም አስፈላጊ ቁሰቁሶች  ፕሮግራሙን በሚተገብረው ድርጅትይሰጠናል፡፡  ሠ)  የሥራ ጫናችን ምክንያታዊ( ከመጠን በላይ  መንደሮችን መሸፎን ፣ ረጅም ርቀቶች ወይም ከመጠን በላይ   ብዙ ስብሰባዎችአይጠበቁብንም) ",
"ከሚከተሉት ሦስት ጉዳዮች ላይ ድጋፍ  እናገኛለን፡  ሀ) ሥለጠና በተደጋጋሚ እናገኛለን (አንድ ጊዜ ብቻ አይደለም) ለ) ምን እየሠራን እንደሆነና ምን ጥቅም እንዳለው እናውቃለን፡፡  ሐ)የምናመቻቻቸውን የስብሰባዎች ብዛት እና ወቅት ከማህበረሰቡ ምቾት አንጻር መቀየር እንችላለን፡፡ መ) የስብሰባ ቦታዎችና ሁሉም አስፈላጊ ቁሰቁሶች  ፕሮግራሙን በሚተገብረው ድርጅትይሰጠናል፡፡  ሠ)  የሥራ ጫናችን ምክንያታዊ( ከመጠን በላይ  መንደሮችን መሸፎን ፣ ረጅም ርቀቶች ወይም ከመጠን በላይ   ብዙ ስብሰባዎችአይጠበቁብንም)",
"በሚከተሉት በሁሉም ጉዳዮች ላይ ድጋፍ  እናገኛለን፡  ሀ) ሥለጠና በተደጋጋሚ እናገኛለን (አንድ ጊዜ ብቻ አይደለም) ለ) ምን እየሠራን እንደሆነና ምን ጥቅም እንዳለው እናውቃለን፡፡  ሐ)የምናመቻቻቸውን የስብሰባዎች ብዛት እና ወቅት ከማህበረሰቡ ምቾት አንጻር መቀየር እንችላለን፡፡ መ) የስብሰባ ቦታዎችና ሁሉም አስፈላጊ ቁሰቁሶች  ፕሮግራሙን በሚተገብረው ድርጅትይሰጠናል፡፡  ሠ)  የሥራ ጫናችን ምክንያታዊ( ከመጠን በላይ  መንደሮችን መሸፎን ፣ ረጅም ርቀቶች ወይም ከመጠን በላይ   ብዙ ስብሰባዎችአይጠበቁብንም)"]
}
