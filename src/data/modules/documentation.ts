import { Question } from '@/types';

export const DOCUMENTATION_QUESTIONS: Question[] = [
  {
    id: 'doc-001',
    topicId: 'documentation-itv',
    question: {
      es: '¿Cada cuánto tiempo debe pasar la primera inspección técnica periódica (ITV) un turismo de uso privado?',
      en: 'How often must a private passenger car undergo its first periodic technical inspection (ITV)?',
      ca: 'Cada quant de temps ha de passar la primera inspecció tècnica periòdica (ITV) un turisme d’ús privat?'
    },
    options: {
      es: [
        'A los 4 años desde su primera matriculación.',
        'A los 2 años desde su primera matriculación.',
        'A los 5 años desde su primera matriculación.'
      ],
      en: [
        'At 4 years from its initial registration date.',
        'At 2 years from its initial registration date.',
        'At 5 years from its initial registration date.'
      ],
      ca: [
        'Als 4 anys des de la seva primera matriculació.',
        'Als 2 anys des de la seva primera matriculació.',
        'Als 5 anys des de la seva primera matriculació.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los turismos particulares están exentos de ITV hasta cumplir los 4 años. De 4 a 10 años pasan la inspección cada 2 años, y con más de 10 años, anualmente.',
      en: 'Private passenger cars are exempt from ITV until year 4. From 4 to 10 years old, ITV is biennial (every 2 years); past 10 years, it is annual.',
      ca: 'Els turismes particulars estan exempts d’ITV fins als 4 anys. De 4 a 10 anys passen la inspecció cada 2 anys, i amb més de 10 anys, anualment.'
    }
  },
  {
    id: 'doc-002',
    topicId: 'documentation-itv',
    question: {
      es: 'Si el resultado de la inspección técnica ITV es «Desfavorable», ¿qué plazo tiene para subsanar los defectos y volver a presentar el vehículo?',
      en: 'If the ITV technical inspection result is "Unfavorable", what deadline do you have to repair defects and re-present the vehicle?',
      ca: 'Si el resultat de la inspecció tècnica ITV és «Desfavorable», quin termini té per solucionar els defectes i tornar a presentar el vehicle?'
    },
    options: {
      es: [
        'Un plazo máximo improrrogable de 2 meses.',
        'Un plazo máximo de 15 días naturales.',
        'Un plazo de 6 meses.'
      ],
      en: [
        'A maximum non-extendable period of 2 months.',
        'A maximum period of 15 calendar days.',
        'A period of 6 months.'
      ],
      ca: [
        'Un termini màxim improrrogable de 2 mesos.',
        'Un termini màxim de 15 dies naturals.',
        'Un termini de 6 mesos.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Con ITV desfavorable solo se autoriza a circular para trasladar el vehículo al taller y volver a la estación ITV en un plazo máximo de 2 meses.',
      en: 'With an unfavorable ITV, driving is permitted strictly to travel to a repair shop and back to the ITV station within 2 months.',
      ca: 'Amb ITV desfavorable només es permet circular per anar al taller i tornar a la ITV en un termini de 2 mesos.'
    }
  },
  {
    id: 'doc-003',
    topicId: 'documentation-itv',
    question: {
      es: '¿Dónde debe colocarse obligatoriamente el distintivo adhesivo de la ITV (V-19) en un turismo?',
      en: 'Where must the ITV inspection sticker (V-19) be placed on a passenger car?',
      ca: 'On s’ha de col·locar obligatòriament el distintiu adhesiu de la ITV (V-19) en un turisme?'
    },
    options: {
      es: [
        'En el ángulo superior derecho del parabrisas por su cara interior.',
        'En cualquier esquina visible de la luneta trasera.',
        'Es suficiente con llevarlo guardado junto a la documentación técnica del coche.'
      ],
      en: [
        'In the upper right corner of the front windshield on the inside face.',
        'In any visible corner of the rear windshield.',
        'Keeping it inside the glove compartment with the vehicle documentation is sufficient.'
      ],
      ca: [
        'A l’angle superior dret del parabrisa per la cara interior.',
        'En qualsevol cantonada visible de la lluneta posterior.',
        'És suficient portar-lo desat juntament amb la documentació del cotxe.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El distintivo V-19 debe ir adherido en el ángulo superior derecho del parabrisas por su cara interior para minimizar interferencias con el campo visual.',
      en: 'The V-19 sticker must be affixed in the upper right interior corner of the front windscreen.',
      ca: 'El distintiu V-19 s’ha d’enganxar a l’angle superior dret del parabrisa per la seva cara interior.'
    }
  },
  {
    id: 'doc-004',
    topicId: 'documentation-itv',
    question: {
      es: '¿Qué documentos del vehículo es obligatorio llevar siempre consigo al circular?',
      en: 'Which vehicle documents are legally mandatory to carry at all times while driving?',
      ca: 'Quins documents del vehicle és obligatori portar sempre a sobre en circular?'
    },
    options: {
      es: [
        'Permiso de circulación, tarjeta de ITV en vigor y el carnet de conducir del conductor.',
        'Únicamente el recibo bancario del seguro obligatorio.',
        'El título de propiedad del vehículo y la póliza firmada del seguro a todo riesgo.'
      ],
      en: [
        'Vehicle registration certificate (Permiso de Circulación), valid ITV card, and the driver license.',
        'Only the bank receipt of the compulsory liability insurance.',
        'The vehicle ownership title and the signed comprehensive insurance policy.'
      ],
      ca: [
        'Permís de circulació, targeta d’ITV en vigor i el carnet de conduir del conductor.',
        'Únicament el rebut bancari de l’assegurança obligatòria.',
        'El títol de propietat del vehicle i la pòlissa signada de l’assegurança.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Son preceptivos los 3 documentos (físicos o mediante la app oficial miDGT): Permiso de Conducir, Permiso de Circulación y Tarjeta ITV.',
      en: 'All 3 documents are required (physical or via the official miDGT app): Driver License, Registration Certificate, and valid ITV card.',
      ca: 'Són preceptius els 3 documents: Permís de Conduir, Permís de Circulació i Targeta d’ITV.'
    }
  },
  {
    id: 'doc-005',
    topicId: 'documentation-itv',
    question: {
      es: '¿Cubre el Seguro Obligatorio de Responsabilidad Civil los daños corporales sufridos por el conductor culpable del accidente?',
      en: 'Does compulsory third-party liability insurance cover personal injuries suffered by the driver at fault?',
      ca: 'Cobreix l’Assegurança Obligatòria els danys corporals soferts pel conductor culpable de l’accident?'
    },
    options: {
      es: [
        'No, los daños personales y materiales del conductor causante quedan excluidos del seguro obligatorio.',
        'Sí, indemniza a todos los ocupantes y conductores sin excepción.',
        'Sí, pero únicamente si el conductor llevaba puesto el cinturón de seguridad.'
      ],
      en: [
        'No, personal injuries and vehicle damage of the driver at fault are excluded from compulsory third-party coverage.',
        'Yes, it covers all occupants and drivers without exception.',
        'Yes, but only if the driver was wearing a seatbelt.'
      ],
      ca: [
        'No, els danys personals i materials del conductor causant queden exclosos de la cobertura obligatòria.',
        'Sí, indemnitza tots els ocupants i conductors sense excepció.',
        'Sí, però únicament si el conductor duia posat el cinturó de seguretat.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El Seguro Obligatorio cubre daños a terceros. El conductor causante está excluido salvo que cuente con póliza voluntaria de ocupantes o accidentes de conductor.',
      en: 'Compulsory third-party insurance covers harm and damages inflicted on third parties. The at-fault driver is excluded unless covered by voluntary driver injury policies.',
      ca: 'L’Assegurança Obligatòria cobreix tercers. El conductor culpable no està cobert llevat que tingui una assegurança voluntària d’accidents.'
    }
  },
  {
    id: 'doc-006',
    topicId: 'documentation-itv',
    question: {
      es: 'Si el resultado de la inspección técnica ITV es «Negativa», ¿cómo debe trasladarse el vehículo al taller?',
      en: 'If the ITV inspection outcome is "Negative", how must the vehicle be transferred to a repair shop?',
      ca: 'Si el resultat de la inspecció ITV és «Negativa», com s’ha de traslladar el vehicle al taller?'
    },
    options: {
      es: [
        'Exclusivamente mediante grúa o plataforma de remolque; tiene prohibido rodar por la vía pública.',
        'Rodando por sus propios medios a velocidad no superior a 30 km/h.',
        'Acompañado por un vehículo policial de escolta.'
      ],
      en: [
        'Exclusively by tow truck or flatbed trailer; it is strictly banned from driving on public roads.',
        'Under its own power at speeds not exceeding 30 km/h.',
        'Escorted by a police vehicle.'
      ],
      ca: [
        'Exclusivament amb grua o plataforma de remolc; té prohibit circular per la via pública.',
        'Circulant pels seus propis mitjans a menys de 30 km/h.',
        'Acompanyat per un vehicle policial.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La ITV negativa califica defectos muy graves que entrañan peligro inminente; el vehículo queda inmovilizado y solo puede trasladarse en grúa.',
      en: 'A negative ITV indicates critical defects with imminent danger; the vehicle is immobilized and must only be transported via tow truck.',
      ca: 'La ITV negativa indica defectes molt greus amb perill imminent; el vehicle queda immobilitzat i només pot anar amb grua.'
    }
  },
  {
    id: 'doc-007',
    topicId: 'documentation-itv',
    question: {
      es: '¿Es obligatorio llevar en el vehículo el recibo en papel que acredite el pago de la póliza del seguro obligatorio?',
      en: 'Is it mandatory to carry a physical paper receipt proving payment of compulsory insurance inside the car?',
      ca: 'És obligatori portar al vehicle el rebut físic en paper que acrediti el pagament de l’assegurança obligatòria?'
    },
    options: {
      es: [
        'No, ya que los agentes comprueban su vigencia de forma telemática a través del FIVA.',
        'Sí, es una infracción grave no llevar el recibo del banco sellado.',
        'Solo es obligatorio para vehículos con más de 10 años de antigüedad.'
      ],
      en: [
        'No, traffic officers verify policy status electronically via the FIVA vehicle insurance registry.',
        'Yes, it is a severe violation not carrying a stamped bank receipt.',
        'Only mandatory for vehicles over 10 years old.'
      ],
      ca: [
        'No, ja que els agents comproven la vigència de forma telemàtica mitjançant el FIVA.',
        'Sí, no portar el rebut segellat és infracció greu.',
        'Només per a cotxes de més de 10 anys.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La posesión del seguro obligatorio es verificada directamente por las autoridades mediante el Fichero Informativo de Vehículos Asegurados (FIVA).',
      en: 'Compulsory insurance coverage is checked electronically roadside through the central FIVA database.',
      ca: 'L’assegurança es comprova directament per via telemàtica a través del registre FIVA.'
    }
  },
  {
    id: 'doc-008',
    topicId: 'documentation-itv',
    question: {
      es: 'Un remolque ligero (MMA no superior a 750 kg), ¿precisa permiso de circulación propio y matrícula independiente?',
      en: 'Does a light trailer (GVWR not exceeding 750 kg) require its own registration document and separate license plate?',
      ca: 'Un remolc lleuger (MMA fins a 750 kg), requereix permís de circulació propi i matrícula independent?'
    },
    options: {
      es: [
        'No, solo lleva la misma matrícula del vehículo tractor y la tarjeta ITV del remolque.',
        'Sí, debe llevar una matrícula roja propia con la letra R.',
        'Sí, requiere pasar la ITV cada año desde el primer día.'
      ],
      en: [
        'No, it only displays the towing vehicle’s license plate and carries its own trailer ITV card.',
        'Yes, it must display a separate red plate starting with R.',
        'Yes, annual ITV inspections are mandatory from day one.'
      ],
      ca: [
        'No, només porta la matrícula del vehicle tractor i la targeta d’ITV del remolc.',
        'Sí, ha de portar matrícula vermella pròpia amb la lletra R.',
        'Sí, requereix ITV anual des del primer dia.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los remolques ligeros (MMA hasta 750 kg) no llevan matrícula propia ni permiso de circulación independiente; llevan la placa del coche tractor y su tarjeta ITV.',
      en: 'Light trailers (up to 750 kg) do not require independent registration certificates; they duplicate the towing car plate and carry a trailer ITV card.',
      ca: 'Els remolcs lleugers (fins a 750 kg) repeteixen la matrícula del vehicle tractor i porten fitxa tècnica pròpia.'
    }
  },
  {
    id: 'doc-009',
    topicId: 'documentation-itv',
    question: {
      es: '¿Qué placa de matrícula debe llevar obligatoriamente un remolque no ligero (MMA superior a 750 kg)?',
      en: 'What license plate setup must a heavy non-light trailer (GVWR exceeding 750 kg) display?',
      ca: 'Quina placa de matrícula ha de portar obligatòriament un remolc no lleuger (MMA superior a 750 kg)?'
    },
    options: {
      es: [
        'Una placa roja con la letra R propia del remolque, además de la placa ordinaria del vehículo tractor.',
        'Únicamente una placa amarilla reflexiva.',
        'Solo la placa idéntica del coche que lo arrastra.'
      ],
      en: [
        'A dedicated red plate starting with R, in addition to the towing vehicle’s standard white plate.',
        'Exclusively a reflective yellow plate.',
        'Only the duplicate plate of the towing vehicle.'
      ],
      ca: [
        'Una placa vermella amb la lletra R pròpia del remolc, a més de la placa del vehicle tractor.',
        'Únicament una placa groga reflectant.',
        'Només la placa del cotxe que l’arrossega.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los remolques pesados (MMA > 750 kg) tienen matrícula propia de fondo rojo con letra R y deben exhibirla junto a la matrícula del vehículo tractor.',
      en: 'Heavy trailers (> 750 kg) have independent registration, carrying their own red "R" plate alongside the car’s standard plate.',
      ca: 'Els remolcs pesants (> 750 kg) estan matriculats pel seu compte amb placa vermella R i acompanyen la placa del tractor.'
    }
  },
  {
    id: 'doc-010',
    topicId: 'documentation-itv',
    question: {
      es: 'Con el permiso de conducción de la clase B, ¿qué vehículos de transporte de personas está autorizado a conducir?',
      en: 'With a Class B driving license, which passenger transport vehicles are you authorized to drive?',
      ca: 'Amb el permís de la classe B, quins vehicles de transport de viatgers es poden conduir?'
    },
    options: {
      es: [
        'Automóviles diseñados para el transporte de no más de 8 pasajeros además del conductor.',
        'Vehículos de hasta 12 pasajeros.',
        'Autobuses urbanos de hasta 16 plazas sin remolque.'
      ],
      en: [
        'Automobiles designed and constructed for carrying up to 8 passengers in addition to the driver.',
        'Vehicles carrying up to 12 passengers.',
        'City buses with up to 16 seats without trailers.'
      ],
      ca: [
        'Automòbils dissenyats per al transport de no més de 8 passatgers a més del conductor.',
        'Vehicles de fins a 12 passatgers.',
        'Autobusos de fins a 16 places.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El permiso B autoriza a conducir vehículos destinados al transporte de personas cuya masa máxima no supere los 3.500 kg y con un máximo de 8 plazas más la del conductor (9 en total).',
      en: 'A Category B license covers passenger vehicles with a maximum weight up to 3,500 kg and up to 8 seats excluding the driver (9 total).',
      ca: 'El permís B autoritza conduir vehicles de fins a 3.500 kg de MMA i un màxim de 8 seients a més del conductor (9 places en total).'
    }
  },
  {
    id: 'doc-011',
    topicId: 'documentation-itv',
    question: {
      es: '¿Está autorizado el titular de un permiso B con más de 3 años de antigüedad a conducir motocicletas de hasta 125 cc en España?',
      en: 'Is a Category B license holder with over 3 years of experience authorized to ride motorcycles up to 125 cc in Spain?',
      ca: 'Pot el titular d’un permís B amb més de 3 anys d’antiguitat conduir motocicletes de fins a 125 cc a Espanya?'
    },
    options: {
      es: [
        'Sí, en territorio nacional puede conducir las motocicletas que autoriza el permiso A1 (hasta 125 cc y 11 kW).',
        'No, en ningún caso sin aprobar un examen práctico de moto.',
        'Sí, pero únicamente con un acompañante que tenga carnet A.'
      ],
      en: [
        'Yes, within national territory they may ride motorcycles covered by the A1 license (up to 125 cc and 11 kW).',
        'No, under no circumstances without passing a motorcycle road exam.',
        'Yes, but only carrying a passenger who holds an A license.'
      ],
      ca: [
        'Sí, en territori espanyol pot conduir motocicletes autoritzades pel permís A1 (fins a 125 cc i 11 kW).',
        'No, sota cap concepte sense examen pràctic de moto.',
        'Sí, però només acompanyat d’un titular del permís A.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Tener más de 3 años de antigüedad con el permiso de la clase B convalida en España la conducción de motos de hasta 125 cc y 11 kW (carnet A1).',
      en: 'Holding a Spanish category B license for more than 3 years grants authorization to ride A1-tier 125 cc / 11 kW motorcycles within Spain.',
      ca: 'Tenir més de 3 anys d’antiguitat amb el carnet B convalida a Espanya la conducció de motos de fins a 125 cc (A1).'
    }
  },
  {
    id: 'doc-012',
    topicId: 'documentation-itv',
    question: {
      es: '¿Qué plazo tiene el comprador de un vehículo de segunda mano para solicitar la transferencia y expedición del nuevo permiso de circulación?',
      en: 'What deadline does a used vehicle buyer have to apply for vehicle transfer and a new registration certificate?',
      ca: 'Quin termini té el comprador d’un vehicle de segona mà per tramitar el canvi de nom del permís de circulació?'
    },
    options: {
      es: ['30 días desde la firma del contrato de compraventa.', '15 días naturales.', '60 días.'],
      en: ['30 days from signing the purchase agreement.', '15 calendar days.', '60 days.'],
      ca: ['30 dies des de la signatura del contracte.', '15 dies naturals.', '60 dies.']
    },
    correctIndex: 0,
    explanation: {
      es: 'El adquirente del vehículo dispone legalmente de 30 días para solicitar ante la Jefatura de Tráfico la renovación del permiso de circulación a su nombre.',
      en: 'The buyer is legally required to finalize the transfer of ownership at the traffic authority within 30 days.',
      ca: 'El comprador té un termini de 30 dies per tramitar la transferència davant la Prefectura de Trànsit.'
    }
  },
  {
    id: 'doc-013',
    topicId: 'documentation-itv',
    question: {
      es: 'Si un conductor cambia de domicilio habitual, ¿qué plazo tiene para comunicarlo a la Jefatura de Tráfico?',
      en: 'If a driver changes their official home address, what is the deadline to notify the Traffic Authority?',
      ca: 'Si un conductor canvia de domicili habitual, quin termini té per comunicar-ho a Trànsit?'
    },
    options: {
      es: ['15 días naturales.', '30 días.', 'No es obligatorio comunicarlo hasta renovar el carnet.'],
      en: ['15 calendar days.', '30 days.', 'Notification is not mandatory until license renewal.'],
      ca: ['15 dies naturals.', '30 dies.', 'No cal comunicar-ho fins a renovar el permís.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Cualquier variación en el domicilio debe comunicarse a la Dirección General de Tráfico en un plazo máximo de 15 días.',
      en: 'Any change in permanent address must be officially reported to the DGT within 15 calendar days.',
      ca: 'Qualsevol canvi de domicili s’ha de notificar a la DGT en un termini màxim de 15 dies.'
    }
  },
  {
    id: 'doc-014',
    topicId: 'documentation-itv',
    question: {
      es: '¿Tienen validez legal la documentación del coche y el permiso de conducir mostrados a través de la aplicación oficial miDGT?',
      en: 'Do digital driving licenses and car documents shown through the official miDGT mobile application carry full legal validity in Spain?',
      ca: 'Té validesa legal la documentació mostrada mitjançant l’aplicació oficial miDGT?'
    },
    options: {
      es: [
        'Sí, en todo el territorio español tiene idéntica validez jurídica que los documentos físicos originales.',
        'No, solo sirve a título meramente informativo ante las aseguradoras.',
        'Solo si se acompaña de una fotocopia compulsada.'
      ],
      en: [
        'Yes, throughout Spanish territory it holds identical legal validity to physical original paperwork.',
        'No, it serves solely informational purposes for insurance companies.',
        'Only if accompanied by a certified physical photocopy.'
      ],
      ca: [
        'Sí, a tot el territori espanyol té la mateixa validesa jurídica que els documents físics originals.',
        'No, només és informatiu.',
        'Només si s’acompanya de còpia compulsada.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La aplicación oficial miDGT permite circular legalmente por España portando el permiso de conducir y la documentación del vehículo de forma digital verificada.',
      en: 'The miDGT app is officially certified by the Spanish Government to verify digital driving credentials across all domestic checkpoints.',
      ca: 'L’app miDGT té plena validesa legal a tot Espanya per acreditar el permís de conduir i del vehicle.'
    }
  },
  {
    id: 'doc-015',
    topicId: 'documentation-itv',
    question: {
      es: 'Con el permiso B, ¿cuál es el peso máximo que puede tener un conjunto compuesto por un turismo y un remolque no ligero sin autorizaciones especiales?',
      en: 'With a Class B license, what is the maximum combined weight for a car towing a non-light trailer without extra endorsements?',
      ca: 'Amb el permís B, quin pes màxim pot tenir un conjunt de turisme i remolc no lleuger sense autorització especial?'
    },
    options: {
      es: [
        '3.500 kg de Masa Máxima Autorizada (MMA) conjunta.',
        '4.250 kg.',
        '5.000 kg.'
      ],
      en: [
        '3,500 kg combined Gross Vehicle Weight Rating (GVWR).',
        '4,250 kg.',
        '5,000 kg.'
      ],
      ca: [
        '3.500 kg de Massa Màxima Autoritzada (MMA) conjunta.',
        '4.250 kg.',
        '5.000 kg.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Con el permiso B ordinario, si el remolque supera los 750 kg, la suma de las masas máximas autorizadas (coche + remolque) no puede exceder los 3.500 kg.',
      en: 'With a standard B license, when towing a trailer exceeding 750 kg, the total combined weight of car plus trailer cannot exceed 3,500 kg.',
      ca: 'Amb el permís B, si el remolc supera els 750 kg, el conjunt no pot excedir els 3.500 kg de MMA.'
    }
  },
  {
    id: 'doc-016',
    topicId: 'documentation-itv',
    question: {
      es: 'Si un vehículo se encuentra dado de baja temporal voluntaria en Tráfico, ¿está obligado a pasar la ITV periódica?',
      en: 'If a vehicle is officially placed under temporary voluntary withdrawal (baja temporal) at the DGT, is it required to pass periodic ITV?',
      ca: 'Si un vehicle està en situació de baixa temporal voluntària, està obligat a passar la ITV periòdica?'
    },
    options: {
      es: [
        'No, mientras se encuentre de baja temporal no está obligado a pasar la ITV ni a tener seguro, pero no puede circular ni estar en la calle.',
        'Sí, la ITV debe pasarse siempre con independencia del estado de baja.',
        'Debe pasar una revisión especial cada 6 meses.'
      ],
      en: [
        'No, while temporarily decommissioned it is exempt from ITV and insurance, but cannot be driven or parked on public streets.',
        'Yes, periodic ITV is required regardless of decommission status.',
        'It must undergo an inspection every 6 months.'
      ],
      ca: [
        'No, mentre estigui de baixa temporal no ha de passar la ITV ni tenir assegurança, però no pot trepitjar la via pública.',
        'Sí, la ITV és obligatòria sempre.',
        'Ha de passar una revisió cada 6 mesos.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Un vehículo dado de baja temporal está exento de ITV y seguro, debiendo permanecer siempre guardado en una propiedad privada cerrada fuera de la vía pública.',
      en: 'A temporarily decommissioned vehicle is exempt from inspection and insurance, but must strictly be kept on private property off public roads.',
      ca: 'Els vehicles de baixa temporal no necessiten ITV ni assegurança, però han de romandre sempre en un recinte privat.'
    }
  },
  {
    id: 'doc-017',
    topicId: 'documentation-itv',
    question: {
      es: '¿Cada cuántos años debe renovar el permiso de conducir de la clase B una persona menor de 65 años?',
      en: 'Every how many years must a person under 65 years of age renew their Category B driving license?',
      ca: 'Cada quants anys ha de renovar el permís de la classe B una persona menor de 65 anys?'
    },
    options: {
      es: ['Cada 10 años.', 'Cada 5 años.', 'Cada 8 años.'],
      en: ['Every 10 years.', 'Every 5 years.', 'Every 8 years.'],
      ca: ['Cada 10 anys.', 'Cada 5 anys.', 'Cada 8 anys.']
    },
    correctIndex: 0,
    explanation: {
      es: 'Para menores de 65 años, la vigencia del permiso de conducción B es de 10 años. A partir de los 65 años, la renovación pasa a ser cada 5 años.',
      en: 'For drivers under 65, category B licenses are valid for 10 years. Once reaching 65, validity drops to every 5 years.',
      ca: 'Per a menors de 65 anys, la validesa del permís B és de 10 anys. A partir dels 65 anys es renova cada 5 anys.'
    }
  },
  {
    id: 'doc-018',
    topicId: 'documentation-itv',
    question: {
      es: '¿Se permite circular legalmente con el resguardo provisional emitido por la autoescuela o la DGT tras aprobar el examen práctico?',
      en: 'Is it legal to drive with the provisional paper receipt issued after passing the practical driving test?',
      ca: 'Es permet circular legalment amb el resguard provisional expedit en aprovar l’examen pràctic?'
    },
    options: {
      es: [
        'Sí, tiene una validez máxima de 3 meses y autoriza a circular exclusivamente por el territorio español.',
        'Sí, y autoriza a conducir por todos los países de la Unión Europea.',
        'No, es imprescindible esperar a tener la tarjeta de plástico en la mano.'
      ],
      en: [
        'Yes, it is valid for up to 3 months and permits driving exclusively within Spanish national territory.',
        'Yes, and it permits driving across all European Union member states.',
        'No, driving is forbidden until receiving the physical plastic card.'
      ],
      ca: [
        'Sí, té validesa durant un màxim de 3 mesos i només autoritza a circular per territori espanyol.',
        'Sí, i permet conduir per tota la Unió Europea.',
        'No, cal esperar la targeta de plàstic definitiva.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La autorización provisional de conducir tiene una vigencia legal de 3 meses pero solo faculta para circular dentro del territorio español.',
      en: 'Provisional permits grant driving privileges for up to 3 months, restricted strictly within Spanish territory.',
      ca: 'L’autorització provisional és vàlida durant 3 mesos exclusivament dins del territori espanyol.'
    }
  },
  {
    id: 'doc-019',
    topicId: 'documentation-itv',
    question: {
      es: 'Al realizar una reforma de importancia en el vehículo (como instalar un enganche de remolque o lunas tintadas):',
      en: 'When making a major modification to the vehicle (such as fitting a tow hitch or window tints):',
      ca: 'En fer una reforma d’importància al vehicle (com instal·lar una bola de remolc o vidres tintats):'
    },
    options: {
      es: [
        'Es obligatorio someter el vehículo a una inspección técnica extraordinaria en la ITV para legalizar la reforma.',
        'No hace falta comunicar nada mientras la pieza sea comprada en la Unión Europea.',
        'Basta con llevar la factura del taller en la guantera.'
      ],
      en: [
        'It is mandatory to submit the vehicle to an extraordinary ITV inspection to homologate the modification.',
        'No notification is needed as long as the component was purchased in the European Union.',
        'Keeping the garage receipt in the glove compartment is sufficient.'
      ],
      ca: [
        'És obligatori sotmetre el vehicle a una inspecció tècnica extraordinària a la ITV per homologar-la.',
        'No cal fer res si la peça és de la Unió Europea.',
        'N’hi ha prou amb portar la factura del taller al cotxe.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Cualquier modificación sustancial exige homologación de taller e inspección extraordinaria en la estación ITV para inscribirla en la tarjeta técnica.',
      en: 'Any major alteration requires garage certification and an extraordinary ITV inspection to annotate it on the vehicle technical sheet.',
      ca: 'Qualsevol reforma substancial requereix passar una ITV extraordinària per legalitzar-la a la fitxa tècnica.'
    }
  },
  {
    id: 'doc-020',
    topicId: 'documentation-itv',
    question: {
      es: '¿Qué información esencial consta registrada en el Permiso de Circulación de un turismo?',
      en: 'What essential information is recorded on a passenger car’s Registration Certificate (Permiso de Circulación)?',
      ca: 'Quina informació essencial consta al Permís de Circulació d’un turisme?'
    },
    options: {
      es: [
        'La matrícula, número de bastidor (VIN), fecha de matriculación y datos del titular del vehículo.',
        'El historial de multas de tráfico acumuladas.',
        'El nombre de la compañía aseguradora del vehículo.'
      ],
      en: [
        'License plate, vehicle identification number (VIN), registration date, and registered owner details.',
        'The accumulated log of historical traffic fines.',
        'The name of the vehicle’s insurance company.'
      ],
      ca: [
        'La matrícula, número de bastidor (VIN), data de primera matriculació i dades del titular.',
        'L’historial de sancions de trànsit acumulades.',
        'El nom de la companyia asseguradora.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El Permiso de Circulación acredita la aptitud jurídica del vehículo para circular, recogiendo matrícula, titular, masa y número de bastidor.',
      en: 'The registration certificate proves legal authorization for road use, detailing the license plate, owner, weight, and chassis number.',
      ca: 'El Permís de Circulació acredita l’aptitud per circular i conté dades del titular, matrícula i bastidor.'
    }
  },
  {
    id: 'doc-021',
    topicId: 'documentation-itv',
    question: {
      es: '¿Puede un agente de tráfico retener el permiso de conducir de un conductor?',
      en: 'Can a traffic officer seize a driver’s license roadside?',
      ca: 'Pot un agent de trànsit retenir el permís de conduir a un conductor?'
    },
    options: {
      es: [
        'Sí, en caso de pérdida total de puntos, caducidad, alcoholemia positiva o indicios racionales de falsedad.',
        'No, bajo ninguna circunstancia un agente puede retirarlo físicamente.',
        'Solo si el vehículo no ha pasado la ITV.'
      ],
      en: [
        'Yes, upon zero point balance, expiration, positive alcohol/drug tests, or suspicion of forgery.',
        'No, under no circumstances may an officer confiscate physical credentials.',
        'Only if the vehicle has missed its scheduled ITV.'
      ],
      ca: [
        'Sí, en cas de pèrdua total de punts, caducitat, alcoholèmia positiva o falsificació.',
        'No, en cap cas un agent pot retirar-lo físicament.',
        'Només si el vehicle no té la ITV passada.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Los agentes pueden intervenir el permiso si ha caducado, si el conductor carece de saldo de puntos o cuando concurran causas legales de suspensión penal o administrativa.',
      en: 'Officers are empowered to confiscate licenses when revoked, expired, exhausted of points, or involved in serious criminal offenses.',
      ca: 'Els agents poden retirar el permís si està caducat, sense punts o per delictes contra la seguretat vial.'
    }
  },
  {
    id: 'doc-022',
    topicId: 'documentation-itv',
    question: {
      es: 'En caso de extravío o robo del permiso de conducción, ¿qué trámite debe realizarse?',
      en: 'In the event of a lost or stolen driver’s license, what administrative procedure must be carried out?',
      ca: 'En cas de pèrdua o robatori del permís de conduir, quin tràmit s’ha de realitzar?'
    },
    options: {
      es: [
        'Solicitar un duplicado ante la Jefatura Provincial de Tráfico o por la sede electrónica de la DGT.',
        'Volver a examinarse de la prueba teórica general.',
        'No hace falta hacer nada si se conserva el DNI.'
      ],
      en: [
        'Request a duplicate via the DGT provincial headquarters or its online digital portal.',
        'Re-sit and pass the theoretical driving examination.',
        'No action is needed as long as you hold an official ID card.'
      ],
      ca: [
        'Demanar un duplicat a la Prefectura Provincial de Trànsit o per la seu electrònica de la DGT.',
        'Tornar a examinar-se de la prova teòrica general.',
        'No cal fer res si es té el DNI.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Ante pérdida, sustracción o deterioro, debe solicitarse inmediatamente un duplicado sin necesidad de repetir las pruebas de examen.',
      en: 'Loss, theft, or wear requires requesting an official duplicate from the DGT without re-taking driving tests.',
      ca: 'En cas de robatori o pèrdua cal sol·licitar un duplicat a la DGT sense necessitat de repetir exàmens.'
    }
  },
  {
    id: 'doc-023',
    topicId: 'documentation-itv',
    question: {
      es: '¿Qué consecuencia legal tiene circular con un vehículo cuya ITV ha caducado?',
      en: 'What is the legal consequence of driving a vehicle whose ITV inspection has expired?',
      ca: 'Quina conseqüència legal té circular amb un vehicle amb la ITV caducada?'
    },
    options: {
      es: [
        'Sanción económica de 200 euros y obligación de pasar la inspección de forma inmediata.',
        'Retirada inmediata de 4 puntos del permiso de conducir.',
        'Inmovilización del vehículo en un depósito municipal durante 1 mes.'
      ],
      en: [
        'A 200-euro economic fine and obligation to undergo technical inspection immediately.',
        'Immediate deduction of 4 points from the driver’s license.',
        'Impoundment of the vehicle in a municipal depot for 1 month.'
      ],
      ca: [
        'Multa econòmica de 200 euros i obligació de passar la revisió immediatament.',
        'Retirada immediata de 4 punts del permís de conduir.',
        'Immobilització del vehicle durant 1 mes.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'Circular con la ITV caducada se sanciona con 200 euros de multa económica (sin retirada de puntos). No existe ningún periodo de gracia tras la fecha de vencimiento.',
      en: 'Driving with an expired ITV incurs a 200 € fine (no points deducted). There is zero grace period past the stamped expiry date.',
      ca: 'Circular amb la ITV caducada comporta 200 euros de sanció econòmica sense pèrdua de punts; no hi ha període de gràcia.'
    }
  },
  {
    id: 'doc-024',
    topicId: 'documentation-itv',
    question: {
      es: 'Para conducir un vehículo por países fuera de la Unión Europea que no tengan convenio bilateral con España, se requiere:',
      en: 'To drive across countries outside the European Union without bilateral agreements with Spain, what is required?',
      ca: 'Per conduir per països de fora de la Unió Europea sense conveni amb Espanya, cal:'
    },
    options: {
      es: [
        'Obtener el Permiso Internacional de Conducir emitido por la DGT.',
        'Únicamente traducir el carnet con un traductor jurado.',
        'No es posible conducir en el extranjero con carnet español.'
      ],
      en: [
        'Obtain an International Driving Permit (IDP) issued by the DGT.',
        'Merely translate the license through a sworn certified translator.',
        'Driving abroad is never permitted with a Spanish driving license.'
      ],
      ca: [
        'Obtenir el Permís Internacional de Conduir expedit per la DGT.',
        'Traduir el carnet per un intèrpret jurat.',
        'No és possible conduir a l’estranger.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'El Permiso Internacional es una cartilla multilingüe emitida por la DGT con validez de un año para conducir fuera del marco de la UE y convenios.',
      en: 'The International Driving Permit is a multi-language credential issued by the DGT, valid for 1 year outside EU territories.',
      ca: 'El Permís Internacional expedit per la DGT és vàlid durant 1 any per conduir fora de la UE.'
    }
  },
  {
    id: 'doc-025',
    topicId: 'documentation-itv',
    question: {
      es: 'Si un conductor novel comete una infracción con detracción de puntos durante su primer año, ¿debe retirar la placa «L» (señal V-13)?',
      en: 'If a novice driver commits a point-deducting infraction during their first year, must they remove the "L" plate (signal V-13)?',
      ca: 'Si un conductor novell perd punts durant el seu primer any, ha de treure la placa «L» (senyal V-13)?'
    },
    options: {
      es: [
        'No, la placa «L» debe llevarse obligatoriamente durante un año completo desde la obtención del permiso, con independencia de las sanciones.',
        'Sí, se le retira la condición de conductor novel de forma inmediata.',
        'Debe cambiar la placa blanca por una placa amarilla durante 6 meses.'
      ],
      en: [
        'No, the "L" plate is mandatory for one full continuous year from license issuance, regardless of infractions.',
        'Yes, novice driver status is stripped immediately.',
        'They must swap the white plate for a yellow one for 6 months.'
      ],
      ca: [
        'No, la placa «L» és obligatòria durant un any sencer des de l’obtenció del carnet, independentment de les sancions.',
        'Sí, perd la condició de novell.',
        'Ha de canviar la placa per una de color groc.'
      ]
    },
    correctIndex: 0,
    explanation: {
      es: 'La placa V-13 («L») es obligatoria durante los primeros 12 meses de permiso; las sanciones restan puntos de su saldo pero no alteran el cómputo de la placa.',
      en: 'The V-13 ("L") plate remains compulsory for exactly 12 months following initial license acquisition regardless of penalties.',
      ca: 'La placa «L» s’ha de dur durant exactament 1 any des de l’obtenció del primer permís, sense que les multes modifiquin aquest termini.'
    }
  }
];