
const basics={
    figure1:"Figure ",
    figure2:" of 5. Click the arrows for more results.",
    h1:"Chiyambi",
    program:"Dzina la pulojekiti",
    organization:"Dzina la bungwe (ngati ndi losiyana ndi dzina la pulojekiti)",
    orgtype:"Type of organization:",
    country:"Dziko/mayiko komwe pulojekiti ikuchitikira:	",
    region:"Chigawo/Dera lomwe tiri (ngati ziliko)",
    name:"Akutsogolera kugwiritsa ntchito chipangizochi ndi ndani?",
    date:"Tsiku lomwe tamaliza kugwiritsa ntchito chipangizochi",
    stage:"Nthawi/gawo la pulojekiti",
    save:"Sungani deta",
    sendmail:"Email the data",
    comment:"Ndemanga kapena zina ndi zina zotumphukira"
}

const stages=["kueyesera pulojekiti","pulojekiti yatsopano","kawunuwuni wa mkati mwa pulojekiti","pachimake pa pulojekiti","Pulojekiti yomwe inamalizidwa kale"];
const orgtypes=["NGO,GO"];

const clickto="Dinani kuti musunge ndemanga";
const comment="Ndemanga";

const dimensions=[
"A: Kutengapo mbali kwa anthu, Kusasalidwa komanso kuthekera kuikapo ndemanga/maganizo",
"B: Zipangizo, upangiri komanso luso lamudera",
"C: Ndondomeko za kutseka pulojekiti komanso kapitilizeidwe ikazatsekedwa",
"D: Ndondomeko zothandizira kuti pulojekiti ichitike mwa chilungamo komanso mosabisa kanthu",
"E: Kulinganiza zokhumba za pulojekiti kuti zigwirizane ndi chikhalidwe cha dera",
"F: Mgwirizano womwe ulipo pakati pa anthu m'dera komanso pakati pa deralo ndi madera ena",
"G: Kulumikizana kwa pulojekiti ndi maboma ang'onoang'ono kapena kuti makhonsolo",
"H: Kayendetsedwe ka ntchito za kawuniwuni ndi kalondolondo",
"I: Kupezeka kwa Alangizi oyendetsa ntchito komanso danga lawo loikidwa pa ntchitoyi"];

const rubric={
p2:[
    "A 1. Pulojekiti yathu ikuwonetsetsa kuti magulu osiyanasiyana omwe amasalidwa akutenga nawo mbali pa zochitika za pulojekiti",
    "Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika",
    "Pulojekiti siimawunika zizindikiro zomwe zingabweretse kusalidwa(potengera kuti anabadwa aamuna kapena aakazi, mtundu wawo, zaka zawo zakubadwa, kapena chuma chawo).",
    "Oyendetsa pulojekiti apeza zomwe zingayambitse kuti anthu ena asalidwe ndipo achitapo potenga maganizond nfundo za omwe angasalidwewo",
    "Oyendetsa pulojekiti amalimbikitsa liwu la omwe ali pachiwopsezo chosalidwa ndipo imalimbikitsa kuti mdera mukhale chimvano. Apa ndiye kuti anthuwo ali ndi mwayi oyankhula koma si-iwo omwe amapanga chiganizo chomaliza pa zomwe zichitike",
    "Omwe ali pa chiwopsezo chosalidwa anali patsogolo popeleka maganizo awo, maganizowo amavedwa, ndiponsi ndi amene amamangirila chiganizo chomaliza cha zomwe zitachitike"
],
p3:[
    "A 2. Anthu akudela okhuzidwa pa pulojekiti ndi omwe amagwirizana zomwe pulojekiti iyenela kuyang’ana ndondomeko ya pulojekiti yonse isanalembedwe (Project design focus areas)",
    "Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika",
    "Anthu eni ake sanatengepo mbali powunikira zofunika mpulojekiti",
    "Anthu akudera anatenga nawo mbali posinikasinika zoyenera kuikidwa mu pulojekiti ndipo adachita nawo chimodzi mwa zinthu izi: 1) kukonza dongosolo la pulojekiti yonse, 2) kutolela fundo zofunika, 3) kuzukutza fundo zotoleredwazo, 4) kuwomba mkota wa zomwe zichitike",
    "Anthu akudera adachita nawo ziwiri kapena zitatu mwa izi: 1) kukonza dongosolo la pulojekiti yonse, 2) kutolela fundo zofunika, 3) kuzukutza fundo zotoleredwazo, 4) kuwomba mkota wa zomwe zichitike",
    "Anthu akudera adachita nawo zonse mwa izi: 1) kukonza dongosolo la pulojekiti yonse, 2) kutolela fundo zofunika, 3) kuzukutza fundo zotoleredwazo, 4) kuwomba mkota wa zomwe zichitike0"
],
p4:[
    "A 3. Anthu eni ake amatengapo gawo kwambiri pamene ndondomeko yonse ya pulojekiti ikukonzedwa kuti ikhale yotsatira ndondomeko za chitukuko chotsogodzedwa ndi anthu (Actual designing of activities)",
"Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika anthu eni ake sanatengepo mbali pokonza dongosolo lonse la pulojekiti",
"Ndondomeko ya pulojekiti imakonzedwa molingalira maganizo a anthu ochepa chabe (Monga atsogoleri kapena a ma komiti) osati maganizo a anthu onse okhudzidwa kudera",
"Ndondomeko ya pulojekiti imakonzedwa kuchokera pa zomwe anthu a kudera amvana limodzi onse koma ndondomekoyo simalabadira kusiyanasiyana komwe kulipo pakati pa anthu pa udindo, mphamvu, kupeza, kapena kusowa kwawo",
"Ndondomeko ya pulojekiti imakonzedwa kuchokera pa zomwe anthu a kudera amvana limodzi onse ndipo ndondomekoyo imalabadira kusiyanasiyana komwe kulipo pakati pa anthu pa udindo, mphamvu, kupeza, kapena kusowa kwawo.",
"Zonsezi zinaunikilidwa ndikugwiritsidwa ntchito popanga masomphenya ndi kugawa machitidwe a zonse mu pulojekiti0"
],
p5:[
"A 4. Anthu eni ake amakangalika kuyendetsa nawo pulojekiti kuphatikizapo kusintha poyenera kusintha",
"Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika",
"Anthu eni ake sanatenge nawo mbali poyendetsa nawo pulojekiti",
"Anthu ochepa chabe ndi omwe amauzidwa za momwe pulojekiti ikuyendera komanso ziganizo zomwe zapangidwa zokhudza momwe pulojekiti iyendere",
"Anthu akudera ndi atsogoleri awo amadziwitsidwa momwe pulojekiti ikuyendera, amatha kupelekapo maganizo ndipo akhonza kuthandizira kuti pachitike ziganizo zakutizakuti zokhudza momwe ntchito za pulojekiti ziyendere kapena kusintha komwe kuchitike",
"Anthu eni ake (kuphatikizapo omwe angasalidwe) ndi atsogoleri awo ndi omwe amatsogolera ziganizo zopangidwa mu pulojekiti, kuzukuta momwe pulojekiti ikuyendera, komanso zina ndi zina zofunika kusintha mu pulojekiti"
],
p6:[
    "A 5. Chngu cha ntchito ya pulojekiti imakonzedwa mogwirizana ndi anthu eni ake komanso (ngati nkofunika) opeleka thandizo la ndalama ",
    "Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika ",
    "Changu cha pulojekiti chimatengera momwe bungwe loyendetsa pulojekitiyo kapena opeleka thandizo la ndalama zoyiyendetera akufunira popanda kumva maganizo a anthu eni ake kapenanso kuwadziwitsa anthuwo.",
    "Bungwe loyendetsa pulojekiti kapena lopeleka thandizo loyendetsera pulojekitiyo ndi lomwe limachita chiganizo pa changu cha ntchito za pulojekiti. Anthu eni ake amauzidwa za momwe izi ziyendere ndipo anthuwo amapelekapo maganizo awo (ngakhale kuti bungwelo silimagwiritsa ntchito maganizowo)",
    "Amakonza changu cha pulojekiti ndi bungwe lomwe likuyendetsa pulojekitiyo kapena lomwe likupeleka thandizo la ndalama koma amafunsa maganizo a anthu ku dera ",
    "Bungwe lomwe likuyendetsa pulojekiti kapena lomwe likupeleka thandizo la ndalama limagwirizana ndi anthu a ku dera changu chomwe pulojekiti ichitikire. Maganizo a anthu osiyanasiyana akudera pa momwe pulojekiti iyenera kuthamangira amalingaliridwa mozama 0"    
],
p7:[
    "A.6 Pulojekiti imathandizila kupeleka upangiri kwa anthu, makamaka omwe ali pa chiwopsezo chosalidwa, kuti azitha kupeleka maganizo awo ndi zomwe adutsamo, momasuka",
    "Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika ",
    "Pulojekiti siichitapo kanthu pofuna kupeleka danga kapenanso upangiri kwa anthu eni ake",
    "Pulojekiti imatha kulimbikitsa anthu ena ndi ena kapena atsogoleri ena ndi ena kudera koma ilibe ndondomeko zokhazikika za momwe imachitira izi",
    "Pulojekiti imakonza maphunziro ndi upangiri othandizira kuti anthu azitha kuyankhula zakukhosi momasuka ",
    "Pulojekiti imakonza maphunziro ndi maupangiri ena pofuna kupeleka ukadaulo kwa anthu ndi atsogoleri akudera, kuphatikizapo omwe amasalidwa, kuti azitha kupeleka maganizo otchakuka momasuka"
],
p8:[
    "A.7 Pulojekiti imawunikira/kudziwitsa anthu ndi kupeleka upangiri kwa magulu, atsogoleri ndi anthu akudera wotha kuyankhula mwachimvano kuti boma likonze malamulo ndi ndondomeko zabwino zothandizira kupititsa patsogolo ufulu wawo pa za chuma, za ndale komanso za umoyo wawo watsiku ndi tsiku.",
    "Palibepo umboni okwanira kapena ulipo umboni ochepa oti izi zimachitika",
    "Pulojekiti simawunikira/kudziwitsa anthu ndi kupeleka upangiri kwa magulu, atsogoleri ndi anthu akudera wotha kuyankhula mwachimvano kuti boma likonze malamulo ndi ndondomeko zabwino zothandizira kupititsa patsogolo ufulu wawo pa za chuma, za ndale komanso za umoyo wawo watsiku ndi tsiku.",
    "Pulojekiti imazindikiritsa anthu za ufulu wawo osiyanasiyana koma siimatengapo mbali powapatsa upangiri wa momwe angayankhulire ndi liwu limodzi pofuna kukakamiza boma kusintha malamulo",
    "Pulojekiti imazindikiritsa anthu za ufulu wawo osiyanasiyana ndipo imatengapo mbali powapatsa upangiri wa momwe angayankhulire ndi liwu limodzi pofuna kukakamiza boma kusintha malamulo",
    "Pulojekiti imazindikiritsa anthu za ufulu wawo osiyanasiyana ndipo imatengapo mbali powapatsa upangiri wa momwe angayankhulire ndi liwu limodzi pofuna kukakamiza boma kusintha malamulo komanso kuti azitha kumemezana pa zochitikachitika"    
],
p9:[
    "B.1 Pulojekiti imagwiritsa ntchito zinthu zomwe anthu ku dera alinazo komanso zomwe amadziwa kale pofuna kupititsa patsogolo ntchito ya chtukuko",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Pulojekiti simagwiritsa ntchito zinthu ndi upangiri omwe anthu ku dera alinawo komanso zomwe amadziwa kale pofuna kupititsa patsogolo ntchito ya chtukuko",
    "Pulojekiti ikudziwa za zinthu zomwe dera lilinazo kale koma ndi okhawo omwe akugwira ntchito kuderako mu pulojekitiyo omwe amafotokozera ena za izi",
    "Pulojekiti imagwiritsa ntchito zinthu zomwe dera lilinazo kale komanso imalabadira zomwe anthu akudziwa kale",
    "Pulojekiti imagwiritsa ntchito zinthu zomwe athu kudera akudziwa kale ndi zomwe alinazo kale "    
],
p10:[
    "B.2 Anthu a kudera amasonkha zinthu zawo monga nthawi, ndalama, luso, zipangizo ndi zina zotero pa ntchito ya pulojekiti",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Anthu a kudera samasonkha zinthu zawo monga nthawi, ndalama, luso, zipangizo ndi zina zotero pa ntchito ya pulojekiti",
    "Anthu akudera amapeleka zinthu zawo (malo, makobidi, zipangizo) chifukwa choti akakamizika ndi malamulo kutero",
    "Anthu akudera amapeleka zinthu zawo (malo, makobidi, zipangizo) akafunsidwa kutero osati pawokha ",
    "Anthu akudera amagwirizana zomwe zikufunika, modzipeleka amapeleka zinthu zawo (malo, makobidi, zipangizo) pofuna kuthandizira kuti masomphenya a pulojekiti akwaniritsidwe 0"    
],
p11:[
    "C.1 B16:B18Anthu eniake ndi omwe amakhala patsogolo kukonza ndondomeko ya momwe pulojekiti idzamalizire ntchito zake kuderako",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Palibepo ndondomeko ya momwe pulojekiti idzamalizire ntchito zake kuderako",
    "Ndondomeko za momwe pulojekiti idzachokele kudera zimakonzedwa ndi bungwe lomwe likutsogolera pulojekitiyo popanda kumva maganizo a anthu akudera kapena atsogoleri awo",
    "Ndondomeko za momwe pulojekiti idzachokere kudera zinakonzedwa mogwirizana ndi anthu akudera ",
    "Ndondomeko za momwe pulojekiti idzachokere kudera zili mmanja mwa anthu ndi atsogoleri awo"
],
p12:[
    "C.2 Ndondomeko za momwe pulojekiti ingatsekedwere moyenera zilipo ndipo zikutsatidwa mumagawo onse a pulojekiti",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Palibepo ndondomeko ya momwe pulojekiti idzamalizire ntchito zake kuderako",
    "Ndondomeko za momwe pulojekiti idzachokele kudera zimakhazikitsidwa pamene pulojekitiyo yafika kale kumapeto",
    "Ndondomeko za momwe pulojekiti idzachokere kudera zidakonzedwa kumayambiriro a pulojekiti ndipo zimawunikiridwanso pamene pulojekiti yayandikira kumapeto",
    "Ndondomeko za momwe pulojekiti idzachokere kudera zidakonzedwa kumayambiriro a pulojekiti ndipo zimawunikiridwanso pafupipafupi panthawi yomwe pulojekiti ikuchitika ndipo zimamalizidwa kukonzedwa bwino pulojekiti ikamayandikira kumapeto0"
],
p13:[
    "C.3 Ndondomeko za kutha kwa pulojekiti zimatambasula bwino ndondomeko zomwe zidzaikidwe pofuna kuti ntchito za pulojekiti zidzapitirirebe kuchitika mu deralo ngakhale pulojekitiyo itatha",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Palibepo ndondomeko ya momwe pulojekiti idzamalizire ntchito zake kuderako",
    "Ndondomeko za momwe pulojekiti idzachokere kudera zilipo koma sizilongosola momwe pulojekiti idzachitire kuti ntchito zake zidzapitilirebe kapena momwe pulojekiti idzachitire kuti anthu akhale ndi kuthekera kopitiza kupeza phindu la pulojekitiyi",
    "Pali ndondomeko yosonyeza bwino lomwe momwe pulojekiti idzasinthire miyoyo ya anthu pulojekitiyo itatha ",
    "Pali ndondomeko yosonyeza bwino lomwe momwe pulojekiti idzasinthire miyoyo ya anthu pulojekitiyo itatha ndipo ndondomekoyo inakonzedwa ndi anthu eni ake powunikira upangiri ndi zinthu zomwe anthu akudera adzazisowe 0"
],
p14:[
    "C.4 Phindu la pulojekiti pa umoyo wa anthu limawunikidwa patadutsa nthawi chitheleni pulojekiti mogwirizana ndi anthu eni ake",
    "sizikugwirizana ",
    "Phindu la pulojekiti pa umoyo wa anthu simawunikidwa patadutsa zaka ziwiri chitheleni pulojekiti",
    "Phindu la pulojekiti limalingidwa (kapena linakonzedwa kuti lidzalingidwe) patapita zaka ziwiri chithereni cha pulojekiti. Anthu akudera amadziwitsidwa za kafukufuku ameneyu ndipo amapeleka maganizo malingana ndi zomwe afunsidwa",
    "Pulojekiti imawunikidwa momwe yasinthira miyoyo ya anthu pakapita zaka ziwiri chithereni pulojekitiyo ndipo anthu amalangizapo za kawuniwuniyu ndipo amapeleka maganizo awo akafunsidwa kutero",
    "Pulojekiti imawunikidwa momwe yasinthira miyoyo ya anthu pakapita zaka ziwiri chithereni pulojekitiyo ndipo anthu amatenga gawo lalikulu pokonza kawuniwuniyo ndi kulemba zotsatira zake"
],
p15:[
    "C.5 Anthu eni ake (kuphatikizapo omwe amasalidwa) akupindulabe ndi ntchito za pulojekiti ya chitukuko chotsogodzedwa ndi anthu ya CLD",
    "sizikugwirizana ",
    "Palibepo chowoneka chomwe pulojekiti inasiya kudera (chabwino, kapena choipa)",
    "Palibe umboni okwanira osonyeza kuti pulojekiti yasiya phindu lokhalitsa kwa anthu ndipo kusintha kwangochitika moyepula kapena sikunachitike nkomwe",
    "Zotsatira za pulojekiti ndi zosiyanasiyana – koma zambiri mwa izo ndi zabwino. Anthu kapena magulu a kudera atsatira mwa apo ndi apo njira ndi upangiri osiyanasiyana omwe apeza mu pulojekiti",
    "Zambiri zochuluka za pulojekiti ndi zabwino. Anthu kapena magulu a kudera atsatira njira ndi upangiri osiyanasiyana omwe apeza mu pulojekiti"
],
p16:[
    "D.1 Pulojekiti ikuthandizira kuti pakhale ubale weniweni omwe ukuthandiza kuunikira chilungamo ndi kusabisirana mpali zonsezonse",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "palibepo njira zomwe zinaikidwa zoti anthu azitha kuwafunsa atsogoleri a pulojekiti momwe akuyendetsera zinthu",
    "Pali njira zomwe zinakhazikitsidwa zoti anthu azitha kufunsa bungwe lomwe likutsogolera pulojekiti kapena zoti bungwe loyendetsa puloketi lizitha kufunsa anthu eni ake momwe achitira zinthu",
    "Anthu akudera ndi oyendetsa pulojekiti amafunsana wina ndi mzake kuti afotokozere zomwe iwo achita",
    "Anthu eni ake amafunsana wina ndi mzake kuti afotokozere zomwe iwo achita, osati kungofunsana pakati pa anthu aku dera ndi oyendetsa pulojekiti"
],
p17:[
    "D.2 Pulojekiti inayika ndondomeko zabwino zothandizira kuti anthu azitha kupeleka maganizo ndi madandaulo awo pamene pulojekiti ikuchitika kuphatikizapo kudzera mu ntchito yochita kalondolondo ndi kawuniwuni",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "palibepo njira zomwe zinaikidwa zoti anthu azitha kuwafunsa atsogoleri a pulojekiti momwe akuyendetsera zinthu",
    "Ntchito yofotokozera anthu zotsatira imasiyidwa mmanja mwa oyendetsa pulojekiti ku dera popanda kukhazikitsa ndondomeko zopelekera zotsatirazo",
    "Anthu akudera amayankhidwa pokhapo pomwe pali zovuta",
    "Potengera zotsatira za kawuniwuni ndi kalondolondo, anthu amakhala pamodzi kuti amve, awunike ndi kuphunzirapo pa zotsatira ndi cholinga chakuti akonze dongosolo labwino lothanirana ndi mavuto omwe alipo"
],
p18:[
    "E.1 Pulojekiti imalabadira kusiyanasiyana komwe kulipo pakati pa anthu malingana ndi mphamvu/udindo wawo, chibadwidwe chawo, chuma chow, mitundu yawo ndi zina Zotero.",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Pulojekiti simalabadira kusiyanasiyana komwe kulipo pakati pa anthu ku dera ",
    "Kafukufuku wa momwe pulojekiti ikuyendera amawonetsa bwino lomwe kusiyana komwe kulipo pakati pa anthu ku dera, koma palibe njira zomwe zimakhazikitsidwa pofuna kugwiritsa ntchito zotsatirazi",
    "Zotsatira za kuzukuta zimawonetsa bwino lomwe kusiyana komwe kulipo kumbali ya mphamvu pakati pa anthu komabe anthu komanso oyendetsa pulojekiti zamapatsidwa upangiri oti athane ndi kuziyanaku",
    "Zotsatira za kuzukuta zimawonetsa bwino lomwe kusiyana komwe kulipo kumbali ya mphamvu pakati pa anthu ndipo anthu komanso oyendetsa pulojekiti amapatsidwa upangiri oti athane ndi kuziyanaku"
],
p19:[
    "E.2 Pulojekiti imakangalika pa zosowa zosiyanasiyana zomwe dera lilinazo",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Pulojekiti simalabadira zosowa zosiyanasiyana zomwe dera lilinazo; limangochita ntchito yake monga momwe inakonzedwera poyamba basi",
    "Pulojekiti singakwanitse kuthana ndi mavuto omwe dera lakumana nawo komabe, bungwe loyendetsa pulojekitiyo limafufuza thandizo mnjira zina ",
    "Pulojekiti imatha kusinthidwa mwa apo ndi apo koma kusinthako kumayenera kukhala kogwirizana kwathunthu ndi momwe pulojekiti inakonzedwera kumayambiliro",
    "Pulojekiti imasinthidwa pafupipafupi, kutengera zipambano kapena zolephela kapenanso zogwa mwadzidzidzi zomwe ikukumana nazo"
],
p20:[
    "F.1. Pulojekiti imadzala ubale wabwino pakati pa anthu mdera, pakati pa dera ndi ma dera ena, komanso pakati pa dera ndi adindo.",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Pulojekiti simachitapo kanthu komanso inalibe cholinga cholimbikitsa ubale pakati pa anthu ",
    "Pulojekiti imathandizira kumanga ubale pakati pa anthu ofanana mdera mwachitsanzo, olumala ndi anzao a ulumali, komanso atsikana ndi atsika en mudera",
    "Pulojekiti imalimbikitsa maubale pakati pa anthu ndi magulu osiyanasiyana mu dera mwachitsanzo, achinyamata ndi akulu komanso pakati pa adindo ndi opanda udindo",
    "Pulojekiti imalimbikitsa ubale motere: 1. pakati pa anthu ofanana mdera 2. pakati pa anthu osafanana mudera 3. Pakai pamadera osiyana"
],
p21:[
    "F.2 Pulojekiti imalumikiza anthu a kudera ndi mabungwe ndi magulu osiyanasiyana ",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Pulojekiti simalumikiza anthu a kudera ndi mabwengwe osiyanasiyana ",
    "Pulojekiti imalumikizitsa anthu akudera ndi mabugwe / magulu osiyanasiyana",
    "Pulojekiti imalumikizitsa dera ndi mabungwe/magulu osiyanasiyana a mdziko/dera",
    "Pulojekiti imalunzanitsa magulu kapena atsogoleri a kudera ndi mabungwe/magulu ena kuderako kapena mdziko"
],
p22:[
    "G.1 Atsogoleri a kudera komwe pulojekiti ikuchitika ndi olunzanitsidwa ndi atsogoleri a ku khonsolo",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "atsogoleri a maboma aang'ono sakudziwa za pulojekitiyi",
    "Akukhonsolo akudziwa za pulojekitiyi koma palibepo mwayi woti anthu akudera ndi akukhonsolowo aziyankhulana ",
    "Akukhonsolo akudziwa za pulojekiti ndipo amalumikizana ndi magulu akuderako. Pulojekiti imapeleka upangiri kwa anthu kuti azitha kufunsa zosowa zawo ku khonsolo",
    "Akukhonsolo akudziwa za pulojekiti. Pulojekiti imakonza madongosolo othandizira kuti akukhonsolo ndi anthu eni azitha kumakumana nkumakambirana zosowa za kudera"
],
p23:[
    "H.1 kalondolondo ndi kauniuni wa ntchito zachitukuko mu polojekiti umachitka pamodzi ndi anthu",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Sipamachitika kawuniwuni mogwirizana ndi anthu mu pulojekiti",
    "Anthu eni ake amachita kawuniwuni koma nthawi zambiri kawuniwuniyo amatsogoleredwa ndi ogwira ntchito mu pulojekiti",
    "Kawuniwuni wochitidwa ndi anthu eni ake amachitika ndipo nthawi zambiri amatsogoleredwa ndi atsogoleri a kuderako. Komabe, palibe dongosolo lokhazikika la momwe ochita kawuniwuniwo azifotokozela anthu onse kuderako zotsatira za kawuniwuniyo",
    "Kawuniwuni wochitidwa ndi anthu eni ake ndi mbali imodzi yofunikira ya zochitika za mu pulojekiti ndipo amatsogoleledwa ndi anthu a kuderako. Pali dongosolo lokhazikika la momwe ochita kawuniwuniwo azifotokozela anthu onse kuderako zotsatira za kawuniwuniyo"
],
p24:[
    "H.2 Anthu akudera amapanga kawuniwuni wa ntchito zachitukuko",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "Sipamachitika kalondolondo mogwirizana ndi anthu mu pulojekiti",
    "Anthu eni ake amatengapo mbali pa chimodzi kapena ziwiri mwa zinthu izi mkalondolondo: 1) kukonza dongosolo, 2) kutolera Mfundo zofunika, 3) kuzukuta Mfundo zotoledwa, 4) kutsimikiza ngati zomwe apezazo nzolondola, 5) kuwomba mkota ndi kupeleka maganizo pa zomwe zikuyenera kuchitika, 6) kukonza ndondomeko zatsopano.",
    "Anthu eni ake amatengapo mbali pa ziwiri kapena zinayi mwa zinthu izi mkalondolondo: 1) kukonza dongosolo, 2) kutolera Mfundo zofunika, 3) kuzukuta Mfundo zotoledwa, 4) kutsimikiza ngati zomwe apezazo nzolondola, 5) kuwomba mkota ndi kupeleka maganizo pa zomwe zikuyenera kuchitika, 6) kukonza ndondomeko zatsopano.",
    "Anthu eni ake amatenga mbali pa zonse mwa izi mkalondolondo: 1) kukonza dongosolo, 2) kutolera Mfundo zofunika, 3) kuzukuta Mfundo zotoledwa, 4) kutsimikiza ngati zomwe apezazo nzolondola, 5) kuwomba mkota ndi kupeleka maganizo pa zomwe zikuyenera kuchitika, 6) kukonza ndondomeko zatsopano."
],
p25:[
    "H.3 Zotsatira za kalondolondo ndi kawuniwuni zimasiyanitsidwa kutengera amuna ndi akazi, awulumali ndi zizindikiro zina zosonyeza nfundo za kusiyanitsa kwa anthu muderamo",
    "Palibepo umboni kapena umboni oti izi zimachitika ndi ochepa",
    "zotsatira za kawuniwuni ndi kalondolondo zimangolembedwa mosasiyanitsa amuna ndi akazi, olumala kapena opanda ulumali ndi zina zotero",
    "Zotsatira zimagawidwa ndithu komabe pali magawo ambiri omwe samalabadwiridwa pogawako. Oyendetsa pulojekiti amangofotokoza moyepula zifukwa zomwe zotsatirazo zikuwoneka zosiyana kwa magulu osiyanasiyana.",
    "Zotsatira zimagawidwa potengera zofunika zonse. Oyendetsa pulojekiti amafotokoza mwazina zokhudza zifukwa zomwe zotsatirazo zikuwoneka zosiyana kwa magulu osiyanasiyana ndi zomwe kusiyana kumeneku kukutanthauza pa ntchito ya pulojekitiyo.",
    "Zotsatira zimagawidwa potengera zofunika zonse. Oyendetsa pulojekiti amafotokoza bwino lomwe zonse zokhudza zifukwa zomwe zotsatirazo zikuwoneka zosiyana kwa magulu osiyanasiyana ndi zomwe kusiyana kumeneku kukutanthauza pa ntchito ya pulojekitiyo."
]
}

