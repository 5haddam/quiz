import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));
const changeViewAction = createAction(`${moduleName}/changeViewAction`, (payload) => ({ payload }));

export default {
  filterAction,
  changeViewAction,
};
