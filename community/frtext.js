const basics={
    h1:"Informations sur le Programme",
    figure1:"Figure ",
    figure2:" de 5. Cliquez sur la flèche pour le graphique suivant",
    program:"Nom du programme",
    organization:"Nom de l'organisation (si différent du nom du programme)",
    orgtype:"Type d'organisation:",
    country:"Le(s) pays de programmation",
    region:"Provinces / Région (le cas échéant)",
    name:"Qui réalise cette évaluation ? Nom (s)",
    date:"Date d'exécution",
    stage: "Stade de travail",
    save:"Sauvegarder les données",
    sendmail:"Envoyer les données par e-mail",
    comment:"Commentaire"
};

const stages=["pilote","nouveau", "à mi-parcous", "mature", "terminé"];
const orgtypes=["Gouvernement local/affilié au gouvernement","organisation à but non lucratif/de la société civile."];
const clickto="Cliquez pour enregistrer le commentaire";
const comment="Commentaire";

const dimensions=[
"A: Participation, Inclusion, et Voix",
"B: Ressources et Connaissances Locales",
"C: La Durabilité",
"D: Mécanismes de Redevabilité",
"E: Réactivité aux Dynamiques Spécifiques au Contexte",
"F: Collaboration au sein et entre les communautés",
"G: Travailler avec la société civile/le gouvernement local",
"H: Les Pratiques de Suivi et d'Évaluation qui Soutiennent le DPC",
"I: Inventissement et Intensité de Facilitation"
];
const rubric={
    p2:["A1. Le programme assure l'inclusion de tous les groupes de personnes dans la communauté (comme les vieux et les jeunes, les hommes et les femmes, les plus aisés et les pauvres, de différents clans, castes, religions, etc.)",
    "Je ne sais pas/information insuffisante",
    "Le programme ne tient pas compte des différents groupes de personnes qui vivent dans un village.",
    "Le programme prend en compte certains groupes exclus (pas tous) et assure leur participation aux réunions/activités collectives.",
    "Le programme prend en compte la plupart des groupes de personnes et assure leur participation aux réunions/activités collectives.",
    "Le programme prend en compte tous les groupes de personnes, assure leur participation active aux réunions/activités collectives."],
    p3:["A2. Les membres de la communauté décident des priorités du programme DPC AVANT la conception même du programme.",
    "Je ne sais pas/information insuffisante",
    "Les membres de la communauté ne participent pas à la définition des priorités du programme.",
    "Certains membres ou groupes de la communauté (par exemple, les chefs traditionnels, les propriétaires fonciers, etc.) participent à la définition des priorités du programme.",
    "La plupart des groupes communautaires participent à la définition des priorités du programme.",
    "Tous les groupes communautaires participent à la définition des priorités du programme et ont une voix égale dans ce domaine."],
    p4:["A3. Les membres de la communauté jouent un rôle actif dans la planification des programmes de DPC dans leur communauté..",
    "Je ne sais pas/information insuffisante",
    "Les membres de la communauté ne participent pas au processus de planification.",
    "Certains membres ou groupes de la communauté (par exemple, les chefs traditionnels, les propriétaires fonciers, etc.) participent au processus de planification.",
    "La plupart des groupes communautaires participent au processus de planification.",
    "Tous les groupes communautaires participent au processus de planification et y ont une voix égale."],
    p5:["A4. Des organismes communautaires représentant tous les groupes et quartiers mettent en œuvre le programme.",
    "Je ne sais pas/information insuffisante",
    "Les ONG ou les dirigeants locaux existants mettent en œuvre le programme.",
    "Les ONG et/ou les dirigeants locaux créent un organe chargé de mettre en œuvre le programme ou travaillent avec un organe existant qui ne comprend peut-être pas de membres de tous les groupes.",
    "Des organismes composés de membres auto-nommés représentant tous les groupes et quartiers mettent en œuvre le programme.",
    "Des organes élus représentant tous les groupes et quartiers mettent en œuvre le programme."],
    p6:["A5. Le programme renforce la voix et la confiance des représentants de la communauté afin d'influencer/former la prise de décision.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne fait aucun effort pour renforcer la voix ou la confiance des représentants de la communauté.",
    "Le programme renforce la voix et la confiance de certains représentants de la communauté, mais pas ceux des groupes exclus.",
    "Le programme renforce la voix et la confiance de nombreux représentants de la communauté, y compris ceux de certains groupes exclus.",
    "Le programme renforce la voix et la confiance de tous les représentants de la communauté, y compris ceux de tous les groupes exclus."],
    p7:["A6. Le programme sensibilise aux droits (sociaux, économiques et politiques) et renforce les compétences des représentants locaux pour demander ces droits.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne permet pas de sensibiliser les gens et de développer des compétences pour demander des droits.",
    "Le programme sensibilise aux droits, mais ne permet pas d'acquérir les compétences nécessaires pour les demander.",
    "Le programme sensibilise aux droits et développe les compétences de quelques personnes pour qu'elles puissent les demander.",
    "Le programme sensibilise aux droits et se concentre sur le développement des compétences des représentants locaux de tous les groupes pour les demander."],
    p8:["B1. Le programme de DPC s'appuie sur les ressources et les connaissances locales.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne tient pas compte des ressources et des connaissances locales.",
    "Le programme explore les ressources locales, mais les connaissances extérieures sont transmises par le personnel de première ligne.",
    "Le programme utilise les ressources locales et est conscient des connaissances locales.",
    "Le programme utilise et respecte les connaissances et les ressources locales."],
    p9:["B2. La communauté apporte ses ressources (temps, argent, travail, terre, matériaux, etc.)",
    "Je ne sais pas/information insuffisante",
    "Les membres de la communauté ne contribuent pas à la mise en œuvre du programme en espèces, en nature ou en travail.",
    "Les membres de la communauté contribuent en temps/travail ou en ressources (terre, argent, matériaux) parce que c'est obligatoire.",
    "Les membres de la communauté contribuent en temps/travail ou en ressources (terre, argent, matériaux), lorsqu'ils sont encouragés.",
    "Les membres de la communauté décident de ce qui est nécessaire, identifient volontairement les ressources supplémentaires (temps/travail, terre, argent, matériaux) et les offrent."],
    p10:["C1. Les communautés jouent un rôle central dans la planification de la manière et du moment où le programme doit être achevé et leur être remis.",
    "Je ne sais pas/information insuffisante",
    "Il n'y a pas de plan pour l'achèvement et le transfert du programme.",
    "Le plan d'achèvement et de transfert du programme est créé par l'organisation chargée de la mise en œuvre et les dirigeants ou membres de la communauté en sont informés.",
    "Le plan d'achèvement et de transfert du programme est créé en consultation avec les dirigeants locaux et les membres de la communauté.",
    "Le plan d'achèvement et de transfert du programme est dirigé par les membres de la communauté et les dirigeants locaux."],
    p11:["C2. Les communautés travaillent avec les organisations de mise en œuvre pour revoir et adapter constamment la planification du transfert des programmes et de la transition.",
    "Je ne sais pas/information insuffisante",
    "Il n'y a pas de plan ou de stratégie pour que votre organisation transfère les programmes à la communauté.",
    "Les plans de transfert du programme à la communauté ne sont faits que lorsque le programme arrive à son terme (ou lorsqu'il n'y a plus de financement).",
    "Les plans de transfert du programme à la communauté sont établis au début du programme et révisés à la fin du programme ou en cas de revers majeur",
    "Les plans de transfert du programme à la communauté sont établis au début du programme et sont régulièrement revus avec les membres de la communauté pour refléter la situation actuelle de la communauté."],
    p12: ["C3. Le programme s'assure que les structures communautaires (comme les organisations communautaires, les groupes qui mettent en œuvre les programmes) ont les capacités de continuer à travailler après le transfert.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne fait aucun effort pour garantir la capacité des structures communautaires à continuer à travailler après le transfert.",
    "Il existe un plan pour le transfert du programme mais aucune stratégie pour s'assurer que les structures communautaires puissent continuer à travailler après le transfert et aient les capacités d'obtenir des fonds/ressources (si nécessaire).",
    "Il existe une stratégie pour s'assurer que les structures communautaires puissent continuer à travailler après le transfert, mais il n'y a pas d'activités pour développer les capacités à obtenir des fonds/ressources (si nécessaire).",
    "Le programme met en œuvre des activités visant à renforcer les capacités afin que les structures communautaires puissent continuer à travailler après la passation des pouvoirs et obtenir des fonds/ressources (si nécessaire)."],
    p13:["C4. Une fois le programme terminé, son impact est mesuré par la participation locale.",
    "Je ne sais pas/information insuffisante",
    "Il n'y a pas de plans pour mesurer l'impact du programme après son achèvement ou la communauté ne sait pas s'il y a des plans.",
    "Il est prévu de mesurer l'impact du programme (ou il est mesuré) après son achèvement. Les membres de la communauté sont informés de l'exercice et fournissent les informations demandées.",
    "L'impact est mesuré (ou prévu d'être mesuré) après l'achèvement du programme et les membres de la communauté sont consultés dans l'exercice.",
    "L'impact est mesuré (ou prévu d'être mesuré) après l'achèvement du programme et les membres de la communauté participent activement à toutes les étapes de l'exercice."],
    p14: ["C5. Après que le programme a été transféré aux structures de la communauté/du gouvernement local, les membres de la communauté appartenant à tous les groupes (par exemple les femmes, les jeunes, les personnes âgées, les pauvres, les personnes handicapées, les minorités) continuent de bénéficier des activités pilotées par la communauté.",
    "Je ne sais pas/information insuffisante",
    "Personne ne bénéficie d'aucun avantage après le transfert du programme ou seuls les groupes privilégiés continuent d'en bénéficier.",
    "Le programme continue de bénéficier à certains groupes même après le transfert.",
    "Le programme continue de bénéficier à la plupart des groupes, même après le transfert des responsabilités.",
    "Le programme continue de bénéficier à tous les groupes, même après le transfert."],
    p15:["D1. Le programme et les structures communautaires partagent des informations importantes, par exemple ce qu'ils font, pourquoi, comment, et comment les fonds ont été utilisés.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne partage aucune information sur ce qui est fait, comment et pourquoi avec la communauté.",
    "Le programme ou les organismes communautaires partagent parfois des informations de base sur le programme, mais la plupart des détails ne sont pas disponibles.",
    "Le programme ou les organismes communautaires partagent souvent des informations autour du programme (la plupart mais pas toutes les informations sont disponibles).",
    "Les organismes du programme et de la communauté partagent régulièrement des informations sur les fonds, les processus et les activités avec les membres de la communauté et les invitent à donner leur avis."],
    p16:["D2. Le programme répond aux doléances/plaintes de la communauté.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne prévoit aucun moyen pour les membres de la communauté de formuler des doléances ou des plaintes.",
    "Le programme dispose d'un moyen pour les membres de la communauté de soulever des griefs/plaintes, mais il n'est pas accessible ou digne de confiance.",
    "Le programme dispose d'un moyen accessible et fiable pour les membres de la communauté de formuler des doléances/plaintes, mais les plaintes ne sont pas traitées.",
    "Le programme dispose d'un moyen accessible et fiable pour les membres de la communauté de formuler des doléances/plaintes, les plaintes sont traitées."],
    p17:["D3. Les résultats du suivi et de l'évaluation sont régulièrement partagés avec les membres de la communauté.",
    "Je ne sais pas/information insuffisante",
    "Les résultats du suivi et de l'évaluation ne sont jamais partagés avec les membres de la communauté.",
    "Les résultats du suivi et de l'évaluation peuvent être partagés avec les membres de la communauté par les personnes impliquées dans le programme lorsqu'elles en ont envie.",
    "Les résultats du suivi et de l'évaluation ne sont partagés avec les membres de la communauté qu'en cas de problème.",
    "Les résultats du suivi et de l'évaluation sont régulièrement partagés avec les membres de la communauté."],
    p18:["E1. Le programme est adapté à l'évolution des besoins et des contextes communautaires.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne répond pas aux besoins changeants de la communauté (par exemple, les inondations, les sécheresses, la faim saisonnière, l'arrivée de nouvelles technologies, les changements dans les systèmes politiques, etc.)",
    "Le programme est capable d'effectuer quelques changements.",
    "Le programme est capable de s'adapter, le cas échéant, à l'évolution des besoins de la communauté, y compris ceux provoqués par des crises ou des catastrophes.",
    "Le programme est capable de s'adapter à l'évolution des besoins de la communauté, y compris ceux résultant de crises ou de catastrophes, et de mettre en place des mécanismes/structures pour faire face à des situations similaires à l'avenir."],
    p19:["E2. Le rythme du programme DPC (c'est-à-dire le moment, la fréquence et la durée de l'engagement avec la communauté) est déterminé avec les membres de la communauté.",
    "Je ne sais pas/information insuffisante",
    "La communauté n'est pas impliquée dans la décision du rythme du programme.",
    "La communauté est informée du rythme du programme.",
    "Certains membres de la communauté sont consultés pour décider du rythme du programme.",
    "Tous les membres de la communauté, y compris les représentants des groupes marginalisés, sont consultés pour décider du rythme du programme."],
    p20:["F1. Le programme établit des relations positives entre riches et pauvres ; entre pauvres et pauvres.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne tient pas compte des différences économiques.",
    "Le programme établit des relations entre pauvres et pauvres.",
    "Le programme engage les riches et les pauvres dans des discussions et un dialogue.",
    "Le programme engage les riches et les pauvres à travailler ensemble pour atteindre un objectif commun."],
    p21:["F2. Le programme établit des relations positives au sein des mêmes groupes et entre les différents groupes ethniques, de castes, religieux, etc.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne tient pas compte des différences de castes/ethniques/religieuses.",
    "Le programme établit des relations entre les personnes de la même caste/ethnie/religion pour travailler ensemble au changement social.",
    "Le programme engage des personnes de différentes castes/ethnies/religions dans des discussions et des dialogues.",
    "Le programme établit des relations entre des personnes de différentes castes/ethnies/religions afin de travailler ensemble pour le changement social."],
    p22:["F3. Le programme établit des relations positives entre les femmes et les hommes et entre les hommes et les femmes.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne travaille pas avec les femmes.",
    "Le programme permet de créer des relations entre les femmes d'un même groupe.",
    "Le programme établit des relations entre tous les groupes de femmes OU entre les femmes et les hommes.",
    "Le programme établit des relations entre tous les groupes de femmes ET entre les femmes et les hommes."],
    p23:["F4. Le programme relie les communautés locales ou leurs dirigeants à d'autres villages et leurs dirigeants à travers les districts, provinces ou états.",
    "Je ne sais pas/information insuffisante",
    "Le programme ne crée pas de réseaux et de liens communautaires.",
    "Le programme crée des liens entre les communautés/dirigeants locaux d'un même district.",
    "Le programme établit des liens entre les communautés/les dirigeants locaux à travers le district/ l'état/la province/le pays.",
    "Le programme établit des liens entre les communautés à travers les espaces étatiques/régionaux/nationaux pour une action collective."],
    p24:["G1. Les groupes communautaires du programme travaillent en collaboration avec les structures et les acteurs du gouvernement local.",
    "Je ne sais pas/information insuffisante",
    "Le programme ou ses groupes communautaires et les structures et acteurs locaux pertinents existants donnent des informations/messages contradictoires.",
    "Le programme ou ses groupes communautaires et les structures et acteurs locaux pertinents existants ne travaillent pas du tout ensemble (même lorsqu'ils visent les mêmes objectifs).",
    "Le programme ou ses groupes communautaires et les structures et acteurs locaux pertinents existants travaillent parfois ensemble sur certaines questions.",
    "Le programme et ses groupes communautaires et structures/acteurs du gouvernement local travaillent régulièrement ensemble et se complètent."],
    p25:["H1. Les membres de la communauté suivent les activités clés et les progrès du programme.",
    "Je ne sais pas/information insuffisante",
    "Il n'y a pas de suivi participatif communautaire.",
    "Le suivi communautaire se produit parfois.",
    "Le suivi communautaire a lieu régulièrement, mais il est facilité par le personnel de première ligne.",
    "Le suivi communautaire a lieu régulièrement et est facilité par les membres ou les structures de la communauté."],
    p26:["H2. Une évaluation participative est réalisée.",
    "Je ne sais pas/information insuffisante",
    "Il n'y a pas d'évaluation participative communautaire.",
    "Les membres de la communauté sont impliqués dans UNE ou DEUX de ces activités : 1) Planification ; 2) Collecte des données ; 3) Analyse ; 4) Validation ; 5) Conclusions et recommandations ; 6) Planification des actions.",
    "Les membres de la communauté sont impliqués dans plusieurs (TROIS ou QUATRE) de ces activités : 1) Planification ; 2) Collecte des données ; 3) Analyse ; 4) Validation ; 5) Conclusions et recommandation ; 6) Planification des actions.",
    "Les membres de la communauté jouent un rôle central dans TOUTES les activités : 1) Planification ; 2) Collecte des données ; 3) Analyse ; 4) Validation ; 5) Conclusions et recommandation ; 6) Planification des actions."],
    p27:["H3. Les activités de suivi et d'évaluation examinent comment le programme fonctionne avec et bénéficie à différents groupes de personnes, notamment les femmes, les personnes handicapées, les personnes âgées, les personnes issues de minorités.",
    "Je ne sais pas/information insuffisante",
    "Les membres de la communauté ne savent pas car ils ne sont pas impliqués dans le suivi et l'évaluation (S&E) OU les membres de la communauté sont impliqués mais les systèmes de S&E ne prennent pas en compte les différents groupes de personnes lors de la collecte ou de l'analyse des informations.",
    "Le suivi et l'évaluation permettent de recueillir et d'analyser des informations afin de comprendre comment le programme fonctionne avec et profite à certains groupes de la communauté (par exemple, les hommes et les femmes, mais pas les personnes handicapées).",
    "Le suivi et l'évaluation permettent de recueillir et d'analyser des informations pour comprendre comment le programme fonctionne avec la plupart des groupes de la communauté et leur profite.",
    "Le suivi et l'évaluation permettent de collecter et d'analyser des informations afin de comprendre comment et pourquoi le programme fonctionne avec et profite à tous les différents groupes de personnes."],
    p28:["I1. Les animateurs décident de l'heure, du lieu et du cadre des réunions de manière à ce que chacun puisse y participer.",
    "Je ne sais pas/information insuffisante",
    "Les animateurs décident de l'heure, du lieu et du cadre des réunions en fonction de leur propre convenance ou de celle de quelques personnes choisies dans la communauté.",
    "Les animateurs répondent à au moins l'un des critères suivants : organiser des réunions à un moment, un lieu ou un cadre permettant à tous de participer et de s'exprimer librement.",
    "Les animateurs répondent à au moins deux des critères suivants : organiser des réunions à un moment, dans un lieu et dans un cadre qui permettent à tous de participer et de s'exprimer librement.",
    "Les animateurs remplissent les trois conditions suivantes : organiser des réunions à un moment, un lieu et un cadre qui permettent à toutes les personnes de participer et de s'exprimer librement."],
    p29:["I2. Les animateurs de projet sont respectueux et encouragent le dialogue..",
    "Je ne sais pas/information insuffisante",
    "Les animateurs font la morale et disent aux gens ce qu'ils doivent faire, n'écoutent pas et sont irrespectueux.",
    "Les animateurs écoutent et traitent les gens avec respect..",
    "Les animateurs écoutent leurs idées, traitent les gens avec respect et encouragent tous les participants à s'exprimer.",
    "Les animateurs écoutent, traitent les gens avec respect et encouragent les gens à parler entre eux."],
    p30:["I3. Après avoir participé à des réunions avec les animateurs, nous avons le sentiment que :",
    "Je ne sais pas/information insuffisante",
    "C'était une perte de temps ; nous n'y assistons que parce que nous y sommes obligés.",
    "Nous entendons de nouvelles idées, mais nous ne savons pas trop quoi en faire.",
    "Nous entendons de nouvelles idées et les animateurs nous disent comment les mettre en œuvre.",
    "Nous entendons les nouvelles idées et les nouveaux apprentissages et décidons collectivement de la manière d'y donner suite."],
    p31: ["I4. (Pour les animateurs uniquement) Nous nous sentons soutenus (nous recevons des formations régulières, nous comprenons ce que nous faisons et pourquoi, nous avons de la flexibilité et des budgets) par l'organisation de mise en œuvre/l'agence gouvernementale pour faire notre travail.",
    "Je ne sais pas/information insuffisante",
    "L'organisme d'exécution/l'agence gouvernementale ne fait aucun effort pour soutenir notre travail.",
    "Nous bénéficions d'un soutien dans deux de ces domaines : a) nous recevons régulièrement (et non pas une seule fois) une formation dans notre langue locale, b) nous savons ce que nous faisons et pourquoi c'est important, c) nous pouvons modifier le nombre de réunions que nous animons et leur calendrier pour répondre aux besoins locaux, d) l'organisation chargée de la mise en œuvre nous fournit des espaces de réunion et tout le matériel nécessaire à l'organisation des réunions, e) notre charge de travail est raisonnable (nous ne sommes pas censés couvrir un trop grand nombre de villages ou de très longues distances ou faire trop de réunions).",
    "Nous bénéficions d'un soutien dans trois de ces domaines : a) nous recevons régulièrement (et non pas une seule fois) une formation dans notre langue locale, b) nous savons ce que nous faisons et pourquoi c'est important, c) nous pouvons modifier le nombre de réunions que nous animons et leur calendrier pour répondre aux besoins locaux, d) l'organisation chargée de la mise en œuvre nous fournit des espaces de réunion et tout le matériel nécessaire à l'organisation des réunions, e) notre charge de travail est raisonnable (nous ne sommes pas censés couvrir un trop grand nombre de villages ou de très longues distances ou faire trop de réunions).",
    "Nous bénéficions d'un soutien dans TOUS ces domaines : a) nous recevons régulièrement (et non pas une seule fois) une formation dans notre langue locale, b) nous savons ce que nous faisons et pourquoi c'est important, c) nous pouvons modifier le nombre de réunions que nous animons et leur calendrier pour répondre aux besoins locaux, d) l'organisation chargée de la mise en œuvre nous fournit des espaces de réunion et tout le matériel nécessaire à l'organisation des réunions, e) notre charge de travail est raisonnable (nous ne sommes pas censés couvrir un trop grand nombre de villages ou de très longues distances ou faire trop de réunions)."]
}
