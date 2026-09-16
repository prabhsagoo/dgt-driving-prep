import { Question } from '@/types';

export const VISUAL_SIGN_QUESTIONS: Question[] = [
  {
    id: 'vis-sgn-001',
    topicId: 'road-signs',
    imageUrl: 'r-101',
    question: {
      es: '¿Qué prohíbe esta señal a los usuarios de la vía?',
      en: 'What does this sign prohibit to road users?',
      ca: 'Què prohibeix aquest senyal als usuaris de la via?'
    },
    options: {
      es: [
        'La entrada a toda clase de vehículos.',
        'La circulación en ambos sentidos.',
        'El estacionamiento de vehículos a motor únicamente.'
      ],
      en: [
        'Entry to all kinds of vehicles.',
        'Two-way traffic.',
        'Parking of motor vehicles only.'
      ],
      ca: [
        'L’entrada a tota classe de vehicles.',
        'La circulació en ambdós sentits.',
        'L’estacionament de vehicles de motor únicament.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal R-101 (Entrada prohibida) prohíbe el acceso a toda clase de vehículos en el sentido indicado.',
      en: 'Sign R-101 prohibits entry to all types of vehicles in the specified direction.',
      ca: 'El senyal R-101 prohibeix l’accés a tota classe de vehicles en el sentit indicat.'
    }
  },
  {
    id: 'vis-sgn-002',
    topicId: 'road-signs',
    imageUrl: 'r-2',
    question: {
      es: 'Ante esta señal vertical, ¿dónde debe detener obligatoriamente su vehículo el conductor?',
      en: 'Facing this vertical sign, where must the driver make the mandatory complete stop?',
      ca: 'Davant d’aquest senyal vertical, on ha d’aturar obligatòriament el vehicle el conductor?'
    },
    options: {
      es: [
        'Inmediatamente antes de la línea transversal continua de detención, sin rebasarla.',
        'Exactamente a la altura del poste de la señal.',
        'Solo si se aproximan vehículos por la vía transversal.'
      ],
      en: [
        'Immediately before the solid transverse stop line, without crossing it.',
        'Directly aligned with the signpost.',
        'Only if other vehicles are approaching on the crossing road.'
      ],
      ca: [
        'Immediatament abans de la línia transversal contínua de detenció, sense depassar-la.',
        'Exactament a l’alçada del pal del senyal.',
        'Només si s’aproximen vehicles per la via transversal.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal STOP (R-2) obliga a detenerse siempre completamente ante la línea de detención o, si no la hay, inmediatamente antes de la intersección.',
      en: 'Sign R-2 requires a mandatory full stop before the stop line, or before the intersection if no line is marked.',
      ca: 'El senyal STOP (R-2) obliga a aturar-se sempre completament abans de la línia de detenció.'
    }
  },
  {
    id: 'vis-sgn-003',
    topicId: 'road-signs',
    imageUrl: 'r-1',
    question: {
      es: 'Si llega a esta señal de Ceda el Paso y la visibilidad es perfecta sin aproximarse ningún vehículo, ¿es obligatorio detenerse?',
      en: 'If you arrive at this Yield sign with clear visibility and no approaching vehicles, is stopping mandatory?',
      ca: 'Si arriba a aquest senyal de Cedeixi el Pas amb visibilitat perfecta i sense vehicles, és obligatori aturar-se?'
    },
    options: {
      es: [
        'No, basta con aminorar la marcha y ceder el paso si fuera necesario.',
        'Sí, es obligatorio realizar una detención de al menos 2 segundos.',
        'Solo es obligatorio detenerse de noche.'
      ],
      en: [
        'No, it is sufficient to slow down and only stop if necessary to yield.',
        'Yes, a complete stop of at least 2 seconds is mandatory.',
        'Stopping is only mandatory at night.'
      ],
      ca: [
        'No, n’hi ha prou amb reduir la marxa i cedir el pas si fos necessari.',
        'Sí, és obligatori fer una detenció d’almenys 2 segons.',
        'Només és obligatori aturar-se de nit.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En el Ceda el Paso (R-1) solo es obligatorio detenerse si se aproximan vehículos a los que se deba dar prioridad.',
      en: 'At a Yield sign (R-1), stopping is only required if approaching vehicles require you to yield right of way.',
      ca: 'Al Cedeixi el Pas (R-1) només és obligatori aturar-se si s’aproximen vehicles als quals calgui donar prioritat.'
    }
  },
  {
    id: 'vis-sgn-004',
    topicId: 'road-signs',
    question: {
      es: 'Una línea continua de color amarillo pintada en el bordillo o junto al borde de la calzada, ¿qué prohíbe?',
      en: 'A solid continuous yellow line painted along the curb or road edge prohibits what?',
      ca: 'Una línia groga contínua pintada a la vorera o al marge de la calçada, què prohibeix?'
    },
    options: {
      es: [
        'Tanto la parada como el estacionamiento.',
        'Únicamente el estacionamiento, permitiendo parar.',
        'El adelantamiento de vehículos de más de dos ruedas.'
      ],
      en: [
        'Both stopping and parking.',
        'Parking only, while still allowing stopping.',
        'Overtaking vehicles with more than two wheels.'
      ],
      ca: [
        'Tant la parada com l’estacionament.',
        'Únicament l’estacionament, permetent parar.',
        'L’avançament de vehicles de més de dues rodes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La línea amarilla continua prohíbe siempre e invariablemente tanto parar como estacionar a lo largo de toda su extensión.',
      en: 'A solid yellow curb line unconditionally prohibits both stopping (parada) and parking (estacionamiento).',
      ca: 'La línia groga contínua prohibeix sempre tant la parada com l’estacionament al llarg del seu traçat.'
    }
  },
  {
    id: 'vis-sgn-005',
    topicId: 'road-signs',
    question: {
      es: 'Una línea discontinua de color amarillo pintada en el bordillo, ¿qué maniobra permite realizar?',
      en: 'A broken (dashed) yellow line along the curb permits which maneuver?',
      ca: 'Una línia groga discontínua pintada a la vorera, quina maniobra permet fer?'
    },
    options: {
      es: [
        'Permite parar (menos de 2 minutos sin bajarse), pero prohíbe estacionar.',
        'Permite estacionar durante un máximo de una hora.',
        'Prohíbe tanto parar como estacionar.'
      ],
      en: [
        'Permits stopping (under 2 minutes without leaving vehicle), but prohibits parking.',
        'Permits parking up to one hour maximum.',
        'Prohibits both stopping and parking.'
      ],
      ca: [
        'Permet parar (menys de 2 minuts sense baixar), però prohibeix estacionar.',
        'Permet estacionar durant una hora com a màxim.',
        'Prohibeix tant parar com estacionar.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La línea discontinua amarilla prohíbe el estacionamiento, pero autoriza la parada para subir o bajar pasajeros rápidamente.',
      en: 'A broken yellow line forbids parking, but permits stopping briefly to drop off or pick up passengers.',
      ca: 'La línia groga discontínua prohibeix estacionar, però autoritza la parada ràpida.'
    }
  },
  {
    id: 'vis-sgn-006',
    topicId: 'road-signs',
    question: {
      es: '¿Cuál es el orden de prioridad entre los diferentes tipos de señales de tráfico?',
      en: 'What is the order of priority among the various types of traffic signals?',
      ca: 'Quin és l’ordre de prioritat entre els diferents tipus de senyals de trànsit?'
    },
    options: {
      es: [
        '1º Agentes, 2º Señales circunstanciales/obras, 3º Semáforos, 4º Señales verticales, 5º Marcas viales.',
        '1º Semáforos, 2º Agentes, 3º Señales verticales, 4º Marcas viales.',
        '1º Señales verticales, 2º Semáforos, 3º Balizamiento, 4º Agentes.'
      ],
      en: [
        '1st Traffic officers, 2nd Cones/roadworks, 3rd Traffic lights, 4th Vertical signs, 5th Road markings.',
        '1st Traffic lights, 2nd Officers, 3rd Vertical signs, 4th Road markings.',
        '1st Vertical signs, 2nd Traffic lights, 3rd Cones/works, 4th Officers.'
      ],
      ca: [
        '1r Agents, 2n Senyals circumstancials/obres, 3r Semàfors, 4t Senyals verticals, 5è Marques vials.',
        '1r Semàfors, 2n Agents, 3r Senyals verticals, 4t Marques vials.',
        '1r Senyals verticals, 2n Semàfors, 3r Senyalització d’obres, 4t Agents.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las órdenes de los agentes de tráfico son siempre la máxima autoridad y prevalecen sobre cualquier semáforo, señal vertical o marca vial existente.',
      en: 'Instructions by police/traffic officers always take ultimate precedence over lights, signs, or pavement markings.',
      ca: 'Les ordres dels agents de trànsit tenen sempre la màxima autoritat per damunt de qualsevol altre senyal.'
    }
  },
  {
    id: 'vis-sgn-007',
    topicId: 'road-signs',
    question: {
      es: 'Un agente de la autoridad con el brazo levantado verticalmente obliga a detenerse a:',
      en: 'A traffic officer with an arm raised vertically obligates who to stop?',
      ca: 'Un agent de l’autoritat amb el braç aixecat verticalment obliga a aturar-se a:'
    },
    options: {
      es: [
        'A todos los usuarios de la vía que se aproximen al agente, desde cualquier dirección.',
        'Únicamente a los vehículos que vengan de frente al agente.',
        'Solo a los conductores que vengan por detrás del agente.'
      ],
      en: [
        'All road users approaching the officer, regardless of approach direction.',
        'Only vehicles approaching the officer from the front.',
        'Only drivers approaching the officer from behind.'
      ],
      ca: [
        'A tots els usuaris de la via que s’apropin a l’agent, des de qualsevol direcció.',
        'Únicament als vehicles que vinguin de cara a l’agent.',
        'Només als conductors que vinguin per darrere de l’agent.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El brazo alzado verticalmente por un agente impone la detención general a todos los usuarios que se acerquen a él, salvo a los que ya no puedan frenar con seguridad.',
      en: 'An officer’s vertically raised arm requires a general stop for all approaching users in every direction.',
      ca: 'El braç aixecat verticalment per un agent imposa la detenció general a tothom que s’hi acosti.'
    }
  },
  {
    id: 'vis-sgn-008',
    topicId: 'road-signs',
    question: {
      es: 'Un agente que extiende uno o ambos brazos horizontalmente obliga a detenerse a:',
      en: 'A traffic officer extending one or both arms horizontally requires who to stop?',
      ca: 'Un agent que estén un o dos braços horitzontalment obliga a aturar-se a:'
    },
    options: {
      es: [
        'A todos los usuarios que se aproximen cortando la dirección indicada por sus brazos (por delante y por detrás).',
        'A los usuarios que circulen en sentido paralelo a los brazos extendidos.',
        'Exclusivamente a los peatones y vehículos no motorizados.'
      ],
      en: [
        'All users approaching from directions that intersect the line formed by the arms (front and back).',
        'Users moving parallel to the line of the extended arms.',
        'Exclusively pedestrians and non-motorized vehicles.'
      ],
      ca: [
        'A tots els usuaris que s’apropin tallant la línia dels seus braços (per davant i per darrere).',
        'Als usuaris que circulin en sentit paral·lel als seus braços.',
        'Exclusivament a vianants.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los brazos en cruz obligan a parar a los vehículos que vienen de frente y por la espalda del agente. Los que vienen por sus costados pueden continuar.',
      en: 'Horizontally outstretched arms stop traffic approaching from the officer’s front and rear.',
      ca: 'Els braços en creu obliguen a aturar-se als vehicles que venen de cara i per l’esquena de l’agent.'
    }
  },
  {
    id: 'vis-sgn-009',
    topicId: 'road-signs',
    question: {
      es: '¿Qué significado tiene una señal circular con el fondo azul y una cifra blanca en su interior (ej. «30»)?',
      en: 'What does a blue circular sign with a white number inside (e.g., "30") mean?',
      ca: 'Quin significat té un senyal circular amb fons blau i una xifra blanca (ex. «30»)?'
    },
    options: {
      es: [
        'Obligación de circular como mínimo a la velocidad indicada (velocidad mínima obligatoria).',
        'Velocidad máxima recomendada.',
        'Prohibición de superar dicha velocidad.'
      ],
      en: [
        'Mandatory minimum speed: drivers must travel at least at that speed.',
        'Recommended advisory speed limit.',
        'Prohibition of exceeding that specific speed.'
      ],
      ca: [
        'Obligació de circular com a mínim a la velocitat indicada (velocitat mínima obligatòria).',
        'Velocitat màxima recomanada.',
        'Prohibició de superar aquesta velocitat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las señales circulares azules son de OBLIGACIÓN (R-406). Exigen circular al menos a la velocidad indicada, salvo que las circunstancias del tráfico no lo permitan.',
      en: 'Blue circular signs signify MANDATORY requirements (R-406), specifying a compulsory minimum travel speed.',
      ca: 'Els senyals circulars blaus indiquen OBLIGACIÓ (R-406): velocitat mínima obligatòria.'
    }
  },
  {
    id: 'vis-sgn-010',
    topicId: 'road-signs',
    question: {
      es: '¿Y qué significado tiene una señal cuadrada con fondo azul y un número blanco (ej. «70»)?',
      en: 'And what does a square blue sign with a white number (e.g., "70") indicate?',
      ca: 'I quin significat té un senyal quadrat amb fons blau i un número blanc (ex. «70»)?'
    },
    options: {
      es: [
        'Velocidad aconsejada o recomendada (S-7). No es una obligación ni una prohibición.',
        'Velocidad máxima absoluta obligatoria.',
        'Velocidad mínima exigida por carril.'
      ],
      en: [
        'Advisory recommended speed (S-7). It is neither a hard limit nor a mandate.',
        'Strict legal maximum speed ceiling.',
        'Compulsory minimum lane speed.'
      ],
      ca: [
        'Velocitat aconsellada o recomanada (S-7). No és ni obligació ni prohibició.',
        'Velocitat màxima obligatòria.',
        'Velocitat mínima exigida.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las señales cuadradas azules son informativas. La señal S-7 aconseja no rebasar esa velocidad durante el tramo, aunque no acarrea sanción directa respetando las condiciones.',
      en: 'Square blue signs are informational. Sign S-7 advises maintaining that speed under favorable conditions.',
      ca: 'Els senyals quadrats blaus són informatius: la S-7 aconsella una velocitat adequada.'
    }
  },
  {
    id: 'vis-sgn-011',
    topicId: 'road-signs',
    question: {
      es: 'En una cuadrícula de líneas amarillas cruzadas pintadas en el suelo de una intersección, ¿qué está prohibido?',
      en: 'In a yellow criss-cross box junction painted on the pavement, what is strictly prohibited?',
      ca: 'En una graella de línies grogues creuades pintades a terra en una intersecció, què està prohibit?'
    },
    options: {
      es: [
        'Entrar en ella si es previsible quedar detenido dentro bloqueando la circulación transversal.',
        'Circular por encima a velocidad superior a 30 km/h.',
        'Realizar cambios de dirección hacia la izquierda.'
      ],
      en: [
        'Entering if traffic ahead is backed up such that you would end up stranded, blocking cross traffic.',
        'Driving over it at speeds above 30 km/h.',
        'Making left turns across the junction.'
      ],
      ca: [
        'Entrar-hi si és previsible quedar-hi aturat bloquejant la circulació transversal.',
        'Circular per sobre a més de 30 km/h.',
        'Fer girs cap a l’esquerra.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La cuadrícula amarilla prohíbe entrar en el cruce aunque el semáforo esté verde si la fluidez del tráfico puede dejarnos inmovilizados en medio, colapsando la vía.',
      en: 'A yellow box junction forbids entering if congestion might leave your vehicle trapped inside blocking lateral traffic.',
      ca: 'La graella groga prohibeix entrar a la cruïlla si és probable quedar encallat bloquejant el pas d’altres vehicles.'
    }
  },
  {
    id: 'vis-sgn-012',
    topicId: 'road-signs',
    question: {
      es: 'Una flecha en el pavimento apuntando hacia la derecha pintada en un carril, ¿a qué obliga?',
      en: 'A directional arrow painted on the pavement pointing right obligates the driver to what?',
      ca: 'Una fletxa al paviment que apunta cap a la dreta en un carril, a què obliga?'
    },
    options: {
      es: [
        'A girar obligatoriamente a la derecha a todo conductor situado en ese carril en la próxima intersección.',
        'Advierte de que el carril terminará pronto hacia la derecha.',
        'Recomienda girar a la derecha solo al tráfico de transporte colectivo.'
      ],
      en: [
        'Mandatorily turn right at the next intersection for any driver positioned in that lane.',
        'Warns that the lane will merge or terminate soon to the right.',
        'Merely suggests right turns for public transit.'
      ],
      ca: [
        'A girar obligatòriament a la dreta a tot vehicle situat en aquest carril a la propera cruïlla.',
        'Avisa que el carril acabarà aviat cap a la dreta.',
        'Recomana girar a la dreta només al transport públic.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las flechas de carril o selección de carril imponen la obligación inexcusable de seguir la dirección o direcciones que indican.',
      en: 'Lane directional arrows make following the indicated direction mandatory at the approaching junction.',
      ca: 'Les fletxes de carril imposen l’obligació ineludible de seguir la direcció marcada.'
    }
  },
  {
    id: 'vis-sgn-013',
    topicId: 'road-signs',
    question: {
      es: '¿Qué indica una señal triangular con el borde rojo, fondo blanco y el pictograma de un ciervo o animal en salto?',
      en: 'What does a triangular warning sign with a red border and a jumping deer silhouette signify?',
      ca: 'Què indica un senyal triangular amb vora vermella, fons blanc i un cérvol saltant?'
    },
    options: {
      es: [
        'Peligro por la proximidad de un paso o lugar frecuentado por animales en libertad.',
        'Coto de caza donde está prohibido detenerse.',
        'Zona reservada exclusivamente para paso de ganado doméstico (cañada).'
      ],
      en: [
        'Danger due to proximity of a passage or area frequented by wild animals.',
        'Hunting ground where stopping is prohibited.',
        'Path reserved strictly for domesticated livestock (cañada).'
      ],
      ca: [
        'Perill per proximitat d’un tram freqüentat per animals en llibertat.',
        'Vedat de caça on està prohibit aturar-se.',
        'Pas exclusiu per a ramat domèstic.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal P-24 advierte del peligro por la posible presencia súbita en la calzada de animales salvajes o en libertad.',
      en: 'Warning sign P-24 alerts motorists to sections with high risk of wild fauna suddenly jumping onto the roadway.',
      ca: 'El senyal P-24 adverteix del perill per la presència d’animals salvatges a la calçada.'
    }
  },
  {
    id: 'vis-sgn-014',
    topicId: 'road-signs',
    question: {
      es: 'La nueva señal vertical redonda con un coche emitiendo partículas y una silueta circular discontinua (R-120), ¿qué restringe?',
      en: 'The round sign featuring a car emitting particulate exhaust inside a dashed ring (R-120) restricts what?',
      ca: 'El senyal rodó amb un cotxe expulsant partícules dins d’una línia discontínua (R-120), què restringeix?'
    },
    options: {
      es: [
        'El acceso a Zonas de Bajas Emisiones (ZBE) a vehículos que no dispongan del distintivo ambiental reglamentario.',
        'La circulación de camiones con humos negros.',
        'El uso del aire acondicionado dentro de la ciudad.'
      ],
      en: [
        'Access to Low Emission Zones (ZBE) for vehicles lacking required environmental classification badges.',
        'Circulation of heavy diesel trucks emitting smoke.',
        'Use of onboard vehicle air conditioning in downtown areas.'
      ],
      ca: [
        'L’accés a Zones de Baixes Emissions (ZBE) als vehicles sense el distintiu ambiental reglamentari.',
        'La circulació de camions que treguin fum.',
        'L’ús de l’aire condicionat al nucli urbà.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal R-120 delimita el inicio de las Zonas de Bajas Emisiones (ZBE), prohibiendo el acceso a vehículos no autorizados por su nivel de emisiones.',
      en: 'Sign R-120 marks boundaries of Low Emission Zones (ZBE), barring vehicles without permitted environmental tags.',
      ca: 'El senyal R-120 marca l’accés a les Zones de Baixes Emissions (ZBE), restringint el pas segons el distintiu mediambiental.'
    }
  },
  {
    id: 'vis-sgn-015',
    topicId: 'road-signs',
    question: {
      es: 'Una línea longitudinal continua de color blanco en el centro de la calzada:',
      en: 'A solid white longitudinal line painted down the middle of a roadway:',
      ca: 'Una línia longitudinal blanca contínua al mig de la calçada:'
    },
    options: {
      es: [
        'No debe ser atravesada ni pisada por ningún vehículo, salvo excepciones tasadas como rebasar ciclistas.',
        'Puede pisarse si la maniobra de adelantamiento se hace con rapidez.',
        'Solo prohíbe el paso a vehículos pesados.'
      ],
      en: [
        'Must not be crossed or stepped on by any vehicle, except specific exceptions like overtaking cyclists.',
        'Can be crossed provided overtaking is done swiftly.',
        'Only prohibits heavy vehicles from crossing.'
      ],
      ca: [
        'No pot ser travessada ni trepitjada per cap vehicle, tret d’excepcions com avançar ciclistes.',
        'Es pot trepitjar si l’avançament es fa de pressa.',
        'Només prohibeix creuar a vehicles pesants.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Una línea continua prohíbe ser rebasada. Como excepción reglamentaria de seguridad, se puede invadir para adelantar ciclistas guardando 1,5 metros.',
      en: 'A solid center line cannot be crossed, except when safely leaving 1.5 m while overtaking cyclists on open roads.',
      ca: 'Una línia contínua no es pot travessar, tret de maniobres excepcionals per avançar ciclistes amb seguretat.'
    }
  },
  {
    id: 'vis-sgn-016',
    topicId: 'road-signs',
    question: {
      es: 'Si junto a una línea longitudinal continua existe otra paralela discontinua, ¿qué línea debe tener en cuenta el conductor?',
      en: 'If a solid line runs parallel beside a dashed line, which line must the driver heed?',
      ca: 'Si al costat d’una línia contínua n’hi ha una altra de discontínua, quina línia ha de respectar el conductor?'
    },
    options: {
      es: [
        'Únicamente la línea que se encuentre situada más próxima al lado de su carril.',
        'Siempre la línea continua, por ser la más restrictiva.',
        'La discontinua, independientemente de la posición del vehículo.'
      ],
      en: [
        'Solely the line situated closest to the driver’s current travel lane.',
        'Always the continuous line, being more restrictive.',
        'The broken dashed line regardless of car position.'
      ],
      ca: [
        'Únicament la línia situada més pròxima al seu costat de circulació.',
        'Sempre la línia contínua per ser més restrictiva.',
        'La discontínua en tot cas.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Cuando hay dos líneas adosadas, el conductor solo debe obedecer a la que está de su lado. Si la más próxima es discontinua, puede adelantar.',
      en: 'When dual center lines exist, drivers obey the line closest to their side of the car.',
      ca: 'Davant dues línies adossades, el conductor només ha de respectar la que té al seu costat més proper.'
    }
  },
  {
    id: 'vis-sgn-017',
    topicId: 'road-signs',
    question: {
      es: 'Una señal circular de fondo azul con la silueta de un automóvil de frente (R-405), ¿qué impone?',
      en: 'A blue circular sign showing the front silhouette of a passenger car (R-405) imposes what?',
      ca: 'Un senyal circular de fons blau amb la silueta frontal d’un automòbil (R-405), què imposa?'
    },
    options: {
      es: [
        'Camino reservado exclusivamente para automóviles (salvo motocicletas de dos ruedas sin sidecar).',
        'Obligación de aparcar turismos en batería.',
        'Prohibición de circulación a camiones y autobuses.'
      ],
      en: [
        'Way reserved exclusively for automobiles (excluding two-wheeled solo motorcycles).',
        'Obligation for cars to park in angled bays.',
        'Prohibition of truck and bus traffic.'
      ],
      ca: [
        'Camí reservat exclusivament per a automòbils (excepte motos de dues rodes sense sidecar).',
        'Obligació d’estacionar turismes en bateria.',
        'Prohibició de circulació a camions.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal R-405 indica camino reservado para automóviles y obliga a sus conductores a circular por ella, prohibiendo el paso a los demás usuarios.',
      en: 'Sign R-405 denotes a path reserved strictly for automobiles, making its use mandatory and barring other users.',
      ca: 'El senyal R-405 obliga els automòbils a circular-hi i prohibeix l’accés a la resta d’usuaris.'
    }
  },
  {
    id: 'vis-sgn-018',
    topicId: 'road-signs',
    question: {
      es: '¿Qué significado tiene un semáforo con la silueta de una bicicleta en verde?',
      en: 'What does a traffic light displaying a bicycle silhouette in green mean?',
      ca: 'Quin significat té un semàfor amb la silueta d’una bicicleta en verd?'
    },
    options: {
      es: [
        'Autoriza el paso exclusivamente a ciclos y ciclomotores.',
        'Autoriza el paso a todos los vehículos de dos ruedas, incluidas motocicletas de gran cilindrada.',
        'Obliga a los coches a ceder el paso girando a la izquierda.'
      ],
      en: [
        'Authorizes passage exclusively for bicycles and mopeds (ciclomotores).',
        'Authorizes passage for all two-wheel vehicles including high-displacement motorbikes.',
        'Instructs cars to give way during left turns.'
      ],
      ca: [
        'Autoritza el pas exclusivament a cicles i ciclomotors.',
        'Autoritza el pas a totes les motos de gran cilindrada.',
        'Obliga els cotxes a girar a l’esquerra.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los semáforos para ciclos afectan únicamente a bicicletas y ciclomotores, autorizando su cruce exclusivo.',
      en: 'Cycle traffic signals regulate and grant passage solely to cycles and mopeds.',
      ca: 'Els semàfors per a cicles regulen i autoritzen el pas únicament a bicicletes i ciclomotors.'
    }
  },
  {
    id: 'vis-sgn-019',
    topicId: 'road-signs',
    question: {
      es: 'Un panel de mensaje variable en autopista muestra un aspa roja luminosa sobre su carril. ¿Qué indica?',
      en: 'An overhead variable sign over your lane displays an illuminated red X. What does it signify?',
      ca: 'Un plafó lluminós sobre el vostre carril mostra una creu vermella en aspa. Què indica?'
    },
    options: {
      es: [
        'Que el carril está cerrado al tráfico y debe abandonarse lo antes posible con seguridad.',
        'Peligro por obras en los próximos 10 kilómetros.',
        'Que es obligatorio reducir la velocidad a 60 km/h.'
      ],
      en: [
        'The lane is closed to traffic; you must safely vacate it as soon as possible.',
        'Danger due to roadwork in the next 10 km.',
        'Mandatory speed reduction to 60 km/h.'
      ],
      ca: [
        'Que el carril està tancat al trànsit i s’ha d’abandonar al més aviat possible amb seguretat.',
        'Perill per obres en els propers 10 km.',
        'Obligació de reduir a 60 km/h.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El aspa roja sobre un carril prohíbe la ocupación de dicho carril; el conductor debe cambiar de carril de inmediato respetando las normas de prioridad.',
      en: 'A lane red cross forbids using that lane; you must merge into an open adjacent lane safely.',
      ca: 'L’aspa vermella prohibeix circular pel carril indicat; cal desviar-se a un carril obert amb seguretat.'
    }
  },
  {
    id: 'vis-sgn-020',
    topicId: 'road-signs',
    question: {
      es: 'Una flecha oblicua apuntando hacia abajo en un pórtico luminoso de carril, ¿qué indica?',
      en: 'An illuminated downward-angled diagonal arrow above your highway lane instructs you to do what?',
      ca: 'Una fletxa obliqua apuntant cap avall en un pòrtic lluminós de carril, què indica?'
    },
    options: {
      es: [
        'Que el carril va a quedar cerrado próximamente y se debe cambiar al carril indicado por la flecha.',
        'Obligación de salir de la autopista en la siguiente salida.',
        'Autorización para superar la velocidad máxima en ese carril.'
      ],
      en: [
        'The lane will soon terminate/close; you must merge toward the lane indicated by the arrow.',
        'Mandatory motorway exit at the approaching slip road.',
        'Permission to exceed maximum speed within that lane.'
      ],
      ca: [
        'Que el carril quedarà tancat properament i cal canviar cap al carril indicat.',
        'Obligació d’abandonar l’autopista a la propera sortida.',
        'Permís per superar la velocitat màxima.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La flecha luminosa diagonal o inclinada advierte del fin inminente del carril y ordena incorporarse al carril contiguo hacia donde apunta.',
      en: 'A diagonal lane arrow instructs motorists to begin moving over because their current lane will be closing.',
      ca: 'La fletxa inclinada adverteix del tancament imminent del carril i ordena canviar de carril cap a la direcció que assenyala.'
    }
  },
  {
    id: 'vis-sgn-021',
    topicId: 'road-signs',
    question: {
      es: '¿Qué significa una señal triangular con el símbolo de exclamación («!») en su interior (P-50)?',
      en: 'What does a triangular warning sign with an exclamation point inside (P-50) indicate?',
      ca: 'Què significa un senyal triangular d’advertència amb un signe d’exclamació («!») a dins (P-50)?'
    },
    options: {
      es: [
        'Peligro por otros riesgos no especificados en el catálogo general de señales.',
        'Fin de todas las prohibiciones anteriores.',
        'Obligación de tocar el claxon.'
      ],
      en: [
        'Danger due to miscellaneous generic hazards not represented by a dedicated pictogram.',
        'End of all previous prohibitions.',
        'Obligation to sound the horn.'
      ],
      ca: [
        'Perill per altres riscos indeterminats no tipificats expressament.',
        'Fi de totes les prohibicions anteriors.',
        'Obligació de tocar el clàxon.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal P-50 advierte de la proximidad de un peligro distinto de los contemplados en las demás señales de advertencia (suele complementarse con un panel inferior).',
      en: 'Sign P-50 warns of other undefined hazards on the upcoming road stretch, usually paired with an explanatory sub-plate.',
      ca: 'El senyal P-50 alerta d’altres perills no previstos en la resta de senyals triangulars.'
    }
  },
  {
    id: 'vis-sgn-022',
    topicId: 'road-signs',
    question: {
      es: 'Una línea blanca transversal discontinua pintada a través de un carril indica:',
      en: 'A transverse broken (dashed) white line painted across a lane indicates:',
      ca: 'Una línia blanca transversal discontínua pintada a través del carril indica:'
    },
    options: {
      es: [
        'Lugar de detención en caso de tener que ceder el paso ante un semáforo, ceda o señal.',
        'Obligación de detenerse siempre como si fuera un STOP.',
        'Zona reservada para estacionamiento en línea.'
      ],
      en: [
        'Position to stop only if required to yield by a traffic light, Yield sign, or priority rule.',
        'Mandatory full stop under all circumstances like a STOP sign.',
        'Area marked out exclusively for parallel parking.'
      ],
      ca: [
        'Punt de detenció només en cas d’haver de cedir el pas per semàfor, cedeixi o prioritat.',
        'Obligació d’aturar-se sempre com si fos un STOP.',
        'Zona reservada per aparcar.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La línea transversal discontinua no exige parar por sí misma; solo marca la posición límite donde detenerse cuando sea necesario ceder el paso.',
      en: 'A broken transverse line does not require a stop on its own; it designates the stopping boundary when yielding is required.',
      ca: 'La línia transversal discontínua no obliga a aturar-se d’ofici; marca la posició on aturar-se en cas d’haver de cedir el pas.'
    }
  },
  {
    id: 'vis-sgn-023',
    topicId: 'road-signs',
    question: {
      es: '¿Qué prohíbe una señal circular blanca con borde rojo y el dibujo de dos turismos en paralelo (uno rojo y otro negro, R-305)?',
      en: 'What is prohibited by a round sign with a red border showing two cars side by side (one red, one black, R-305)?',
      ca: 'Què prohibeix un senyal circular blanc amb vora vermella i dos turismes en paral·lel (un vermell i un negre, R-305)?'
    },
    options: {
      es: [
        'Adelantar a vehículos de motor que circulen por la calzada, salvo motocicletas de dos ruedas sin sidecar.',
        'Adelantar únicamente a camiones y autobuses.',
        'Circular en paralelo dos vehículos por el mismo carril.'
      ],
      en: [
        'Overtaking motor vehicles, except two-wheeled solo motorcycles without sidecar.',
        'Overtaking heavy trucks and buses only.',
        'Driving side by side in the same lane.'
      ],
      ca: [
        'Avançar vehicles de motor que circulin per la calçada, tret de motos de dues rodes sense sidecar.',
        'Avançar camions i autobusos únicament.',
        'Circular dos cotxes en paral·lel pel mateix carril.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal R-305 prohíbe adelantar a vehículos de motor. Sin embargo, permite adelantar expresamente a motocicletas de 2 ruedas siempre que no se invada el sentido contrario.',
      en: 'Sign R-305 forbids overtaking motor vehicles, though two-wheeled solo motorcycles may be overtaken without entering opposing lanes.',
      ca: 'El senyal R-305 prohibeix avançar vehicles de motor, permetent avançar motocicletes de dues rodes sense envair el sentit contrari.'
    }
  },
  {
    id: 'vis-sgn-024',
    topicId: 'road-signs',
    question: {
      es: 'Una señal redonda azul con la silueta de un peatón caminando en blanco (R-410), ¿qué significa?',
      en: 'A round blue sign with a white pedestrian silhouette (R-410) means what?',
      ca: 'Un senyal rodó blau amb la silueta blanca d’un vianant (R-410), què significa?'
    },
    options: {
      es: [
        'Camino reservado exclusivamente para peatones, prohibida la entrada a todo tipo de vehículos.',
        'Paso de peatones próximo con prioridad para automóviles.',
        'Zona de juegos compartida con turismos.'
      ],
      en: [
        'Path reserved exclusively for pedestrians; entry prohibited to all vehicular traffic.',
        'Approaching pedestrian crossing with priority for motorcars.',
        'Shared residential playground open to low-speed cars.'
      ],
      ca: [
        'Camí reservat exclusivament per a vianants; prohibit el pas a tot tipus de vehicles.',
        'Pas de vianants proper amb prioritat per a turismes.',
        'Zona de jocs compartida.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Al ser circular azul, la R-410 es de obligación: camino reservado para peatones, quedando vetado cualquier vehículo a motor o bicicleta.',
      en: 'As a blue round sign, R-410 is mandatory for pedestrians and bars all vehicle traffic.',
      ca: 'En ser rodó blau és d’obligació: pas exclusiu per a vianants, vetat a qualsevol vehicle.'
    }
  },
  {
    id: 'vis-sgn-025',
    topicId: 'road-signs',
    question: {
      es: '¿Qué indica una señal de peligro con fondo amarillo instalada en la carretera?',
      en: 'What does a warning sign with a yellow background placed on the road denote?',
      ca: 'Què indica un senyal de perill amb fons groc instal·lat a la via?'
    },
    options: {
      es: [
        'Señalización circunstancial temporal originada por la existencia de obras en la vía.',
        'Peligro meteorológico exclusivo por niebla o nieve.',
        'Tramo de concentración de accidentes en fin de semana.'
      ],
      en: [
        'Temporary roadwork signage due to maintenance operations or construction on the road.',
        'Exclusively meteorological hazard like heavy snow or fog.',
        'High accident blackspot active only on weekends.'
      ],
      ca: [
        'Senyalització circumstancial temporal originada per la presència d’obres a la via.',
        'Perill meteorològic exclusiu de boira o neu.',
        'Punt negre de sinistralitat en cap de setmana.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las señales con fondo amarillo tienen el mismo significado que las ordinarias, pero advierten de que su aplicación es provisional debido a obras.',
      en: 'Yellow background signs share the standard regulatory meaning while notifying drivers that conditions are altered by roadworks.',
      ca: 'Els senyals amb fons groc tenen la mateixa validesa que els normals, però indiquen condicions provisionals per obres.'
    }
  }
];