/**
 * Hero Section Statistics Configuration
 * 
 * Update these values to reflect actual statistics for Tinkerz Space.
 */

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: 500, suffix: '+', label: 'Students' },
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '', label: 'Tech Domains' },
  { value: 100, suffix: '%', label: 'Hands-On Learning' },
];
