import { Question } from '@/types';

export const MANEUVER_QUESTIONS: Question[] = [
  {
    id: 'man-001',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al adelantar a un ciclista en una vía fuera de poblado, ¿qué distancia lateral mínima de seguridad se debe dejar?',
      en: 'When overtaking a cyclist on a road outside built-up areas, what is the minimum lateral safety distance required?',
      ca: 'En avançar un ciclista en una via fora de poblat, quina distància lateral mínima de seguretat s’ha de deixar?'
    },
    options: {
      es: [
        '1,5 metros, pudiendo ocupar parte o la totalidad del carril contiguo.',
        '1 metro exclusivamente dentro de tu propio carril.',
        'No existe distancia reglamentada, solo reducir velocidad.'
      ],
      en: [
        '1.5 meters, being permitted to occupy part or all of the adjacent lane.',
        '1 meter strictly remaining inside your own lane.',
        'There is no regulated distance, only a speed reduction is needed.'
      ],
      ca: [
        '1,5 metres, podent ocupar part o la totalitat del carril contigu.',
        '1 metre exclusivament dins del teu propi carril.',
        'No hi ha distància reglamentada, només reduir velocitat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Es obligatorio dejar al menos 1,5 metros de separación lateral e invadir completa o parcialmente el carril contiguo si hay más de uno por sentido.',
      en: 'It is mandatory to leave at least 1.5 meters lateral clearance and occupy the adjacent lane completely or partially when available.',
      ca: 'És obligatori deixar almenys 1,5 metres de separació lateral i envair completa o parcialment el carril contigu.'
    }
  },
  {
    id: 'man-002',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Cuál es la distancia máxima permitida para circular marcha atrás como maniobra complementaria de parada o estacionamiento?',
      en: 'What is the maximum permitted distance to reverse as a complementary maneuver for stopping or parking?',
      ca: 'Quina és la distància màxima permesa per circular marxa enrere com a maniobra complementària de parada o estacionament?'
    },
    options: {
      es: [
        '15 metros, sin invadir nunca una intersección de vías.',
        '25 metros en cualquier circunstancia.',
        'No hay límite de distancia mientras no haya peatones detrás.'
      ],
      en: [
        '15 meters, and never invading a street intersection.',
        '25 meters under all circumstances.',
        'There is no distance limit provided no pedestrians are behind.'
      ],
      ca: [
        '15 metres, sense envair mai una intersecció de vies.',
        '25 metres en qualsevol circumstància.',
        'No hi ha límit de distància mentre no hi hagi vianants darrere.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La maniobra de marcha atrás no puede superar los 15 metros de recorrido ni invadir ningún cruce de vías.',
      en: 'Reversing maneuvers cannot exceed 15 meters and cannot enter or cross any intersection.',
      ca: 'La maniobra de marxa enrere no pot superar els 15 metres de recorregut ni envair cap encreuament de vies.'
    }
  },
  {
    id: 'man-003',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'En una autopista con tres carriles para el mismo sentido, ¿por cuál se debe circular por norma general?',
      en: 'On a motorway with three lanes in the same direction, which lane should you normally drive in?',
      ca: 'En una autopista amb tres carrils pel mateix sentit, per quin s’ha de circular per norma general?'
    },
    options: {
      es: [
        'Por el carril situado más a la derecha.',
        'Por el carril central si no hay tráfico denso.',
        'Por cualquiera de los tres libremente.'
      ],
      en: [
        'In the lane furthest to the right.',
        'In the middle lane if traffic is not heavy.',
        'Freely in any of the three lanes.'
      ],
      ca: [
        'Pel carril situat més a la dreta.',
        'Pel carril central si no hi ha trànsit dens.',
        'Per qualsevol dels tres lliurement.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Como norma general fuera de poblado, se circula por el carril de la derecha; los demás se usan solo para adelantar o facilitar el tráfico.',
      en: 'As a general rule outside urban areas, drivers must keep to the right lane; other lanes are strictly for overtaking.',
      ca: 'Com a norma general fora de poblat, es circula pel carril de la dreta; els altres s’utilitzen només per avançar.'
    }
  },
  {
    id: 'man-004',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Quién tiene permitido circular por un carril habilitado en sentido contrario al habitual por motivos de fluidez?',
      en: 'Who is allowed to drive in a lane opened in the opposite direction of regular traffic for congestion relief?',
      ca: 'Qui té permès circular per un carril habilitat en sentit contrari a l’habitual per motius de fluïdesa?'
    },
    options: {
      es: [
        'Únicamente turismos sin remolque y motocicletas.',
        'Todos los vehículos sin distinción.',
        'Vehículos de transporte de mercancías y autobuses.'
      ],
      en: [
        'Exclusively passenger cars without trailers and motorcycles.',
        'All vehicles without distinction.',
        'Freight transport vehicles and buses.'
      ],
      ca: [
        'Únicament turismes sense remolc i motocicletes.',
        'Tots els vehicles sense distinció.',
        'Vehicles de transport de mercaderies i autobusos.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Por motivos de fluidez, solo pueden entrar turismos (sin remolque) y motos. Deben llevar encendida la luz de cruce día y noche y circular entre 60 y 80 km/h.',
      en: 'For congestion relief, only cars without trailers and motorcycles may use it. Low beams are required at all times and speeds must stay between 60–80 km/h.',
      ca: 'Per motius de fluïdesa, només hi poden entrar turismes (sense remolc) i motos, amb llums de creuament encesos i a 60-80 km/h.'
    }
  },
  {
    id: 'man-005',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Si un carril en sentido contrario al habitual se habilita por motivos de obras en la calzada, ¿qué vehículos pueden utilizarlo?',
      en: 'If a lane is opened in the reverse direction specifically due to roadworks, which vehicles may use it?',
      ca: 'Si un carril en sentit contrari a l’habitual s’habilita per obres, quins vehicles el poden utilitzar?'
    },
    options: {
      es: [
        'Todos los vehículos autorizados a circular por la vía, salvo prohibición expresa.',
        'Únicamente turismos sin remolque.',
        'Solo camiones y maquinaria de obras.'
      ],
      en: [
        'All vehicles legally authorized to use the road, unless expressly prohibited.',
        'Only passenger cars without trailers.',
        'Only heavy trucks and construction machinery.'
      ],
      ca: [
        'Tots els vehicles autoritzats a circular per la via, llevat de prohibició expressa.',
        'Únicament turismes sense remolc.',
        'Només camions i maquinària d’obres.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Cuando se abre por obras, pueden usarlo todos los vehículos autorizados (incluidos camiones), a diferencia de cuando se abre por fluidez donde solo entran turismos y motos.',
      en: 'When opened due to road construction, all road-legal vehicles may enter, unlike congestion lanes which exclude commercial vehicles.',
      ca: 'Quan s’obre per obres hi poden circular tots els vehicles autoritzats, a diferència de quan s’obre per fluïdesa.'
    }
  },
  {
    id: 'man-006',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'En un carril reversible delimitado por líneas dobles discontinuas, ¿qué obligación impone la normativa de alumbrado?',
      en: 'In a reversible lane bounded by double broken lines, what lighting requirement applies?',
      ca: 'En un carril reversible delimitat per línies dobles discontínues, quina obligació d’enllumenat s’imposa?'
    },
    options: {
      es: [
        'Llevar encendida la luz de cruce tanto de día como de noche.',
        'Encender únicamente las luces de posición durante el día.',
        'No es obligatorio encender ningún alumbrado si es de día.'
      ],
      en: [
        'Keep dipped (low beam) headlights on both during the day and night.',
        'Turn on position lights only during daytime.',
        'No lights are required during clear daytime hours.'
      ],
      ca: [
        'Portar encès el llum de creuament tant de dia com de nit.',
        'Encendre només els llums de posició durant el dia.',
        'No cal encendre cap llum si és de dia.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En los carriles reversibles es obligatorio circular siempre con el alumbrado de corto alcance (cruce) encendido, de día y de noche.',
      en: 'In reversible lanes, low beam headlights are compulsory at all times, day and night.',
      ca: 'Als carrils reversibles és obligatori portar sempre la llum de creuament encesa, dia i nit.'
    }
  },
  {
    id: 'man-007',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Quién puede circular por un carril reservado para Vehículos de Alta Ocupación (VAO)?',
      en: 'Who is authorized to travel in a High-Occupancy Vehicle (HOV / VAO) lane?',
      ca: 'Qui pot circular per un carril reservat per a Vehicles d’Alta Ocupació (VAO)?'
    },
    options: {
      es: [
        'Turismos y vehículos mixtos con el número mínimo de ocupantes fijado, motocicletas, autobuses y vehículos con etiqueta CERO emisiones.',
        'Cualquier turismo que arrastre un remolque de carga.',
        'Camiones de más de 3.500 kg de MMA.'
      ],
      en: [
        'Cars and mixed vehicles meeting minimum occupancy thresholds, motorcycles, buses, and ZERO emission badge vehicles.',
        'Any passenger car towing a cargo trailer.',
        'Trucks exceeding 3,500 kg GVWR.'
      ],
      ca: [
        'Turismes i vehicles mixtos amb el nombre mínim d’ocupants fixat, motos, autobusos i vehicles amb etiqueta ZERO emissions.',
        'Qualsevol turisme amb remolc.',
        'Camions de més de 3.500 kg.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El carril VAO está pensado para turismos con ocupantes, autobuses, motos y coches CERO emisiones (incluso con un solo ocupante). Los camiones y remolques están prohibidos.',
      en: 'HOV lanes are intended for passenger vehicles with required occupancy, transit buses, motorcycles, and solo ZERO badge EVs. Trucks and towed trailers are barred.',
      ca: 'El carril VAO s’adreça a turismes amb passatgers, autobusos, motos i cotxes ZERO. Remolcs i camions no hi poden accedir.'
    }
  },
  {
    id: 'man-008',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Está permitido dar marcha atrás en autopistas o autovías si se pasa una salida?',
      en: 'Is reversing permitted on motorways or dual carriageways if you miss an exit?',
      ca: 'Està permès fer marxa enrere en autopistes o autovies si es passa una sortida?'
    },
    options: {
      es: [
        'No, la maniobra de marcha atrás está terminantemente prohibida en autopistas y autovías.',
        'Sí, siempre que no se superen los 15 metros de recorrido por el arcén.',
        'Sí, utilizando las luces de emergencia.'
      ],
      en: [
        'No, reversing is strictly prohibited on motorways and dual carriageways.',
        'Yes, provided you do not exceed 15 meters on the hard shoulder.',
        'Yes, provided emergency hazard lights are activated.'
      ],
      ca: [
        'No, la marxa enrere està terminantment prohibida en autopistes i autovies.',
        'Sí, sempre que no se superin els 15 metres de recorregut pel voral.',
        'Sí, utilitzant els llums d’emergència.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La maniobra de marcha atrás está totalmente prohibida en autopistas y autovías bajo cualquier circunstancia; debe continuarse hasta el siguiente enlace.',
      en: 'Reversing is completely forbidden on motorways under all circumstances; you must continue forward to the next junction.',
      ca: 'Fer marxa enrere està totalment prohibit a autopistes i autovies; cal continuar fins a la següent sortida.'
    }
  },
  {
    id: 'man-009',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Cuál es la diferencia legal entre «parada» y «estacionamiento»?',
      en: 'What is the legal difference between "stopping" (parada) and "parking" (estacionamiento)?',
      ca: 'Quina és la diferència legal entre «parada» i «estacionament»?'
    },
    options: {
      es: [
        'La parada dura menos de dos minutos sin que el conductor abandone el vehículo.',
        'La parada solo puede hacerse de noche; el estacionamiento de día.',
        'La parada requiere apagar el motor siempre.'
      ],
      en: [
        'Stopping lasts under two minutes without the driver leaving the vehicle.',
        'Stopping is only done at night; parking during daylight.',
        'Stopping always requires switching off the engine.'
      ],
      ca: [
        'La parada dura menys de dos minuts sense que el conductor abandoni el vehicle.',
        'La parada només es fa de nit; l’estacionament de dia.',
        'La parada requereix apagar el motor sempre.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Una parada es una inmovilización por tiempo inferior a 2 minutos sin que el conductor abandone el vehículo. Si supera los 2 minutos o el conductor se marcha, es estacionamiento.',
      en: 'A stop is an immobilization under 2 minutes without the driver leaving the vehicle. If it exceeds 2 minutes or the driver walks away, it becomes parking.',
      ca: 'Una parada dura menys de dos minuts sense que el conductor marxi del vehicle. Si supera els 2 minuts és estacionament.'
    }
  },
  {
    id: 'man-010',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Está permitido adelantar por la derecha en vías urbanas con varios carriles delimitados para el mismo sentido?',
      en: 'Is overtaking on the right permitted on urban streets with multiple marked lanes for the same direction?',
      ca: 'Està permès avançar per la dreta en vies urbanes amb diversos carrils delimitats per al mateix sentit?'
    },
    options: {
      es: [
        'Sí, en poblado con carriles delimitados se puede rebasar o circular por la derecha sin que constituya infracción.',
        'No, en España siempre es obligatorio adelantar por la izquierda en cualquier vía.',
        'Solo si el vehículo que precede lleva encendidas las luces de avería.'
      ],
      en: [
        'Yes, on urban roads with marked lanes, passing on the right is permitted.',
        'No, overtaking on the right is strictly forbidden on all Spanish roads.',
        'Only if the vehicle ahead has hazard flashers turned on.'
      ],
      ca: [
        'Sí, en poblat amb carrils delimitats es pot avançar o circular per la dreta.',
        'No, a Espanya sempre és obligatori avançar per l’esquerra.',
        'Només si el vehicle de davant porta els llums d’avaria.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En vías urbanas con calzadas de dos o más carriles delimitados en el mismo sentido, se permite circular por el carril que mejor convenga al destino y rebasar por la derecha.',
      en: 'In urban traffic with two or more marked lanes in the same direction, choosing the lane best suited to your destination and passing on the right is permitted.',
      ca: 'En vies urbanes amb dos o més carrils delimitats pel mateix sentit, està permès circular pel carril més convenient i avançar per la dreta.'
    }
  },
  {
    id: 'man-011',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al realizar un cambio de sentido de la marcha (giro de 180º), ¿dónde está terminantemente prohibido llevarlo a cabo?',
      en: 'When executing a U-turn (180-degree turn), where is it strictly forbidden?',
      ca: 'En realitzar un canvi de sentit de la marxa, on està totalment prohibit dur-lo a terme?'
    },
    options: {
      es: [
        'En pasos a nivel, túneles, tramos con visibilidad reducida y en autopistas o autovías salvo pasos a distinto nivel.',
        'En cualquier calle de un solo sentido aunque esté señalizado.',
        'En avenidas anchas de doble sentido con línea discontinua.'
      ],
      en: [
        'At railway level crossings, tunnels, sections with reduced visibility, and on motorways except at grade-separated junctions.',
        'In one-way streets even when signed.',
        'Along wide two-way avenues with dashed centerlines.'
      ],
      ca: [
        'En passos a nivell, túnels, trams de visibilitat reduïda i a autopistes llevat de passos a diferent nivell.',
        'En carrers d’un sol sentit senyalitzats.',
        'En avingudes amples amb línia discontínua.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El cambio de sentido está prohibido en pasos de peatones, pasos a nivel, túneles, curvas sin visibilidad y en calzadas de autopista salvo en las salidas autorizadas.',
      en: 'U-turns are illegal on pedestrian crossings, level crossings, tunnels, blind curves, and open motorways except via designated flyover exits.',
      ca: 'El canvi de sentit està prohibit a passos de vianants, passos a nivell, túnels, corbes sense visibilitat i autopistes.'
    }
  },
  {
    id: 'man-012',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Se puede adelantar por la derecha a un vehículo que indica claramente su intención de girar a la izquierda?',
      en: 'May you overtake on the right a vehicle clearly signalling its intention to turn left?',
      ca: 'Es pot avançar per la dreta un vehicle que indica clarament que girarà cap a l’esquerra?'
    },
    options: {
      es: [
        'Sí, siempre que exista espacio suficiente y la maniobra pueda realizarse con total seguridad.',
        'No, el adelantamiento por la derecha está siempre vetado fuera de poblado.',
        'Solo si el vehículo que gira es un tractor agrícola.'
      ],
      en: [
        'Yes, provided there is adequate room and the maneuver can be completed safely.',
        'No, overtaking on the right is unconditionally forbidden outside cities.',
        'Only if the turning vehicle is a slow farm tractor.'
      ],
      ca: [
        'Sí, sempre que hi hagi espai suficient i la maniobra sigui segura.',
        'No, avançar per la dreta està sempre prohibit fora de poblat.',
        'Només si el vehicle que gira és un tractor.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Es una de las excepciones reglamentarias: si un vehículo va a cambiar de dirección a la izquierda o parar a ese lado, se le puede adelantar por la derecha.',
      en: 'This is an official statutory exception: vehicles signalling a left turn or stopping on that side may be overtaken on their right side.',
      ca: 'És una excepció reglamentària: si un cotxe indica gir a l’esquerra, se’l pot avançar per la dreta si hi ha espai segur.'
    }
  },
  {
    id: 'man-013',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'En una curva de visibilidad reducida en carretera convencional, ¿se puede adelantar si no se invade el sentido contrario?',
      en: 'On a blind curve on a conventional road, may you overtake if you do not invade the opposing lane?',
      ca: 'En una corba de visibilitat reduïda, es pot avançar si no s’envaeix el sentit contrari?'
    },
    options: {
      es: [
        'Sí, está permitido si hay dos carriles para el mismo sentido y la maniobra se realiza sin rebasar las marcas longitudinales continuas.',
        'No, en las curvas sin visibilidad el adelantamiento está prohibido en todos los casos.',
        'Solo se permite a vehículos de dos ruedas.'
      ],
      en: [
        'Yes, it is permitted if two lanes travel in the same direction and you stay completely within marked boundaries.',
        'No, overtaking on blind curves is banned under all possible configurations.',
        'Only two-wheeled vehicles are allowed to do so.'
      ],
      ca: [
        'Sí, està permès si hi ha dos carrils pel mateix sentit i no s’envaeix el carril contrari ni la línia contínua.',
        'No, en corbes sense visibilitat està prohibit en qualsevol cas.',
        'Només es permet a motocicletes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En curvas sin visibilidad se prohíbe invadir el sentido contrario; si la vía dispone de varios carriles en nuestro sentido delimitados, sí es legal adelantar.',
      en: 'In blind curves invading oncoming traffic is forbidden; however, if your direction features multiple marked lanes, overtaking within them is legal.',
      ca: 'En corbes cegues es prohibeix envair el sentit contrari; si hi ha diversos carrils pel nostre sentit, sí es pot avançar.'
    }
  },
  {
    id: 'man-014',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Con cuánta antelación debe señalizarse una maniobra con los intermitentes luminosos?',
      en: 'How far in advance must a maneuver be signalled with the direction turn indicators?',
      ca: 'Amb quanta antelació s’ha de senyalitzar una maniobra amb els intermitents?'
    },
    options: {
      es: [
        'Con suficiente antelación para que sea percibida por los demás usuarios antes de iniciar el desplazamiento lateral.',
        'Justo en el instante preciso en que se gira el volante.',
        'Únicamente 2 segundos antes en vías rápidas.'
      ],
      en: [
        'With sufficient advance warning to be perceived by other road users before initiating sideways movement.',
        'At the exact moment the steering wheel begins turning.',
        'Strictly 2 seconds beforehand on expressways.'
      ],
      ca: [
        'Amb prou antelació perquè sigui advertida pels altres usuaris abans d’iniciar el desplaçament lateral.',
        'En el mateix instant en què es gira el volant.',
        'Només 2 segons abans a vies ràpides.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señalización debe efectuarse con antelación suficiente a la iniciación de la maniobra, manteniéndose activa durante el desplazamiento y apagándose al finalizarlo.',
      en: 'Signalling must precede the maneuver with ample notice, stay on while shifting across lanes, and be cancelled upon completion.',
      ca: 'Cal avisar amb prou marge abans d’iniciar el moviment, mantenir l’intermitent durant el desplaçament i apagar-lo un cop finalitzat.'
    }
  },
  {
    id: 'man-015',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al incorporarse a la circulación desde una parada en el arcén, ¿qué regla básica de seguridad se debe seguir (RSM)?',
      en: 'When merging into traffic from a roadside stop, what fundamental safety sequence must you follow (RSM)?',
      ca: 'En incorporar-se a la circulació des del voral, quina regla bàsica de seguretat cal seguir (RSM)?'
    },
    options: {
      es: [
        'Retrovisor, Señalización y Maniobra.',
        'Rapidez, Seguridad y Marcha.',
        'Reducción, Señal y Movimiento.'
      ],
      en: [
        'Rearview mirrors, Signalling, and Maneuver.',
        'Rapidity, Safety, and Motion.',
        'Reduction, Signal, and Movement.'
      ],
      ca: [
        'Retrovisor, Senyalització i Maniobra.',
        'Rapidesa, Seguretat i Marxa.',
        'Reducció, Senyal i Moviment.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La regla RSM es el estándar de la DGT para cualquier maniobra: primero observar por los retrovisores, después señalizar la intención y finalmente ejecutar la maniobra de forma segura.',
      en: 'The RSM rule is the core DGT safety framework: check Mirrors, Signal your intent, and execute the Maneuver safely.',
      ca: 'La regla RSM és la pauta oficial: primer observar pels Retrovisors, després Senyalitzar i finalment executar la Maniobra.'
    }
  },
  {
    id: 'man-016',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Puede un vehículo adelantar a otro en un paso de peatones señalizado?',
      en: 'Can a vehicle overtake another at a marked pedestrian crossing?',
      ca: 'Pot un vehicle avançar-ne un altre en un pas de vianants senyalitzat?'
    },
    options: {
      es: [
        'Por norma general no, salvo que se haga a velocidad tan reducida que permita detenerse a tiempo si surge un peatón.',
        'Sí, siempre que no haya peatones esperando en la acera.',
        'Sí, si la maniobra se completa tocando el claxon.'
      ],
      en: [
        'Generally no, unless conducted at a speed so slow that you can stop instantly if a pedestrian appears.',
        'Yes, as long as no pedestrian is waiting on the sidewalk.',
        'Yes, if the maneuver is signaled with the horn.'
      ],
      ca: [
        'Com a norma general no, llevat que es faci a una velocitat tan reduïda que permeti aturar-se a temps si apareix un vianant.',
        'Sí, sempre que no hi hagi vianants a la vorera.',
        'Sí, si es fa tocant el clàxon.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En los pasos para peatones el adelantamiento está prohibido por regla general; la única excepción es realizarlo a velocidad ultra reducida que garantice la detención inmediata.',
      en: 'Overtaking across zebra crossings is strictly banned, except when traveling so slowly that the vehicle can stop immediately if someone steps out.',
      ca: 'Als passos de vianants està prohibit avançar, tret que es faci a velocitat molt reduïda que permeti aturar-se a l’acte.'
    }
  },
  {
    id: 'man-017',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Si un vehículo circula a velocidad anormalmente reducida en una vía con dos sentidos y no puede ser adelantado con facilidad, ¿qué debe hacer?',
      en: 'If a vehicle travels abnormally slow on a two-way road and cannot easily be overtaken, what must its driver do?',
      ca: 'Si un vehicle circula a velocitat anormalment reduïda en via de dos sentits i no pot ser avançat fàcilment, què ha de fer?'
    },
    options: {
      es: [
        'Arrimarse al borde derecho de la calzada o arcén y detenerse si es necesario para facilitar el paso a los vehículos que le siguen.',
        'Acelerar bruscamente para alejarse del pelotón.',
        'Continuar por el centro del carril ignorando las retenciones.'
      ],
      en: [
        'Pull over to the right shoulder and stop if necessary to allow queued following traffic to pass.',
        'Accelerate hard to break away from the queue.',
        'Hold the center of the lane ignoring tailbacks.'
      ],
      ca: [
        'Arraconar-se al marge dret o voral i aturar-se si cal per facilitar el pas a les cues que el segueixen.',
        'Accelerar bruscament per fugir.',
        'Seguir pel mig del carril ignorant el trànsit.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los conductores de vehículos lentos o pesados que generen retención deben arrimarse al arcén o detenerse en apartaderos para permitir el adelantamiento.',
      en: 'Drivers of abnormally slow or bulky vehicles generating a backlog must pull onto the shoulder or bays to clear traffic flow.',
      ca: 'Els vehicles lents que generin retencions tenen l’obligació d’arraconar-se al voral o apartadors per deixar passar.'
    }
  },
  {
    id: 'man-018',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al entrar en un carril de deceleración para abandonar una autovía, ¿dónde debe frenarse el vehículo?',
      en: 'When entering a deceleration lane to exit a motorway, where should braking take place?',
      ca: 'En entrar en un carril de desacceleració per sortir d’una autovia, on s’ha de frenar el vehicle?'
    },
    options: {
      es: [
        'Dentro del propio carril de deceleración, tras haber entrado a la velocidad de la calzada principal.',
        'En la calzada principal antes de entrar al carril de deceleración.',
        'Únicamente al final de la rampa de salida.'
      ],
      en: [
        'Within the deceleration lane itself, after entering at mainline road speed.',
        'On the main motorway carriageway before steering into the slip lane.',
        'Only at the very end of the exit ramp.'
      ],
      ca: [
        'Dins del mateix carril de desacceleració, després d’entrar a la velocitat de la via principal.',
        'A la calçada principal abans d’entrar al carril.',
        'Només al final de la rampa.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Debe entrarse al carril de deceleración al principio y sin frenar bruscamente en la autovía; la frenada se efectúa íntegramente dentro del carril especial.',
      en: 'Drivers must enter the deceleration lane promptly without slowing down on the highway, performing all braking inside the exit lane.',
      ca: 'S’ha d’entrar al carril de sortida des del començament sense frenar a l’autovia; la frenada es fa tota dins del carril de desacceleració.'
    }
  },
  {
    id: 'man-019',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'En una parada o estacionamiento en pendiente descendente (cuesta abajo), ¿qué medidas de seguridad se deben adoptar?',
      en: 'When stopping or parking on a downhill slope, which safety measures must be adopted?',
      ca: 'En una parada o estacionament en pendent descendent (costa avall), quines mesures de seguretat cal adoptar?'
    },
    options: {
      es: [
        'Accionar el freno de estacionamiento, meter la marcha atrás y orientar las ruedas delanteras hacia el bordillo.',
        'Dejar metida la primera velocidad y ruedas paralelas a la acera.',
        'Dejar la palanca en punto muerto con el freno de mano activado.'
      ],
      en: [
        'Engage the parking brake, select reverse gear, and steer the front wheels towards the curb.',
        'Select first gear and leave wheels parallel to the curb.',
        'Leave in neutral with handbrake on.'
      ],
      ca: [
        'Accionar el fre d’estacionament, posar la marxa enrere i orientar les rodes davanteres cap a la vorera.',
        'Deixar posada la primera velocitat i rodes rectes.',
        'Deixar el canvi en punt mort.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Cuesta abajo se pone marcha atrás y se giran las ruedas hacia la acera para que actúe de calzo. Cuesta arriba se mete primera y ruedas hacia la calzada.',
      en: 'Facing downhill, engage reverse and turn wheels toward the curb to serve as a physical chock. Facing uphill, select 1st gear and turn wheels inward.',
      ca: 'Costa avall es posa marxa enrere i es giren les rodes cap a la vorada. Costa amunt es posa primera marxa.'
    }
  },
  {
    id: 'man-020',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Está permitido remolcar a otro vehículo averiado con una cuerda o cadena por una carretera convencional?',
      en: 'Is it permitted to tow a broken-down car using a rope or chain on a conventional road?',
      ca: 'Està permès remolcar un altre vehicle avariat amb una corda o cadena per una carretera convencional?'
    },
    options: {
      es: [
        'No, el remolque de vehículos averiados en vías públicas debe hacerse exclusivamente mediante grúas especializadas.',
        'Sí, siempre que no se superen los 40 km/h.',
        'Sí, únicamente si la avería se produjo a menos de 5 kilómetros de un taller.'
      ],
      en: [
        'No, towing broken vehicles on public roads must be handled exclusively by professional recovery tow trucks.',
        'Yes, provided vehicle speed does not exceed 40 km/h.',
        'Yes, but only if the breakdown happened under 5 km from a garage.'
      ],
      ca: [
        'No, el remolc de vehicles avariats a la via pública només es pot fer mitjançant grues de rescat especialitzades.',
        'Sí, sempre que no se superin els 40 km/h.',
        'Sí, només si el taller és a prop.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El remolque entre particulares con cuerdas o barras está prohibido en cualquier vía pública; únicamente una grúa autorizada puede remolcar vehículos averiados.',
      en: 'Towing by private drivers with cables or bars is strictly illegal on public roads; only licensed wreckers may tow stranded cars.',
      ca: 'Remolcar amb cordes entre particulars està prohibit a vies públiques; només les grues homologades poden fer-ho.'
    }
  },
  {
    id: 'man-021',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al adelantar en carretera convencional a un ciclomotor, ¿es obligatorio guardar la distancia de 1,5 metros e invadir el carril contiguo?',
      en: 'When overtaking a moped on a conventional road, must you leave 1.5 meters and occupy the adjacent lane?',
      ca: 'En avançar un ciclomotor en carretera convencional, és obligatori guardar 1,5 metres i ocupar el carril contigu?'
    },
    options: {
      es: [
        'Sí, la norma de dejar al menos 1,5 m y ocupar el carril contiguo se aplica a ciclistas y ciclomotores por igual.',
        'No, a los ciclomotores solo es necesario dejarles 1 metro sin cambiar de carril.',
        'Solo es preceptivo si el ciclomotor viaja en grupo.'
      ],
      en: [
        'Yes, leaving at least 1.5 m and shifting across into the adjacent lane applies equally to bicycles and mopeds.',
        'No, mopeds require only 1 meter clearance without changing lanes.',
        'Only mandatory when mopeds travel in convoys.'
      ],
      ca: [
        'Sí, la norma de deixar almenys 1,5 m i ocupar el carril contigu s’aplica per igual a ciclistes i ciclomotors.',
        'No, als ciclomotors només cal deixar-los 1 metre.',
        'Només si viatgen en grup.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La protección lateral de 1,5 metros mínimos y el cambio de carril son obligatorios al adelantar a ciclos, ciclomotores, peatones y animales fuera de poblado.',
      en: 'The 1.5 m clearance and full/partial lane shift apply outside cities when overtaking bikes, mopeds, pedestrians, and animals.',
      ca: 'La separació d’1,5 metres i el canvi de carril són preceptius per avançar bicicletes, ciclomotors, vianants i animals.'
    }
  },
  {
    id: 'man-022',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'En una vía urbana con carriles delimitados, ¿se puede cambiar de carril continuamente para adelantar a todos los vehículos («zig-zag»)?',
      en: 'On a multi-lane urban street, can a driver constantly weave between lanes to overtake traffic ("zig-zagging")?',
      ca: 'En via urbana amb carrils marcats, es pot canviar contínuament de carril per avançar tothom fent ziga-zagues?'
    },
    options: {
      es: [
        'No, solo se permite cambiar de carril para prepararse para girar, parar, estacionar o adelantar puntualmente.',
        'Sí, en poblado rige la libertad absoluta de cambio de carril en cualquier momento.',
        'Sí, siempre que se señalice con los intermitentes.'
      ],
      en: [
        'No, lane changes are only allowed to prepare for turns, stops, parking, or deliberate overtaking.',
        'Yes, urban streets allow completely unconstrained zigzagging at all times.',
        'Yes, provided every lane switch is signaled with indicators.'
      ],
      ca: [
        'No, només es permet canviar de carril per preparar girs, parades, estacionaments o avançaments concrets.',
        'Sí, a la ciutat hi ha llibertat absoluta.',
        'Sí, sempre que s’adverteixi amb l’intermitent.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El zig-zag continuo entre carriles está prohibido por constituir conducción negligente. El carril solo se abandona para efectuar maniobras concretas.',
      en: 'Weaving erratically across urban lanes is considered reckless driving; lane departures are strictly permitted for planned maneuvers.',
      ca: 'Fer ziga-zaga entre carrils es considera conducció temerària; només es canvia de carril per a maniobres justificades.'
    }
  },
  {
    id: 'man-023',
    topicId: 'maneuvers-lanes',
    question: {
      es: '¿Qué maniobra está permitida realizar sobre un cebreado delimitado por una línea continua?',
      en: 'Which maneuver is legally permitted across a hatched chevron zone bounded by a continuous solid border?',
      ca: 'Quina maniobra està permesa sobre una zona zebrada delimitada per línia contínua?'
    },
    options: {
      es: [
        'Ninguna: está totalmente prohibido entrar, circular o detenerse sobre las zonas cebreadas.',
        'Parar durante menos de 2 minutos para descolgar una llamada telefónica.',
        'Circular sobre ella si la calzada está congestionada.'
      ],
      en: [
        'None: entering, traversing, or stopping upon chevron zones is strictly prohibited.',
        'Stopping under 2 minutes to take a mobile phone call.',
        'Driving across it whenever mainline traffic is backed up.'
      ],
      ca: [
        'Cap: està prohibit entrar, circular o aturar-se sobre les zones zebrades.',
        'Parar menys de 2 minuts per parlar pel mòbil.',
        'Circular-hi si hi ha embossos.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los cebreados forman zonas neutrales excluidas de la circulación rodada; está totalmente vedado pisarlos, circular sobre ellos o parar.',
      en: 'Chevron hatchings mark out protected neutral buffer areas; crossing or stopping on them is strictly prohibited.',
      ca: 'Els zebrats són àrees protegides excloses de trànsit; trepitjar-los o circular-hi està completament sancionat.'
    }
  },
  {
    id: 'man-024',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Si un vehículo delante de usted ha señalizado con el intermitente izquierdo su intención de adelantar, ¿quién tiene preferencia?',
      en: 'If the vehicle ahead of you has turned on its left indicator to overtake, who has priority to execute the move?',
      ca: 'Si el vehicle del davant ha posat l’intermitent esquerre per avançar, qui té preferència per iniciar la maniobra?'
    },
    options: {
      es: [
        'El vehículo que circula delante; debemos esperar un tiempo prudencial antes de iniciar nuestro propio adelantamiento.',
        'El vehículo que circula detrás si es más rápido y potente.',
        'Quien acelere primero invadiendo el carril contrario.'
      ],
      en: [
        'The front vehicle; you must yield and wait a reasonable time before initiating your own pass.',
        'The rear vehicle if it is faster and more powerful.',
        'Whichever car accelerates first into the opposite lane.'
      ],
      ca: [
        'El vehicle del davant; cal esperar un temps prudencial abans d’iniciar el nostre avançament.',
        'El vehicle del darrere si té més potència.',
        'Qui acceleri abans.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El conductor que nos precede tiene preferencia si ya ha accionado el intermitente. Solo si tras un tiempo prudente no adelanta, podemos advertirle con ráfagas y adelantar.',
      en: 'The leading car retains priority once its turn indicator is active. Only if it fails to initiate after a sensible delay may you signal and overtake.',
      ca: 'El vehicle que va davant té preferència si ja ha posat l’intermitent; cal respectar el seu torn.'
    }
  },
  {
    id: 'man-025',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al salir marcha atrás de un estacionamiento en batería con visibilidad totalmente nula por furgonetas laterales, ¿cómo se debe proceder?',
      en: 'When reversing out of an angled parking bay with zero side visibility blocked by high vans, what is required?',
      ca: 'En sortir marxa enrere d’un aparcament en bateria sense visibilitat per culpa de furgonetes, com s’ha d’actuar?'
    },
    options: {
      es: [
        'Debe seguirse la indicación de otra persona desde el exterior que auxilie la maniobra.',
        'Salir acelerando rápido para cruzar la trayectoria de los coches cuanto antes.',
        'Hacer sonar el claxon constantemente y salir lentamente.'
      ],
      en: [
        'You must follow directions from a spotter outside the car who assists and guides your exit.',
        'Reverse swiftly to clear cross paths as quickly as possible.',
        'Honk continuously while creeping backwards blind.'
      ],
      ca: [
        'Cal seguir les indicacions d’una altra persona des de fora que ajudi en la maniobra.',
        'Sortir ràpidament per creuar aviat.',
        'Tocar el clàxon sense parar i sortir a poc a poc.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El código estipula expresamente que cuando no exista visibilidad suficiente para dar marcha atrás, es preceptivo auxiliarse de las indicaciones de otra persona.',
      en: 'The traffic code mandates getting assistance from a bystander/spotter whenever reversing blind without clear visual sightlines.',
      ca: 'El reglament imposa demanar auxili a una altra persona des de fora quan no hi hagi visibilitat per fer marxa enrere.'
    }
  }
];