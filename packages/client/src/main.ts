import './style.css';
import { registerBrowserBackAndForth, renderInitialPage } from './content.ts';

(function bootup() {
  registerBrowserBackAndForth();
  renderInitialPage();
})();
