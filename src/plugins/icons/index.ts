import { App } from 'vue';
import SvgIcon from './SvgIcon.vue';

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
requireAll(req);

export default {
  install: (app: App) => {
    app.component(SvgIcon.name, SvgIcon);
  },
};
