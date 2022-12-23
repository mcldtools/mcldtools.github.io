Const basics= {
    figure1:"Takwimu ",
    figure2:" ya 5. Bofya vishale kwa matokeo zaidi.”
    h1:"Taarifa msingi ya programu",
    program:"Jina la Programu",
    organization:"Jina la Shirika",
    orgtype:"Aina la Shirika:”
    Country:"Nchi ya kupanga programu",
    region:"Mikoa/Kanda (ikiwa inatumika)",
    name:"Majina ya anayekamilisha tathmini",
    date:"Tarehe iliyokamilika",
    stage:"Awamu",
    save:"Hifadhi Data",
    sendmail:"Tuma Data kwa barua pepe",
    comment:"Maoni"
}
const stages=['jaribio','kipya','kati-muhula','komavu','kamilifu'];
const orgtypes= ["Mshirika wa Serikali","Shirika lisilo la faida/ asasi ya kiraia"];

Const clickto="Bofya kuhifadhi maoni";
const comment="Maoni";

Const dimensions= [
"A: Ushiriki, Ujumuishi, na Sauti",
"B: Raslimali za mitaa na Maarifa",
"C: Uendelevu",
"D: Taratibu za Uajibikaji.”
"E: Mwitikio kwa mienendo maalum ya muktadha",
"F: Ushirikiano ndani na miongoni mwa jamii",
"G: Kufanya kazi na asasi za kiraia/serikali za mitaa",
"H. Taratibu za ufuatiliaji na tathmini zinasaidia CLD",
"I. Uwezeshaji wa uwekezaji na uzito"];

Const rubric= {
p2:["A1. Programu ya CLD unahakikisha ushiriki wa vikundi vilivyo tengwa.”
"Hakuna/Habari haitoshi kutoa maamuzi.”
"Sababu zinazowezekana za kutengwa (jinsia, ukabila, umri, hali ya kiuchumi) hazichambuliwi.",
"Watekelezaji wamebainisha mambo yanayoweza kusababisha kutengwa na kujumuisha maoni ya wanajamii hawa. “
"Watekelezaji uimarisha sauti ya pamoja katika jamii ya wale wanaoweza kutengwa na kujenga mshikamano wa jamii.   Kumbuka: kuwa na sauti na kusikilizwa lakini sio kutoa uamuzi ",
"Wale walio katika hatari ya kutengwa ni wahusika wakuu katika kufanya maamuzi katika programu. Kumbuka: kuwa na sauti, kusikizwa na kutoa uamuzi"],
p3:["A2. Wanajamii huamua kuzingatia mpango wa CLD KABLA ya muundo halisi wa programu.",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Wanajamii hawakuhusika katika mchakato wa tathmini.”
"Wanajamii walishiriki kikamilifu katika mchakato wa tathmini na walihusika katika mojawapo ya yafuatayo: (1) kubuni mchakato (2) kukusanya data; (3) kuchambua data; (4) kuunda hitimisho.”
“Wanajamii walishiriki kikamilifu katika mchakato wa tathmini na walihusika katika mawili au matatu ya yafuatayo: (1) kubuni mchakato (2) kukusanya data; (3) kuchambua data; (4) kuunda hitimisho.”
" Wanajamii walihusika katika yote yafuatayo: (1) kubuni mchakato (2) kukusanya data; (3) kuchambua data; (4) kuunda hitimisho."],
p4: ["A3. Wanajamii wanashiriki kikamilifu katika muundo wa programu ya CLD",
“Hakuna/Habari haitoshi kutoa maamuzi.",
"Wanajamii hawakuhusika katika mchakato wa kubuni.",
"Msingi muundo wa programu unatokana na wachache waliochaguliwa (mfano. Viongozi au wawakilishi lakini hakuna ushiriki wa wanajamii wengi).”
"Msingi wa muundo wa programu unatokana na michakato mingi ya ushirikishwaji wa jamii lakini bila kuzingatia nguvi/jinsia, mgawanyo wa raslimali ndani ya jamii, viwango tofauti ya umaskini, na kadhalika. Mawazo haya hutumika kuunda dira na mipango ya utekelezaji",
p5:[
"A4. Wanajamii wana jukumu kubwa katika utekelezaji wa programu ya CLD (ikiwemo marekebisho)",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Wanajamii hawakushirikishwa katika mchakato wa utekelezaji.”
"Wanajamii waliochaguliwa (mfano. Viongozi au wawakilishi) wanafahamishwa juu ya utendaji wa programu na maamuzi kuhusu utekelezaji na marekebisho.”
"Wanajamii na viongozi wa mitaa wanafahamishwa kuhusu utendaji wa programu na wanaweza kuathiri ufanyaji maamuzi kuhusu shughuli na urekebishaji wa programu.”
"Wanajamii (ikiwemo walioko katika hatari ya kutengwa) na viongozi wa mitaa huendesha maamuzi juu ya shughuli zinazoendelea za programu, mapitio ya utendaji na mahitaji yoyote ya marekebisho kwenye programu."],
p6: [
"A5. Kasi ya mpango wa programu ya CLD inabainishwa na jamii na wafadhili panapofaa ",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Kasi ya programu inadhamiriwa Na shirika/mfadhili anayetekeleza bila mashauriano na jamii au usambazaji habari.”
"Kasi ya programu imedhamiriwa na shirika/mfadhili anayetekeleza. Jamii inaarifiwa juu ya kasi ya programu, na maoni ya jamii yanapatikana (lakini hayashughulikiwi).”
"Kasi ya programu imedhamiriwa na shirika/mfadhili anayetekeleza kwa ushirikiano/ushauriano na wanajamii.”
"Kasi ya programu imedhamiriwa na wanajamii wakiwemo wawakilishi wa makundi yaliyotengwa. Inatambua kasi tofauti inayopendelewa na makundi mbalimbali katika jamii"],
p7: [
"A6. Programu ya CLD kwa utaratibu hujenga sauti na imani ya wanajamii, hasa walio kwenye hatari ya kutengwa, kueleza mawazo yao na kubadilishana uzoefu, na kadhalika.”
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu haifanyi jitihada za kujenga sauti na kujiamini “,
"Programu inaweza jenga sauti na kujiamini miongoni mwa wanajamii/viongozi wa mitaa lakini haina njia ya utaratibu wa kufanya hivyo.”
"Programu hii inanuia kujenga sauti na imani miongoni mwa wanajamii/viongozi wa eneo kupitia uwezeshaji na ushauri.”
"Programu hii inanuia kujenga sauti na imani ya viongozi wa mitaa na wanajamii, ikiwa ni pamoja na wale walio katika hatari ya kutengwa (inawawezesha kujifunza, kujizoeza kueleza, kuwasilisha mawazo miongoni mwa vitu vingine)"],
p8: [
"A7. Programu ya CLD huongeza ufahamu na kujenga stadi za utetezi miongoni mwa miundo ya mitaa, viongozi na wanajamii kushinikiza haki zao za kijamii, kiuchumi na kisiasa",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu haileti ufahamu wa haki za watu za kijamii, kiuchumi na kisiasa. Wala haijengi ujuzi wa utetezi.”
"Programu hii inakuza ufahamu wa haki za watu za kijamii, kiuchumi na kisiasa lakini haijengi ujuzi wa utetezi.”
"Programu hii huongeza ufahamu wa haki za watu za kijamii, kiuchumi na kisiasa na kujenga ujuzi wa utetezi na stadi za harakati za kijamii."],
p9: [
"B1. Programu ya CLD inakuza raslimali na maarifa za mitaa",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu haizangatii raslimali na maarifa za mitaani.”
"Programu inafahamu raslimali za mitaa, lakini ujuzi hupitishwa na wafanyakazi walio kwenye mstari wa mbele.”
"Programu hii hukuza raslimali za mitaani na huzingatia ujuzi mtaani.”
"Programu hutumia na kusheherekea raslimali na maarifa za mitaani. *sherehekea inarejelea kutambua thamani ya maarifa ya mitaa na kuyafuatilia."],
p10: [
"B2 Jamii inachangia raslimali zao (k.m. muda, pesa, taslimu, ardhi, nyenzo, n.k.)",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Jamii haichangii utekelezaji wa programu kwa pesa, taslimu, kwa aina au kazi.",
"Wanajamii huchangia muda/kazi au raslimali (ardhi, fedha, nyenzo), lakini ni kwa kulazimishwa.”
“Wanajamii huchangia muda/kazi au raslimali (ardhi, fedha, nyenzo), wakiombwa lakini sio kwa kujitolea.”
"Wanajamii huamua kile kinachohitajika, kwa hiari kutambua raslimali za ziada zinazoweza changia matokeo (muda/kazi, ardhi, fedha, taslimu, nyenzo) kwa kujitolea."],
p11: [
"C1. Jamii ni muhimu katika kuendeleza mikakati ya kujiondoa katika programu ya CLD",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mkakati wa kijitoa.”
"Mkakati wa kujitoa unaundwa na shirika tekelezi pasi kushauriana na viongozi wa jamii au wanajamii.”
"Mkakati wa kujitoa umeundwa kwa kushauriana na viongozi wa jamii na wanajamii.”
"Mkakati wa kujitoa unamilikiwa na viongozi wa eneo na wanjamii."],
g11: [
"C1 Jamii ni muhimu katika kuunda mikakati ya mwendelezo wa programu ya CLD",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mkakati wa kuendelea.”
"Mkakati wa kuendelea huundwa na viongozi wa serikali ya ndani bila kushauriana na viongozi wa jamii, asasi za kiraia na wanajamii.”
"Mkakati wa kuendelea umeundwa kwa kushauriana na viongozi wa mitaa, asasi za kiraia na wanajamii.”
"Mkakati wa kuendelea unamilikiwa na wanajamii na viongozi wa mitaa."],
p12: [
"C2. Mpango wa kujitoa Kwa kuwajibika umefumwa katika programu nzima ya CLD [awamu zote za mzunguko wa maisha]",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mikakati ya kutoka.”
"Mikakati ya kutoka imeundwa mwisho wa programu (karibu sana na mwisho au mwisho).”
"Mkakati wa kutoka hupangwa wakati wa kubuni na kuangaliwa upya mwishoni mwa programu (karibu sana na tamati au tamati).”
"Maandalizi ya mkakati wa kutoka huanza katika usanifu, inarekebishwa mara kwa mara katika utekelezaji na kukamilishwa mwishoni mwa programu."],
g12: [
"C2 Kupangwa kwa mwendelezo umefumwa katika programu yote ya CLD",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mkakati wa kuendelea.”
"Mkakati wa mwendelezo umewekwa mwisho wa programu au kuelekea mwisho wa muhula wa serikali.”
"Mkakati wa mwendelezo hupangwa wakati wa kubuni na kurejelewa mwishoni mwa programu au kuelekea mwisho wa muhula (karibu sana na tamati au tamati).”
"Upangaji mwendelezo huanzishwa wakati wa usanifu, unarekebishwa mara kwa mara wakati wa utekelezaji na kukamilishwa mwishoni mwa programu au karibu na mwisho wa muhula."],
p13: [
"C3. Mkakati wa kuondoka katika programu ya CLD zinaelezea mbinu zilizoachwa ili kuhakikisha uendelevu na/au uthabiti",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mikakati ya kutoka.”
"Kuna mikakati ya kutoka lakini haiashiri uendelevu au taratibu za ustahimilivu.”
"Kuna mpango wa kimantiki unaoelezea taratibu na athari inayotarajiwa na itaendelea baada ya uingiliaji kati kukamilika.”
"Kuna mpango wa kimantiki unaoelezea taratibu ambazo athari zilizodhamiriwa na wanajamii utaendelezwa baada ya uingiliaji kati kukamilika. Hii inajumuisha tathmini ya uwezo/raslimali zinazohitajika na watendaji wa mtaa."],
g13: [
"C3 Mkakati wa uendelezo wa programu unaelezea taratibu uliowekwa ili kuhakikisha uendelevu na uthabiti",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mikakati ya kuendelea.”
"Kuna mkakati wa kuendelea lakini haiashiriwi kwenye taratibu za uendelevu na ustahimili.”
"Kuna mpango wa kimantiki unaoelezea taratibu ambazo athari inayotarajiwa itaendelezwa baada ya programu kumalizika au serikali kubadilika.”
"Kuna mpango wa kimantiki unaoelezea taratibu ambazo athari zitakazoamuliwa na wanajamii zitaendelezwa baada ya uingiliaji kati kumalizika. Hii inajumuisha tathmini ya uwezo/raslimali zinazohitajika na watendaji wa mtaa."],
p14: [
"C4. Athari za programu ya CLD hupimwa baada ya kufungwa na washiriki wa mtaa",
"Haitumiki",
"Athari ya programu haipangwi au kupimwa miaka 2+ baada ya tamati.”
"Athari ya programu hupimwa (au hupanga kupimwa) miaka 2+ baada ya tamati. Watendaji wa jamii wanafahamishwa kuhusu zoezi hilo na kutoa taarifa kama walivyoombwa.”
"Athari ya programu hupimwa miaka 2+ baada ya tamati. Watendaji wa jamii wanafahamishwa kuhusu zoezi hilo na kutoa taarifa kama walivyoombwa.”
“Athari ya programu hupimwa miaka 2+ baada ya tamati. Watendaji wa jamii ni washiriki hai katika hatua zote za tathmini ya baada ya programu (kubuni ripoti ya mpango wa kazi)."],
g14:[
"C4 Upimaji wa athari za programu ya CLD huwekwa kitaasisi na huendelea baada ya mabadiliko katika serikali.”
"Haitumiki",
"Athari za programu hazipangwi au kipimwa baada ya tamati/ mabadilko ya serikali.”
"Athari ya programu hupimwa (au hupanga kupimwa ) miaka 2+ baada ya tamati/mabadiliko ya serikali. Watendaji wa jamii wanafahamishwa kuhusu zoezi hilo na kutoa taarifa kama walivyoombwa.”
“Athari ya programu hupimwa miaka 2+ baada ya tamati/mabadiliko ya serikali. Watendaji wa jamii hufahamishwa kuhusu zoezi hilo na kutoa taarifa kama walivyoombwa.”
“Athari ya programu hupimwa miaka 2+ baada ya tamati/mabadiliko ya serikali. Watendaji wa jamii ni washiriki hai katika hatua zote za tathmini ya baada ya programu (kubuni ripoti ya mpango wa kazi)"],
p15: [
"C5. Wanajamii (wakiwemo waliotengwa zaidi) bado wananufaika kutokana na programu ya CLD",
"Haitumiki",
"Programu haijawacha athari inayoweza kufuatiliwa (chanya, hasi, wastani).”
"Ushahidi mdogo wa athari endelevu ni dhahiri. Hakuna au mabadiliko kidogo imefanyika.”
"Mchanganyiko za athari hasa chanya. Wanajamii na/au miundo wamejizoeza urekebishaji na ujuzi uliopatikana kutoka kwa programu ya CLD.",
"Ushahidi mzuri zaidi. Wanajamii na/au miundo mara kwa mara wanatumia mbinu na ujuzi unaopatikana kutoka kwa programu ya CLD."],
g15: [
"C5. Wanajamii (wakiwemo waliotengwa zaidi) bado wananufaika kutokana na programu ya CLD",
"Haitumiki",
"Programu haijawacha athari inayoweza kufuatiliwa (chanya, hasi, wastani).”
"Ushahidi mdogo wa athari endelevu ni dhahiri. Hakuna au mabadiliko kidogo imefanyika.”
"Mchanganyiko za athari hasa chanya. Wanajamii na/au miundo wamejizoeza urekebishaji na ujuzi uliopatikana kutoka kwa programu ya CLD.",
"Ushahidi mzuri zaidi. Wanajamii na/au miundo mara kwa mara wametumia mbinu na ujuzi unaopatikana kutoka kwa programu ya CLD."],

p16: [
"D1 Programu hii inakuza ushirikiano na uwajibikaji wa kweli kwa pande zote",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna taratibu za uajibikaji zinazohusisha jamii.”
"Mbinu za uajibikaji zipo, kutoka kwa jamii hadi mashirika tekelezi au kutoka kwa mashirika tekelezi hadi kwa jamii.”
"Njia mbili za uajibikaji zipo kati ya jamii na mashirika tekelezi.”
"Mbinu za uajibikaji hazifanyiki tu kati ya jamii na shirika tekelezi, bali kati ya jamii wenyewe na/au viongozi wa mtaa (vikundi au baraza iliyochaguliwa)."],
p17: [
"D2. Programu ya CLD hutoa utaratibu wa kutoa maoni kwa jamii katika awamu yote ya mradi, ikijumuisha kupitia zoezi la ufuatiliaji na tathmini",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mifumo ya maoni.”
"Maoni kwa jamii yanawachwa kwa wawezeshaji bila mbinu ya utaratibu.",
"Maoni kwa jamii hutolewa tu wakati masuala muhimu yanapotokea.",
"Kulingana na data ya ufuatiliaji na tathmini, mazoezi ya ujifunzaji mwingiliano yaliyogatuliwa hutumika kutoa mrejesho Kwa jamii kwa utaratibu na kuwasaidia kupanga mipango ya kushughulikia masuala muhimu."],
p18: [
"E1. Programu ya CLD ni sikivu kwa utofauti nyingi za mienendo na nguvu (k.m. jinsia, hali ya kiuchumi, kabila n.k.)",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu hautathmini au kuzingatia tofauti za mienendo na nguvu katika jamii.”
"Tathmini za muundo wa programu zinaonyesha tofauti na mienendo, lakini hakuna mkakati wa kuzingatia tofauti hizi.”
"Uchanganuzi wa jamii unaangazia tofauti za muktadha katika mahusiano ya mamlaka, lakini si programu wala wawezaji walio na vifaa vya kuzishughulikia.”
"Programu hii ni sikivu kwa tofauti za mamlaka na mienendo ndani na katika jamii na wawezeshaji wameandaliwa kuzishughulikia."],
p19: [
"E2. Programu ya CLD ni sikivu kwa mahitaji na miktadha ya jamii",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu haiwezi kujibu mahitaji ya kimiktadha ya jamii (programu inazingatia mbinu ya mchoro).”
"Programu haiwezi kukabiliana na mabadiliko na mahitaji ya miktadha ya jamii, lakini shirika tekelezi linatafuta afua zingine kushughulikia haya.”
"Programu hiyo inaweza kukabiliana na kiasi fulani, lakini imefungamanishwa katika sifa za kubuni.”
"Programu hii ni ya kurudiwa-rudiwa na inaweza kuzoea mizozo, mafanikio au mabadiliko katika mahitaji na miktadha ya jamii.  (K.m mafuriko, ukame, njaa ya msimu, kuwasili kwa teknolojia mpya, mabadiliko ya mifumo ya kisiasa n.k)"],
p20: [
"F1. Programu ya CLD hujenga uhusiano shirikishi katika jamii [hupimwa kama kiashirio au kuelezwa kama mchakato]",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu hiyo haikusudii kujenga uhusiano wa ushirikiano.”
"Programu hii hujenga mahusiano ya ushirikiano ya usawa (k.m. maskini na maskini; kike na kike; n.k.) kwenye jamii.”
"Programu hii hujenga uhusiano wa ushirikiano wa usawa na wima (tajiri na maskini, tabaka na tabaka, mke na mme) kwenye jamii.",
"Programu huunda uhusiano wa ushirikiano 1. Kwa usawa (kijamii na kiuchumi, kijinsia, dini); 2.  wima (kijamii na kiuchumi, tabaka); 3. Katika jamii."],
p21: [
"F2 Programu ya CLD inaunganisha miundo ya mitaa au viongozi na mashirikisho ya mitaa au harakati pana za kijamii",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Programu hii haiunganishi miundo ya jamii ya mitaa au viongozi na mashirikisho au harakati zozote.”
"Programu hii inaunganisha miundo ya jamii za mitaa au viongozi na mashirikisho ya mitaa.”
"Programu hii inaunganisha miundo ya jamii za mitaa au viongozi na mashirikisho ya mitaa na ya kikanda.”
"Programu hii inaunganisha miundo ya jamii za mitaa au viongozi na mashirikisho ya mitaa na ya kikanda na harakati za kijamii za kitaifa.”
p22: [
"G1 Miundo ya jamii ya mitaa ya programu ya CLD au viongozi wameunganishwa na serikali ya kitongoji au wilaya",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Serikali ya kitongoji au wilaya haifahamu programu hii.”
"Serikali ya kitongoji au wilaya inafahamu programu hii, lakini hakuna jukwaa/nafasi ya mwingiliano kati ya miundo shirikishi ya jamii au viongozi na maafisa wa wilaya au wilaya.”
“Serikali ya kitongoji au wilaya inafahamu programu hii, na kuna mwingiliano wa dharura kati ya miundo shirikishi ya jamii au viongozi na maafisa wa wilaya au wilaya. Programu inaimarisha uwezo wa jamii kudai haki/stahiki zake kutoka kwa serikali ya kitongoji au wilaya. ",
"Serikali ya wilaya au wilaya inafahamu kuhusu programu ya CLD. Programu ya CLD huanzisha ushirikiano wa kimfumo kati ya jamii na serikali ya kitongoji au wilaya ili kufikia malengo ya jamii"],
g22: [
    "G1 Programu ya CLD imeunganishwa na asasi za kiraia.”
“Hakuna/Habari haitoshi kutoa maamuzi.”
    "Asasi za kiraia za mitaa hazifahamu programu hii.”
    "Asasi za kiraia za mitaa zinafahamu programu hii, lakini hakuna jukwaa/nafasi ya mwingiliano kati ya miundo shirikishi ya jamii au viongozi, asasi za kiraia, maafisa wa wilaya au wilaya.”
    "Asasi za kiraia zinafahamu programu hii, na kuna mwingiliano wa dharura kati ya miundo shirikishi ya jamii, asasi za kiraia, maafisa wa wilaya au wilaya.”
    "Asasi za kiraia zinafahamu programu ya CLD. Programu ya CLD huanzisha ushirikiano wa kimfumo kati ya azaki za mitaa, miundo ya jamii na serikali ya kitongoji au wilaya ili kufikia malengo ya jamii."],
p23: [
"H1 Ufuatiliaji shirikishi unafanywa",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna ufuatiliaji shirikishi ya jamii.”
"Ufuatiliaji wa jamii hutokea lakini mara nyingi unawezeshwa na wafanyakazi wa mstari wa mbele.”
"Ufuatiliaji wa jamii hutokea na mara nyingi huwezeshwa na wanajamii. Maoni kwa jamii pana hata hivyo [kupitia vikao shirikiskishi] ni ya dharura.”
"Ufuatiliaji shirikikishi wa jamii ni msingi kwa mbinu ya ufuatiliaji na tathmini kwenye programu. Ufuatiliaji wa jamii unawezeshwa na wanajamii au miundo na inajumuisha kutoa taarifa kwa jamii kubwa mara kwa mara k.m kila baada ya miezi sita."],
p24: [
"H2 Tathmini shirikishi inafanywa",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna tathmini shirikishi ya jamii.”
"Wanajamii wanahusika katika hatua MOJA au MBILI ya hatua hizi za tathmini: 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji.”
"Wanajamii wanahusishwa katika hatua mingi (TATU au NNE) za tathmini: 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji.”
"Wanajamii ni muhimu katika hatua zote za 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji."],
p25: [
"H3 Matokeo ya ufuatiliaji na tathmini yamegawanywa kulingana na jinsia, ulemavu na tofauti zingine muhimu za kijamii na kufanyiwa kazi",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna mgawanyiko wa matokeo na tofauti za kijamii.”
"Matokeo yamegawanywa, lakini idadi ya tofauti za kijamii zinazohusiana na uingiliaji kati hazipo. Kuna maelezo machache ya kufafanua kwanini matokeo ni tofauti kwa vikundi tofauti.”
"Matokeo yamegawanywa kulingana na tofauti zote za kijamii zinazohusiana na uingiliaji kati. Kuna baadhi ya maelezo kwanini matokeo ni tofauti kwa vikundi tofauti na hiyo inamaanisha nini katika programu.”
"Matokeo yamegawanywa kulingana na tofauti zote za kijamii zinazohusiana na uingiliaji kati. Kuna baadhi ya maelezo kwanini matokeo ni tofauti kwa vikundi tofauti na hiyo inamaanisha nini katika programu [kutafsiriwa kwa hatua iliyopendekezwa]."],
p26: [
"I1 Wawezeshaji wa programu ya CLD (iwe ni viongozi wa jamii, wafanyakazi au shirika) wamepewa ujuzi na mazoezi kwa ajili ya majukumu yao.”
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Wawezeshaji hupokea mwelekeo wa kimsingi katika mazingira/mipangilio rasmi ya mafunzo k.m darasani.”
"Wawezeshaji hufunzwa katika stadi za msingi za uwezeshaji pamoja na uchambuzi shirikishi na kupangwa katika mazingira rasmi ya mafunzo. K.m darasani",
"Wawezeshaji wanafunzwa katika ujuzi wa uwezeshaji, uchambuzi shirikishi na upangaji darasani na katika jamii.”
" Wawezeshaji wanafunzwa katika ujuzi wa uwezeshaji, uchambuzi shirikishi na kupanga, pamoja na hatua za pamoja darasani na katika jamii."],
p27: [
"I2 Programu ya CLD ina vifungu vinavyofaa ili kuhakikisha unyumbufu wa kukabiliana na mabadiliko ya mahitaji ya wawezeshaji wa jamii (k.m ukubwa wa programu, mabadiliko ya muktadha au kasi ya CLD)",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna tathmini ya mabadiliko ya mahitaji ya wawezeshaji wa jumii NA/AU hakuna utoaji wa nyenzo kwa ajili ya kuongeza kiwango cha programu NA/AU hakuna michakato inayotumika ya kupunguza idadi ya wawezeshaji au kasi ya programu.”
"Tathmini za dharura za idadi na uwezo wa wawezeshaji wa jamii kulingana na muktadha, kiwango kilichokusudiwa cha programu na kasi ya programu. Mabadiliko yanafanywa ikiwa utendakazi wa programu umetatizika.",
"Tathmini ya mara kwa mara ya idadi na uwezo wa wawezeshaji wa jamii kuhusiana na muktadha, kiwango kilichokusudiwa cha programu na kasi ya programu.Mabadiliko hufanywa TU ikiwa utendakazi wa programu umetatizika. “
“Tathmini ya mara kwa mara ya idadi na uwezo wa wawezeshaji wa jamii kuhusiana na muktadha, kiwango kilichokusudiwa cha programu na kasi ya programuProgramu ina masharti ya kibajeti na taratibu za kujibu."],
p28:[
"I3 Programu ya CLD ina vifungu muhimu ya kuboresha uwezeshaji mtaani (vigezo wazi vya ulaji; tathmini ya ujuzi na ujuzi; utoaji wa mafunzo na uwezeshaji kwa wawezeshaji wa mitaa)",
“Hakuna/Habari haitoshi kutoa maamuzi.”
"Hakuna kipengele cha kusaidia ubora wa uwezeshaji wa mitaa. Hakuna vigezo wazi vya uandikishaji, hakuna tathmini sahihi ya maarifa na ujuzi inafanywa na hakuna utoaji wa mafunzo na msaada wa wawezeshaji wa mitaa",
"Kuna vipengele vya dharura vya kusaidia uwezeshaji wa mitaa. Programu ina moja ya vipengele hivi ndani yake: 1) Kuna vigezo wazi vya ulaji; 2) tathmini sahihi ya maarifa na ujuzi inafanywa; 3) kuna utoaji mafunzo na msaada kwa wawezeshaji wa mitaa.”
"Kuna nafasi nzuri wa kuunga mkono uwezeshaji wa mitaa. Programu ina vipengele viwili kati ya vipengele vifuatavyo: 1) Kuna vigezo wazi vya ulaji; 2) tathmini sahihi ya maarifa na ujuzi inafanywa; 3) kuna utoaji mafunzo na msaada kwa wawezeshaji wa mitaa.”
"Masharti ya kusaidia uwezeshaji wa mitaa yameunganishwa kikamilifu katika programu. Programu ina vipengele vyote vifuatavyo vilivyojengwa ndani yake1) Kuna vigezo wazi vya ulaji; 2) tathmini sahihi ya maarifa na ujuzi inafanywa; 3) kuna utoaji mafunzo na msaada kwa wawezeshaji wa mitaa."]
}
