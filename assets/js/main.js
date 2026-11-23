import { siteConfig } from '../../data/site.config.js';
import { setRootVariables } from '../../modules/core/dom.js';
import { applySeo } from '../../modules/core/seo.js';
import { renderApp } from '../../modules/core/render.js';

setRootVariables(siteConfig.theme);
applySeo(siteConfig);
renderApp(siteConfig);
