import type { Theme } from './types';

import S, { CSSObject ,CSSProp} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSObject | CSSProp;
  }
}