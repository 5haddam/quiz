import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const toogleViewModeAction = createAction(`${moduleName}/toogleViewModeAction`, (payload) => ({ payload }));

export default {
  toogleViewModeAction,
};
