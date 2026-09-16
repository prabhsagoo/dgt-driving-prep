import { Topic } from '@/types';

export const TOPICS: Topic[] = [
  {
    id: 'speed-limits',
    title: { es: 'Límites de Velocidad', en: 'Speed Limits', ca: 'Límits de Velocitat' },
    description: {
      es: 'Autovías, autopistas, vías urbanas de 30 km/h y plataformas únicas.',
      en: 'Motorways, expressways, urban 30 km/h zones, and single-platform streets.',
      ca: 'Autovies, autopistes, vies urbanes de 30 km/h i plataformes úniques.'
    },
    icon: 'Gauge',
    questionCount: 2
  },
  {
    id: 'priority-roundabouts',
    title: { es: 'Prioridad y Glorietas', en: 'Right of Way & Roundabouts', ca: 'Prioritat i Rotondes' },
    description: {
      es: 'Glorietas, intersecciones no reguladas, ciclistas y cruces.',
      en: 'Roundabouts, uncontrolled junctions, cycling pelotons, and crossings.',
      ca: 'Rotondes, interseccions no regulades, ciclistes i encreuaments.'
    },
    icon: 'CornerUpRight',
    questionCount: 2
  },
  {
    id: 'road-signs',
    title: { es: 'Señales y Semáforos', en: 'Road Signs & Signals', ca: 'Senyals i Semàfors' },
    description: {
      es: 'Jerarquía de señales, marcas amarillas continuas y luces de semáforo.',
      en: 'Signal hierarchy, yellow curb markings, and traffic light signals.',
      ca: 'Jerarquia de senyals, marques grogues i llums de semàfor.'
    },
    icon: 'OctagonAlert',
    questionCount: 5
  },
  {
    id: 'safety-alcohol',
    title: { es: 'Seguridad, Alcohol y Puntos', en: 'Safety, Alcohol & Points', ca: 'Seguretat, Alcohol i Punts' },
    description: {
      es: 'Tasas de alcoholemia, saldo de puntos del conductor novel y protocolo PAS.',
      en: 'Alcohol limits, novice driver points balance, and PAS accident protocol.',
      ca: 'Taxes d’alcoholèmia, punts del conductor novell i protocol PAS.'
    },
    icon: 'ShieldCheck',
    questionCount: 5
  },
  {
    id: 'maneuvers-lanes',
    title: { es: 'Maniobras y Carriles', en: 'Maneuvers & Lanes', ca: 'Maniobres i Carrils' },
    description: {
      es: 'Adelantamiento a ciclistas (1,5 m), marcha atrás y carril en sentido contrario.',
      en: 'Overtaking cyclists (1.5 m), reversing limits (15 m), and reversible lanes.',
      ca: 'Avançament a ciclistes (1,5 m), marxa enrere i carrils reversibles.'
    },
    icon: 'Car',
    questionCount: 4
  },
  {
    id: 'lights-visibility',
    title: { es: 'Alumbrado y Visibilidad', en: 'Lighting & Visibility', ca: 'Enllumenat i Visibilitat' },
    description: {
      es: 'Niebla trasera obligatoria, luces de cruce en túneles y largas.',
      en: 'Rear fog light restrictions, tunnel low beams, and high beam rules.',
      ca: 'Boira posterior obligatòria, creuament en túnels i llargues.'
    },
    icon: 'Lightbulb',
    questionCount: 3
  },
  {
    id: 'documentation-itv',
    title: { es: 'Documentación e ITV', en: 'Documentation & ITV', ca: 'Documentació i ITV' },
    description: {
      es: 'Inspección periódica ITV, documentación obligatoria y fallos desfavorables.',
      en: 'Periodic ITV schedule, compulsory onboard papers, and unfavorable results.',
      ca: 'Inspecció periòdica ITV, documentació obligatòria i fallades desfavorables.'
    },
    icon: 'FileCheck',
    questionCount: 3
  },
  {
    id: 'mechanics-weather',
    title: { es: 'Mecánica y Climatología', en: 'Mechanics & Weather', ca: 'Mecànica i Climatologia' },
    description: {
      es: 'Desgaste mínimo de neumáticos (1,6 mm), aquaplaning y frenado ABS.',
      en: 'Minimum tire tread depth (1.6 mm), aquaplaning dynamics, and ABS braking.',
      ca: 'Desgast mínim de pneumàtics (1,6 mm), aquaplànig i frenada ABS.'
    },
    icon: 'Wrench',
    questionCount: 3
  }
];