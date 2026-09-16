import { Question } from '@/types';

export const PRIORITY_QUESTIONS: Question[] = [
  {
    id: 'prio-001',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En una glorieta o rotonda sin señalizar, ¿qué vehículo tiene la prioridad de paso?',
      en: 'At an unmarked roundabout, which vehicle has the right of way?',
      ca: 'En una rotonda o glorieta sense senyalitzar, quin vehicle té la prioritat de pas?'
    },
    options: {
      es: [
        'El que accede desde la vía situada a la derecha.',
        'El vehículo que ya se encuentra circulando dentro de la glorieta.',
        'El vehículo que circule a mayor velocidad.'
      ],
      en: [
        'The vehicle entering from the road on the right.',
        'The vehicle already circulating inside the roundabout.',
        'The vehicle traveling at higher speed.'
      ],
      ca: [
        'El que accedeix des de la via situada a la dreta.',
        'El vehicle que ja es troba circulant dins de la rotonda.',
        'El vehicle que circuli a més velocitat.'
      ]
    },
    correctIndex: 1,
    explanation: {
      es: 'En las glorietas, como excepción a la norma general de la derecha, siempre tienen prioridad los vehículos que ya circulan dentro del anillo.',
      en: 'In roundabouts, as an exception to the general right-hand priority rule, vehicles already circulating inside have right of way.',
      ca: 'A les rotondes, com a excepció a la norma de la dreta, sempre tenen prioritat els vehicles que ja circulen per dins de l’anell.'
    }
  },
  {
    id: 'prio-002',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Para abandonar una glorieta, ¿desde qué carril debe realizarse la maniobra de salida?',
      en: 'To exit a roundabout, from which lane must you execute the exit maneuver?',
      ca: 'Per abandonar una rotonda, des de quin carril s’ha de realitzar la maniobra de sortida?'
    },
    options: {
      es: [
        'Indistintamente desde el carril interior o exterior si está libre.',
        'Únicamente desde el carril exterior (derecho), salvo señalización que indique otra cosa.',
        'Desde el carril interior si se advierte con el intermitente izquierdo.'
      ],
      en: [
        'Either from the inside or outside lane if clear.',
        'Strictly from the exterior (right) lane, unless specific signage indicates otherwise.',
        'From the inside lane as long as you indicate with the left turn signal.'
      ],
      ca: [
        'Indistintament des del carril interior o exterior si està lliure.',
        'Únicament des del carril exterior (dret), llevat que hi hagi senyalització contrària.',
        'Des del carril interior si s’adverteix amb l’intermitent esquerre.'
      ]
    },
    correctIndex: 1,
    explanation: {
      es: 'Por norma general, para salir de una glorieta es obligatorio situarse previamente en el carril exterior. Salir directamente cruzando carriles desde el interior está prohibido.',
      en: 'As a general rule, to exit a roundabout you must move to the outermost lane beforehand. Exiting across lanes from the inner lane is strictly prohibited.',
      ca: 'Com a norma general, per sortir d’una rotonda cal situar-se prèviament al carril exterior. Sortir creuant des de l’interior està prohibit.'
    }
  },
  {
    id: 'prio-003',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En una intersección sin señalizar entre una vía pavimentada y otra de tierra, ¿quién tiene prioridad?',
      en: 'At an unmarked intersection between a paved road and a dirt road, who has priority?',
      ca: 'En una intersecció sense senyalitzar entre una via pavimentada i una sense pavimentar, qui té prioritat?'
    },
    options: {
      es: [
        'El vehículo que circula por la vía pavimentada.',
        'El vehículo que entra por la derecha, sea cual sea el tipo de vía.',
        'El vehículo más pesado o de mayores dimensiones.'
      ],
      en: [
        'The vehicle traveling on the paved road.',
        'The vehicle approaching from the right, regardless of road surface.',
        'The heavier or larger vehicle.'
      ],
      ca: [
        'El vehicle que circula per la via pavimentada.',
        'El vehicle que entra per la dreta, sigui quin sigui el tipus de via.',
        'El vehicle més pesant o de dimensions superiors.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los vehículos que circulan por una vía pavimentada tienen siempre preferencia de paso sobre los que proceden de una vía sin pavimentar.',
      en: 'Vehicles traveling on a paved roadway always have priority over those arriving from an unpaved/dirt path.',
      ca: 'Els vehicles que circulen per una via pavimentada tenen sempre preferència sobre els que provenen d’una via sense pavimentar.'
    }
  },
  {
    id: 'prio-004',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Ante una señal de STOP y una señal de Ceda el Paso en el mismo poste o intersección, ¿cuál prevalece?',
      en: 'Facing both a STOP sign and a Give Way (Yield) sign at the same intersection, which one takes precedence?',
      ca: 'Davant d’un senyal de STOP i un de Cedeixi el Pas al mateix pal o intersecció, quin preval?'
    },
    options: {
      es: [
        'Prevalece la más restrictiva, por lo que es obligatorio detenerse por completo (STOP).',
        'Prevalece el Ceda el Paso al ser una señal de advertencia más moderna.',
        'Ninguna de las dos, se aplica la norma general de prioridad a la derecha.'
      ],
      en: [
        'The most restrictive signal prevails, requiring a full stop (STOP).',
        'The Give Way prevails as it is considered more modern.',
        'Neither applies, you fall back to standard right-hand priority.'
      ],
      ca: [
        'Preval la més restrictiva, per tant és obligatori aturar-se del tot (STOP).',
        'Preval el Cedeixi el Pas en ser un senyal d’advertència més modern.',
        'Cap dels dos, s’aplica la norma general de prioritat a la dreta.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En caso de conflicto o contradicción entre señales del mismo nivel jerárquico, siempre prevalece la más restrictiva.',
      en: 'In the event of a contradiction between signs of the same hierarchical level, the most restrictive one always prevails.',
      ca: 'En cas de contradicció entre senyals del mateix nivell jeràrquic, sempre preval la més restrictiva.'
    }
  },
  {
    id: 'prio-005',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En un estrechamiento en pendiente pronunciada sin señalizar, ¿quién tiene prioridad en el paso?',
      en: 'On a steep, unmarked narrow incline, which vehicle has the right of way?',
      ca: 'En un estretament en pendent pronunciat sense senyalitzar, qui té preferència de pas?'
    },
    options: {
      es: [
        'El vehículo que sube, salvo que pueda llegar antes a un apartadero.',
        'El vehículo que desciende por la pendiente.',
        'Siempre el vehículo de transporte de viajeros.'
      ],
      en: [
        'The vehicle going uphill, unless it can reach a passing bay first.',
        'The vehicle traveling downhill.',
        'Always passenger transport vehicles.'
      ],
      ca: [
        'El vehicle que puja, llevat que pugui arribar abans a un apartador.',
        'El vehicle que baixa pel pendent.',
        'Sempre el vehicle de transport de viatgers.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En pendientes de al menos el 7%, la preferencia corresponde siempre al vehículo que asciende, ya que reiniciar la marcha cuesta arriba resulta más complejo.',
      en: 'On inclines of at least 7%, preference belongs to the uphill vehicle due to the difficulty of resuming uphill motion.',
      ca: 'En pendents d’almenys el 7%, la preferència correspon sempre al vehicle que puja.'
    }
  },
  {
    id: 'prio-006',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Un grupo de ciclistas se aproxima a una intersección o glorieta. Si el primero de ellos ya ha entrado, ¿quién tiene preferencia?',
      en: 'A cycling group approaches an intersection or roundabout. Once the lead cyclist enters, who has right of way?',
      ca: 'Un grup de ciclistes s’apropa a una rotonda o encreuament. Si el primer ja ha entrat, qui té preferència?'
    },
    options: {
      es: [
        'Todo el grupo de ciclistas, ya que se consideran una única unidad móvil.',
        'Únicamente el ciclista que ya ha entrado; los demás deben ceder el paso.',
        'Los vehículos a motor siempre tienen prioridad sobre los ciclistas.'
      ],
      en: [
        'The entire cycling group, as they are legally treated as a single moving unit.',
        'Only the cyclist who entered; all following cyclists must yield.',
        'Motor vehicles always maintain priority over bicycle groups.'
      ],
      ca: [
        'Tot el grup de ciclistes, ja que es consideren un únic conjunt.',
        'Només el ciclista que ja ha entrat; la resta ha de cedir el pas.',
        'Els vehicles a motor sempre tenen prioritat sobre els ciclistes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Cuando el primer ciclista de un pelotón entra en una intersección o glorieta, todo el grupo adquiere prioridad como si fueran un solo vehículo articulado.',
      en: 'Once the lead cyclist enters a roundabout or junction, the entire peloton is granted priority as a single vehicle unit.',
      ca: 'Quan el primer ciclista entra a la rotonda o encreuament, tot el grup té preferència com si fos un sol vehicle.'
    }
  },
  {
    id: 'prio-007',
    topicId: 'priority-roundabouts',
    question: {
      es: '¿Qué debe hacer un conductor al incorporarse a una autovía desde un carril de aceleración?',
      en: 'What must a driver do when merging onto a motorway from an acceleration lane?',
      ca: 'Què ha de fer un conductor en incorporar-se a una autovia des d’un carril d’acceleració?'
    },
    options: {
      es: [
        'Ceder el paso a los vehículos que ya circulan por la calzada principal, acelerando al inicio solo si es seguro.',
        'Acelerar a fondo sin mirar, ya que el carril de aceleración otorga prioridad de incorporación.',
        'Detenerse obligatoriamente al final del carril antes de entrar.'
      ],
      en: [
        'Yield to traffic already on the main roadway, accelerating early only once merging is safe.',
        'Accelerate aggressively without checking, as acceleration lanes confer right of way.',
        'Mandatorily stop at the end of the lane before merging.'
      ],
      ca: [
        'Cedir el pas als vehicles que ja circulen per la calçada principal, accelerant només si és segur.',
        'Accelerar a fons sense mirar, ja que el carril d’acceleració atorga prioritat.',
        'Aturar-se obligatòriament al final del carril abans d’entrar.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El carril de aceleración no otorga prioridad. Si es necesario ceder el paso, debe hacerse al principio del carril para conservar espacio suficiente para acelerar después.',
      en: 'Acceleration lanes do not give right of way. If you must yield, stop at the start of the lane so you retain run-up space to match traffic speed later.',
      ca: 'El carril d’acceleració no dóna prioritat. Si cal cedir el pas, s’ha de fer al principi del carril per poder accelerar després.'
    }
  },
  {
    id: 'prio-008',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En un estrechamiento sin señales entre dos vehículos del mismo tipo en llano, ¿quién tiene prioridad?',
      en: 'On a flat, unmarked narrow road between two identical vehicles, who has right of way?',
      ca: 'En un estretament pla sense senyalitzar entre dos vehicles del mateix tipus, qui té preferència?'
    },
    options: {
      es: [
        'El que hubiera entrado primero al estrechamiento.',
        'El vehículo de mayor masa autorizada.',
        'El vehículo que circule a mayor velocidad.'
      ],
      en: [
        'The vehicle that entered the bottleneck first.',
        'The vehicle with higher gross weight rating.',
        'The vehicle driving faster.'
      ],
      ca: [
        'El que hagi entrat primer a l’estretament.',
        'El vehicle amb major massa autoritzada.',
        'El vehicle que circuli més ràpid.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En tramos estrechos sin señalizar en terreno llano, la preferencia corresponde al vehículo que hubiera entrado primero. En caso de duda, prevalece el vehículo con mayor dificultad de maniobra.',
      en: 'On level narrow passages without signs, priority belongs to the first vehicle to enter. If in doubt, order of vehicle maneuverability applies.',
      ca: 'En trams estrets plans sense senyals, té preferència el primer a entrar. En cas de dubte, qui tingui major dificultat de maniobra.'
    }
  },
  {
    id: 'prio-009',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Cuando un vehículo de emergencia circula en servicio urgente con señales luminosas y acústicas (V-1), ¿qué deben hacer los conductores?',
      en: 'When an emergency vehicle is on active duty with optical and acoustic signals (V-1), what must drivers do?',
      ca: 'Quan un vehicle d’emergència circula en servei urgent amb senyals lluminosos i acústics (V-1), què han de fer els conductors?'
    },
    options: {
      es: [
        'Facilitarles el paso inmediatamente, apartándose normalmente hacia la derecha o deteniéndose si es preciso.',
        'Acelerar para no entorpecer su trayectoria.',
        'Mantener la velocidad constante sin cambiar de carril.'
      ],
      en: [
        'Facilitate their passage immediately, typically moving to the right or stopping if necessary.',
        'Accelerate to stay ahead and clear of their path.',
        'Maintain constant speed without changing lanes.'
      ],
      ca: [
        'Facilitar-los el pas immediatament, apartant-se cap a la dreta o aturant-se si cal.',
        'Accelerar per no destorbar la seva trajectòria.',
        'Mantenir la velocitat sense moure’s de carril.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Todos los usuarios de la vía deben facilitar el paso de los vehículos prioritarios en servicio urgente, abriendo un corredor de emergencia o apartándose hacia la derecha.',
      en: 'All road users must clear the way for emergency vehicles on call, forming an emergency corridor or pulling over to the right.',
      ca: 'Tots els usuaris han de facilitar el pas als vehicles prioritaris, obrint un passadís o apartant-se a la dreta.'
    }
  },
  {
    id: 'prio-010',
    topicId: 'priority-roundabouts',
    question: {
      es: '¿Tiene prioridad un vehículo prioritario (ambulancia o policía) si únicamente lleva activadas las luces azules sin sirena?',
      en: 'Does an emergency vehicle (ambulance/police) retain priority if it only uses blue flashing lights without sirens?',
      ca: 'Té prioritat un vehicle d’emergència si només porta activats els llums blaus sense sirena?'
    },
    options: {
      es: [
        'Sí, las señales luminosas por sí solas bastan para advertir su carácter prioritario cuando la sirena pueda omitirse por seguridad.',
        'No, sin señal acústica pierde todos los derechos de prioridad.',
        'Solo tiene prioridad de noche.'
      ],
      en: [
        'Yes, optical signals alone are sufficient to convey priority status when sirens are prudently omitted.',
        'No, without acoustic sirens it forfeits all priority privileges.',
        'It only holds priority during night hours.'
      ],
      ca: [
        'Sí, els senyals lluminosos per si sols són suficients per indicar servei d’urgència quan la sirena s’omet per seguretat.',
        'No, sense senyal acústic perd qualsevol prioritat.',
        'Només té prioritat de nit.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los vehículos prioritarios pueden prescindir de la sirena acústica cuando no resulte estrictamente necesaria, manteniendo su condición prioritaria mediante las luces azules V-1.',
      en: 'Emergency vehicles can switch off sirens when not strictly required, retaining right-of-way through blue flashing lights alone.',
      ca: 'Els vehicles prioritaris poden prescindir de la sirena acústica sense perdre la seva condició de pas preferent amb els llums blaus V-1.'
    }
  },
  {
    id: 'prio-011',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Al girar con su vehículo en una intersección para entrar en otra vía, ¿debe ceder el paso a los peatones que la estén cruzando sin paso de cebra?',
      en: 'When turning into another street at an intersection, must you yield to pedestrians crossing it without a zebra crossing?',
      ca: 'En girar en una intersecció per entrar a una altra via, s’ha de cedir el pas als vianants que l’estan creuant sense pas de vianants?'
    },
    options: {
      es: [
        'Sí, los peatones tienen preferencia sobre los vehículos que cambian de dirección para acceder a esa vía.',
        'No, los peatones únicamente tienen prioridad si existe paso de peatones señalizado.',
        'Solo si los peatones son niños o personas mayores.'
      ],
      en: [
        'Yes, pedestrians have priority over vehicles turning off one road into another.',
        'No, pedestrians only have priority at officially marked zebra crossings.',
        'Only if the pedestrians are children or elderly people.'
      ],
      ca: [
        'Sí, els vianants tenen prioritat sobre els vehicles que giren per entrar a aquesta via.',
        'No, els vianants només tenen prioritat si hi ha pas de vianants senyalitzat.',
        'Només si són infants o persones grans.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El artículo 65 del RGC otorga prioridad al peatón que cruza una calzada cuando el vehículo gira para entrar en ella, aun cuando no exista paso de peatones pintado.',
      en: 'Traffic Article 65 gives pedestrians right of way across a street when a vehicle turns into it, even without a marked crossing.',
      ca: 'El Reglament atorga prioritat al vianant que creua una calçada quan un vehicle gira per entrar-hi, fins i tot sense pas pintat.'
    }
  },
  {
    id: 'prio-012',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En una intersección que carece de toda señalización, ¿a qué vehículos que se aproximen por la izquierda debe ceder el paso?',
      en: 'At an intersection lacking all road signs, to which vehicles approaching from the left must you yield?',
      ca: 'En una intersecció sense cap senyalització, a quins vehicles que s’aproximin per l’esquerra cal cedir el pas?'
    },
    options: {
      es: [
        'A los vehículos que circulan sobre raíles (tranvías o trenes).',
        'A los camiones de gran tonelaje.',
        'A las motocicletas.'
      ],
      en: [
        'To rail-bound vehicles (trams or trains).',
        'To heavy commercial trucks.',
        'To motorcycles.'
      ],
      ca: [
        'Als vehicles que circulen sobre rails (tramvies o trens).',
        'Als camions de gran tonatge.',
        'A les motocicletes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los vehículos que circulan sobre raíles tienen siempre preferencia de paso sobre los demás usuarios en cruces sin regular, con independencia del lado por el que se aproximen.',
      en: 'Rail-bound vehicles enjoy absolute priority over general traffic at unregulated crossings, regardless of approach direction.',
      ca: 'Els vehicles sobre rails tenen sempre prioritat de pas sobre la resta d’usuaris en cruïlles no regulades, vinguin pel costat que vinguin.'
    }
  },
  {
    id: 'prio-013',
    topicId: 'priority-roundabouts',
    question: {
      es: '¿Tienen preferencia los animales sobre los vehículos al cruzar la calzada?',
      en: 'Do animals have priority over vehicles when crossing a roadway?',
      ca: 'Tenen preferència els animals sobre els vehicles en creuar la calçada?'
    },
    options: {
      es: [
        'Solo cuando cruzan por una cañada debidamente señalizada con la señal de paso de animales domésticos acompañada del panel «Cañada».',
        'Sí, en todo momento en cualquier carretera convencional.',
        'No, los animales nunca gozan de prioridad sobre los vehículos.'
      ],
      en: [
        'Only when crossing through a livestock trail marked with the domestic animals sign supplemented by the "Cañada" plaque.',
        'Yes, at all times across any conventional rural road.',
        'No, animals never hold right of way over vehicular traffic.'
      ],
      ca: [
        'Només quan creuen per una carrerada senyalitzada amb el senyal d’animals domèstics i el rètol «Cañada».',
        'Sí, sempre a qualsevol carretera convencional.',
        'No, els animals mai tenen prioritat sobre els vehicles.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los animales solo tienen prioridad cuando cruzan por una cañada señalizada o cuando un vehículo gira para entrar en otra vía donde están cruzando animales.',
      en: 'Animals hold right of way strictly on marked livestock trails ("Cañadas") or when a motor vehicle turns into another road where animals are already crossing.',
      ca: 'Els animals només tenen prioritat en carrerades degudament senyalitzades o quan un vehicle gira per entrar a una altra via.'
    }
  },
  {
    id: 'prio-014',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En un cruce regulado por un semáforo con luz amarilla intermitente y una señal vertical de STOP, ¿cómo debe actuar?',
      en: 'At an intersection governed by a flashing amber traffic light alongside a vertical STOP sign, what must you do?',
      ca: 'En una cruïlla regulada per semàfor groc intermitent i un senyal vertical de STOP, com s’ha d’actuar?'
    },
    options: {
      es: [
        'Detenerse obligatoriamente antes de la línea, cumpliendo la señal de STOP.',
        'Pasar con precaución cediendo únicamente el paso a la derecha, ignorando el STOP.',
        'Acelerar para despejar la intersección con celeridad.'
      ],
      en: [
        'Mandatorily come to a full stop before the stop line, obeying the vertical STOP sign.',
        'Proceed with caution yielding only to the right, ignoring the STOP sign.',
        'Accelerate to clear the intersection swiftly.'
      ],
      ca: [
        'Aturar-se obligatòriament abans de la línia, complint el senyal de STOP.',
        'Passar amb precaució cedint només el pas a la dreta i ignorant el STOP.',
        'Accelerar per alliberar la intersecció amb rapidesa.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El semáforo en amarillo intermitente exige extremar la precaución y obedecer las demás señales verticales presentes en el cruce (en este caso, detenerse en el STOP).',
      en: 'A flashing amber light requires extreme caution while strictly obeying any present vertical signage (here, making a complete stop at the STOP sign).',
      ca: 'El semàfor groc intermitent obliga a extremar la precaució i obeir els senyals verticals de l’encreuament (en aquest cas, aturar-se al STOP).'
    }
  },
  {
    id: 'prio-015',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Circulando por un carril de deceleración o salida de autovía, ¿qué vehículo tiene la prioridad?',
      en: 'Driving in a deceleration lane to exit a motorway, which vehicle holds right of way?',
      ca: 'Circulant per un carril de desacceleració de sortida d’autovia, quin vehicle té la prioritat?'
    },
    options: {
      es: [
        'El vehículo que ya está circulando dentro del carril de deceleración sobre el que intenta entrar tarde.',
        'El vehículo de la calzada principal que cambia bruscamente sobre las líneas continuas.',
        'El que circule a mayor velocidad.'
      ],
      en: [
        'The vehicle already established inside the deceleration lane over any vehicle cutting in late.',
        'The vehicle on the main mainline carriageway cutting across solid lines.',
        'Whichever vehicle is traveling faster.'
      ],
      ca: [
        'El vehicle que ja circula dins del carril de desacceleració sobre qui intenta entrar tard.',
        'El vehicle de la via principal que creua bruscament línies contínues.',
        'El que circuli més ràpid.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Quien ya se encuentra incorporado en el carril de deceleración tiene prioridad de trayectoria frente a cualquier maniobra tardía de acceso.',
      en: 'Vehicles already positioned inside the deceleration lane have right-of-way over late cutting maneuvers from the highway.',
      ca: 'Qui ja circula dins del carril de desacceleració té prioritat respecte a maniobres tardanes.'
    }
  },
  {
    id: 'prio-016',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Si dos vehículos de distinto tipo coinciden en un paso estrecho sin señalizar y no se sabe quién entró primero, ¿quién pasa antes entre un turismo y un camión?',
      en: 'If a car and a truck meet in an unmarked narrow passage with unknown order of arrival, who has right of way?',
      ca: 'Si un turisme i un camió coincideixen en un pas estret sense senyalitzar i es desconeix qui va entrar primer, qui passa abans?'
    },
    options: {
      es: [
        'El camión, por tener mayor masa y mayor dificultad de maniobra.',
        'El turismo, por ser más ligero y ágil.',
        'El que circule en sentido descendente.'
      ],
      en: [
        'The truck, due to greater weight and higher maneuver difficulty.',
        'The passenger car, because it is lighter and nimble.',
        'Whichever vehicle is traveling downhill.'
      ],
      ca: [
        'El camió, per tenir major massa i dificultat de maniobra.',
        'El turisme, per ser més lleuger.',
        'El que circuli en sentit descendent.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En la escala oficial de preferencia en estrechamientos sin señalizar (art. 102 RGC), los camiones y tractocamiones tienen preferencia sobre los turismos y furgonetas.',
      en: 'Under the official DGT narrow passage hierarchy (Art. 102), heavy trucks take precedence over passenger cars and vans.',
      ca: 'En l’escala oficial de passos estrets no senyalitzats, els camions tenen preferència sobre els turismes.'
    }
  },
  {
    id: 'prio-017',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Entre un turismo particular y un turismo que arrastra un remolque de 750 kg en un estrechamiento en llano no señalizado, ¿quién tiene prioridad?',
      en: 'Between a solo car and a car towing a 750 kg trailer on an unmarked flat bottleneck, who has right of way?',
      ca: 'Entre un turisme sol i un turisme que arrossega un remolc en un estretament pla no senyalitzat, qui té prioritat?'
    },
    options: {
      es: [
        'El turismo con remolque, por su mayor dificultad para dar marcha atrás.',
        'El turismo solo, al no llevar masa remolcada.',
        'El que tenga el motor más potente.'
      ],
      en: [
        'The car with the trailer, due to the difficulty of reversing combination vehicles.',
        'The solo passenger car, since it has no trailed load.',
        'The one with the more powerful engine.'
      ],
      ca: [
        'El turisme amb remolc, per la seva major dificultat per fer marxa enrere.',
        'El turisme sol, en no portar massa remolcada.',
        'El que tingui el motor més potent.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los conjuntos de vehículos (turismos con remolque) tienen preferencia de paso sobre los vehículos simples en estrechamientos no señalizados en terreno llano.',
      en: 'Vehicle combinations (cars with trailers) have precedence over single motor vehicles on unmarked level road narrows.',
      ca: 'Els conjunts de vehicles (amb remolc) tenen preferència de pas sobre els vehicles simples en passos estrets plans.'
    }
  },
  {
    id: 'prio-018',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Al incorporarse a la vía pública desde un garaje o camino privado, ¿a quién se debe ceder el paso?',
      en: 'When entering a public street from a private driveway or garage, to whom must you yield?',
      ca: 'En incorporar-se a la via pública des d’un garatge o camí privat, a qui cal cedir el pas?'
    },
    options: {
      es: [
        'A todos los usuarios que circulen por la vía pública (peatones, ciclistas y vehículos en ambos sentidos).',
        'Únicamente a los vehículos que se acerquen por la derecha.',
        'Solo a los peatones que circulen por la acera.'
      ],
      en: [
        'To all users moving along the public way (pedestrians, cyclists, and vehicular traffic from both directions).',
        'Only to motor vehicles approaching from the right.',
        'Exclusively to pedestrians on the sidewalk.'
      ],
      ca: [
        'A tots els usuaris que circulin per la via pública (vianants, ciclistes i vehicles d’ambdós sentits).',
        'Únicament als vehicles que s’apropin per la dreta.',
        'Només als vianants que circulin per la vorera.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Al salir de propiedades privadas, aparcamientos o caminos de servicio, nunca se goza de prioridad; debe cederse el paso a todos los usuarios de la vía principal.',
      en: 'Entering from private premises, car parks, or service tracks grants zero priority; you must yield to all public road traffic.',
      ca: 'En sortir de finques privades, mai es té prioritat; cal cedir el pas a tots els usuaris de la via pública.'
    }
  },
  {
    id: 'prio-019',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Si las barreras de un paso a nivel comienzan a descender o la luz roja luce fija o intermitente, ¿qué debe hacer?',
      en: 'If level crossing barriers begin descending or red lights flash, what must the driver do?',
      ca: 'Si les barreres d’un pas a nivell comencen a baixar o el llum vermell parpelleja, què ha de fer?'
    },
    options: {
      es: [
        'Detenerse obligatoriamente antes de la línea de detención o señal y no cruzar bajo ninguna circunstancia.',
        'Acelerar rápidamente antes de que bajen completamente.',
        'Pasar haciendo zig-zag si no se divisa ningún tren en aproximación.'
      ],
      en: [
        'Mandatorily stop before the stop line or signal and do not cross under any circumstances.',
        'Accelerate sharply to beat the barrier descent.',
        'Weave around barriers if no train is spotted.'
      ],
      ca: [
        'Aturar-se obligatòriament abans de la línia de detenció i no creuar sota cap circumstància.',
        'Accelerar ràpidament abans que baixin del tot.',
        'Passar fent ziga-zaga si no es veu cap tren a la vora.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Ningún usuario puede penetrar en un paso a nivel cuyas barreras estén en movimiento, bajadas o con semáforo rojo activo; cruzar acarrea retirada de puntos y riesgo vital.',
      en: 'Entering a rail crossing with moving or lowered barriers or an active red light is illegal, carries severe license penalties, and endangers life.',
      ca: 'Cap usuari pot entrar en un pas a nivell amb barreres en moviment, baixades o llum vermell encès.'
    }
  },
  {
    id: 'prio-020',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En una intersección donde las señales verticales contradicen las marcas viales pintadas en el pavimento, ¿cuál prevalece?',
      en: 'At an intersection where vertical signs contradict road markings painted on the pavement, which takes precedence?',
      ca: 'En una cruïlla on els senyals verticals contradiuen les marques vials del terra, quina preval?'
    },
    options: {
      es: [
        'La señal vertical, por tener mayor rango jerárquico que las marcas viales.',
        'La marca vial pintada, por ser más próxima al conductor.',
        'Ninguna, se aplica la norma de ceder a la derecha.'
      ],
      en: [
        'The vertical sign, as it holds higher hierarchical standing than road surface markings.',
        'The painted road marking, as it is closest to the vehicle wheels.',
        'Neither, default right-hand priority takes over.'
      ],
      ca: [
        'El senyal vertical, per tenir major rang jeràrquic que les marques vials.',
        'La marca vial pintada, per ser més pròxima al conductor.',
        'Cap dels dos, s’aplica la norma de la dreta.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En el orden jerárquico de señales: 1º Agentes, 2º Balizamiento/obras, 3º Semáforos, 4º Señales verticales y 5º Marcas viales. La señal vertical siempre se impone a la pintura del suelo.',
      en: 'Signal hierarchy order: 1st Traffic officers, 2nd Cones/construction, 3rd Traffic lights, 4th Vertical signs, 5th Road markings. Vertical signs always supersede surface pavement paint.',
      ca: 'En la jerarquia de senyals, els senyals verticals estan per sobre de les marques vials pintades al paviment.'
    }
  },
  {
    id: 'prio-021',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Un semáforo redondo presenta una flecha verde iluminada sobre fondo negro apuntando a la derecha. ¿Qué indica?',
      en: 'A round traffic signal shows an illuminated green arrow pointing right against a dark lens. What does it mean?',
      ca: 'Un semàfor mostra una fletxa verda encesa cap a la dreta sobre fons negre. Què indica?'
    },
    options: {
      es: [
        'Permite avanzar exclusivamente hacia la derecha, pero cediendo el paso a los vehículos que ya circulen por esa vía.',
        'Prioridad absoluta para realizar el giro a la derecha sin ceder el paso a nadie.',
        'Obligación de detenerse antes de girar a la derecha.'
      ],
      en: [
        'Allows proceeding right only, yielding right of way to traffic already moving on that street.',
        'Absolute priority to turn right without yielding to anyone.',
        'Obligation to come to a full stop before turning right.'
      ],
      ca: [
        'Permet avançar exclusivament cap a la dreta, però cedint el pas als vehicles que ja hi circulen.',
        'Prioritat absoluta per girar a la dreta sense cedir el pas.',
        'Obligació d’aturar-se abans de girar a la dreta.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La flecha verde adicional autoriza a girar en el sentido indicado dejando expedito el cruce, pero obliga a ceder el paso a los vehículos de la vía a la que se accede.',
      en: 'A green filter arrow authorizes turning in the arrow direction, but obligates yielding to traffic already moving along that road.',
      ca: 'La fletxa verda autoritza el gir cap a la dreta, però obliga a cedir el pas als vehicles que ja circulen per la via.'
    }
  },
  {
    id: 'prio-022',
    topicId: 'priority-roundabouts',
    question: {
      es: '¿Se puede adelantar por el interior de una glorieta?',
      en: 'Can you overtake vehicles using the inside lane of a roundabout?',
      ca: 'Es pot avançar per l’interior d’una rotonda?'
    },
    options: {
      es: [
        'Sí, en glorietas con carriles delimitados se aplican las reglas de vías urbanas y se puede circular por el carril que mejor convenga.',
        'No, en las glorietas está prohibido todo adelantamiento.',
        'Solo si el vehículo del carril exterior es un camión pesado.'
      ],
      en: [
        'Yes, in roundabouts with marked lanes standard multi-lane rules apply and inner lanes may be used.',
        'No, overtaking inside a roundabout is completely banned.',
        'Only if the vehicle in the outer lane is a heavy commercial truck.'
      ],
      ca: [
        'Sí, a les rotondes amb carrils delimitats s’apliquen les normes de vies urbanes i es pot circular pel carril més convenient.',
        'No, a les rotondes està prohibit qualsevol avançament.',
        'Només si el vehicle del carril exterior és un camió pesat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En glorietas dentro de poblado o con carriles debidamente delimitados, se permite utilizar los carriles interiores para adelantar, pero siempre se debe retornar al exterior para salir.',
      en: 'In marked multi-lane roundabouts you may use the inner lanes to overtake, but you must switch back to the outside lane before exiting.',
      ca: 'A les rotondes amb carrils marcats es poden fer servir els interiors per avançar, però cal tornar a l’exterior per sortir.'
    }
  },
  {
    id: 'prio-023',
    topicId: 'priority-roundabouts',
    question: {
      es: 'Si un vehículo particular realiza un servicio de emergencia (traslado de un enfermo grave), ¿cómo debe advertir su presencia?',
      en: 'If a private car is performing an emergency service (transporting a critically ill patient), how must it alert others?',
      ca: 'Si un vehicle particular realitza un servei d’urgència (trasllat d’un malalt greu), com ha d’avisar la seva presència?'
    },
    options: {
      es: [
        'Utilizando el claxon intermitentemente, las luces de emergencia y agitando un pañuelo por la ventanilla.',
        'Encendiendo las luces antiniebla y superando los límites de velocidad.',
        'No tiene derecho a advertirlo de ninguna forma.'
      ],
      en: [
        'Using intermittent horn blasts, hazard lights, and waving a handkerchief from the window.',
        'Turning on high fog beams and ignoring all speed regulations.',
        'Private vehicles have no legal right to signal emergencies.'
      ],
      ca: [
        'Fent servir el clàxon de forma intermitent, llums d’emergència i agitant un mocador per la finestra.',
        'Encenent els llums antiboira i superant els límits de velocitat.',
        'No té dret a avisar-ho de cap manera.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'En situaciones de auxilio extremo, un vehículo no prioritario debe usar el avisador acústico a intervalos, luces de emergencia o agitar un pañuelo, respetando siempre las normas de prioridad.',
      en: 'In critical medical emergencies, private drivers must signal with intermittent horn sounds, hazard flashers, or a cloth, but remain bound to respect priority at intersections.',
      ca: 'En cas d’urgència mèdica extrema, un vehicle particular ha de fer servir el clàxon, els llums d’emergència i mocador, respectant sempre la seguretat vial.'
    }
  },
  {
    id: 'prio-024',
    topicId: 'priority-roundabouts',
    question: {
      es: 'En una plaza de circulación giratoria que no sea glorieta formal (sin señal R-402 ni Ceda el Paso al entrar), ¿cómo se rige la prioridad?',
      en: 'In a circular traffic square that is not a signed roundabout, how is priority governed?',
      ca: 'En una plaça de circulació giratòria que no sigui rotonda formal, com es regeix la prioritat?'
    },
    options: {
      es: [
        'Se aplica la norma general: tiene prioridad el vehículo que entra por la derecha sobre el que ya circula dentro.',
        'Siempre tiene prioridad quien circula por el centro del anillo.',
        'Tiene prioridad el vehículo que circula a mayor velocidad.'
      ],
      en: [
        'General priority rules apply: vehicles entering from the right take precedence over circulating traffic.',
        'Priority always remains with vehicles inside the ring.',
        'The vehicle traveling faster gets right of way.'
      ],
      ca: [
        'S’aplica la norma general: té prioritat el vehicle que entra per la dreta sobre el que circula a dins.',
        'Sempre té prioritat qui circula pel mig de l’anell.',
        'Té prioritat el vehicle que circula més ràpid.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Si no existe señalización expresa de glorieta (R-402 o Ceda el Paso en los accesos), rige la norma básica del Código: ceder el paso a los que acceden por la derecha.',
      en: 'Unless explicitly signed as a roundabout (with R-402 or Yield signs), circular squares default to the standard right-hand priority rule.',
      ca: 'Si no hi ha senyalització expressa de rotonda, regeix la norma bàsica de cedir el pas als qui entren per la dreta.'
    }
  },
  {
    id: 'prio-025',
    topicId: 'priority-roundabouts',
    question: {
      es: '¿Debe ceder el paso a un autobús escolar que está realizando una parada para subir o bajar escolares?',
      en: 'Must you yield or exercise special caution near a school bus halted to let students on or off?',
      ca: 'S’ha de cedir el pas o extremar la precaució davant d’un autobús escolar aturat per a la pujada d’alumnes?'
    },
    options: {
      es: [
        'Se debe reducir la velocidad y detenerse si fuera preciso ante la posibilidad de que niños irrumpan en la calzada.',
        'Se debe adelantar con rapidez tocando el claxon de aviso.',
        'Los autobuses escolares solo tienen prioridad en autopistas.'
      ],
      en: [
        'Speed must be reduced and you must stop if necessary due to the risk of children running into the road.',
        'You should overtake quickly while sounding the horn.',
        'School buses only have priority on motorways.'
      ],
      ca: [
        'Cal reduir la velocitat i aturar-se si fos necessari davant del risc que els infants creuin la calçada.',
        'Cal avançar ràpidament fent sonar el clàxon.',
        'Els autobusos escolars només tenen prioritat en autopistes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La proximidad de un autobús escolar detenido requiere extremar las precauciones y moderar la velocidad de forma preventiva por el peligro de atropello infantil imprevisto.',
      en: 'A halted school bus requires extreme caution and defensive speed reduction due to unpredictable child pedestrian behavior around the vehicle.',
      ca: 'Un autobús escolar aturat exigeix extremar precaucions i moderar la marxa pel risc d’atropellament infantil imprevist.'
    }
  }
];