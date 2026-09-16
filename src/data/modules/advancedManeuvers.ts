import { Question } from '@/types';

export const ADVANCED_MANEUVERS_QUESTIONS: Question[] = [
  {
    id: 'man-010',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Al adelantar a ciclistas fuera de poblado, ¿qué separación lateral mínima es obligatorio guardar?',
      en: 'When overtaking cyclists outside built-up areas, what minimum lateral distance is mandatory?',
      ca: 'En avançar ciclistes fora de poblat, quina separació lateral mínima és obligatori mantenir?'
    },
    options: {
      es: [
        'Al menos 1,5 metros, ocupando total o parcialmente el carril contiguo si la vía tiene más de un carril.',
        'Exactamente 1 metro.',
        'No hay distancia estipulada, solo moderar la velocidad.'
      ],
      en: [
        'At least 1.5 meters, occupying completely or partially the adjoining lane if the road has more than one lane.',
        'Exactly 1 meter.',
        'No set distance, merely moderating speed is enough.'
      ],
      ca: [
        'Almenys 1,5 metres, ocupant totalment o parcialment el carril contigu si hi ha més d’un carril.',
        'Exactament 1 metre.',
        'No hi ha distància estipulada, només moderar la velocitat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La normativa DGT obliga a dejar al menos 1,5 metros de separación lateral e impone cambiar completamente de carril en calzadas con 2 o más carriles por sentido.',
      en: 'DGT rules require leaving at least 1.5 meters and changing lanes completely on roads with 2 or more lanes per direction.',
      ca: 'La normativa obliga a deixar com a mínim 1,5 metres i canviar completament de carril en vies de 2 o més carrils per sentit.'
    }
  },
  {
    id: 'man-011',
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
      es: 'La maniobra de marcha atrás está totalmente prohibida en autopistas y autovías bajo cualquier circunstancia.',
      en: 'Reversing is completely forbidden on motorways and dual carriageways under any circumstances.',
      ca: 'Fer marxa enrere està totalment prohibit a les autopistes i autovies.'
    }
  },
  {
    id: 'man-012',
    topicId: 'maneuvers-lanes',
    question: {
      es: 'Como maniobra auxiliar de estacionamiento, ¿cuál es el recorrido máximo autorizado marcha atrás?',
      en: 'As an auxiliary maneuver for parking, what is the maximum authorized reversing distance?',
      ca: 'Com a maniobra auxiliar d’estacionament, quin és el recorregut màxim autoritzat marxa enrere?'
    },
    options: {
      es: [
        '15 metros, y sin invadir ninguna intersección.',
        '20 metros.',
        'El espacio estrictamente necesario sin límite de metros.'
      ],
      en: [
        '15 meters, and without entering any intersection.',
        '20 meters.',
        'As much distance as strictly needed with no meter limit.'
      ],
      ca: [
        '15 metres, i sense envair cap cruïlla.',
        '20 metres.',
        'L’espai estrictament necessari sense límit de metres.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Al estacionar o incorporarse a la circulación, la marcha atrás no puede exceder los 15 metros ni invadir un cruce de vías.',
      en: 'When parking or joining traffic, reversing must not exceed 15 meters or invade an intersection.',
      ca: 'En estacionar o incorporar-se, la marxa enrere no pot superar els 15 metres ni envair una cruïlla.'
    }
  },
  {
    id: 'man-013',
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
    id: 'man-014',
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
  }
];