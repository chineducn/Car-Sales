import * as types from './actionTypes';
//all reducers
export function featureReducer(addedFeatures = [], action) {
    switch (action.type) {
        case types.ADD_FEATURE: {

        };
        case types.REMOVE_FEATURE: {

        };
        default:
            return addedFeatures;
    }
};