const basics={
    figure1:"Chithunzi ",
    figure2:" ya 5. Dinani miviyo kuti mupeze zotsatira zina.",
    h1:"Zambiri ya Pulogalamu",
    program:"Dzina la Pulogalamu",
    organization:"Dzina la Bungwe",
    orgtype:"Mtundu wa Bungwe:",
    country:"Dziko/Maiko komwe kuli Pulogalamu",
    region:"Dela/Chigawo (ngati kuli koyenera)",
    name:"Name(s) Dzina / Maina anthu amene akutenga nawo gawo pa  kuunikira",
    date:"Tsiku lolowetsera kuwuniyu",
    stage:"Ndime yomwe pulogalamu ili",
    save:"Sungani zomwe mwayankha",
    more:"More Functions",
    full:"Lipoti Lathunthu",
    clear:"Chotsani Data",
    load:"Kwezani Data",
    comment:"Ndemanga"
}
const stages=['zongoyesera','zatsopano','mkati mwa ndime','zokhwima','zomalizitsa'];
const orgtypes=["Zamaboma ang'ono/Zokhudzana ndi Boma","Mabungwe ongothandiza/ Mabungwe otumikira anthu"];

const clickto="Dinani kuti musunge ndemanga";
const comment="Ndemanga";

const dimensions=[
"A: Kutengapo mbali, Kuphatikizidwa, ndi Mawu",
"B: Zipangizo Zam'deralo ndi Nzeru",
"C: Kukhazikika ndi Njira Yosinthira Zinthu",
"D: Njira Zovomeleza zinthu zomwe wachita",
"E: Kuyankhapo pa zochitika",
"F: Mgwirizano",
"G: Kugwira ntchito ndi maboma ang'ono/ mabungwe otumikira anthu",
"H: Zochitika pa Kuyang'anira ndi Kuwunika zinthu",
"I: Kuwongolera]"];

const rubric={
p2:["A1. Pulogalamuyi imawonetsetsa kuphatikizidwa kwa magulu onse a anthu a m'mudzi (monga achikulire ndi achinyamata, amuna ndi akazi, olemera ndi osauka, ochokera m'mafuko osiyanasiyana, magulu, zipembedzo, ndi zina zotero.)",
"Sindikudziwa / uthengawu ndi osakwanira",
"pulogalamuyi siyiganizira zamagulu osiyanasiyana a anthu omwe amakhala m'mudzi.",
"pulogalamuyi imayang'ana magulu osasankhidwa (osati onse) ndikuwonetsetsa kuti akutenga nawo gawo pamisonkhano/zinthu zochitira limodzi",
"pulogalamuyi imaganizira magulu ambiri a anthu ndikuwonetsetsa kuti akutengapo nawo mbali pamisonkhano/zinthu zochitira limodzi.",
"pulogalamuyi imaganizira magulu onse a anthu, ndikuwonetsetsa kuti akutengapo  nawo mbali pamisonkhano/zinthu zochitira limodzi."],
p3:["A2. Anthu a m'mudzi amasankha zofunikira za pulogalamu ya CLD kupanga kwenikweni kwa pulogilamu kusanachitike.",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Anthu a m'mudzi satenga nawo mbali posankha zofunikira pa pulogalamuyi.",
"Sankhani  anthu  a m'mudzi (mafumu, eni minda, ndi ena otero) kapena magulu omwe akutenga nawo mbali posankha zofunikira za pulogalamuyi.",
"Magulu ambiri a m'mudzi amatenga nawo mbali posankha zofunikira za  pulogalamu.",
"Magulu onse a anthu a m'mudzi amatenga nawo  mbali posankha zofunikira za pulogalamuyi ndipo ali ndi mawu ofanana pankhaniyi."],
p4:["A3. Anthu a m'mudzi amatenga nawo mbali yayikulu pakukonzekera mapulogalamu a CLD mdera lawo.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Anthu ammudzi satenga nawo mbali pokonzekera za pulogalamuyi.",
"Kusankha anthu ammudzi (monga atsogoleri, eni minda, ndi zina zotero) kapena magulu atenge nawo mbali pokonzekera pulogalamu.",
"Magulu ambiri a m'mudzi amatenga nawo mbali pokonzekerazi.",
"Magulu onse a m'mudzi amatenga nawo mbali pakukonzekera ndondomekoyi ndipo maganizo awo amatengedwa mofanana."],
p5:["A4. Mabungwe a m'mudzi omwe akuyimira magulu onse a anthu ndi oyandikana nawo akuyendetsa pulogalamuyi.",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Mabungwe omwe siaboma kapena atsogoleri omwe alipo amayendetsa pulogalamuyi.",
"Mabungwe omwe siaboma kapena atsogoleri a m'dera  amapanga bungwe lomwe liyendetse ntchito za pulogalamuyo kapena kugwira ntchito ndi bungwe lomwe lilipo lomwe silingaphatikizepo athu kuchoka m'magulu onse.",
"Mabungwe awanthu oziyika mumaudindo okha omwe akuimira magulu  ndi madera onse akuyendetsa pulogalamuyi.",
"Mabungwe osankhidwa omwe akuimira magulu onse mdela akuyendetsa pulogalamuyi."],
p6:["A5. Pulogalamuyi imapangisa kuthekera kolankhulapo komanso kupeleka chilimbikitso kwa oyimirila anthu a m'mudzi pa zochitika/kupanga ziganizo zabwino.",
"Sindikudziwa/ uthengawu ndi osakwanira",
"pulogalamuyi siimapangisa khama polimbikitsa kulankhurapo kapena luntha kwa oyimilira anthu a m'mudzi.",
"pulogalamuyi imalimbikisa kulankhurapo pazochitika ndi kuzikhulupilira pakati pa oyimira anthu ena, koma osati omwe amachokera m'magulu osatsankhidwa.",
"pulogalamuyi imalimbikitsa kulankhulapo pazochitika ndi kuzikhulupilira  pakati pa oyimilira anthu a m'mudzi ambiri kuphatikizanso ochokera m'magulu ena osasankhidwa.",
"pulogalamuyi imalimbikitsa kulankhulapo pazochitika ndi kuzikhulupilira   pakati pa onse oyimira anthu a m'mudzi kuphatikizapo  omwe amachokera m'magulu onse osasankhidwa."],
p7:["A6. Pulogalamuyi imalimbikitsa kuzindikira za maufulu (zachikhalidwe, zachuma ndi ndale) ndikupeleka upangili pakati pa oyimira anthu mudera kuti afunse za maufulu awo.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"pulogalamuyi siyiphunzitsa ndikupeleka upangiliri ofunsa  za maufulu awo.",
"pulogalamuyi imalimbikitsa kuzindikira za maufulu, koma siimapeleka upangiri  uliwonse ofunsa za maufuluwo.",
"pulogalamuyi imalimbikitsa kuzindikira za maufulu, ndipo imamanga luso kwa anthu ochepa kuti awafunse.",
"Pulogalamuyi imalimbikitsa anthu kudziwa za maufulu, ndipo imayang'ana kwambiri pakupereka  upangiri pakati pa oyimilira anthu  ochokera m'magulu onse kuti azitha kufunsa za maufulu awo."],
p8:["B1.Pulogalamu ya CLD imawonjezera zinthu ndi nzeru zopezeka mudera.",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Pulogalamuyi siyiganizira zazinthu  ndi nzeru zopezeka m'deralo.",
"Pulogalamuyi imapeza  zinthu ndi nzeru zomwe zili m'deralo. Komabe imadalira nzeru zakunja zopelekedwa ndi ogwira ntchito.",
"Pulogalamuyi imagwiritsa ntchito zinthu ndi nzeru zopezeka m'deralo zikayenera kutero.",
"Pulogalamuyi imagwiritsa ntchito ndikulemekeza nzeru ndi zinthu zomwe zili m'deralo. Imadalira kwambiri  zinthu zimenezi"],
p9:["B2. Anthu a m'mudzi amapereka zinthu zofunika (monga nthawi, ndalama, ntchito, malo, zipangizo, chikoka, etc.)",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Anthu a m'mudzi sachitapo kanthu pakayendetsedwe ka  pulogalamuyo m'njira ya  ndalama kapena ntchito zachifundo kapena kugwira ntchito.",
"Anthu a m'mudzi amapereka nthawi yawo/kugwira ntchito kapena chuma chawo (nthaka, ndalama, zipangizo) chifukwa ndi zovomerezeka.",
"Anthu a m'mudzi amapereka nthawi yawo/kugwira ntchito kapena chuma chawo (malo, ndalama, zipangizo), akalimbikitsidwa.",
"Anthu a m'mudzi amapanga chiganizo pa zomwe zikufunika, mosakakamizika amapezanso  zofunika zoonjezera (nthawi yawo/kugwira ntchito, malo, ndalama, zipangizo) ndikupereka mwaulere."],
p10:["C1. Anthu a mdera ndi ofunika kwambiri pokonza momwe ntchito iyendere ndi nthawi yomwe pulogalamuyo idzamalizidwe ndikuperekedwa kwa iwowo.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Palibe ndondomeko yomalizitsa ndi kupereka pulogilamu,",
"Dongosolo lomaliza ndi kuperekedwa kwa pulogalamuyo limapangidwa ndi bungwe lomwe likugwira ntchitoyo ndi atsogoleri a m'mudzi kapena anthu a m'mudzi amadziwitsidwa za izi.",
"Dongosolo lomaliza ndi kuperekedwa kwa pulogilamu limapangidwa mogwirizana ndi atsogoleri a mderalo ndi anthu a m'mudzi.",
"Dongosolo lomaliza ndi kuperekedwa kwa pulogilamu  limatsogozedwa ndi anthu a m'mudzi ndi atsogoleri a m'deralo."],
p11:["C2. Madera amagwira ntchito limodzi ndi mabungwe omwe akuyendetsa  ntchito  kuti aziwunika pafupipafupi ndi kuzolowera   ndondomeko ya kaperekedwere ka mapulogilamu ndi kusintha kachitidwe kazinthu",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Palibe ndondomeko kapena njira yoti bungwe lipereke mapulogalamuwa kwa anthu a m'mudzi,",
"Mapulani opereka pulogalamuyi kwa anthu a m'mudzi amapangidwa pokhapokha pulogalamuyo ikamayandikira kutha  (kapena ndalama zoyendesesela program zatha),",
"Mapulani opereka pulogalamuyi kwa anthu a m'mudzi amapangidwa kumayambiriro kwa pulogalamuyo ndikukonzedwanso kumapeto kwa pulogalamuyo kapena ngati pali vuto lalikulu,",
"Mapulani opereka pulogalamuyi kwa anthu a m'mudzi amapangidwa kumayambiriro kwa ndondomekoyi ndipo amawunikiridwa nthawi zonse ndi anthu a m'mudzi kuti awonetse momwe zinthu zilili panthawiyo m'deralo"],
p12:["C3. Pulogalamuyi imawonetsetsa kuti magulu a anthu mderalo (monga mabungwe a m'mudzi, magulu omwe akukhazikitsa mapologalamu) ali ndi kuthekera kopitiliza kugwira ntchito ikaperekedwa",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Pulogalamuyi sichita khama kuwonetsetsa kuti magulu a m'mudzi ali ndi kuthekera kopitiliza  kugwira ntchito pambuyo poperekedwa.",
"Pali ndondomeko yoperekera pologalamu koma palibe njira yowonetsetsa kuti magulu a anthu a m'mudzi atha kupitiliza  kugwira ntchito pambuyo popereka ndikuti ali ndi kuthekera kopeza ndalama  / zothandizira (monga kufunikira).",
"Pali njira yowonetsetsa kuti magulu a m'mudzi athe kupitiliza  kugwira ntchito itaperekedwa koma palibe zochitika kukhala ndi kuthekera   kopeza ndalama / zothandizira (monga kufunikira).",
"Pulogalamuyi ikugwira ntchito zolimbikitsa anthu kukhala ndi kuthekera powonetsetsa kuti magulu a m'mudzi athe kupitiliza  kugwira ntchito itaperekedwa ndikupeza ndalama /zinthu zofunika(monga momwe zingafunikire)."],
p13:["C4. Ikamalizika, zotsatira za  pulogalamuyo zimayezedwa powona m'mene anthu a mudela amatengelapo gawo pa pologalamu.",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Palibe ndondomeko yoti ayeza zotsatira za pulogalamu ikamalizidwa kapena anthu sakudziwa ngati pali mapulani ena aliwonse. ",
"Pali mapulani oyeza zotsatira za pulogalamu (kapena imayezedwa) ikamalizidwa. Anthu a m'mudzi amadziwitsidwa za ntchitoyi ndikupereka mayankho molingana ndi m'mene afunsidwira.",
"Zotsatira zimayezedwa (kapena zimazayezedwa msogolo) pulogalamu ikatha ndipo anthu a m'mudzi afunsidwa pazochitikazo.",
"Zotsatira zimayezedwa (kapena kulinganizidwa kuti ziyezedwe) pulogalamu ikatha ndipo anthu a m'mudzi amakhala otenga nawo mbali mu magawo onse a ntchitoyi."],
p14:["C5. Pologalam itaperekedwa kwa anthu a m'mudzi/magulu a maboma ang'ono/ anthu a m'magulu onse (monga amayi, achinyamata, okalamba, osauka, olumala, anthu ochepa) amapindulabe ndi ntchito zotsogozedwa ndi anthu. ",
"Sindikudziwa/ uthengawu ndi osakwanira",
"Palibe amene amapeza phindu liri lonse   pulogalamu ikaperekedwa kupatula magulu omwe ali ndi mwayi amapitilirabe kupindula.",
"Pulogalamuyi imapitilizabe kupindulitsa magulu ena ngakhale itaperekedwa.",
"Pulogalamuyi imapitilizabe kupindulitsa magulu ambiri ngakhale itaperekedwa.",
"Pulogalamuyi imapitilizabe kupindulitsa magulu onse, makamaka omwe ali pachiwopsezo kwambiri, ngakhale itaperekedwa."],
p15:["D1. Pologalamu ndi magulu a m'mudzi amagawana zambiri  mwachitsanzo zomwe akuchita, chifukwa chiyani, m'mene akuchira, ndi momwe ndalama zinagwiritsidwira ntchito.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siyimagawana uthenga uliwone ndi anthu a m'mudzi pa china chiri chonse pa  zomwe zikuchitika, m'mene chikuchitikira  ndi chifukwa chake.",
"Pulogalamu kapena mabungwe a m'mudzi nthawi zina amagawana mawuthenga pang'ono okhudzana ndi pulogalamuyi koma uthenga tsatanetsatane siumapezeka.",
"Pulogalamuyo kapena mabungwe a m'mudzi nthawi zambiri amagawana uthenga okhudzana ndi pulogalamuyi (koma si uthenga onse omwe umapezeka).",
"Pologalamu ndi mabungwe a m'mudzi kawiri-kawiri amagawana  zokhudzana ndi ndalama, ndondomeko yakagwiridwe ka ntchito, ndi zochitika ndi anthu a m'mudzi ndikuyitanitsa ndemanga."],
p16:["D2. Pulogalamuyi imayankha madandaulo a m'mudzi/madandaulo a anthu.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi ilibe njira iliyonse yoti anthu a m'mudzi anene  zokhumudwitsa  kapena madandaulo.",
"Pulogalamuyi ili ndi njira yoti anthu a m'mudzi anene  zokhumudwitsa /madandaulo, koma njirayi siimapezeka kapena kudalilika.",
"Pulogalamuyi ili ndi njira yimene imapezeka komanso yodalirika kuti anthu a m'mudzi azinena zokhumudwitsa /madandaulo, koma madandaulo sayankhidwa.",
"Pulogalamuyi ili ndi njira yofikirika komanso yodalirika kuti anthu ammudzi azinena mavuto /madandaulo ndipo madandaulo amayankhidwa."],
p17:["D3. Zotsatira za kuyang'anira  ndi kuwelengetsera ntchito zimagawidwa nthawi zonse ndi anthu a m'mudzi.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Zotsatira za Kuyang'anira ndi kuwelengetsera ntchito sizimagawidwa kwa anthu a m'mudzi.",
"Zotsatira kuchokera ku ntchito  ya Kuyang'anira ndi  kuwelengetsera  ntchito zitha kugawidwa kwa anthu a m'mudzi ndi anthu omwe ali nawo mu pulogalamuyi atafuna kutero.",
"Zotsatira zochokera ku ntchito ya  Kuyang'anira ndi ndikuwelengetsera ntchito zimagawidwa ndi anthu a m'mudzi pokhapokha pakabuka mavuto.",
"Zotsatira zochokera ku  Kuyang'anira ndi kuwelengetsera ntchito zimagawidwa pafupipafupi ndi anthu a m'mudzi."],
p18:["E1. Pulogalamuyi imasintha  kutengera zinthu zomwe anthu akufuna ndi m'mene anthu amakhalira.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siyimasintha kutengera kusintha kwa zinthu zomwe zikufunika kwa anthu a m'mudzi (monga kusefukira kwa madzi, chilala, njala, kubwera  kwa njira zamakono, kusintha kwa ndale, ndi zina zotero).",
"Pulogalamuyi imatha kusintha zinthu zina.",
"Pulogalamuyi imatha kusintha kutengera momwe zofunika kwa anthu a m'mudzi zasinthira  kuphatikiza zomwe zimadza chifukwa cha mavuto ena ndi ngozi zokudza mwazizizi.",
"Purogalamuyi iri ndi kuthekera kosintha kutengera kusintha kwa  zosowa za anthu a m'mudzi kuphatikizapo zomwe zimadza chifukwa cha zovuta kapena ngozi  zazizizi ndipo imakonza njira zothetsera mavuto amenewa ngati azachitikeso mtsogolomu."],
p19:["E2. Mayendedwe a Pulogalamu ya CLD (ie, nthawi yochitika, mlingo oyendera, ndi kutalika kwa kuyanjana ndi anthu a m'mudzi ) zimatsimikizidwa ndi  anthu a m'mudzi.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Anthu a m'mudzi samatenga nawo mbali posankha m'mene  pulogalamuyo ikuyendera.",
"Anthu a m'mudzi amadziwitsidwa za mayendedwe a pulogalamuyi.",
"Anthu ena a m'mudzi amafunsidwa kuti apereke maganizo awo posankha momwe ntchitoyi iziyendera.",
"Anthu onse a m'mudzi, kuphatikiza oyimilira a magulu oponderezedwa, amafunsidwa posankha momwe pulogalamuyo iziyendera."],
p20:["F1. Pulogalamuyi imapanga ubale wabwino pakati pa magulu  osiyanasiyana  azachuma- olemera ndi osauka; osauka ndi osauka.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siyiganizira za kusiyana kwa kapezedwe ka anthu.",
"Pulogalamuyi imapanga ubale pakati pa osauka ndi osauka.",
"Pulogalamuyi imabweletsa pamodzi  olemera ndi osauka pazokambirana.",
"Pulogalamuyi imabweletsa pamodzi  olemera ndi osauka kugwira ntchito limodzi kuti akwaniritse cholinga chimodzi."],
p21:["F2. Pulogalamuyi imathandizira kupanga  ubale wabwino pakati pa magulu omwewo komanso pa anthu amitundu yosiyanasiyana, magulu, zipembedzo, ndi zina zotero.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siyiganizira za kusiyana kwa mitundu ya anthu / mafuko / zipembedzo.",
"Pulogalamuyi imamanga ubale pakati pa anthu a mtundu umodzi / fuko / chipembedzo chimodzi kuti agwire ntchito limodzi kuti asinthe zinthu.",
"Pulogalamuyi imaphatikiza anthu ochokera m'mitundu / mafuko / zipembedzo zosiyanasiyana pazokambirana.",
"Pulogalamuyi imamanga ubale pakati pa anthu ochokera m'mitundu / mafuko / zipembedzo zosiyanasiyana kuti agwire ntchito limodzi kuti asinthe zinthu."],
p22:["F3. Pulogalamuyi imapanga ubale wabwino pakati pa anthu osiyanasiyana malinga ndi chilengedwe - amayi ndi amayi komanso, pakati pa amuna ndi akazi.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siyimagwira ntchito ndi azimayi.",
"Pulogalamuyi imapanga maubale pakati pa amayi a gulu limodzi.",
"Pulogalamuyi imapanga ubale pakati pa magulu onse a amayi NDI pakati pa amayi ndi abambo.",
"Pulogalamuyi imapanga maubwenzi pakati pa magulu onse a amayi NDI pakati pa amayi ndi abambo NDIPONSO(poyenera kutero) pakati pa amayi ndi magulu omwe ali ndi zikhulupiriro zosiyana pankhani yowona mene munthu aliri."],
p23:["F4. Pulogalamuyi imalumikiza madera kapena atsogoleri awo ndi akumidzi ina ndi atsogoleri awo m'maboma, zigawo, kapena maiko.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi siimapanga njira zolumikizirana  m'mudzi.",
"Pulogalamuyi imapanga njira zolumikizilana pakati pa madera/atsogoleri ochokera  m'boma lomwelo.",
"Pulogalamuyi imapanga njira zolumikizilana pakati pa madera / atsogoleri a m'madera m'boma lonse / boma / chigawo / dziko.",
"Pulogalamuyi imapanga mgwirizano pakati pa madera mdziko lonse/magawo/mudziko kuti zinthu zizitha kuchitikira limodzi."],
p24:["G1. Magulu a m'mudzi a pulogalamuyi amagwira ntchito limodzi ndi maboma aang'ono ndi  othandizila ake.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Pulogalamuyi kapena magulu ake a m'deralo ndi mabungwe a maboma aang'ono  omwe alipo ndi othandizira ake amapereka mauthenga otsutsana.",
"Pulogalamuyi kapena magulu ake a m'mudzi ndi maboma ang'ono siamagwira ntchito limodzi  ndipang'ono pomwe(ngakhale kuti onse amayesetsa kukwaniritsa zolinga zofanana).",
"Pulogalamuyi kapena magulu ake a m'mudzi ndi mabungwe a maboma ang'ono ofunikira omwe alipo kale  ndi othandizira ake amagwirira ntchito limodzi nthawi zina pazinthu zina.",
"Pulogalamuyi ndi magulu ake a m'mudzi ndi mabungwe a maboma ang'ono/othandizira ake kawiri-kawiri  amagwirira ntchito limodzi ndikuthandizana."],
p25:["H1. Anthu a m'mudzi amayang'anira zochitika zikulu-zikulu  ndi momwe pulogalamuyo ikuyendera.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Palibe kuyanag'anira  koti anthu a m'mudzi amatenga nawo mbali.",
"Kuyang'aniridwa ndi anthu a m'mudzi  kumachitika nthawi zina.",
"Kuyang'aniridwa ndi anthu a m'mudzi kumachitika pafupipafupi, koma kumayendetsedwa ndi pulogalamu kapena ogwira ntchito ake.",
"Kuyang'anira dera kumachitika pafupipafupi ndipo kumayendetsedwa ndi anthu a m'mudzi kapena mabungwe."],
p26:["H2. Kuunika kotengapo mbali  kumachitika.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Palibe kuunika kochitika ndi anthu a m'mdera.",
"Anthu a m'mudzi amatenga nawo mbali mu CHIMODZI kapena ZIWIRI  mwa zochitika izi: 1) Kukonzekera; 2) Kutolera uthenga; 3) Kusanthula; 4) Kutsimikizika; 5) Matherondi Malangizo ake; 6) Kukonzekera zochita.",
"Anthu ammudzi akutenga nawo mbali muzochita zambiri (ZITATU kapena ZINAYI) mwa izi: 1) Kukonzekera; 2) Kusonkhanitsa uthenga; 3) Kusanthula; 4) Kutsimikizika; 5) Mathero ndi Malangizo; 6) Kukonzekera zochita.",
"Anthu a m'mudzi ndi ofunika kwambiri pazochitika ZONSE: 1) Kukonzekera; 2) Kusonkhanitsa mauthenga; 3) Kusanthula; 4) Kutsimikizika; 5) Mapeto ndi Malangizo; 6) Kukonzekera zochita."],
p27:["H3. Ntchito zokhudza kuyang'anira ndi kuwunika  zimayang'ana momwe pulogalamuyi imagwirira ntchito ndi kupindulitsa magulu osiyanasiyana a anthu kuphatikizapo amayi, anthu a ulumali, okalamba, anthu otsalidwa, obwera kudzagwira ntchito mderalo.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Anthu a m'mudzi siamadziwa chifukwa satenga nawo mbali pantchito yoyang'anira ndi kuwunika (M&E) KAPENA anthu a m'mudzi amatenga nawo mbali koma machitidwe a M&E saganizira magulu osiyanasiyana a anthu pomwe akusonkhanitsa kapena kusanthula zomwe zalembedwazo.",
"Kuyang'anira ndi kuunika kumasonkhanitsa ndi kusanthula zolembedwa ndi cholinga  chomvetsetsa   momwe pulogalamuyi imagwirira ntchito ndi kupindulira  magulu ena a m'mudzi (monga amuna ndi akazi, koma osati anthu a ulumala).",
"Kuyang'anira ndi kuwunika kumasonkhanitsa ndikusanthula zambiri kuti amvetsetse momwe pulogalamuyi imagwirira ntchito ndi kupindulitsa magulu ambiri a m'mudzi.",
"Kuyang'anira ndi kuunika kumasonkhanitsa ndikusanthula zinthu ndi cholinga chomvetsetsa m'mene  pulogalamuyo imagwirira ntchito ndi kupindulitsa magulu onse osiyanasiyana a anthu."],
p28:["I1. Otsogolera amasankha nthawi, malo, ndi malo amisonkhano kuti aliyense athe kutenga nawo mbali.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Otsogolera amasankha nthawi, malo, ndi makonzedwe amisonkhanoyo potengera zomwe iwowo akufuna kapena maganizo a anthu ochepa chabe mudera.",
"Otsogolera amapanga chimodzi mwa izi: Kukonza misonkhano pa nthawi , malo, kapena malo omwe amalola anthu onse kutenga nawo mbali ndikulankhula momasuka.",
"Otsogolera amafikira  osachepera ziwiri mwa izi: kukonza misonkhano, malo, ndi makonzedwe azinthu omwe amalola anthu onse kutenga nawo mbali ndikulankhula momasuka.",
"Otsogolera amapanga zinthu zitatu izi: kukonza misonkhano, malo, ndi malo amene amalola anthu onse kutenga nawo mbali ndi kulankhula momasuka."],
p29:["I2. Otsogolera polojekiti ndi awulemu ndipo amalimbikitsa kukambirana.",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Otsogolera amaphunzitsa ndi kuwuza anthu zoyenera kuchita, siamvera za anthu, ndipo ndi opanda ulemu.",
"Otsogolera amamvetsera anthu ndi kuchitira ulemu anthu.",
"Otsogolera amamvetsera maganizo awo, kuchitira anthu ulemu, ndi kulimbikitsa anthu onse kuti azilankhula.",
"Otsogolera amamvetsera, kuchitira ulemu anthu, ndi kulimbikitsa anthu kuti azilankhulana."],
p30:["I3. Tikachoka kumisonkhano ndi otsogolera, timamva kuti:",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Kunali kutaya nthawi chabe; timangopezekako chifukwa tiyenera kutero.",
"Tikumva malingaliro atsopano koma sitikudziwa choti tichite nawo.",
"Timamva malingaliro atsopano ndipo otsogolera amatiuza momwe tingawagwilitsile ntchito",
"Timamva malingaliro ndi  maphunziro atsopano ndipo pamodzi timasankha momwe tingawagwilitsile ntchito."],
p31:["I4. (Kwa otsogolera okha) Timamva kuthandizidwa (kulandira maphunziro nthawi zonse, kumvetsetsa zomwe tikuchita ndi chifukwa chake, kukhala bajeti yotheka kusintha) ndi bungwe lokhazikitsa ntchito / bungwe la boma kuti tigwire ntchito yathu",
"Sindikudziwa/ uthengawu ndi osakwanira,",
"Bungwe lokhazikitsa ntchito / bungwe la boma silichita khama kuthandizira ntchito yathu,",
"Timalandira chithandizo m’mbali ziwiri mwa izi a) timalandira maphunziro nthawi zonse (osati kamodzi kokha) m’chinenero chathu, b) timadziwa zimene tikuchita komanso chifukwa chomwe zili zofunika, c) timatha kusintha chiwerengero cha misonkhano imene timatsogolera komanso misonkhano ndi nthawi yawo kuti igwirizane ndi mene zinthu ziliri mudera, d) timapatsidwa malo ochitira misonkhano ndi zipangizo zonse zoyendetsera misonkhano ndi bungwe lomwe likugwira ntchito, e) mulingo wa ntchito yathu ndi wabwino (sitimayenela kufikira midzi yambiri kapena mtunda wautali kwambiri kapena kuchita misonkhano yambiri) ,",
"Timalandira chithandizo m’magawo atatu awa a) timalandira maphunziro nthawi zonse (osati nthawi imodzi) m’chinenero chathu, b) timadziwa zimene tikuchita komanso chifukwa chake zili zofunika, c) tingathe kusintha chiwerengero cha misonkhano imene timayang’anira ndi  nthawi kuti igwirizane ndi zinthu zimayendera m'dera, d) timapatsidwa malo ochitira misonkhano ndi zipangizo zonse zoyendetsera misonkhano ndi bungwe lomwe likugwira ntchito, e) ntchito yathu ndi yokwanira (sitimayenela kuti tifike kumidzi yambiri kapena mtunda wautali kwambiri kapena kuchita misonkhano yambiri) ,",
"Timalandira thandizo m'mbali ZONSE za madera awa) timalandira maphunziro pafupipafupi (osati nthawi imodzi) m'chilankhulo chathu, b) timadziwa zomwe tikuchita komanso chifukwa chake zili zofunika, c) titha kusintha kuchuluka kwa misonkhano yomwe timatsogolera komanso nthawi kuti igwirizane ndi zosowa za m’deralo, d) timapatsidwa malo ochitira misonkhano ndi zipangizo zonse zoyendetsera misonkhano ndi bungwe lomwe likugwira ntchito, e) ntchito yathu ndi yokwanira (sitimayenela kuti tifike kumidzi yambiri kapena mtunda wautali kwambiri kapena kuchita misonkhano yambiri)"]
}
