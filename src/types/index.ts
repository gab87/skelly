export type SkellyAnimation = 'shiny' | 'flicker' | 'none';


export interface SkellyProps {
  /** CSS border shorthand */
  border?: string;
  /** Background color of the skeleton */
  background?: string;
  /** Override color for the grey elements */
  color?: string;
  /** Animation type */
  animation?: SkellyAnimation;
  /** Animation speed duration in milliseconds (applies to shiny and flicker only) */
  speed?: number;
}
