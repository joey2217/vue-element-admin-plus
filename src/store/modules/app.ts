import { Module } from 'vuex';
import { RootState } from '../index';

export interface AppState {
  isCollapse: boolean;
}
const initState: () => AppState = () => ({
  isCollapse: false,
});

const app: Module<AppState, RootState> = {
  state: initState(),
};

export default app;
