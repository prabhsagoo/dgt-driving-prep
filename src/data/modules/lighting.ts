import { Question } from '@/types';

export const LIGHTING_QUESTIONS: Question[] = [
  {
    id: 'lgt-001',
    topicId: 'lights-visibility',
    question: {
      es: '¿En qué condiciones meteorológicas es obligatorio encender la luz antiniebla trasera?',
      en: 'Under which weather conditions is the rear fog light mandatory?',
      ca: 'En quines condicions meteorològiques és obligatori encendre el llum antiboira posterior?'
    },
    options: {
      es: [
        'Únicamente en condiciones especialmente desfavorables (niebla espesa, lluvia muy intensa, fuerte nevada).',
        'Con cualquier lluvia o llovizna ligera.',
        'Siempre que sea de noche en vías interurbanas insuficientemente iluminadas.'
      ],
      en: [
        'Only under especially unfavorable conditions (thick fog, torrential rain, heavy snowfall).',
        'During any light rain or drizzle.',
        'Whenever driving at night on insufficiently lit interurban roads.'
      ],
      ca: [
        'Únicament en condicions especialment desfavorables (boira espessa, pluja molt intensa, forta nevada).',
        'Amb qualsevol pluja o plugim lleuger.',
        'Sempre que sigui de nit en vies interurbanes insuficientment il·luminades.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La luz antiniebla trasera es muy potente y deslumbra con facilidad; la DGT solo autoriza su uso en casos extremos de visibilidad reducida.',
      en: 'The rear fog light is very bright and easily dazzles following drivers; DGT rules allow it solely during severe visibility impairment.',
      ca: 'El llum antiboira posterior és molt intens i enlluerna fàcilment; només s’autoritza en casos extrems de visibilitat reduïda.'
    }
  },
  {
    id: 'lgt-002',
    topicId: 'lights-visibility',
    question: {
      es: 'Al circular por un túnel suficientemente iluminado dentro de poblado, ¿qué alumbrado debe llevar encendido?',
      en: 'When driving through a sufficiently lit tunnel in a built-up area, which lights must be on?',
      ca: 'En circular per un túnel prou il·luminat dins de poblat, quin enllumenat s’ha de portar encès?'
    },
    options: {
      es: [
        'Alumbrado de posición y de cruce (corto alcance).',
        'Únicamente el alumbrado de posición.',
        'Ninguno si el túnel cuenta con iluminación artificial suficiente.'
      ],
      en: [
        'Position lights and dipped (low beam) headlights.',
        'Position lights only.',
        'None if the tunnel has sufficient artificial lighting.'
      ],
      ca: [
        'Enllumenat de posició i d’encreuament (curt abast).',
        'Únicament l’enllumenat de posició.',
        'Cap si el túnel compta amb il·luminació artificial suficient.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En cualquier túnel o tramo afectado por la señal de túnel, es obligatorio encender al menos la luz de cruce, con independencia de la iluminación artificial.',
      en: 'In any tunnel or passage marked with the tunnel sign, low beam headlights are compulsory regardless of streetlighting.',
      ca: 'En qualsevol túnel és obligatori encendre almenys la llum de cruce independentment de la claror artificial.'
    }
  },
  {
    id: 'lgt-003',
    topicId: 'lights-visibility',
    question: {
      es: '¿Cuándo está terminantemente prohibido utilizar el alumbrado de carretera (largo alcance)?',
      en: 'When is the use of high beam (long range) headlights strictly prohibited?',
      ca: 'Quan està terminantment prohibit utilitzar l’enllumenat de carretera (llarg abast)?'
    },
    options: {
      es: [
        'Cuando el vehículo esté parado o estacionado, y siempre que se circule en poblado.',
        'En carreteras secundarias sin iluminación exterior.',
        'Al circular a más de 40 km/h fuera de poblado.'
      ],
      en: [
        'When the vehicle is stopped or parked, and at all times on urban streets.',
        'On unlit rural conventional roads.',
        'When traveling faster than 40 km/h outside built-up areas.'
      ],
      ca: [
        'Quan el vehicle estigui aturat o estacionat, i sempre que es circuli per vies urbanes.',
        'En carreteres secundàries sense il·luminació exterior.',
        'En circular a més de 40 km/h fora de poblat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces largas están totalmente prohibidas en vías urbanas o travesías para evitar deslumbramientos a peatones y conductores.',
      en: 'High beams are strictly prohibited in urban zones or towns to prevent blinding pedestrians and other motorists.',
      ca: 'Els llums llargs estan totalment prohibits en vies urbanes o travessies.'
    }
  },
  {
    id: 'lgt-004',
    topicId: 'lights-visibility',
    question: {
      es: 'Si durante la marcha sufre un deslumbramiento por un vehículo que circula en sentido contrario, ¿qué debe hacer?',
      en: 'If dazzled by oncoming vehicle headlights while driving at night, what should you do?',
      ca: 'Si durant la marxa pateix un enlluernament per un vehicle que circula en sentit contrari, què ha de fer?'
    },
    options: {
      es: [
        'Reducir la velocidad gradualmente y desviar la mirada hacia la línea del borde derecho de la calzada.',
        'Encender las luces de largo alcance como advertencia visual.',
        'Frenar en seco inmediatamente y activar las luces de emergencia.'
      ],
      en: [
        'Gradually reduce speed and direct your gaze towards the white line on the right edge of the road.',
        'Switch on your high beams in retaliation/warning.',
        'Slam on the brakes immediately and activate hazard warning lights.'
      ],
      ca: [
        'Reduir la velocitat gradualment i desviar la mirada cap a la línia del marge dret de la calçada.',
        'Encendre els llums llargs com a advertència visual.',
        'Frenar en sec immediatament i activar els llums d’emergència.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Ante un deslumbramiento debe moderarse la velocidad sin frenazos bruscos y guiar la trayectoria mirando la marca vial derecha de la calzada.',
      en: 'When blinded by glare, ease off the accelerator and guide your vehicle using the right shoulder road marking.',
      ca: 'Davant d’un enlluernament cal moderar la velocitat i guiar la vista cap a la línia dreta del voral.'
    }
  },
  {
    id: 'lgt-005',
    topicId: 'lights-visibility',
    question: {
      es: '¿Es obligatorio circular con la luz de cruce durante el día en motocicletas?',
      en: 'Is it mandatory for motorcycles to ride with dipped headlights on during daytime?',
      ca: 'És obligatori circular amb la llum d’encreuament durant el dia a les motocicletes?'
    },
    options: {
      es: [
        'Sí, las motocicletas deben llevar la luz de cruce encendida a cualquier hora del día y de la noche.',
        'No, únicamente cuando llueva o la visibilidad sea escasa.',
        'Solo fuera de poblado.'
      ],
      en: [
        'Yes, motorcycles must keep their dipped headlights on at all hours, day and night.',
        'No, only when raining or when visibility is reduced.',
        'Only on roads outside built-up areas.'
      ],
      ca: [
        'Sí, les motocicletes han de portar la llum d’encreuament encesa a qualsevol hora del dia i de la nit.',
        'No, només quan plogui o la visibilitat sigui deficient.',
        'Només fora de poblat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las motocicletas están obligadas a circular con el alumbrado de corto alcance encendido permanentemente en todo tipo de vías.',
      en: 'Motorcycles are legally required to operate with low beam headlights on at all times on all roads.',
      ca: 'Les motocicletes estan obligades a circular amb l’enllumenat de curt abast encès a totes les vies.'
    }
  },
  {
    id: 'lgt-006',
    topicId: 'lights-visibility',
    question: {
      es: '¿Es obligatorio llevar encendida la luz antiniebla delantera en caso de lluvia o niebla?',
      en: 'Is turning on front fog lights strictly mandatory during rain or fog?',
      ca: 'És obligatori portar encès el llum antiboira davanter en cas de pluja o boira?'
    },
    options: {
      es: [
        'No, la luz antiniebla delantera es optativa; solo es obligatoria la luz antiniebla trasera en condiciones muy desfavorables.',
        'Sí, es obligatoria siempre que comience a llover.',
        'Sí, en cuanto se active el limpiaparabrisas.'
      ],
      en: [
        'No, front fog lights are optional equipment; only rear fog lamps are mandatory in severe conditions.',
        'Yes, it is mandatory as soon as rain begins.',
        'Yes, whenever windshield wipers are running.'
      ],
      ca: [
        'No, el llum antiboira davanter és optatiu; només és obligatori el posterior en condicions greus.',
        'Sí, és obligatori tan bon punt comença a ploure.',
        'Sí, en activar els eixugaparabrises.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los turismos no están obligados legalmente a llevar faros antiniebla delanteros instalados; su uso es puramente opcional para mejorar la visibilidad.',
      en: 'Front fog lights are not legally required on passenger cars; their use is strictly optional during adverse weather.',
      ca: 'Els fars antiboira davanters no són obligatoris als turismes; el seu ús és optatiu.'
    }
  },
  {
    id: 'lgt-007',
    topicId: 'lights-visibility',
    question: {
      es: '¿Se pueden sustituir las luces de cruce por las luces de conducción diurna (DRL/LCD) al circular por un túnel durante el día?',
      en: 'Can Daytime Running Lights (DRL) substitute dipped beam headlights when passing through a tunnel during daylight?',
      ca: 'Es poden substituir els llums de creuament pels llums diürns (DRL) en un túnel durant el dia?'
    },
    options: {
      es: [
        'No, las luces de conducción diurna no iluminan la vía ni activan las luces de posición traseras; en túneles es obligatoria la luz de cruce.',
        'Sí, porque el túnel cuenta con iluminación artificial propia.',
        'Sí, siempre que el vehículo sea de reciente matriculación.'
      ],
      en: [
        'No, DRLs do not adequately illuminate the roadway or activate tail lights; dipped headlights are mandatory in tunnels.',
        'Yes, because the tunnel has artificial streetlights.',
        'Yes, provided the car was recently registered.'
      ],
      ca: [
        'No, els llums diürns no il·luminen el terra ni encenen els llums posteriors; cal encendre el creuament.',
        'Sí, perquè el túnel està il·luminat.',
        'Sí, sempre que sigui un cotxe modern.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces de circulación diurna (DRL) solo sirven para hacer visible al vehículo de día; no sustituyen al alumbrado de cruce obligatorio en túneles o condiciones oscuras.',
      en: 'Daytime Running Lights (DRL) only improve daytime conspicuity; they never replace mandatory low beam headlights in tunnels or at dusk.',
      ca: 'Els llums diürns (DRL) només serveixen per fer-se veure de dia; mai substitueixen la llum de creuament en túnels.'
    }
  },
  {
    id: 'lgt-008',
    topicId: 'lights-visibility',
    question: {
      es: 'En una carretera interurbana insuficientemente iluminada, ¿cuándo es obligatorio circular con el alumbrado de largo alcance (carretera)?',
      en: 'On an insufficiently lit interurban road, when is the use of high beam headlights mandatory?',
      ca: 'En una carretera interurbana insuficientment il·luminada, quan és obligatori circular amb llarg abast?'
    },
    options: {
      es: [
        'Al circular a más de 40 km/h fuera de poblado entre el ocaso y la salida del sol, siempre que no se deslumbre a nadie.',
        'Al circular a cualquier velocidad por encima de 20 km/h.',
        'Únicamente cuando no haya curvas.'
      ],
      en: [
        'When traveling over 40 km/h outside built-up areas between sunset and sunrise, provided glare is not caused.',
        'At any speed above 20 km/h.',
        'Only on straight roads without bends.'
      ],
      ca: [
        'En circular a més de 40 km/h fora de poblat entre la posta i la sortida del sol, sempre que no s’enlluerni ningú.',
        'A qualsevol velocitat superior a 20 km/h.',
        'Només en trams rectes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Es obligatorio llevar la luz larga fuera de poblado a más de 40 km/h de noche en vías insuficientemente iluminadas, salvo riesgo de deslumbrar a otros usuarios.',
      en: 'High beams are legally mandatory on unlit rural roads at speeds over 40 km/h at night, unless other road users could be dazzled.',
      ca: 'És obligatori posar llums llargs fora de poblat a més de 40 km/h de nit si la via és fosca, sense enlluernar ningú.'
    }
  },
  {
    id: 'lgt-009',
    topicId: 'lights-visibility',
    question: {
      es: '¿Qué se considera reglamentariamente una «vía insuficientemente iluminada»?',
      en: 'What is legally defined as an "insufficiently lit road" under traffic regulations?',
      ca: 'Què es considera reglamentàriament una «via insuficientment il·luminada»?'
    },
    options: {
      es: [
        'Aquella en la que no pueda leerse la placa de matrícula a 10 metros o no se distinga un vehículo pintado de oscuro a 50 metros.',
        'Cualquier vía rural sin farolas en el arcén.',
        'Aquella en la que la visibilidad no supere los 100 metros en línea recta.'
      ],
      en: [
        'One where a license plate cannot be read at 10 meters or a dark vehicle distinguished at 50 meters.',
        'Any country road lacking lampposts on the hard shoulder.',
        'One where sight distance is less than 100 meters along a straight line.'
      ],
      ca: [
        'Aquella on no es pot llegir una matrícula a 10 metres o distingir un vehicle fosc a 50 metres.',
        'Qualsevol carretera sense fanals.',
        'On la visibilitat sigui inferior a 100 metres.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La DGT define vía insuficientemente iluminada cuando no se puede leer una matrícula a 10 m o no se distingue un vehículo oscuro a 50 m de distancia.',
      en: 'DGT rules define insufficient lighting when license plates are unreadable at 10 m or dark vehicles cannot be distinguished at 50 m.',
      ca: 'Es considera insuficientment il·luminada si no es distingeix una matrícula a 10 m o un cotxe fosc a 50 m.'
    }
  },
  {
    id: 'lgt-010',
    topicId: 'lights-visibility',
    question: {
      es: 'Al adelantar de noche en una vía interurbana con alumbrado de carretera (luces largas), ¿cuándo debe cambiarse a luz de cruce?',
      en: 'When overtaking at night with high beams on an unlit road, at what moment must you switch to low beams?',
      ca: 'En avançar de nit amb llums llargs en una via interurbana, quan s’ha de canviar a llum de creuament?'
    },
    options: {
      es: [
        'En cuanto se aprecie la posibilidad de deslumbrar por los retrovisores al conductor del vehículo que nos precede.',
        'Justo en el momento de ponerse a su misma altura lateral.',
        'No hace falta cambiar si el vehículo de delante es un camión.'
      ],
      en: [
        'As soon as there is any likelihood of dazzling the preceding driver via their mirrors.',
        'Directly when drawing level alongside their vehicle.',
        'There is no need to switch if the front vehicle is a large truck.'
      ],
      ca: [
        'Tan bon punt hi hagi risc d’enlluernar pels retrovisors el conductor del davant.',
        'Just en posar-se a la seva alçada.',
        'No cal canviar si és un camió.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Se debe pasar a luz de corto alcance anticipadamente para no cegar al conductor adelantado a través de su retrovisor interior y laterales.',
      en: 'You must dip your headlights early before closing in to avoid blinding the leading driver through their interior and side mirrors.',
      ca: 'Cal passar a curt abast amb antelació per no encegar el conductor pels seus retrovisors.'
    }
  },
  {
    id: 'lgt-011',
    topicId: 'lights-visibility',
    question: {
      es: '¿Qué luces debe dejar encendidas un turismo inmovilizado de noche en el arcén de una carretera?',
      en: 'Which lights must remain turned on if a car is immobilized at night on a rural road shoulder?',
      ca: 'Quins llums ha de deixar encesos un turisme immobilitzat de nit al voral d’una carretera?'
    },
    options: {
      es: [
        'Las luces de posición y las luces de emergencia (warning).',
        'Únicamente las luces de emergencia, apagando las de posición para ahorrar batería.',
        'Las luces de cruce y los antinieblas.'
      ],
      en: [
        'Position (parking) lights and hazard warning flashers.',
        'Hazard lights only, turning off position lights to save battery.',
        'Low beams and fog lights.'
      ],
      ca: [
        'Els llums de posició i els llums d’emergència (warning).',
        'Només els llums d’emergència.',
        'Els llums de creuament i antiboira.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Todo vehículo detenido o averiado de noche en la calzada o arcén transitable debe mantener encendidas las luces de posición y la señal de emergencia.',
      en: 'Any vehicle halted at night on a travel lane or usable shoulder must keep position lights on alongside hazard flashers.',
      ca: 'Qualsevol vehicle aturat de nit al voral ha de mantenir encesos els llums de posició i els d’emergència.'
    }
  },
  {
    id: 'lgt-012',
    topicId: 'lights-visibility',
    question: {
      es: 'Al estacionar de noche en línea en una travesía insuficientemente iluminada, ¿qué alumbrado está permitido dejar encendido?',
      en: 'When parallel parking at night on an insufficiently lit through-town road (travesía), what lighting is permitted?',
      ca: 'En estacionar de nit en línia en una travessia insuficientment il·luminada, quin enllumenat es permet deixar encès?'
    },
    options: {
      es: [
        'Las luces de posición o bien las luces de estacionamiento correspondientes al lado que da a la calzada.',
        'Las luces de cruce fijas.',
        'Ninguna, está prohibido dejar luces encendidas al estar el motor apagado.'
      ],
      en: [
        'Position lights, or single-side parking lights on the side facing the roadway.',
        'Continuous dipped beam headlights.',
        'None, leaving lights illuminated while engine is off is prohibited.'
      ],
      ca: [
        'Els llums de posició o els d’estacionament del costat que dona a la calçada.',
        'Els llums de creuament.',
        'Cap llum.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En travesías oscuras, al estacionar en línea es preceptivo dejar las de posición o se autoriza dejar solo las de estacionamiento del lado exterior.',
      en: 'In dark travesías, parallel-parked cars must display position lights, or may use single-side parking lights on the roadway side.',
      ca: 'En travessies fosques cal deixar els llums de posició o els d’estacionament del costat obert a la calçada.'
    }
  },
  {
    id: 'lgt-013',
    topicId: 'lights-visibility',
    question: {
      es: '¿Está permitido utilizar las luces de largo alcance (carretera) a modo de ráfagas para evitar un accidente o advertir un adelantamiento?',
      en: 'Is flashing high beams intermittently allowed to avert an accident or announce an overtake outside built-up areas?',
      ca: 'Està permès utilitzar els llums llargs com a ràfegues per evitar un accident o avisar d’un avançament?'
    },
    options: {
      es: [
        'Sí, se permite emitir destellos intermitentes cortos sin deslumbrar tanto en poblado como fuera de poblado.',
        'No, las ráfagas luminosas están prohibidas en todo el territorio nacional.',
        'Solo se permite a vehículos de policía y ambulancias.'
      ],
      en: [
        'Yes, short intermittent flashes without causing dazzle are allowed both in town and outside cities.',
        'No, flashing high beams is unconditionally banned nationwide.',
        'Only allowed for police cars and emergency ambulances.'
      ],
      ca: [
        'Sí, es permet emetre ràfegues curtes sense enlluernar tant dins com fora de poblat.',
        'No, les ràfegues estan totalment prohibides.',
        'Només per a vehicles prioritaris.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las ráfagas luminosas breves con luz de corto o largo alcance están legalmente autorizadas para avisar a otro usuario y evitar un siniestro o señalar adelantamientos.',
      en: 'Brief headlight flashes are legally recognized warning signals to prevent collisions or indicate overtaking intent.',
      ca: 'Les ràfegues curtes estan permeses per advertir altres usuaris d’un perill o abans d’avançar fora de poblat.'
    }
  },
  {
    id: 'lgt-014',
    topicId: 'lights-visibility',
    question: {
      es: 'Si transporta una carga pesada en el maletero que hace elevarse el morro del vehículo, ¿qué debe hacer con los faros?',
      en: 'If carrying a heavy load in the trunk that tilts the car’s front upwards, what must you do with the headlights?',
      ca: 'Si transporta una càrrega pesant al maleter que aixeca el morro del vehicle, què ha de fer amb els fars?'
    },
    options: {
      es: [
        'Regular la altura del haz luminoso hacia abajo mediante el mando interior para evitar deslumbrar a otros conductores.',
        'Cambiar las bombillas por unas de menor potencia.',
        'Encender las luces de largo alcance.'
      ],
      en: [
        'Lower the headlight beam level using the cabin adjustment wheel to prevent dazzling other motorists.',
        'Replace headlight bulbs with lower wattage units.',
        'Switch permanently to high beam lights.'
      ],
      ca: [
        'Abaixar l’alçada del feix lluminós amb el comandament interior per evitar enlluernar.',
        'Canviar les bombetes per unes de menys potència.',
        'Posar llums llargs.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El peso trasero hunde la suspensión posterior y levanta el haz de los faros, provocando deslumbramientos. Debe reorientarse el reglaje de altura hacia abajo.',
      en: 'Heavy cargo sags the rear suspension, angling headlight beams upward into opposing traffic. The dashboard beam leveler must be adjusted downward.',
      ca: 'El pes enfonsa la suspensió del darrere i aixeca els fars enlluernant el trànsit; cal abaixar el feix amb el regulador.'
    }
  },
  {
    id: 'lgt-015',
    topicId: 'lights-visibility',
    question: {
      es: '¿En qué situación es preceptivo conectar la señal de emergencia luminosa (luces de warning)?',
      en: 'In which situation is it mandatory to switch on the hazard warning flashers?',
      ca: 'En quina situació és preceptiu connectar els llums d’emergència (warning)?'
    },
    options: {
      es: [
        'Al inmovilizar el vehículo en la calzada o arcén por avería o al verse obligado a frenar de forma brusca ante una retención.',
        'Siempre que se realice una parada voluntaria en doble fila.',
        'Al circular por un carril bus-taxi autorizado.'
      ],
      en: [
        'When immobilized on the roadway or shoulder due to breakdown, or when forced to decelerate abruptly before traffic tailbacks.',
        'Whenever double-parking briefly on an urban avenue.',
        'When traveling inside an authorized bus lane.'
      ],
      ca: [
        'En immobilitzar el vehicle a la via per avaria o en frenar sobtadament davant d’un embús.',
        'En parar en doble fila.',
        'En circular pel carril bus.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El warning se debe conectar ante averías, inmovilizaciones imprevistas o para advertir al tráfico trasero de frenazos severos por retención súbita.',
      en: 'Hazard lights must be used during mechanical breakdowns, obstructions, or to warn following drivers of abrupt emergency braking ahead.',
      ca: 'El warning s’activa davant d’avaries, parades d’emergència o per avisar els cotxes del darrere d’una frenada brusca per embús.'
    }
  },
  {
    id: 'lgt-016',
    topicId: 'lights-visibility',
    question: {
      es: '¿Qué color deben emitir reglamentariamente las luces de marcha atrás de un turismo?',
      en: 'What color light must the reversing lights of a passenger car emit according to regulations?',
      ca: 'De quin color han de ser reglamentàriament els llums de marxa enrere d’un turisme?'
    },
    options: {
      es: ['Blanco.', 'Amarillo auto.', 'Rojo claro.'],
      en: ['White.', 'Amber yellow.', 'Light red.'],
      ca: ['Blanc.', 'Groc auto.', 'Vermell clar.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces de marcha atrás emiten luz blanca (una o dos luces) para iluminar el camino hacia atrás y advertir a otros de la maniobra.',
      en: 'Reversing lamps must emit white light (one or two lamps) to illuminate behind the car and alert other road users.',
      ca: 'Els llums de marxa enrere emeten llum blanca (un o dos llums) per il·luminar la maniobra i alertar.'
    }
  },
  {
    id: 'lgt-017',
    topicId: 'lights-visibility',
    question: {
      es: '¿Es legal circular únicamente con las luces de posición entre el ocaso y la salida del sol?',
      en: 'Is it legal to drive using position (parking) lights alone between sunset and sunrise?',
      ca: 'És legal circular únicament amb els llums de posició entre la posta i la sortida del sol?'
    },
    options: {
      es: [
        'No, las luces de posición nunca deben usarse solas en marcha; deben acompañar a las de cruce o carretera.',
        'Sí, si la calle tiene farolas encendidas.',
        'Sí, en tramos urbanos de velocidad máxima a 30 km/h.'
      ],
      en: [
        'No, position lights must never be used on their own while moving; they must always accompany low or high beams.',
        'Yes, provided city lampposts are on.',
        'Yes, in 30 km/h urban zones.'
      ],
      ca: [
        'No, els llums de posició mai s’han d’usar sols en marxa; han d’anar amb els de creuament o carretera.',
        'Sí, si el carrer està il·luminat.',
        'Sí, en zones de 30 km/h.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces de posición solo sirven para indicar la presencia y anchura del vehículo, pero no iluminan el camino. En movimiento siempre deben ir con cruce o largas.',
      en: 'Position lights merely demarcate the car’s presence and width; driving with position lights alone is prohibited and penalized.',
      ca: 'Els llums de posició serveixen per marcar la presència del cotxe, no per il·luminar; mai es pot circular només amb ells.'
    }
  },
  {
    id: 'lgt-018',
    topicId: 'lights-visibility',
    question: {
      es: 'Circulando de día por un carril reversible, ¿qué luces debe llevar encendidas?',
      en: 'Driving during the daytime in a reversible lane, which lights must you have turned on?',
      ca: 'Circulant de dia per un carril reversible, quins llums s’han de portar encesos?'
    },
    options: {
      es: [
        'Al menos el alumbrado de corto alcance (cruce) o luz de cruce.',
        'Únicamente las luces diurnas LED frontales.',
        'Ningún alumbrado si hace sol.'
      ],
      en: [
        'At least dipped headlights (low beams).',
        'Front LED daytime running lights alone.',
        'No lighting at all on sunny days.'
      ],
      ca: [
        'Com a mínim la llum de curt abast (creuament).',
        'Només els llums diürns LED.',
        'Cap llum si fa sol.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En carriles reversibles, adicionales circunstanciales y carriles en sentido contrario al habitual es imperativo llevar las luces de cruce encendidas de día y de noche.',
      en: 'In reversible lanes, contraflow lanes, and cone-separated lanes, dipped headlights are mandatory day and night.',
      ca: 'Als carrils reversibles i en sentit contrari a l’habitual és preceptiu portar la llum de creuament dia i nit.'
    }
  },
  {
    id: 'lgt-019',
    topicId: 'lights-visibility',
    question: {
      es: 'En caso de niebla no muy espesa o lluvia moderada, ¿qué luces antiniebla está permitido utilizar?',
      en: 'In light fog or moderate rain, which fog lights are permitted to be used?',
      ca: 'En cas de boira no gaire espessa o pluja moderada, quins llums antiboira es permet utilitzar?'
    },
    options: {
      es: [
        'La luz antiniebla delantera opcionalmente, pero nunca la luz antiniebla trasera.',
        'Ambas luces antiniebla simultáneamente.',
        'La luz antiniebla trasera obligatoriamente.'
      ],
      en: [
        'Front fog lights optionally, but never rear fog lamps.',
        'Both front and rear fog lights simultaneously.',
        'The rear fog light mandatorily.'
      ],
      ca: [
        'El llum antiboira davanter de forma optativa, però mai el llum posterior.',
        'Ambdós antiboira simultàniament.',
        'L’antiboira posterior obligatòriament.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El antiniebla delantero puede encenderse con lluvia moderada o niebla leve. El antiniebla trasero solo se autoriza en situaciones extremas (lluvia muy intensa o niebla espesa).',
      en: 'Front fog lights can be deployed in light mist or rain. Rear fog lights are restricted strictly to severe, blinding conditions to prevent rear glare.',
      ca: 'L’antiboira davanter es pot posar amb pluja moderada; el posterior només en situacions extremes per evitar enlluernaments.'
    }
  },
  {
    id: 'lgt-020',
    topicId: 'lights-visibility',
    question: {
      es: '¿Qué dispositivo luminoso identifica a los vehículos de policía, extinción de incendios, protección civil y ambulancias en servicio urgente?',
      en: 'Which warning light signal identifies police, fire services, civil protection, and emergency medical ambulances?',
      ca: 'Quin senyal lluminós identifica policies, bombers, protecció civil i ambulàncies en servei d’urgència?'
    },
    options: {
      es: [
        'La señal luminosa V-1 consistente en luces de color azul rotativas o destellantes.',
        'Luces amarillas fijas en el techo.',
        'Luces rojas intermitentes en la parrilla.'
      ],
      en: [
        'The V-1 emergency signal consisting of rotating or flashing blue lights.',
        'Steady amber roof lights.',
        'Flashing red grille lamps.'
      ],
      ca: [
        'El senyal V-1 consistent en llums blaus rotatius o intermitents.',
        'Llums grocs fixos al sostre.',
        'Llums vermells a la graella.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La normativa unificó la señal V-1 para todos los vehículos prioritarios en servicio de urgencia: todos deben llevar distintivo luminoso azul.',
      en: 'Spanish regulations unified emergency beacon V-1 across all first responder vehicles: police, fire, and ambulances all display flashing blue lights.',
      ca: 'La normativa va unificar el senyal V-1: tots els vehicles d’emergència prioritaris porten llums blaus.'
    }
  },
  {
    id: 'lgt-021',
    topicId: 'lights-visibility',
    question: {
      es: '¿Qué vehículos están obligados a llevar en el techo una luz giratoria de color amarillo auto (señal V-2)?',
      en: 'Which vehicles are required to display an amber rotating roof beacon (signal V-2)?',
      ca: 'Quins vehicles estan obligats a portar un llum groc rotatiu al sostre (senyal V-2)?'
    },
    options: {
      es: [
        'Los vehículos especiales agrícolas, obras y servicios, y vehículos de auxilio o transporte especial que constituyan un obstáculo en la vía.',
        'Los turismos conducidos por conductores noveles.',
        'Las motocicletas de gran cilindrada en carretera.'
      ],
      en: [
        'Agricultural vehicles, maintenance and construction machinery, and tow trucks/abnormal loads acting as an obstruction.',
        'Passenger cars driven by novice drivers.',
        'High-displacement motorcycles on open highways.'
      ],
      ca: [
        'Els vehicles especials agrícoles, de neteja/obres, grues d’auxili i transports especials.',
        'Els turismes de conductors novells.',
        'Les motocicletes de gran cilindrada.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal V-2 (luz ámbar rotativa) advierte de la presencia en la vía de vehículos lentos, especiales, de mantenimiento o grúas de auxilio en carretera.',
      en: 'Signal V-2 (amber rotating light) warns motorists of slow-moving special tractors, road maintenance trucks, or breakdown recovery wreckers.',
      ca: 'El senyal V-2 (llum ambre rotatiu) adverteix de la presència de tractors, màquines d’obres o grues d’assistència vial.'
    }
  },
  {
    id: 'lgt-022',
    topicId: 'lights-visibility',
    question: {
      es: '¿Es obligatorio llevar un juego de lámparas de repuesto y las herramientas para su cambio en un turismo?',
      en: 'Is it still mandatory to carry a set of spare headlight bulbs and replacement tools in a passenger car?',
      ca: 'És obligatori portar un joc de bombetes de recanvi i les eines per canviar-les en un turisme?'
    },
    options: {
      es: [
        'No, la DGT derogó la obligatoriedad de llevar bombillas de repuesto debido a los modernos faros LED y de xenón.',
        'Sí, sigue siendo una infracción grave no llevar lámparas de sustitución en el maletero.',
        'Solo es obligatorio para bombillas halógenas en viajes internacionales.'
      ],
      en: [
        'No, the DGT repealed the obligation to carry spare bulbs due to modern sealed LED and xenon lighting assemblies.',
        'Yes, it remains a severe penalty not carrying spare bulbs in the trunk.',
        'Only mandatory for halogen setups on international trips.'
      ],
      ca: [
        'No, la DGT va suprimir l’obligació de portar bombetes de recanvi degut a la tecnologia LED i xenó.',
        'Sí, continua sent obligatori.',
        'Només per a fars halògens fora d’Espanya.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La normativa eliminó la exigencia de llevar bombillas de repuesto ya que en muchos vehículos modernos su manipulación requiere desmontar el paragolpes o acudir a taller.',
      en: 'The DGT removed the spare bulb mandate because complex modern headlamp modules cannot safely be replaced roadside by drivers.',
      ca: 'Es va derogar l’obligació de portar bombetes de recanvi ja que els fars moderns requereixen eines especials i assistència mecànica.'
    }
  },
  {
    id: 'lgt-023',
    topicId: 'lights-visibility',
    question: {
      es: 'Al entrar en un túnel de día con gafas de sol polarizadas puestas, ¿cómo se debe actuar?',
      en: 'When entering a tunnel in daylight wearing dark polarized sunglasses, what should you do?',
      ca: 'En entrar a un túnel de dia amb ulleres de sol fosques, com s’ha d’actuar?'
    },
    options: {
      es: [
        'Quitárselas antes de entrar y encender las luces de cruce de inmediato para compensar la repentina pérdida de visión.',
        'Mantenerlas puestas para proteger los ojos de la luz artificial.',
        'Frenar bruscamente en la boca del túnel mientras se acostumbra la vista.'
      ],
      en: [
        'Take them off before entering and switch low beams on promptly to counteract sudden vision loss.',
        'Keep them on to shield eyes from artificial tunnel glare.',
        'Brake sharply right at the tunnel entrance until eyes adjust.'
      ],
      ca: [
        'Treure-se-les abans d’entrar i encendre el creuament per compensar la sobtada pèrdua de llum.',
        'Deixar-se-les posades.',
        'Frenar bruscament a l’entrada del túnel.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El paso de luz exterior intensa a la oscuridad relativa del túnel produce una ceguera momentánea. Se deben retirar las gafas de sol anticipadamente y conectar la luz de cruce.',
      en: 'Transitioning from bright sunshine into tunnel shade creates instant dark-adaptation blindness. Remove tinted glasses ahead of time and ensure low beams are lit.',
      ca: 'El canvi de claror a foscor provoca ceguesa momentània; cal treure’s les ulleres de sol abans d’entrar i activar el creuament.'
    }
  },
  {
    id: 'lgt-024',
    topicId: 'lights-visibility',
    question: {
      es: 'La luz de placa de matrícula trasera debe iluminar de forma que la matrícula sea legible de noche a una distancia mínima de:',
      en: 'The rear license plate lamp must illuminate so that the plate is clearly readable at night from a minimum distance of:',
      ca: 'El llum de matrícula posterior ha de permetre llegir la placa de nit a una distància mínima de:'
    },
    options: {
      es: ['20 metros.', '10 metros.', '50 metros.'],
      en: ['20 meters.', '10 meters.', '50 meters.'],
      ca: ['20 metres.', '10 metres.', '50 metres.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La reglamentación técnica exige que el alumbrado de la matrícula trasera permita leer claramente todos los caracteres a 20 metros de distancia en plena oscuridad.',
      en: 'Technical vehicle standards require rear license plate lamps to make characters distinct and readable from 20 meters in total darkness.',
      ca: 'La normativa tècnica exigeix que el llum de matrícula posterior permeti llegir els caràcters a 20 metres de distància.'
    }
  },
  {
    id: 'lgt-025',
    topicId: 'lights-visibility',
    question: {
      es: '¿En qué vías está permitido circular con la luz de largo alcance (carretera) como alumbrado ordinario?',
      en: 'On which roads is it lawful to travel with high beams as standard driving lighting?',
      ca: 'En quines vies està permès circular amb llum de llarg abast com a enllumenat ordinari?'
    },
    options: {
      es: [
        'Exclusivamente en vías interurbanas insuficientemente iluminadas fuera de poblado.',
        'En cualquier vía urbana que no tenga peatones.',
        'En túneles iluminados dentro de la ciudad.'
      ],
      en: [
        'Exclusively on insufficiently lit interurban roads outside built-up areas.',
        'On any city street free of pedestrians.',
        'In illuminated tunnels inside city centers.'
      ],
      ca: [
        'Exclusivament en vies interurbanes insuficientment il·luminades fora de poblat.',
        'En carrers de ciutat sense vianants.',
        'En túnels urbans.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces largas están terminantemente prohibidas en vías urbanas y travesías. Solo se autorizan en carreteras y autopistas interurbanas.',
      en: 'High beams are strictly prohibited within towns, cities, and populated settlements. Their operation is restricted to open interurban highways.',
      ca: 'Els llums llargs estan totalment prohibits dins de poblat i travessies; només s’autoritzen en vies interurbanes.'
    }
  }
];