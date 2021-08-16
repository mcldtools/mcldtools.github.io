const basics={
    h1:"Infomación General",
    program:"Nombre del programa",
    organization:"Nombre de la organización (si es diferente del Nombre del programa)",
    country:"País o países en donde se llevó a cabo el programa (si aplica):",
    region:"Provincias o región/es (si corresponde):",
    name:"Name(s) completing this assessment",
    date:"Fecha de llenado de rúbrica:",
    select:"Etapa de trabajo",
    options:['piloto','proyecto nuevo','mediano plazo','fase final','terminado'],
    comment:"Comentarios adicionales y retroalimentación",
    save:"Guardar Datos"
}
const dimensions=[
"A: Participación, inclusión, voz",
"B: Recursos locales y conocimiento",
"C: Estrategia de salida ligada a la sostenibilidad de la iniciativa",
"D: Mecanismos de rendición de cuentas",
"E: Sensibilidad a las dinámicas específicas del contexto",
"F: Colaboración al interior y entre comunidades",
"G: El DLCPG y su relación con los gobiernos subnacionales",
"H. Prácticas de monitoreo y evaluación que sustentan al DLCPG",
"I. Facilitación, inversión e intensidad de la iniciativa"];

const rubric={
p2:["A1. El programa DLCPG asegura la participación de grupos excluídos.",
"Sin información / Información insuficiente para asignar un valor.",
"Los posibles factores de exclusión (género, etnia, edad, situación económica) no son analizados.",
"Personas que ejecutan el programa han identificado posibles factores de exclusión y han incluido las visiones de esas personas integrantes de la comunidad.",
"Personas que ejecutan el programa fortalecen la voz colectiva en la comunidad, de aquellos potencialmente excluidos, y construyen la solidaridad comunitaria. Nota: esto quiere decir que miembros de la comunidad tienen voz y son escuchados, pero no toman decisiones.", "Aquellos que corren el riesgo de exclusión son actores centrales en la toma de decisiones en el programa. Nota: tienen voz, son escuchados y toman decisiones."],
p3:["A.2 Miembros de la comunidad deciden el enfoque del programa DCLPG ANTES de su diseño", 
"Sin información / Información insuficiente para asignar un valor.", 
"Miembros de la comunidad no estuvieron involucrados en la fase de valoración.", 
"Miembros de la comunidad participaron activamente en la fase de valoración y se involucraron en una de los siguientes actividades: (1) diseño del proceso (2) recolección de datos; (3) análisis de los datos (4) formulación de conclusiones.", 
"Miembros de la comunidad participaron activamente en esta fase y se involucraron en dos o tres de las siguientes actividades: (1) diseño del proceso (2) recolección de datos; (3) análisis de los datos (4) formulación de conclusiones.", 
"Miembros de la comunidad participaron en todas las siguientes actividades: (1) diseño del proceso (2) recolección de datos; (3) análisis de los datos (4) formulación de conclusiones."],
p4:["A3. Miembros de la comunidad juegan un rol activo en el diseño del programa DLCPG", 
"Sin información / Información insuficiente para asignar un valor.",
"Miembros de la comunidad no estuvieron involucrados en el proceso de diseño del programa.", 
"La base del diseño del programa se ancla en personas seleccionadas de la comunidad (por ejemplo, personas líderes o representantes, pero ninguna participación amplia de miembros de la comunidad).", 
"La base del diseño del programa se ancla en procesos participativos comunitarios amplios, pero sin tener en cuenta la dinámica de poder/género, la distribución de recursos dentro de una comunidad, los diferentes niveles de pobreza, etc.", 
"La base del diseño del programa se ancla en procesos participativos comunitarios amplios, con la consideración del dinámicas de poder y género, la distribución de recursos dentro de una comunidad, diferentes niveles de pobreza, etc. Estas consideraciones se utilizan para crear una visión y planes de acción."],
p5:["A4. Miembros de la comunidad juegan un rol activo en la implementación de programas DLCPG (incluye adaptación)",
"Sin información / Información insuficiente para asignar un valor.",
"Los miembros de la comunidad no participaron en el proceso de implementación",
"Las personas seleccionados de la comunidad (por ejemplo, personas líderes o representantes) se mantienen informadas sobre el desempeño del programa y las decisiones con respecto a la implementación o adaptación.",
"Miembros de la comunidad y líderes locales están informados sobre el desempeño del programa y pueden influir en la toma de decisiones en torno a las actividades del programa y la adaptación.",
"Miembros (incluidos aquellos en riesgo de exclusión) y líderes locales impulsan la toma de decisiones sobre las actividades del programa en curso, la revisión del desempeño del programa y cualquier necesidad de adaptación."],
p6:["A5. El ritmo del programa DLCPG es establecido conjuntamente con comunidades y, cuando es adecuado, con financiadores",
"Sin información / Información insuficiente para asignar un valor.",
"El ritmo del programa es determinado por la organización implementadora y/o financiadora, sin  ninguna consulta a las comunidades y sin divulgación de información.",
"El ritmo del programa es determinado por la organización implementadora y/o financiadora. La comunidad es informada sobre el ritmo y brindan retroalimentación (pero no se toman en cuenta para modificación de la ejecución del programa). ",
"El ritmo del programa es determinado por la organización implementadora y/o financiadora, en conjunto y con la colaboración de personas integrantes de la comunidad.", "El ritmo del programa es determinado conjuntamente con personas integrantes de la comunidad, incluyendo representación de grupos maginados. Se reconocen los diferentes ritmos preferidos por los diferentes grupos de la comunidad."],
p7:["A6. Los programas basados en DLCPG sistemáticamente canalizan la voz y generan confianza en miembros de la comunidad, especialmente entre personas en riesgo de exclusión, para que expresen sus pensamientos, ideas, experiencias, etc.",
"Sin información / Información insuficiente para asignar un valor.",
"El programa no hace esfuerzos para generar voz y confianza.",
"El programa puede generar voz y confianza entre algunos miembros de la comunidad y / o líderes locales, pero no tiene un enfoque sistemático para hacerlo.",
"El programa tiene la intención de desarrollar la voz y la confianza entre personas de la comunidad y / o de líderes locales a través del desarrollo de capacidades y la tutoría.",
"El programa tiene la intención de construir la voz y la confianza de personas líderes locales y personas de la comunidad, incluiyendo a quienes están en riesgo de marginación (permitiéndoles aprender, practicar cómo articular y presentar ideas, entre otras cosas)"],
p8:["A7. El programa basado en DLCPG crea conciencia y desarrolla habilidades de defensa entre las organizaciones de base locales, los líderes y los miembros de la comunidad para presionar por sus derechos sociales, económicos y políticos",
"Sin información / Información insuficiente para asignar un valor.",
"El programa no crea conciencia sobre derechos sociales, económicos y políticos de las personas ni desarrolla habilidades de incidencia.",
"El programa crea conciencia sobre derechos sociales, económicos y políticos de las personas, pero no desarrolla habilidades de incidencia.",
"El programa crea conciencia sobre  derechos sociales, económicos y derechos políticos y desarrolla habilidades de incidencia",
"El programa crea conciencia sobre derechos sociales, económicos y políticos de las personas y desarrolla habilidades de incidencia y de movilización social"],
p9:["B1. El programa basado en DCLPG retoma los recursos y conocimientos locales.",
"Sin información / Información insuficiente para asignar un valor.",
"El programa no considera recursos ni conocimientos locales",
"El programa conoce los recursos locales, pero personas facilitadoras comunitarias de la organiación transmiten el conocimiento",
"El programa se basa en recursos locales y tiene en cuenta el conocimiento local.",
"El programa utiliza y celebra el conocimiento y recursos locales. *celebrar se refiere a reconocer el valor del conocimiento local y a promoverlo."],
p10:["B2. La comunidad contribuye con sus recursos (por ejemplo: tiempo, dinero, trabajo, tierra, materiales).",
"Sin información / Información insuficiente para asignar un valor.",
"La comunidad no contribuye con efectivo, ni en especie o mano de obra, a la implementación del programa", "Las personas integrantes de la comunidad aportan tiempo / trabajo o recursos (tierra, efectivo, materiales), pero solo porque es obligatorio", "Las personas integrantes de la comunidad aportan tiempo / trabajo o recursos (tierra, dinero en efectivo, materiales) cuando se les solicita, pero no lo ofrecen voluntariamente.", "Las personas integrantes de la comunidad deciden lo que se necesita, identifican voluntariamente recursos adicionales que contribuirían a los resultados (tiempo / trabajo, tierra, dinero, materiales) y los ofrecen voluntariamente"],
p11:["C1. Las comunidades son fundamentales en el desarrollo de estrategias de salida del programa DLCPG", "Sin información / Información insuficiente para asignar un valor.", "No existen estrategias de salida.", "La estrategia de salida es creada por la organización implementadora, sin consultar con líderes de la comunidad o personas integrantes de la comunidad.", "La estrategia de salida ha sido creada a partir de  consultas con  líderes locales y personas integrantes de la comunidad", "Personas integrantes de la comunidad y líderes locales tienen apropiada la estrategia de salida"],
p12:["C2. Planeación para una salida responsable que está entretejida en todo el programa DLCPG [todas las fases del ciclo de vida]", "Sin información / Información insuficiente para asignar un valor.", "No existen estrategias de salida.", "Las estrategias de salida se formulan hacia el final del programa (muy cerca del cierre o al cierre).", "Las estrategias de salida se planifican en el diseño y se revisan hacia el final del programa (muy cerca del cierre o al cierre).", "La planificación de las estrategias de salida iniciadas en el diseño, se revisa iterativamente durante la implementación y finaliza hacia el final del programa."],
p13:["C3. La estrategia de salida del programa basado en DLCPG describe el mecanismo creado para asegurar la sostenibilidad y/o la resiliecia", "Sin información / Información insuficiente para asignar un valor.", "No existen estrategias de salida.", "Existe una estrategia de salida pero no apuntala mecanismos de sostenibilidad o resiliencia.", "Hay un plan lógico que describe los mecanismos por medio de los cuales el impacto deseado continuará luego de que el programa o acción hayan terminado.", "Hay un plan lógico que describe los mecanismos por medio de los que el impacto determinado por las y los miembros comunitarios continuarán luego que el programa o acción haya terminado. Esto incluye asesorías o capacitaciones/recursos requeridos por actores locales."],
p14:["C4. El programa basado en DLCPG es medido después de su terminación y con participacion local.", "No aplica.", "El impacto del programa no está planeadio ni se mide más allá de 2 años posteriores al cierre", "El impacto del programa es medido (o planeado ser medido) a los 2 años del cierre del programa. Los actores comunitarios son informados sobre el ejercicio y se les provee la información que requieran.", "El impacto del programa es medido a los 2 años del cierre. Los actores comunitarios son consultados sobre el ejercicio y proveen la información que se les solicita.", "El impacto del programa se mida a los 2 años del cierre del programa. Los actores comunitarios son participantes activos en todas las fases de la evaluación posterior al programa (desde el diseño hasta el plan de acción)."],
p15:["C5. Miembros de la comunidad (incluyendo a los que enfrentan mayores situaciones de marginalización) aún se están beneficiando del programa basado en DLCPG.", "No aplica.", "El programa no ha dejado impactos identificables (positivos, negativos, neutrales)", "Poca evidencia de impacto sostenible es evidente. Ninguna a poca adaptación ha sucedido.", "Impacto mixto pero mayormente positivo. Las personas integrantes y / o estructuras de la comunidad han practicado algunas adaptaciones y habilidades obtenidas del programa DLCPG", "Principalmente evidencia positiva. Las personas integrantes y / o estructuras de la comunidad han usado regularmente los mecanismos y habilidades obtenidas en el prorgama DLCPG"],
p16:["D1. El programa fomenta cooperación con una rendición genuina y mutua de cuentas.", "Sin información / Información insuficiente para asignar un valor.", "No existen mecanismos de rendición de cuentas que involucren a la comunidad.", "Los mecanismos de rendición de cuentas existen ya sea desde las comunidades hacia las agencias implementadoras, o desde las agencias implementadoras hacia las comunidades", "Existen mecanismos de responsabilidad bidireccionales entre las comunidades y las agencias implementadoras", "Los mecanismos de rendición de cuentas se practican no solo entre las comunidades y las agencias implementadoras, sino también al interior de las comunidades y / o con los líderes locales (grupos o consejos elegidos)."],
p17:["D2. El programa DLCPG crea previsiones para tener mecanismos de retroalimentación hacia las comunidades, durante el ciclo de vida del proyectos e incluyendo prácticas de M&E", "Sin información / Información insuficiente para asignar un valor.", "No existen mecanismos de retroalimentación", "La retroalimentación hacia las comunidades se deja a personas facilitadoras sin un enfoque sistematizado", "La retroalimentación a las comuindades se hace solo cuando surge algún problema relevante", "Con base en dato de M&E, los ejercicios de aprendizaje interactivo y descentralizado son usados para brindar retroalimentación a las comunidades de forma sistemática y ayudándoles a hacer planes y así abordar problemáticas relevantes"],
p18:["E1. El programa DLCPG responde a múltiples diferencias y dinámicas de poder (sexo, nivel económica, étnico).", "Sin información / Información insuficiente para asignar un valor", "El programa no evalúa ni considera las diferencias y dinámicas de poder en la comunidad", "Las evaluaciones de diseño del programa apuntan a diferencias y dinámicas, pero no existe una estrategia para tomar en cuenta estas diferencias", "El análisis de la comunidad destaca la variación contextual en las relaciones de poder, pero ni el programa ni las personas facilitadoras tienen los elementos necesarios para abordarlos", "El programa responde a las diferencias y dinámicas de poder dentro y entre las comunidades y las personas facilitadoras cuentan con los elementos necesarios para abordarlas / manejarlas"],
p19:["E2. El programa DLCPG responde a las necesidades y contextos de la comunidad.", "Sin información / Información insuficiente para asignar un valor", "El programa no puede responder a las necesidades contextuales de la comunidad (el programa aplica un enfoque de anteproyecto)", "El programa no puede responder a las necesidades  y contextos cambiantes de la comunidad, pero la organización implementadora busca otras intervenciones para abordarlas", "El programa puede adaptarse en cierta medida, pero esto se limita a las características del diseño", "El programa es iterativo y puede adaptarse a crisis, éxitos o cambios en las necesidades y contextos de la comunidad (por ejemplo, inundaciones, sequías, hambre estacional, llegada de nuevas tecnologías, cambios en los sistemas políticos, etc.)"],
p20:["F1. El programa DLCPG construye relaciones de colaboración horizontal, vertical y entre comunidades.[medido como un indicador o descrito como un proceso].", "Sin información / Información insuficiente para asignar un valor.", "El programa no tiene la intención de construir relaciones colaborativas", "El programa construye relaciones horizontales colaborativas (por ejemplo, revisiones de pares como persona campesina a persona campesina), dentro de la comunidad", "El programa construye relaciones colaborativas tanto verticales como horizontales (personas con altos ingresos y quienes viven en pobreza, hombres y mujeres), dentro de la comunidad", "El programa construye relaciones colaborativas 1. horizontales (socio-económicas, de género); 2. verticales (socio-económicas, de clase social); 3. a través de comunidades"],
p21:["F2. El programa DLCPG vincula estructuras locales o personas líderes con federaciones o movimientos sociales más amplios.", "Sin información / Información insuficiente para asignar un valor.", "El programa no vincula a estructuras comunitarias locales con ninguna federación ni movimiento", "El programa vincula a estructuras comunitarias locales con federaciones locales", "El programa vincula a estructuras comunitarias locales o personas líderes con federaciones locales y regionales", "El programa vincula a estructuras comunitarias locales o líderes con federaciones locales y regionales, así como con movimientos sociales nacionales"],
p22:["G1. Las estructuras o líderes de la comunidad local del programa DLCPG están vinculados con gobiernos subnacionales", "Sin información / Información insuficiente para asignar un valor.", "Los gobiernos locales o estatales no conocen el programa", "El gobierno local o estatal conocen el programa, pero no existe una plataforma / espacio para la interacción entre las estructuras participativas y personas líderes comunitarias con personas funcionarias del gobierno local o estatal", "El gobierno estatal o local conoce el programa y existe una interacción ad hoc entre las estructuras participativos o personas líderes comunitarias con personas funcionarios del gobierno local o estatal. El programa fortalece la capacidad de la comunidad para exigir sus derechos / garantías al gobierno local o estatal", "El gobierno estatal o local conocer el programa DLCPG. El programa establece una relación sistemática entre las comunidades y el gobierno estatal o local para alcanzar los objetivos comunitarios"],
p23:["H1. Se realiza un monitoreo participativo.", "Sin información / Información insuficiente para asignar un valor.", "No existe un monitoreo participativo.", "El monitoreo de las comunidades ocurre pero es mayoritariamente facilitado por personal de la organización en terreno", "El monitoreo comunitaria ocurre y es mayoritariamente facilitado por integrantes de las comunidades. La retroalimentación a un mayor número de integrantes de la comunidad (mediante sesiones participativas), es ad hoc", "El Monitoreo Participativo Comunitario es fundamental en el enfoque de M&E del programa. El monitoreo de la comunidad es facilitado por integrantes o estructuras de la comunidad e incluye informar periódicamente a la comunidad en general, por ejemplo, cada seis meses"],
p24:["H2. Se realiza una evaluación participativa.", "Sin información / Información insuficiente para asignar un valor.", "No hay una evaluación participative de la comunidad.", "Integrantes de la comunidad están involucrados en UNA o DOS de estas etapas de evaluación: 1) Planificación; 2) Recopilación de datos; 3) Análisis; 4) Validación; 5) Conclusiones y recomendaciones; 6) Planificación de la acción.", "Integrantes de la comunidad participan en muchas (TRES o CUATRO) de estas etapas de evaluación: 1) Planificación; 2) Recopilación de datos; 3) Análisis; 4) Validación; 5) Conclusiones y recomendaciones; 6) Planificación de la acción.", "Los miembros de la comunidad son centrales en TODAS las etapas de evaluación: 1) Planificación; 2) Recopilación de datos; 3) Análisis; 4) Validación; 5) Conclusiones y recomendaciones; 6) Planificación de la acción."],
p25:["H3. Los hallazgos de M&E están desagregados por sexo, discapacidades y otras diferencias sociales relevantes Y se actúa en consecuencia", "Sin información / Información insuficiente para asignar un valor.", "No hay desagregación de resultados ", "Los resultados están desagregados, pero faltan varias diferencias sociales relevantes para la acción. Hay poca argumentación para dilucidar por qué los resultados son diferentes para diferentes grupos.", "Los resultados se desagregan en todas las diferencias sociales relevantes para la acción. Existen explicaciones parciales sobre por qué los resultados son diferentes en cada grupos y qué significa eso para el programa.", "Los resultados se desglosan de acuerdo con todas las diferencias sociales relevantes para la intervención. Hay una buena explicación de por qué los resultados son diferentes para diferentes grupos y qué significa eso para el programa [traducido a la acción recomendada]."],
p26:["I1. Las personas facilitadoras del programa DLCPG cuentan con habilidades y práctica para sus roles.", "Sin información / Información insuficiente para asignar un valor.", "Las personas facilitadoras reciben una orientación básica bajo un  ambiente de entrenamiento formal (como en salón de clases) ", "Las personas facilitadoras están capacitadas en habilidades básicas de facilitación, así como en análisis y planeación participativa en ambientes de entrenamiento formal (como en salón de clases) ", "Las personas facilitadoras están capacitadas en habilidades de facilitación, análisis y planeación participativa  en ambientes de entrenamiento formal (como en salón de clases) y en las comunidades.", "Las personas facilitadoras cuentan con habilidades de facilitación, análisis y planeación participativa, así como en acciones colectivas tanto en ambientes de entrenamiento formal (como en salón de clases) y en las comunidades"],
p27:["I2. El programa DLCPG tiene disposiciones razonables para garantizar la flexibilidad para responder a los cambios en la demanda de personas facilitadoras de la comunidad (por ejemplo, sobre la escala del programa, los cambios en el contexto o el ritmo del DLCPG)", "Sin información / Información insuficiente para asignar un valor.", "Sin evaluación de los cambios en la demanda de personas facilitadoras comunitarias Y / O Sin provisión de recursos para aumentar la escala del programa Y / O No hay procesos establecidos para reducir el número de personas facilitadoras o bajar el ritmo del programa.", "Evaluaciones ad-hoc sobre los números y la capacidad de los personas facilitadoras comunitarias en relación con el contexto, la escala prevista del programa y el ritmo del programa. Se realizan cambios si el rendimiento del programa se ve comprometido.", "Evaluaciones periódicas sobre los números y la capacidad de los personas facilitadoras comunitarias en relación con el contexto, la escala prevista del programa y el ritmo del programa. Los cambios se realizan SOLO si el rendimiento del programa se ve comprometido.", "Evaluaciones períódicas sobre los números y las capacidades de personas facilitadoras comunitarias relativas al contexto, a la escala prevista del programa y al ritmo del programa. El programa tiene consideraciones presupuestarias y procesos para responder."],
p28:["I3. El programa DLCPG tiene disposiciones razonables para apoyar la calidad de la facilitación local (criterios claros de admisión; conocimiento y habilidades para valoración; provisión de capacitación y apoyo para personas facilitadoras locales)", "Sin información / Información insuficiente para asignar un valor.", "No existe ninguna disposición para apoyar la calidad de la facilitación local. No hay criterios claros de admisión, no se realiza una evaluación adecuada de conocimientos y habilidades y no hay disposiciones para la capacitación y el apoyo de los personas facilitadoras locales.", "Hay algunas disposiciones ad-hoc para apoyar la facilitación local. El programa tiene uno de los siguientes componentes integrados: 1) Hay un criterio de admisión claro; 2) Se lleva a cabo una evaluación adecuada de conocimientos y habilidades; 3) Existe una disposición para la capacitación y el apoyo de los personas facilitadoras locales.", "El programa tiene dos de los siguientes componentes integrados: 1) Hay un criterio de admisión claro; 2) Se lleva a cabo una evaluación adecuada de conocimientos y habilidades; 3) Existe una disposición para la capacitación y el apoyo de los personas facilitadoras locales.", "El programa tiene todos los siguientes componentes integrados: 1) Hay un criterio de admisión claro; 2) Se lleva a cabo una evaluación adecuada de conocimientos y habilidades; 3) Existe una disposición para la capacitación y el apoyo de los personas facilitadoras locales."]
}