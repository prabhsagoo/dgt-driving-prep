import { Question } from '@/types';

export const ALCOHOL_SAFETY_QUESTIONS: Question[] = [
  {
    id: 'alc-001',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cuál es la tasa máxima de alcoholemia permitida en aire espirado para un conductor novel durante sus dos primeros años?',
      en: 'What is the maximum blood alcohol breath test limit for a novice driver during their first two years?',
      ca: 'Quina és la taxa màxima d’alcoholèmia permesa en aire expirat per a un conductor novell durant els seus dos primers anys?'
    },
    options: {
      es: ['0,15 miligramos por litro de aire.', '0,25 miligramos por litro de aire.', '0,30 miligramos por litro de aire.'],
      en: ['0.15 milligrams per liter of breath.', '0.25 milligrams per liter of breath.', '0.30 milligrams per liter of breath.'],
      ca: ['0,15 mil·ligrams per litre d’aire.', '0,25 mil·ligrams per litre d’aire.', '0,30 mil·ligrams per litre d’aire.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Para conductores noveles y profesionales, el límite máximo es de 0,15 mg/l en aire espirado (o 0,30 g/l en sangre).',
      en: 'For novice and professional drivers, the maximum limit is 0.15 mg/l in breath (0.30 g/l in blood).',
      ca: 'Per a conductors novells i professionals, el límit màxim és de 0,15 mg/l en aire expirat (o 0,30 g/l en sang).'
    }
  },
  {
    id: 'alc-002',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cuál es la tasa máxima de alcoholemia permitida para conductores menores de edad (ciclomotores, patinetes, etc.)?',
      en: 'What is the maximum allowed alcohol level for underage drivers (mopeds, e-scooters, etc.)?',
      ca: 'Quina és la taxa màxima d’alcoholèmia permesa per a conductors menors d’edat (ciclomotors, patinets, etc.)?'
    },
    options: {
      es: ['Tasa 0,0 (tolerancia cero absoluta).', '0,15 mg/l de aire.', '0,25 mg/l de aire.'],
      en: ['0.0 rate (absolute zero tolerance).', '0.15 mg/l in breath.', '0.25 mg/l in breath.'],
      ca: ['Taxa 0,0 (tolerància zero absoluta).', '0,15 mg/l d’aire.', '0,25 mg/l d’aire.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La normativa vigente de la DGT fija la tasa 0,0 para cualquier conductor menor de 18 años, con independencia del vehículo que conduzca.',
      en: 'DGT regulations establish a 0.0 alcohol rate for all drivers under 18, regardless of vehicle type.',
      ca: 'La normativa vigent fixa taxa 0,0 per a qualsevol conductor menor de 18 anys.'
    }
  },
  {
    id: 'alc-003',
    topicId: 'safety-alcohol',
    question: {
      es: 'Conducir sujetando el teléfono móvil con la mano conlleva la pérdida de:',
      en: 'Driving while holding a mobile phone in your hand results in the deduction of:',
      ca: 'Conduir sostenint el telèfon mòbil amb la mà comporta la pèrdua de:'
    },
    options: {
      es: ['6 puntos del carnet de conducir.', '3 puntos del carnet de conducir.', '4 puntos del carnet de conducir.'],
      en: ['6 driving license points.', '3 driving license points.', '4 driving license points.'],
      ca: ['6 punts del permís de conduir.', '3 punts del permís de conduir.', '4 punts del permís de conduir.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Conducir sujetando con la mano dispositivos de telefonía móvil está catalogado como infracción grave sancionada con la detracción de 6 puntos.',
      en: 'Holding a mobile phone device while driving is a major violation penalized with 6 penalty points.',
      ca: 'Sostenir el mòbil amb la mà mentre es condueix es sanciona amb la pèrdua de 6 punts.'
    }
  },
  {
    id: 'alc-004',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Hasta qué estatura es obligatorio que los menores utilicen un sistema de retención infantil (SRI)?',
      en: 'Up to what height must minors use an approved child restraint system (car seat)?',
      ca: 'Fins a quina alçada és obligatori que els menors utilitzin un sistema de retenció infantil (SRI)?'
    },
    options: {
      es: [
        'Hasta los 135 centímetros de estatura.',
        'Hasta los 150 centímetros de estatura.',
        'Hasta que cumplan los 10 años, sin importar la estatura.'
      ],
      en: [
        'Up to 135 centimeters in height.',
        'Up to 150 centimeters in height.',
        'Until they turn 10 years old, regardless of height.'
      ],
      ca: [
        'Fins als 135 centímetres d’alçada.',
        'Fins als 150 centímetres d’alçada.',
        'Fins que compleixin els 10 anys, sense importar l’alçada.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Es legalmente obligatorio hasta 135 cm de estatura, aunque la DGT recomienda su uso hasta los 150 cm.',
      en: 'It is legally mandatory up to 135 cm, though the DGT strongly recommends use up to 150 cm.',
      ca: 'És legalment obligatori fins als 135 cm, tot i que es recomana fins als 150 cm.'
    }
  },
  {
    id: 'alc-005',
    topicId: 'safety-alcohol',
    question: {
      es: 'No utilizar el cinturón de seguridad o el sistema de retención infantil adecuado resta:',
      en: 'Not using a seatbelt or an appropriate child restraint system penalizes:',
      ca: 'No utilitzar el cinturó de seguretat o el sistema de retenció infantil adient resta:'
    },
    options: {
      es: ['4 puntos.', '2 puntos.', '3 puntos.'],
      en: ['4 points.', '2 points.', '3 points.'],
      ca: ['4 punts.', '2 punts.', '3 punts.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La Ley de Tráfico sanciona el no uso del cinturón de seguridad, casco o SRI con la retirada de 4 puntos.',
      en: 'Traffic law penalizes failing to use a seatbelt, helmet, or child seat with a loss of 4 points.',
      ca: 'La Llei de Trànsit sanciona no utilitzar el cinturó o cadireta amb la retirada de 4 punts.'
    }
  },
  {
    id: 'alc-006',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cuál es la tasa máxima genérica de alcoholemia en aire espirado para conductores generales con más de 2 años de permiso?',
      en: 'What is the standard breath alcohol limit for regular drivers with over 2 years of driving experience?',
      ca: 'Quina és la taxa màxima genèrica d’alcoholèmia en aire expirat per a conductors generals amb més de 2 anys de carnet?'
    },
    options: {
      es: ['0,25 miligramos por litro de aire.', '0,15 miligramos por litro de aire.', '0,50 miligramos por litro de aire.'],
      en: ['0.25 milligrams per liter of breath.', '0.15 milligrams per liter of breath.', '0.50 milligrams per liter of breath.'],
      ca: ['0,25 mil·ligrams per litre d’aire.', '0,15 mil·ligrams per litre d’aire.', '0,50 mil·ligrams per litre d’aire.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Para los conductores no profesionales que han superado los 2 años de antigüedad del permiso, el límite legal es 0,25 mg/l en aire espirado (o 0,50 g/l en sangre).',
      en: 'For regular drivers with more than 2 years holding a license, the legal ceiling is 0.25 mg/l in breath (or 0.50 g/l in blood).',
      ca: 'Per a conductors generals amb més de 2 anys d’antiguitat, el límit legal és 0,25 mg/l en aire expirat (o 0,50 g/l en sang).'
    }
  },
  {
    id: 'alc-007',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Con cuántos puntos comienza su saldo un conductor que obtiene su primer permiso de conducir?',
      en: 'How many license points does a driver start with upon obtaining their first driving license?',
      ca: 'Amb quants punts comença el seu saldo un conductor que obté el seu primer permís de conduir?'
    },
    options: {
      es: ['8 puntos.', '12 puntos.', '10 puntos.'],
      en: ['8 points.', '12 points.', '10 points.'],
      ca: ['8 punts.', '12 punts.', '10 punts.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Los conductores noveles parten de un saldo inicial de 8 puntos. Si no cometen infracciones con pérdida de puntos en 2 años, suben a 12.',
      en: 'Novice drivers start with an initial balance of 8 points. If no point-deducting infractions occur during 2 years, they rise to 12.',
      ca: 'Els novells comencen amb 8 punts. Si no cometen infraccions en 2 anys, pugen a 12 punts.'
    }
  },
  {
    id: 'alc-008',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cuál es el saldo máximo absoluto de puntos que puede llegar a acumular un conductor en España?',
      en: 'What is the absolute maximum point balance a driver can accumulate in Spain?',
      ca: 'Quin és el saldo màxim absolut de punts que pot arribar a acumular un conductor a Espanya?'
    },
    options: {
      es: ['15 puntos.', '12 puntos.', '16 puntos.'],
      en: ['15 points.', '12 points.', '16 points.'],
      ca: ['15 punts.', '12 punts.', '16 punts.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El sistema permite alcanzar un tope de 15 puntos: 12 iniciales (o tras ser novel), +2 tras 3 años sin infracciones (14), y +1 tras otros 3 años adicionales sin sanciones (15).',
      en: 'The system caps at 15 points: 12 baseline, +2 points after 3 clean years (14), and +1 after another 3 clean years (15).',
      ca: 'El límit màxim és de 15 punts: 12 de base, +2 després de 3 anys nets (14), i +1 després d’altres 3 anys (15).'
    }
  },
  {
    id: 'alc-009',
    topicId: 'safety-alcohol',
    question: {
      es: 'La negativa de un conductor a someterse a las pruebas reglamentarias de alcoholemia o drogas constituye:',
      en: 'Refusing to submit to mandatory breathalyzer or drug testing constitutes:',
      ca: 'La negativa d’un conductor a sotmetre’s a les proves d’alcoholèmia o drogues constitueix:'
    },
    options: {
      es: [
        'Un delito contra la seguridad vial tipificado en el Código Penal con pena de prisión y privación del permiso.',
        'Únicamente una sanción administrativa leve con multa económica.',
        'La inmovilización momentánea del vehículo sin consecuencias penales.'
      ],
      en: [
        'A crime against road safety in the Penal Code carrying prison terms and license revocation.',
        'Merely a minor administrative infraction with a fine.',
        'Temporary vehicle impoundment with no criminal consequences.'
      ],
      ca: [
        'Un delicte contra la seguretat vial tipificat al Codi Penal amb pena de presó i retirada del permís.',
        'Només una sanció administrativa lleu.',
        'La immobilització del vehicle sense transcendència penal.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Negarse a someterse a la prueba de aire o saliva es un delito penal (art. 383 CP) penado con prisión de 6 meses a 1 año y privación del derecho a conducir de 1 a 4 años.',
      en: 'Refusing an alcohol or drug test is a criminal offence under Spanish law, punished by up to 1 year imprisonment and 1-4 years driving ban.',
      ca: 'Negar-se a la prova d’alcohol o drogues és un delicte penal castigat amb presó de 6 mesos a 1 any i retirada del carnet d’1 a 4 anys.'
    }
  },
  {
    id: 'alc-010',
    topicId: 'safety-alcohol',
    question: {
      es: 'En caso de sufrir un accidente o avería en autopista, el protocolo básico de actuación (PAS) significa:',
      en: 'In the event of an accident or breakdown, the fundamental PAS protocol stands for:',
      ca: 'En cas d’accident o avaria, el protocol bàsic d’actuació (PAS) significa:'
    },
    options: {
      es: ['Proteger, Avisar y Socorrer.', 'Parar, Auxiliar y Salir.', 'Prevenir, Alertar y Salvar.'],
      en: ['Protect, Alert, and Succor (Help).', 'Park, Assist, and Step out.', 'Prevent, Alert, and Save.'],
      ca: ['Protegir, Avisar i Socórrer.', 'Parar, Auxiliar i Sortir.', 'Prevenir, Alertar i Salvar.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El orden de actuación vital es PAS: 1º Proteger el lugar y a uno mismo, 2º Avisar a los servicios de emergencias (112), 3º Socorrer a las víctimas sin moverlas.',
      en: 'The life-saving sequence is PAS: 1st Protect yourself and the scene, 2nd Alert emergency services (112), 3rd Succor injured victims without moving them.',
      ca: 'L’ordre vital d’actuació és PAS: 1r Protegir l’escenari, 2n Avisar emergències (112), 3r Socórrer els ferits sense moure’ls.'
    }
  },
  {
    id: 'alc-011',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cómo debe colocarse el chaleco reflectante de alta visibilidad antes de descender del vehículo en una vía interurbana?',
      en: 'How should the high-visibility reflective vest be put on before exiting a vehicle on an interurban road?',
      ca: 'Com s’ha de posar l’armilla reflectant d’alta visibilitat abans de baixar del vehicle en via interurbana?'
    },
    options: {
      es: [
        'Debe colocarse siempre dentro del habitáculo antes de poner un pie en la calzada o arcén.',
        'Puede guardarse en el maletero y ponérselo una vez fuera del vehículo.',
        'Solo es necesario ponérselo si es de noche.'
      ],
      en: [
        'It must always be put on inside the vehicle cabin before stepping onto the pavement or shoulder.',
        'It can be retrieved from the trunk and worn once out on the road.',
        'It is only mandatory to wear at night.'
      ],
      ca: [
        'S’ha de posar sempre dins de l’habitacle abans de posar un peu a la calçada o voral.',
        'Es pot agafar del maleter i posar-se un cop a fora.',
        'Només és obligatori de nit.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El chaleco debe guardarse en el habitáculo (guantera o bajo el asiento) para poder ponérselo antes de salir; pisar la calzada sin él acarrea multa de tráfico.',
      en: 'The vest must be kept accessible inside the passenger cabin so it can be put on before exiting onto the asphalt.',
      ca: 'L’armilla ha d’anar a l’habitacle per posar-se-la abans de sortir; baixar sense ella comporta sanció.'
    }
  },
  {
    id: 'alc-012',
    topicId: 'safety-alcohol',
    question: {
      es: 'El nuevo dispositivo luminoso de preseñalización de peligro V-16 conectado con la plataforma DGT 3.0:',
      en: 'The new V-16 connected emergency hazard warning beacon linked to the DGT 3.0 platform:',
      ca: 'El nou dispositiu lluminós de perill V-16 connectat amb la plataforma DGT 3.0:'
    },
    options: {
      es: [
        'Sustituye a los triángulos de peligro y transmite la ubicación del vehículo en tiempo real sin tener que bajarse.',
        'Solo es obligatorio para camiones y autobuses.',
        'Debe instalarse a 100 metros de distancia del coche sobre el arcén.'
      ],
      en: [
        'Replaces hazard triangles and transmits vehicle geolocation in real-time without having to step out.',
        'Is only mandatory for commercial trucks and coaches.',
        'Must be placed 100 meters away from the car on the shoulder.'
      ],
      ca: [
        'Substitueix els triangles i transmet la geolocalització del vehicle en temps real sense baixar del cotxe.',
        'Només és obligatori per a camions i autobusos.',
        'S’ha de col·locar a 100 metres del cotxe caminant pel voral.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La señal luminosa V-16 conectada se adhiere magnéticamente al techo extendiendo el brazo desde la ventanilla, emitiendo luz ámbar 360º y conectando la posición con la DGT.',
      en: 'The connected V-16 beacon magnetically attaches to the car roof through the window, flashing amber 360° and sending distress coordinates directly to the DGT cloud.',
      ca: 'La balisa V-16 s’adhereix magnèticament al sostre des de la finestra, emetent llum taronja 360º i avisant la DGT.'
    }
  },
  {
    id: 'alc-013',
    topicId: 'safety-alcohol',
    question: {
      es: 'Llevar en el vehículo mecanismos de detección de radares o cinemómetros (aunque no se utilicen activamente):',
      en: 'Carrying radar detectors in your vehicle (even if not actively being utilized):',
      ca: 'Portar al vehicle mecanismes de detecció de radars o cinemòmetres (encara que no s’utilitzin activament):'
    },
    options: {
      es: [
        'Está prohibido e infringe la ley con multa económica y pérdida de 3 puntos.',
        'Solo está prohibido si se demuestra que estaban encendidos.',
        'Es legal siempre que sean avisadores por GPS.'
      ],
      en: [
        'Is prohibited and violates traffic law, penalized with a fine and deduction of 3 points.',
        'Is only prohibited if police can prove they were actively switched on.',
        'Is completely legal as long as it operates via GPS mapping.'
      ],
      ca: [
        'Està prohibit i infringeix la llei amb multa econòmica i pèrdua de 3 punts.',
        'Només està prohibit si es demostra que estaven encesos.',
        'És totalment legal.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La mera posesión de detectores o inhibidores de radar en el vehículo es infracción grave tipificada con 3 puntos de retirada (los avisadores GPS sí son legales).',
      en: 'Simply carrying a radar detector in the vehicle incurs a 3-point penalty. GPS map warning databases remain legal.',
      ca: 'Portar instal·lat un detector o inhibidor de radar resta 3 punts (els avisadors per base de dades GPS sí són legals).'
    }
  },
  {
    id: 'alc-014',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cómo afecta el consumo de alcohol a la capacidad de reacción del conductor?',
      en: 'How does alcohol intake affect a driver’s reaction capacity?',
      ca: 'Com afecta el consum d’alcohol a la capacitat de reacció del conductor?'
    },
    options: {
      es: [
        'Aumenta el tiempo de reacción (se tarda más en reaccionar) y disminuye la capacidad de concentración.',
        'Disminuye el tiempo de reacción (se reacciona más deprisa).',
        'No altera los reflejos en cantidades moderadas.'
      ],
      en: [
        'Increases reaction time (it takes longer to respond) and decreases concentration.',
        'Decreases reaction time (you respond faster).',
        'Does not alter reflexes in moderate quantities.'
      ],
      ca: [
        'Augmenta el temps de reacció (es triga més a reaccionar) i disminueix la concentració.',
        'Disminueix el temps de reacció (es reacciona més de pressa).',
        'No altera els reflexos en quantitats moderades.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El alcohol ralentiza el sistema nervioso: aumenta el tiempo de reacción (se tardan más décimas de segundo en pisar el freno) y en consecuencia aumenta la distancia de parada.',
      en: 'Alcohol dulls the central nervous system: reaction time increases (slower decision-making), lengthening stopping distance.',
      ca: 'L’alcohol alenteix el sistema nerviós: fa augmentar el temps de reacció i, per tant, la distància de parada.'
    }
  },
  {
    id: 'alc-015',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cómo debe graduarse correctamente el reposacabezas del asiento del conductor?',
      en: 'How should the driver seat head restraint be correctly adjusted?',
      ca: 'Com s’ha de regular correctament el recolzabadaps del seient del conductor?'
    },
    options: {
      es: [
        'La parte superior debe quedar a la misma altura que la parte superior de la cabeza (o a la altura de los ojos), a unos 4 cm.',
        'A la altura del cuello para apoyar la cabeza cómodamente.',
        'Lo más bajo posible pegado a la espalda.'
      ],
      en: [
        'The top edge level with the top of the head (or eye line), around 4 cm away.',
        'At neck level to comfortably rest the head during driving.',
        'As low as possible against the upper back.'
      ],
      ca: [
        'La part superior a nivell de la part superior del cap (o dels ulls), a uns 4 cm de distància.',
        'A l’alçada del coll per recolzar el cap còmodament.',
        'Al punt més baix possible.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Para evitar el efecto latigazo cervical («whiplash»), el borde superior del reposacabezas debe alinearse con la coronilla o la línea de los ojos a no más de 4 centímetros.',
      en: 'To prevent severe whiplash injuries in rear-end crashes, the upper lip must align with the top of the head, separated by roughly 4 cm.',
      ca: 'Per evitar el fuetada cervical, la part superior ha d’estar anivellada amb la part superior del cap a uns 4 cm de separació.'
    }
  },
  {
    id: 'alc-016',
    topicId: 'safety-alcohol',
    question: {
      es: 'Al socorrer a un motorista accidentado en la calzada, ¿es correcto quitarle el casco de protección?',
      en: 'When aiding an injured motorcyclist on the road, is it correct to remove their helmet?',
      ca: 'En socórrer un motorista accidentat a la calçada, és correcte treure-li el casc?'
    },
    options: {
      es: [
        'No, por norma general nunca se debe retirar el casco para evitar lesiones en la columna cervical.',
        'Sí, de inmediato para facilitarle la respiración en cualquier caso.',
        'Solo si el accidentado no puede hablar.'
      ],
      en: [
        'No, as a strict general rule you must never remove the helmet to prevent cervical spine injury.',
        'Yes, immediately to ease breathing in all circumstances.',
        'Only if the victim is unable to speak.'
      ],
      ca: [
        'No, com a norma general mai s’ha de retirar el casc per evitar lesions a la columna cervical.',
        'Sí, immediatament per ajudar-lo a respirar.',
        'Només si l’accidentat no pot parlar.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Quitar el casco a un motorista puede causar tetraplejia o daño medular irreversible. Solo el personal sanitario de emergencias debidamente entrenado puede retirarlo.',
      en: 'Removing a biker’s helmet without professional training risks causing catastrophic spinal cord severance.',
      ca: 'Retirar el casc pot provocar danys medul·lars greus; només el personal sanitari d’urgències està autoritzat a fer-ho.'
    }
  },
  {
    id: 'alc-017',
    topicId: 'safety-alcohol',
    question: {
      es: 'Arrojar a la vía pública colillas de cigarrillos o cualquier objeto que pueda provocar incendios o accidentes supone:',
      en: 'Throwing cigarette butts or any object that may trigger fire or accidents onto the roadway entails:',
      ca: 'Llençar a la via pública burilles de cigarreta o objectes que puguin causar incendis o accidents suposa:'
    },
    options: {
      es: ['Pérdida de 6 puntos del permiso de conducir y sanción económica muy grave.', 'Pérdida de 2 puntos.', 'Pérdida de 4 puntos.'],
      en: ['Loss of 6 driving license points and a very severe fine.', 'Loss of 2 points.', 'Loss of 4 points.'],
      ca: ['Pèrdua de 6 punts del carnet de conduir i sanció molt greu.', 'Pèrdua de 2 punts.', 'Pèrdua de 4 punts.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Arrojar colillas u objetos que puedan causar incendios o accidentes se castiga severamente con la detracción de 6 puntos tras la reforma de tráfico.',
      en: 'Tossing cigarette butts or hazardous debris carries an immediate 6-point deduction under Spanish road safety legislation.',
      ca: 'Llençar burilles que puguin causar incendis comporta la retirada de 6 punts del permís.'
    }
  },
  {
    id: 'alc-018',
    topicId: 'safety-alcohol',
    question: {
      es: '¿A qué distancia de seguridad mínima debe colocarse el conductor del volante para que el airbag frontal sea eficaz y seguro?',
      en: 'What minimum safe clearance distance should a driver keep from the steering wheel for airbag effectiveness?',
      ca: 'A quina distància de seguretat mínima s’ha de col·locar el conductor del volant perquè l’airbag sigui eficaç?'
    },
    options: {
      es: ['Al menos 25 centímetros.', 'Entre 10 y 15 centímetros.', 'A no más de 50 centímetros.'],
      en: ['At least 25 centimeters.', 'Between 10 and 15 centimeters.', 'No more than 50 centimeters.'],
      ca: ['Almenys 25 centímetres.', 'Entre 10 i 15 centímetres.', 'A no més de 50 centímetres.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El airbag se despliega a más de 250 km/h; situarse a menos de 25 cm del volante puede causar graves lesiones por impacto durante la detonación.',
      en: 'Airbags detonate at over 250 km/h; sitting closer than 25 cm can result in severe facial or chest trauma from deployment force.',
      ca: 'L’airbag s’infla a més de 250 km/h; col·locar-se a menys de 25 cm pot causar fractures greus.'
    }
  },
  {
    id: 'alc-019',
    topicId: 'safety-alcohol',
    question: {
      es: 'Si se instala un sistema de retención infantil en el asiento del copiloto orientado en sentido contrario a la marcha:',
      en: 'If a rearward-facing child seat is installed in the front passenger seat:',
      ca: 'Si s’instal·la una cadireta infantil al seient del copilot en sentit contrari a la marxa:'
    },
    options: {
      es: [
        'Es obligatorio desconectar previamente el airbag frontal del acompañante.',
        'El airbag debe dejarse siempre conectado para mayor protección.',
        'Está totalmente prohibido llevar niños en ese asiento bajo cualquier supuesto.'
      ],
      en: [
        'It is strictly mandatory to manually deactivate the front passenger airbag beforehand.',
        'The passenger airbag must always stay activated for added protection.',
        'Carrying children in the front seat is unconditionally forbidden in all circumstances.'
      ],
      ca: [
        'És obligatori desconnectar prèviament l’airbag frontal del copilot.',
        'L’airbag s’ha de deixar connectat per major seguretat.',
        'Està totalment prohibit dur nens al davant.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El despliegue del airbag frontal contra una sillita orientada hacia atrás resulta mortal para el bebé. Es preceptivo desactivarlo de antemano.',
      en: 'Airbag expansion violently slams against rearward-facing infant shells. Disconnecting the passenger airbag is a critical legal mandate.',
      ca: 'L’impacte de l’airbag contra una cadireta en sentit contrari pot resultar letal. És obligatori desactivar-lo prèviament.'
    }
  },
  {
    id: 'alc-020',
    topicId: 'safety-alcohol',
    question: {
      es: 'Para evitar la fatiga y el agotamiento en viajes largos, la DGT recomienda realizar paradas de descanso cada:',
      en: 'To prevent fatigue and sleepiness on long road trips, the DGT recommends resting every:',
      ca: 'Per evitar la fatiga i el son en trajectes llargs, la DGT recomana fer parades cada:'
    },
    options: {
      es: ['2 horas de conducción o cada 200 kilómetros.', '4 horas ininterrumpidas.', '300 kilómetros en autopista.'],
      en: ['2 hours of driving or every 200 kilometers.', '4 uninterrupted hours.', '300 kilometers on motorways.'],
      ca: ['2 hores de conducció o cada 200 quilòmetres.', '4 hores sense descans.', '300 quilòmetres per autopista.']
    },
    correctIndex: 0,
    explanation: {
      es: 'La fatiga merma drásticamente la capacidad de concentración. Se debe parar a descansar al menos 20-30 minutos cada 2 horas o 200 km recorridos.',
      en: 'Fatigue degrades focus and slows reflexes. Resting 20–30 minutes every 2 hours or 200 km maintains alertness.',
      ca: 'La fatiga deteriora l’atenció. Cal aturar-se a descansar entre 20 i 30 minuts cada dues hores o 200 quilòmetres.'
    }
  },
  {
    id: 'alc-021',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cuáles son las horas del día con mayor riesgo de sufrir accidentes provocados por el sueño o somnolencia?',
      en: 'Which times of day have the highest statistical hazard of driver drowsiness accidents?',
      ca: 'Quines són les hores del dia amb major risc de patir accidents per somnolència?'
    },
    options: {
      es: [
        'Entre las 3:00 y las 6:00 de la madrugada y en la sobremesa (entre las 14:00 y las 16:00).',
        'Durante las primeras horas del amanecer (de 7:00 a 9:00).',
        'Exclusivamente a partir de la medianoche.'
      ],
      en: [
        'Between 3:00 and 6:00 AM, and during early afternoon (between 2:00 and 4:00 PM).',
        'During early morning rush hours (7:00 to 9:00 AM).',
        'Exclusively past midnight.'
      ],
      ca: [
        'Entre les 3:00 i les 6:00 de la matinada i a la sobretaula (de 14:00 a 16:00).',
        'A primera hora del matí (de 7:00 a 9:00).',
        'Només a partir de la mitjanit.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los ritmos circadianos del cuerpo humano provocan picos críticos de somnolencia biológica entre las 3 y 6 de la madrugada y tras el almuerzo (14:00 a 16:00 h).',
      en: 'Biological circadian rhythms induce deep drowsiness dips between 3:00–6:00 AM and post-lunch hours (2:00–4:00 PM).',
      ca: 'Els cicles circadians provoquen pics crítics de son entre les 3 i les 6 de la matinada i després de dinar (de 14 a 16 h).'
    }
  },
  {
    id: 'alc-022',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Se considera prueba vinculante el test de drogas realizado mediante muestra de saliva en un control de tráfico?',
      en: 'Is a roadside saliva swab test considered legally binding in traffic drug checkpoints?',
      ca: 'Es considera prova vinculant el test de drogues realitzat amb mostra de saliva en un control de trànsit?'
    },
    options: {
      es: [
        'Sí, es una prueba indiciaria oficial que, de resultar positiva, se envía al laboratorio para contraste confirmatorio.',
        'No, solo los análisis de orina tienen validez legal en España.',
        'Solo si el conductor reconoce voluntariamente el consumo.'
      ],
      en: [
        'Yes, it is an official preliminary screening that, if positive, is forwarded to a toxicological lab for confirmation.',
        'No, only urine samples hold evidentiary value in Spain.',
        'Only if the driver voluntarily admits to narcotics intake.'
      ],
      ca: [
        'Sí, és una prova indiciària oficial que, si és positiva, s’envia a laboratori per a la seva confirmació.',
        'No, només les anàlisis d’orina tenen validesa legal a Espanya.',
        'Només si el conductor ho admet voluntàriament.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La prueba de saliva indiciaria es preceptiva en controles de tráfico; si da positivo en estupefacientes, se remite una segunda muestra a laboratorio forense.',
      en: 'Saliva swabs serve as the primary official field test; positive results trigger laboratory confirmation for sanction enforcement.',
      ca: 'La mostra de saliva és la prova reglamentària oficial; el positiu s’envia a laboratori per confirmar la sanció.'
    }
  },
  {
    id: 'alc-023',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Qué tipo de medicamentos son los que mayor influencia negativa ejercen sobre la conducción segura?',
      en: 'Which class of medications exerts the most dangerous negative influence on driving performance?',
      ca: 'Quin tipus de medicaments exerceix la pitjor influència sobre la conducció segura?'
    },
    options: {
      es: [
        'Los psicofármacos (ansiolíticos, sedantes, hipnóticos y antidepresivos).',
        'Los analgésicos suaves como el paracetamol.',
        'Los complejos vitamínicos solubles.'
      ],
      en: [
        'Psychotropic drugs (anxiolytics, sedatives, sleeping pills, and antidepressants).',
        'Mild pain relievers such as paracetamol.',
        'Water-soluble vitamin supplements.'
      ],
      ca: [
        'Els psicofàrmacs (ansiolítics, sedants, hipnòtics i antidepressius).',
        'Els analgèsics suaus com el paracetamol.',
        'Els complexos vitamínics.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los ansiolíticos y sedantes inducen letargo, alargan los tiempos de respuesta y pueden provocar estados repentinos de sueño al volante.',
      en: 'Anxiolytics and sedatives impair alertness, degrade motor coordination, and induce severe drowsiness.',
      ca: 'Els ansiolítics i sedants alenteixen la resposta psicomotora i augmenten dràsticament el risc de dormirse al volant.'
    }
  },
  {
    id: 'alc-024',
    topicId: 'safety-alcohol',
    question: {
      es: 'En un semáforo en rojo o retención urbana, ¿está permitido manipular el teléfono móvil colocado en un soporte homologado?',
      en: 'At a red light or in traffic congestion, is it permitted to operate a smartphone mounted on an approved cradle?',
      ca: 'En un semàfor en vermell o retenció urbana, està permès manipular el mòbil col·locat en un suport homologat?'
    },
    options: {
      es: [
        'No, manipular cualquier dispositivo mientras se está en la corriente del tráfico sigue considerándose infracción.',
        'Sí, siempre que el vehículo esté completamente detenido con el pedal del freno presionado.',
        'Sí, si el teléfono está en el soporte está permitido teclear mensajes.'
      ],
      en: [
        'No, manually operating screens or devices while in traffic lanes remains a penalized violation.',
        'Yes, as long as the vehicle is fully stopped with the foot on the brake.',
        'Yes, typing messages is authorized as long as the device is in a dashboard cradle.'
      ],
      ca: [
        'No, manipular qualsevol dispositiu mentre s’està integrat al flux de trànsit és infracció sancionable.',
        'Sí, sempre que el cotxe estigui aturat amb el fre trepitjat.',
        'Sí, escriure missatges està permès si el mòbil és al suport.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Estar detenido en un semáforo en rojo no es una parada voluntaria ni estacionamiento; el vehículo sigue en situación de conducción y no debe manipularse el móvil.',
      en: 'Being stopped at a red traffic light is part of active driving; manual phone manipulation remains penalized with a 3-point deduction.',
      ca: 'Estar aturat en un semàfor vermell segueix sent conducció activa; manipular el mòbil es sanciona amb 3 punts.'
    }
  },
  {
    id: 'alc-025',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Cómo debe actuar un conductor al auxiliar a una víctima de accidente que sangra abundantemente por una herida?',
      en: 'How should a driver act when providing first aid to an accident victim bleeding heavily from a wound?',
      ca: 'Com ha d’actuar un conductor en auxiliar una víctima d’accident que sagna abundantment per una ferida?'
    },
    options: {
      es: [
        'Presionar directamente y de forma continua sobre la herida con un apósito limpio o gasa estéril.',
        'Aplicar de inmediato un torniquete en la extremidad como primera medida preventiva.',
        'Darle de beber agua fría azucarada o café con urgencia.'
      ],
      en: [
        'Apply firm, continuous direct pressure onto the wound using a clean cloth or sterile gauze.',
        'Immediately apply a tourniquet to the limb as a first-line precaution.',
        'Urgently offer cold sugary water or coffee to drink.'
      ],
      ca: [
        'Pressionar directament i de forma contínua sobre la ferida amb una gasa neta o teixit estèril.',
        'Fer immediatament un torniquet a l’extremitat com a primera mesura.',
        'Donar-li aigua freda amb sucre o cafè per beure.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La primera medida para detener una hemorragia es la presión directa continua sobre el punto sangrante. El torniquete es un último recurso extremo ante amputaciones.',
      en: 'The standard protocol for severe bleeding is direct manual compression over the wound. Tourniquets are reserved exclusively for life-or-death limb severance.',
      ca: 'La mesura correcta per tallar una hemorràgia és la pressió directa contínua sobre el punt de sang. El torniquet només s’usa en casos extrems d’amputació.'
    }
  }
];