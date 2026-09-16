'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import TrafficSign from '@/components/TrafficSign';
import { 
  Search, 
  X, 
  ArrowLeft,
  Info,
  Sparkles
} from 'lucide-react';

interface SignData {
  id: string;
  code: string;
  category: 'danger' | 'priority' | 'prohibition' | 'mandatory' | 'indication';
  name: { es: string; en: string; ca: string };
  meaning: { es: string; en: string; ca: string };
  ruleNote?: { es: string; en: string; ca: string };
}

const OFFICIAL_SIGNS: SignData[] = [
  // Danger / Warning (P-Series)
  {
    id: 'p-1',
    code: 'P-1',
    category: 'danger',
    name: {
      es: 'Intersección con prioridad de la derecha',
      en: 'Intersection with priority to the right',
      ca: 'Intersecció amb prioritat de la dreta'
    },
    meaning: {
      es: 'Peligro por la proximidad de una intersección en la que rige la regla general de ceder el paso a los vehículos que se aproximen por la derecha.',
      en: 'Danger due to proximity to an intersection where the universal rule of yielding to traffic approaching from the right applies.',
      ca: 'Perill per la proximitat d’una intersecció on regeix la norma general de cedir el pas als vehicles que vinguin per la dreta.'
    },
    ruleNote: {
      es: 'Aplica en ausencia de agentes, semáforos u otras señales verticales de prioridad.',
      en: 'Applies in the absence of traffic officers, signals, or vertical priority signs.',
      ca: 'Aplica en absència d’agents, semàfors o altres senyals verticals de prioritat.'
    }
  },
  {
    id: 'p-15',
    code: 'P-15',
    category: 'danger',
    name: {
      es: 'Perfil irregular / Badén / Resalto',
      en: 'Uneven road / Speed bump',
      ca: 'Perfil irregular / Ressalt'
    },
    meaning: {
      es: 'Peligro por la proximidad de un resalto, badén o pavimento en mal estado que aconseja reducir la velocidad.',
      en: 'Danger due to the proximity of a speed bump, dip, or damaged road surface requiring reduced speed.',
      ca: 'Perill per la proximitat d’un ressalt, gual o paviment en mal estat que aconsella reduir la velocitat.'
    }
  },
  {
    id: 'p-17',
    code: 'P-17',
    category: 'danger',
    name: {
      es: 'Estrechamiento de calzada',
      en: 'Road narrows',
      ca: 'Estretament de calçada'
    },
    meaning: {
      es: 'Peligro por la proximidad de una zona de la vía donde la calzada se estrecha en ambos lados.',
      en: 'Danger due to approaching a section where the roadway narrows from both sides.',
      ca: 'Perill per la proximitat d’un tram on la calçada s’estreny pels dos costats.'
    }
  },
  {
    id: 'p-20',
    code: 'P-20',
    category: 'danger',
    name: {
      es: 'Paso para peatones',
      en: 'Pedestrian crossing',
      ca: 'Pas per a vianants'
    },
    meaning: {
      es: 'Peligro por la proximidad de un paso de peatones señalizado donde tienen prioridad absoluta.',
      en: 'Danger due to approaching a designated pedestrian crossing where pedestrians hold absolute right of way.',
      ca: 'Perill per la proximitat d’un pas de vianants senyalitzat on tenen prioritat absoluta.'
    }
  },
  {
    id: 'p-21',
    code: 'P-21',
    category: 'danger',
    name: {
      es: 'Paso de niños / Zona escolar',
      en: 'Children crossing / School zone',
      ca: 'Pas de nens / Zona escolar'
    },
    meaning: {
      es: 'Peligro por la proximidad de un lugar frecuentado por niños, como escuelas o parques de juegos.',
      en: 'Danger due to proximity to areas frequented by children, such as schools or playgrounds.',
      ca: 'Perill per la proximitat d’un indret freqüentat per infants com escoles o zones de joc.'
    }
  },
  {
    id: 'p-25',
    code: 'P-25',
    category: 'danger',
    name: {
      es: 'Circulación en los dos sentidos',
      en: 'Two-way traffic',
      ca: 'Circulació en ambdós sentits'
    },
    meaning: {
      es: 'Peligro por la proximidad de un tramo donde la circulación se realiza provisional o definitivamente en ambos sentidos.',
      en: 'Danger due to entering a road section where traffic flows in both directions.',
      ca: 'Perill per la proximitat d’un tram on la circulació es realitza en ambdós sentits.'
    }
  },

  // Priority (R-Series)
  {
    id: 'r-1',
    code: 'R-1',
    category: 'priority',
    name: {
      es: 'Ceda el paso',
      en: 'Yield / Give way',
      ca: 'Cedeix el pas'
    },
    meaning: {
      es: 'Obligación para todo conductor de ceder el paso en la próxima intersección a los vehículos que circulen por la vía a la que se aproxima.',
      en: 'Obligation to yield right of way at the upcoming intersection to all vehicles traveling on the intersecting road.',
      ca: 'Obligació per a tot conductor de cedir el pas a la propera intersecció als vehicles de la via preferent.'
    },
    ruleNote: {
      es: 'No exige detención obligatoria si no se aproximan otros vehículos.',
      en: 'Does not require a full stop if the intersecting road is clear.',
      ca: 'No requereix parada obligatòria si no s’apropen altres vehicles.'
    }
  },
  {
    id: 'r-2',
    code: 'R-2',
    category: 'priority',
    name: {
      es: 'Detención obligatoria (STOP)',
      en: 'Mandatory Stop (STOP)',
      ca: 'Detenció obligatòria (STOP)'
    },
    meaning: {
      es: 'Obligación para todo conductor de detener su vehículo completamente ante la línea de detención o inmediatamente antes de la intersección.',
      en: 'Obligation for every driver to bring their vehicle to a complete and total stop before the stop line or intersection.',
      ca: 'Obligació per a tot conductor d’aturar el vehicle completament davant la línia de detenció.'
    },
    ruleNote: {
      es: 'Detención completa al 100% en todo momento, incluso si la visibilidad es perfecta y no viene nadie.',
      en: 'Full 100% stop required at all times, even with perfect visibility and empty lanes.',
      ca: 'Aturada total necessària sempre, fins i tot si la visibilitat és totalment neta.'
    }
  },
  {
    id: 'r-3',
    code: 'R-3',
    category: 'priority',
    name: {
      es: 'Calzada con prioridad',
      en: 'Priority road',
      ca: 'Calçada amb prioritat'
    },
    meaning: {
      es: 'Indica a los conductores que circulan por esta calzada su prioridad en las intersecciones respecto a las vías transversales.',
      en: 'Indicates that drivers on this road have right of way over intersecting roads until cancelled.',
      ca: 'Indica als conductors que circulen per aquesta via la seva prioritat sobre les vies transversals.'
    }
  },

  // Prohibition / Restriction (Circular Red)
  {
    id: 'r-101',
    code: 'R-101',
    category: 'prohibition',
    name: {
      es: 'Entrada prohibida',
      en: 'No entry',
      ca: 'Entrada prohibida'
    },
    meaning: {
      es: 'Prohibición de acceso a toda clase de vehículos.',
      en: 'Access strictly prohibited to all vehicles.',
      ca: 'Prohibició d’accés a tota mena de vehicles.'
    }
  },
  {
    id: 'r-301',
    code: 'R-301',
    category: 'prohibition',
    name: {
      es: 'Velocidad máxima',
      en: 'Maximum speed limit',
      ca: 'Velocitat màxima'
    },
    meaning: {
      es: 'Prohíbe circular a velocidad superior, en kilómetros por hora, a la indicada en la señal.',
      en: 'Prohibits traveling at a speed higher than the number indicated on the sign in km/h.',
      ca: 'Prohibeix circular a velocitat superior a la indicada al senyal en km/h.'
    },
    ruleNote: {
      es: 'Rige desde la señal hasta otra de fin de prohibición o hasta una intersección sin prioridad reiterada.',
      en: 'Enforces from the sign until end-of-restriction or an unregulated junction.',
      ca: 'Regeix des del senyal fins a un altre de final de límit o una intersecció.'
    }
  },
  {
    id: 'r-305',
    code: 'R-305',
    category: 'prohibition',
    name: {
      es: 'Adelantamiento prohibido',
      en: 'Overtaking prohibited',
      ca: 'Avançament prohibit'
    },
    meaning: {
      es: 'Prohibición a todos los vehículos de adelantar a los vehículos de motor de más de dos ruedas.',
      en: 'Prohibits overtaking motor vehicles with more than two wheels.',
      ca: 'Prohibició d’avançar a vehicles de motor de més de dues rodes.'
    },
    ruleNote: {
      es: 'Se permite rebasar a ciclos y ciclomotores si se deja 1,5 m de separación y no se pone en peligro.',
      en: 'Overtaking cyclists is permitted if keeping 1.5 m separation without endangerment.',
      ca: 'Es permet avançar ciclistes mantenint 1,5 m de separació mínima.'
    }
  },
  {
    id: 'r-308',
    code: 'R-308',
    category: 'prohibition',
    name: {
      es: 'Estacionamiento prohibido',
      en: 'No parking',
      ca: 'Estacionament prohibit'
    },
    meaning: {
      es: 'Prohíbe el estacionamiento en el lado de la calzada donde esté situada la señal. Permite la parada.',
      en: 'Prohibits parking on the side of the road where the sign is placed. Stopping under 2 minutes is permitted.',
      ca: 'Prohibeix l’estacionament al costat de la via on estigui situat. Permet la parada.'
    }
  },
  {
    id: 'r-307',
    code: 'R-307',
    category: 'prohibition',
    name: {
      es: 'Parada y estacionamiento prohibido',
      en: 'No stopping and no parking',
      ca: 'Parada i estacionament prohibits'
    },
    meaning: {
      es: 'Prohíbe tanto la parada como el estacionamiento en el lado de la calzada donde esté situada la señal.',
      en: 'Prohibits both stopping and parking on the side of the street where placed.',
      ca: 'Prohibeix tant la parada com l’estacionament al costat senyalitzat.'
    }
  },

  // Mandatory (Circular Blue)
  {
    id: 'r-400a',
    code: 'R-400a',
    category: 'mandatory',
    name: {
      es: 'Sentido obligatorio',
      en: 'Mandatory direction (Straight ahead)',
      ca: 'Sentit obligatori'
    },
    meaning: {
      es: 'Obliga a los conductores a continuar su marcha en la dirección y sentido que indica la flecha.',
      en: 'Requires drivers to follow the exact direction indicated by the arrow.',
      ca: 'Obliga els conductors a circular en la direcció indicada per la fletxa.'
    }
  },
  {
    id: 'r-402',
    code: 'R-402',
    category: 'mandatory',
    name: {
      es: 'Intersección de sentido giratorio obligatorio (Glorieta)',
      en: 'Mandatory roundabout intersection',
      ca: 'Intersecció de sentit giratori obligatori (Rotonda)'
    },
    meaning: {
      es: 'Las flechas indican la dirección del movimiento giratorio que los vehículos deben seguir en la glorieta.',
      en: 'Arrows indicate the mandatory counter-clockwise rotary path drivers must follow in the roundabout.',
      ca: 'Les fletxes indiquen el moviment giratori obligatori que cal seguir a la rotonda.'
    }
  },
  {
    id: 'r-404',
    code: 'R-404',
    category: 'mandatory',
    name: {
      es: 'Calzada para automóviles (excepto motocicletas)',
      en: 'Road reserved for automobiles (excluding motorcycles)',
      ca: 'Calçada per a automòbils (excepte motocicletes)'
    },
    meaning: {
      es: 'Obligación para los conductores de automóviles, excepto motocicletas sin sidecar, de circular por la calzada.',
      en: 'Road reserved strictly for automobiles, excluding two-wheeled motorcycles without sidecars.',
      ca: 'Obligació per a automòbils de circular per aquesta calçada (excloses motocicletes).'
    }
  },

  // General Indication (S-Series)
  {
    id: 's-1',
    code: 'S-1',
    category: 'indication',
    name: {
      es: 'Autopista',
      en: 'Motorway (Autopista)',
      ca: 'Autopista'
    },
    meaning: {
      es: 'Indica el principio de una autopista y la aplicación de sus normas especiales (máx 120 km/h, mín 60 km/h).',
      en: 'Marks the start of a motorway and application of motorway rules (max 120 km/h, min 60 km/h).',
      ca: 'Indica el començament d’una autopista i l’aplicació de les seves normes específiques.'
    }
  },
  {
    id: 's-2',
    code: 'S-2',
    category: 'indication',
    name: {
      es: 'Autovía',
      en: 'Dual carriageway (Autovía)',
      ca: 'Autovia'
    },
    meaning: {
      es: 'Indica el principio de una autovía y la aplicación de las normas especiales de circulación en autovía.',
      en: 'Marks the beginning of an autovía expressway subject to expressway regulations.',
      ca: 'Indica el principi d’una autovia i la regulació corresponent.'
    }
  },
  {
    id: 's-28',
    code: 'S-28',
    category: 'indication',
    name: {
      es: 'Calle residencial (20 km/h)',
      en: 'Residential street / Living street (20 km/h)',
      ca: 'Carrer residencial (20 km/h)'
    },
    meaning: {
      es: 'Indica una zona de circulación especialmente acondicionada para peatones donde rige un límite máximo de 20 km/h y los peatones tienen prioridad.',
      en: 'Indicates a shared living zone where pedestrian priority applies and the maximum speed limit is 20 km/h.',
      ca: 'Indica una zona de circulació preferent per a vianants amb límit màxim de 20 km/h.'
    }
  }
];

export default function SignsCatalogPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inspectedSign, setInspectedSign] = useState<SignData | null>(null);

  const copy = {
    badge: { es: 'Catálogo Oficial DGT', en: 'Official DGT Catalog', ca: 'Catàleg Oficial DGT' },
    title: { es: 'Señales de Tráfico', en: 'Traffic Signs & Signals', ca: 'Senyals de Trànsit' },
    subtitle: {
      es: 'Guía visual completa de señales verticales, prioridad y restricciones para el Permiso B.',
      en: 'Visual field guide of vertical signs, priority rules, and restrictions for the Permiso B license.',
      ca: 'Guia visual completa de senyals verticals, prioritat i restriccions per al Permís B.'
    },
    searchPlaceholder: {
      es: 'Buscar por código, nombre o significado (ej. STOP, 120, glorieta)...',
      en: 'Search by code, title, or rule (e.g., STOP, 120, roundabout)...',
      ca: 'Cercar per codi, nom o significat (ex. STOP, 120, rotonda)...'
    },
    categories: {
      all: { es: 'Todas', en: 'All', ca: 'Totes' },
      danger: { es: 'Peligro (P)', en: 'Danger (P)', ca: 'Perill (P)' },
      priority: { es: 'Prioridad (R)', en: 'Priority (R)', ca: 'Prioritat (R)' },
      prohibition: { es: 'Prohibición (R)', en: 'Prohibition (R)', ca: 'Prohibició (R)' },
      mandatory: { es: 'Obligación (R)', en: 'Mandatory (R)', ca: 'Obligació (R)' },
      indication: { es: 'Indicación (S)', en: 'Indication (S)', ca: 'Indicació (S)' }
    },
    officialRule: { es: 'Regla Oficial DGT', en: 'Official DGT Rule', ca: 'Norma Oficial DGT' },
    inspectTip: { es: 'Toca para ampliar', en: 'Tap to inspect', ca: 'Toca per ampliar' },
    close: { es: 'Cerrar', en: 'Close', ca: 'Tancar' },
    noResults: {
      es: 'No se encontraron señales coincidentes.',
      en: 'No matching traffic signs found.',
      ca: 'No s’han trobat senyals coincidents.'
    },
    backToHome: { es: 'Inicio', en: 'Home', ca: 'Inici' }
  };

  const filteredSigns = useMemo(() => {
    return OFFICIAL_SIGNS.filter((sign) => {
      const matchesCategory = activeCategory === 'all' || sign.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const codeMatch = sign.code.toLowerCase().includes(q);
      const nameMatch = (sign.name[language] || sign.name.es).toLowerCase().includes(q);
      const meaningMatch = (sign.meaning[language] || sign.meaning.es).toLowerCase().includes(q);

      return codeMatch || nameMatch || meaningMatch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-12 transition-colors duration-200">
      {/* Top Banner Header */}
      <div className="mb-6 sm:mb-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{copy.backToHome[language]}</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:border-amber-500/20 dark:text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{copy.badge[language]}</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {copy.title[language]}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {copy.subtitle[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={copy.searchPlaceholder[language]}
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-10 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-sm backdrop-blur-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition-colors dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category Pills Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {(
          ['all', 'danger', 'priority', 'prohibition', 'mandatory', 'indication'] as const
        ).map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-xl px-3.5 py-2 text-xs font-bold transition-all border cursor-pointer ${
                isActive
                  ? 'border-amber-400 bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-white/5 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {copy.categories[cat][language]}
            </button>
          );
        })}
      </div>

      {/* Signs Grid */}
      {filteredSigns.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-12 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
          <Info className="mx-auto h-8 w-8 text-slate-400 mb-2" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{copy.noResults[language]}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSigns.map((sign) => {
            const name = sign.name[language] || sign.name.es;
            const meaning = sign.meaning[language] || sign.meaning.es;

            return (
              <div
                key={sign.id}
                onClick={() => setInspectedSign(sign)}
                className="group cursor-pointer rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all hover:border-amber-400/60 hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between dark:border-white/10 dark:bg-slate-900/60 dark:shadow-lg dark:hover:border-amber-400/40 dark:hover:bg-slate-900/90"
              >
                <div>
                  {/* Card Header: Code & Tip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                      {sign.code}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium group-hover:text-slate-600 transition-colors dark:text-slate-500 dark:group-hover:text-slate-400">
                      {copy.inspectTip[language]}
                    </span>
                  </div>

                  {/* Large Sign Preview Canvas */}
                  <div className="flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/80 p-5 mb-4 group-hover:border-amber-400/30 transition-colors dark:bg-slate-950/70 dark:border-white/5 shadow-inner">
                    <TrafficSign signId={sign.id} className="h-28 w-28 sm:h-32 sm:w-32 drop-shadow-md dark:drop-shadow-xl transition-transform duration-200 group-hover:scale-105" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2 dark:text-white dark:group-hover:text-amber-400">
                    {name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed dark:text-slate-400">
                    {meaning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Inspect Modal Drawer */}
      {inspectedSign && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-md animate-fadeIn dark:bg-slate-950/80"
          onClick={() => setInspectedSign(null)}
        >
          <div 
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xl backdrop-blur-2xl dark:border-white/15 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
              <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400 bg-amber-400/10 px-3 py-1 rounded-xl border border-amber-400/30">
                {inspectedSign.code}
              </span>
              <button
                onClick={() => setInspectedSign(null)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all dark:hover:text-white dark:hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center py-6">
              <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner dark:border-white/10 dark:bg-slate-950/80">
                <TrafficSign signId={inspectedSign.id} className="h-28 w-28 drop-shadow-md dark:drop-shadow-xl" />
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-black text-slate-900 text-center dark:text-white">
              {inspectedSign.name[language] || inspectedSign.name.es}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-center dark:text-slate-300">
              {inspectedSign.meaning[language] || inspectedSign.meaning.es}
            </p>

            {inspectedSign.ruleNote && (
              <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-xs text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-300">
                <strong className="block font-bold text-amber-800 dark:text-amber-400 mb-0.5">
                  {copy.officialRule[language]}:
                </strong>
                {inspectedSign.ruleNote[language] || inspectedSign.ruleNote.es}
              </div>
            )}

            <button
              onClick={() => setInspectedSign(null)}
              className="mt-6 w-full rounded-xl bg-amber-400 py-3 text-xs font-bold text-slate-950 hover:bg-amber-300 shadow-sm transition-all"
            >
              {copy.close[language]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}