const basics={
    figure1:"Takwimu ",
    figure2:" ya 5. Bofya vishale kwa matokeo zaidi.",
    h1:"Taarifa msingi ya programu",
    program:"Jina la Programu",
    organization:"Jina la Shirika",
    orgtype:"Aina la Shirika:",
    country:"Nchi ya kupanga programu",
    region:"Mikoa/Kanda (ikiwa inatumika)",
    name:"Majina ya anayekamilisha tathmini",
    date:"Tarehe iliyokamilika",
    stage:"Awamu",
    save:"Hifadhi Data",
    more:"Kazi Zaidi",
    full:"Ripoti Kamili",
    clear:"Futa Data",
    load:"Pakia data",
    comment:"Maoni"
}
const downbutton="Bofya hapa kupakua faili.";
const sendmail="Ili kutuma kwa barua pepe, ambatisha faili iliyopakuliwa.";
const stages=['jaribio','kipya','kati-muhula','komavu','kamilifu'];
const orgtypes= ["Mshirika wa Serikali","Shirika lisilo la faida/ asasi ya kiraia"];
const clickto="Bofya kuhifadhi maoni";
const comment="Maoni";

const dimensions=[
"A: Ushiriki, Ujumuishi, na Sauti",
"B: Raslimali za mitaa na Maarifa",
"C: Mkakati wa uendelevu na mpito ",
"D: Taratibu za Uajibikaji",
"E: Mwitikio kwa mienendo maalum ya muktadha",
"F: Ushirikiano",
"G: Kufanya kazi na asasi za kiraia/serikali za mitaa",
"H. Mazoea ya ufuatiliaji na tathmini",
"I. Uwezeshaji"];

const rubric={
p2:["A1. Programu ya CLD unahakikisha ushiriki wa watu wote katika jamii(kam vile wazee na wadogo, wanaume na wanawake, waliobora na maskini,kutoka ukoo,tabaka na dini tofauti na wengine wengi.",
"sijui/Habari haitoshi kutoa maamuzi.",
"Programu ya CLD haizingatii makundi tofauti ya watu wanaoiishi kijijini.",
"Programu ya CLD inazingata makundi tofauti yaliotengwa (sio zote) na kuahakikisha ushiriki wao katika mikutano/zoezi ya pamoja.",
"Programu ya CLD inazingatia makundi mengi ya watu na kuhakikisha ushiriki wao katika mikutano/ zoezi ya pamoja.", 
"Programu ya CLD inazingatia makundi yote ya watu, na kuhakikisha ushiriki  hai kwa mikutano/ zoezi ya pamoja."],

p3:["A2. Wanajamii huamua kipaumbele ya programu ya CLD KABLA ya muundo halisi wa programu.",
"Sijui/Habari haitoshi.",
"Wanajamii hawahusishwi katika ushiriki wa uamuzi wa vipaumbele vya programu.",
"Wanajamii wachaguliwa (km. viongozi wa kimila,wamiliki ardhi na wengineo) au makundi huhusishwa kwa kuamua kipaumbele ya programu.",
"Makundi mengi katika jamii huhusika katika uamuzi wa kipaumbele ya programu.",
"Makundi yote katika jamii yanahusika katika uamuzi wa kipaumbele ya programu na wote wako na sauti sawa."],
p4:["A3. Wanajamii wanashiriki kikamilifu katika muundo wa programu ya CLD",
"Sijui/Habari haitoshi kutoa maamuzi.",
"Wanajamii hawakuhusika katika mchakato wa kupanga.",
"Wanajamii wachache waliochaguliwa (mfano. viongozi wa kitamaduni, wamiliki ardhi na wengine) au makundi huhusika katika mchakato wa kupanga.",
"Makundi mengi katika jamii hujihusisha katika mchakato wa kupanga.",
"Makundi yote katika jamii yanahusika katika mchakato wa kupanga na wote wako na sauti sawa."],
p5:["A4. Mashirika ya kijamii yanayowakilisha vikundi vyote na wanajamii wote hutekeleza programu hii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Mashirika yasio ya kiserikali au viongozi wa mitaa hutekeleza programu hii.",
"Mashiririka yasio ya serikali na/au viongozi wa mitaa hutunga kiungo cha kutekeleza programu au kufanya kazi na kiungo kilicho ingawa inaweza kosa kuwa na watu kutoka vikundi.",
"Viungo vilivyo na wanajamii waliojichagua kutoka makundi yote na katika jamii hutekeleza programu.",
"Viuongo vilivyochaguliwa vinavyowakilisha makundi yote na wanajamii hutekeleza programu."],
p6:["A5. Programu hii hujenga sauti na imani ya wawakilishi wa jamii kushawishi/ kutengeneza maamuzi.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haifanyi juhudi yoyote kujenga sauti na imani ya wawakilishi wa jamii.",
"Programu hujenga sauti na imani ya wawakilishi wa jamii lakini sio ya wale wa vikundi vilivyotengwa.",
"Programu hujenga sauti na imani miongoni mwa wawakilishi wengi katika jamii ikiwemo wengine katika makundi yaliotengwa.",
"Programu hujenga sauti na imani ya wawakilishi katika jamii ikiwemo wote katika makundi yaliotengwa."],
p7:["A6. Programu hii huongeza ufahamu wa haki(kijamii, kiuchumi na kisiasa) na hujenga ujuzi miongoni mwa wawakilishi wa mitaa kuomba haki hizo.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haiongezi ufahamu wala kujenga ujuzi wa kuomba haki.",
"Programu huongeza ufahamu wa haki, lakini haijengi ujuzi wa kuomba haki hizo.",
"Programu huongeza ufahamu wa haki, na kujenga ujuzi kwa wachache kuomba haki hizo.",
"Programu huongeza ufahamu wa haki, na kuzingatia kujenga ujuzi wa wawakilishi kutoka makundi yote kuomba haki hizo."],
p8:["B1. Programu ya CLD inakuza raslimali na maarifa za mitaa",
"Sijui/Habari haitoshi kutoa maamuzi.",
"Programu haizangatii raslimali na maarifa za mitaani.",
"Programu inafahamu raslimali za mitaa, lakini ujuzi hupitishwa na wafanyakazi walio kwenye mstari wa mbele.",
"Programu hutumia raslimali za mitaa na inafahamu maarifa ya mtaani.",
"Programu inatumia na kuheshimu raslimali na maarifa ya mtaani."],
p9:["B2 Jamii inachangia raslimali zao (k.m. muda, pesa, taslimu, ardhi, nyenzo, n.k.)",
"Sijui/Habari haitoshi kutoa maamuzi.",
"Jamii haichangii utekelezaji wa programu kwa pesa, taslimu, kwa aina au kazi.",
"Wanajamii huchangia muda/kazi au raslimali (ardhi, fedha, nyenzo), ni kwa lazima.",
"Wanajamii huchangia muda/kazi au raslimali (ardhi, fedha, nyenzo), wakihimizwa.",
"Wanajamii huamua kile kinachohitajika, kwa hiari kutambua raslimali za ziada zinazoweza changia matokeo (muda/kazi, ardhi, fedha, taslimu, nyenzo) kwa kujitolea."],
p10:["C1. Jamii ni muhimu katika kupanga jinsi na wakati programu inapaswa kukamilika na kukabidhiwa kwao.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna mpango wa programu kukamilishwa na kukabidhiwa.",
"Mpango wa kukamilisha na kukabidhi programu hujengwa na shirika tekelezi na viongozi wa jamii au wanajamii kujulishwa.",
"Mpango wa kukamilisha na kukabidhi programu hufanywa kwa mashauriano na viongozi wa mtaa na wanajamii.",
"Mpango wa kukamilisha na kukabidhi programu huongozwa na viongozi wa mtaa na wanajamii."],
p11:["C2. Jamii hufanya kazi na mashirika tekelezi kukagua na kurekebisha programu kila mara kwa upangaji, makabidhiano na mpito wa programu",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna mpango au mkakati wa shirika lako kukabidhi programu kwa jamii",
"Mpango wa kukabidhi programu kwa jamii hufanywa tu wakati programu inafika tamati(au ufadhili umekwisha)",
"Mpango wa kukabidhi programu kwa jamii hufanywa mwanzoni mwa programu na kusahihishwa mwishoni mwa programu au ikiwa kuna kizuizi kikubwa",
"Mpango wa kukabidhi programu kwa jamii hufanywa mwanzoni mwa programu na na kupitiwa mara kwa mara na wanajamii ili kuakisi hali ya kisasa katika jamii"],
p12:["C3. Programu inahakikisha muundo ya jamii (kama mashirika ya jamii aumashirika tekelezi) iko na uwezo wa kuendelea baada ya makabidhiano",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haifanyi jitihada zozote kuhakikisha uwezo wa miundo ya jamii kuendelea kufanya kazi baada ya makabidhiano.",
"Kuna mpango wa makabidhiano ya programu lakini hakuna mkakati wa kuhakikisha kuwa miundo ya jamii inaweza endelea kufanya kazi baada ya makabidhiano na kuwa na uwezo wa kupata fedha/raslimali(inavyohitajika).",
"Kuna mkakati wa kuhakikisha kuwa muundo wa jamii inaweza endelea kufanya kazi baada ya makabidhiano lakini hakuna shughuli za kukuza uwezo wa kupata fedha/raslimali(inavyohitajika).",
"Programu inatekeleza shughuli za kujenga uwezo hili kuhakikisha kuwa miundo ya jamii inaweza kufanya kazi baada ya makabidhiano na kupata fedha/raslimali(inavyohitajika)."],
p13:["C4. Baada ya kukamilika, athari za programu hupimwa kwa ushiriki wa ndani.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna mpango wa kupima athari za programu baada ya kukamilika au jamii haijui kama kuna mpango wowote.",
"Kuna mpango wa kupima athari za programu(au inapimwa) baada ya kukamilika. Wanajamii hujulishwa kuhusu mpango huo na wanapeana habari inavyohitajika.",
"Athari hupimwa(au hupangwa kupimwa) baada ya programu kukamilika na wanajamii hushauriwa kwa shughuli hii.",
"Athari hupimwa(au hupangwa kupimwa) baada ya programu kukamilika na wanajamii ni washiriki hai katika kila awamu ya shughuli hii."],
p14:["C5. Baada ya programu kukabidhiwa kwa wanajamii au serikali ya mitaa, wanajamii kutoka makundi yote(mfano kinamama, vijana, wazee,wenye tabaka ya chini,watu wenye ulemavu na wachache katika jamii ) bado wananufaika na shughuli katika jamii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna anayenufaika baada ya programu kukabidhiwa au ni vikundi vilivyo bahatika pekee vinavyoendelea kubahatika.",
"Programu inaendelea kunufaisha makundi mengine baada ya kukabidhiwa.",
"Programu inaendelea kunufaisha makundi mengi baada ya kukabidhiwa.",
"Programu inaendelea kunufaisha makundi yote baada ya kukabidhiwa."],
p15:["D1. Programu na miundo ya jamii hushiriki taarifa muhimu mfano kile wanachofanya, kwanini,jinsi gani na jinsi fedha zilitumika.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haishiriki habari yoyote na jamii kuhusu kile kinachofanywa, jinsi gani na kwanini.",
"Programu au mashirika ya jamii wakati mwingine hushiriki taarifa za msingi kuhusu programu lakini maelezo mengi hayapatikani.",
"Programu au mashirika ya jamii mara nyingi hushiriki habari kuhusu programu(habari nyingi lakini sio zote zinapatikana).",
"Programu na mashirika ya jamii mara kwa mara hushiriki habari kuhusu fedha, mchakato na shughuli na wanajamii na kuchukua maoni."],
p16:["D2. Programu inashughulikia malalamiko ya jamii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haina njia yoyote ya kupokea malalamishi ya wanajamii.",
"Programu iko na njia ya kupokea malalamishi ya wanajamii lakini haipatikani na haiaminiki.",
"Programu iko na njia inayopatikana na inaaminika kupokea malalamishi ya wanajamii lakini malalamishi hayo hayashughulikiwi.",
"Programu iko na njia inayopatikana na inaaminika kupokea malalamishi ya wanajamii na malalamishi hayo yanashughulikiwa."],
p17:["D3. Matokeo ya ufuatiliaji na tathmini hushirikiwa mara kwa mara na jamii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Matokeo ya ufuatiliaji na tathmini haishirikiwi kamwe na jamii.",
"Matokeo ya ufuatiliaji na tathmini yanaweza shirikiwa na jamii na wahusika wanapojihisi.",
"Matokeo ya ufuatiliaji na tathmini hushirikiwa na jamii wakati tu panapoibuka shida.",
"Matokeo ya ufuatiliaji na tathmini hushirikiwa na jamii mara kwa mara."],
p18:["E1. Programu hii ni sikivu kwa mabadiliko ya mahitaji na muktadha wa jamii .",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haijibu mabadiliko ya mahitaji ya jamii(k.m mafuriko, ukame, njaa ya msimu, kuwasili kwa teknolojia mpya, mabadiliko ya mifumo ya kisiasa nk)",
"Programu iko na uwezo wa kufanya mabadiliko kadhaa.",
"Programu inaweza badilika inavyohitajika kwa mabadiliko ya mahitaji ya jamii ikiwa ni pamoja na yale yanayoletwa na majanga.",
"Programu inaweza badilika inavyohitajika kwa mabadiliko ya mahitaji ya jamii ikiwa ni pamoja na yale yanayoletwa na majanga na huunda mifumo/miundo ya kushughulikia hali zinazofanana katika siku zijazo."],
p19:["E2. Kasi ya programu ya CLD(yaani muda, masafa,na urefu wa ushirikiano na jamii) hudhamiriwa na wanajamii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Jamii haihusishwi kwa kuamua kasi ya programu.",
"Jamii hujulishwa juu ya kasi ya programu.",
"Wanajamii wengine hushauiriwa kuhusu kasi ya ya programu.",
"Wanajamii wote wakiwemo wawakilishi wa wachache, hushauriwa kwa kuamua kasi ya programu."],
p20:["F1. Programu hii inajenga uhusiano mzuri kati ya tajiri na maskini; maskini na maskini.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haizingatii utofauti wa kiuchumi.",
"Programu hujenga uhusiano kati ya maskini na maskini.",
"Programu inashirikisha maskini na tajiri katika mijadala na mazungumzo.",
"Programu inashirikisha maskini na tajiri kufanya kazi pamoja ili kufikia lengo moja."],
p21:["F2. Programu hii hujenga mahusiano chanya ndani ya makundi sawa na kabila tofauti,tabaka, vikundi vya kidini nk.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haizingatii utofauti wa tabaka/kabila/dini.",
"Programu hujenga uhusiano kati ya watu kutoka tabaka/kabila/dini moja ili kufanya kazi kwa pamoja kwa ajili ya mabadiliko ya kijamii.",
"Programu hushirikisha watu kutoka kwa tabaka/kabila/dini tofauti kwa mijadala na mazungumzo.",
"Programu inajenga uhusiano kati ya watu kutoka tabaka/kabila/dini ili kufanya kazi kwa pamoja kwa ajili ya mabadiliko ya kijamii ."],
p22:["F3. Programu inajenga mahusiano mazuri kati ya wanawake na wanawake; wanaume na wanawake.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haifanyi kazi na wanawake.",
"Programu inajenga uhusiano kati ya wanawake wa kikundi kimoja.",
"Programu inajenga mahusiano kati ya wanawake wa makundi yote au kati ya wanawake na wanaume.",
"Programu inajenga mahusiano kati ya makundi yote ya wanawake NA kati ya wanawake na wanaume."],
p23:["F4. Programu hii inaunganisha jamii za mitaa au viongozi wao na vijiji vingine na viongozi wao katika wilaya,mikoa au majimbo.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu haijengi mitandao na uhusiano wa jamii.",
"Programu inajenga uhusiano kati ya jamii/viongozi wa mitaa kutoka wilaya moja.",
"Programu inajenga uhusiano kati ya jamii/viongozi wa mitaa katika wilaya/jimbo/mkoa/nchi.",
"Programu inajenga uhusiano kati ya jamii katika nafasi za jimbo/mkoa/taifa kwa hatua za pamoja."],
p24:["G1. Programu\vikundi vya jamii hufanya kazi pamoja na miundo na serikali za mitaa na watendaji.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Programu au vikundi vyake vya kijamii na miundo na watendaji wa serikali ya mtaa husika wanatoa taarifa/ujumbe kinzani.",
"Programu au vikundi vyake vya kijamii na miundo na watendaji waliopo wa serikali za mitaa hawafanyi kazi pamoja ata kidogo(ata kama wanafanya kazi kwa malengo sawa).",
"Programu au vikundi vyake vya kijamii na miundo na watendaji waliopo wa serikali za mitaa wanafanya kazi pamoja wakati mwingine kwenye baadhi ya maswala.",
"Programu au vikundi vyake vya kijamii na miundo na watendaji waliopo wa serikali za mitaa wanafanya kazi pamoja mara kwa mara na kukamilishana."],
p25:["H1. Wanajamii hufuatilia shughuli muhimu na maendeleo ya programu.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna ufuatiliaji shirikishi wa jamii.",
"Ufuatiliaji wa jamii hutokea wakati mwingine.",
"Ufuatiliaji wa jamii hutokea mara kwa mara, lakini huwezeshwa na wafanyakazi katika mistari ya mbele.",
"Ufuatiliaji wa jamii hutokea mara kwa mara na huwezeshwa na wanajamii au miundo."],
p26:["H2. Tathmini shirikishi hufanywa.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Hakuna tathmini shirikishi ya jamii.",
"Wanajamii wanahusika katika hatua MOJA au MBILI ya hatua hizi za tathmini: 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji.",
"Wanajamii wanahusishwa katika hatua mingi (TATU au NNE) za tathmini: 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji.",
"Wanajamii ni muhimu katika hatua zote za 1) Kupanga; 2) Ukusanyaji wa data; 3) Uchambuzi; 4) Uthibitishaji; 5) Hitimisho na Mapendekezo; 6) Mipango ya utekelezaji."],
p27:["H3. Shughuli za ufuatiliaji na tathmini huangalia jinsi programu inavyofanya kazi na kunufaisha makundi mbalimbali ya watu wakiwemo wanawake, watu wenye ulemavu,wazee na wachache katika jamii.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Wanajamii hawajui kwa sababu hawajahusishwa katika ufuatiliaji na tathminiau wanajamii wamehusishwa lakini mfumo wa ufuatiliaji na tathmini  haizingatii makundi tofauti wakati wa kukusanya na kuchambua habari.",
"Ufuatiliaji na tathmini hukusanya na kuchambua taarifa ili kuelewa jinsi programu inavyofanya kazi na kunufaisha baadhi ya vikundi katika jamii(K.m. wanaume na wanawake na sio walemavu).",
"Ufuatiliaji na tathmini hukusanya na kuchambua taarifa ili kuelewa jinsi programu inavyofanya kazi na kunufaisha makundi mengi katika jamii.",
"Ufuatiliaji na tathmini hukusanya na kuchambua taarifa ili kuelewa jinsi na kwanini programu inafanya kazi na kunufaisha makundi yote tofauti ya watu."],
p28:["I1. Wawezeshaji huamua saa,mahali na mpangilio wa mikutano ili kila mtu aweze kushiriki katika mkutano hiyo.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Wawezeshaji huamua saa,mahali na mpangilio wa mikutano kulingana na urahisi wao wenyewe au wa wachache waliochaguliwa katika jamii.",
"Wawezeshaji hukumbuna na moja kwa yafuatayo: panga mikutano kwa wakati,mahali au mpangilio unaoruhusu watu wote kushiriki na kuzungumza kwa uhuru.",
"Wawezeshaji hukumbana na mbili kwa yafuatayo: panga mikutano kwa wakati,mahali au mpangilio unaoruhusu watu wote kushiriki na kuzungumza kwa uhuru.",
"Wawezeshaji hukumbana na yote yafuatayo: panga mikutano kwa wakati,mahali au mpangilio unaoruhusu watu wote kushiriki na kuzungumza kwa uhuru."],
p29:["I2. Wawezeshaji wa mradi wana heshima na wanahimiza mazungumzo.",
"Sijui/Habari haitoshi kutoa maamuzi",
"Wawezeshaji wanatoa mihadhara, wanaambia watu cha kufanya, hawasikilizi na hawana heshima.",
"Wawezeshaji wanasikia na wako na heshima.",
"Wawezeshaji husikiliza mawazo yao,huwaheshimu na huhimiza washiriki wote kuzungumza.",
"Wawezeshaji husikiliza mawazo yao,huwaheshimu na huhimiza washiriki wote kuzungumza na washiriki wengingine."],
p30:["I3. Baada ya kuhudhuria mikutano na wawezeshaji, tunahisi:",
"Sijui/Habari haitoshi kutoa maamuzi",
"Ilikuwa ni kupoteza muda; tulihudhuria tu kwa sababu ni lazima.",
"Tunasikiza mawazo mapya lakini hatuna uhakika la kufanya nayo.",
"Tunaskia mawazo mapya na wawezeshaji wanatuambia jinsi ya kuzitumia.",
"Tunaskia mawazo na mafunzo mapya na kuamua kwa pamoja jinsi ya kuzitumia."],
p31:["I4. (Kwa wawezeshaji pekee) tunahisi kuungwa mikono (kupokea mafunzo ya mara kwa mara,kuelewa nini tufanya na kwanini, kuwa na unyambuliko na bajeti) na shirika tekelezi/wakala wa serikali katika kazi zetu",
"Sijui/Habari haitoshi kutoa maamuzi",
"Shirika tekelezi/serikali haifanyi juhudi zozote kusaidia kazi zetu",
"Tunapokea msaada katika maeneo mawili kati ya haya a) tunapata mafunzo mara kwa mara (si mara moja) katika lugha yetu asili, b) tunajua tunachofanya na kwanini ni muhimu, c) tunaweza badilisha idadi ya mikutano tunayofanya na wakati wao ili kuendana na mahitaji yetu, d) tumepewa nafasi za mikutano na nyenzo zote za kuendesha mikutano na shirikia tekelezi, e) mzigo wetu wa kazi unaridhisha (hatutarajiwi kuchukua vijiji vingi au umbali mrefu sana au kufanya mikutano mingi)",
"Tunapokea msaada katika maeneo matatu kati ya haya a) tunapata mafunzo mara kwa mara (si mara moja) katika lugha yetu asili, b) tunajua tunachofanya na kwanini ni muhimu, c) tunaweza badilisha idadi ya mikutano tunayofanya na wakati wao ili kuendana na mahitaji yetu, d) tumepewa nafasi za mikutano na nyenzo zote za kuendesha mikutano na shirikia tekelezi, e) mzigo wetu wa kazi unaridhisha (hatutarajiwi kuchukua vijiji vingi au umbali mrefu sana au kufanya mikutano mingi)",
"Tunapokea msaada katika maeneo haya yote"]
}
