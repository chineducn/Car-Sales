import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import * as reducers from './state/reducers';

const allReducers = combineReducers({
  addedFeatures: reducers.featureReducer,
  featuresStock: reducers.featuresStockReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
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

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
