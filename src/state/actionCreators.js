import * as types from "./actionTypes";

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: types.REMOVE_FEATURE }
};

export const buyItem = item => {
// dipsatch an action here to add an item
    return { type: types.ADD_FEATURE };
};

export const removeAllFeatures = () => {
    return { type: types.REMOVE_ALL_FEATURES };
};