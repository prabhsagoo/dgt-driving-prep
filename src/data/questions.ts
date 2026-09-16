import { Question } from '@/types';
import { SPEED_REGULATIONS_QUESTIONS } from './modules/speedRegulations';
import { PRIORITY_QUESTIONS } from './modules/priorityRules';
import { VISUAL_SIGN_QUESTIONS } from './modules/signs';
import { ALCOHOL_SAFETY_QUESTIONS } from './modules/alcoholSafety';
import { MANEUVER_QUESTIONS } from './modules/maneuvers';
import { LIGHTING_QUESTIONS } from './modules/lighting';
import { DOCUMENTATION_QUESTIONS } from './modules/documentation';
import { MECHANICS_WEATHER_QUESTIONS } from './modules/mechanicsWeather';

export const SAMPLE_QUESTIONS: Question[] = [
  ...SPEED_REGULATIONS_QUESTIONS,
  ...PRIORITY_QUESTIONS,
  ...VISUAL_SIGN_QUESTIONS,
  ...ALCOHOL_SAFETY_QUESTIONS,
  ...MANEUVER_QUESTIONS,
  ...LIGHTING_QUESTIONS,
  ...DOCUMENTATION_QUESTIONS,
  ...MECHANICS_WEATHER_QUESTIONS,
];