import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'uploadform',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: "../public/buildfolder"
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
