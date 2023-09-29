import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const toogleCurrentThemeAction = createAction(`${moduleName}/toogleCurrentThemeAction`, (payload) => ({ payload }));

export default {
  toogleCurrentThemeAction,
};
