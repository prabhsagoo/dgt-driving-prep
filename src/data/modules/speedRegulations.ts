import { Question } from '@/types';

export const SPEED_REGULATIONS_QUESTIONS: Question[] = [
  {
    id: 'spd-reg-001',
    topicId: 'speed-limits',
    question: {
      es: 'En vías urbanas con plataforma única de calzada y acera, ¿cuál es la velocidad máxima permitida?',
      en: 'On urban streets with a single level shared platform for roadway and sidewalk, what is the speed limit?',
      ca: 'En vies urbanes de plataforma única de calçada i vorera, quina és la velocitat màxima permesa?'
    },
    options: {
      es: ['20 km/h.', '30 km/h.', '50 km/h.'],
      en: ['20 km/h.', '30 km/h.', '50 km/h.'],
      ca: ['20 km/h.', '30 km/h.', '50 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'En calles de plataforma única calzada-acera el límite es 20 km/h. En calles de un solo carril por sentido es 30 km/h, y de dos o más por sentido 50 km/h.',
      en: 'On shared single-platform urban streets the limit is 20 km/h. One lane per direction is 30 km/h, and two or more is 50 km/h.',
      ca: 'A vies urbanes de plataforma única el límit és 20 km/h. Amb un sol carril per sentit és 30 km/h.'
    }
  },
  {
    id: 'spd-reg-002',
    topicId: 'speed-limits',
    question: {
      es: '¿Puede un turismo rebasar en 20 km/h la velocidad máxima en carreteras convencionales para adelantar?',
      en: 'Can a passenger car exceed the maximum speed limit by 20 km/h on conventional roads to overtake?',
      ca: 'Pot un turisme superar en 20 km/h la velocitat màxima en carreteres convencionals per avançar?'
    },
    options: {
      es: [
        'No, el margen de 20 km/h para adelantar fue suprimido.',
        'Sí, siempre que el vehículo adelantado circule a menor velocidad.',
        'Sí, únicamente en vías con arcén pavimentado superior a 1,5 metros.'
      ],
      en: [
        'No, the 20 km/h overtaking speed margin was eliminated.',
        'Yes, as long as the vehicle being overtaken is moving slower.',
        'Yes, but only on roads with paved shoulders wider than 1.5 meters.'
      ],
      ca: [
        'No, el marge de 20 km/h per avançar va quedar suprimit.',
        'Sí, sempre que el vehicle avançat circuli a menys velocitat.',
        'Sí, únicament en vies amb voral pavimentat superior a 1,5 metres.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La DGT eliminó el margen de 20 km/h para adelantar en carreteras secundarias. El límite máximo invariable es de 90 km/h.',
      en: 'The DGT removed the 20 km/h margin for overtaking on conventional roads. The maximum limit remains strictly 90 km/h.',
      ca: 'Es va eliminar el marge de 20 km/h per avançar a carreteres secundàries. El límit estricte és 90 km/h.'
    }
  },
  {
    id: 'spd-reg-003',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad mínima a la que se permite circular en autopistas y autovías con un turismo?',
      en: 'What is the minimum speed allowed for a passenger car on motorways and dual carriageways?',
      ca: 'Quina és la velocitat mínima a la qual es permet circular en autopistes i autovies amb un turisme?'
    },
    options: {
      es: ['60 km/h.', '50 km/h.', '70 km/h.'],
      en: ['60 km/h.', '50 km/h.', '70 km/h.'],
      ca: ['60 km/h.', '50 km/h.', '70 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La velocidad mínima permitida en autopistas y autovías para cualquier vehículo es de 60 km/h, salvo causas justificadas.',
      en: 'The minimum permitted speed on motorways and dual carriageways is 60 km/h for all vehicles.',
      ca: 'La velocitat mínima permesa en autopistes i autovies per a qualsevol vehicle és de 60 km/h.'
    }
  },
  {
    id: 'spd-reg-004',
    topicId: 'speed-limits',
    question: {
      es: 'Un turismo que arrastra un remolque ligero, ¿a qué velocidad máxima puede circular por autopista?',
      en: 'What is the maximum speed limit on a motorway for a passenger car pulling a light trailer?',
      ca: 'A quina velocitat màxima pot circular per autopista un turisme que arrossega un remolc lleuger?'
    },
    options: {
      es: ['90 km/h.', '100 km/h.', '80 km/h.'],
      en: ['90 km/h.', '100 km/h.', '80 km/h.'],
      ca: ['90 km/h.', '100 km/h.', '80 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los turismos con remolque tienen un límite de 90 km/h en autopistas y autovías, y de 80 km/h en carreteras convencionales.',
      en: 'Cars towing trailers are limited to 90 km/h on motorways and 80 km/h on conventional roads.',
      ca: 'Els turismes amb remolc tenen un límit de 90 km/h a autopistes i 80 km/h a vies convencionals.'
    }
  },
  {
    id: 'spd-reg-005',
    topicId: 'speed-limits',
    question: {
      es: 'En una travesía, ¿cuál es la velocidad máxima permitida con carácter general para un turismo?',
      en: 'On a road running through a settlement (travesía), what is the default maximum speed limit for a car?',
      ca: 'En una travessia, quina és la velocitat màxima permesa amb caràcter general per a un turisme?'
    },
    options: {
      es: ['50 km/h.', '70 km/h.', '30 km/h.'],
      en: ['50 km/h.', '70 km/h.', '30 km/h.'],
      ca: ['50 km/h.', '70 km/h.', '30 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las travesías tienen la consideración de vías urbanas y su velocidad máxima genérica es de 50 km/h para todos los vehículos a motor, ampliable o reducible por señalización.',
      en: 'Travesías are classified as urban stretches; their standard generic speed limit is 50 km/h for all motor vehicles.',
      ca: 'Les travessies tenen la consideració de vies urbanes i la seva velocitat màxima genèrica és de 50 km/h.'
    }
  },
  {
    id: 'spd-reg-006',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad mínima a la que se puede circular en una carretera convencional con un turismo?',
      en: 'What is the minimum speed allowed on a conventional road for a passenger car?',
      ca: 'Quina és la velocitat mínima a la qual es pot circular en una carretera convencional amb un turisme?'
    },
    options: {
      es: ['45 km/h.', '50 km/h.', '60 km/h.'],
      en: ['45 km/h.', '50 km/h.', '60 km/h.'],
      ca: ['45 km/h.', '50 km/h.', '60 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La velocidad anormalmente reducida se sitúa por debajo de la mitad del límite genérico de la vía. En carreteras convencionales (90 km/h), la velocidad mínima es 45 km/h.',
      en: 'An abnormally slow speed is defined as below half the road’s generic limit. For conventional roads (90 km/h), the minimum is 45 km/h.',
      ca: 'La velocitat anormalment reduïda és per sota de la meitat del límit genèric. A carreteres convencionals (90 km/h) el mínim és 45 km/h.'
    }
  },
  {
    id: 'spd-reg-007',
    topicId: 'speed-limits',
    question: {
      es: 'En una vía urbana con dos carriles por sentido de circulación, ¿cuál es la velocidad máxima genérica?',
      en: 'On an urban street with two lanes per direction of traffic, what is the default maximum speed limit?',
      ca: 'En una via urbana amb dos carrils per sentit de circulació, quina és la velocitat màxima genèrica?'
    },
    options: {
      es: ['50 km/h.', '30 km/h.', '40 km/h.'],
      en: ['50 km/h.', '30 km/h.', '40 km/h.'],
      ca: ['50 km/h.', '30 km/h.', '40 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'En vías urbanas que disponen de dos o más carriles por sentido de circulación, el límite genérico de velocidad es de 50 km/h.',
      en: 'On urban roads with two or more lanes per direction of travel, the standard default speed limit is 50 km/h.',
      ca: 'A les vies urbanes amb dos o més carrils per sentit de circulació, el límit genèric és de 50 km/h.'
    }
  },
  {
    id: 'spd-reg-008',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad máxima para una furgoneta o derivado de turismo en autopistas y autovías?',
      en: 'What is the maximum speed limit for a van or car-derived van on motorways and expressways?',
      ca: 'Quina és la velocitat màxima per a una furgoneta o derivat de turisme en autopistes i autovies?'
    },
    options: {
      es: ['100 km/h.', '90 km/h.', '120 km/h.'],
      en: ['100 km/h.', '90 km/h.', '120 km/h.'],
      ca: ['100 km/h.', '90 km/h.', '120 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las furgonetas, vehículos mixtos adaptables y derivados de turismo tienen un límite de 100 km/h en autopistas y autovías, y 90 km/h en carreteras convencionales.',
      en: 'Vans and mixed-use commercial vehicles are capped at 100 km/h on motorways and 90 km/h on conventional roads.',
      ca: 'Les furgonetes i vehicles mixtos adaptables tenen un límit de 100 km/h a autopistes i autovies.'
    }
  },
  {
    id: 'spd-reg-009',
    topicId: 'speed-limits',
    question: {
      es: '¿A qué velocidad máxima puede circular un ciclomotor de dos ruedas?',
      en: 'What is the absolute maximum speed allowed for a two-wheel moped?',
      ca: 'A quina velocitat màxima pot circular un ciclomotor de dues rodes?'
    },
    options: {
      es: ['45 km/h.', '50 km/h.', '60 km/h.'],
      en: ['45 km/h.', '50 km/h.', '60 km/h.'],
      ca: ['45 km/h.', '50 km/h.', '60 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Por construcción y por normativa de tráfico, los ciclomotores tienen una velocidad máxima autorizada de 45 km/h en cualquier vía por la que tengan permitida la circulación.',
      en: 'Both by technical construction and traffic regulations, mopeds are limited to a maximum speed of 45 km/h everywhere.',
      ca: 'Per construcció i normativa, els ciclomotors tenen limitada la velocitat màxima a 45 km/h a qualsevol via permesa.'
    }
  },
  {
    id: 'spd-reg-010',
    topicId: 'speed-limits',
    question: {
      es: 'Un vehículo con una rueda de repuesto de emergencia («galleta»), ¿a qué velocidad máxima puede circular?',
      en: 'A car driving on a temporary space-saver spare tire ("donut"), what is its maximum permitted speed?',
      ca: 'Un vehicle amb una roda de recanvi d’emergència («galeta»), a quina velocitat màxima pot circular?'
    },
    options: {
      es: [
        'A la que indique el fabricante, habitualmente como máximo 80 km/h.',
        'A 100 km/h si circula por autopista.',
        'A un máximo estricto de 50 km/h en cualquier vía.'
      ],
      en: [
        'As specified by the manufacturer, typically a maximum of 80 km/h.',
        'At 100 km/h if traveling on a motorway.',
        'At a strict maximum of 50 km/h on all roads.'
      ],
      ca: [
        'A la que indiqui el fabricant, habitualment com a màxim a 80 km/h.',
        'A 100 km/h si circula per autopista.',
        'A un màxim estricte de 50 km/h a qualsevol via.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las ruedas provisionales de uso temporal tienen limitaciones específicas grabadas en la llanta, comúnmente no superar los 80 km/h ni rebasar distancias de 200 km.',
      en: 'Temporary spare wheels have specific safety limitations stamped on the rim, usually a maximum of 80 km/h and a range under 200 km.',
      ca: 'Les rodes de recanvi temporals tenen limitacions específiques, habitualment un límit de 80 km/h i no més de 200 km de distància.'
    }
  },
  {
    id: 'spd-reg-011',
    topicId: 'speed-limits',
    question: {
      es: 'En caminos de tierra no pavimentados, ¿cuál es la velocidad máxima genérica para todos los vehículos a motor?',
      en: 'On unpaved dirt tracks, what is the default maximum speed limit for all motor vehicles?',
      ca: 'En camins de terra sense pavimentar, quina és la velocitat màxima genèrica per a tots els vehicles a motor?'
    },
    options: {
      es: ['30 km/h.', '20 km/h.', '50 km/h.'],
      en: ['30 km/h.', '20 km/h.', '50 km/h.'],
      ca: ['30 km/h.', '20 km/h.', '50 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El Reglamento General de Circulación establece un límite máximo de velocidad de 30 km/h en todas las vías sin pavimentar para cualquier vehículo a motor.',
      en: 'The General Traffic Regulations fix a maximum speed of 30 km/h on all unpaved roads and dirt paths for motor vehicles.',
      ca: 'El Reglament General de Circulació fixa un límit màxim de 30 km/h a totes les vies sense pavimentar.'
    }
  },
  {
    id: 'spd-reg-012',
    topicId: 'speed-limits',
    question: {
      es: 'Si un vehículo circula por autopista a una velocidad anormalmente reducida por avería mecánica (menos de 60 km/h), ¿qué debe hacer el conductor?',
      en: 'If a vehicle is traveling on a motorway at abnormally reduced speed due to mechanical failure (under 60 km/h), what must the driver do?',
      ca: 'Si un vehicle circula per autopista a velocitat anormalment reduïda per avaria mecànica (menys de 60 km/h), què ha de fer el conductor?'
    },
    options: {
      es: [
        'Abandonar la autopista por la primera salida disponible, circulando por el arcén si perturba gravemente el tráfico.',
        'Continuar hasta el destino final manteniendo encendidas las luces de emergencia por el carril derecho.',
        'Detenerse de inmediato en medio del carril de circulación.'
      ],
      en: [
        'Leave the motorway at the earliest available exit, using the shoulder if severely disrupting traffic.',
        'Continue to the final destination keeping hazard warning lights on in the right lane.',
        'Stop immediately in the center of the travel lane.'
      ],
      ca: [
        'Abandonar l’autopista per la primera sortida disponible, circulant pel voral si pertorba greument el trànsit.',
        'Continuar fins a la destinació final amb els llums d’emergència pel carril dret.',
        'Aturar-se immediatament al mig del carril de circulació.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Circular a velocidad anormalmente reducida en autopista crea un riesgo crítico por alcance. El conductor debe salir de la vía por la primera salida posible.',
      en: 'Driving abnormally slowly on a motorway creates a severe rear-end collision hazard. You must exit at the first opportunity.',
      ca: 'Circular a velocitat anormalment reduïda a l’autopista crea greu perill d’encalç; cal sortir per la primera desviació possible.'
    }
  },
  {
    id: 'spd-reg-013',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad máxima de un autobús en una carretera convencional?',
      en: 'What is the maximum speed limit for a passenger bus on a conventional road?',
      ca: 'Quina és la velocitat màxima d’un autobús en una carretera convencional?'
    },
    options: {
      es: ['90 km/h.', '80 km/h.', '100 km/h.'],
      en: ['90 km/h.', '80 km/h.', '100 km/h.'],
      ca: ['90 km/h.', '80 km/h.', '100 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los autobuses pueden circular a 90 km/h en carreteras convencionales (la misma que turismos) y a 100 km/h en autopistas y autovías (salvo si viajan pasajeros de pie, en cuyo caso es 80 km/h).',
      en: 'Buses may travel at 90 km/h on conventional roads (same as cars) and 100 km/h on motorways (or 80 km/h if passengers stand).',
      ca: 'Els autobusos poden circular a 90 km/h a carreteres convencionals i a 100 km/h a autopistes/autovies.'
    }
  },
  {
    id: 'spd-reg-014',
    topicId: 'speed-limits',
    question: {
      es: 'En un carril habilitado para circular en sentido contrario al habitual por motivos de obras, ¿a qué velocidad máxima se puede circular?',
      en: 'In a lane opened to travel in the opposite direction due to roadworks, what is the maximum permitted speed?',
      ca: 'En un carril habilitat en sentit contrari a l’habitual per motius d’obres, a quina velocitat màxima es pot circular?'
    },
    options: {
      es: [
        'A 80 km/h (y un mínimo de 60 km/h o lo que determine la señalización).',
        'A la velocidad genérica de la vía (hasta 120 km/h).',
        'A un máximo de 50 km/h.'
      ],
      en: [
        'At 80 km/h (and a minimum of 60 km/h or as indicated by signage).',
        'At the road’s standard generic speed (up to 120 km/h).',
        'At a maximum of 50 km/h.'
      ],
      ca: [
        'A 80 km/h (i un mínim de 60 km/h o el que marqui la senyalització).',
        'A la velocitat genèrica de la via (fins a 120 km/h).',
        'A un màxim de 50 km/h.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En carriles habilitados en sentido contrario al habitual (por fluidez o por obras), la velocidad máxima es de 80 km/h y la mínima de 60 km/h, con luces de cruce encendidas día y noche.',
      en: 'In lanes opened in reverse direction (for congestion relief or roadwork), the speed is capped at 80 km/h (minimum 60 km/h), requiring dipped headlights day and night.',
      ca: 'En carrils en sentit contrari a l’habitual la velocitat és màxim 80 km/h i mínim 60 km/h, amb llums de cruce encesos.'
    }
  },
  {
    id: 'spd-reg-015',
    topicId: 'speed-limits',
    question: {
      es: '¿A qué velocidad máxima puede circular una autocaravana de hasta 3.500 kg de MMA por autopista?',
      en: 'What is the maximum speed limit on a motorway for a motorhome with a GVWR up to 3,500 kg?',
      ca: 'A quina velocitat màxima pot circular una autocaravana de fins a 3.500 kg de MMA per autopista?'
    },
    options: {
      es: ['120 km/h.', '100 km/h.', '90 km/h.'],
      en: ['120 km/h.', '100 km/h.', '90 km/h.'],
      ca: ['120 km/h.', '100 km/h.', '90 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las autocaravanas con MMA de hasta 3.500 kg tienen los mismos límites que un turismo: 120 km/h en autopista y autovía, y 90 km/h en carretera convencional.',
      en: 'Motorhomes with GVWR up to 3,500 kg share the same limits as passenger cars: 120 km/h on motorways and 90 km/h on conventional roads.',
      ca: 'Les autocaravanes de fins a 3.500 kg tenen els mateixos límits que un turisme: 120 km/h a autopista i 90 km/h a carretera convencional.'
    }
  },
  {
    id: 'spd-reg-016',
    topicId: 'speed-limits',
    question: {
      es: '¿Y cuál es la velocidad máxima en autopista para una autocaravana con MMA superior a 3.500 kg?',
      en: 'And what is the motorway speed limit for a motorhome with a GVWR greater than 3,500 kg?',
      ca: 'I quina és la velocitat màxima en autopista per a una autocaravana amb MMA superior a 3.500 kg?'
    },
    options: {
      es: ['90 km/h.', '100 km/h.', '80 km/h.'],
      en: ['90 km/h.', '100 km/h.', '80 km/h.'],
      ca: ['90 km/h.', '100 km/h.', '80 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las autocaravanas pesadas (MMA > 3.500 kg) están asimiladas al grupo de camiones: máximo 90 km/h en autopista/autovía y 80 km/h en carreteras convencionales.',
      en: 'Heavy motorhomes (> 3,500 kg) are grouped with trucks: maximum 90 km/h on motorways and 80 km/h on conventional roads.',
      ca: 'Les autocaravanes pesades (MMA > 3.500 kg) tenen límit de 90 km/h a autopistes i 80 km/h a carreteres convencionals.'
    }
  },
  {
    id: 'spd-reg-017',
    topicId: 'speed-limits',
    question: {
      es: '¿Qué velocidad máxima no debe rebasar un tractor agrícola que carece de luz de frenado o arrastra un remolque?',
      en: 'What maximum speed must an agricultural tractor not exceed if it lacks brake lights or tows a trailer?',
      ca: 'Quina velocitat màxima no ha de superar un tractor agrícola que no té llum de fre o arrossega un remolc?'
    },
    options: {
      es: ['25 km/h.', '40 km/h.', '35 km/h.'],
      en: ['25 km/h.', '40 km/h.', '35 km/h.'],
      ca: ['25 km/h.', '40 km/h.', '35 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los vehículos especiales agrícolas tienen un límite de 40 km/h con carácter general, pero se reduce a 25 km/h si arrastran remolque o carecen de luz de freno.',
      en: 'Agricultural special vehicles have a standard 40 km/h limit, but it drops to 25 km/h when towing a trailer or lacking operational brake lights.',
      ca: 'Els vehicles agrícoles tenen límit genèric de 40 km/h, reduït a 25 km/h si arrosseguen remolc o no tenen senyalització de fre.'
    }
  },
  {
    id: 'spd-reg-018',
    topicId: 'speed-limits',
    question: {
      es: 'En caso de lluvia muy intensa o niebla espesa, ¿cuál debe ser la pauta de velocidad del conductor?',
      en: 'During torrential rain or dense fog, what is the required speed conduct for a driver?',
      ca: 'En cas de pluja molt intensa o boira espessa, quina ha de ser la pauta de velocitat del conductor?'
    },
    options: {
      es: [
        'Adecuar la velocidad de forma que pueda detener el vehículo dentro de su campo visual hacia adelante.',
        'Mantener rigurosamente la velocidad máxima permitida de la vía para evitar alcances.',
        'Reducir obligatoriamente la velocidad a 30 km/h en cualquier vía.'
      ],
      en: [
        'Adapt speed so you can comfortably bring the vehicle to a full stop within your forward visible range.',
        'Rigidly maintain the road’s maximum speed limit to prevent collisions from behind.',
        'Mandatorily reduce speed to exactly 30 km/h on all roads.'
      ],
      ca: [
        'Adequar la velocitat de manera que pugui aturar el vehicle dins del seu camp de visió cap endavant.',
        'Mantenir estrictament la velocitat màxima permesa per evitar encalços.',
        'Reduir obligatòriament la velocitat a 30 km/h a qualsevol via.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Es el principio de «velocidad adecuada»: la velocidad debe permitir siempre frenar con total seguridad dentro del espacio visible despejado ante el vehículo.',
      en: 'This is the core principle of "appropriate speed": driving at a rate that always permits stopping within visible clear distance.',
      ca: 'Principi de «velocitat adequada»: la marxa ha de permetre aturar el vehicle amb seguretat dins del camp visible clar.'
    }
  },
  {
    id: 'spd-reg-019',
    topicId: 'speed-limits',
    question: {
      es: '¿A qué velocidad máxima puede circular una motocicleta en una carretera convencional?',
      en: 'What is the maximum speed limit for a motorcycle on a conventional road?',
      ca: 'A quina velocitat màxima pot circular una motocicleta en una carretera convencional?'
    },
    options: {
      es: ['90 km/h.', '100 km/h.', '80 km/h.'],
      en: ['90 km/h.', '100 km/h.', '80 km/h.'],
      ca: ['90 km/h.', '100 km/h.', '80 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las motocicletas tienen asignados exactamente los mismos límites de velocidad genéricos que los turismos: 120 km/h en autopista/autovía y 90 km/h en carretera convencional.',
      en: 'Motorcycles share identical generic speed limits with cars: 120 km/h on motorways and 90 km/h on conventional secondary roads.',
      ca: 'Les motocicletes tenen els mateixos límits que els turismes: 120 km/h a autopista i 90 km/h a carretera convencional.'
    }
  },
  {
    id: 'spd-reg-020',
    topicId: 'speed-limits',
    question: {
      es: 'Al aproximarse a un paso a nivel o glorieta, ¿qué obligación impone el código respecto a la velocidad?',
      en: 'When approaching a level crossing or roundabout, what legal duty exists regarding speed?',
      ca: 'En aproximar-se a un pas a nivell o rotonda, quina obligació imposa el codi respecte a la velocitat?'
    },
    options: {
      es: [
        'Moderar la velocidad y, si fuera necesario, detener el vehículo con total seguridad.',
        'Mantener una velocidad constante para cruzar rápidamente.',
        'Tocar el claxon para advertir a otros usuarios y mantener la marcha.'
      ],
      en: [
        'Moderate your speed and, if necessary, bring the vehicle to a full and safe stop.',
        'Keep a continuous speed to cross as quickly as possible.',
        'Honk the horn to alert others while maintaining current pace.'
      ],
      ca: [
        'Moderar la velocitat i, si cal, aturar el vehicle amb seguretat.',
        'Mantenir una velocitat constant per creuar ràpidament.',
        'Tocar el clàxon per avisar altres usuaris i mantenir la marxa.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El artículo 46 del Reglamento exige moderar la velocidad ante pasos a nivel, glorietas, intersecciones y paradas de transporte público.',
      en: 'Article 46 of the Spanish Traffic Code specifically mandates moderating speed when approaching railway level crossings, roundabouts, and transit stops.',
      ca: 'L’article 46 del Reglament exigeix moderar la velocitat en apropar-se a passos a nivell, rotondes i interseccions.'
    }
  },
  {
    id: 'spd-reg-021',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad máxima de un camión articulado o tráiler en autopistas y autovías?',
      en: 'What is the maximum speed limit for an articulated truck (semi-trailer) on motorways and expressways?',
      ca: 'Quina és la velocitat màxima d’un camió articulat o tràiler a autopistes i autovies?'
    },
    options: {
      es: ['90 km/h.', '100 km/h.', '80 km/h.'],
      en: ['90 km/h.', '100 km/h.', '80 km/h.'],
      ca: ['90 km/h.', '100 km/h.', '80 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los camiones, tractocamiones, furgones y vehículos articulados tienen como límite máximo 90 km/h en autopistas y autovías (y 80 km/h en carreteras secundarias).',
      en: 'Heavy trucks, tractor units, and articulated lorries have a 90 km/h maximum speed limit on motorways and 80 km/h on conventional roads.',
      ca: 'Els camions articulats i tràilers tenen un límit màxim de 90 km/h a autopistes/autovies i 80 km/h a secundàries.'
    }
  },
  {
    id: 'spd-reg-022',
    topicId: 'speed-limits',
    question: {
      es: 'En un carril adicional circunstancial de circulación, ¿cuál es la velocidad máxima a la que se puede transitar?',
      en: 'In a temporary additional lane created with cones, what is the maximum authorized speed?',
      ca: 'En un carril addicional circumstancial de circulació, quina és la velocitat màxima a la qual es pot transitar?'
    },
    options: {
      es: [
        '80 km/h (con un mínimo de 60 km/h).',
        '90 km/h.',
        '100 km/h si no hay tráfico denso.'
      ],
      en: [
        '80 km/h (with a minimum of 60 km/h).',
        '90 km/h.',
        '100 km/h if traffic is light.'
      ],
      ca: [
        '80 km/h (amb un mínim de 60 km/h).',
        '90 km/h.',
        '100 km/h si no hi ha trànsit dens.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En los carriles adicionales circunstanciales delimitados con conos, todos los vehículos deben circular con la luz de cruce a una velocidad de entre 60 y 80 km/h.',
      en: 'In additional lanes marked out with cones, all vehicles must drive with dipped headlights between 60 and 80 km/h.',
      ca: 'En carrils addicionals circumstancials cal circular amb llum de cruce entre 60 i 80 km/h.'
    }
  },
  {
    id: 'spd-reg-023',
    topicId: 'speed-limits',
    question: {
      es: '¿Qué efecto produce sobre el campo visual del conductor el incremento elevado de la velocidad?',
      en: 'What effect does high driving speed have on a driver’s visual field?',
      ca: 'Quin efecte produeix sobre el camp visual del conductor l’increment acusat de la velocitat?'
    },
    options: {
      es: [
        'El estrechamiento progresivo del campo visual (efecto túnel).',
        'Una mayor agudeza en la visión periférica lateral.',
        'Ningún efecto, la visión permanece constante.'
      ],
      en: [
        'Progressive narrowing of the visual field (tunnel vision effect).',
        'Increased visual acuity in the lateral peripheral zone.',
        'No change, eyesight and field width remain constant.'
      ],
      ca: [
        'L’estrenyiment progressiu del camp de visió (efecte túnel).',
        'Una agudesa més alta a la visió perifèrica lateral.',
        'Cap canvi apreciable.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'A mayor velocidad se reduce drásticamente la visión periférica; a 100 km/h el ángulo visual se estrecha a menos de 45 grados (efecto túnel).',
      en: 'Higher speeds sharply narrow peripheral vision; at 100 km/h the field of view narrows to under 45 degrees (tunnel vision).',
      ca: 'A més velocitat es redueix la visió perifèrica; a 100 km/h l’angle es redueix a menys de 45 graus (efecte túnel).'
    }
  },
  {
    id: 'spd-reg-024',
    topicId: 'speed-limits',
    question: {
      es: 'Al adelantar a un vehículo pesado en carretera convencional, ¿a qué velocidad máxima se puede efectuar la maniobra?',
      en: 'When overtaking a heavy vehicle on a conventional road, what is the maximum speed permitted during the maneuver?',
      ca: 'En avançar un vehicle pesat a carretera convencional, a quina velocitat màxima es pot realitzar la maniobra?'
    },
    options: {
      es: [
        'A 90 km/h, sin posibilidad alguna de rebasarla.',
        'A 110 km/h para reducir el tiempo de adelantamiento.',
        'A 100 km/h si el camión circula a menos de 70 km/h.'
      ],
      en: [
        'At 90 km/h, with no legal possibility of exceeding it.',
        'At 110 km/h to shorten overtaking time in the opposing lane.',
        'At 100 km/h if the truck is driving under 70 km/h.'
      ],
      ca: [
        'A 90 km/h, sense cap possibilitat de superar-la.',
        'A 110 km/h per escurçar el temps en avançar.',
        'A 100 km/h si el camió circula a menys de 70 km/h.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Tras la reforma de la Ley sobre Tráfico de la DGT, no existe ningún margen de rebase de velocidad al adelantar en carreteras convencionales bajo ninguna circunstancia.',
      en: 'Following the DGT Traffic Law reform, there is zero speed tolerance above the 90 km/h limit when overtaking on conventional roads.',
      ca: 'Des de la reforma de Trànsit, no existeix cap marge per sobre dels 90 km/h en avançar a carreteres convencionals.'
    }
  },
  {
    id: 'spd-reg-025',
    topicId: 'speed-limits',
    question: {
      es: '¿A qué velocidad máxima puede circular un cuadriciclo ligero (coche sin carnet)?',
      en: 'What is the maximum legal speed for a light quadricycle (microcar)?',
      ca: 'A quina velocitat màxima pot circular un quadricicle lleuger (cotxe sense carnet)?'
    },
    options: {
      es: ['45 km/h.', '50 km/h.', '70 km/h.'],
      en: ['45 km/h.', '50 km/h.', '70 km/h.'],
      ca: ['45 km/h.', '50 km/h.', '70 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los cuadriciclos ligeros tienen la misma consideración que los ciclomotores a efectos de velocidad: su velocidad máxima legal por construcción es de 45 km/h.',
      en: 'Light quadricycles are grouped with mopeds for speed regulations: their absolute legal maximum speed is 45 km/h.',
      ca: 'Els quadricicles lleugers tenen la mateixa consideració que els ciclomotors: límit màxim de 45 km/h.'
    }
  }
];