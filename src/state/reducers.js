import * as types from './actionTypes';

const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },    
  };
const initialFeaturesStock = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
];
console.log(initialFeaturesStock.reduce((accum, feature) => accum + Number(feature.price), 0 ));

//all reducers
export function featureReducer(addedFeatures = [], action) {
    switch (action.type) {
        case types.ADD_FEATURE: {
            return [...addedFeatures, action.payload];            
        }
        case types.REMOVE_FEATURE: {
            return addedFeatures.filter(item => item !== action.payload);
        }
        default:
            return addedFeatures;
    }
};

export function featuresStockReducer(featuresStock = initialFeaturesStock, action) {
    switch (action.type) {
        case types.ADD_FEATURE: {
            return featuresStock.filter(item => item !== action.payload);
        }
        case types.REMOVE_FEATURE: {
            return [...featuresStock, action.payload];
        }
        default:
            return featuresStock;
    }
};