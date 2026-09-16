import { Question } from '@/types';

export const SAFETY_FIRST_AID_QUESTIONS: Question[] = [
  {
    id: 'aid-001',
    topicId: 'safety-alcohol',
    question: {
      es: 'En caso de presenciar un accidente de tráfico, ¿cuál es el orden correcto de actuación según el protocolo de primeros auxilios PAS?',
      en: 'If witnessing a road accident, what is the correct sequence of action according to the PAS first-aid protocol?',
      ca: 'En cas de presenciar un accident de trànsit, quin és l’ordre correcte d’actuació segons el protocol PAS?'
    },
    options: {
      es: [
        '1º Proteger, 2º Avisar (llamar al 112), 3º Socorrer a las víctimas.',
        '1º Socorrer rápidamente, 2º Proteger la vía, 3º Avisar a las aseguradoras.',
        '1º Avisar al 112, 2º Socorrer a los heridos leves, 3º Proteger el coche.'
      ],
      en: [
        '1st Protect (Proteger), 2nd Alert emergency services via 112 (Avisar), 3rd Help victims (Socorrer).',
        '1st Provide emergency aid, 2nd Protect road, 3rd Notify insurance providers.',
        '1st Dial 112, 2nd Assist mildly injured victims, 3rd Protect vehicle.'
      ],
      ca: [
        '1r Protegir, 2n Avisar (trucar al 112), 3r Socórrer les víctimes.',
        '1r Socórrer ràpidament, 2n Protegir la via, 3r Avisar les asseguradores.',
        '1r Avisar al 112, 2n Socórrer els ferits lleus, 3r Protegir el cotxe.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La conducta PAS: Proteger el lugar del siniestro para evitar nuevos accidentes, Avisar a los servicios de emergencias (112) y finalmente Socorrer.',
      en: 'The PAS rule: Protect the accident scene to prevent further collisions, Alert emergency services (112), and then Succor/help the wounded.',
      ca: 'La conducta PAS: Protegir el lloc del sinistre per evitar nous accidents, Avisar als serveis d’emergència (112) i finalment Socórrer.'
    }
  },
  {
    id: 'aid-002',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Se debe retirar el casco a un motorista accidentado como norma general?',
      en: 'Should a helmet be removed from an injured motorcyclist as a general rule?',
      ca: 'S’ha de retirar el casc a un motorista accidentat com a norma general?'
    },
    options: {
      es: [
        'No, como norma general nunca se debe retirar el casco para evitar lesiones cervicales graves.',
        'Sí, siempre e inmediatamente para facilitar su respiración.',
        'Sí, pero solo si el motorista está inconsciente.'
      ],
      en: [
        'No, as a general rule never remove the helmet to prevent catastrophic cervical/spine damage.',
        'Yes, always and immediately to facilitate respiration.',
        'Yes, but only if the motorcyclist is unconscious.'
      ],
      ca: [
        'No, com a norma general mai s’ha de retirar el casc per evitar lesions cervicals greus.',
        'Sí, sempre i immediatament per facilitar la respiració.',
        'Sí, però només si el motorista està inconscient.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Nunca se debe quitar el casco a un accidentado a menos que se sea personal sanitario capacitado o resulte estrictamente imprescindible para reanimación.',
      en: 'Never remove an accident victim’s helmet unless trained as medical rescue personnel or strictly necessary for respiratory resuscitation.',
      ca: 'Mai s’ha de treure el casc a un accidentat a menys que es sigui personal sanitari especialitzat.'
    }
  },
  {
    id: 'aid-003',
    topicId: 'safety-alcohol',
    question: {
      es: '¿Qué tipo de vehículo tiene prohibido circular por autopistas, autovías y travesías urbanas?',
      en: 'Which type of vehicle is prohibited from driving on motorways, expressways, and urban through-routes (travesías)?',
      ca: 'Quin tipus de vehicle té prohibit circular per autopistes, autovies i travessies urbanes?'
    },
    options: {
      es: [
        'Vehículos de Movilidad Personal (VMP como patinetes eléctricos) y ciclomotores en autopista.',
        'Motocicletas con sidecar.',
        'Turismos con remolque ligero.'
      ],
      en: [
        'Personal Mobility Vehicles (PMVs / e-scooters) and mopeds on motorways.',
        'Motorcycles with sidecars.',
        'Passenger cars pulling a light trailer.'
      ],
      ca: [
        'Vehicles de Mobilitat Personal (VMP com patinets elèctrics) i ciclomotors a autopista.',
        'Motocicletes amb sidecar.',
        'Turismes amb remolc lleuger.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los VMP (patinetes eléctricos) tienen prohibida la circulación por autopistas, autovías, túneles urbanos, aceras y travesías.',
      en: 'Personal Mobility Vehicles (e-scooters) are forbidden on motorways, interurban dual carriageways, pavements, and tunnels.',
      ca: 'Els VMP (patinets elèctrics) tenen prohibida la circulació per autopistes, autovies, túnels urbans i voreres.'
    }
  }
];