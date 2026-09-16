import { Question } from '@/types';

export const MECHANICS_WEATHER_QUESTIONS: Question[] = [
  {
    id: 'mech-001',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Cuál es la profundidad mínima legal que debe tener el dibujo de los neumáticos en un turismo?',
      en: 'What is the minimum legal tread depth for tires on a passenger car?',
      ca: 'Quina és la profunditat mínima legal que ha de tenir el dibuix dels pneumàtics en un turisme?'
    },
    options: {
      es: ['1,6 milímetros.', '2,0 milímetros.', '1,0 milímetro.'],
      en: ['1.6 millimeters.', '2.0 millimeters.', '1.0 millimeter.'],
      ca: ['1,6 mil·límetres.', '2,0 mil·límetres.', '1,0 mil·límetre.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La profundidad mínima en las ranuras principales de la banda de rodadura de un turismo es de 1,6 mm. Por debajo de esa cota el neumático es ilegal.',
      en: 'The legal minimum depth in the main grooves of the tire tread is 1.6 mm. Below this value, the tire is unroadworthy and illegal.',
      ca: 'La profunditat mínima a les ranures principals de la banda de rodament és d’1,6 mm.'
    }
  },
  {
    id: 'mech-002',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Cómo se debe comprobar la presión de inflado de los neumáticos de un vehículo?',
      en: 'How should tire inflation pressure be measured correctly?',
      ca: 'Com s’ha de comprovar la pressió d’inflat dels pneumàtics d’un vehicle?'
    },
    options: {
      es: [
        'Con los neumáticos completamente fríos, siguiendo las recomendaciones del fabricante.',
        'Inmediatamente después de un viaje largo a alta velocidad por autopista.',
        'Únicamente cuando los neumáticos presenten deformaciones visuales.'
      ],
      en: [
        'When the tires are completely cold, matching manufacturer specifications.',
        'Immediately after a long high-speed motorway run.',
        'Only when the tires show visible surface deformation.'
      ],
      ca: [
        'Amb els pneumàtics completament freds, segons les xifres del fabricant.',
        'Immediatament després d’un viatge llarg per autopista.',
        'Només quan els pneumàtics presentin deformacions visibles.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El calor de la marcha incrementa la presión del aire interno. Medir la presión en caliente arroja lecturas falsas.',
      en: 'Friction and road heat raise internal tire pressure. Measuring warm tires gives inflated readings.',
      ca: 'L’escalfor de la marxa incrementa la pressió interna de l’aire; cal mesurar sempre en fred.'
    }
  },
  {
    id: 'mech-003',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué fenómeno se produce cuando el neumático pierde el contacto con la calzada al flotar sobre una lámina de agua acumulada?',
      en: 'What phenomenon occurs when a tire loses contact with the pavement by riding on a sheet of standing water?',
      ca: 'Quin fenomen es produeix quan el pneumàtic perd el contacte amb la calçada en surar sobre una capa d’aigua acumulada?'
    },
    options: {
      es: ['Aquaplaning o hidroplaneo.', 'Efecto túnel.', 'Fatiga de frenada o fading.'],
      en: ['Aquaplaning (hydroplaning).', 'Tunnel vision effect.', 'Brake fade.'],
      ca: ['Aquaplaning o hidroplanejament.', 'Efecte túnel.', 'Fatiga de frens o fading.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El aquaplaning ocurre cuando el dibujo del neumático no desaloja suficiente agua, perdiendo la dirección y la adherencia por completo.',
      en: 'Aquaplaning occurs when tire grooves fail to displace sufficient water, floating over the surface with complete loss of traction and steering.',
      ca: 'L’aquaplaning es produeix quan les ranures no evacuen l’aigua a temps, perdent per complet el control de la direcció.'
    }
  },
  {
    id: 'mech-004',
    topicId: 'mechanics-weather',
    question: {
      es: 'En un vehículo dotado de sistema antibloqueo de frenos (ABS), ante una frenada de emergencia extrema se debe:',
      en: 'In a car equipped with an Anti-lock Braking System (ABS), during an emergency stop you must:',
      ca: 'En un vehicle equipat amb ABS, davant d’una frenada d’emergència extrema s’ha de:'
    },
    options: {
      es: [
        'Pisar a fondo y de forma continua el pedal del freno y el embrague, sin soltar la presión a pesar de las vibraciones.',
        'Bombear el pedal de freno de forma intermitente para no bloquear las ruedas.',
        'Tirar con fuerza del freno de mano para reducir la distancia de frenado.'
      ],
      en: [
        'Firmly floor both the brake and clutch pedals continuously without releasing, ignoring pulsation/vibrations.',
        'Pump the brake pedal on and off repeatedly to avoid locking.',
        'Yank the handbrake aggressively to shorten the stopping distance.'
      ],
      ca: [
        'Trepitjar a fons i de forma continuada el fre i l’embragatge, sense afluixar malgrat les vibracions.',
        'Bombar el fre de manera intermitent per no blocar les rodes.',
        'Estirar el fre de mà per escurçar la distància d’aturada.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Con ABS se debe pisar el freno a fondo y mantenerlo presionado. Las vibraciones y ruidos en el pedal son normales y confirman que el ABS está modulando la presión.',
      en: 'With ABS, press the brake pedal as hard as possible and hold it down. The pedal pulsing indicates the ABS is actively cycling braking pressure.',
      ca: 'Amb ABS cal trepitjar el fre amb tota la força i mantenir-lo premut; les vibracions indiquen que el sistema treballa correctament.'
    }
  },
  {
    id: 'mech-005',
    topicId: 'mechanics-weather',
    question: {
      es: 'Circular con una presión de inflado notablemente inferior a la recomendada provoca:',
      en: 'Driving with tire pressures significantly below manufacturer recommendations causes:',
      ca: 'Circular amb una pressió notablement inferior a la recomanada provoca:'
    },
    options: {
      es: [
        'Mayor consumo de combustible, mayor desgaste en los bordes de la banda y mayor riesgo de reventón.',
        'Un desgaste acusado únicamente en la parte central de la banda de rodadura.',
        'Menor distancia de frenado sobre pavimento seco.'
      ],
      en: [
        'Higher fuel consumption, severe wear on outer tread shoulders, and increased risk of a blowout.',
        'Accelerated wear confined only to the center stripe of the tread.',
        'Shorter stopping distances on dry pavement.'
      ],
      ca: [
        'Major consum de combustible, desgast pels flancs de la banda i alt risc de rebentada.',
        'Un desgast localitzat només a la part central del pneumàtic.',
        'Menor distància de frenada sobre paviment sec.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La baja presión aumenta la resistencia a la rodadura, calienta en exceso la carcasa del neumático y desgasta prematuramente los hombros exteriores.',
      en: 'Under-inflation increases rolling resistance, overheats the tire carcass, and wears down the outer shoulders.',
      ca: 'La pressió baixa augmenta la resistència de rodament, sobreescalfa el pneumàtic i desgasta els costats.'
    }
  },
  {
    id: 'mech-006',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Cómo y cuándo debe comprobarse el nivel de aceite del motor mediante la varilla de medición?',
      en: 'How and when should engine oil level be inspected using the dipstick?',
      ca: 'Com i quan s’ha de comprovar el nivell d’oli del motor amb la vareta de mesura?'
    },
    options: {
      es: [
        'Con el motor frío (o apagado varios minutos) y el vehículo situado sobre una superficie estrictamente horizontal.',
        'Con el motor en marcha al ralentí en cualquier pendiente.',
        'Inmediatamente después de apagar el motor en caliente sin esperar reposo.'
      ],
      en: [
        'With the engine cold (or switched off several minutes) and vehicle on strictly level ground.',
        'With the engine idling on any slope.',
        'Immediately after turning off a hot engine without waiting.'
      ],
      ca: [
        'Amb el motor fred (o parat uns minuts) i el vehicle en un pla horitzontal.',
        'Amb el motor al ralentí en qualsevol pendent.',
        'Immediatament després d’aturar el motor calent.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Para una lectura fiable, el aceite debe haber decantado por completo en el cárter y el coche estar en plano; la marca debe situarse entre el mínimo y el máximo.',
      en: 'For an accurate reading, oil must drain back into the sump with the vehicle on flat ground; the level must sit between min and max.',
      ca: 'Per a una mesura exacta l’oli ha d’haver baixat al càrter en una superfície plana; el nivell ha d’estar entre el mínim i el màxim.'
    }
  },
  {
    id: 'mech-007',
    topicId: 'mechanics-weather',
    question: {
      es: 'Si el motor sufre un sobrecalentamiento imprevisto en carretera, ¿qué riesgo supone abrir el tapón del vaso de expansión con el motor caliente?',
      en: 'If the engine overheats on the road, what danger arises from opening the coolant reservoir cap while hot?',
      ca: 'Si el motor s’escalfa perillosament a la carretera, quin perill té obrir el tap del vas d’expansió calent?'
    },
    options: {
      es: [
        'Grave riesgo de quemaduras térmicas por la proyección violenta de vapor y líquido refrigerante a presión.',
        'Ninguno, el circuito se despresuriza de forma controlada.',
        'Que el motor se bloquee mecánicamente al instante.'
      ],
      en: [
        'Severe risk of thermal burns from explosive geysering of scalding steam and pressurized coolant.',
        'None, the cooling system depressurizes safely.',
        'The engine blocks mechanically immediately.'
      ],
      ca: [
        'Greu perill de cremades per expulsió violenta de vapor i líquid refrigerant bullint a pressió.',
        'Cap risc.',
        'El motor es trenca immediatament.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El circuito de refrigeración trabaja bajo alta presión cuando está caliente; desenroscar el tapón libera líquido hirviendo y vapor que causan graves quemaduras.',
      en: 'The engine coolant circuit operates under intense pressure; opening the cap hot releases boiling water and steam.',
      ca: 'El circuit de refrigeració treballa a pressió; obrir el tap calent allibera aigua bullint que pot causar cremades molt greus.'
    }
  },
  {
    id: 'mech-008',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué momento de la lluvia es el más peligroso para la adherencia y el control del vehículo?',
      en: 'Which stage of a rainfall presents the greatest danger for tire traction and vehicle control?',
      ca: 'Quin moment de la pluja és el més perillós per a l’adherència i control del vehicle?'
    },
    options: {
      es: [
        'Las primeras gotas de lluvia, al mezclarse el agua con el polvo y grasa del asfalto formando un barro resbaladizo.',
        'Cuando lleva varias horas diluviando y el asfalto está limpio.',
        'Justo cuando la lluvia ha cesado por completo y el asfalto comienza a secarse.'
      ],
      en: [
        'The very first raindrops, as water mixes with surface road grime and oil to create a slippery slick.',
        'After hours of torrential downpour when the pavement is thoroughly washed clean.',
        'Right after the rain stops when the asphalt starts drying.'
      ],
      ca: [
        'Les primeres gotes de pluja, en barrejar-se l’aigua amb la pols i greix de l’asfalt creant una pasta relliscosa.',
        'Quan fa hores que plou.',
        'Quan comença a assecar-se.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Al empezar a llover, las primeras gotas forman con el polvo y restos de aceite una película deslizante extraordinariamente peligrosa que multiplica la distancia de frenado.',
      en: 'Initial raindrops combine with oil residue and dust on the road surface into a greasy paste with minimal friction.',
      ca: 'En començar a ploure, les gotes creen una capa amb greix i pols molt lliscant que redueix sobtadament l’adherència.'
    }
  },
  {
    id: 'mech-009',
    topicId: 'mechanics-weather',
    question: {
      es: '¿En qué ruedas es obligatorio instalar las cadenas para nieve en un turismo de tracción delantera?',
      en: 'On which wheels must snow chains be fitted on a front-wheel-drive passenger car?',
      ca: 'A quines rodes és obligatori posar les cadenes per a neu en un turisme de tracció davantera?'
    },
    options: {
      es: [
        'Al menos en las dos ruedas motrices (las delanteras en vehículos de tracción delantera).',
        'En las dos ruedas traseras para evitar trompos.',
        'En las cuatro ruedas de forma inexcusable en cualquier caso.'
      ],
      en: [
        'At least on the two driving wheels (the front wheels on front-wheel-drive vehicles).',
        'On the two rear wheels to avoid fishtailing.',
        'On all four wheels unconditionally in every vehicle.'
      ],
      ca: [
        'Com a mínim a les dues rodes motrius (les davanteres en vehicles de tracció davantera).',
        'A les dues rodes del darrere.',
        'A les quatre rodes sempre.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las cadenas o fundas textiles homologadas deben colocarse como mínimo en las ruedas que transmiten la fuerza del motor (ruedas motrices).',
      en: 'Snow chains or certified fabric socks must be fitted at minimum to the driving axle that receives engine torque.',
      ca: 'Les cadenes per a neu s’han d’instal·lar com a mínim a l’eix motriu que rep la força del motor.'
    }
  },
  {
    id: 'mech-010',
    topicId: 'mechanics-weather',
    question: {
      es: '¿A qué velocidad máxima se puede circular cuando se llevan instaladas cadenas metálicas de nieve en las ruedas?',
      en: 'What is the maximum driving speed allowed when metal snow chains are mounted on the tires?',
      ca: 'A quina velocitat màxima es pot circular quan es porten cadenes metàl·liques posades?'
    },
    options: {
      es: ['A no más de 50 km/h.', 'A 80 km/h.', 'A 30 km/h.'],
      en: ['No more than 50 km/h.', 'At 80 km/h.', 'At 30 km/h.'],
      ca: ['A no més de 50 km/h.', 'A 80 km/h.', 'A 30 km/h.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Con cadenas de nieve nunca se deben superar los 50 km/h para evitar romper los eslabones, dañar la carrocería o perder el control dinámico.',
      en: 'With snow chains installed, maximum speed is capped at 50 km/h to prevent mechanical failure or vehicle instability.',
      ca: 'Amb cadenes no s’han de superar mai els 50 km/h per no trencar baules ni danyar la suspensió.'
    }
  },
  {
    id: 'mech-011',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué función desempeña el Control Electrónico de Estabilidad (ESP / ESC)?',
      en: 'What function is performed by the Electronic Stability Program (ESP / ESC)?',
      ca: 'Quina funció fa el Control Electrònic d’Estabilitat (ESP)?'
    },
    options: {
      es: [
        'Frena selectivamente ruedas individuales para corregir pérdidas de trayectoria por subviraje o sobreviraje.',
        'Evita que las ruedas patinen únicamente durante las aceleraciones en línea recta.',
        'Aumenta la potencia del motor cuando el firme está mojado.'
      ],
      en: [
        'Selectively applies braking to individual wheels to correct trajectory loss from understeer or oversteer.',
        'Prevents wheel spin exclusively during straight-line acceleration.',
        'Increases engine power when roads are wet.'
      ],
      ca: [
        'Frena de forma selectiva rodes individuals per corregir derrapades de subviratge o sobreviratge.',
        'Evita que patinin les rodes en línia recta.',
        'Augmenta la potència del motor amb pluja.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El ESP compara el giro del volante con la trayectoria real del coche; si detecta derrape, frena automáticamente la rueda precisa para devolver el vehículo al carril.',
      en: 'ESP compares steering input with real yaw rate, selectively braking individual wheels to recover directional control.',
      ca: 'L’ESP detecta pèrdues de trajectòria i frena rodes individuals de manera automàtica per reconduir el cotxe.'
    }
  },
  {
    id: 'mech-012',
    topicId: 'mechanics-weather',
    question: {
      es: 'Al arrancar un vehículo con pinzas de batería conectado a otro vehículo auxiliar, ¿cuál es el orden correcto de conexión?',
      en: 'When jump-starting a dead battery with booster cables from a donor car, what is the correct connection sequence?',
      ca: 'En engegar un cotxe amb pinces de bateria connectat a un altre cotxe, quin és l’ordre correcte de connexió?'
    },
    options: {
      es: [
        '1º Pinza roja a positivo averiado, 2º roja a positivo auxiliar, 3º negra a negativo auxiliar, 4º negra a masa metálica del coche averiado.',
        '1º Conectar ambos cables negros a los bornes negativos, luego los rojos a positivos.',
        'Conectar los cuatro cables con ambos motores acelerando a fondo.'
      ],
      en: [
        '1st Red to dead positive, 2nd Red to donor positive, 3rd Black to donor negative, 4th Black to chassis ground of dead car.',
        '1st Connect both black cables to negative posts, then reds to positive posts.',
        'Connect all four clamps while revving both engines.'
      ],
      ca: [
        '1r Pinça vermella a positiu descarregat, 2n vermella a positiu auxiliar, 3r negra a negatiu auxiliar, 4t negra a massa metàl·lica.',
        '1r Connectar els dos cables negres i després els vermells.',
        'Connectar-ho tot amb els dos motors en marxa.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Primero se conectan los bornes positivos (+) con cable rojo y luego el negativo (-) con cable negro al chasis/masa para evitar chispas peligrosas sobre la batería.',
      en: 'Connect positives first (+) using red cables, then negatives (-) with black, terminating on clean unpainted chassis ground to avoid ignition sparks.',
      ca: 'Primer es connecten els positius (+) en vermell i després el negatiu (-) en negre a massa per evitar espurnes inflamables.'
    }
  },
  {
    id: 'mech-013',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué síntoma delata que las pastillas o discos de freno se encuentran excesivamente desgastados?',
      en: 'Which symptom indicates that the brake pads or rotors are excessively worn?',
      ca: 'Quin símptoma adverteix que les pastilles o discos de fre estan excessivament desgastats?'
    },
    options: {
      es: [
        'Un chirrido metálico estridente al frenar, tacto esponjoso en el pedal o aumento del recorrido del pedal.',
        'Que el volante gire con menor resistencia.',
        'Un olor a gasolina sin quemar en el habitáculo.'
      ],
      en: [
        'A high-pitched metallic screech during braking, a spongy pedal, or increased pedal travel.',
        'The steering wheel turning with less resistance.',
        'Smell of unburnt fuel inside the passenger cabin.'
      ],
      ca: [
        'Un xerric metàl·lic en frenar, pedal tou o augment del recorregut del pedal de fre.',
        'Que el volant giri més suau.',
        'Olor de benzina dins l’habitacle.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El avisador acústico metálico de las pastillas emite un chirrido agudo cuando el material de fricción se agota para advertir del cambio urgente.',
      en: 'Brake wear indicators emit an audible metallic scraping sound once friction material wears below safety margins.',
      ca: 'El testimoni metàl·lic de les pastilles grinyola agudament en fregar el disc quan cal substituir-les.'
    }
  },
  {
    id: 'mech-014',
    topicId: 'mechanics-weather',
    question: {
      es: 'Al conducir con nieve compacta o hielo sobre la calzada, ¿cómo se debe arrancar y acelerar el vehículo?',
      en: 'When driving on hard-packed snow or ice, how should you pull away and accelerate?',
      ca: 'En conduir amb neu o gel a la calçada, com s’ha d’arrencar i accelerar el vehicle?'
    },
    options: {
      es: [
        'Arrancar suavemente en segunda velocidad (si es posible) y acelerar con extrema delicadeza.',
        'Arrancar en primera velocidad pisando a fondo el acelerador para romper el hielo.',
        'Acelerar bruscamente soltando de golpe el pedal del embrague.'
      ],
      en: [
        'Pull away gently in second gear (if feasible) and apply the accelerator with extreme delicacy.',
        'Start in first gear flooring the throttle to bite into the ice.',
        'Dump the clutch pedal aggressively while revving high.'
      ],
      ca: [
        'Arrencar suaument en segona marxa (si és possible) i accelerar amb màxima suavitat.',
        'Arrencar en primera accelerant a fons.',
        'Deixar anar l’embragatge de cop.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Iniciar la marcha en 2ª marcha entrega menor par a las ruedas motrices, reduciendo el patinamiento sobre firmes resbaladizos.',
      en: 'Starting off in 2nd gear dampens wheel torque, minimizing wheelspin over zero-traction ice surfaces.',
      ca: 'Sortir en segona velocitat transmet menys força a les rodes i evita que patinin sobre el gel.'
    }
  },
  {
    id: 'mech-015',
    topicId: 'mechanics-weather',
    question: {
      es: 'Cuando sopla un fuerte viento lateral racheado por la izquierda, ¿dónde se produce el momento de mayor peligro por efecto pantalla?',
      en: 'When experiencing strong gusty crosswinds from the left, where does the highest danger occur due to the screen effect?',
      ca: 'Quan bufa vent lateral rachejat per l’esquerra, on es produeix el major perill per efecte pantalla?'
    },
    options: {
      es: [
        'Al salir de la protección de un túnel o terminar de adelantar a un vehículo pesado voluminoso.',
        'Mientras se circula protegido dentro del túnel.',
        'Al circular por una recta llana sin obstáculos.'
      ],
      en: [
        'When exiting the shelter of a tunnel or just finishing overtaking a large commercial truck.',
        'While traveling inside the sheltered tunnel passage.',
        'When driving along an open straight road without obstacles.'
      ],
      ca: [
        'En sortir de la protecció d’un túnel o en acabar d’avançar un camió gran.',
        'Dins del túnel.',
        'En una recta oberta.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Al rebasar a un camión o salir de un túnel, la ráfaga de viento impacta súbitamente contra el coche, pudiendo desviar bruscamente su trayectoria hacia el arcén.',
      en: 'When passing a truck or leaving a tunnel cut, wind cuts off and hits again instantly, pulling the car off course.',
      ca: 'En superar un camió gran o sortir d’un túnel, el vent torna a colpejar sobtadament el lateral desviant el cotxe.'
    }
  },
  {
    id: 'mech-016',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Por qué no debe utilizarse agua corriente del grifo en el circuito de refrigeración del motor?',
      en: 'Why should standard tap water never be used in an engine’s cooling system?',
      ca: 'Per què no s’ha de fer servir aigua de l’aixeta al circuit de refrigeració del motor?'
    },
    options: {
      es: [
        'Porque oxida los conductos internos, contiene cal que obstruye el radiador y se congela a 0 °C.',
        'Porque evapora el combustible del depósito.',
        'Porque deteriora las pastillas de freno.'
      ],
      en: [
        'Because it corrodes internal passages, deposits limescale clogging the radiator, and freezes at 0 °C.',
        'Because it evaporates fuel in the fuel tank.',
        'Because it contaminates the brake pads.'
      ],
      ca: [
        'Perquè rovella els conductes, conté calç que obstrueix el radiador i es congela a 0 °C.',
        'Perquè evapora la benzina.',
        'Perquè desgasta els frens.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El líquido refrigerante/anticongelante posee aditivos anticorrosivos, eleva el punto de ebullición por encima de 100 °C y evita la congelación en invierno.',
      en: 'Dedicated antifreeze/coolant features anti-corrosion chemistry, raises boiling points above 100 °C, and prevents sub-zero freezing.',
      ca: 'El líquid refrigerant conté additius anticorrosius, no produeix calç i impedeix la congelació a l’hivern.'
    }
  },
  {
    id: 'mech-017',
    topicId: 'mechanics-weather',
    question: {
      es: 'Si un neumático presenta un desgaste excesivo en el centro de la banda de rodadura, ¿a qué es debido?',
      en: 'If a tire exhibits excessive abnormal wear strictly down the center of the tread, what is the cause?',
      ca: 'Si un pneumàtic presenta desgast excessiu només al mig de la banda de rodament, a què es deu?'
    },
    options: {
      es: [
        'A que ha circulado habitualmente con una presión de inflado superior a la recomendada.',
        'A una presión de inflado notablemente baja.',
        'A un fallo en los amortiguadores del eje delantero.'
      ],
      en: [
        'Driving consistently with tire pressures higher than recommended.',
        'Significantly under-inflated tires.',
        'Defective front shock absorbers.'
      ],
      ca: [
        'A haver circulat amb excés de pressió d’inflat respecte a la recomanada.',
        'A portar la pressió molt baixa.',
        'A un defecte dels amortidors.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La sobrepresión hincha el centro del neumático haciéndolo abombarse, concentrando todo el apoyo y desgaste sobre la banda central.',
      en: 'Over-inflation causes the tire crown to balloon outwards, concentrating road contact and wear solely along the center strip.',
      ca: 'L’excés de pressió abomba el centre de la roda, desgastant ràpidament el mig del dibuix.'
    }
  },
  {
    id: 'mech-018',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Cada cuánto tiempo se recomienda cambiar el líquido de frenos de un automóvil?',
      en: 'How frequently is it recommended to replace the brake fluid in an automobile?',
      ca: 'Cada quant de temps es recomana canviar el líquid de frens d’un automòbil?'
    },
    options: {
      es: ['Aproximadamente cada 2 años o según especificaciones del fabricante.', 'Cada 10 años.', 'Nunca, es un líquido de por vida.'],
      en: ['Approximately every 2 years or per manufacturer schedule.', 'Every 10 years.', 'Never, it lasts the lifetime of the car.'],
      ca: ['Aproximadament cada 2 anys o segons el manual del fabricant.', 'Cada 10 anys.', 'Mai, dura tota la vida del cotxe.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El líquido de frenos es higroscópico (absorbe humedad del aire con el tiempo), lo que reduce su punto de ebullición y provoca pérdida total de frenos por vapor lock.',
      en: 'Brake fluid is hygroscopic (absorbs atmospheric moisture over time), degrading its boiling point and causing brake failure from boiling vapors.',
      ca: 'El líquid de frens absorbeix humitat amb el temps; canviar-lo cada 2 anys evita que bulli en baixades pronunciades.'
    }
  },
  {
    id: 'mech-019',
    topicId: 'mechanics-weather',
    question: {
      es: 'En caso de niebla muy densa que dificulte la visión, ¿por qué no deben encenderse las luces de largo alcance (carretera)?',
      en: 'In thick dense fog impairing vision, why should you avoid using high beam headlights?',
      ca: 'En cas de boira molt densa, per què no s’han d’encendre els llums llargs?'
    },
    options: {
      es: [
        'Porque la luz rebota en las diminutas gotas de agua suspendidas y crea una pantalla blanca que ciega al conductor.',
        'Porque recalienta el alternador del motor.',
        'Porque está prohibido el uso de luces en niebla.'
      ],
      en: [
        'Because high beam light reflects off suspended water droplets, creating an opaque glare screen blinding the driver.',
        'Because it overheats the vehicle’s alternator.',
        'Because using headlights in fog is forbidden.'
      ],
      ca: [
        'Perquè la llum rebota en les gotes d’aigua suspeses i crea una paret blanca que enlluerna el mateix conductor.',
        'Perquè sobreescalfa l’alternador.',
        'Perquè estan prohibits els llums amb boira.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Las luces largas rebotan contra la masa de niebla produciendo un resplandor o efecto espejo que anula la visibilidad del propio conductor.',
      en: 'High beam rays backscatter against airborne water droplets, creating back-glare that blinds the driver.',
      ca: 'Els llums llargs produeixen un efecte mirall contra la boira que redueix encara més la visió del conductor.'
    }
  },
  {
    id: 'mech-020',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué avería grave anuncia una nube continua de humo azulado saliendo por el tubo de escape de un motor térmico?',
      en: 'What serious mechanical fault is signaled by continuous blue-tinted smoke billowing from an exhaust tailpipe?',
      ca: 'Quina avaria greu anuncia una fumera blavosa contínua que surt pel tub d’escapament?'
    },
    options: {
      es: [
        'Que el motor está quemando aceite lubricante en las cámaras de combustión por desgaste de segmentos o retenes.',
        'Que el filtro de aire está completamente limpio.',
        'Una presencia excesiva de vapor de agua en el depósito.'
      ],
      en: [
        'The engine is burning lubricating oil inside combustion chambers due to worn piston rings or valve stem seals.',
        'The engine air intake filter is clean.',
        'Excessive clean moisture trapped in the fuel tank.'
      ],
      ca: [
        'Que el motor està cremant oli lubricant a les cambres de combustió per desgast de segments o vàlvules.',
        'Que el filtre d’aire està nou.',
        'Vapor d’aigua net.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El humo azul indica consumo de aceite de motor por holguras en cilindros o válvulas. El humo negro indica exceso de combustible y el blanco continuo vapor de agua o anticongelante.',
      en: 'Blue smoke indicates engine lubricating oil combustion. Black smoke denotes excess unburnt fuel, while thick white smoke suggests coolant ingestion.',
      ca: 'El fum blau indica consum i crema d’oli de motor. El fum negre excés de carburant i el blanc persistent fuita de refrigerant.'
    }
  },
  {
    id: 'mech-021',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Cuál es el peligro de conducir con unos amortiguadores en mal estado o desgastados?',
      en: 'What is the danger of driving with worn-out or leaking suspension shock absorbers?',
      ca: 'Quin perill comporta circular amb uns amortidors en mal estat o desgastats?'
    },
    options: {
      es: [
        'Aumenta notablemente la distancia de frenado, empeora el agarre en curvas y facilita la pérdida de contacto de las ruedas con el suelo.',
        'Aumenta la velocidad máxima del vehículo.',
        'Reduce el desgaste de los neumáticos.'
      ],
      en: [
        'Stopping distances increase substantially, cornering grip deteriorates, and wheels bounce off the road.',
        'The vehicle’s top speed increases.',
        'Tire wear is significantly reduced.'
      ],
      ca: [
        'Augmenta notablement la distància de frenada, empitjora el pas per corba i les rodes reboten perdent contacte amb l’asfalt.',
        'Augmenta la velocitat punta.',
        'Fa durar més les rodes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los amortiguadores mantienen las ruedas pegadas al asfalto. Si fallan, las ruedas rebotan, el ABS trabaja con errores y la frenada se alarga hasta un 20%.',
      en: 'Shock absorbers keep rubber planted on the road surface. Worn dampers make tires bounce, perturbing ABS and lengthening stops by up to 20%.',
      ca: 'Els amortidors mantenen les rodes arrapades a terra; en mal estat les rodes reboten i la frenada s’allarga fins a un 20%.'
    }
  },
  {
    id: 'mech-022',
    topicId: 'mechanics-weather',
    question: {
      es: 'Al circular con altas temperaturas en verano, ¿qué elemento mecánico sufre un mayor desgaste y riesgo de fallo?',
      en: 'When driving in extreme summer heat, which vehicle component suffers highest degradation and failure rates?',
      ca: 'En circular amb altes temperatures a l’estiu, quin component pateix major degradació i risc d’avaria?'
    },
    options: {
      es: [
        'Los neumáticos, debido al sobrecalentamiento del asfalto que eleva su presión y multiplica el riesgo de reventón.',
        'El líquido del limpiaparabrisas.',
        'Las luces antiniebla.'
      ],
      en: [
        'The tires, as searing asphalt raises internal air temperatures, spiking pressure and blowout risk.',
        'Windshield washer solvent reservoir.',
        'Front fog light housings.'
      ],
      ca: [
        'Els pneumàtics, ja que l’asfalt calent sobreescalfa la goma i multiplica el risc de rebentada.',
        'El dipòsit de l’eixugaparabrises.',
        'Els fars antiboira.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El calor ambiental y el asfalto a más de 50 °C elevan la temperatura interna del neumático, acelerando el desgaste y propiciando reventones si tienen baja presión.',
      en: 'Extreme road heat degrades tire rubber and increases internal pressure, drastically escalating blowout hazards on compromised tires.',
      ca: 'L’asfalt roent sobreescalfa els pneumàtics provocant desgast accelerat i risc de rebentada.'
    }
  },
  {
    id: 'mech-023',
    topicId: 'mechanics-weather',
    question: {
      es: '¿Qué indica el pictograma de un neumático con un copo de nieve y tres picos de montaña (3PMSF) grabado en el flanco?',
      en: 'What is denoted by a tire sidewall marking displaying a snowflake inside a 3-peak mountain (3PMSF)?',
      ca: 'Què indica el marcatge d’un floc de neu dins d’una muntanya de tres cims (3PMSF) al flanc del pneumàtic?'
    },
    options: {
      es: [
        'Que es un neumático certificado de invierno homologado legalmente como sustituto reglamentario de las cadenas.',
        'Que es un neumático diseñado exclusivamente para rodar sobre arena del desierto.',
        'Que no puede utilizarse a temperaturas superiores a 0 °C.'
      ],
      en: [
        'It is a certified winter tire legally recognized and authorized as a full substitute for snow chains.',
        'It is a tire designed exclusively for loose desert sand.',
        'It must not be driven at temperatures above 0 °C.'
      ],
      ca: [
        'Que és un pneumàtic certificat d’hivern homologat com a substitut legal de les cadenes de neu.',
        'Que és per a la sorra del desert.',
        'Que no es pot fer servir amb més de 0 °C.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El marcaje 3PMSF certifica prestaciones invernales rigurosas en nieve y hielo, autorizando a circular sin necesidad de instalar cadenas mecánicas.',
      en: 'The 3PMSF marking guarantees verified winter snow traction, legally dispensing with the need to mount physical snow chains.',
      ca: 'La certificació 3PMSF garanteix adherència en gel i neu i eximeix d’haver de posar cadenes quan són obligatòries.'
    }
  },
  {
    id: 'mech-024',
    topicId: 'mechanics-weather',
    question: {
      es: 'Si durante un descenso prolongado de montaña se abusa de los frenos de forma continuada, se puede producir:',
      en: 'If vehicle brakes are used continuously and excessively down a long mountain descent, what hazard occurs?',
      ca: 'Si durant una baixada de muntanya llarga s’abusa dels frens sense descans, es pot produir:'
    },
    options: {
      es: [
        'El desfallecimiento o «fading», con pérdida momentánea o total de la capacidad de frenado por sobrecalentamiento.',
        'El bloqueo permanente de la dirección asistida.',
        'La congelación del líquido de frenos.'
      ],
      en: [
        'Brake fade ("fading"), leading to temporary or total loss of braking efficiency due to excessive heat buildup.',
        'Permanent seizure of the power steering rack.',
        'Freezing of the hydraulic brake fluid.'
      ],
      ca: [
        'Fatiga de frens o «fading», amb pèrdua temporal o total de frenada per sobreescalfament dels discos.',
        'Bloqueig de la direcció assistida.',
        'Congelació del líquid de frens.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El fading se produce cuando discos y pastillas superan su temperatura de trabajo; para evitarlo se debe recurrir al freno motor en marchas cortas.',
      en: 'Brake fade happens when pad and rotor temperatures spike, eliminating friction; drivers must downshift to leverage engine braking down steep grades.',
      ca: 'El fading ocorre per escalfament extrem dels frens; per evitar-ho cal retenir el cotxe amb marxes curtes usant el fre motor.'
    }
  },
  {
    id: 'mech-025',
    topicId: 'mechanics-weather',
    question: {
      es: 'Para desempañar eficazmente el vaho condensado en el interior del parabrisas en días fríos y lluviosos se debe:',
      en: 'To rapidly demist dense condensation forming on the inner windshield on cold rainy days, what should you do?',
      ca: 'Per desentelar ràpidament el baf de l’interior del parabrisa en dies freds i plujosos cal:'
    },
    options: {
      es: [
        'Conectar el aire acondicionado junto con la calefacción orientando la salida de aire directamente al parabrisas.',
        'Apagar completamente la ventilación y cerrar las toberas.',
        'Limpiar el cristal con la mano desnuda mientras se conduce.'
      ],
      en: [
        'Turn on the air conditioning along with heating, directing the airflow squarely onto the windshield.',
        'Turn ventilation off completely and close dashboard vents.',
        'Wipe the windshield glass with a bare palm while moving.'
      ],
      ca: [
        'Connectar l’aire condicionat juntament amb la calefacció dirigint l’aire directament cap al parabrisa.',
        'Apagar tota la ventilació.',
        'Passar la mà despullada pel vidre mentre es condueix.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El aire acondicionado actúa como deshumidificador extrayendo la humedad del aire interior en segundos, eliminando el vaho de forma inmediata sin empañar.',
      en: 'The A/C system acts as a dehumidifier, extracting moisture from cabin air and clearing condensation off the glass in seconds.',
      ca: 'L’aire condicionat deshumiteja l’aire de l’habitacle en segons, eliminant el baf ràpidament sense embrutar el vidre.'
    }
  }
];