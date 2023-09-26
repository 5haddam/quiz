import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const isAuthChangeAction = createAction(`${moduleName}/isAuthChangeAction`, (payload) => ({ payload }));
const setUserData = createAction(`${moduleName}/setUserData`, (payload) => ({ payload }));
const setRaitingDataAction = createAction(`${moduleName}/setRaitingDataAction`, (payload) => ({ payload }));

export default {
  isAuthChangeAction,
  setRaitingDataAction,
  setUserData,
};
