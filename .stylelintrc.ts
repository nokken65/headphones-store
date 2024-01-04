import type {Config} from 'stylelint'

const config:Config =  {
  extends: '@it-incubator/stylelint-config',
  rules: {
    'property-no-vendor-prefix': null
  }
};

export default config