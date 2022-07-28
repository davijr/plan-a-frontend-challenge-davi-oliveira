/* eslint-disable arrow-body-style */
import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingState } from './LoadingState';

export const initialState: LoadingState = {
    show: false
};

export const loadingReducer = createReducer(
    initialState,
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {show: false};
    })
);
